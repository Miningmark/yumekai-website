import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

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
import validateString, { validateField } from "@/util/inputCheck";
import {
  REGISTRATION_START_EXHIBITOR,
  REGISTRATION_END_EXHIBITOR,
  checkRegistrationPeriod,
  EVENT_ID,
  GENDER_OPTIONS,
} from "@/util/registration_options";
import AddressFields from "@/components/registrations/AddressFields";
import ImageCropModal from "@/util/ImageCropModal";

const FieldErrorText = styled(ErrorText)`
  margin-top: -10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const ACCEPTED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
const MAX_IMAGE_SIZE_MB = 5;

const isImageFile = (fileName) => {
  return ACCEPTED_IMAGE_EXTENSIONS.some((ext) => fileName.toLowerCase().endsWith(ext));
};

export default function Exhibitor() {
  const [eventId, setEventId] = useState(EVENT_ID);

  const [registrationStatus, setRegistrationStatus] = useState(() =>
    checkRegistrationPeriod(REGISTRATION_START_EXHIBITOR, REGISTRATION_END_EXHIBITOR)
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

  const [groupName, setGroupName] = useState("");
  const [groupMembers, setGroupMembers] = useState(1);
  const [announcementText, setAnnouncementText] = useState("");
  const [standSize, setStandSize] = useState("");
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
  const [licensedMusic, setLicensedMusic] = useState(false);
  const [pictureRights, setPictureRights] = useState(false);
  const [conditions, setConditions] = useState(false);
  const [registrationReminder, setRegistrationReminder] = useState(false);

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
    groupName: useRef(null),
    groupMembers: useRef(null),
    announcementText: useRef(null),
    standSize: useRef(null),
    website: useRef(null),
    instagram: useRef(null),
    image: useRef(null),
    socialMediaImageFile: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
    licensedMusic: useRef(null),
    pictureRights: useRef(null),
    conditions: useRef(null),
    registrationReminder: useRef(null),
  };

  useEffect(() => {
    // Prüfe auf Test-Modus
    const urlParams = new URLSearchParams(window.location.search);
    const isTestMode = urlParams.get("test") === "true";

    if (isTestMode) {
      setRegistrationTest(true);
    }

    // Interval nur setzen wenn NICHT im Test-Modus
    if (!isTestMode) {
      const interval = setInterval(() => {
        setRegistrationStatus(
          checkRegistrationPeriod(REGISTRATION_START_EXHIBITOR, REGISTRATION_END_EXHIBITOR)
        );
      }, 60000);

      return () => clearInterval(interval);
    }
  }, []);

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

  const handleAddressDataChange = (field, value) => {
    setAddressData((prev) => ({ ...prev, [field]: value }));
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

      case "groupName":
        const groupNameValidation = validateString(value, "Gruppenname", 3, 100, true);
        if (!groupNameValidation.check) error = groupNameValidation.description;
        break;

      case "groupMembers":
        if (value < 1) error = "Mindestens 1 Gruppenmitglied";
        else if (value > 25) error = "Maximal 25 Mitglieder";
        break;

      case "announcementText":
        const announcementValidation = validateString(value, "Ankündigungstext", 5, 2500, true);
        if (!announcementValidation.check) error = announcementValidation.description;
        break;

      case "standSize":
        const standSizeValidation = validateString(value, "Standgröße", 5, 2500, true);
        if (!standSizeValidation.check) error = standSizeValidation.description;
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

      case "licensedMusic":
        if (!value) error = "GEMA-Lizenzierte Musik ist nicht erlaubt";
        break;

      case "pictureRights":
        if (!value) error = "Bildrechte müssen bestätigt werden";
        break;

      case "conditions":
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

    // Adresse
    errors.street = validateSingleField("street", addressData.street);
    errors.houseNumber = validateSingleField("houseNumber", addressData.houseNumber);
    errors.postalCode = validateSingleField("postalCode", addressData.postalCode);
    errors.city = validateSingleField("city", addressData.city);
    errors.country = validateSingleField("country", addressData.country);

    // Stand
    errors.groupName = validateSingleField("groupName", groupName);
    errors.groupMembers = validateSingleField("groupMembers", groupMembers);
    errors.announcementText = validateSingleField("announcementText", announcementText);
    errors.standSize = validateSingleField("standSize", standSize);

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
    errors.licensedMusic = validateSingleField("licensedMusic", licensedMusic);
    errors.pictureRights = validateSingleField("pictureRights", pictureRights);
    errors.conditions = validateSingleField("conditions", conditions);

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
    formData.append("street", addressData.street.trim());
    formData.append("houseNumber", addressData.houseNumber.trim());
    formData.append("postalCode", addressData.postalCode.trim());
    formData.append("city", addressData.city.trim());
    formData.append("country", addressData.country.trim());
    formData.append("groupName", groupName.trim());
    formData.append("groupMembers", groupMembers);
    formData.append("announcementText", announcementText.trim());
    formData.append("standSize", standSize.trim());
    formData.append("website", website.trim());
    formData.append("instagram", instagram.trim());
    formData.append("message", message.trim());
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("dataStoragePolicy", dataStorage);
    formData.append("licensedMusicPolicy", licensedMusic);
    formData.append("pictureRightsPolicy", pictureRights);
    formData.append("conditionsPolicy", conditions);
    formData.append("registrationReminder", registrationReminder);
    formData.append("image", imageFile[0]);
    if (socialMediaImageFile[0]) {
      formData.append("socialMediaImage", socialMediaImageFile[0]);
    }

    try {
      const fetchURL = registrationTest
        ? "https://node.miningmark.de"
        : "https://orgaboard.yumekai.de";
      const response = await fetch(`${fetchURL}/api/v1/event/application/createExhibitor`, {
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
        setGroupName("");
        setGroupMembers(1);
        setStandSize("");
        setAnnouncementText("");
        setWebsite("");
        setInstagram("");
        setMessage("");
        setPrivacyPolicy(false);
        setDataStorage(false);
        setLicensedMusic(false);
        setPictureRights(false);
        setConditions(false);
        setRegistrationReminder(false);
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
      <h1>Anmeldung Gruppen/Fan Stand</h1>
      <p>
        Sichert euch euren Platz auf der YumeKai 2026!
        <br />
        <br />
        Bei Fragen oder eventuellen Unklarheiten kannst du dich gerne per E-Mail an{" "}
        <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> wenden oder benutze
        unser <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>.
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
            <h2>Persönliche Angaben (Kontaktperson)</h2>
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
            <h2>Stand</h2>

            <InputOptionInput
              title="Gruppenname"
              inputText={groupName}
              inputChange={(value) => setGroupName(value)}
              onBlur={() => handleBlur("groupName", groupName)}
              inputRef={refs.groupName}
              isError={!!getFieldError("groupName")}
              require
            />
            {getFieldError("groupName") && (
              <FieldErrorText>{getFieldError("groupName")}</FieldErrorText>
            )}

            <InputOptionInput
              title="Gruppenmitglieder"
              inputText={groupMembers}
              inputChange={setGroupMembers}
              onBlur={() => handleBlur("groupMembers", groupMembers)}
              inputRef={refs.groupMembers}
              isError={!!getFieldError("groupMembers")}
              require
              type="number"
              min={1}
              max={25}
            />
            {getFieldError("groupMembers") && (
              <FieldErrorText>{getFieldError("groupMembers")}</FieldErrorText>
            )}

            <InputOptionTextArea
              title="Standgröße"
              inputText={standSize}
              inputChange={(value) => setStandSize(value)}
              onBlur={() => handleBlur("standSize", standSize)}
              inputRef={refs.standSize}
              isError={!!getFieldError("standSize")}
              require
            />
            {getFieldError("standSize") && (
              <FieldErrorText>{getFieldError("standSize")}</FieldErrorText>
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
              inputChange={(value) => setAnnouncementText(value)}
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
              title="licensedMusic"
              content={
                <p>
                  Ich habe zur Kenntnis genommen, dass GEMA-Lizenzierte Tonwiedergabe nicht erlaubt
                  ist.<RequiredNote>*</RequiredNote>
                </p>
              }
              isChecked={licensedMusic}
              inputChange={(value) => {
                setLicensedMusic(value);
                if (touchedFields.licensedMusic) {
                  handleBlur("licensedMusic", value);
                }
              }}
              inputRef={refs.licensedMusic}
              isError={!!getFieldError("licensedMusic")}
              require
            />
            {getFieldError("licensedMusic") && (
              <FieldErrorText>{getFieldError("licensedMusic")}</FieldErrorText>
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
              title="conditions"
              content={
                <p>
                  Ich habe die{" "}
                  <StyledLink href="/" target="_blank">
                    Teilnahmebedingungen
                  </StyledLink>{" "}
                  gelesen und akzeptiere diese.<RequiredNote>*</RequiredNote>
                </p>
              }
              isChecked={conditions}
              inputChange={(value) => {
                setConditions(value);
                if (touchedFields.conditions) {
                  handleBlur("conditions", value);
                }
              }}
              inputRef={refs.conditions}
              isError={!!getFieldError("conditions")}
              require
            />
            {getFieldError("conditions") && (
              <FieldErrorText>{getFieldError("conditions")}</FieldErrorText>
            )}

            <CheckBox
              title="registrationReminder"
              content={
                <p>
                  Ich möchte eine Erinnerungs-E-Mail erhalten, für die Anmeldungseröffnung der
                  YumeKai 2027.
                </p>
              }
              isChecked={registrationReminder}
              inputChange={(value) => setRegistrationReminder(value)}
              inputRef={refs.registrationReminder}
            />

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
          fileName={tempFile?.name || "exhibitor-social-media-image.png"}
        />
      )}
    </>
  );
}
