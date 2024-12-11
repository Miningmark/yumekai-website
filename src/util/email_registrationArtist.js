`use server`;

import path from "path";
import { sendMail } from "@/util/sendEmail";

export default function emailRegistrationArtist({
  name,
  lastName,
  email,
  artistName,
  vendorName,
  street,
  postalCode,
  city,
  country,
  typeOfArt,
  descriptionOfStand,
  standSize,
  additionalExhibitorTicket,
  wlan,
  programmBooklet,
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
                Du hast dich für einen Künstlerstand auf der YumeKai 2025 beworben. Wir haben deine Anmeldung erhalten und werden uns kurz nach dem ende der Anmeldefrist bei dir melden.
                Nachfolgend findest du eine Kopie deiner Anmeldung:
                <br />
                <br />
                Name: ${name}
                <br />
                Nachname: ${lastName}
                <br />
                E-Mail: ${email}
                <br />
                Künstlername: ${artistName}
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
                Art der Kunst: ${typeOfArt}
                <br />
                Beschreibung des Standes: ${descriptionOfStand}
                <br />
                Standgröße: ${standSize}
                <br />
                Zusätzliches Aussteller-Ticket: ${(additionalExhibitorTicket && "Ja") || "Nein"}
                <br />
                WLAN: ${(wlan && "Ja") || "Nein"}
                <br />
                Programmheft: ${programmBooklet}
                <br />
                Webseite: ${website || "Keine Webseite angegeben"}
                <br />
                Instagram: ${instagram || "Kein Instagram angegeben"}
                <br />
                Nachricht: ${message || "Keine Nachricht angegeben"}
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
    from: "test@miningmark.de",
    to: email,
    subject: "Anmeldung für einen Künstlerstand auf der YumeKai 2025",
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
    subject: "Anmeldung für einen Künstlerstand auf der YumeKai 2025",
    text: `Künstlername: ${artistName}`,
  };

  sendMail(mail, mailOptions);
}
