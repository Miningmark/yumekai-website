"use server";

import nodemailer from "nodemailer";
import mysql from "mysql2/promise";

/*

CREATE TABLE emails (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY ,
  email_from VARCHAR(100) NOT NULL ,
  email_to VARCHAR(100) NOT NULL ,
  email_subject VARCHAR(100) NOT NULL ,
  email_text TEXT NOT NULL ,
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

export async function sendMail(mail, mailOptions) {
  const { from = "test@miningmark.de", to, subject, text } = mail;
  console.log("E-MAIL Send: ", subject);

  if (!from || !to || !subject || !text) {
    console.log("ERROR: E-MAIL send to ", to);
    return { message: "Alle Felder müssen ausgefüllt sein", status: 400 };
  }
  let emailPassword = "";
  switch (from) {
    case "test@miningmark.de":
      emailPassword = process.env.EMAIL_PASS_TEST;
      break;
    default:
      break;
  }

  const transporter = nodemailer.createTransport({
    host: "webmail.your-server.de", // SMTP-Host von Hetzner
    port: 587, // oder 465 für SSL
    secure: false, // true für 465, false für andere Ports
    auth: {
      user: from,
      pass: emailPassword,
    },
  });

  try {
    await transporter.sendMail(mailOptions);

    const [result] = await connection.execute(
      "INSERT INTO emails (email_from, email_to, email_subject) VALUES (?, ?, ?, ?)",
      [from, to, subject, text]
    );

    if (result.affectedRows > 0) {
      console.log("E-MAIL send to ", to);
      return { message: "E-Mail erfolgreich gesendet und gespeichert", status: 200 };
    } else {
      console.log("ERROR: E-MAIL send to ", to);
      return { message: "Fehler beim Speichern der E-Mail", status: 500 };
    }
  } catch (error) {
    console.error(error);
    return { message: "Fehler beim Senden der E-Mail", status: 500 };
  }
}
