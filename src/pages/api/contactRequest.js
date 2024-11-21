import mysql from "mysql2/promise";

/**
 
CREATE TABLE contact_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    clientIp VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    area VARCHAR(50),
    subject VARCHAR(50),
    message TEXT,
    privacyPolicy BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE unusual_activity_logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    clientIp VARCHAR(255),
    email VARCHAR(255),
    reason VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

 */

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Methode nicht erlaubt." });
  }

  if (req.method === "POST") {
    const clientIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const { name, lastName, email, area, subject, message, privacyPolicy } = req.body;

    const errors = [];

    // Eingabevalidierung
    const invalidCharactersRegex = /[<>;'"\\]/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name Validierung
    if (!name || !name.trim()) {
      errors.push({ field: "name", message: "Vorname ist ein Pflichtfeld" });
    } else {
      if (name.length < 3) errors.push({ field: "name", message: "Vorname ist zu kurz" });
      if (name.length > 50) errors.push({ field: "name", message: "Vorname ist zu lang" });
      if (invalidCharactersRegex.test(name)) {
        errors.push({ field: "name", message: "Ungültige Zeichen im Vornamen" });
      }
    }

    // Nachname Validierung
    if (!lastName || !lastName.trim()) {
      errors.push({ field: "lastName", message: "Nachname ist ein Pflichtfeld" });
    } else {
      if (lastName.length < 3) errors.push({ field: "lastName", message: "Nachname ist zu kurz" });
      if (lastName.length > 50) errors.push({ field: "lastName", message: "Nachname ist zu lang" });
      if (invalidCharactersRegex.test(lastName)) {
        errors.push({ field: "lastName", message: "Ungültige Zeichen im Nachnamen" });
      }
    }

    // Email Validierung
    if (!email || !email.trim()) {
      errors.push({ field: "email", message: "E-Mail ist ein Pflichtfeld" });
    } else {
      if (!emailRegex.test(email)) {
        errors.push({ field: "email", message: "E-Mail-Adresse ist ungültig" });
      }
      if (email.length > 100) {
        errors.push({
          field: "email",
          message: "E-Mail-Adresse darf maximal 100 Zeichen lang sein",
        });
      }
    }

    // Bereich Validierung
    if (!area || !area.trim()) {
      errors.push({ field: "area", message: "Bereich ist ein Pflichtfeld" });
    } else {
      if (area.length > 50) errors.push({ field: "area", message: "Bereich ist zu lang" });
      if (invalidCharactersRegex.test(area)) {
        errors.push({ field: "area", message: "Ungültige Zeichen im Bereich" });
      }
    }

    // Betreff Validierung
    if (!subject || !subject.trim()) {
      errors.push({ field: "subject", message: "Betreff ist ein Pflichtfeld" });
    } else {
      if (subject.length < 5) errors.push({ field: "subject", message: "Betreff ist zu kurz" });
      if (subject.length > 100) errors.push({ field: "subject", message: "Betreff ist zu lang" });
      if (invalidCharactersRegex.test(subject)) {
        errors.push({ field: "subject", message: "Ungültige Zeichen im Betreff" });
      }
    }

    // Nachricht Validierung
    if (!message || !message.trim()) {
      errors.push({ field: "message", message: "Nachricht ist ein Pflichtfeld" });
    } else {
      if (message.length < 10) {
        errors.push({
          field: "message",
          message: "Nachricht muss mindestens 10 Zeichen lang sein",
        });
      }
      if (message.length > 500) {
        errors.push({ field: "message", message: "Nachricht darf maximal 500 Zeichen lang sein" });
      }
    }

    // Datenschutzbestimmung Validierung
    if (!privacyPolicy) {
      errors.push({ field: "privacyPolicy", message: "Datenschutzerklärung nicht akzeptiert" });
    }

    // Fehler prüfen
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    try {
      // Spam-Prüfung: Gibt es eine Anfrage von derselben E-Mail in den letzten 5 Minuten?
      const spamCheckQuery = `
        SELECT COUNT(*) AS count 
        FROM contact_requests 
        WHERE (email = ? OR clientIp = ?) AND created_at > NOW() - INTERVAL 5 MINUTE
      `;
      const [spamCheckResult] = await connection.query(spamCheckQuery, [email, clientIp]);
      if (spamCheckResult[0].count > 0) {
        // Ungewöhnliches Verhalten loggen
        await logUnusualActivity(anonymizedIp, email, "Spam-Versuch");
        return res
          .status(429)
          .json({ message: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." });
      }

      // Inserting the new contact request
      const query = `
        INSERT INTO contact_requests (
          clientIp,
          name,
          lastName,
          email,
          area,
          subject,
          message,
          privacyPolicy,
          created_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
      `;

      const values = [clientIp, name, lastName, email, area, subject, message, privacyPolicy];

      await connection.query(query, values);

      res.status(200).json({ message: "Daten erfolgreich eingefügt." });
    } catch (err) {
      console.error("Fehler beim Einfügen der Daten:", err.message);
      res.status(500).json({ error: "Daten konnten nicht gespeichert werden." });
    }
  } else {
    res.status(405).json({ message: "Methode nicht erlaubt." });
  }
}

// Ungewöhnliches Verhalten loggen
async function logUnusualActivity(ip, email, reason) {
  const query = `
    INSERT INTO unusual_activity_logs (clientIp, email, reason, created_at)
    VALUES (?, ?, ?, CURRENT_TIMESTAMP)
  `;
  const values = [ip, email, reason];
  try {
    await connection.query(query, values);
  } catch (err) {
    console.error("Fehler beim Loggen ungewöhnlichen Verhaltens:", err.message);
  }
}
