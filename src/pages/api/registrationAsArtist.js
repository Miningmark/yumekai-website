import mysql from "mysql2/promise";
import path from "path";
import fs from "fs/promises";
import formidable from "formidable";
import emailRegistrationArtist from "@/util/email_registrationArtist";
import validateString from "@/util/inputCheck";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parsing
  },
};

/*

CREATE TABLE registration_artist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_ip VARCHAR(64),
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    vendor_name VARCHAR(50),
    artist_name VARCHAR(50) NOT NULL,
    street VARCHAR(100) NOT NULL,
    postal_code VARCHAR(10) NOT NULL,
    city VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL,
    type_of_art TEXT NOT NULL,
    description_of_stand TEXT NOT NULL,
    stand_size VARCHAR(50) NOT NULL,
    additional_exhibitor_ticket BOOLEAN DEFAULT FALSE,
    wlan BOOLEAN DEFAULT FALSE,
    programm_booklet VARCHAR(50) NOT NULL DEFAULT 'Nein',
    website VARCHAR(100),
    instagram VARCHAR(100),
    message TEXT,
    privacy_policy BOOLEAN NOT NULL,
    data_storage BOOLEAN NOT NULL,
    licensed_music BOOLEAN NOT NULL,
    picture_rights BOOLEAN NOT NULL,
    artist_conditions BOOLEAN NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    processed BOOLEAN DEFAULT FALSE
)
ENGINE=InnoDB 
DEFAULT CHARSET=utf8mb4 
COLLATE=utf8mb4_unicode_ci 

*/

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

const parseForm = (req) => {
  return new Promise((resolve, reject) => {
    const form = formidable({
      multiples: true,
      uploadDir: path.join(process.cwd(), "/private/artistImage"),
      keepExtensions: true,
    });
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      } else {
        resolve({ fields, files });
      }
    });
  });
};

async function logError(
  clientIp = "000.000.000.000",
  form = "unbekannt",
  email = "unbekannt",
  errorDetails = "unbekannt"
) {
  try {
    const query = `
      INSERT INTO registration_errors (client_ip, form, email, error_details) 
      VALUES (?, ?, ?, ?)
    `;
    await connection.query(query, [clientIp, form, email, JSON.stringify(errorDetails)]);
  } catch (error) {
    console.error("Fehler beim Loggen des Fehlers:", error);
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Methode nicht erlaubt." });
  }

  const clientIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  const { fields, files } = await parseForm(req);

  const name = fields.name[0];
  const lastName = fields.lastName[0];
  const email = fields.email[0];
  const vendorName = fields.vendorName[0];
  const artistName = fields.artistName[0];
  const street = fields.street[0];
  const postalCode = fields.postalCode[0];
  const city = fields.city[0];
  const country = fields.country[0];
  const typeOfArt = fields.typeOfArt[0];
  const descriptionOfStand = fields.descriptionOfStand[0];
  const standSize = fields.standSize[0];
  const additionalExhibitorTicket = ["true", "yes", "1"].includes(
    fields.additionalExhibitorTicket[0].toLowerCase()
  );
  const wlan = ["true", "yes", "1"].includes(fields.wlan[0].toLowerCase());
  const programmBooklet = fields.programmBooklet[0];
  const website = fields.website[0];
  const instagram = fields.instagram[0];
  const message = fields.message[0];
  const privacyPolicy = ["true", "yes", "1"].includes(fields.privacyPolicy[0].toLowerCase());
  const dataStorage = ["true", "yes", "1"].includes(fields.dataStorage[0].toLowerCase());
  const licensedMusic = ["true", "yes", "1"].includes(fields.licensedMusic[0].toLowerCase());
  const pictureRights = ["true", "yes", "1"].includes(fields.pictureRights[0].toLowerCase());
  const artistConditions = ["true", "yes", "1"].includes(fields.artistConditions[0].toLowerCase());

  const errors = [];

  // Validierungslogik mit validateString
  // Name Validierung
  const nameValidation = validateString(name, "Vorname", 2, 50, true);
  if (!nameValidation.check) errors.push({ field: "name", message: nameValidation.description });

  // Nachname Validierung
  if (lastName) {
    const lastNameValidation = validateString(lastName, "Nachname", 2, 50, true);
    if (!lastNameValidation.check)
      errors.push({ field: "lastName", message: lastNameValidation.description });
  }

  // Email Validierung
  const emailValidation = validateString(email, "E-Mail", 2, 100, true, true);
  if (!emailValidation.check) errors.push({ field: "email", message: emailValidation.description });

  //Firmenname Validierung
  const vendorNameValidation = validateString(vendorName, "Firmenname");
  if (!vendorNameValidation.check)
    errors.push({ field: "vendorName", message: vendorNameValidation.description });

  //Künstlername Validierung
  const artistNameValidation = validateString(artistName, "Künstlername", 2, 50, true);
  if (!artistNameValidation.check)
    errors.push({ field: "artistName", message: artistNameValidation.description });

  //Straße Validierung
  const streetValidation = validateString(street, "Straße", 3, 50, true);
  if (!streetValidation.check)
    errors.push({ field: "street", message: streetValidation.description });

  //PLZ Validierung
  const postalCodeValidation = validateString(postalCode, "PLZ", 2, 10, true);
  if (!postalCodeValidation.check)
    errors.push({ field: "postalCode", message: postalCodeValidation.description });

  //Ort Validierung
  const cityValidation = validateString(city, "Ort", 2, 50, true);
  if (!cityValidation.check) errors.push({ field: "city", message: cityValidation.description });

  //Land Validierung
  const countryValidation = validateString(country, "Land", 2, 50, true);
  if (!countryValidation.check)
    errors.push({ field: "country", message: countryValidation.description });

  //Art der Kunst Validierung
  const typeOfArtValidation = validateString(typeOfArt, "Art der Kunst", 2, 2500, true);
  if (!typeOfArtValidation.check)
    errors.push({ field: "typeOfArt", message: typeOfArtValidation.description });

  //Beschreibung des Standes Validierung
  const descriptionOfStandValidation = validateString(
    descriptionOfStand,
    "Beschreibung des Standes",
    5,
    2500,
    true
  );
  if (!descriptionOfStandValidation.check)
    errors.push({
      field: "descriptionOfStand",
      message: descriptionOfStandValidation.description,
    });

  //Website Validierung
  const websiteValidation = validateString(website, "Website", 0, 100);
  if (!websiteValidation.check)
    errors.push({ field: "website", message: websiteValidation.description });

  //Instagram Validierung
  const instagramValidation = validateString(instagram, "Instagram", 0, 100);
  if (!instagramValidation.check)
    errors.push({ field: "instagram", message: instagramValidation.description });

  //Nachricht Validierung
  const messageValidation = validateString(message, "Nachricht", 0, 2500);
  if (!messageValidation.check)
    errors.push({ field: "message", message: messageValidation.description });

  //Programmheft Validierung
  const programmBookletValidation = validateString(programmBooklet, "Programmheft", 2, 50, true);
  if (!programmBookletValidation.check)
    errors.push({ field: "programmBooklet", message: programmBookletValidation.description });

  // Standgröße Validierung
  const standSizeValidation = validateString(standSize, "Standgröße", 2, 50, true);
  if (!standSizeValidation.check)
    errors.push({ field: "standSize", message: standSizeValidation.description });

  // Boolean validation
  if (typeof additionalExhibitorTicket !== "boolean") {
    errors.push({
      field: "additionalExhibitorTicket",
      message: "Zusätzliches Ausstellerticket muss ein Boolean sein",
    });
  }
  if (typeof wlan !== "boolean") {
    errors.push({
      field: "wlan",
      message: "WLAN muss ein Boolean sein",
    });
  }
  if (typeof privacyPolicy !== "boolean" || privacyPolicy === false) {
    errors.push({
      field: "privacyPolicy",
      message: "Datenschutzrichtlinie muss bestätigt werden",
    });
  }
  if (typeof dataStorage !== "boolean" || dataStorage === false) {
    errors.push({
      field: "dataStorage",
      message: "Datenspeicherung muss bestätigt werden",
    });
  }
  if (typeof licensedMusic !== "boolean" || licensedMusic === false) {
    errors.push({
      field: "licensedMusic",
      message: "Lizenzmusik muss bestätigt werden",
    });
  }
  if (typeof pictureRights !== "boolean" || pictureRights === false) {
    errors.push({
      field: "pictureRights",
      message: "Bildrechte müssen bestätigt werden",
    });
  }
  if (typeof artistConditions !== "boolean" || artistConditions === false) {
    errors.push({
      field: "artistConditions",
      message: "Künstlerbedingungen müssen bestätigt werden",
    });
  }

  // Fehler prüfen
  if (errors.length > 0) {
    const errorlog = errors.map((error) => {
      return { field: error.field, message: error.message, value: req.body[error.field] };
    });

    await logError(clientIp, "Künstler Anmeldung", email, errorlog);
    return res.status(400).json({ errors });
  }

  try {
    // Spam-Prüfung: Gibt es eine Anfrage von derselben E-Mail in den letzten 5 Minuten?
    const spamCheckQuery = `
    SELECT COUNT(*) AS count 
    FROM registration_artist
    WHERE (email = ? OR client_ip = ?) AND created_at > NOW() - INTERVAL 5 MINUTE
  `;
    const [spamCheckResult] = await connection.query(spamCheckQuery, [email, clientIp]);
    if (spamCheckResult[0].count > 0) {
      // Ungewöhnliches Verhalten loggen
      await logUnusualActivity(clientIp, email, "Spam-Versuch");
      return res
        .status(429)
        .json({ message: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." });
    }

    const file = files.file[0];
    let filePath = null;

    const filename = Date.now() + "_" + file.originalFilename.replaceAll(" ", "_");

    const uploadDir = path.join(process.cwd(), `/private/artistImage`);

    filePath = path.join(uploadDir, filename);

    await fs.rename(file.filepath, filePath);

    filePath = `/artistImage/${filename}`;

    // Inserting the new data record
    const query = `
        INSERT INTO registration_artist (
            client_ip,
            name,
            last_name,
            email,
            vendor_name,
            artist_name,
            street,
            postal_code,
            city,
            country,
            type_of_art,
            description_of_stand,
            stand_size,
            additional_exhibitor_ticket,
            wlan,
            programm_booklet,
            website,
            instagram,
            message,
            privacy_policy,
            data_storage,
            licensed_music,
            picture_rights,
            artist_conditions,
            image_url
            ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    const values = [
      clientIp,
      name,
      lastName,
      email,
      vendorName || null,
      artistName,
      street,
      postalCode,
      city,
      country,
      typeOfArt,
      descriptionOfStand,
      standSize,
      additionalExhibitorTicket || false,
      wlan || false,
      programmBooklet,
      website || null,
      instagram || null,
      message || null,
      privacyPolicy,
      dataStorage,
      licensedMusic,
      pictureRights,
      artistConditions,
      filePath || null,
    ];

    const [result] = await connection.query(query, values);

    // Erfolgsmeldung zurückgeben

    emailRegistrationArtist({
      name,
      lastName,
      email,
      vendorName,
      artistName,
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
    });

    res.status(200).json({ message: "Daten erfolgreich eingefügt." });
  } catch (error) {
    console.error("Fehler beim Einfügen der Daten:", error);
    await logError(clientIp, "Künstler Anmeldung", email, [
      { field: "server", message: error.message },
    ]);
    res.status(500).json({ error: "Daten konnten nicht gespeichert werden." });
  }
}

// Ungewöhnliches Verhalten loggen
async function logUnusualActivity(ip, email, reason) {
  const query = `
      INSERT INTO unusual_activity_logs (client_ip, email, reason)
      VALUES (?, ?, ?)
    `;
  const values = [ip, email, reason];
  try {
    await connection.query(query, values);
  } catch (err) {
    console.error("Fehler beim Loggen ungewöhnlichen Verhaltens:", err.message);
  }
}
