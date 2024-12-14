import mysql from "mysql2/promise";
import emailPresseAkkreditierung from "@/util/email_presseAkkreditierung";

/*

CREATE TABLE presse_akkreditierungen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_ip VARCHAR(50) NOT NULL,
    contact_person VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    work_function VARCHAR(100) NOT NULL,
    medium VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    verification TEXT NOT NULL,
    message TEXT NOT NULL,
    privacy_policy BOOLEAN NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
ENGINE=InnoDB 
DEFAULT CHARSET=utf8mb4 
COLLATE=utf8mb4_unicode_ci 

*/

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const clientIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  const {
    contactPerson,
    email,
    workFunction,
    medium,
    address,
    verification,
    message,
    privacyPolicy,
  } = req.body;

  const errors = [];

  // Eingabevalidierung
  const invalidCharactersRegex = /[<>;'"\\]/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // contactPerson Validierung
  if (!contactPerson || !contactPerson.trim()) {
    errors.push({ field: "contactPerson", message: "Ansprechpartner ist ein Pflichtfeld" });
  } else {
    if (contactPerson.length < 3)
      errors.push({ field: "contactPerson", message: "Ansprechpartner ist zu kurz" });
    if (contactPerson.length > 50)
      errors.push({ field: "contactPerson", message: "Ansprechpartner ist zu lang" });
    if (invalidCharactersRegex.test(contactPerson)) {
      errors.push({ field: "contactPerson", message: "Ungültige Zeichen im Ansprechpartner" });
    }
  }

  // email Validierung
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

  // workFunction Validierung
  if (workFunction.length < 3)
    errors.push({ field: "workFunction", message: "Berufsbezeichnung ist zu kurz" });
  if (workFunction.length > 50)
    errors.push({ field: "workFunction", message: "Berufsbezeichnung ist zu lang" });
  if (invalidCharactersRegex.test(workFunction)) {
    errors.push({ field: "workFunction", message: "Ungültige Zeichen in der Berufsbezeichnung" });
  }

  // medium Validierung
  if (medium.length < 3) errors.push({ field: "medium", message: "Medium ist zu kurz" });
  if (medium.length > 100) errors.push({ field: "medium", message: "Medium ist zu lang" });
  if (invalidCharactersRegex.test(medium)) {
    errors.push({ field: "medium", message: "Ungültige Zeichen im Medium" });
  }

  // address Validierung
  if (address.length < 3) errors.push({ field: "address", message: "Adresse ist zu kurz" });
  if (address.length > 255) errors.push({ field: "address", message: "Adresse ist zu lang" });
  if (invalidCharactersRegex.test(address)) {
    errors.push({ field: "address", message: "Ungültige Zeichen in der Adresse" });
  }

  // verification Validierung
  if (!verification || !verification.trim()) {
    errors.push({ field: "verification", message: "Nachweis ist ein Pflichtfeld" });
  } else {
    if (verification.length < 3)
      errors.push({ field: "verification", message: "Nachweis ist zu kurz" });
    if (verification.length > 500)
      errors.push({ field: "verification", message: "Nachweis ist zu lang" });
    if (invalidCharactersRegex.test(verification)) {
      errors.push({ field: "verification", message: "Ungültige Zeichen im Nachweis" });
    }
  }

  // message Validierung
  if (message.length < 10) errors.push({ field: "message", message: "Nachricht ist zu kurz" });
  if (message.length > 500) errors.push({ field: "message", message: "Nachricht ist zu lang" });
  if (invalidCharactersRegex.test(message)) {
    errors.push({ field: "message", message: "Ungültige Zeichen in der Nachricht" });
  }

  // privacyPolicy Validierung
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

  // Fehler zurückgeben, wenn vorhanden
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }
  try {
    // Spam-Prüfung: Gibt es eine Anfrage von derselben E-Mail in den letzten 5 Minuten?
    const spamCheckQuery = `
     SELECT COUNT(*) AS count 
     FROM presse_akkreditierungen 
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

    // Die Eingabedaten in der Datenbank speichern
    await connection.execute(
      "INSERT INTO presse_akkreditierungen (contact_person, email, work_function, medium, address, verification, message, privacy_policy, client_ip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        contactPerson,
        email,
        workFunction,
        medium,
        address,
        verification,
        message,
        privacyPolicy,
        clientIp,
      ]
    );

    // Erfolgsmeldung zurückgeben

    emailPresseAkkreditierung({
      contactPerson,
      email,
      workFunction,
      medium,
      address,
      verification,
      message,
    });

    return res.status(200).json({ message: "Presse Akkreditierung erfolgreich abgeschickt" });
  } catch (error) {
    console.error("Database error:", error);
    return res
      .status(500)
      .json({ message: "Fehler beim Absenden der Anfrage, Bitte versuche es später nochmal." });
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
