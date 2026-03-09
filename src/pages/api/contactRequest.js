import mysql from "mysql2/promise";
import emailContactRequest from "@/util/email_contactRequest";
import validateString from "@/util/inputCheck";

/*
 
CREATE TABLE contact_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_ip VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    email VARCHAR(100) NOT NULL,
    area VARCHAR(50) NOT NULL,
    subject VARCHAR(50) NOT NULL,
    message TEXT NOT NULL,
    privacy_policy BOOLEAN NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    processed BOOLEAN DEFAULT FALSE
)
ENGINE=InnoDB 
DEFAULT CHARSET=utf8mb4 
COLLATE=utf8mb4_unicode_ci 

CREATE TABLE unusual_activity_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_ip VARCHAR(50),
    email VARCHAR(100),
    reason VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE registration_errors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_ip VARCHAR(64),
    form VARCHAR(100),
    email VARCHAR(100),
    error_details JSON NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
ENGINE=InnoDB 
DEFAULT CHARSET=utf8mb4 
COLLATE=utf8mb4_unicode_ci;

CREATE TABLE spam_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_ip VARCHAR(50) NOT NULL,
    name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100),
    area VARCHAR(50),
    subject VARCHAR(100),
    message TEXT,
    spam_reason VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4
COLLATE=utf8mb4_unicode_ci;

 */

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// ─── Spam-Erkennungs-Hilfsfunktionen ────────────────────────────────────────

/**
 * Prüft ob ein String wie eine zufällige Zeichenkette aussieht.
 * Erkennt Muster wie "nXJkkoGmxXTjzzhY" oder "FHNCpSqBhwagwbUqX".
 *
 * Methode: Berechnet den "Wechsel-Score" – wie oft wechselt Groß/Klein?
 * Echte Namen wechseln selten (z.B. "Johannes" = 1x Wechsel),
 * Spam-Strings wechseln ständig (z.B. "nXJkko" = viele Wechsel).
 */
function looksLikeRandomString(str) {
  if (!str || str.length < 6) return false;

  // Nur Buchstaben betrachten
  const letters = str.replace(/[^a-zA-Z]/g, "");
  if (letters.length < 4) return false;

  // Zähle Groß/Klein-Wechsel
  let caseChanges = 0;
  for (let i = 1; i < letters.length; i++) {
    const prevUpper = letters[i - 1] === letters[i - 1].toUpperCase();
    const currUpper = letters[i] === letters[i].toUpperCase();
    if (prevUpper !== currUpper) caseChanges++;
  }

  // Wechsel-Rate: Bei echten Namen typisch < 0.3, bei Spam oft > 0.5
  const changeRate = caseChanges / (letters.length - 1);
  if (changeRate > 0.45) return true;

  // Zusatz: Prüfe auf fehlende Vokale (echte Wörter haben immer Vokale)
  const vowels = (letters.match(/[aeiouäöüAEIOUÄÖÜ]/g) || []).length;
  const vowelRatio = vowels / letters.length;
  if (vowelRatio < 0.15 && letters.length > 6) return true;

  // Zusatz: Viele aufeinanderfolgende Konsonanten (>4) ohne Vokal
  if (/[^aeiouäöüAEIOUÄÖÜ]{5,}/.test(letters)) return true;

  return false;
}

/**
 * Prüft ob eine E-Mail-Domain auf der Blockliste steht
 * oder typische Wegwerf/Spam-Muster hat.
 */
function isBlockedEmailDomain(email) {
  const blockedDomains = [
    // Bekannte Spam-Domains aus den Logs
    "kendallauto.com",
    // Wegwerf-E-Mail-Dienste
    "mailinator.com",
    "guerrillamail.com",
    "tempmail.com",
    "throwam.com",
    "yopmail.com",
    "trashmail.com",
    "sharklasers.com",
    "guerrillamailblock.com",
    "grr.la",
    "guerrillamail.info",
    "spam4.me",
    "dispostable.com",
    "spamgourmet.com",
    "trashmail.me",
    "maildrop.cc",
    "discard.email",
    "fakeinbox.com",
  ];

  const domain = email.split("@")[1]?.toLowerCase();
  if (!domain) return true;

  return blockedDomains.includes(domain);
}

/**
 * Prüft ob ein Text nur aus ASCII-Zeichen ohne Satzzeichen/Leerzeichen besteht
 * (typisch für generierte Spam-Texte).
 */
function looksLikeSpamText(text) {
  if (!text) return false;

  // Einzelnes "Wort" ohne Leerzeichen, das lang und zufällig ist
  const words = text.trim().split(/\s+/);

  // Wenn alle Wörter wie Random-Strings aussehen → Spam
  const randomWordCount = words.filter((w) => looksLikeRandomString(w)).length;
  if (words.length > 0 && randomWordCount / words.length > 0.6) return true;

  // Durchschnittliche Wortlänge: echte Nachrichten haben kürzere Wörter
  const avgWordLength = words.reduce((sum, w) => sum + w.length, 0) / words.length;
  if (avgWordLength > 12 && words.length < 5) return true;

  return false;
}

/**
 * Prüft ob die Formulardaten insgesamt wie Spam aussehen.
 * Gibt { isSpam: boolean, reason: string } zurück.
 */
function detectSpam({ name, lastName, email, subject, message, submittedAt }) {
  // 1. Name prüfen
  if (looksLikeRandomString(name)) {
    return { isSpam: true, reason: `Spam-Name erkannt: ${name}` };
  }

  // 2. Nachname prüfen (falls angegeben)
  if (lastName && looksLikeRandomString(lastName)) {
    return { isSpam: true, reason: `Spam-Nachname erkannt: ${lastName}` };
  }

  // 3. E-Mail-Domain prüfen
  if (isBlockedEmailDomain(email)) {
    return { isSpam: true, reason: `Geblockte E-Mail-Domain: ${email}` };
  }

  // 4. Betreff prüfen
  if (looksLikeRandomString(subject) || looksLikeSpamText(subject)) {
    return { isSpam: true, reason: `Spam-Betreff erkannt: ${subject}` };
  }

  // 5. Nachricht prüfen
  if (looksLikeSpamText(message)) {
    return { isSpam: true, reason: `Spam-Nachricht erkannt` };
  }

  // 6. Zeitstempel-Check: Formular wurde zu schnell ausgefüllt (Bot-Erkennung)
  //    Echte Menschen brauchen mindestens 5 Sekunden zum Ausfüllen
  if (submittedAt) {
    const timeDiff = Date.now() - submittedAt;
    if (timeDiff < 5000) {
      return { isSpam: true, reason: `Formular zu schnell ausgefüllt (${timeDiff}ms)` };
    }
  }

  return { isSpam: false, reason: null };
}

// ─── Hilfsfunktionen ─────────────────────────────────────────────────────────

async function logError(
  clientIp = "000.000.000.000",
  form = "unbekannt",
  email = "unbekannt",
  errorDetails = "unbekannt",
) {
  try {
    const query = `
      INSERT INTO registration_errors (client_ip, form, email, error_details) 
      VALUES (?, ?, ?, ?)
    `;
    await connection.query(query, [clientIp, form, email, JSON.stringify(errorDetails)]);
  } catch (error) {
    console.error("Fehler beim Loggen des Fehlers:", error);
  }
}

async function logUnusualActivity(ip, email, reason) {
  const query = `
    INSERT INTO unusual_activity_logs (client_ip, email, reason)
    VALUES (?, ?, ?)
  `;
  try {
    await connection.query(query, [ip, email, reason]);
  } catch (err) {
    console.error("Fehler beim Loggen ungewöhnlichen Verhaltens:", err.message);
  }
}

async function saveSpamToContactRequests(clientIp, data, spamReason) {
  try {
    const messageWithReason = `[SPAM: ${spamReason}]\n\n${data.message || ""}`;
    const query = `
      INSERT INTO contact_requests (client_ip, name, last_name, email, area, subject, message, privacy_policy)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    await connection.query(query, [
      clientIp,
      data.name || "unbekannt",
      data.lastName || null,
      data.email || "unbekannt",
      data.area || "unbekannt",
      data.subject || "unbekannt",
      messageWithReason,
      data.privacyPolicy ?? false,
    ]);
  } catch (err) {
    console.error("Fehler beim Speichern der Spam-Anfrage:", err.message);
  }
}

// ─── API Handler ──────────────────────────────────────────────────────────────

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Methode nicht erlaubt." });
  }

  const clientIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  const {
    name,
    lastName,
    email,
    area,
    subject,
    message,
    privacyPolicy,
    // Honeypot-Feld: Bots füllen dieses aus, echte User sehen es nicht
    _hp,
    // Zeitstempel vom Frontend (wann das Formular geladen wurde)
    _loadedAt,
  } = req.body;

  // ── Honeypot-Check ──────────────────────────────────────────────────────────
  // Wenn das versteckte Feld ausgefüllt ist → definitiv ein Bot
  if (_hp && _hp.trim() !== "") {
    const spamReason = "Honeypot ausgelöst";
    await logUnusualActivity(clientIp, email || "unbekannt", spamReason);
    await saveSpamToContactRequests(
      clientIp,
      { name, lastName, email, area, subject, message, privacyPolicy },
      spamReason,
    );
    return res.status(200).json({ message: "Daten erfolgreich eingefügt." });
  }

  // ── Eingabe-Validierung ─────────────────────────────────────────────────────
  const errors = [];

  const nameValidation = validateString(name, "Vorname", 2, 50, true);
  if (!nameValidation.check) errors.push({ field: "name", message: nameValidation.description });

  if (lastName) {
    const lastNameValidation = validateString(lastName, "Nachname");
    if (!lastNameValidation.check)
      errors.push({ field: "lastName", message: lastNameValidation.description });
  }

  const emailValidation = validateString(email, "E-Mail", 2, 100, true, true);
  if (!emailValidation.check) errors.push({ field: "email", message: emailValidation.description });

  const areaValidation = validateString(area, "Bereich", 2, 50, true);
  if (!areaValidation.check) errors.push({ field: "area", message: areaValidation.description });

  const subjectValidation = validateString(subject, "Betreff", 2, 100, true);
  if (!subjectValidation.check)
    errors.push({ field: "subject", message: subjectValidation.description });

  const messageValidation = validateString(message, "Nachricht", 5, 2500, true);
  if (!messageValidation.check)
    errors.push({ field: "message", message: messageValidation.description });

  if (typeof privacyPolicy !== "boolean") {
    errors.push({
      field: "privacyPolicy",
      message: "Die Datenschutzerklärung muss als wahr oder falsch angegeben werden.",
    });
  } else if (!privacyPolicy) {
    errors.push({
      field: "privacyPolicy",
      message: "Die Datenschutzerklärung muss akzeptiert werden.",
    });
  }

  if (errors.length > 0) {
    const errorlog = errors.map((error) => ({
      field: error.field,
      message: error.message,
      value: req.body[error.field],
    }));
    await logError(clientIp, "Kontaktformular", email, errorlog);
    return res.status(400).json({ errors });
  }

  // ── Spam-Erkennung ──────────────────────────────────────────────────────────
  const spamResult = detectSpam({
    name,
    lastName,
    email,
    subject,
    message,
    submittedAt: _loadedAt ? parseInt(_loadedAt, 10) : null,
  });

  if (spamResult.isSpam) {
    await logUnusualActivity(clientIp, email, `Spam erkannt: ${spamResult.reason}`);
    await saveSpamToContactRequests(
      clientIp,
      { name, lastName, email, area, subject, message, privacyPolicy },
      spamResult.reason,
    );
    return res.status(200).json({ message: "Daten erfolgreich eingefügt." });
  }

  // ── Rate Limiting ───────────────────────────────────────────────────────────
  // Verschärft: 10 Minuten statt 5, und auch IP alleine reicht
  try {
    const spamCheckQuery = `
      SELECT COUNT(*) AS count 
      FROM contact_requests 
      WHERE (email = ? OR client_ip = ?) AND created_at > NOW() - INTERVAL 10 MINUTE
    `;
    const [spamCheckResult] = await connection.query(spamCheckQuery, [email, clientIp]);
    if (spamCheckResult[0].count > 0) {
      await logUnusualActivity(clientIp, email, "Rate-Limit überschritten");
      return res
        .status(429)
        .json({ message: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." });
    }

    // ── Eintrag speichern ─────────────────────────────────────────────────────
    const query = `
      INSERT INTO contact_requests (
        client_ip, name, last_name, email, area, subject, message, privacy_policy
      )
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [clientIp, name, lastName, email, area, subject, message, privacyPolicy];
    await connection.query(query, values);

    emailContactRequest({ email, name, area, subject, message });

    res.status(200).json({ message: "Daten erfolgreich eingefügt." });
  } catch (error) {
    console.error("Fehler beim Einfügen der Daten:", error.message);
    await logError(clientIp, "Kontaktformular", email, [
      { field: "server", message: error.message },
    ]);
    res.status(500).json({ error: "Daten konnten nicht gespeichert werden." });
  }
}
