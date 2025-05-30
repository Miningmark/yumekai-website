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

    CREATE TABLE ticket_participation (
        id INT AUTO_INCREMENT PRIMARY KEY,
        ticket_id INT NOT NULL,
        ticket_day text NOT NULL,
        already_participated BOOLEAN DEFAULT FALSE,
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
      form || "TicketAbfrage",
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

  const clientIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const { ticketId } = req.body;

  const errors = [];

  // ticketId Validierung
  const ticketIdValidation = validateString(ticketId, "Ticket-ID", 1, 20, true);
  if (!ticketIdValidation.check) {
    errors.push({ field: "ticketId", message: ticketIdValidation.description });
  }

  if (errors.length > 0) {
    await logError(clientIp, "Ticket-Abfrage", null, errors);
    return res.status(400).json({ errors });
  }

  try {
    const [rows] = await connection.query(
      `
  SELECT 
    MAX(already_participated) AS alreadyUsed,
    JSON_ARRAYAGG(ticket_day) AS ticketDay
  FROM ticket_participation
  WHERE ticket_id = ?
  `,
      [ticketId]
    );

    const result = rows[0] || { alreadyUsed: 0, ticketDay: [] };

    res.status(200).json({
      alreadyUsed: !!result.alreadyUsed,
      ticketDay: JSON.parse(result.ticketDay || "[]"),
    });
  } catch (error) {
    console.error("Fehler bei der Ticket-Abfrage:", error.message);
    await logError(clientIp, "Ticket-Abfrage", null, [{ field: "server", message: error.message }]);
    res.status(500).json({ error: "Datenbankfehler bei der Ticket-Abfrage." });
  }
}
