`use server`;

import path from "path";
import { sendMail } from "@/util/sendEmail";

export default function emailRegistrationHelper({
  name,
  lastName,
  nickname,
  gender,
  discordName,
  birthdate,
  email,
  phone,
  street,
  postalCode,
  city,
  country,
  occupation,
  clothesSize,
  arrival,
  requiresParkingTicket,
  foodPreference,
  foodDetails,
  strengths,
  desiredTeam,
  other,
  assemblyFriday,
  assembly,
  deconstruction,
  workTimeSaturday,
  workTimeSunday,
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
          Du hast dich als Helfer für die YumeKai 2025 beworben. Wir werden deine Anmeldung Zeitnah prüfen und uns bei dir melden.
          Nachfolgend findest du eine Kopie deiner Anmeldung:
          <br />
          <br />
          Name: ${name}
          <br />
          Nachname: ${lastName}
          <br />
          Spitzname: ${nickname}
          <br />
          Geschlecht: ${gender}
          <br />
          Discord Name: ${discordName}
          <br />
          Geburtsdatum: ${birthdate}
          <br />
          E-Mail: ${email}
          <br />
          Telefonnummer: ${phone}
          <br />
          Straße: ${street}
          <br />
          Postleitzahl: ${postalCode}
          <br />
          Stadt: ${city}
          <br />
          Land: ${country}
          <br />
          Beruf: ${occupation}
          <br />
          Kleidergröße: ${clothesSize}
          <br />
          Anreise: ${arrival}
          <br />
          Benötigst du ein Parkticket: ${requiresParkingTicket ? "Ja" : "Nein"}
          <br />
          Essenspräferenz: ${foodPreference}
          <br />
          Essensdetails: ${foodDetails ? foodDetails : "Keine Essensdetails angegeben"}
          <br />
          Stärken: ${strengths}
          <br />
          Gewünschtes Team: ${desiredTeam}
          <br />
          Sonstiges: ${other ? other : "Keine Angabe"}
          <br />
          Aufbau Freitag: ${assemblyFriday ? "Ja" : "Nein"}
          <br />
          Aufbau Samstag: ${assembly ? "Ja" : "Nein"}
          <br />
          Abbau: ${deconstruction ? "Ja" : "Nein"}
          <br />
          Wunschzeiten Samstag: ${workTimeSaturday}    
          <br />
          Wunschzeiten Sonntag: ${workTimeSunday}
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
    subject: "Helfer Anmeldung für die YumeKai 2025",
    html: htmlContent,
  };

  const mail = {
    to: email,
    subject: "Helfer Anmeldung für die YumeKai 2025",
    text: `Helfer Name: ${name}`,
  };

  sendMail(mail, mailOptions);
}
