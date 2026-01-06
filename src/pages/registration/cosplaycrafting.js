import styled from "styled-components";
import { useState, useRef, useEffect } from "react";

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
  REGISTRATION_START_COSPLAY_CRAFTING,
  REGISTRATION_END_COSPLAY_CRAFTING,
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
const MAX_FILE_SIZE_MB = 10;

export default function CosplayCrafting() {
  const [eventId, setEventId] = useState(EVENT_ID);

  const [registrationStatus, setRegistrationStatus] = useState(() =>
    checkRegistrationPeriod(REGISTRATION_START_COSPLAY_CRAFTING, REGISTRATION_END_COSPLAY_CRAFTING)
  );

  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [artistName, setArtistName] = useState("");
  const [characterName, setCharacterName] = useState("");

  const [file, setFile] = useState([]);
  const [previewUrl, setPreviewUrl] = useState([]);

  const [message, setMessage] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [dataStorage, setDataStorage] = useState(false);
  const [pictureRights, setPictureRights] = useState(false);
  const [catwalkConditions, setCatwalkConditions] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [fileError, setFileError] = useState("");
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
    file: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
    pictureRights: useRef(null),
    catwalkConditions: useRef(null),
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
            REGISTRATION_START_COSPLAY_CRAFTING,
            REGISTRATION_END_COSPLAY_CRAFTING
          )
        );
      }, 60000);

      return () => clearInterval(interval);
    }
  }, []);

  const createFileFromImage = async (imageImport, fileName) => {
    try {
      // In Next.js ist imageImport ein Objekt mit .src Property
      const imageUrl = typeof imageImport === "object" ? imageImport.src : imageImport;

      console.log("Lade Bild von:", imageUrl);

      const response = await fetch(imageUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      console.log("Blob geladen:", blob.type, blob.size, "bytes");

      // Erstelle File mit korrektem Type
      const file = new File([blob], fileName, {
        type: "image/png",
        lastModified: Date.now(),
      });

      // Erstelle Preview-URL
      const previewUrl = URL.createObjectURL(blob);

      console.log("File erstellt:", {
        name: file.name,
        size: file.size,
        type: file.type,
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
        type: "application/pdf",
        lastModified: Date.now(),
      });

      // Erstelle Preview-URL (für PDFs zeigt das nur das Icon)
      const previewUrl = URL.createObjectURL(blob);

      console.log("PDF File erstellt:", {
        name: file.name,
        size: file.size,
        type: file.type,
      });

      return { file, previewUrl };
    } catch (error) {
      console.error("Fehler beim Laden des Demo-PDFs:", error);
      return null;
    }
  };

  // Füge diese Funktion nach den State-Deklarationen hinzu
  const fillDemoData = async () => {
    setGender("m"); // Verwende die korrekten GENDER_OPTIONS Werte: "m", "w", "d"
    setName("Kaito");
    setLastName("Craftmaster");
    setArtistName("KaitoCosplay_Crafts"); // Optional
    setCharacterName("Cloud Strife (Final Fantasy VII)");
    setMessage(
      "Mein Cloud Strife Cosplay wurde komplett selbst hergestellt. Das Buster Sword habe ich aus " +
        "EVA-Foam gefertigt und mit Worbla verstärkt. Die Rüstung besteht aus thermoplastischem Material, " +
        "das ich individuell geformt und bemalt habe. Alle Details inklusive der Nieten und Schnallen " +
        "wurden selbst angefertigt. Das Crafting-Tagebuch dokumentiert den kompletten Herstellungsprozess " +
        "über 4 Monate mit Fortschrittsbildern, verwendeten Materialien und Techniken. Ich freue mich sehr, " +
        "meine Handwerkskunst präsentieren zu dürfen!"
    );
    setPrivacyPolicy(true);
    setDataStorage(true);
    setPictureRights(true);
    setCatwalkConditions(true);

    // Demo-Crafting-Tagebuch PDF laden
    console.log("Starte Laden des Demo-Crafting-Tagebuchs (PDF)...");
    const demoPDF = await createFileFromPDF(
      "/downloads/Cosplay_Catwalk_Wettbewerb_Regeln_und_Teilnahmevorraussetzungen_2025.pdf",
      "Cloud-Cosplay-Crafting-Tagebuch.pdf"
    );

    // Demo-Cosplay-Bilder laden
    console.log("Starte Laden der Demo-Cosplay-Bilder...");
    const demoCrafting1 = await createFileFromImage(
      hiruKunstlerImage,
      "Cloud-Cosplay-Progress-1.png"
    );
    const demoCrafting2 = await createFileFromImage(hiruKunstlerImage, "Cloud-Cosplay-Final.png");

    // Kombiniere PDF und Bilder (max 3 Dateien insgesamt)
    const files = [];
    const previews = [];

    if (demoPDF) {
      files.push(demoPDF.file);
      previews.push(demoPDF.previewUrl);
      console.log("✓ Demo-Crafting-Tagebuch PDF erfolgreich gesetzt");
    }

    if (demoCrafting1) {
      files.push(demoCrafting1.file);
      previews.push(demoCrafting1.previewUrl);
    }

    if (demoCrafting2) {
      files.push(demoCrafting2.file);
      previews.push(demoCrafting2.previewUrl);
    }

    if (files.length > 0) {
      setFile(files);
      setPreviewUrl(previews);
      console.log(`✓ ${files.length} Demo-Dateien erfolgreich gesetzt`);
    } else {
      console.error("✗ Demo-Dateien konnten nicht geladen werden");
    }
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
        const characterNameValidation = validateString(value, "Charakter", 2, 50, true);
        if (!characterNameValidation.check) error = characterNameValidation.description;
        break;

      case "message":
        const messageValidation = validateString(value, "Nachricht", 0, 2500);
        if (!messageValidation.check) error = messageValidation.description;
        break;

      case "file":
        if (!additionalData.files || additionalData.files.length === 0) {
          error = "Crafting Tagebuch ist ein Pflichtfeld";
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

      case "catwalkConditions":
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

    // Dateien
    errors.file = validateSingleField("file", null, { files: file });

    // Nachricht
    errors.message = validateSingleField("message", message);

    // Bedingungen
    errors.privacyPolicy = validateSingleField("privacyPolicy", privacyPolicy);
    errors.dataStorage = validateSingleField("dataStorage", dataStorage);
    errors.pictureRights = validateSingleField("pictureRights", pictureRights);
    errors.catwalkConditions = validateSingleField("catwalkConditions", catwalkConditions);

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

    const formData = new FormData();
    formData.append("eventId", eventId);
    formData.append("gender", gender);
    formData.append("firstName", name.trim());
    formData.append("lastName", lastName.trim());
    formData.append("email", email.trim().toLowerCase());
    formData.append("artistName", artistName.trim());
    formData.append("characterName", characterName.trim());
    formData.append("message", message.trim());
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("dataStoragePolicy", dataStorage);
    formData.append("pictureRightsPolicy", pictureRights);
    formData.append("conditionsPolicy", catwalkConditions);

    if (file && Array.isArray(file)) {
      file.forEach((singleFile, index) => {
        formData.append(`craftingDiaryFiles`, singleFile);
      });
    }

    try {
      const fetchURL = registrationTest
        ? "https://node.miningmark.de"
        : "https://orgaboard.yumekai.de";
      const response = await fetch(
        `${fetchURL}/api/v1/event/application/createCosplayContestCrafting`,
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
        setMessage("");
        setPrivacyPolicy(false);
        setDataStorage(false);
        setPictureRights(false);
        setCatwalkConditions(false);
        setFile([]);
        setPreviewUrl([]);
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
      <h1>Anmeldung für den Cosplay Crafting Wettbewerb</h1>
      <p>
        Sichert euch euren Platz auf der YumeKai 2026!
        <br />
        <br />
        Bitte beachtet die{" "}
        <StyledLink
          href="/downloads/Cosplay_Catwalk_Wettbewerb_Regeln_und_Teilnahmevorraussetzungen_2025.pdf"
          target="_blank"
        >
          Teilnahmebedingungen für den Cosplay Crafting Wettbewerb
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
              title="Charakter"
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

            <p>
              Abgabe Crafting Tagebuch (PDF 2-6 DIN A4 Seiten) und Bild des Cosplays (max. 3 Dateien
              mit je. {MAX_FILE_SIZE_MB}MB, jpg, jpeg, png, webp, pdf){" "}
              <RequiredNote>*</RequiredNote>
            </p>
            <MultiFileUpload
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
              title="catwalkConditions"
              content={
                <p>
                  Ich habe die{" "}
                  <StyledLink
                    href="/downloads/Cosplay_Catwalk_Wettbewerb_Regeln_und_Teilnahmevorraussetzungen_2025.pdf"
                    target="_blank"
                  >
                    Teilnahmebedingungen
                  </StyledLink>{" "}
                  gelesen und akzeptiere diese.<RequiredNote>*</RequiredNote>
                </p>
              }
              isChecked={catwalkConditions}
              inputChange={(value) => {
                setCatwalkConditions(value);
                if (touchedFields.catwalkConditions) {
                  handleBlur("catwalkConditions", value);
                }
              }}
              inputRef={refs.catwalkConditions}
              isError={!!getFieldError("catwalkConditions")}
              require
            />
            {getFieldError("catwalkConditions") && (
              <FieldErrorText>{getFieldError("catwalkConditions")}</FieldErrorText>
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
