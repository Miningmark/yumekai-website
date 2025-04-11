`use server`;

import { sendMail } from "@/util/sendEmail";

export default function emailRegistrationPerformance({
  name,
  lastName,
  email,
  artistName,
  characterName,
  characterOrigin,
  message,
}) {
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
      Du hast dich für den Cosplay-Catwalk auf der YumeKai 2025 beworben. Wir haben deine Anmeldung erhalten und werden uns bei dir melden.
      Nachfolgend findest du eine Kopie deiner Anmeldung:
      <br />
      <br />
      Name: ${name}
      <br />
      Nachname: ${lastName}
      <br />
      E-Mail: ${email}
      <br />
      Künstlername: ${artistName || "Keinen Künstlernamen angegeben"}
      <br />
      Charakter: ${characterName}
      <br/>
      Charakter Ursprung: ${characterOrigin}
      <br />
      Nachricht: ${message || "Keine Nachricht angegeben"}
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
    subject: "Anmeldung für Cosplay-Performance auf der YumeKai 2025",
    html: htmlContent,
  };

  const mail = {
    to: email,
    subject: "Anmeldung für Cosplay-Performance auf der YumeKai 2025",
    text: `Cosplay-Catwalk: ${name} ${lastName}  ${characterName}`,
  };

  sendMail(mail, mailOptions);
}
