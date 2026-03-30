/**
 * Hilfsfunktionen zum Laden von Demo-Dateien für Registrierungsformulare
 */

/**
 * Erstellt ein File-Objekt aus einem Next.js Image-Import oder einer URL
 * @param {object|string} imageImport - Next.js Image-Objekt (.src) oder direkte URL
 * @param {string} fileName - Dateiname für das erstellte File-Objekt
 * @returns {{ file: File, previewUrl: string } | null}
 */
export const createFileFromImage = async (imageImport, fileName) => {
  try {
    const imageUrl = typeof imageImport === "object" ? imageImport.src : imageImport;

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    const file = new File([blob], fileName, {
      type: "image/png",
      lastModified: Date.now(),
    });
    const previewUrl = URL.createObjectURL(blob);

    return { file, previewUrl };
  } catch (error) {
    console.error("Fehler beim Laden des Demo-Bildes:", error);
    return null;
  }
};

/**
 * Erstellt ein File-Objekt aus einer PDF-URL
 * @param {string} pdfUrl - URL zur PDF-Datei
 * @param {string} fileName - Dateiname für das erstellte File-Objekt
 * @returns {{ file: File, previewUrl: string } | null}
 */
export const createFileFromPDF = async (pdfUrl, fileName) => {
  try {
    const response = await fetch(pdfUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blob = await response.blob();
    const file = new File([blob], fileName, {
      type: "application/pdf",
      lastModified: Date.now(),
    });
    const previewUrl = URL.createObjectURL(blob);

    return { file, previewUrl };
  } catch (error) {
    console.error("Fehler beim Laden des Demo-PDFs:", error);
    return null;
  }
};
