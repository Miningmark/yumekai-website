import mysql from "mysql2/promise";
import validateString from "@/util/inputCheck";

// MariaDB-Verbindungspool
const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

/*

    CREATE TABLE event_ratings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        ticket_id VARCHAR(10),
        yume_kai_rating INT DEFAULT 99,
        stage_program_rating INT DEFAULT 99,
        price_rating INT DEFAULT 99,
        workshop_rating INT DEFAULT 99,
        vendor_rating INT DEFAULT 99,
        artist_rating INT DEFAULT 99,
        game_area_rating INT DEFAULT 99,
        cosplay_ball_rating INT DEFAULT 99,
        gold_rating INT DEFAULT 99,
        ha_stand_place_rating INT DEFAULT 99,
        ha_price_rating INT DEFAULT 99,
        ha_support_rating INT DEFAULT 99,
        ha_improvement TEXT DEFAULT NULL,
        ku_stand_place_rating INT DEFAULT 99,
        ku_price_rating INT DEFAULT 99,
        ku_support_rating INT DEFAULT 99,
        ku_improvement TEXT DEFAULT NULL,
        best_part TEXT DEFAULT NULL,
        improvement TEXT DEFAULT NULL,
        update_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

*/

// Fehler-Logging
async function logError(clientIp, form, email, errorDetails) {
  try {
    const query = `
      INSERT INTO registration_errors (client_ip, form, email, error_details)
      VALUES (?, ?, ?, ?)
    `;
    await connection.query(query, [
      clientIp,
      form || "EventBewertung",
      email || "unbekannt",
      JSON.stringify(errorDetails),
    ]);
  } catch (err) {
    console.error("Fehler beim Fehler-Logging:", err.message);
  }
}

// API Handler
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Nur POST erlaubt." });
  }

const {
    ticketId,
    yumeKaiRating,
    stageProgramRating,
    priceRating,
    workshopRating,
    vendorRating,
    artistRating,
    gameAreaRating,
    cosplayBallRating,
    goldRating,
    haStandPlaceRating,
    haPriceRating,
    haSupportRating,
    haImprovement,
    kuStandPlaceRating,
    kuPriceRating,
    kuSupportRating,
    kuImprovement,
    bestPart,
    improvement
  } = req.body;


  const errors = [];

 // Validierung der Strings
  const ticketIdValidation = validateString(ticketId, "Ticket-ID", 1, 20, true);
  if (!ticketIdValidation.check) {
    errors.push({ field: "ticketID", message: ticketIdValidation.description });
  }

  const bestPartValidation = validateString(bestPart, "Bestes Teil", 0, 500, false);
  if (!bestPartValidation.check) {
    errors.push({ field: "bestPart", message: bestPartValidation.description });
  }

  const improvementValidation = validateString(improvement, "Verbesserung", 0, 500, false);
  if (!improvementValidation.check) {
    errors.push({ field: "improvement", message: improvementValidation.description });
  }

  const kuImprovementValidation = validateString(kuImprovement, "Künstler Verbesserung", 0, 500, false);
  if (!kuImprovementValidation.check) {
    errors.push({ field: "kuImprovement", message: kuImprovementValidation.description });
  }

  const haImprovementValidation = validateString(haImprovement, "Händler Verbesserung", 0, 500, false);
  if (!haImprovementValidation.check) {
    errors.push({ field: "haImprovement", message: haImprovementValidation.description });
  }

  // Falls Fehler vorhanden sind, abbrechen und zurückgeben
  if (errors.length > 0) {
    await logError(clientIp, "EventBewertung", ticketId, errors);
    return res.status(400).json({ errors });
  }


  try {
    const query = `
      INSERT INTO event_ratings (
        ticket_id,yume_kai_rating, stage_program_rating, price_rating, workshop_rating,
        vendor_rating, artist_rating, game_area_rating, cosplay_ball_rating,
        gold_rating, ha_stand_place_rating, ha_price_rating, ha_support_rating,
        ha_improvement, ku_stand_place_rating, ku_price_rating, ku_support_rating,
        ku_improvement, best_part, improvement
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    await connection.query(query, [
      ticketId, 
      yumeKaiRating || 99, 
      stageProgramRating || 99, 
      priceRating || 99,
      workshopRating || 99, 
      vendorRating || 99, 
      artistRating || 99, 
      gameAreaRating || 99,
      cosplayBallRating || 99, 
      goldRating || 99, 
      haStandPlaceRating || 99,
      haPriceRating || 99, 
      haSupportRating || 99, 
      haImprovement || null,
      kuStandPlaceRating || 99, 
      kuPriceRating || 99, 
      kuSupportRating || 99,
      kuImprovement || null, 
      bestPart || null, 
      improvement || null
    ]);

    res.status(201).json({ message: "Bewertung erfolgreich gespeichert." });
  } catch (err) {
    console.error("Fehler beim Speichern der Bewertung:", err.message);
    await logError(clientIp, "EventBewertung", ticketId, err.message);
    res.status(500).json({ message: "Interner Serverfehler" });
  }



}