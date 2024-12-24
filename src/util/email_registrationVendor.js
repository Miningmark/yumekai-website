`use server`;

import path from "path";
import { sendMail } from "@/util/sendEmail";

export default function emailRegistrationVendor({
  name,
  lastName,
  email,
  vendorName,
  street,
  postalCode,
  city,
  country,
  typeOfAssortment,
  descriptionOfStand,
  standSize,
  additionalExhibitorTicket,
  strom,
  wlan,
  programmBooklet,
  table,
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
      Du hast dich für einen Händlerstand auf der YumeKai 2025 beworben. Wir haben deine Anmeldung erhalten und werden uns kurz nach dem ende der Anmeldefrist bei dir melden.
      Nachfolgend findest du eine Kopie deiner Anmeldung:
      <br />
      <br />
      Name: ${name}
      <br />
      Nachname: ${lastName}
      <br />
      E-Mail: ${email}
      <br />
      Firmenname: ${vendorName || "Kein Firmenname angegeben"}
      <br />
      Straße: ${street}
      <br />
      Postleitzahl: ${postalCode}
      <br />
      Stadt: ${city}
      <br />
      Land: ${country}
      <br />
      Produktsortiment: ${typeOfAssortment}
      <br />
      Beschreibung des Standes: ${descriptionOfStand}
      <br />
      Standgröße: ${standSize}m
      <br />
      Zusätzliches Aussteller-Ticket: ${additionalExhibitorTicket ? additionalExhibitorTicket : "0"}
      <br/>
      Strom: ${strom ? "Ja" : "Nein"}
      <br/>
      WLAN: ${wlan ? "Ja" : "Nein"}
      <br />
      Programmheft: ${programmBooklet}
      <br />
      Tische: ${table ? "Ja" : "Nein"}
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
    subject: "Anmeldung für einen Händlerstand auf der YumeKai 2025",
    html: htmlContent,
  };

  const mail = {
    to: email,
    subject: "Anmeldung für einen Händlerstand auf der YumeKai 2025",
    text: `Firmenname: ${vendorName}`,
  };

  sendMail(mail, mailOptions);
}
