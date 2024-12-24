`use server`;

import path from "path";
import { sendMail } from "@/util/sendEmail";

export default function emailPresseAkkreditierung({
  email,
  contactPerson,
  workFunction,
  medium,
  address,
  verification,
  message,
}) {
  const imagePath = path.join(process.cwd(), "public", "assets", "logo", "yumekai_256px.png");

  // HTML-Inhalt der E-Mail mit eingebettetem Bild und Button-Link
  const htmlContent = `
    <!doctype html>
    <html>
      <body>
        <div style="font-weight:normal;padding:0px 24px 16px 24px">
        <br />
          Hi ${contactPerson},
          <br />
        </div>
        <div style="font-weight:normal;padding:0px 24px 16px 24px">
          <br/>
          Du hast dich für eine Presse-Akkreditierung bei uns gemeldet. Wir haben deine Anfrage erhalten und werden uns in Kürze bei dir melden.
          Nachfolgend findest du eine Kopie deiner Anfrage:
          <br />
          <br />
          Ansprechpartner: ${contactPerson}
          <br />
          Funktion: ${workFunction || "Nicht angegeben"}
          <br />
          Medium: ${medium || "Nicht angegeben"}
          <br />
          Adresse: ${address || "Nicht angegeben"}
          <br />
          Nachweis: ${verification}
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
    subject: "YumeKai Presse-Akkreditierung",
    html: htmlContent,
  };

  const mail = {
    to: email,
    subject: "YumeKai Presse-Akkreditierung",
    text: `Ansprechpartner: ${contactPerson}
            \nFunktion: ${workFunction || "Nicht angegeben"}
            \nMedium: ${medium || "Nicht angegeben"}
            \nAdresse: ${address || "Nicht angegeben"}
            \nNachweis: ${verification}
            \nNachricht: ${message}`,
  };

  sendMail(mail, mailOptions);
}
