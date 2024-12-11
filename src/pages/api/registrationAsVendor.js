import mysql from "mysql2/promise";
import path from "path";
import fs from "fs/promises";
import formidable from "formidable";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parsing
  },
};

/*

CREATE TABLE registration_vendor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_ip VARCHAR(64),
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    vendor_name VARCHAR(50),
    street VARCHAR(100) NOT NULL,
    postal_code VARCHAR(10) NOT NULL,
    city VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL,
    type_of_assortment TEXT NOT NULL,
    description_of_stand TEXT NOT NULL,
    stand_size VARCHAR(50) NOT NULL,
    additional_exhibitor_ticket int DEFAULT 0,
    strom BOOLEAN DEFAULT FALSE,
    wlan BOOLEAN DEFAULT FALSE,
    website VARCHAR(100),
    instagram VARCHAR(100),
    message TEXT,
    privacy_policy BOOLEAN NOT NULL,
    data_storage BOOLEAN NOT NULL,
    licensed_music BOOLEAN NOT NULL,
    picture_rights BOOLEAN NOT NULL,
    vendor_conditions BOOLEAN NOT NULL,
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
  const vendorName = fields.vendorName[0];
  const street = fields.street[0];
  const postalCode = fields.postalCode[0];
  const city = fields.city[0];
  const country = fields.country[0];
  const typeOfAssortment = fields.typeOfAssortment[0];
  const descriptionOfStand = fields.descriptionOfStand[0];
  const standSize = fields.standSize[0];
  const additionalExhibitorTicket = ["true", "yes", "1"].includes(
    fields.additionalExhibitorTicket[0].toLowerCase()
  );
  const strom = ["true", "yes", "1"].includes(fields.strom[0].toLowerCase());
  const wlan = ["true", "yes", "1"].includes(fields.wlan[0].toLowerCase());
  const website = fields.website[0];
  const instagram = fields.instagram[0];
  const message = fields.message[0];
  const privacyPolicy = ["true", "yes", "1"].includes(fields.privacyPolicy[0].toLowerCase());
  const dataStorage = ["true", "yes", "1"].includes(fields.dataStorage[0].toLowerCase());
  const licensedMusic = ["true", "yes", "1"].includes(fields.licensedMusic[0].toLowerCase());
  const pictureRights = ["true", "yes", "1"].includes(fields.pictureRights[0].toLowerCase());
  const vendorConditions = ["true", "yes", "1"].includes(fields.vendorConditions[0].toLowerCase());

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
  validateString(vendorName, "vendorName", 3, 50);
  validateString(street, "street", 5, 100);
  validateString(postalCode, "postalCode", 2, 10);
  validateString(city, "city", 2, 50);
  validateString(country, "country", 2, 50);
  validateString(typeOfAssortment, "typeOfAssortment", 3, 2500);
  validateString(descriptionOfStand, "descriptionOfStand", 3, 2500);
  validateString(standSize, "standSize", 3, 50);

  // Optional fields
  if (website) validateString(website, "website", 3, 100);
  if (instagram) validateString(instagram, "instagram", 3, 100);
  if (message) validateString(message, "message", 3, 2500);

  // Boolean validation
  if (typeof strom !== "boolean") {
    errors.push({
      field: "strom",
      message: "Strom muss ein wahrheitswert sein",
    });
  }
  if (typeof wlan !== "boolean") {
    errors.push({
      field: "wlan",
      message: "Wlan muss ein wahrheitswert sein",
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
  if (typeof vendorConditions !== "boolean" || vendorConditions === false) {
    errors.push({
      field: "vendorConditions",
      message: "Händlerbedingungen müssen bestätigt werden",
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
    FROM registration_vendor
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

    const uploadDir = path.join(process.cwd(), `/private/vendorImage`);

    filePath = path.join(uploadDir, filename);

    await fs.rename(file.filepath, filePath);

    filePath = `/vendorImage/${filename}`;

    // Inserting the new data record
    const query = `
        INSERT INTO registration_vendor (
            client_ip,
            name,
            last_name,
            email,
            vendor_name,
            street,
            postal_code,
            city,
            country,
            type_of_assortment,
            description_of_stand,
            stand_size,
            additional_exhibitor_ticket,
            strom,
            wlan,
            website,
            instagram,
            message,
            privacy_policy,
            data_storage,
            licensed_music,
            picture_rights,
            vendor_conditions,
            image_url
            ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    const values = [
      clientIp,
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
      additionalExhibitorTicket || 0,
      strom || false,
      wlan || false,
      website || null,
      instagram || null,
      message || null,
      privacyPolicy,
      dataStorage,
      licensedMusic,
      pictureRights,
      vendorConditions,
      filePath || null,
    ];

    const [result] = await connection.query(query, values);

    res.status(200).json({ message: "Daten erfolgreich eingefügt." });
  } catch (error) {
    console.error("Fehler beim Einfügen der Daten:", err);
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
