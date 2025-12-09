import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import validateString from "@/util/inputCheck";

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
  REGISTRATION_START_ART_CONTEST,
  REGISTRATION_END_ART_CONTEST,
  checkRegistrationPeriod,
  EVENT_ID,
  GENDER_OPTIONS,
} from "@/util/registration_options";

const FieldErrorText = styled(ErrorText)`
  margin-top: -10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const ACCEPTED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
const MAX_FILE_SIZE_MB = 10;

export default function ArtContest() {
  const [eventId, setEventId] = useState(EVENT_ID);

  const [registrationStatus, setRegistrationStatus] = useState(() =>
    checkRegistrationPeriod(REGISTRATION_START_ART_CONTEST, REGISTRATION_END_ART_CONTEST)
  );

  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [artistName, setArtistName] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [file, setFile] = useState([]);
  const [previewUrl, setPreviewUrl] = useState([]);
  const [message, setMessage] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [dataStorage, setDataStorage] = useState(false);
  const [pictureRights, setPictureRights] = useState(false);
  const [artistConditions, setArtistConditions] = useState(false);

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
    imageTitle: useRef(null),
    website: useRef(null),
    instagram: useRef(null),
    file: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
    pictureRights: useRef(null),
    artistConditions: useRef(null),
  };

  useEffect(() => {
    // Prüfe auf Test-Modus
    const urlParams = new URLSearchParams(window.location.search);
    const isTestMode = urlParams.get("test") === "true";

    if (isTestMode) {
      setRegistrationTest(true);
    }
    if (!isTestMode) {
      const interval = setInterval(() => {
        setRegistrationStatus(
          checkRegistrationPeriod(REGISTRATION_START_ART_CONTEST, REGISTRATION_END_ART_CONTEST)
        );
      }, 60000);

      return () => clearInterval(interval);
    }
  }, []);

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

      case "imageTitle":
        const imageTitleValidation = validateString(value, "Bildtitel", 2, 100, true);
        if (!imageTitleValidation.check) error = imageTitleValidation.description;
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

      case "file":
        if (!additionalData.file || additionalData.file.length === 0) {
          error = "Bild ist ein Pflichtfeld";
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

      case "artistConditions":
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

    errors.gender = validateSingleField("gender", gender);
    errors.name = validateSingleField("name", name);
    errors.lastName = validateSingleField("lastName", lastName);
    errors.email = validateSingleField("email", email);
    errors.confirmEmail = validateSingleField("confirmEmail", confirmEmail, { email });
    errors.artistName = validateSingleField("artistName", artistName);
    errors.imageTitle = validateSingleField("imageTitle", imageTitle);
    errors.website = validateSingleField("website", website);
    errors.instagram = validateSingleField("instagram", instagram);
    errors.message = validateSingleField("message", message);
    errors.file = validateSingleField("file", null, { file });
    errors.privacyPolicy = validateSingleField("privacyPolicy", privacyPolicy);
    errors.dataStorage = validateSingleField("dataStorage", dataStorage);
    errors.pictureRights = validateSingleField("pictureRights", pictureRights);
    errors.artistConditions = validateSingleField("artistConditions", artistConditions);

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
    formData.append("drawingTitle", imageTitle.trim());
    formData.append("website", website.trim());
    formData.append("instagram", instagram.trim());
    formData.append("message", message.trim());
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("dataStoragePolicy", dataStorage);
    formData.append("pictureRightsPolicy", pictureRights);
    formData.append("conditionsPolicy", artistConditions);
    formData.append("drawingImage", file[0]);

    try {
      const fetchURL = registrationTest
        ? "https://node.miningmark.de"
        : "https://orgaboard.yumekai.de";
      const response = await fetch(`${fetchURL}/api/v1/event/application/createDrawingContest`, {
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
        setArtistName("");
        setImageTitle("");
        setWebsite("");
        setInstagram("");
        setMessage("");
        setPrivacyPolicy(false);
        setDataStorage(false);
        setPictureRights(false);
        setArtistConditions(false);
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
      <h1>Anmeldung zum Zeichenwettbewerb</h1>
      <p>
        Du möchtest am Zeichenwettbewerb auf der YumeKai 2026 teilnehmen!
        <br />
        <br />
        Bitte beachte die{" "}
        <StyledLink
          href="/downloads/Teilnahmebedingungen_Zeichenwettbewerb_2025.pdf"
          target="_blank"
        >
          Teilnahme- und Auswahlbedingungen für den Zeichenwettbewerb
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

            <InputOptionInput
              title="Bildtitel"
              inputText={imageTitle}
              inputChange={(value) => setImageTitle(value)}
              onBlur={() => handleBlur("imageTitle", imageTitle)}
              inputRef={refs.imageTitle}
              isError={!!getFieldError("imageTitle")}
              require
            />
            {getFieldError("imageTitle") && (
              <FieldErrorText>{getFieldError("imageTitle")}</FieldErrorText>
            )}

            <Spacer />

            <p>
              Bild für Teilnahme (max. {MAX_FILE_SIZE_MB}MB, jpg, jpeg, png, webp){" "}
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
              maxFiles={1}
              acceptedExtensions={ACCEPTED_IMAGE_EXTENSIONS}
              isError={!!getFieldError("file") || !!fileError}
              setFileError={setFileError}
            />
            {(fileError || getFieldError("file")) && (
              <ErrorText style={{ textAlign: "center" }}>
                {fileError || getFieldError("file")}
              </ErrorText>
            )}

            <Spacer />
            <h2>Allgemeines</h2>

            <InputOptionInput
              title="Website"
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
              title="Nachricht"
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
                  gelesen, verstanden und akzeptiere diese. Ich habe verstanden, dass ich die
                  Zustimmung zur Datenschutzerklärung jederzeit widerrufen kann. Über den Widerruf
                  habe ich die Passage in der Datenschutzerklärung gelesen und verstanden.
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
                  Ich bin damit einverstanden, dass meine Daten durch die Dreamfly-Events UG
                  elektronisch gespeichert werden und zum Zweck der Durchführung der Veranstaltung
                  an die zuständigen Bereiche weitergeleitet werden dürfen.
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
                  Hiermit bestätige ich, dass die Bildrechte des hochgeladenen Bildes bei mir
                  liegen. Ich bin damit einverstanden und genehmige der Dreamfly-Events UG das hier
                  eingereichte Bildmaterial zu ihren Zwecken sowohl digital als auch in gedruckter
                  Form (z.B. Werbung, Social Media, Programmheft, Webseite, etc.) nutzen zu dürfen.
                  Alternativ - sofern kein Bildmaterial hochgeladen worden ist - dass kein
                  Bildmaterial eingereicht wurde.<RequiredNote>*</RequiredNote>
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
              title="artistConditions"
              content={
                <p>
                  Ich habe die{" "}
                  <StyledLink
                    href="/downloads/Teilnahmebedingungen_Zeichenwettbewerb_2025.pdf"
                    target="_blank"
                  >
                    Teilnahmebedingungen
                  </StyledLink>{" "}
                  gelesen und akzeptiere diese.<RequiredNote>*</RequiredNote>
                </p>
              }
              isChecked={artistConditions}
              inputChange={(value) => {
                setArtistConditions(value);
                if (touchedFields.artistConditions) {
                  handleBlur("artistConditions", value);
                }
              }}
              inputRef={refs.artistConditions}
              isError={!!getFieldError("artistConditions")}
              require
            />
            {getFieldError("artistConditions") && (
              <FieldErrorText>{getFieldError("artistConditions")}</FieldErrorText>
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
