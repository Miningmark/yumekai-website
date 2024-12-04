import mysql from "mysql2/promise";

/**
 
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
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
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
    image_url VARCHAR(255)
);


 */
/*
export async function POST(req) {
  const url = new URL(req.url);
  const chatId = url.pathname.split("/")[3]; // Extrahiere die Chat-ID aus der URL

  if (!chatId) {
    return NextResponse.json({ message: "Chat ID is required" }, { status: 400 });
  }

  try {
    const formData = await req.formData();
    const content = formData.get("content");
    const senderId = formData.get("senderId");
    const file = formData.get("file");

    if ((!content && !file) || !senderId) {
      return NextResponse.json({ message: "Content and senderId are required" }, { status: 400 });
    }

    //console.log("file", file);
    //console.log("type", file?.type);

    let filePath = null;

    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const filename = Date.now() + "_" + file.name.replaceAll(" ", "_");

      const uploadDir = path.join(process.cwd(), `/private/chatuploads`);
      filePath = path.join(uploadDir, filename);

      await writeFile(filePath, buffer);

      filePath = `/chatuploads/${filename}`;
    }

    const [result] = await pool.execute(
      "INSERT INTO chat_messages (chat_id, sender_id, content, file_url, file_type) VALUES (?, ?, ?, ?, ?)",
      [chatId, senderId, content, filePath ? filePath : null, filePath ? file.type : null]
    );

    const newMessage = {
      id: result.insertId,
      chat_id: chatId,
      sender_id: senderId,
      content,
      filePath: filePath ? filePath : null,
      timestamp: new Date(),
    };

    return NextResponse.json(newMessage, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
  */

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const clientIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log(clientIp);

    const {
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
      privacyPolicy,
      contactForwarding,
      workTimeSaturday,
      workTimeSunday,
    } = req.body;

    console.log(
      clientIp,
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
      privacyPolicy,
      contactForwarding,
      workTimeSaturday,
      workTimeSunday
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
    validateString(email, "email", 5, 100);
    if (email && !emailRegex.test(email)) {
      errors.push({ field: "email", message: "E-Mail-Adresse ist ungültig" });
    }
    validateString(discordName, "discordName", 2, 50);
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
    if (foodDetails) validateString(foodDetails, "allergies", 2, 500);
    if (strengths) validateString(strengths, "strengths", 2, 255);
    if (desiredTeam) validateString(desiredTeam, "desiredTeam", 2, 255);
    if (other) validateString(other, "other", 2, 500);
    if (workTimeSaturday) validateString(workTimeSaturday, "workTimeSaturday", 2, 255);
    if (workTimeSunday) validateString(workTimeSunday, "workTimeSunday", 2, 255);

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
      console.log("Fehler beim Einfügen der Daten:", errors);
      return res.status(400).json({ errors });
    }

    try {
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
        workTime_sunday
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

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
      ];

      const [result] = await connection.query(query, values);

      res.status(200).json({ message: "Daten erfolgreich eingefügt." });
    } catch (err) {
      console.error("Fehler beim Einfügen der Daten:", err);
      res.status(500).json({ error: "Daten konnten nicht gespeichert werden." });
    }
  } else {
    res.status(405).json({ message: "Methode nicht erlaubt." });
  }
}
