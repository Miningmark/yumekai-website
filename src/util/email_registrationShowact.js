`use server`;

import path from "path";
import { sendMail } from "@/util/sendEmail";

export default function emailRegistrationShowact({
  name,
  lastName,
  email,
  street,
  postalCode,
  city,
  country,
  groupName,
  groupMembers,
  description,
  timeSlots,
  constructionTime,
  performanceTime,
  deconstructionTime,
  accomodation,
  requiredEquipment,
  broughtEquipment,
  website,
  instagram,
  message,
}) {
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
      Du hast dich als Showact auf der YumeKai 2025 beworben. Wir haben deine Anmeldung erhalten und werden uns kurz nach dem ende der Anmeldefrist bei dir melden.
      Nachfolgend findest du eine Kopie deiner Anmeldung:
      <br />
      <br />
      Name: ${name}
      <br />
      Nachname: ${lastName}
      <br />
      E-Mail: ${email}
      <br />
      Straße: ${street}
      <br />
      Postleitzahl: ${postalCode}
      <br />
      Stadt: ${city}
      <br />
      Land: ${country}
      <br />
      Gruppenname: ${groupName}
      <br />
      Gruppenmitglieder: ${groupMembers}
      <br />
      Beschreibung: ${description}
      <br />
      Zeitfenster: ${timeSlots}
      <br />
      Aufbauzeit: ${constructionTime}
      <br />
      Aufführungszeit: ${performanceTime}
      <br />
      Abbauzeit: ${deconstructionTime}
      <br />
      Unterkunft: ${accomodation}
      <br />
      Benötigte Technik: ${requiredEquipment || "Keine angegebe"}
      <br />
      Mitgebrachte Technik: ${broughtEquipment || "Keine angegebe"}
      <br />
      Webseite: ${website || "Keine Webseite angegeben"}
      <br />
      Instagram: ${instagram || "Kein Instagram angegeben"}
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
    subject: "Anmeldung als Showact auf der YumeKai 2025",
    html: htmlContent,
  };

  const mail = {
    to: email,
    subject: "Anmeldung als Showact auf der YumeKai 2025",
    text: `Gruppenname: ${groupName}`,
  };

  sendMail(mail, mailOptions);
}
