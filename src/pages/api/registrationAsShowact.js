import mysql from "mysql2/promise";
import path from "path";
import fs from "fs/promises";
import formidable from "formidable";
import emailRegistrationShowact from "@/util/email_registrationShowact";
import validateString from "@/util/inputCheck";

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
    accomodation VARCHAR(100),
    required_equipment TEXT,
    brought_equipment TEXT,
    website VARCHAR(100),
    instagram VARCHAR(100),
    message TEXT,
    privacy_policy BOOLEAN NOT NULL,
    data_storage BOOLEAN NOT NULL,
    picture_rights BOOLEAN NOT NULL,
    showact_conditions BOOLEAN NOT NULL,
    image_url VARCHAR(255),
    file_url VARCHAR(512),
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
      uploadDir: path.join(process.cwd(), "/private/showactImage"),
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
  const groupName = fields.groupName[0];
  const groupMembers = fields.groupMembers[0];
  const description = fields.description[0];
  const timeSlots = fields.timeSlots[0];
  const constructionTime = fields.constructionTime[0];
  const performanceTime = fields.performanceTime[0];
  const deconstructionTime = fields.deconstructionTime[0];
  const accomodation = fields.accomodation[0];
  const requiredEquipment = fields.requiredEquipment[0];
  const broughtEquipment = fields.broughtEquipment[0];
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

  //Gruppenname Validierung
  const groupNameValidation = validateString(groupName, "Gruppenname", 2, 50, true);
  if (!groupNameValidation.check)
    errors.push({ field: "groupName", message: groupNameValidation.description });

  //Gruppenmitglieder Validierung
  if (groupMembers < 1) {
    errors.push({ field: "groupMembers", message: "Gruppenmitglieder muss mindestens 1 sein" });
  }
  if (groupMembers > 25) {
    errors.push({ field: "groupMembers", message: "Gruppenmitglieder darf maximal 25 sein" });
  }

  //Beschreibung Validierung
  const descriptionValidation = validateString(description, "Beschreibung", 5, 2500, true);
  if (!descriptionValidation.check)
    errors.push({ field: "description", message: descriptionValidation.description });

  //Zeitslots Validierung
  const timeSlotsValidation = validateString(timeSlots, "Zeitslots", 5, 200, true);
  if (!timeSlotsValidation.check)
    errors.push({ field: "timeSlots", message: timeSlotsValidation.description });

  //Aufbauzeit Validierung
  if (constructionTime < 1) {
    errors.push({ field: "constructionTime", message: "Aufbauzeit muss mindestens 1 sein" });
  }
  if (constructionTime > 60) {
    errors.push({ field: "constructionTime", message: "Aufbauzeit darf maximal 360 sein" });
  }

  //Aufführungszeit Validierung
  if (performanceTime < 30) {
    errors.push({ field: "performanceTime", message: "Aufführungszeit muss mindestens 1 sein" });
  }
  if (performanceTime > 180) {
    errors.push({ field: "performanceTime", message: "Aufführungszeit darf maximal 360 sein" });
  }

  //Abbauzeit Validierung
  if (deconstructionTime < 1) {
    errors.push({ field: "deconstructionTime", message: "Abbauzeit muss mindestens 1 sein" });
  }
  if (deconstructionTime > 60) {
    errors.push({ field: "deconstructionTime", message: "Abbauzeit darf maximal 360 sein" });
  }

  //Unterkunft Validierung
  const accomodationValidation = validateString(accomodation, "Unterkunft", 0, 100);
  if (!accomodationValidation.check)
    errors.push({ field: "accomodation", message: accomodationValidation.description });

  //Benötigte Technik Validierung
  const requiredEquipmentValidation = validateString(
    requiredEquipment,
    "Benötigte Ausrüstung",
    0,
    2500
  );
  if (!requiredEquipmentValidation.check)
    errors.push({ field: "requiredEquipment", message: requiredEquipmentValidation.description });

  //Mitgebrachte Technik Validierung
  const broughtEquipmentValidation = validateString(
    broughtEquipment,
    "Mitgebrachte Ausrüstung",
    0,
    2500
  );
  if (!broughtEquipmentValidation.check)
    errors.push({ field: "broughtEquipment", message: broughtEquipmentValidation.description });

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
  if (typeof showactConditions !== "boolean" || showactConditions === false) {
    errors.push({
      field: "showactConditions",
      message: "Showact-Bedingungen müssen bestätigt werden",
    });
  }

  // Fehler prüfen
  if (errors.length > 0) {
    const errorlog = errors.map((error) => {
      const fieldValue = fields[error.field]?.[0] || "Field not found"; // Sichere den Zugriff ab
      return {
        field: error.field,
        message: error.message,
        value: fieldValue,
      };
    });

    await logError(clientIp, "Showact Anmeldung", email, errorlog);
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

    // Sicherstellen, dass das Upload-Verzeichnis existiert
    await fs.mkdir(uploadDir, { recursive: true });

    filePath = path.join(uploadDir, filename);

    await fs.rename(file.filepath, filePath);

    filePath = `/showactImage/${filename}`;

    // Verarbeitung von file2

    const file2 = Object.keys(files)
      .filter((key) => key.startsWith("file2"))
      .map((key) => files[key]) // Die Werte der entsprechenden Keys extrahieren
      .flat(); // Falls die Dateien als Array gespeichert sind, flach machen

    const filePath2 = [];

    // `for...of` Schleife für asynchrone Verarbeitung
    for (const file of file2) {
      const filename = Date.now() + "_" + file.originalFilename.replaceAll(" ", "_");
      const uploadPath = path.join(uploadDir, filename);

      await fs.rename(file.filepath, uploadPath);

      const publicPath = `/showactImage/${filename}`;
      filePath2.push(publicPath);
    }

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
        accomodation,
        required_equipment,
        brought_equipment,
        website,
        instagram,
        message,
        privacy_policy,
        data_storage,
        picture_rights,
        showact_conditions,
        image_url,
        file_url
    ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

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
      accomodation,
      requiredEquipment || null,
      broughtEquipment || null,
      website || null,
      instagram || null,
      message || null,
      privacyPolicy,
      dataStorage,
      pictureRights,
      showactConditions,
      filePath || null,
      JSON.stringify(filePath2) || null,
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
      accomodation,
      requiredEquipment,
      broughtEquipment,
      website,
      instagram,
      message,
    });

    res.status(200).json({ message: "Daten erfolgreich eingefügt." });
  } catch (error) {
    console.error("Fehler beim Einfügen der Daten:", error);
    await logError(clientIp, "Showact Anmeldung", email, [
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
