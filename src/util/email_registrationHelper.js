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
    
                </div>
                
                </td>
            </tr>
            <tr>
                <td>
                <div style="font-weight:normal;front-size:8px;padding:0px 24px 16px 24px">
                    <br />
                    <br />
                    <div class="default-style">
                    <img  style="max-width: 25%;" src="cid:yumeKaiLogo" alt="YumeKai Logo" />
                    </div>
                    <div class="default-style">Impressum:
                    <a href="https://yumekai.de/Impressum/"> www.Yumekai.de/Impressum</a> 
                    <br />Kontakt: <a class="mailto-link" href="mailto:Info@yumekai.de">info@yumekai.de</a>
                    </div>
                    <div class="default-style">DreamFly-Events UG Haftungsbeschränkt</div>
                    <div class="default-style">Sitz in: Trunkelsberg</div>
                    <div class="default-style">Registergericht: Amtsgericht Memmingen</div>
                    <div class="default-style">Registernummer: <span class="fontWeightBold"> HRB 20785</span></div>
                    <div class="default-style"><span class="fontWeightBold">USt-id: DE366635441</span></div>
                    <div class="default-style">Vertreten durch Geschäftsführer: Markus Sibbe </div>
                    <div class="default-style">Änderungen und Irrtümer vorbehalten.</div>
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
    from: "info@miningmark.de",
    to: email,
    subject: "Helfer Anmeldung für die YumeKai 2025",
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
    subject: "Helfer Anmeldung für die YumeKai 2025",
    text: `Helfer Name: ${name}`,
  };

  sendMail(mail, mailOptions);
}
