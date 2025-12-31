import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

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
import validateString from "@/util/inputCheck";
import {
  REGISTRATION_START_COSPLAY_PERFORMANCE,
  REGISTRATION_END_COSPLAY_PERFORMANCE,
  checkRegistrationPeriod,
  EVENT_ID,
  GENDER_OPTIONS,
} from "@/util/registration_options";

import hiruKunstlerImage from "/public/assets/hirus/Hiru_Kunstler.png";

const FieldErrorText = styled(ErrorText)`
  margin-top: -10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const ACCEPTED_FILE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".pdf"];
const ACCEPTED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
const ACCEPTED_SOUND_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".mp3", "wav", ".mp4"];
const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_MB_2 = 50;

export default function CosplayPerformance() {
  const [eventId, setEventId] = useState(EVENT_ID);

  const [registrationStatus, setRegistrationStatus] = useState(() =>
    checkRegistrationPeriod(
      REGISTRATION_START_COSPLAY_PERFORMANCE,
      REGISTRATION_END_COSPLAY_PERFORMANCE
    )
  );

  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [artistName, setArtistName] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [characterOrigin, setCharacterOrigin] = useState("");

  const [file, setFile] = useState([]);
  const [previewUrl, setPreviewUrl] = useState([]);

  const [file2, setFile2] = useState([]);
  const [previewUrl2, setPreviewUrl2] = useState([]);

  const [file3, setFile3] = useState([]);
  const [previewUrl3, setPreviewUrl3] = useState([]);

  const [message, setMessage] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [dataStorage, setDataStorage] = useState(false);
  const [pictureRights, setPictureRights] = useState(false);
  const [performanceConditions, setPerformanceConditions] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [fileError, setFileError] = useState("");
  const [fileError2, setFileError2] = useState("");
  const [fileError3, setFileError3] = useState("");
  const [loading, setLoading] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});

  const [registrationTest, setRegistrationTest] = useState(false);

  const refs = {
    gender: useRef(null),
    name: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    confirmEmail: useRef(null),
    artistName: useRef(null),
    characterName: useRef(null),
    characterOrigin: useRef(null),
    file: useRef(null),
    file2: useRef(null),
    file3: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
    pictureRights: useRef(null),
    performanceConditions: useRef(null),
  };

  useEffect(() => {
    // Prüfe auf Test-Modus
    const urlParams = new URLSearchParams(window.location.search);
    const isTestMode = urlParams.get("test") === "true";

    if (isTestMode) {
      setRegistrationTest(true);
      fillDemoData();
    }

    if (!isTestMode) {
      const interval = setInterval(() => {
        setRegistrationStatus(
          checkRegistrationPeriod(
            REGISTRATION_START_COSPLAY_PERFORMANCE,
            REGISTRATION_END_COSPLAY_PERFORMANCE
          )
        );
      }, 60000);

      return () => clearInterval(interval);
    }
  }, []);

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

const createFileFromPDF = async (pdfUrl, fileName) => {
  try {
    console.log("Lade PDF von:", pdfUrl);

    const response = await fetch(pdfUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const blob = await response.blob();
    console.log("PDF Blob geladen:", blob.type, blob.size, "bytes");
    
    // Erstelle File mit korrektem Type
    const file = new File([blob], fileName, { 
      type: 'application/pdf',
      lastModified: Date.now()
    });

    // Erstelle Preview-URL (für PDFs zeigt das nur das Icon)
    const previewUrl = URL.createObjectURL(blob);

    console.log("PDF File erstellt:", {
      name: file.name,
      size: file.size,
      type: file.type
    });

    return { file, previewUrl };
  } catch (error) {
    console.error("Fehler beim Laden des Demo-PDFs:", error);
    return null;
  }
};

// Füge diese Funktion nach den State-Deklarationen hinzu
const fillDemoData = async () => {
  setGender("w"); // Verwende die korrekten GENDER_OPTIONS Werte: "m", "w", "d"
  setName("Luna");
  setLastName("Moonlight");
  setEmail("luna.moonlight@example.com");
  setConfirmEmail("luna.moonlight@example.com");
  setArtistName("LunaCosplay"); // Optional
  setCharacterName("Sailor Moon");
  setCharacterOrigin("Sailor Moon (Anime/Manga)");
  setMessage(
    "Ich plane eine dynamische Performance mit Verwandlungssequenz und charakteristischen Posen. " +
    "Die Musik ist bereits ausgewählt (Moonlight Densetsu) und ich habe das Kostüm selbst angefertigt. " +
    "Ich freue mich sehr auf diesen Wettbewerb und hoffe, die Essenz von Sailor Moon auf die Bühne zu bringen!"
  );
  setPrivacyPolicy(true);
  setDataStorage(true);
  setPictureRights(true);
  setPerformanceConditions(true);

  // Demo-Charakter-Referenz-PDF laden
  console.log("Starte Laden der Demo-Referenz-PDF...");
  const demoPDF = await createFileFromPDF(
    "/downloads/Cosplay_Performance_Wettbewerb_Teilnahmevorraussetzungen.pdf",
    "Sailor-Moon-Character-Reference.pdf"
  );

  // Demo-Charakter-Referenz-Bilder laden (max 3 insgesamt inkl. PDF)
  console.log("Starte Laden der Demo-Referenzbilder...");
  const demoRef1 = await createFileFromImage(hiruKunstlerImage, "Sailor-Moon-Reference-1.png");
  const demoRef2 = await createFileFromImage(hiruKunstlerImage, "Sailor-Moon-Reference-2.png");
  
  // Kombiniere PDF und Bilder für Charakter-Referenzen
  const referenceFiles = [];
  const referencePreviews = [];

  if (demoPDF) {
    referenceFiles.push(demoPDF.file);
    referencePreviews.push(demoPDF.previewUrl);
    console.log("✓ Demo-Referenz-PDF erfolgreich gesetzt");
  }

  if (demoRef1) {
    referenceFiles.push(demoRef1.file);
    referencePreviews.push(demoRef1.previewUrl);
  }

  if (demoRef2) {
    referenceFiles.push(demoRef2.file);
    referencePreviews.push(demoRef2.previewUrl);
  }

  if (referenceFiles.length > 0) {
    setFile(referenceFiles);
    setPreviewUrl(referencePreviews);
    console.log(`✓ ${referenceFiles.length} Demo-Referenzdateien erfolgreich gesetzt`);
  } else {
    console.error("✗ Demo-Referenzdateien konnten nicht geladen werden");
  }

  // Demo-Cosplay-Bilder laden (max 3)
  console.log("Starte Laden der Demo-Cosplay-Bilder...");
  const demoCosplay1 = await createFileFromImage(hiruKunstlerImage, "Sailor-Moon-Cosplay-1.png");
  const demoCosplay2 = await createFileFromImage(hiruKunstlerImage, "Sailor-Moon-Cosplay-2.png");
  const demoCosplay3 = await createFileFromImage(hiruKunstlerImage, "Sailor-Moon-Cosplay-3.png");
  
  if (demoCosplay1 && demoCosplay2 && demoCosplay3) {
    setFile2([demoCosplay1.file, demoCosplay2.file, demoCosplay3.file]);
    setPreviewUrl2([demoCosplay1.previewUrl, demoCosplay2.previewUrl, demoCosplay3.previewUrl]);
    console.log("✓ Demo-Cosplay-Bilder erfolgreich gesetzt");
  } else {
    console.error("✗ Demo-Cosplay-Bilder konnten nicht geladen werden");
  }

  // file3 (Hintergrund Audio/Video) bleibt leer, da schwierig zu simulieren
  console.log("ℹ Hintergrund-Dateien (Audio/Video) werden nicht automatisch gefüllt");
};

  // Zentrale Validierungsfunktion
  const validateSingleField = (field, value, additionalData = {}) => {
    let error = null;

    switch (field) {
      case "gender":
        if (!value) error = "Anrede ist ein Pflichtfeld";
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

      case "artistName":
        if (value && value.trim().length > 0) {
          const artistNameValidation = validateString(value, "Künstlername", 2, 50);
          if (!artistNameValidation.check) error = artistNameValidation.description;
        }
        break;

      case "characterName":
        const characterNameValidation = validateString(value, "Charakter Name", 2, 50, true);
        if (!characterNameValidation.check) error = characterNameValidation.description;
        break;

      case "characterOrigin":
        const characterOriginValidation = validateString(value, "Charakter Ursprung", 2, 50, true);
        if (!characterOriginValidation.check) error = characterOriginValidation.description;
        break;

      case "message":
        const messageValidation = validateString(value, "Nachricht", 0, 2500);
        if (!messageValidation.check) error = messageValidation.description;
        break;

      case "file":
        if (!additionalData.files || additionalData.files.length === 0) {
          error = "Charakterreferenz ist ein Pflichtfeld";
        }
        break;

      case "file2":
        if (!additionalData.files || additionalData.files.length === 0) {
          error = "Charakterbild ist ein Pflichtfeld";
        }
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

      case "performanceConditions":
        if (!value) error = "Teilnahmebedingungen müssen akzeptiert werden";
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
    errors.artistName = validateSingleField("artistName", artistName);
    errors.characterName = validateSingleField("characterName", characterName);
    errors.characterOrigin = validateSingleField("characterOrigin", characterOrigin);

    // Dateien
    errors.file = validateSingleField("file", null, { files: file });
    errors.file2 = validateSingleField("file2", null, { files: file2 });

    // Nachricht
    errors.message = validateSingleField("message", message);

    // Bedingungen
    errors.privacyPolicy = validateSingleField("privacyPolicy", privacyPolicy);
    errors.dataStorage = validateSingleField("dataStorage", dataStorage);
    errors.pictureRights = validateSingleField("pictureRights", pictureRights);
    errors.performanceConditions = validateSingleField(
      "performanceConditions",
      performanceConditions
    );

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
        refs[firstErrorField].current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        refs[firstErrorField].current.focus();
      }
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("eventId", eventId);
    formData.append("gender", gender);
    formData.append("firstName", name.trim());
    formData.append("lastName", lastName.trim());
    formData.append("email", email.trim().toLowerCase());
    formData.append("artistName", artistName.trim());
    formData.append("characterName", characterName.trim());
    formData.append("characterOrigin", characterOrigin.trim());
    formData.append("message", message.trim());
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("dataStoragePolicy", dataStorage);
    formData.append("pictureRightsPolicy", pictureRights);
    formData.append("conditionsPolicy", performanceConditions);

    if (file && Array.isArray(file)) {
      file.forEach((singleFile, index) => {
        formData.append(`characterReferenceFiles`, singleFile);
      });
    }
    if (file2 && Array.isArray(file2)) {
      file2.forEach((singleFile, index) => {
        formData.append(`cosplayPictureFiles`, singleFile);
      });
    }
    if (file3 && Array.isArray(file3)) {
      file3.forEach((singleFile, index) => {
        formData.append(`backgroundAppearanceFiles`, singleFile);
      });
    }

    try {
      const fetchURL = registrationTest
        ? "https://node.miningmark.de"
        : "https://orgaboard.yumekai.de";
      const response = await fetch(
        `${fetchURL}/api/v1/event/application/createCosplayContestPerformance`,
        {
          method: "POST",
          body: formData,
        }
      );

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
        setArtistName("");
        setCharacterName("");
        setCharacterOrigin("");
        setMessage("");
        setPrivacyPolicy(false);
        setDataStorage(false);
        setPictureRights(false);
        setPerformanceConditions(false);
        setFile([]);
        setFile2([]);
        setFile3([]);
        setPreviewUrl([]);
        setPreviewUrl2([]);
        setPreviewUrl3([]);
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

  return (
    <>
      <h1>Anmeldung für den Cosplay Performance Wettbewerb</h1>
      <p>
        Sichert euch euren Platz auf der YumeKai 2026!
        <br />
        <br />
        Bitte beachtet die{" "}
        <StyledLink
          href="/downloads/Cosplay_Performance_Wettbewerb_Teilnahmevorraussetzungen.pdf"
          target="_blank"
        >
          Teilnahmebedingungen für den Cosplay Performance Wettbewerb
        </StyledLink>
        .
        <br />
        <br />
        Bei Fragen oder eventuellen Unklarheiten kannst du dich gerne per E-Mail an:{" "}
        <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutze unser{" "}
        <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>.
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
              title="E-Mail Bestätigen"
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

            <InputOptionInput
              title="Künstlername"
              inputText={artistName}
              inputChange={(value) => setArtistName(value)}
              onBlur={() => handleBlur("artistName", artistName)}
              inputRef={refs.artistName}
              isError={!!getFieldError("artistName")}
            />
            {getFieldError("artistName") && (
              <FieldErrorText>{getFieldError("artistName")}</FieldErrorText>
            )}

            <h2>Cosplay Angaben</h2>

            <InputOptionInput
              title="Charakter Name"
              inputText={characterName}
              inputChange={(value) => setCharacterName(value)}
              onBlur={() => handleBlur("characterName", characterName)}
              inputRef={refs.characterName}
              isError={!!getFieldError("characterName")}
              require
            />
            {getFieldError("characterName") && (
              <FieldErrorText>{getFieldError("characterName")}</FieldErrorText>
            )}

            <InputOptionInput
              title="Charakter Ursprung"
              inputText={characterOrigin}
              inputChange={(value) => setCharacterOrigin(value)}
              onBlur={() => handleBlur("characterOrigin", characterOrigin)}
              inputRef={refs.characterOrigin}
              isError={!!getFieldError("characterOrigin")}
              require
            />
            {getFieldError("characterOrigin") && (
              <FieldErrorText>{getFieldError("characterOrigin")}</FieldErrorText>
            )}

            <p>
              Charakter Vorlage/Referenz des Cosplays (max. 3 Dateien mit je. {MAX_FILE_SIZE_MB}MB,
              jpg, jpeg, png, webp, pdf) <RequiredNote>*</RequiredNote>
            </p>
            <MultiFileUpload
              name="referenz"
              inputRef={refs.file}
              previewUrl={previewUrl}
              files={file}
              setFiles={setFile}
              previewUrls={previewUrl}
              setPreviewUrls={setPreviewUrl}
              maxFileSize={MAX_FILE_SIZE_MB}
              maxFiles={3}
              acceptedExtensions={ACCEPTED_FILE_EXTENSIONS}
              isError={!!getFieldError("file") || !!fileError}
              setFileError={setFileError}
            />
            {(fileError || getFieldError("file")) && (
              <ErrorText style={{ textAlign: "center" }}>
                {fileError || getFieldError("file")}
              </ErrorText>
            )}

            <p>
              Bild des Cosplays (max. 3 Dateien mit je. {MAX_FILE_SIZE_MB}MB, jpg, jpeg, png, webp){" "}
              <RequiredNote>*</RequiredNote>
            </p>
            <MultiFileUpload
              name="image"
              inputRef={refs.file2}
              previewUrl={previewUrl2}
              files={file2}
              setFiles={setFile2}
              previewUrls={previewUrl2}
              setPreviewUrls={setPreviewUrl2}
              maxFileSize={MAX_FILE_SIZE_MB}
              maxFiles={3}
              acceptedExtensions={ACCEPTED_IMAGE_EXTENSIONS}
              isError={!!getFieldError("file2") || !!fileError2}
              setFileError={setFileError2}
            />
            {(fileError2 || getFieldError("file2")) && (
              <ErrorText style={{ textAlign: "center" }}>
                {fileError2 || getFieldError("file2")}
              </ErrorText>
            )}

            <p>
              Hintergrund für den Auftritt Bild, Ton oder Video (max. 4 Dateien mit je.{" "}
              {MAX_FILE_SIZE_MB_2}MB, jpg, jpeg, png, webp, mp3, wav, mp4)
            </p>
            <MultiFileUpload
              name="background"
              inputRef={refs.file3}
              previewUrl={previewUrl3}
              files={file3}
              setFiles={setFile3}
              previewUrls={previewUrl3}
              setPreviewUrls={setPreviewUrl3}
              maxFileSize={MAX_FILE_SIZE_MB_2}
              maxFiles={4}
              acceptedExtensions={ACCEPTED_SOUND_IMAGE_EXTENSIONS}
              isError={!!fileError3}
              setFileError={setFileError3}
            />
            {fileError3 && <ErrorText style={{ textAlign: "center" }}>{fileError3}</ErrorText>}

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

            <CheckBox
              title="performanceConditions"
              content={
                <p>
                  Ich habe die{" "}
                  <StyledLink
                    href="/downloads/Cosplay_Performance_Wettbewerb_Teilnahmevorraussetzungen.pdf"
                    target="_blank"
                  >
                    Teilnahmebedingungen
                  </StyledLink>{" "}
                  gelesen und akzeptiere diese.<RequiredNote>*</RequiredNote>
                </p>
              }
              isChecked={performanceConditions}
              inputChange={(value) => {
                setPerformanceConditions(value);
                if (touchedFields.performanceConditions) {
                  handleBlur("performanceConditions", value);
                }
              }}
              inputRef={refs.performanceConditions}
              isError={!!getFieldError("performanceConditions")}
              require
            />
            {getFieldError("performanceConditions") && (
              <FieldErrorText>{getFieldError("performanceConditions")}</FieldErrorText>
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
    </>
  );
}
