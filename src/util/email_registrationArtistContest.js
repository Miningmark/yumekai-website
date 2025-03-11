`use server`;

import { sendMail } from "@/util/sendEmail";

export default function emailRegistrationArtistContest({
  name,
  lastName,
  email,
  artistName,
  imageTitle,
  website,
  instagram,
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
      Du hast dich für den Zeichenwettbewerb auf der YumeKai 2025 beworben. Wir haben deine Anmeldung erhalten und werden uns bei dir melden.
      Nachfolgend findest du eine Kopie deiner Anmeldung:
      <br />
      <br />
      Name: ${name}
      <br />
      Nachname: ${lastName}
      <br />
      E-Mail: ${email}
      <br />
      Künstlername: ${artistName || "Kein Künstlername angegeben"}
      <br />
      Bildtitle: ${imageTitle}
      <br />
      Webseite: ${website || "Keine Webseite angegeben"}
      <br />
      Instagram: ${instagram || "Kein Instagram angegeben"}
      <br />
      Nachricht: ${message || "Keine Nachricht geschrieben"}
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
    subject: "Anmeldung für den Zeichenwettbewerb auf der YumeKai 2025",
    html: htmlContent,
  };

  const mail = {
    to: email,
    subject: "Anmeldung für den Zeichenwettbewerb auf der YumeKai 2025",
    text: `Zeichenwettbewerb: ${name} ${lastName}`,
  };

  sendMail(mail, mailOptions);
}
