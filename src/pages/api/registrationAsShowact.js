import mysql from "mysql2/promise";
import path from "path";
import fs from "fs/promises";
import formidable from "formidable";
import emailRegistrationShowact from "@/util/email_registrationShowact";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parsing
  },
};

/*

CREATE TABLE registration_showact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_ip VARCHAR(64),
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    street VARCHAR(100) NOT NULL,
    postal_code VARCHAR(10) NOT NULL,
    city VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL,
    group_name VARCHAR(50) NOT NULL,
    group_members INT NOT NULL,
    description TEXT NOT NULL,
    time_slots VARCHAR(200) NOT NULL,
    construction_time INT NOT NULL,
    performance_time INT NOT NULL,
    deconstruction_time INT NOT NULL,
    website VARCHAR(100),
    instagram VARCHAR(100),
    message TEXT,
    privacy_policy BOOLEAN NOT NULL,
    data_storage BOOLEAN NOT NULL,
    picture_rights BOOLEAN NOT NULL,
    showact_conditions BOOLEAN NOT NULL,
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
  const groupName = fields.groupName[0];
  const groupMembers = fields.groupMembers[0];
  const description = fields.description[0];
  const timeSlots = fields.timeSlots[0];
  const constructionTime = fields.constructionTime[0];
  const performanceTime = fields.performanceTime[0];
  const deconstructionTime = fields.deconstructionTime[0];
  const website = fields.website[0];
  const instagram = fields.instagram[0];
  const message = fields.message[0];
  const privacyPolicy = ["true", "yes", "1"].includes(fields.privacyPolicy[0].toLowerCase());
  const dataStorage = ["true", "yes", "1"].includes(fields.dataStorage[0].toLowerCase());
  const pictureRights = ["true", "yes", "1"].includes(fields.pictureRights[0].toLowerCase());
  const showactConditions = ["true", "yes", "1"].includes(
    fields.showactConditions[0].toLowerCase()
  );

  const errors = [];

  // Eingabevalidierung
  const invalidCharactersRegex = /[<>;'"\\]/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Helper function for string validation
  const validateString = (value, fieldName, minLength, maxLength, specialCheck = true) => {
    if (!value || !value.trim()) {
      errors.push({ field: fieldName, message: `${fieldName} ist ein Pflichtfeld` });
    } else {
      if (value.length < minLength)
        errors.push({ field: fieldName, message: `${fieldName} ist zu kurz` });
      if (value.length > maxLength)
        errors.push({ field: fieldName, message: `${fieldName} ist zu lang` });
      if (specialCheck) {
        if (invalidCharactersRegex.test(value)) {
          errors.push({ field: fieldName, message: `Ungültige Zeichen in ${fieldName}` });
        }
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
  validateString(groupName, "groupName", 3, 50);
  if (groupMembers < 1) {
    errors.push({ field: "groupMembers", message: "Gruppenmitglieder muss mindestens 1 sein" });
  }
  if (groupMembers > 25) {
    errors.push({ field: "groupMembers", message: "Gruppenmitglieder darf maximal 25 sein" });
  }
  validateString(description, "description", 10, 500);
  validateString(timeSlots, "timeSlots", 10, 200);
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

  // Optional fields
  if (website) validateString(website, "website", 3, 100);
  if (instagram) validateString(instagram, "instagram", 3, 100);
  if (message) validateString(message, "message", 3, 2500, false);

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
  if (typeof showactConditions !== "boolean" || showactConditions === false) {
    errors.push({
      field: "showactConditions",
      message: "Showact-Bedingungen müssen bestätigt werden",
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
    FROM registration_showact
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

    const uploadDir = path.join(process.cwd(), `/private/showactImage`);

    filePath = path.join(uploadDir, filename);

    await fs.rename(file.filepath, filePath);

    filePath = `/showactImage/${filename}`;

    // Inserting the new data record
    const query = `
    INSERT INTO registration_showact (
        client_ip,
        name,
        last_name,
        email,
        street,
        postal_code,
        city,
        country,
        group_name,
        group_members,
        description,
        time_slots,
        construction_time,
        performance_time,
        deconstruction_time,
        website,
        instagram,
        message,
        privacy_policy,
        data_storage,
        picture_rights,
        showact_conditions,
        image_url
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    const values = [
      clientIp,
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
      website || null,
      instagram || null,
      message || null,
      privacyPolicy,
      dataStorage,
      pictureRights,
      showactConditions,
      filePath || null,
    ];

    const [result] = await connection.query(query, values);

    // Erfolgsmeldung zurückgeben
    emailRegistrationShowact({
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
