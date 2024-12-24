`use server`;

import fs from "fs";
import path from "path";
import { sendMail } from "@/util/sendEmail";

export default function emailNewsletter({ email, name, token }) {
  // Definiere den Pfad zum Bild (yumekoImage wird als statische Datei importiert)
  const imagePath = path.join(process.cwd(), "public", "assets", "logo", "yumekai_256px.png");
  const link = `${process.env.BASE_URL}/newsletter/confirm?token=${token}`;

  // HTML-Inhalt der E-Mail mit eingebettetem Bild und Button-Link
  const htmlContent = `
    <!doctype html>
    <html>
    <body>
        <div
        style="background-color:#F2F5F7;color:#242424;font-family:'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif;font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%"
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
            
            <tr>
                <td>
                <div style="font-weight:normal;padding:0px 24px 16px 24px">
                <br />
                    Hi ${name},
                    <br />
                </div>
                <div style="font-weight:normal;padding:0px 24px 16px 24px">
                <br/>
                <br/>
                    Willkommen beim YumeKai Newsletter.
                    <br />
                </div>
                <div style="font-weight:normal;padding:0px 24px 16px 24px">
                <br/>
                <br/>
                    Damit wir dir regelmäßig die neusten News schicken können, musst du
                    noch deine E-Mail bestätigen, indem du auf den nachfolgenden
                    Link klickst.
                    <br />
                    <br />
                    <a href="${link}" target="_blank" style="display:inline-block;background-color:#EA580C;color:#ffffff;font-family:sans-serif;font-size:16px;font-weight:bold;text-decoration:none;padding:12px 20px;border-radius:4px;"> E-Mail Adresse Bestätigen</a> 
                <br />
                <br />
                    </div>
                <div style="font-weight:normal;padding:0px 24px 16px 24px">
                    Dies ist zu deinem eigenen Schutz erforderlich, und stellt sicher, dass du persönlich unseren Newsletter bestellt hast und deine E-Mail-Adresse nicht unerlaubt von anderen genutzt wurde. Wir werden deine personenbezogenen Daten, die wir für den Versand des Newsletters verarbeiten, nicht Dritten zur Verfügung stellen.
                    <br />
                    <br />
                    Nach erfolgreich abgeschlossener Anmeldung, kannst du den Erhalt des Newsletters durch Widerruf deiner Einwilligung jederzeit mit Wirkung für die Zukunft per E-Mail, postalisch oder online abbestellen. Falls du dich nicht beim YumeKai Newsletter angemeldet hast, ignoriere bitte diese E-Mail.
                </div>
                </td>
            </tr>
           
            </tbody>
        </table>
        </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: "info@yumekai.de",
    to: email,
    subject: "YumeKai Newsletter Anmeldung",
    html: htmlContent,
    attachments: [
      {
        filename: "YumeKai_Logo.png", // Der Name des Anhangs
        path: imagePath, // Der Pfad zum Bild
        cid: "yumeKaiLogo", // Das cid-Tag für die Verlinkung im HTML
      },
    ],
  };

  const mail = {
    to: email,
    subject: "Newsletter Anmeldung",
    text: "Newsletter Anmeldung",
  };

  sendMail(mail, mailOptions);
}
