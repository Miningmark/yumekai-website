import mysql from "mysql2/promise";
import path from "path";
import fs from "fs/promises";
import formidable from "formidable";
import emailRegistrationArtist from "@/util/email_registrationArtist";
import emailRegistrationWorkshop from "@/util/email_registrationWorkshop";

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
    performance_time INT NOT NULL,
    deconstruction_time INT NOT NULL,
    workshop_requirements TEXT NOT NULL,
    participant INT DEFAULT 0,
    website VARCHAR(100),
    instagram VARCHAR(100),
    message TEXT,
    privacy_policy BOOLEAN NOT NULL,
    data_storage BOOLEAN NOT NULL,
    picture_rights BOOLEAN NOT NULL,
    workshop_conditions BOOLEAN NOT NULL,
    image_url VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

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
      uploadDir: path.join(process.cwd(), "/private/helperImage"),
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
  const performanceTime = fields.performanceTime[0];
  const deconstructionTime = fields.deconstructionTime[0];
  const workshopRequirements = fields.workshopRequirements[0];
  const participant = fields.participant[0];
  const website = fields.website[0];
  const instagram = fields.instagram[0];
  const message = fields.message[0];
  const privacyPolicy = ["true", "yes", "1"].includes(fields.privacyPolicy[0].toLowerCase());
  const dataStorage = ["true", "yes", "1"].includes(fields.dataStorage[0].toLowerCase());
  const pictureRights = ["true", "yes", "1"].includes(fields.pictureRights[0].toLowerCase());
  const workshopConditions = ["true", "yes", "1"].includes(
    fields.workshopConditions[0].toLowerCase()
  );

  const errors = [];

  // Eingabevalidierung
  const invalidCharactersRegex = /[<>;'"\\]/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Helper function for string validation
  const validateString = (value, fieldName, minLength, maxLength) => {
    if (!value || !value.trim()) {
      errors.push({ field: fieldName, message: `${fieldName} ist ein Pflichtfeld` });
    } else {
      if (value.length < minLength)
        errors.push({ field: fieldName, message: `${fieldName} ist zu kurz` });
      if (value.length > maxLength)
        errors.push({ field: fieldName, message: `${fieldName} ist zu lang` });
      if (invalidCharactersRegex.test(value)) {
        errors.push({ field: fieldName, message: `Ungültige Zeichen in ${fieldName}` });
      }
    }
  };

  // Validate required fields
  validateString(name, "name", 3, 50);
  validateString(lastName, "lastName", 3, 50);
  if (email && !emailRegex.test(email)) {
    errors.push({ field: "email", message: "E-Mail-Adresse ist ungültig" });
  }
  validateString(street, "street", 5, 100);
  validateString(postalCode, "postalCode", 2, 10);
  validateString(city, "city", 2, 50);
  validateString(country, "country", 2, 50);
  validateString(workshopTitle, "workshopTitle", 3, 50);
  validateString(workshopDescription, "workshopDescription", 3, 50);
  if (leaders < 1) {
    errors.push({ field: "leaders", message: "Mindestens ein Leiter muss angegeben werden" });
  }
  if (leaders > 5) {
    errors.push({ field: "leaders", message: "Maximal fünf Leiter können angegeben werden" });
  }
  validateString(timeSlots, "timeSlots", 3, 200);
  if (constructionTime < 1) {
    errors.push({ field: "constructionTime", message: "Aufbauzeit muss mindestens 1 sein" });
  }
  if (constructionTime > 60) {
    errors.push({ field: "constructionTime", message: "Aufbauzeit darf maximal 360 sein" });
  }
  if (performanceTime < 30) {
    errors.push({ field: "performanceTime", message: "Aufführungszeit muss mindestens 1 sein" });
  }
  if (performanceTime > 180) {
    errors.push({ field: "performanceTime", message: "Aufführungszeit darf maximal 360 sein" });
  }
  if (deconstructionTime < 1) {
    errors.push({ field: "deconstructionTime", message: "Abbauzeit muss mindestens 1 sein" });
  }
  if (deconstructionTime > 60) {
    errors.push({ field: "deconstructionTime", message: "Abbauzeit darf maximal 360 sein" });
  }
  validateString(workshopRequirements, "workshopRequirements", 3, 2500);
  if (participant < 1) {
    errors.push({
      field: "participant",
      message: "Mindestens ein Teilnehmer muss angegeben werden",
    });
  }
  if (participant > 50) {
    errors.push({ field: "participant", message: "Maximal 50 Teilnehmer können angegeben werden" });
  }

  // Optional fields
  if (website) validateString(website, "website", 3, 100);
  if (instagram) validateString(instagram, "instagram", 3, 100);
  if (message) validateString(message, "message", 3, 2500);

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
  if (typeof workshopConditions !== "boolean" || workshopConditions === false) {
    errors.push({
      field: "workshopConditions",
      message: "Workshop-Bedingungen müssen bestätigt werden",
    });
  }

  // Fehler prüfen
  if (errors.length > 0) {
    console.log("Fehler beim Einfügen der Daten:", errors);
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

    const uploadDir = path.join(process.cwd(), `/private/workshopImage`);

    filePath = path.join(uploadDir, filename);

    await fs.rename(file.filepath, filePath);

    filePath = `/workshopImage/${filename}`;

    // Inserting the new data record
    const query = `
    INSERT INTO registration_artist (
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
        performance_time,
        deconstruction_time,
        workshop_requirements,
        participant,
        website,
        instagram,
        message,
        privacy_policy,
        data_storage,
        picture_rights,
        workshop_conditions,
        image_url
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

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
      performanceTime,
      deconstructionTime,
      workshopRequirements,
      participant,
      website || null,
      instagram || null,
      message || null,
      privacyPolicy,
      dataStorage,
      pictureRights,
      workshopConditions,
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
      performanceTime,
      deconstructionTime,
      workshopRequirements,
      participant,
      website,
      instagram,
      message,
    });

    res.status(200).json({ message: "Daten erfolgreich eingefügt." });
  } catch (error) {
    console.error("Fehler beim Einfügen der Daten:", error);
    res.status(500).json({ error: "Daten konnten nicht gespeichert werden." });
  }
}
