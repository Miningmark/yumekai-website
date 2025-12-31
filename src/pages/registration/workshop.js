import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import validateString, { validateField } from "@/util/inputCheck";

//Components
import {
  InputOptionTextArea,
  InputOptionInput,
  InputOptionSelect,
} from "@/components/elements/InputComponents";
import {
  StyledButton,
  StyledForm,
  ErrorText,
  SuccessText,
  StyledLink,
  Spacer,
  ModalOverlay,
} from "@/components/styledComponents";
import { RequiredNote } from "@/components/styledInputComponents";
import CheckBox from "@/components/styled/CheckBox";
import MultiFileUpload from "@/components/styled/MultiFileUpload";
import LoadingAnimation from "@/components/styled/LoadingAnimation";
import {
  REGISTRATION_START_WORKSHOP,
  REGISTRATION_END_WORKSHOP,
  checkRegistrationPeriod,
  EVENT_ID,
  GENDER_OPTIONS,
} from "@/util/registration_options";
import AddressFields from "@/components/registrations/AddressFields";
import ImageCropModal from "@/util/ImageCropModal";

import hiruKunstlerImage from "/public/assets/hirus/Hiru_Kunstler.png";

const FieldErrorText = styled(ErrorText)`
  margin-top: -10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const TimeslotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  ${({ $iserror }) => $iserror && `border: solid 2px red;`}
  ${({ $iserror }) => $iserror && `padding: 10px;`}
`;

const ACCEPTED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
const MAX_IMAGE_SIZE_MB = 5;

const isImageFile = (fileName) => {
  return ACCEPTED_IMAGE_EXTENSIONS.some((ext) => fileName.toLowerCase().endsWith(ext));
};

export default function Workshop() {
  const [eventId, setEventId] = useState(EVENT_ID);

  const [registrationStatus, setRegistrationStatus] = useState(() =>
    checkRegistrationPeriod(REGISTRATION_START_WORKSHOP, REGISTRATION_END_WORKSHOP)
  );

  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [addressData, setAddressData] = useState({
    street: "",
    houseNumber: "",
    postalCode: "",
    city: "",
    country: "",
  });

  const [workshopTitle, setWorkshopTitle] = useState("");
  const [announcementText, setAnnouncementText] = useState("");
  const [leaders, setLeaders] = useState(1);
  const [timeSlot1, setTimeSlot1] = useState(false);
  const [timeSlot2, setTimeSlot2] = useState(false);
  const [timeSlot3, setTimeSlot3] = useState(false);
  const [timeSlot4, setTimeSlot4] = useState(false);
  const [constructionTime, setConstructionTime] = useState(0);
  const [workshopTime, setWorkshopTime] = useState(0);
  const [deconstructionTime, setDeconstructionTime] = useState(0);
  const [workshopRequirements, setWorkshopRequirements] = useState("");
  const [participants, setParticipants] = useState(0);

  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [imageFile, setImageFile] = useState([]);
  const [imagePreviewUrl, setImagePreviewUrl] = useState([]);
  const [imageError, setImageError] = useState("");
  const [socialMediaImageFile, setSocialMediaImageFile] = useState([]);
  const [socialMediaImagePreviewUrl, setSocialMediaImagePreviewUrl] = useState([]);

  const [message, setMessage] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [dataStorage, setDataStorage] = useState(false);
  const [pictureRights, setPictureRights] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [fileError, setFileError] = useState("");
  const [loading, setLoading] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});

  const [showCropModal, setShowCropModal] = useState(false);
  const [tempImageUrl, setTempImageUrl] = useState(null);
  const [tempFile, setTempFile] = useState(null);

  const [registrationTest, setRegistrationTest] = useState(false);

  const refs = {
    gender: useRef(null),
    name: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    confirmEmail: useRef(null),
    street: useRef(null),
    houseNumber: useRef(null),
    postalCode: useRef(null),
    city: useRef(null),
    country: useRef(null),
    workshopTitle: useRef(null),
    announcementText: useRef(null),
    leaders: useRef(null),
    timeSlots: useRef(null),
    constructionTime: useRef(null),
    workshopTime: useRef(null),
    deconstructionTime: useRef(null),
    workshopRequirements: useRef(null),
    participants: useRef(null),
    website: useRef(null),
    instagram: useRef(null),
    image: useRef(null),
    socialMediaImageFile: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
    pictureRights: useRef(null),
  };

  useEffect(() => {
    // Prüfe auf Test-Modus
    const urlParams = new URLSearchParams(window.location.search);
    const isTestMode = urlParams.get("test") === "true";

    if (isTestMode) {
      setRegistrationTest(true);
      fillDemoData();
    }

    // Interval nur setzen wenn NICHT im Test-Modus
    if (!isTestMode) {
      const interval = setInterval(() => {
        setRegistrationStatus(
          checkRegistrationPeriod(REGISTRATION_START_WORKSHOP, REGISTRATION_END_WORKSHOP)
        );
      }, 60000);

      return () => clearInterval(interval);
    }
  }, []);


// Next.js-spezifische Funktion
const createFileFromImage = async (imageImport, fileName) => {
  try {
    // In Next.js ist imageImport ein Objekt mit .src Property
    const imageUrl = typeof imageImport === 'object' ? imageImport.src : imageImport;
    
    console.log("Lade Bild von:", imageUrl);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const blob = await response.blob();
    console.log("Blob geladen:", blob.type, blob.size, "bytes");
    
    // Erstelle File mit korrektem Type
    const file = new File([blob], fileName, { 
      type: 'image/png',
      lastModified: Date.now()
    });

    // Erstelle Preview-URL
    const previewUrl = URL.createObjectURL(blob);

    console.log("File erstellt:", {
      name: file.name,
      size: file.size,
      type: file.type
    });

    return { file, previewUrl };
  } catch (error) {
    console.error("Fehler beim Laden des Demo-Bildes:", error);
    return null;
  }
};

// Deine fillDemoData Funktion bleibt gleich
const fillDemoData = async () => {
  setGender("m");
  setName("Max");
  setLastName("Mustermann");
  setEmail("max.mustermann@example.com");
  setConfirmEmail("max.mustermann@example.com");
  setAddressData({
    street: "Musterstraße",
    houseNumber: "42",
    postalCode: "12345",
    city: "Musterstadt",
    country: "Deutschland",
  });
  setWorkshopTitle("Origami für Anfänger");
  setAnnouncementText(
    "In diesem Workshop lernt ihr die Grundlagen der japanischen Papierfaltkunst. " +
    "Wir erstellen gemeinsam verschiedene Figuren wie Kraniche, Blumen und andere schöne Objekte. " +
    "Keine Vorkenntnisse erforderlich! Alle Materialien werden gestellt. " +
    "Dieser Workshop ist perfekt für alle, die eine entspannende kreative Aktivität suchen."
  );
  setLeaders(2);
  setTimeSlot1(true);
  setTimeSlot3(true);
  setConstructionTime(15);
  setWorkshopTime(90);
  setDeconstructionTime(10);
  setWorkshopRequirements(
    "Tische und Stühle für die Teilnehmer, gute Beleuchtung, Stromanschluss"
  );
  setParticipants(20);
  setWebsite("https://www.beispiel-workshop.de");
  setInstagram("@workshopleiter");
  setMessage("Freue mich sehr auf die YumeKai 2026!");
  setPrivacyPolicy(true);
  setDataStorage(true);
  setPictureRights(true);

  // Demo-Bild laden
  console.log("Starte Laden des Demo-Bildes...");
  const demoImage = await createFileFromImage(hiruKunstlerImage, "demo-workshop-bild.png");
  if (demoImage) {
    setImageFile([demoImage.file]);
    setImagePreviewUrl([demoImage.previewUrl]);
    console.log("✓ Demo-Bild erfolgreich gesetzt");
  } else {
    console.error("✗ Demo-Bild konnte nicht geladen werden");
  }

  // Demo Social Media Bild
  const demoSocialImage = await createFileFromImage(hiruKunstlerImage, "demo-social-media.png");
  if (demoSocialImage) {
    setSocialMediaImageFile([demoSocialImage.file]);
    setSocialMediaImagePreviewUrl([demoSocialImage.previewUrl]);
    console.log("✓ Demo Social-Media-Bild erfolgreich gesetzt");
  } else {
    console.error("✗ Demo Social-Media-Bild konnte nicht geladen werden");
  }
};

  const handleAddressDataChange = (field, value) => {
    setAddressData((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    // Validierung triggern wenn imageFile sich ändert UND das Feld bereits berührt wurde
    if (touchedFields.image) {
      const error = validateSingleField("image", null, { file: imageFile });
      setFieldErrors((prev) => ({
        ...prev,
        image: error,
      }));
    }
  }, [imageFile, touchedFields.image]);

  // Zentrale Validierungsfunktion
  const validateSingleField = (field, value, additionalData = {}) => {
    let error = null;

    switch (field) {
      case "gender":
        if (!value || value.trim() === "") {
          error = "Geschlecht ist ein Pflichtfeld";
        }
        break;

      case "name":
        const nameValidation = validateString(value, "Vorname", 2, 50, true);
        if (!nameValidation.check) error = nameValidation.description;
        break;

      case "lastName":
        const lastNameValidation = validateString(value, "Nachname", 2, 50, true);
        if (!lastNameValidation.check) error = lastNameValidation.description;
        break;

      case "email":
        const emailValidation = validateString(value, "E-Mail", 2, 100, true, true);
        if (!emailValidation.check) error = emailValidation.description;
        break;

      case "confirmEmail":
        if (!value || value.trim() === "") {
          error = "E-Mail-Bestätigung ist erforderlich";
        } else if (value.trim().toLowerCase() !== additionalData.email?.trim().toLowerCase()) {
          error = "E-Mail-Adressen stimmen nicht überein";
        }
        break;

      case "street":
        const streetError = validateField(value, "Straße", 3, 50, true);
        if (streetError) error = streetError.message;
        break;

      case "houseNumber":
        const houseNumberError = validateField(value, "Hausnummer", 1, 10, true);
        if (houseNumberError) error = houseNumberError.message;
        break;

      case "postalCode":
        const postalCodeError = validateField(value, "PLZ", 2, 10, true);
        if (postalCodeError) error = postalCodeError.message;
        break;

      case "city":
        const cityError = validateField(value, "Ort", 2, 50, true);
        if (cityError) error = cityError.message;
        break;

      case "country":
        const countryError = validateField(value, "Land", 2, 50, true);
        if (countryError) error = countryError.message;
        break;

      case "workshopTitle":
        const workshopTitleValidation = validateString(value, "Titel des Workshops", 3, 100, true);
        if (!workshopTitleValidation.check) error = workshopTitleValidation.description;
        break;

      case "announcementText":
        const announcementValidation = validateString(value, "Ankündigungstext", 10, 2500, true);
        if (!announcementValidation.check) error = announcementValidation.description;
        break;

      case "leaders":
        if (value < 1) error = "Mindestens 1 Leiter*in erforderlich";
        else if (value > 5) error = "Maximal 5 Leiter*innen";
        break;

      case "timeSlots":
        if (
          !additionalData.timeSlot1 &&
          !additionalData.timeSlot2 &&
          !additionalData.timeSlot3 &&
          !additionalData.timeSlot4
        ) {
          error = "Bitte mindestens einen Zeitraum wählen";
        }
        break;

      case "constructionTime":
        if (value < 1) error = "Aufbauzeit mindestens 1 Minute";
        else if (value > 30) error = "Aufbauzeit maximal 30 Minuten";
        break;

      case "workshopTime":
        if (value < 30) error = "Workshopzeit mindestens 30 Minuten";
        else if (value > 360) error = "Workshopzeit maximal 360 Minuten";
        break;

      case "deconstructionTime":
        if (value < 1) error = "Abbauzeit mindestens 1 Minute";
        else if (value > 30) error = "Abbauzeit maximal 30 Minuten";
        break;

      case "workshopRequirements":
        if (value && value.trim().length > 0) {
          const requirementsValidation = validateString(
            value,
            "Anforderungen für den Workshop",
            5,
            2500
          );
          if (!requirementsValidation.check) error = requirementsValidation.description;
        }
        break;

      case "participants":
        if (value && value > 0) {
          if (value < 1) error = "Mindestens 1 Teilnehmer*in";
          else if (value > 40) error = "Maximal 40 Teilnehmer*innen";
        }
        break;

      case "website":
        const websiteValidation = validateString(value, "Website", 0, 100);
        if (!websiteValidation.check) error = websiteValidation.description;
        break;

      case "instagram":
        const instagramValidation = validateString(value, "Instagram", 0, 100);
        if (!instagramValidation.check) error = instagramValidation.description;
        break;

      case "message":
        const messageValidation = validateString(value, "Nachricht", 0, 2500);
        if (!messageValidation.check) error = messageValidation.description;
        break;

      case "image":
        if (imageFile.length < 1) error = "Bild ist ein Pflichtfeld";
        console.log("Validating image file:", imageFile.length);
        break;

      case "socialMediaImage":
        // optional field, no validation needed
        break;

      case "privacyPolicy":
        if (!value) error = "Datenschutzerklärung muss akzeptiert werden";
        break;

      case "dataStorage":
        if (!value) error = "Datenspeicherung muss akzeptiert werden";
        break;

      case "pictureRights":
        if (!value) error = "Bildrechte müssen bestätigt werden";
        break;
    }

    return error;
  };

  // onBlur Handler für Echtzeit-Validierung
  const handleBlur = (field, value, additionalData = {}) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));

    const error = validateSingleField(field, value, additionalData);
    setFieldErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  };

  // Fehler für ein bestimmtes Feld abrufen
  const getFieldError = (field) => {
    return touchedFields[field] ? fieldErrors[field] : null;
  };

  // Alle Felder validieren
  const validateAllFields = () => {
    const errors = {};

    // Persönliche Angaben
    errors.gender = validateSingleField("gender", gender);
    errors.name = validateSingleField("name", name);
    errors.lastName = validateSingleField("lastName", lastName);
    errors.email = validateSingleField("email", email);
    errors.confirmEmail = validateSingleField("confirmEmail", confirmEmail, { email });

    // Adresse
    errors.street = validateSingleField("street", addressData.street);
    errors.houseNumber = validateSingleField("houseNumber", addressData.houseNumber);
    errors.postalCode = validateSingleField("postalCode", addressData.postalCode);
    errors.city = validateSingleField("city", addressData.city);
    errors.country = validateSingleField("country", addressData.country);

    // Workshop
    errors.workshopTitle = validateSingleField("workshopTitle", workshopTitle);
    errors.announcementText = validateSingleField("announcementText", announcementText);
    errors.leaders = validateSingleField("leaders", leaders);
    errors.timeSlots = validateSingleField("timeSlots", null, {
      timeSlot1,
      timeSlot2,
      timeSlot3,
      timeSlot4,
    });
    errors.constructionTime = validateSingleField("constructionTime", constructionTime);
    errors.workshopTime = validateSingleField("workshopTime", workshopTime);
    errors.deconstructionTime = validateSingleField("deconstructionTime", deconstructionTime);
    errors.workshopRequirements = validateSingleField("workshopRequirements", workshopRequirements);
    errors.participants = validateSingleField("participants", participants);

    // Allgemeines
    errors.website = validateSingleField("website", website);
    errors.instagram = validateSingleField("instagram", instagram);
    errors.message = validateSingleField("message", message);
    errors.image = validateSingleField("image", null, { file: imageFile });
    errors.socialMediaImageFile = validateSingleField("socialMediaImageFile", null, {
      file: socialMediaImageFile,
    });

    // Bedingungen
    errors.privacyPolicy = validateSingleField("privacyPolicy", privacyPolicy);
    errors.dataStorage = validateSingleField("dataStorage", dataStorage);
    errors.pictureRights = validateSingleField("pictureRights", pictureRights);

    // Filtere null-Werte heraus
    Object.keys(errors).forEach((key) => {
      if (errors[key] === null) delete errors[key];
    });

    return errors;
  };

  async function submit(event) {
    event.preventDefault();

    setSuccess("");

    // Alle Felder als "touched" markieren
    const allFields = Object.keys(refs);
    const touched = {};
    allFields.forEach((field) => (touched[field] = true));
    setTouchedFields(touched);

    // Validierung durchführen
    const errors = validateAllFields();
    setFieldErrors(errors);

    // Wenn Fehler vorhanden sind, zum ersten Fehler scrollen
    if (Object.keys(errors).length > 0) {
      const firstErrorField = Object.keys(errors)[0];
      if (refs[firstErrorField]?.current) {
        refs[firstErrorField].current.scrollIntoView({ behavior: "smooth", block: "center" });
        refs[firstErrorField].current.focus();
      }
      return;
    }

    setLoading(true);

    const timeSlots = [
      timeSlot1 && "Samstag 11:00-15:00 Uhr",
      timeSlot2 && "Samstag 15:00-20:00 Uhr",
      timeSlot3 && "Sonntag 11:00-14:00 Uhr",
      timeSlot4 && "Sonntag 14:00-18:00 Uhr",
    ]
      .filter(Boolean)
      .join(", ")
      .trim();

    const formData = new FormData();
    formData.append("eventId", eventId);
    formData.append("gender", gender.trim());
    formData.append("firstName", name.trim());
    formData.append("lastName", lastName.trim());
    formData.append("email", email.trim().toLowerCase());
    formData.append("street", addressData.street.trim());
    formData.append("houseNumber", addressData.houseNumber.trim());
    formData.append("postalCode", addressData.postalCode.trim());
    formData.append("city", addressData.city.trim());
    formData.append("country", addressData.country.trim());
    formData.append("workshopTitle", workshopTitle.trim());
    formData.append("announcementText", announcementText.trim());
    formData.append("leaders", leaders);
    formData.append("timeSlots", timeSlots);
    formData.append("constructionTime", constructionTime);
    formData.append("workshopTime", workshopTime);
    formData.append("deconstructionTime", deconstructionTime);
    formData.append("workshopRequirements", workshopRequirements.trim());
    formData.append("participants", participants || 40);
    formData.append("website", website.trim());
    formData.append("instagram", instagram.trim());
    formData.append("message", message.trim());
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("dataStoragePolicy", dataStorage);
    formData.append("pictureRightsPolicy", pictureRights);
    formData.append("image", imageFile[0]);
    if (socialMediaImageFile[0]) {
      formData.append("socialMediaImage", socialMediaImageFile[0]);
    }

    try {
      const fetchURL = registrationTest
        ? "https://node.miningmark.de"
        : "https://orgaboard.yumekai.de";
      const response = await fetch(`${fetchURL}/api/v1/event/application/createWorkshop`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(
          "Deine Anmeldung war erfolgreich. Du erhältst in Kürze eine Bestätigung per E-Mail."
        );
        // Reset form
        setGender("");
        setName("");
        setLastName("");
        setEmail("");
        setConfirmEmail("");
        setAddressData({ street: "", houseNumber: "", postalCode: "", city: "", country: "" });
        setWorkshopTitle("");
        setAnnouncementText("");
        setLeaders(1);
        setTimeSlot1(false);
        setTimeSlot2(false);
        setTimeSlot3(false);
        setTimeSlot4(false);
        setConstructionTime(0);
        setWorkshopTime(0);
        setDeconstructionTime(0);
        setWorkshopRequirements("");
        setParticipants(0);
        setWebsite("");
        setInstagram("");
        setMessage("");
        setPrivacyPolicy(false);
        setDataStorage(false);
        setPictureRights(false);
        setImageFile([]);
        setImagePreviewUrl([]);
        setSocialMediaImageFile([]);
        setSocialMediaImagePreviewUrl([]);
        setFieldErrors({});
        setTouchedFields({});
      } else {
        setFieldErrors({
          general: "Fehler beim Absenden der Anmeldung. Bitte versuche es später nochmal.",
        });
      }
    } catch (error) {
      setFieldErrors({
        general: "Fehler beim Absenden der Anmeldung. Bitte versuche es später nochmal.",
      });
    }
    setLoading(false);
  }

  // Handler für Social Media Bild - öffnet Crop Modal
  const handleSocialMediaFileSelect = (selectedFiles) => {
    const selectedFile = selectedFiles[0];
    const maxFileSize = MAX_IMAGE_SIZE_MB * 1024 * 1024;

    if (!selectedFile) {
      return;
    }

    if (selectedFile.size > maxFileSize) {
      setFileError(`Die Datei darf maximal ${MAX_IMAGE_SIZE_MB}MB groß sein.`);
      return;
    }

    if (!isImageFile(selectedFile.name)) {
      setFileError("Bitte wähle ein gültiges Bild aus. (jpg, jpeg, png, webp)");
      return;
    }

    setFileError("");

    const reader = new FileReader();
    reader.onloadend = () => {
      setTempImageUrl(reader.result);
      setTempFile(selectedFile);
      setShowCropModal(true);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleCropComplete = ({ blob, file, previewUrl }) => {
    setSocialMediaImageFile([file]);
    setSocialMediaImagePreviewUrl([previewUrl]);
    setShowCropModal(false);

    // Cleanup
    if (tempImageUrl) {
      URL.revokeObjectURL(tempImageUrl);
    }
    setTempImageUrl(null);
    setTempFile(null);

    // Validierung triggern wenn Feld bereits berührt wurde
    if (touchedFields.socialMediaImageFile) {
      const error = validateSingleField("socialMediaImage", null, { file: file });
      setFieldErrors((prev) => ({
        ...prev,
        socialMediaImageFile: error,
      }));
    }
  };

  const handleCropCancel = () => {
    setShowCropModal(false);

    // Cleanup
    if (tempImageUrl) {
      URL.revokeObjectURL(tempImageUrl);
    }
    setTempImageUrl(null);
    setTempFile(null);

    // Reset file input
    if (refs.socialMediaImageFile?.current) {
      refs.socialMediaImageFile.current.value = "";
    }
  };

  return (
    <>
      <h1>Anmeldung als Workshopleiter</h1>
      <p>Sichert euch euren Platz auf der YumeKai 2026!</p>
      <p>
        <strong>HINWEIS:</strong>
        <br />
        Wir können nicht gewährleisten, dass euer Workshop für die YumeKai 2026 ausgewählt oder der
        gewünschte Zeitslot garantiert werden kann. Bei einer hohen Nachfrage an Workshops streben
        wir an, ein möglichst ausgewogenes Angebot zu schaffen.
        <br />
        <br />
        Falls euer Workshop oder Vortrag ausgewählt wird, erhaltet ihr von uns ein Wochenendticket,
        das den Zugang zur Convention ermöglicht. Detaillierte Informationen zu eurem Workshop oder
        Vortrag werden euch per E-Mail mitgeteilt, sofern ihr ausgewählt werdet.
        <br />
        <br />
        Bitte beachtet, dass wir keine Erstattungen für Materialien oder Fahrtkosten für
        Workshop-Leiter anbieten können. Als Workshopleiter musst du mindestens 18 Jahre alt sein.
        Workshops, die von Ausstellern oder Helfern angeboten werden möchten, werden in unserer
        Auswahl bevorzugt behandelt, sofern dies nicht zu einer Beeinträchtigung eines ausgewogenen
        Angebots führt.
      </p>
      <p>
        Bei Fragen oder eventuellen Unklarheiten kannst du dich gerne per E-Mail an{" "}
        <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> wenden oder unser{" "}
        <StyledLink href="/kontaktformular">Kontaktformular </StyledLink>verwenden.
      </p>

      {!registrationStatus.isActive && (
        <h2>
          <strong>{registrationStatus.message}</strong>
        </h2>
      )}

      {registrationTest && <h2>Testmodus Aktiv!</h2>}

      {registrationStatus.isActive && !success && (
        <SuccessText style={{ fontSize: "1rem", marginTop: "1rem" }}>
          {registrationStatus.message}
        </SuccessText>
      )}

      {!success && (registrationStatus.isActive || registrationTest) && (
        <>
          <p>
            Felder mit <RequiredNote>*</RequiredNote> sind Pflichtfelder.
          </p>

          <StyledForm onSubmit={submit}>
            <h2>Persönliche Angaben</h2>
            <InputOptionSelect
              title="Anrede"
              options={GENDER_OPTIONS.map((option) => option.value)}
              names={GENDER_OPTIONS.map((option) => option.label)}
              inputText={gender}
              inputChange={(value) => setGender(value)}
              onBlur={() => handleBlur("gender", gender)}
              inputRef={refs.gender}
              isError={!!getFieldError("gender")}
              require
            />

            <InputOptionInput
              title="Vorname"
              inputText={name}
              inputChange={(value) => setName(value)}
              onBlur={() => handleBlur("name", name)}
              inputRef={refs.name}
              isError={!!getFieldError("name")}
              require
            />
            {getFieldError("name") && <FieldErrorText>{getFieldError("name")}</FieldErrorText>}

            <InputOptionInput
              title="Nachname"
              inputText={lastName}
              inputChange={(value) => setLastName(value)}
              onBlur={() => handleBlur("lastName", lastName)}
              inputRef={refs.lastName}
              isError={!!getFieldError("lastName")}
              require
            />
            {getFieldError("lastName") && (
              <FieldErrorText>{getFieldError("lastName")}</FieldErrorText>
            )}

            <InputOptionInput
              title="E-Mail"
              inputText={email}
              inputChange={(value) => setEmail(value)}
              onBlur={() => handleBlur("email", email)}
              inputRef={refs.email}
              isError={!!getFieldError("email")}
              require
            />
            {getFieldError("email") && <FieldErrorText>{getFieldError("email")}</FieldErrorText>}

            <InputOptionInput
              title="E-Mail bestätigen"
              inputText={confirmEmail}
              inputChange={setConfirmEmail}
              onBlur={() => handleBlur("confirmEmail", confirmEmail, { email })}
              inputRef={refs.confirmEmail}
              isError={!!getFieldError("confirmEmail")}
              require
            />
            {getFieldError("confirmEmail") && (
              <FieldErrorText>{getFieldError("confirmEmail")}</FieldErrorText>
            )}

            <Spacer />
            <h2>Adresse</h2>

            <AddressFields
              data={addressData}
              onChange={handleAddressDataChange}
              onBlur={handleBlur}
              refs={refs}
              errors={fieldErrors}
              touchedFields={touchedFields}
            />

            <Spacer />
            <h2>Workshop</h2>

            <InputOptionInput
              title="Titel des Workshops"
              inputText={workshopTitle}
              inputChange={setWorkshopTitle}
              onBlur={() => handleBlur("workshopTitle", workshopTitle)}
              inputRef={refs.workshopTitle}
              isError={!!getFieldError("workshopTitle")}
              require
            />
            {getFieldError("workshopTitle") && (
              <FieldErrorText>{getFieldError("workshopTitle")}</FieldErrorText>
            )}

            <InputOptionInput
              title="Leiter*innen"
              inputText={leaders}
              inputChange={setLeaders}
              onBlur={() => handleBlur("leaders", leaders)}
              inputRef={refs.leaders}
              isError={!!getFieldError("leaders")}
              require
              type="number"
              min={1}
              max={5}
            />
            {getFieldError("leaders") && (
              <FieldErrorText>{getFieldError("leaders")}</FieldErrorText>
            )}

            <TimeslotsContainer $iserror={!!getFieldError("timeSlots")} ref={refs.timeSlots}>
              <h3>Bevorzugter Tag/Uhrzeit (mindestens eine Option wählen)<RequiredNote>*</RequiredNote></h3>
              <CheckBox
                title="timeSlot1"
                content="Samstag 11:00-15:00 Uhr"
                isChecked={timeSlot1}
                inputChange={(value) => {
                  setTimeSlot1(value);
                  if (touchedFields.timeSlots) {
                    handleBlur("timeSlots", null, {
                      timeSlot1: value,
                      timeSlot2,
                      timeSlot3,
                      timeSlot4,
                    });
                  }
                }}
              />
              <CheckBox
                title="timeSlot2"
                content="Samstag 15:00-20:00 Uhr"
                isChecked={timeSlot2}
                inputChange={(value) => {
                  setTimeSlot2(value);
                  if (touchedFields.timeSlots) {
                    handleBlur("timeSlots", null, {
                      timeSlot1,
                      timeSlot2: value,
                      timeSlot3,
                      timeSlot4,
                    });
                  }
                }}
              />
              <CheckBox
                title="timeSlot3"
                content="Sonntag 11:00-14:00 Uhr"
                isChecked={timeSlot3}
                inputChange={(value) => {
                  setTimeSlot3(value);
                  if (touchedFields.timeSlots) {
                    handleBlur("timeSlots", null, {
                      timeSlot1,
                      timeSlot2,
                      timeSlot3: value,
                      timeSlot4,
                    });
                  }
                }}
              />
              <CheckBox
                title="timeSlot4"
                content="Sonntag 14:00-18:00 Uhr"
                isChecked={timeSlot4}
                inputChange={(value) => {
                  setTimeSlot4(value);
                  if (touchedFields.timeSlots) {
                    handleBlur("timeSlots", null, {
                      timeSlot1,
                      timeSlot2,
                      timeSlot3,
                      timeSlot4: value,
                    });
                  }
                }}
              />
            </TimeslotsContainer>
            {getFieldError("timeSlots") && (
              <FieldErrorText>{getFieldError("timeSlots")}</FieldErrorText>
            )}

            <InputOptionInput
              title="Aufbauzeit (in Minuten)"
              inputText={constructionTime}
              inputChange={setConstructionTime}
              onBlur={() => handleBlur("constructionTime", constructionTime)}
              inputRef={refs.constructionTime}
              isError={!!getFieldError("constructionTime")}
              require
              type="number"
              min={1}
              max={30}
            />
            {getFieldError("constructionTime") && (
              <FieldErrorText>{getFieldError("constructionTime")}</FieldErrorText>
            )}

            <InputOptionInput
              title="Workshopzeit (in Minuten)"
              inputText={workshopTime}
              inputChange={setWorkshopTime}
              onBlur={() => handleBlur("workshopTime", workshopTime)}
              inputRef={refs.workshopTime}
              isError={!!getFieldError("workshopTime")}
              require
              type="number"
              min={30}
              max={360}
            />
            {getFieldError("workshopTime") && (
              <FieldErrorText>{getFieldError("workshopTime")}</FieldErrorText>
            )}

            <InputOptionInput
              title="Abbauzeit (in Minuten)"
              inputText={deconstructionTime}
              inputChange={setDeconstructionTime}
              onBlur={() => handleBlur("deconstructionTime", deconstructionTime)}
              inputRef={refs.deconstructionTime}
              isError={!!getFieldError("deconstructionTime")}
              require
              type="number"
              min={1}
              max={30}
            />
            {getFieldError("deconstructionTime") && (
              <FieldErrorText>{getFieldError("deconstructionTime")}</FieldErrorText>
            )}

            <InputOptionTextArea
              title={`Anforderungen`}
              inputText={workshopRequirements}
              inputChange={setWorkshopRequirements}
              onBlur={() => handleBlur("workshopRequirements", workshopRequirements)}
              inputRef={refs.workshopRequirements}
              isError={!!getFieldError("workshopRequirements")}
            />
            {getFieldError("workshopRequirements") && (
              <FieldErrorText>{getFieldError("workshopRequirements")}</FieldErrorText>
            )}
            <p style={{ paddingTop: "0px", marginTop: "0px" }}>
              Anforderungen für den Workshop (z.B. Material, Technik, etc.)
            </p>

            <InputOptionInput
              title="max. Workshop Teilnehmer*innen"
              inputText={participants}
              inputChange={setParticipants}
              onBlur={() => handleBlur("participants", participants)}
              inputRef={refs.participants}
              isError={!!getFieldError("participants")}
              type="number"
              min={1}
              max={40}
            />
            {getFieldError("participants") && (
              <FieldErrorText>{getFieldError("participants")}</FieldErrorText>
            )}

            <p>
              Logo/Bild (max. 5MB, jpg, jpeg, png, webp) <RequiredNote>*</RequiredNote>
            </p>
            <MultiFileUpload
              name="logo"
              inputRef={refs.image}
              files={imageFile}
              setFiles={(files) => {
                setImageFile(files);
                setTouchedFields((prev) => ({ ...prev, image: true })); // ⭐ Touched setzen
              }}
              previewUrls={imagePreviewUrl}
              setPreviewUrls={setImagePreviewUrl}
              maxFileSize={MAX_IMAGE_SIZE_MB}
              maxFiles={1}
              acceptedExtensions={ACCEPTED_IMAGE_EXTENSIONS}
              isError={!!getFieldError("image") || !!imageError}
              setFileError={setImageError}
            />
            {(imageError || getFieldError("image")) && (
              <ErrorText style={{ textAlign: "center" }}>
                {imageError || getFieldError("image")}
              </ErrorText>
            )}

            <br />

            <InputOptionTextArea
              title="Ankündigungstext"
              inputText={announcementText}
              inputChange={setAnnouncementText}
              onBlur={() => handleBlur("announcementText", announcementText)}
              inputRef={refs.announcementText}
              isError={!!getFieldError("announcementText")}
              require
            />
            {getFieldError("announcementText") && (
              <FieldErrorText>{getFieldError("announcementText")}</FieldErrorText>
            )}

            <br />
            <p>Social-Media Ankündigungsbild (max. 5MB, jpg, jpeg, png, webp)</p>
            <MultiFileUpload
              name="socialmedia"
              inputRef={refs.socialMediaImageFile}
              files={socialMediaImageFile}
              setFiles={setSocialMediaImageFile}
              previewUrls={socialMediaImagePreviewUrl}
              setPreviewUrls={setSocialMediaImagePreviewUrl}
              maxFileSize={MAX_IMAGE_SIZE_MB}
              maxFiles={1}
              acceptedExtensions={ACCEPTED_IMAGE_EXTENSIONS}
              isError={!!getFieldError("socialMediaImageFile") || !!fileError}
              setFileError={setFileError}
              onFileSelect={handleSocialMediaFileSelect}
            />
            {(fileError || getFieldError("socialMediaImageFile")) && (
              <ErrorText style={{ textAlign: "center" }}>
                {fileError || getFieldError("socialMediaImageFile")}
              </ErrorText>
            )}

            <Spacer />
            <h2>Allgemeines</h2>

            <InputOptionInput
              title="Webseite"
              inputText={website}
              inputChange={setWebsite}
              onBlur={() => handleBlur("website", website)}
              inputRef={refs.website}
              isError={!!getFieldError("website")}
            />
            {getFieldError("website") && (
              <FieldErrorText>{getFieldError("website")}</FieldErrorText>
            )}

            <InputOptionInput
              title="Instagram"
              inputText={instagram}
              inputChange={setInstagram}
              onBlur={() => handleBlur("instagram", instagram)}
              inputRef={refs.instagram}
              isError={!!getFieldError("instagram")}
            />
            {getFieldError("instagram") && (
              <FieldErrorText>{getFieldError("instagram")}</FieldErrorText>
            )}

            <InputOptionTextArea
              title="Möchtest du uns noch etwas mitteilen?"
              inputText={message}
              inputChange={setMessage}
              onBlur={() => handleBlur("message", message)}
              inputRef={refs.message}
              isError={!!getFieldError("message")}
            />
            {getFieldError("message") && (
              <FieldErrorText>{getFieldError("message")}</FieldErrorText>
            )}

            <Spacer />
            <h2>Bedingungen</h2>

            <CheckBox
              title="privacyPolicy"
              content={
                <p>
                  Ich habe die{" "}
                  <StyledLink href="/datenschutz" target="_blank">
                    Datenschutzerklärung
                  </StyledLink>{" "}
                  gelesen, verstanden, und bin mir bewusst, dass ich meine Einwilligung jederzeit
                  widerrufen kann.
                  <RequiredNote>*</RequiredNote>
                </p>
              }
              isChecked={privacyPolicy}
              inputChange={(value) => {
                setPrivacyPolicy(value);
                if (touchedFields.privacyPolicy) {
                  handleBlur("privacyPolicy", value);
                }
              }}
              inputRef={refs.privacyPolicy}
              isError={!!getFieldError("privacyPolicy")}
              require
            />
            {getFieldError("privacyPolicy") && (
              <FieldErrorText>{getFieldError("privacyPolicy")}</FieldErrorText>
            )}

            <CheckBox
              title="dataStorage"
              content={
                <p>
                  Ich willige ein, dass meine Daten von der Firma Dreamfly-Events UG elektronisch
                  gespeichert und zum Zweck der Veranstaltungsdurchführung an die zuständigen
                  Bereiche weitergegeben werden.
                  <RequiredNote>*</RequiredNote>
                </p>
              }
              isChecked={dataStorage}
              inputChange={(value) => {
                setDataStorage(value);
                if (touchedFields.dataStorage) {
                  handleBlur("dataStorage", value);
                }
              }}
              inputRef={refs.dataStorage}
              isError={!!getFieldError("dataStorage")}
              require
            />
            {getFieldError("dataStorage") && (
              <FieldErrorText>{getFieldError("dataStorage")}</FieldErrorText>
            )}

            <CheckBox
              title="pictureRights"
              content={
                <p>
                  Ich versichere, dass ich der alleinige Rechteinhaber des eingereichten
                  Bildmaterials bin. Ich übertrage der Firma Dreamfly-Events UG das nicht-exklusive
                  Nutzungsrecht für sämtliche gegenwärtigen und zukünftigen Zwecke, einschließlich,
                  aber nicht beschränkt auf, Online-Marketing, Social Media, Werbematerialien und
                  Printpublikationen.<RequiredNote>*</RequiredNote>
                </p>
              }
              isChecked={pictureRights}
              inputChange={(value) => {
                setPictureRights(value);
                if (touchedFields.pictureRights) {
                  handleBlur("pictureRights", value);
                }
              }}
              inputRef={refs.pictureRights}
              isError={!!getFieldError("pictureRights")}
              require
            />
            {getFieldError("pictureRights") && (
              <FieldErrorText>{getFieldError("pictureRights")}</FieldErrorText>
            )}

            {fieldErrors.general && (
              <ErrorText style={{ marginTop: "1rem", textAlign: "center" }}>
                {fieldErrors.general}
              </ErrorText>
            )}

            <StyledButton type="submit">Anmelden</StyledButton>
          </StyledForm>
        </>
      )}
      {success && <SuccessText>{success}</SuccessText>}
      {loading && (
        <ModalOverlay>
          <LoadingAnimation />
        </ModalOverlay>
      )}

      {showCropModal && tempImageUrl && (
        <ImageCropModal
          imageUrl={tempImageUrl}
          onCropComplete={handleCropComplete}
          onCancel={handleCropCancel}
          fileName={tempFile?.name || "workshop-social-media-image.png"}
        />
      )}
    </>
  );
}
