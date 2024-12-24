`use server`;

import path from "path";
import { sendMail } from "@/util/sendEmail";

export default function emailContactRequest({ email, name, area, subject, message }) {
  const imagePath = path.join(process.cwd(), "public", "assets", "logo", "yumekai_256px.png");

  // HTML-Inhalt der E-Mail
  const htmlContent = `
    <!doctype html>
    <html>
      <body>
        <div style="font-weight:normal;padding:0px 24px 16px 24px">
        <br />
          Hi ${name},
          <br />
        </div>
        <div style="font-weight:normal;padding:0px 24px 16px 24px">
          <br/>
          Du hast uns über das YumeKai-Kontaktformular kontaktiert. Wir haben deine Anfrage erhalten und werden uns in Kürze bei dir melden.
          Nachfolgend findest du eine Kopie deiner Anfrage:
          <br />
          <br />
          Bereich: ${area}
          <br />
          Betreff: ${subject}
          <br />
          Nachricht: ${message}
          <br />
          <br />
          Liebe Grüße
          <br />
          Dein YumeKai-Team
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: "info@yumekai.de",
    to: email,
    subject: "YumeKai Kontaktanfrage",
    html: htmlContent,
  };

  const mail = {
    to: email,
    subject: "YumeKai Kontaktanfrage",
    text: `Name: ${name}\nBereich: ${area}\nBetreff: ${subject}\nNachricht: ${message}`,
  };

  sendMail(mail, mailOptions);
}
