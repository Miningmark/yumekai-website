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
import FileUpload from "@/components/styled/FileUpload";
import MultiFileUpload from "@/components/styled/MultiFileUpload";
import LoadingAnimation from "@/components/styled/LoadingAnimation";
import validateString, { validateField } from "@/util/inputCheck";
import {
  REGISTRATION_START_SHOWACT,
  REGISTRATION_END_SHOWACT,
  checkRegistrationPeriod,
  EVENT_ID,
  SHOWACT_ACCOMODATION_OPTIONS,
  GENDER_OPTIONS,
} from "@/util/registration_options";
import AddressFields from "@/components/registrations/AddressFields";

const TimeslotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  ${({ $iserror }) => $iserror && `border: solid 2px red;`}
  ${({ $iserror }) => $iserror && `padding: 10px;`}
`;

const FieldErrorText = styled(ErrorText)`
  margin-top: -10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const ACCEPTED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
const ACCEPTED_FILE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".pdf", "docx", ".xlsx"];
const MAX_FILE_SIZE_MB = 50;
const MAX_IMAGE_SIZE_MB = 5;

const isImageFile = (fileName) => {
  return ACCEPTED_IMAGE_EXTENSIONS.some((ext) => fileName.toLowerCase().endsWith(ext));
};

export default function Showact() {
  const [eventId, setEventId] = useState(EVENT_ID);

  const [registrationStatus, setRegistrationStatus] = useState(() =>
    checkRegistrationPeriod(REGISTRATION_START_SHOWACT, REGISTRATION_END_SHOWACT)
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
  const [timeSlot1, setTimeSlot1] = useState(false);
  const [timeSlot2, setTimeSlot2] = useState(false);
  const [timeSlot3, setTimeSlot3] = useState(false);
  const [timeSlot4, setTimeSlot4] = useState(false);
  const [constructionTime, setConstructionTime] = useState("");
  const [performanceTime, setPerformanceTime] = useState("");
  const [deconstructionTime, setDeconstructionTime] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [requiredEquipment, setRequiredEquipment] = useState("");
  const [broughtEquipment, setBroughtEquipment] = useState("");

  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [file2, setFile2] = useState([]);
  const [previewUrl2, setPreviewUrl2] = useState([]);
  const [message, setMessage] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [dataStorage, setDataStorage] = useState(false);
  const [pictureRights, setPictureRights] = useState(false);
  const [conditions, setConditions] = useState(false);
  const [registrationReminder, setRegistrationReminder] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [fileError, setFileError] = useState("");
  const [fileError2, setFileError2] = useState("");
  const [loading, setLoading] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});

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
    timeSlots: useRef(null),
    constructionTime: useRef(null),
    performanceTime: useRef(null),
    deconstructionTime: useRef(null),
    accomodation: useRef(null),
    requiredEquipment: useRef(null),
    broughtEquipment: useRef(null),
    website: useRef(null),
    instagram: useRef(null),
    file: useRef(null),
    file2: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
    pictureRights: useRef(null),
    conditions: useRef(null),
    registrationReminder: useRef(null),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRegistrationStatus(
        checkRegistrationPeriod(REGISTRATION_START_SHOWACT, REGISTRATION_END_SHOWACT)
      );
    }, 60000);

    return () => clearInterval(interval);
  }, []);

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
        const groupNameValidation = validateString(value, "Gruppenname", 2, 100, true);
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

      case "timeSlots":
        if (
          !additionalData.timeSlot1 &&
          !additionalData.timeSlot2 &&
          !additionalData.timeSlot3 &&
          !additionalData.timeSlot4
        ) {
          error = "Bitte wähle mindestens einen Zeitraum";
        }
        break;

      case "constructionTime":
        if (value < 1) error = "Aufbaudauer mindestens 1 Minute";
        else if (value > 60) error = "Aufbaudauer maximal 60 Minuten";
        break;

      case "performanceTime":
        if (value < 30) error = "Auftritt mindestens 30 Minuten";
        else if (value > 180) error = "Auftritt maximal 180 Minuten";
        break;

      case "deconstructionTime":
        if (value < 1) error = "Abbaudauer mindestens 1 Minute";
        else if (value > 60) error = "Abbaudauer maximal 60 Minuten";
        break;

      case "accomodation":
        const accomodationValidation = validateString(value, "Unterkunft", 3, 100, true);
        if (!accomodationValidation.check) error = accomodationValidation.description;
        break;

      case "requiredEquipment":
        if (value && value.trim().length > 0 && value.trim().length < 5) {
          error = "Benötigte Technik muss mindestens 5 Zeichen haben oder leer sein";
        } else if (value && value.trim().length > 2000) {
          error = "Benötigte Technik darf maximal 2000 Zeichen haben";
        }
        break;

      case "broughtEquipment":
        if (value && value.trim().length > 0 && value.trim().length < 5) {
          error = "Mitgebrachte Technik muss mindestens 5 Zeichen haben oder leer sein";
        } else if (value && value.trim().length > 2000) {
          error = "Mitgebrachte Technik darf maximal 2000 Zeichen haben";
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
        if (!additionalData.file) error = "Bild ist ein Pflichtfeld";
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

      case "conditions":
        if (!value) error = "Teilnahmebedingungen müssen akzeptiert werden";
        break;
    }

    return error;
  };

  // onBlur Handler für Echtzeit-Validierung
  const handleBlur = (field, value, additionalData = {}) => {
    console.log("Blur field:", field, "value:", value, "additionalData:", additionalData);
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

    // Gruppenangaben
    errors.groupName = validateSingleField("groupName", groupName);
    errors.groupMembers = validateSingleField("groupMembers", groupMembers);
    errors.announcementText = validateSingleField("announcementText", announcementText);
    errors.timeSlots = validateSingleField("timeSlots", null, {
      timeSlot1,
      timeSlot2,
      timeSlot3,
      timeSlot4,
    });
    errors.constructionTime = validateSingleField("constructionTime", constructionTime);
    errors.performanceTime = validateSingleField("performanceTime", performanceTime);
    errors.deconstructionTime = validateSingleField("deconstructionTime", deconstructionTime);
    errors.accomodation = validateSingleField("accomodation", accommodation);
    errors.requiredEquipment = validateSingleField("requiredEquipment", requiredEquipment);
    errors.broughtEquipment = validateSingleField("broughtEquipment", broughtEquipment);

    // Allgemeines
    errors.website = validateSingleField("website", website);
    errors.instagram = validateSingleField("instagram", instagram);
    errors.message = validateSingleField("message", message);
    errors.image = validateSingleField("image", null, { file });

    // Bedingungen
    errors.privacyPolicy = validateSingleField("privacyPolicy", privacyPolicy);
    errors.dataStorage = validateSingleField("dataStorage", dataStorage);
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

    const timeSlots = [
      timeSlot1 && "Samstag 11:00-14:00 Uhr",
      timeSlot2 && "Samstag 14:00-18:00 Uhr",
      timeSlot3 && "Sonntag 11:00-14:00 Uhr",
      timeSlot4 && "Sonntag 14:00-18:00 Uhr",
    ]
      .filter(Boolean)
      .join(", ")
      .trim();

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
    formData.append("timeSlots", timeSlots);
    formData.append("constructionTime", constructionTime);
    formData.append("performanceTime", performanceTime);
    formData.append("deconstructionTime", deconstructionTime);
    formData.append("accommodation", accommodation);
    formData.append("requiredEquipment", requiredEquipment.trim());
    formData.append("broughtEquipment", broughtEquipment.trim());
    formData.append("website", website.trim());
    formData.append("instagram", instagram.trim());
    formData.append("message", message.trim());
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("dataStoragePolicy", dataStorage);
    formData.append("pictureRightsPolicy", pictureRights);
    formData.append("conditionsPolicy", conditions);
    formData.append("registrationReminder", registrationReminder);
    formData.append("image", file);
    if (file2 && Array.isArray(file2)) {
      file2.forEach((singleFile) => {
        formData.append(`documents`, singleFile);
      });
    }

    try {
      const response = await fetch(
        "https://node.miningmark.de/api/v1/event/application/createShowact",
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
        setAddressData({ street: "", houseNumber: "", postalCode: "", city: "", country: "" });
        setGroupName("");
        setGroupMembers(1);
        setAnnouncementText("");
        setTimeSlot1(false);
        setTimeSlot2(false);
        setTimeSlot3(false);
        setTimeSlot4(false);
        setConstructionTime("");
        setPerformanceTime("");
        setDeconstructionTime("");
        setAccommodation("");
        setRequiredEquipment("");
        setBroughtEquipment("");
        setWebsite("");
        setInstagram("");
        setMessage("");
        setPrivacyPolicy(false);
        setDataStorage(false);
        setPictureRights(false);
        setConditions(false);
        setRegistrationReminder(false);
        setFile(null);
        setFile2([]);
        setPreviewUrl(null);
        setPreviewUrl2([]);
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

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    const maxFileSize = MAX_IMAGE_SIZE_MB * 1024 * 1024;

    if (selectedFile && selectedFile.size > maxFileSize) {
      setFileError(`Die Datei darf maximal ${MAX_IMAGE_SIZE_MB}MB groß sein.`);
      setFile(null);
      setPreviewUrl(null);
      return;
    }

    if (selectedFile && !isImageFile(selectedFile.name)) {
      setFileError("Bitte wähle ein gültiges Bild aus. (jpg, jpeg, png, webp)");
      setFile(null);
      setPreviewUrl(null);
      return;
    }

    setFileError("");
    setFile(selectedFile);

    if (selectedFile && isImageFile(selectedFile.name)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }

    // Validierung triggern wenn Feld bereits berührt wurde
    if (touchedFields.image) {
      const error = validateSingleField("image", null, { file: selectedFile });
      setFieldErrors((prev) => ({
        ...prev,
        image: error,
      }));
    }
  }

  return (
    <>
      <h1>Anmeldung als Showact</h1>
      <p>
        Sichert euch euren Platz auf der YumeKai 2026!
        <br />
        <br />
        Bitte beachtet die{" "}
        <StyledLink href="/downloads/Infoblatt_Showacts_2025.pdf" target="_blank">
          Teilnahme- und Auswahlbedingungen für Showacts
        </StyledLink>
        .
        <br />
        <br />
        Bei Fragen oder eventuellen Unklarheiten kannst du dich gerne per E-Mail an:{" "}
        <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutze unser{" "}
        <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>.
      </p>

      <h2>Die Anmeldung als Showact ist momentan geschlossen. (TEST-Modus)</h2>

      {!registrationStatus.isActive && (
        <h2>
          <strong>{registrationStatus.message}</strong>
        </h2>
      )}

      {registrationStatus.isActive && !success && (
        <SuccessText style={{ fontSize: "1rem", marginTop: "1rem" }}>
          {registrationStatus.message}
        </SuccessText>
      )}

      {!success && registrationStatus.isActive && (
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
              title="Name"
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
            <h2>Gruppenangaben</h2>

            <InputOptionInput
              title="Gruppenname"
              inputText={groupName}
              inputChange={setGroupName}
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

            <p>
              Logo/Ankündigungsbild (max. 5MB, jpg, jpeg, png, webp) <RequiredNote>*</RequiredNote>
            </p>
            <FileUpload
              handleFileChange={handleFileChange}
              inputRef={refs.image}
              previewUrl={previewUrl}
              file={file}
              isError={!!getFieldError("image") || !!fileError}
            />
            {(fileError || getFieldError("image")) && (
              <ErrorText style={{ textAlign: "center" }}>
                {fileError || getFieldError("image")}
              </ErrorText>
            )}

            <TimeslotsContainer $iserror={!!getFieldError("timeSlots")} ref={refs.timeSlots}>
              <h3>Bevorzugter Tag/Uhrzeit (min. 1 Option wählen)</h3>
              <CheckBox
                title="timeSlot1"
                content="Samstag 11:00-14:00 Uhr"
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
                content="Samstag 14:00-18:00 Uhr"
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
              max={60}
            />
            {getFieldError("constructionTime") && (
              <FieldErrorText>{getFieldError("constructionTime")}</FieldErrorText>
            )}

            <InputOptionInput
              title="Aufführungszeit (in Minuten)"
              inputText={performanceTime}
              inputChange={setPerformanceTime}
              onBlur={() => handleBlur("performanceTime", performanceTime)}
              inputRef={refs.performanceTime}
              isError={!!getFieldError("performanceTime")}
              require
              type="number"
              min={30}
              max={180}
            />
            {getFieldError("performanceTime") && (
              <FieldErrorText>{getFieldError("performanceTime")}</FieldErrorText>
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
              max={60}
            />
            {getFieldError("deconstructionTime") && (
              <FieldErrorText>{getFieldError("deconstructionTime")}</FieldErrorText>
            )}

            <p>
              Tech-Rider / Hospitality-Rider / Lichtplan (max. 3 Dateien mit je. {MAX_FILE_SIZE_MB}
              MB, jpg, jpeg, png, webp, pdf, docx, xlsx)
            </p>
            <MultiFileUpload
              inputRef={refs.technicalRider}
              previewUrl={previewUrl2}
              files={file2}
              setFiles={setFile2}
              previewUrls={previewUrl2}
              setPreviewUrls={setPreviewUrl2}
              maxFileSize={MAX_FILE_SIZE_MB}
              maxFiles={3}
              acceptedExtensions={ACCEPTED_FILE_EXTENSIONS}
              isError={!!fileError2}
              setFileError={setFileError2}
            />
            {fileError2 && <ErrorText style={{ textAlign: "center" }}>{fileError2}</ErrorText>}

            <InputOptionSelect
              title="Unterkunft"
              options={SHOWACT_ACCOMODATION_OPTIONS}
              inputText={accommodation}
              inputChange={(value) => setAccommodation(value)}
              onBlur={() => handleBlur("accomodation", accommodation)}
              inputRef={refs.accomodation}
              isError={!!getFieldError("accomodation")}
              require
            />
            {getFieldError("accomodation") && (
              <FieldErrorText>{getFieldError("accomodation")}</FieldErrorText>
            )}

            <InputOptionTextArea
              title="Benötigte Technik"
              inputText={requiredEquipment}
              inputChange={setRequiredEquipment}
              onBlur={() => handleBlur("requiredEquipment", requiredEquipment)}
              inputRef={refs.requiredEquipment}
              isError={!!getFieldError("requiredEquipment")}
            />
            {getFieldError("requiredEquipment") && (
              <FieldErrorText>{getFieldError("requiredEquipment")}</FieldErrorText>
            )}

            <InputOptionTextArea
              title="Mitgebrachte Technik"
              inputText={broughtEquipment}
              inputChange={setBroughtEquipment}
              onBlur={() => handleBlur("broughtEquipment", broughtEquipment)}
              inputRef={refs.broughtEquipment}
              isError={!!getFieldError("broughtEquipment")}
            />
            {getFieldError("broughtEquipment") && (
              <FieldErrorText>{getFieldError("broughtEquipment")}</FieldErrorText>
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
                  Hiermit bestätige ich, dass die Bildrechte der hochgeladenen Bilder bei mir
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
              title="conditions"
              content={
                <p>
                  Ich habe die{" "}
                  <StyledLink href="/downloads/Infoblatt_Showacts_2025.pdf" target="_blank">
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
    </>
  );
}
