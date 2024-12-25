import mysql from "mysql2/promise";
import path from "path";
import fs from "fs/promises";
import formidable from "formidable";
import emailRegistrationHelper from "@/util/email_registrationHelper";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parsing
  },
};

/*
 
CREATE TABLE helfer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_ip VARCHAR(64) NOT NULL,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    discord_name VARCHAR(50),
    birthdate DATE,
    strengths VARCHAR(500),
    desired_team VARCHAR(255),
    other VARCHAR(500),
    nickname VARCHAR(50),
    last_name VARCHAR(50),
    phone VARCHAR(25),
    assembly BOOLEAN,
    deconstruction BOOLEAN,
    gender VARCHAR(20),
    privacy_policy BOOLEAN,
    contact_forwarding BOOLEAN,
    street VARCHAR(100),
    postal_code VARCHAR(10),
    city VARCHAR(50),
    country VARCHAR(50),
    occupation VARCHAR(100),
    clothes_size VARCHAR(5),
    arrival VARCHAR(50),
    requires_parking_ticket BOOLEAN,
    food_preferences ENUM('normal', 'vegetarisch', 'vegan') DEFAULT 'normal',
    food_details VARCHAR(500),
    assembly_friday BOOLEAN,
    workTime_saturday VARCHAR(255),
    workTime_sunday VARCHAR(255),
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
  if (req.method === "POST") {
    const clientIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const { fields, files } = await parseForm(req);

    const name = fields.name[0];
    const lastName = fields.lastName[0];
    const nickname = fields.nickname[0];
    const gender = fields.gender[0];
    const discordName = fields.discordName[0];
    const birthdate = fields.birthdate[0];
    const email = fields.email[0];
    const phone = fields.phone[0];
    const street = fields.street[0];
    const postalCode = fields.postalCode[0];
    const city = fields.city[0];
    const country = fields.country[0];
    const occupation = fields.occupation[0];
    const clothesSize = fields.clothesSize[0];
    const arrival = fields.arrival[0];
    const requiresParkingTicket = ["true", "yes", "1"].includes(
      fields.requiresParkingTicket[0].toLowerCase()
    );
    const foodPreference = fields.foodPreference[0];
    const foodDetails = fields.foodDetails[0];
    const strengths = fields.strengths[0];
    const desiredTeam = fields.desiredTeam[0];
    const other = fields.other[0];
    const assemblyFriday = ["true", "yes", "1"].includes(fields.assemblyFriday[0].toLowerCase());
    const assembly = ["true", "yes", "1"].includes(fields.assembly[0].toLowerCase());
    const deconstruction = ["true", "yes", "1"].includes(fields.deconstruction[0].toLowerCase());
    const privacyPolicy = ["true", "yes", "1"].includes(fields.privacyPolicy[0].toLowerCase());
    const contactForwarding = ["true", "yes", "1"].includes(
      fields.contactForwarding[0].toLowerCase()
    );
    const workTimeSaturday = fields.workTimeSaturday[0];
    const workTimeSunday = fields.workTimeSunday[0];

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
    validateString(email, "email", 5, 100);
    if (email && !emailRegex.test(email)) {
      errors.push({ field: "email", message: "E-Mail-Adresse ist ungültig" });
    }
    validateString(discordName, "discordName", 2, 50, false);
    validateString(phone, "phone", 5, 25);
    validateString(street, "street", 5, 100);
    validateString(postalCode, "postalCode", 2, 10);
    validateString(city, "city", 2, 50);
    validateString(country, "country", 2, 50);
    validateString(clothesSize, "clothSize", 1, 5);
    validateString(foodPreference, "foodPreference", 2, 32);
    validateString(gender, "gender", 2, 20);

    // Optional fields
    if (nickname) validateString(nickname, "nickname", 2, 50);
    if (occupation) validateString(occupation, "occupation", 2, 100);
    if (arrival) validateString(arrival, "arrival", 2, 50);
    if (foodDetails) validateString(foodDetails, "allergies", 2, 500, false);
    if (strengths) validateString(strengths, "strengths", 2, 255);
    if (desiredTeam) validateString(desiredTeam, "desiredTeam", 2, 255);
    if (other) validateString(other, "other", 2, 500, false);
    if (workTimeSaturday) validateString(workTimeSaturday, "workTimeSaturday", 0, 255, false);
    if (workTimeSunday) validateString(workTimeSunday, "workTimeSunday", 0, 255, false);

    // Boolean validation
    if (typeof privacyPolicy !== "boolean") {
      errors.push({
        field: "privacyPolicy",
        message: "Datenschutzrichtlinie muss angegeben werden",
      });
    }
    if (typeof contactForwarding !== "boolean") {
      errors.push({
        field: "contactForwarding",
        message: "Kontaktweiterleitung muss angegeben werden",
      });
    }
    if (assembly !== undefined && typeof assembly !== "boolean") {
      errors.push({ field: "assembly", message: "Assembly muss ein Boolean-Wert sein" });
    }
    if (deconstruction !== undefined && typeof deconstruction !== "boolean") {
      errors.push({
        field: "deconstruction",
        message: "Deconstruction muss ein Boolean-Wert sein",
      });
    }
    if (assemblyFriday !== undefined && typeof assemblyFriday !== "boolean") {
      errors.push({
        field: "assemblyFriday",
        message: "AssemblyFriday muss ein Boolean-Wert sein",
      });
    }
    if (requiresParkingTicket !== undefined && typeof requiresParkingTicket !== "boolean") {
      errors.push({
        field: "requiresParkingTicket",
        message: "RequiresParkingTicket muss ein Boolean-Wert sein",
      });
    }

    // Date validation for birthdate
    if (birthdate && isNaN(Date.parse(birthdate))) {
      errors.push({ field: "birthdate", message: "Ungültiges Geburtsdatum" });
    } else {
      const birthDateObject = new Date(birthdate);
      const today = new Date();
      const age = today.getFullYear() - birthDateObject.getFullYear();
      const isBirthdayPassedThisYear =
        today.getMonth() > birthDateObject.getMonth() ||
        (today.getMonth() === birthDateObject.getMonth() &&
          today.getDate() >= birthDateObject.getDate());

      const actualAge = isBirthdayPassedThisYear ? age : age - 1; // Alter korrigieren, falls Geburtstag dieses Jahr noch nicht war

      if (actualAge < 18) {
        errors.push({ field: "birthdate", message: "Du musst mindestens 18 Jahre alt sein" });
      }
    }

    // Fehler prüfen
    if (errors.length > 0) {
      const errorlog = errors.map((error) => {
        return { field: error.field, message: error.message, value: req.body[error.field] };
      });

      await logError(clientIp, "Helfer Anmeldung", email, errorlog);
      return res.status(400).json({ errors });
    }

    try {
      // Spam-Prüfung: Gibt es eine Anfrage von derselben E-Mail in den letzten 5 Minuten?
      const spamCheckQuery = `
        SELECT COUNT(*) AS count 
        FROM helfer 
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

      const uploadDir = path.join(process.cwd(), `/private/helperImage`);

      filePath = path.join(uploadDir, filename);

      await fs.rename(file.filepath, filePath);

      filePath = `/helperImage/${filename}`;

      // Inserting the new data record
      const query = `
      INSERT INTO helfer (
        client_ip,
        name,
        last_name,
        nickname,
        gender,
        discord_name,
        birthdate,
        email,
        phone,
        street,
        postal_code,
        city,
        country,
        occupation,
        clothes_size,
        arrival,
        requires_parking_ticket,
        food_preferences,
        food_details,
        strengths,
        desired_team,
        other,
        assembly_friday,
        assembly,
        deconstruction,
        privacy_policy,
        contact_forwarding,
        workTime_saturday,
        workTime_sunday,
        image_url
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      const values = [
        clientIp,
        name,
        lastName,
        nickname || null,
        gender,
        discordName,
        birthdate || null,
        email,
        phone,
        street,
        postalCode,
        city,
        country,
        occupation || null,
        clothesSize,
        arrival || null,
        requiresParkingTicket || false,
        foodPreference,
        foodDetails || null,
        strengths || null,
        desiredTeam || null,
        other || null,
        assemblyFriday || false,
        assembly || false,
        deconstruction || false,
        privacyPolicy,
        contactForwarding,
        workTimeSaturday || null,
        workTimeSunday || null,
        filePath || null,
      ];

      const [result] = await connection.query(query, values);

      emailRegistrationHelper({
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
      });

      res.status(200).json({ message: "Daten erfolgreich eingefügt." });
    } catch (error) {
      console.error("Fehler beim Einfügen der Daten:", error);
      await logError(clientIp, "Helfer Anmeldung", email, [
        { field: "server", message: error.message },
      ]);
      res.status(500).json({ error: "Daten konnten nicht gespeichert werden." });
    }
  } else {
    res.status(405).json({ message: "Methode nicht erlaubt." });
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
