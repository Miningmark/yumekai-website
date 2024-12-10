import mysql from "mysql2/promise";
import crypto from "crypto";
import { sendMail } from "@/util/sendEmail";
import emailNewsletter from "@/util/email_newsletter";

/*

CREATE TABLE newsletter_registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_ip VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    privacy_policy BOOLEAN,
    token VARCHAR(64) NOT NULL,
    verified BOOLEAN DEFAULT FALSE,
    verified_at TIMESTAMP,
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
  if (req.method == "POST") {
    const clientIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const { name, email, privacyPolicy } = req.body;

    const errors = [];

    // Eingabevalidierung
    const invalidCharactersRegex = /[<>;'"\\]/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name Validierung
    if (!name || !name.trim()) {
      errors.push({ field: "name", message: "Name ist ein Pflichtfeld" });
    } else {
      if (name.length < 3) errors.push({ field: "name", message: "Name ist zu kurz" });
      if (name.length > 50) errors.push({ field: "name", message: "Name ist zu lang" });
      if (invalidCharactersRegex.test(name)) {
        errors.push({ field: "name", message: "Ungültige Zeichen im Namen" });
      }
    }

    // E-Mail Validierung
    if (!email || !email.trim()) {
      errors.push({ field: "email", message: "E-Mail ist ein Pflichtfeld" });
    } else {
      if (email.length > 100) {
        errors.push({ field: "email", message: "E-Mail darf maximal 100 Zeichen lang sein" });
      }
      if (!emailRegex.test(email)) {
        errors.push({ field: "email", message: "Ungültige E-Mail-Adresse" });
      }
    }

    // Datenschutzerklärung Validierung
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

    // Token generieren
    const token = crypto.randomBytes(32).toString("hex");

    // Eintrag in die Datenbank
    try {
      const [result] = await connection.query(
        "INSERT INTO newsletter_registrations (client_ip, name, email, privacy_policy, token) VALUES (?, ?, ?, ?, ?)",
        [clientIp, name, email, privacyPolicy, token]
      );

      if (result.affectedRows === 1) {
        emailNewsletter({ email, name, token });

        return res.status(201).json({ message: "Erfolgreich registriert" });
      } else {
        throw new Error("Fehler beim Eintragen in die Datenbank");
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Interner Serverfehler" });
    }
  }

  if (req.method === "PATCH") {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ message: "Token ist erforderlich" });
    }

    try {
      // Update-Befehl zur Bestätigung des Tokens
      const [result] = await connection.query(
        "UPDATE newsletter_registrations SET verified = TRUE, verified_at = CURRENT_TIMESTAMP WHERE token = ? AND verified = FALSE",
        [token]
      );

      if (result.affectedRows === 1) {
        return res.status(200).json({ message: "Newsletter erfolgreich bestätigt" });
      } else {
        return res.status(400).json({ message: "Ungültiger oder bereits bestätigter Token" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Interner Serverfehler" });
    }
  }

  if (req.method === "DELETE") {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ message: "Token ist erforderlich" });
    }

    try {
      // Update-Befehl zur Bestätigung des Tokens
      const [result] = await connection.query(
        "DELETE FROM newsletter_registrations WHERE token = ?",
        [token]
      );

      if (result.affectedRows === 1) {
        return res.status(200).json({ message: "Newsletter erfolgreich gelöscht" });
      } else {
        return res.status(400).json({ message: "Ungültiger Token" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Interner Serverfehler" });
    }
  }

  return res.status(405).json({ message: "Methode nicht erlaubt" });
}
