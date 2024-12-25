import mysql from "mysql2/promise";
import path from "path";
import fs from "fs/promises";
import formidable from "formidable";
import emailRegistrationWorkshop from "@/util/email_registrationWorkshop";
import validateString from "@/util/inputCheck";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parsing
  },
};

/*

CREATE TABLE registration_workshop (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_ip VARCHAR(64),
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    street VARCHAR(100) NOT NULL,
    postal_code VARCHAR(10) NOT NULL,
    city VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL,
    workshop_title VARCHAR(50) NOT NULL,
    workshop_description TEXT NOT NULL,
    leaders INT NOT NULL,
    time_slots VARCHAR(200) NOT NULL,
    construction_time INT NOT NULL,
    workshop_time INT NOT NULL,
    deconstruction_time INT NOT NULL,
    workshop_requirements TEXT NOT NULL,
    participants INT DEFAULT 0,
    website VARCHAR(100),
    instagram VARCHAR(100),
    message TEXT,
    privacy_policy BOOLEAN NOT NULL,
    data_storage BOOLEAN NOT NULL,
    picture_rights BOOLEAN NOT NULL,
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
      uploadDir: path.join(process.cwd(), "/private/workshopImage"),
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
  const street = fields.street[0];
  const postalCode = fields.postalCode[0];
  const city = fields.city[0];
  const country = fields.country[0];
  const workshopTitle = fields.workshopTitle[0];
  const workshopDescription = fields.workshopDescription[0];
  const leaders = fields.leaders[0];
  const timeSlots = fields.timeSlots[0];
  const constructionTime = fields.constructionTime[0];
  const workshopTime = fields.workshopTime[0];
  const deconstructionTime = fields.deconstructionTime[0];
  const workshopRequirements = fields.workshopRequirements[0];
  const participants = fields.participants[0];
  const website = fields.website[0];
  const instagram = fields.instagram[0];
  const message = fields.message[0];
  const privacyPolicy = ["true", "yes", "1"].includes(fields.privacyPolicy[0].toLowerCase());
  const dataStorage = ["true", "yes", "1"].includes(fields.dataStorage[0].toLowerCase());
  const pictureRights = ["true", "yes", "1"].includes(fields.pictureRights[0].toLowerCase());

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

  //Straße Validierung
  const streetValidation = validateString(street, "Straße", 2, 50, true);
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

  //Workshop-Titel Validierung
  const workshopTitleValidation = validateString(workshopTitle, "workshopTitle", 3, 50, true);
  if (!workshopTitleValidation.check)
    errors.push({ field: "workshopTitle", message: workshopTitleValidation.description });

  //Workshop-Beschreibung Validierung
  const workshopDescriptionValidation = validateString(
    workshopDescription,
    "workshopDescription",
    3,
    50,
    true
  );
  if (!workshopDescriptionValidation.check)
    errors.push({
      field: "workshopDescription",
      message: workshopDescriptionValidation.description,
    });

  //Leiter Validierung
  if (leaders < 1) {
    errors.push({ field: "leaders", message: "Mindestens ein Leiter muss angegeben werden" });
  }
  if (leaders > 5) {
    errors.push({ field: "leaders", message: "Maximal fünf Leiter können angegeben werden" });
  }

  // Zeitfenster Validierung
  validateString(timeSlots, "timeSlots", 2, 200);

  // Aufbauzeit
  if (constructionTime < 1) {
    errors.push({ field: "constructionTime", message: "Aufbauzeit muss mindestens 1 sein" });
  }
  if (constructionTime > 60) {
    errors.push({ field: "constructionTime", message: "Aufbauzeit darf maximal 60 sein" });
  }
  // Workshopzeit
  if (workshopTime < 30) {
    errors.push({ field: "workshopTime", message: "Aufführungszeit muss mindestens 30 sein" });
  }
  if (workshopTime > 360) {
    errors.push({ field: "workshopTime", message: "Aufführungszeit darf maximal 360 sein" });
  }
  // Abbauzeit
  if (deconstructionTime < 1) {
    errors.push({ field: "deconstructionTime", message: "Abbauzeit muss mindestens 1 sein" });
  }
  if (deconstructionTime > 60) {
    errors.push({ field: "deconstructionTime", message: "Abbauzeit darf maximal 60 sein" });
  }

  // Teilnehmer Validierung
  if (participants < 0) {
    errors.push({
      field: "participants",
      message: "Mindestens ein Teilnehmer muss angegeben werden",
    });
  }
  if (participants > 50) {
    errors.push({
      field: "participants",
      message: "Maximal 50 Teilnehmer können angegeben werden",
    });
  }

  // Workshop-Anforderungen
  const workshopRequirementsValidation = validateString(
    workshopRequirements,
    "workshopRequirements",
    2,
    2500
  );
  if (!workshopRequirementsValidation.check)
    errors.push({
      field: "workshopRequirements",
      message: workshopRequirementsValidation.description,
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

  // Boolean validation
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
  if (typeof pictureRights !== "boolean" || pictureRights === false) {
    errors.push({
      field: "pictureRights",
      message: "Bildrechte müssen bestätigt werden",
    });
  }

  // Fehler prüfen
  if (errors.length > 0) {
    const errorlog = errors.map((error) => {
      return { field: error.field, message: error.message, value: req.body[error.field] };
    });

    await logError(clientIp, "Workshop Anmeldung", email, errorlog);
    return res.status(400).json({ errors });
  }

  try {
    // Spam-Prüfung: Gibt es eine Anfrage von derselben E-Mail in den letzten 5 Minuten?
    const spamCheckQuery = `
      SELECT COUNT(*) AS count 
      FROM registration_workshop
      WHERE (email = ? OR client_ip = ?) AND created_at > NOW() - INTERVAL 5 MINUTE
    `;
    const [spamCheckResult] = await connection.query(spamCheckQuery, [email, clientIp]);
    if (spamCheckResult[0].count > 3) {
      // Ungewöhnliches Verhalten loggen
      await logUnusualActivity(clientIp, email, "Spam-Versuch");
      return res
        .status(429)
        .json({ message: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." });
    }

    const file = files.file[0];
    let filePath = null;

    const filename = Date.now() + "_" + file.originalFilename.replaceAll(" ", "_");

    const uploadDir = path.join(process.cwd(), `/private/workshopImage`);

    filePath = path.join(uploadDir, filename);

    await fs.rename(file.filepath, filePath);

    filePath = `/workshopImage/${filename}`;

    // Inserting the new data record
    const query = `
    INSERT INTO registration_workshop (
        client_ip,
        name,
        last_name,
        email,
        street,
        postal_code,
        city,
        country,
        workshop_title,
        workshop_description,
        leaders,
        time_slots,
        construction_time,
        workshop_time,
        deconstruction_time,
        workshop_requirements,
        participants,
        website,
        instagram,
        message,
        privacy_policy,
        data_storage,
        picture_rights,
        image_url
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    const values = [
      clientIp,
      name,
      lastName,
      email,
      street,
      postalCode,
      city,
      country,
      workshopTitle,
      workshopDescription,
      leaders,
      timeSlots,
      constructionTime,
      workshopTime,
      deconstructionTime,
      workshopRequirements,
      participants,
      website || null,
      instagram || null,
      message || null,
      privacyPolicy,
      dataStorage,
      pictureRights,
      filePath || null,
    ];

    const [result] = await connection.query(query, values);

    // Erfolgsmeldung zurückgeben
    emailRegistrationWorkshop({
      name,
      lastName,
      email,
      street,
      postalCode,
      city,
      country,
      workshopTitle,
      workshopDescription,
      leaders,
      timeSlots,
      constructionTime,
      workshopTime,
      deconstructionTime,
      workshopRequirements,
      participants,
      website,
      instagram,
      message,
    });

    res.status(200).json({ message: "Daten erfolgreich eingefügt." });
  } catch (error) {
    console.error("Fehler beim Einfügen der Daten:", error);
    await logError(clientIp, "Workshop Anmeldung", email, [
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
