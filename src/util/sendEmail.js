"use server";

import nodemailer from "nodemailer";
import mysql from "mysql2/promise";
import path from "path";
import fs from "fs";

//Images
import yumekoImage from "/public/assets/logo/Yumeko.png";

/*

CREATE TABLE `emails` (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY COMMENT 'Eindeutige ID der E-Mail',
  email_from VARCHAR(255) NOT NULL COMMENT 'Absender der E-Mail',
  email_to VARCHAR(255) NOT NULL COMMENT 'Empfänger der E-Mail',
  email_subject VARCHAR(255) NOT NULL COMMENT 'Betreff der E-Mail',
  email_text TEXT NOT NULL COMMENT 'Inhalt der E-Mail',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT 'Zeitpunkt der Erstellung',
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'Zeitpunkt der letzten Aktualisierung'
) 
ENGINE=InnoDB 
DEFAULT CHARSET=utf8mb4 
COLLATE=utf8mb4_unicode_ci 
COMMENT='Speichert gesendete E-Mails';

*/

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export async function sendMail(mail) {
  const { from = "test@miningmark.de", to, subject, text } = mail;
  //console.log("E-MAIL Send: ", from, to, subject, text);

  if (!from || !to || !subject || !text) {
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

  // Definiere den Pfad zum Bild (yumekoImage wird als statische Datei importiert)
  const imagePath = path.join(process.cwd(), "public", "assets", "logo", "Yumeko.png");
  const name = "Markus";
  const link =
    "http://localhost:3000/newsletter/confirm?token=61cc967118dbbf316ca437b05a1e0bc2eefbae683865262665834731641274a2";

  // HTML-Inhalt der E-Mail mit eingebettetem Bild und Button-Link
  const htmlContent = `
  <!doctype html>
  <html>
    <body>
      <div
        style='background-color:#F2F5F7;color:#242424;font-family:"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'
      >
        <table
          align="center"
          width="100%"
          style="margin:0 auto;max-width:600px;background-color:#FFFFFF"
          role="presentation"
          cellspacing="0"
          cellpadding="0"
          border="0"
        >
          <tbody>
            <tr style="width:100%">
              <td>
                <div style="padding:24px 24px 24px 24px">
                  <img
                      alt="Marketbase"
                      src="cid:yumekoLogo"
                      style="outline:none;border:none;text-decoration:none;vertical-align:middle;display:inline-block;max-width:100px"
                  />
                </div>
                <div style="font-weight:normal;padding:0px 24px 16px 24px">
                  Hi ${name},
                </div>
                <div style="font-weight:normal;padding:0px 24px 16px 24px">
                  Willkommen beim YumeKai Newsletter. 
                </div>
                <div style="font-weight:normal;padding:0px 24px 16px 24px">
                  Damit wir dir immer die neusten News schicken können musst noch deine E-Mail bestätigen indem du auf den nachfolgenden Button klickst.
                </div>
                <div style="text-align:left;padding:16px 24px 16px 24px">
                  <!--[if mso]>
                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"
                      href="${link}" style="height:40px;v-text-anchor:middle;width:200px;" arcsize="10%" fillcolor="#EA580C" strokecolor="#EA580C" strokeweight="1px">
                      <w:anchorlock/>
                      <center style="color:#ffffff;font-family:sans-serif;font-size:16px;font-weight:bold;text-decoration:none;">
                        E-Mail Adresse Bestätigen
                      </center>
                    </v:roundrect>
                    <![endif]-->
                    <!--[if !mso]><!-->
                    <a href="${link}" target="_blank" style="display:inline-block;background-color:#EA580C;color:#ffffff;font-family:sans-serif;font-size:16px;font-weight:bold;text-decoration:none;padding:12px 20px;border-radius:4px;">
                      E-Mail Adresse Bestätigen
                    </a>
                  <!--<![endif]-->
                  <a href="${link}" target="_blank" style="display:inline-block;background-color:#EA580C;color:#ffffff;font-family:sans-serif;font-size:16px;font-weight:bold;text-decoration:none;padding:12px 20px;border-radius:4px;">
                      E-Mail Adresse Bestätigen
                    </a>
                </div>

                
                
                
                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </body>
  </html>

  `;
  //<img src="cid:yumekoLogo" alt="Yumeko Logo" class="image"/>

  const transporter = nodemailer.createTransport({
    host: "webmail.your-server.de", // SMTP-Host von Hetzner
    port: 587, // oder 465 für SSL
    secure: false, // true für 465, false für andere Ports
    auth: {
      user: from,
      pass: emailPassword,
    },
  });

  const mailOptions = {
    from,
    to,
    subject: subject || "Willkommen bei MiningMark",
    html: htmlContent,
    attachments: [
      {
        filename: "Yumeko.png", // Der Name des Anhangs
        path: imagePath, // Der Pfad zum Bild
        cid: "yumekoLogo", // Das cid-Tag für die Verlinkung im HTML
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    //console.log("EMAIL in Db speichern");

    const [result] = await connection.execute(
      "INSERT INTO emails (email_from, email_to, email_subject, email_text, created_at) VALUES (?, ?, ?, ?, NOW())",
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
