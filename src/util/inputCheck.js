// Eingabevalidierung
const invalidCharactersRegex = /[<>;'"\\]/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Helper function for string validation
export default function validateString(
  value,
  fieldName,
  minLength = 2,
  maxLength = 50,
  requierdField = false,
  email = false
) {
  if (requierdField) {
    if (!value || !value.trim()) {
      return { check: false, description: `${fieldName} ist ein Pflichtfeld` };
    }
  }
  if (email) {
    if (!emailRegex.test(value)) {
      return { check: false, description: `Ungültige Email-Adresse` };
    }
  } else {
    if (value || value.trim()) {
      if (value.length < minLength)
        return { check: false, description: `${fieldName} ist zu kurz min. ${minLength} Zeichen` };
      if (value.length > maxLength)
        return { check: false, description: `${fieldName} ist zu lang max. ${maxLength} Zeichen` };
    }
  }
  return { check: true, description: "" };
}
