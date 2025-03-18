import mysql from "mysql2/promise";
import path from "path";
import formidable from "formidable";
import emailRegistrationCosplayAuction from "@/util/email_registrationCosplayAuction";
import validateString from "@/util/inputCheck";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parsing
  },
};

/*

CREATE TABLE registration_catwalk (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_ip VARCHAR(64),
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birthdate DATE NOT NULL,
    email VARCHAR(100) NOT NULL,
    artist_name VARCHAR(50),
    character_name VARCHAR(50) NOT NULL,
    character_origin VARCHAR(50) NOT NULL,
    hobby TEXT,
    message TEXT,
    privacy_policy BOOLEAN NOT NULL,
    data_storage BOOLEAN NOT NULL,
    age_check BOOLEAN NOT NULL,
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
      uploadDir: path.join(process.cwd(), "/private/cosplayAuction"),
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
  const birthdate = fields.birthdate[0];
  const email = fields.email[0];
  const artistName = fields.artistName[0];
  const characterName = fields.characterName[0];
  const characterOrigin = fields.characterOrigin[0];
  const hobby = fields.hobby[0];
  const message = fields.message[0];
  const privacyPolicy = fields.privacyPolicy[0];
  const dataStorage = fields.dataStorage[0];
  const ageCheck = fields.ageCheck[0];

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

  // Email Validierung
  const emailValidation = validateString(email, "E-Mail", 2, 100, true, true);
  if (!emailValidation.check) errors.push({ field: "email", message: emailValidation.description });

  // Künstlername Validierung
  const artistNameValidation = validateString(artistName, "Künstlername", 2, 50);
  if (!artistNameValidation.check)
    errors.push({ field: "name", message: artistNameValidation.description });

  // Charakter Validierung
  const characterNameValidation = validateString(characterName, "Charakter", 2, 50, true);
  if (!characterNameValidation.check)
    errors.push({ field: "name", message: characterNameValidation.description });

  // Charakter Ursprung Validierung
  const characterOriginValidation = validateString(
    characterOrigin,
    "Charakter Ursprung",
    2,
    50,
    true
  );
  if (!characterOriginValidation.check)
    errors.push({ field: "name", message: characterOriginValidation.description });

  // Hobby Validierung
  const hobbyValidation = validateString(hobby, "Hobby", 0, 2500);
  if (!hobbyValidation.check) errors.push({ field: "hobby", message: hobbyValidation.description });

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
  if (typeof ageCheck !== "boolean" || ageCheck === false) {
    errors.push({
      field: "ageCheck",
      message: "Altersüberprüfung muss bestätigt werden",
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

    await logError(clientIp, "Cosplay Auction", email, errorlog);
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

    // Inserting the new data record
    const query = `
     INSERT INTO registration_catwalk (
         client_ip,
         name,
         last_name,
            birthdate,
         email,
         artist_name,
         character_name,
            character_origin,
            hobby,
         message,
         privacy_policy,
         data_storage,
            age_check
     ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;

    const values = [
      clientIp,
      name,
      lastName,
      birthdate,
      email,
      artistName || null,
      characterName,
      characterOrigin,
      hobby || null,
      message || null,
      privacyPolicy,
      dataStorage,
      ageCheck,
    ];

    const [result] = await connection.query(query, values);

    // Erfolgsmeldung zurückgeben
    emailRegistrationCosplayAuction({
      name,
      lastName,
      birthdate,
      email,
      artistName,
      characterName,
      characterOrigin,
      hobby,
      message,
    });

    res.status(200).json({ message: "Daten erfolgreich eingefügt." });
  } catch (error) {
    console.error("Fehler beim Einfügen der Daten:", error);
    await logError(clientIp, "Cosplay Versteigerung Anmeldung", email, [
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
