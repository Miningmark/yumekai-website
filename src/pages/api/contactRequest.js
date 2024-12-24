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

  const clientIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  const { name, lastName, email, area, subject, message, privacyPolicy } = req.body;

  const errors = [];

  // Name Validierung
  const nameValidation = validateString(name, "Vorname", 2, 50, true);
  if (!nameValidation.check) errors.push({ field: "name", message: nameValidation.description });

  // Nachname Validierung
  if (lastName) {
    const lastNameValidation = validateString(lastName, "Nachname");
    if (!lastNameValidation.check)
      errors.push({ field: "lastName", message: lastNameValidation.description });
  }

  // Email Validierung
  const emailValidation = validateString(email, "E-Mail", 2, 100, true, true);
  if (!emailValidation.check) errors.push({ field: "email", message: emailValidation.description });

  // Bereich Validierung
  const areaValidation = validateString(area, "Bereich", 2, 50, true);
  if (!areaValidation.check) errors.push({ field: "area", message: areaValidation.description });

  // Betreff Validierung
  const subjectValidation = validateString(subject, "Betreff", 2, 100, true);
  if (!subjectValidation.check)
    errors.push({ field: "subject", message: subjectValidation.description });

  // Nachricht Validierung
  const messageValidation = validateString(message, "Nachricht", 5, 2500, true);
  if (!messageValidation.check)
    errors.push({ field: "message", message: messageValidation.description });

  // Datenschutzbestimmung Validierung
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

  // Fehler prüfen
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    // Spam-Prüfung: Gibt es eine Anfrage von derselben E-Mail in den letzten 5 Minuten?
    const spamCheckQuery = `
        SELECT COUNT(*) AS count 
        FROM contact_requests 
        WHERE (email = ? OR client_ip = ?) AND created_at > NOW() - INTERVAL 5 MINUTE
      `;
    const [spamCheckResult] = await connection.query(spamCheckQuery, [email, clientIp]);
    if (spamCheckResult[0].count > 0) {
      // Ungewöhnliches Verhalten loggen
      await logUnusualActivity(clientIp, email, "Spam-Versuch");
      return res
        .status(429)
        .json({ message: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." });
    }

    // Inserting the new contact request
    const query = `
        INSERT INTO contact_requests (
          client_ip,
          name,
          last_name,
          email,
          area,
          subject,
          message,
          privacy_policy
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;

    const values = [clientIp, name, lastName, email, area, subject, message, privacyPolicy];

    await connection.query(query, values);

    emailContactRequest({ email, name, area, subject, message });

    res.status(200).json({ message: "Daten erfolgreich eingefügt." });
  } catch (err) {
    console.error("Fehler beim Einfügen der Daten:", err.message);
    res.status(500).json({ error: "Daten konnten nicht gespeichert werden." });
  }
}

// Ungewöhnliches Verhalten loggen
async function logUnusualActivity(ip, email, reason) {
  const query = `
    INSERT INTO unusual_activity_logs (client_ip, email, reason)
    VALUES (?, ?, ?)
  `;
  const values = [ip, email, reason];
  try {
    await connection.query(query, values);
  } catch (err) {
    console.error("Fehler beim Loggen ungewöhnlichen Verhaltens:", err.message);
  }
}
