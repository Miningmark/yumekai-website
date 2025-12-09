import styled from "styled-components";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import validateString, { validateField } from "@/util/inputCheck";
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
} from "../styledComponents";
import { RequiredNote } from "@/components/styledInputComponents";
import RadioButton from "@/components/styled/RadioButton";
import CheckBox from "@/components/styled/CheckBox";
import FileUpload from "@/components/styled/FileUpload";
import LoadingAnimation from "@/components/styled/LoadingAnimation";
import {
  GENDER_OPTIONS,
  COUNTRIES,
  CLOTHES_SIZE_OPTIONS,
  ARRIVAL_OPTIONS,
  FOOD_PREFERENCE_OPTIONS,
  EVENT_ID,
  PREFERRED_WORKTIME_OPTIONS,
  DEPARTMENT_OPTIONS,
} from "@/util/registration_options";

const FieldErrorText = styled(ErrorText)`
  margin-top: -10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const ACCEPTED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
const MAX_IMAGE_SIZE_MB = 10;

const isImageFile = (fileName) => {
  return ACCEPTED_IMAGE_EXTENSIONS.some((ext) => fileName.toLowerCase().endsWith(ext));
};

export default function HelferForm() {
  const [eventId, setEventId] = useState(EVENT_ID);

  const [gender, setGender] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [discordName, setDiscordName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [clothSize, setClothSize] = useState("");
  const [additionalShirt, setAdditionalShirt] = useState(false);
  const [arrival, setArrival] = useState("");
  const [parkingTicketRequired, setParkingTicketRequired] = useState(false);
  const [fridayConstruction, setFridayConstruction] = useState(false);
  const [saturdayConstruction, setSaturdayConstruction] = useState(false);
  const [sundayDeconstruction, setSundayDeconstruction] = useState(false);

  const [foodPreferences, setFoodPreferences] = useState("");
  const [foodDetails, setFoodDetails] = useState("");

  const [qualificationsWorkExperience, setQualificationsWorkExperience] = useState("");
  const [myStrengths, setMyStrengths] = useState("");
  const [talents, setTalents] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [other, setOther] = useState("");

  const [workingOnSaturday, setWorkingOnSaturday] = useState(false);
  const [workingOnSunday, setWorkingOnSunday] = useState(false);
  const [preferredWorktime, setPreferredWorktime] = useState("");

  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [contactForwarding, setContactForwarding] = useState(false);
  const [dataStoragePolicy, setDataStoragePolicy] = useState(false);
  const [registrationReminder, setRegistrationReminder] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [fileError, setFileError] = useState("");
  const [loading, setLoading] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});

  const [registrationTest, setRegistrationTest] = useState(false);

  const refs = {
    gender: useRef(null),
    firstName: useRef(null),
    lastName: useRef(null),
    nickName: useRef(null),
    street: useRef(null),
    houseNumber: useRef(null),
    postalCode: useRef(null),
    city: useRef(null),
    country: useRef(null),
    email: useRef(null),
    confirmEmail: useRef(null),
    birthdate: useRef(null),
    discordName: useRef(null),
    phoneNumber: useRef(null),
    privacyPolicy: useRef(null),
    contactForwarding: useRef(null),
    dataStoragePolicy: useRef(null),
    registrationReminder: useRef(null),
    clothSize: useRef(null),
    arrival: useRef(null),
    foodPreferences: useRef(null),
    foodDetails: useRef(null),
    qualificationsWorkExperience: useRef(null),
    myStrengths: useRef(null),
    talents: useRef(null),
    other: useRef(null),
    workingOnSaturday: useRef(null),
    workingOnSunday: useRef(null),
    preferredWorktime: useRef(null),
    image: useRef(null),
  };

  useEffect(() => {
    // Prüfe auf Test-Modus
    const urlParams = new URLSearchParams(window.location.search);
    const isTestMode = urlParams.get("test") === "true";

    if (isTestMode) {
      setRegistrationTest(true);
    }
  }, []);

  // Zentrale Validierungsfunktion
  const validateSingleField = (field, value, additionalData = {}) => {
    let error = null;

    switch (field) {
      case "gender":
        if (!value) error = "Anrede ist ein Pflichtfeld";
        break;

      case "firstName":
        const firstNameValidation = validateString(value, "Vorname", 2, 50, true);
        if (!firstNameValidation.check) error = firstNameValidation.description;
        break;

      case "lastName":
        const lastNameValidation = validateString(value, "Nachname", 2, 50, true);
        if (!lastNameValidation.check) error = lastNameValidation.description;
        break;

      case "nickName":
        if (value && value.trim().length > 0) {
          const nicknameValidation = validateString(value, "Rufname", 2, 50);
          if (!nicknameValidation.check) error = nicknameValidation.description;
        }
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

      case "birthdate":
        if (!value || value.trim() === "") {
          error = "Geburtsdatum ist ein Pflichtfeld";
        } else {
          const birthDateObject = new Date(value);
          const today = new Date();
          const age = today.getFullYear() - birthDateObject.getFullYear();
          const isBirthdayPassedThisYear =
            today.getMonth() > birthDateObject.getMonth() ||
            (today.getMonth() === birthDateObject.getMonth() &&
              today.getDate() >= birthDateObject.getDate());

          const actualAge = isBirthdayPassedThisYear ? age : age - 1;

          if (actualAge < 18) {
            error = "Du musst mindestens 18 Jahre alt sein";
          }
        }
        break;

      case "discordName":
        const discordValidation = validateString(value, "Discord Name", 2, 100, true);
        if (!discordValidation.check) error = discordValidation.description;
        break;

      case "phoneNumber":
        const phoneValidation = validateString(value, "Telefonnummer", 5, 25, true);
        if (!phoneValidation.check) error = phoneValidation.description;
        break;

      case "street":
        const streetError = validateField(value, "Straße", 2, 50, true);
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

      case "clothSize":
        if (!value) error = "T-Shirt Größe ist ein Pflichtfeld";
        break;

      case "arrival":
        if (!value) error = "Anreise ist ein Pflichtfeld";
        break;

      case "foodPreferences":
        if (!value) error = "Essensauswahl ist ein Pflichtfeld";
        break;

      case "foodDetails":
        if (value && value.trim().length > 0) {
          const foodDetailsValidation = validateString(
            value,
            "Allergien/Unverträglichkeiten",
            3,
            500
          );
          if (!foodDetailsValidation.check) error = foodDetailsValidation.description;
        }
        break;

      case "qualificationsWorkExperience":
        if (value && value.trim().length > 0) {
          const occupationValidation = validateString(value, "Beruf/Qualifikationen", 2, 100);
          if (!occupationValidation.check) error = occupationValidation.description;
        }
        break;

      case "myStrengths":
        if (value && value.trim().length > 0) {
          const strengthsValidation = validateString(value, "Stärken", 3, 500);
          if (!strengthsValidation.check) error = strengthsValidation.description;
        }
        break;

      case "talents":
        if (value && value.trim().length > 0) {
          const talentsValidation = validateString(value, "Talente", 3, 500);
          if (!talentsValidation.check) error = talentsValidation.description;
        }
        break;

      case "other":
        if (value && value.trim().length > 0) {
          const otherValidation = validateString(value, "Sonstiges", 3, 1000);
          if (!otherValidation.check) error = otherValidation.description;
        }
        break;

      case "preferredWorktime":
        if (!value) error = "Bevorzugte Helferzeit ist ein Pflichtfeld";
        break;

      case "image":
        if (!additionalData.file) error = "Bild ist ein Pflichtfeld";
        break;

      case "privacyPolicy":
        if (!value) error = "Datenschutzerklärung muss akzeptiert werden";
        break;

      case "contactForwarding":
        if (!value) error = "Kontaktweitergabe muss akzeptiert werden";
        break;

      case "dataStoragePolicy":
        if (!value) error = "Datenaufbewahrung muss akzeptiert werden";
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
    errors.firstName = validateSingleField("firstName", firstName);
    errors.lastName = validateSingleField("lastName", lastName);
    errors.nickName = validateSingleField("nickName", nickName);
    errors.email = validateSingleField("email", email);
    errors.confirmEmail = validateSingleField("confirmEmail", confirmEmail, { email });
    errors.birthdate = validateSingleField("birthdate", birthday);
    errors.discordName = validateSingleField("discordName", discordName);
    errors.phoneNumber = validateSingleField("phoneNumber", phoneNumber);

    // Adresse
    errors.street = validateSingleField("street", street);
    errors.houseNumber = validateSingleField("houseNumber", houseNumber);
    errors.postalCode = validateSingleField("postalCode", postalCode);
    errors.city = validateSingleField("city", city);
    errors.country = validateSingleField("country", country);

    // Allgemeines
    errors.clothSize = validateSingleField("clothSize", clothSize);
    errors.arrival = validateSingleField("arrival", arrival);
    errors.foodPreferences = validateSingleField("foodPreferences", foodPreferences);
    errors.foodDetails = validateSingleField("foodDetails", foodDetails);

    // Interessen
    errors.qualificationsWorkExperience = validateSingleField(
      "qualificationsWorkExperience",
      qualificationsWorkExperience
    );
    errors.myStrengths = validateSingleField("myStrengths", myStrengths);
    errors.talents = validateSingleField("talents", talents);
    errors.other = validateSingleField("other", other);

    // Einsatzzeiten
    errors.preferredWorktime = validateSingleField("preferredWorktime", preferredWorktime);

    // Bild
    errors.image = validateSingleField("image", null, { file });

    // Bedingungen
    errors.privacyPolicy = validateSingleField("privacyPolicy", privacyPolicy);
    errors.contactForwarding = validateSingleField("contactForwarding", contactForwarding);
    errors.dataStoragePolicy = validateSingleField("dataStoragePolicy", dataStoragePolicy);

    // Filtere null-Werte heraus
    Object.keys(errors).forEach((key) => {
      if (errors[key] === null) delete errors[key];
    });

    return errors;
  };

  async function handleSubmit(e) {
    e.preventDefault();

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

    const desiredAreas = selectedDepartments;

    const formData = new FormData();
    formData.append("eventId", eventId);
    formData.append("gender", gender);
    formData.append("firstName", firstName.trim());
    formData.append("lastName", lastName.trim());
    formData.append("nickName", nickName.trim());
    formData.append("discordName", discordName.trim());
    formData.append("birthday", birthday);
    formData.append("email", email.trim().toLowerCase());
    formData.append("phoneNumber", phoneNumber.trim());
    formData.append("street", street.trim());
    formData.append("houseNumber", houseNumber.trim());
    formData.append("postalCode", postalCode.trim());
    formData.append("city", city.trim());
    formData.append("country", country);
    formData.append("qualificationsWorkExperience", qualificationsWorkExperience.trim());
    formData.append("clothSize", clothSize);
    formData.append("additionalShirt", additionalShirt);
    formData.append("arrival", arrival);
    formData.append("parkingTicketRequired", parkingTicketRequired);
    formData.append("foodPreferences", foodPreferences);
    formData.append("foodDetails", foodDetails.trim());
    formData.append("myStrengths", myStrengths.trim());
    formData.append("talents", talents.trim());
    formData.append("desiredAreas", JSON.stringify(desiredAreas));
    formData.append("message", other.trim());
    formData.append("fridayConstruction", fridayConstruction);
    formData.append("saturdayConstruction", saturdayConstruction);
    formData.append("sundayDeconstruction", sundayDeconstruction);
    formData.append("workingOnSaturday", workingOnSaturday);
    formData.append("workingOnSunday", workingOnSunday);
    formData.append("preferredWorktime", preferredWorktime);
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("internalContactForwardingPolicy", contactForwarding);
    formData.append("dataStoragePolicy", dataStoragePolicy);
    formData.append("registrationReminder", registrationReminder);
    formData.append("helperImage", file);

    try {
      const fetchURL = registrationTest
        ? "https://node.miningmark.de"
        : "https://orgaboard.yumekai.de";
      const response = await fetch(`${fetchURL}/api/v1/event/application/createHelper`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(
          "Deine Anmeldung war erfolgreich. Du erhältst in Kürze eine Bestätigung per E-Mail."
        );

        // Reset form
        setGender("");
        setFirstName("");
        setLastName("");
        setNickName("");
        setDiscordName("");
        setBirthday("");
        setEmail("");
        setConfirmEmail("");
        setPhoneNumber("");
        setStreet("");
        setHouseNumber("");
        setPostalCode("");
        setCity("");
        setCountry("");
        setQualificationsWorkExperience("");
        setClothSize("");
        setAdditionalShirt(false);
        setArrival("");
        setParkingTicketRequired(false);
        setFoodPreferences("");
        setFoodDetails("");
        setMyStrengths("");
        setTalents("");
        setSelectedDepartments([]);
        setOther("");
        setSaturdayConstruction(false);
        setSundayDeconstruction(false);
        setFridayConstruction(false);
        setWorkingOnSaturday(false);
        setWorkingOnSunday(false);
        setPreferredWorktime("");
        setPrivacyPolicy(false);
        setContactForwarding(false);
        setDataStoragePolicy(false);
        setRegistrationReminder(false);
        setFile(null);
        setPreviewUrl(null);
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

    if (!selectedFile) return;

    if (selectedFile.size > maxFileSize) {
      setFileError(`Die Datei darf maximal ${MAX_IMAGE_SIZE_MB}MB groß sein.`);
      setFile(null);
      setPreviewUrl(null);
      return;
    }

    if (!isImageFile(selectedFile.name)) {
      setFileError("Bitte wähle ein gültiges Bild aus. (jpg, jpeg, png, webp)");
      setFile(null);
      setPreviewUrl(null);
      return;
    }

    setFileError("");
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(selectedFile);

    // Validierung triggern wenn Feld bereits berührt wurde
    if (touchedFields.image) {
      const error = validateSingleField("image", null, { file: selectedFile });
      setFieldErrors((prev) => ({
        ...prev,
        image: error,
      }));
    }
  }

  const handleDepartmentChange = (value, isChecked) => {
    if (isChecked) {
      setSelectedDepartments((prev) => [...prev, value]);
    } else {
      setSelectedDepartments((prev) => prev.filter((dept) => dept !== value));
    }
  };

  return (
    <>
      {registrationTest && <h2>Testmodus Aktiv!</h2>}

      {!success && (
        <StyledForm onSubmit={handleSubmit}>
          <p>
            Felder mit <RequiredNote>*</RequiredNote> sind Pflichtfelder.
          </p>

          <h3>Persönliche Angaben</h3>

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
          {getFieldError("gender") && <FieldErrorText>{getFieldError("gender")}</FieldErrorText>}

          <InputOptionInput
            title="Vorname"
            inputText={firstName}
            inputChange={(value) => setFirstName(value)}
            onBlur={() => handleBlur("firstName", firstName)}
            inputRef={refs.firstName}
            isError={!!getFieldError("firstName")}
            require
          />
          {getFieldError("firstName") && (
            <FieldErrorText>{getFieldError("firstName")}</FieldErrorText>
          )}

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
            title="Rufname"
            inputText={nickName}
            inputChange={(value) => setNickName(value)}
            onBlur={() => handleBlur("nickName", nickName)}
            inputRef={refs.nickName}
            isError={!!getFieldError("nickName")}
          />
          {getFieldError("nickName") && (
            <FieldErrorText>{getFieldError("nickName")}</FieldErrorText>
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
            title="Geburtsdatum"
            inputText={birthday}
            inputChange={(value) => setBirthday(value)}
            onBlur={() => handleBlur("birthdate", birthday)}
            type="date"
            inputRef={refs.birthdate}
            isError={!!getFieldError("birthdate")}
            require
          />
          {getFieldError("birthdate") && (
            <FieldErrorText>{getFieldError("birthdate")}</FieldErrorText>
          )}

          <InputOptionInput
            title="Telefonnummer"
            inputText={phoneNumber}
            inputChange={(value) => setPhoneNumber(value)}
            onBlur={() => handleBlur("phoneNumber", phoneNumber)}
            inputRef={refs.phoneNumber}
            isError={!!getFieldError("phoneNumber")}
            require
          />
          {getFieldError("phoneNumber") && (
            <FieldErrorText>{getFieldError("phoneNumber")}</FieldErrorText>
          )}

          <InputOptionInput
            title="Discord Name"
            inputText={discordName}
            inputChange={(value) => setDiscordName(value)}
            onBlur={() => handleBlur("discordName", discordName)}
            inputRef={refs.discordName}
            isError={!!getFieldError("discordName")}
            require
          />
          {getFieldError("discordName") && (
            <FieldErrorText>{getFieldError("discordName")}</FieldErrorText>
          )}

          <p>
            Foto hochladen, dies sollte ein gut ausgeleuchtetes Farbbild vor neutralem Hintergrund
            sein, auf dem du gut zu erkennen bist. <br />
            (max. {MAX_IMAGE_SIZE_MB}MB, jpg, jpeg, png, webp) <RequiredNote>*</RequiredNote>
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

          <Spacer />
          <h3>Adresse</h3>

          <InputOptionInput
            title="Straße"
            inputText={street}
            inputChange={setStreet}
            onBlur={() => handleBlur("street", street)}
            inputRef={refs.street}
            isError={!!getFieldError("street")}
            require
          />
          {getFieldError("street") && <FieldErrorText>{getFieldError("street")}</FieldErrorText>}

          <InputOptionInput
            title="Hausnummer"
            inputText={houseNumber}
            inputChange={setHouseNumber}
            onBlur={() => handleBlur("houseNumber", houseNumber)}
            inputRef={refs.houseNumber}
            isError={!!getFieldError("houseNumber")}
            require
          />
          {getFieldError("houseNumber") && (
            <FieldErrorText>{getFieldError("houseNumber")}</FieldErrorText>
          )}

          <InputOptionInput
            title="PLZ"
            inputText={postalCode}
            inputChange={setPostalCode}
            onBlur={() => handleBlur("postalCode", postalCode)}
            inputRef={refs.postalCode}
            isError={!!getFieldError("postalCode")}
            require
          />
          {getFieldError("postalCode") && (
            <FieldErrorText>{getFieldError("postalCode")}</FieldErrorText>
          )}

          <InputOptionInput
            title="Ort"
            inputText={city}
            inputChange={setCity}
            onBlur={() => handleBlur("city", city)}
            inputRef={refs.city}
            isError={!!getFieldError("city")}
            require
          />
          {getFieldError("city") && <FieldErrorText>{getFieldError("city")}</FieldErrorText>}

          <InputOptionSelect
            title="Land"
            options={COUNTRIES}
            inputText={country}
            inputChange={(value) => setCountry(value)}
            onBlur={() => handleBlur("country", country)}
            inputRef={refs.country}
            isError={!!getFieldError("country")}
            require
          />
          {getFieldError("country") && <FieldErrorText>{getFieldError("country")}</FieldErrorText>}

          <Spacer />
          <h3>Allgemeines</h3>

          <InputOptionSelect
            title="T-Shirt Größe"
            options={CLOTHES_SIZE_OPTIONS.map((option) => option.value)}
            names={CLOTHES_SIZE_OPTIONS.map((option) => option.label)}
            inputText={clothSize}
            inputChange={setClothSize}
            onBlur={() => handleBlur("clothSize", clothSize)}
            inputRef={refs.clothSize}
            isError={!!getFieldError("clothSize")}
            require
          />
          {getFieldError("clothSize") && (
            <FieldErrorText>{getFieldError("clothSize")}</FieldErrorText>
          )}

          <CheckBox
            title="Zusätzliches T-Shirt gewünscht"
            isChecked={additionalShirt}
            inputChange={setAdditionalShirt}
          />

          <RadioButton
            title="Anreise"
            names={ARRIVAL_OPTIONS.map((option) => option.label)}
            options={ARRIVAL_OPTIONS.map((option) => option.value)}
            selectedOption={arrival}
            inputChange={setArrival}
            onBlur={() => handleBlur("arrival", arrival)}
            inputRef={refs.arrival}
            isError={!!getFieldError("arrival")}
            require
          />
          {getFieldError("arrival") && <FieldErrorText>{getFieldError("arrival")}</FieldErrorText>}

          {arrival === "car" && (
            <CheckBox
              title="Parkticket benötigt (wird gestellt)"
              isChecked={parkingTicketRequired}
              inputChange={setParkingTicketRequired}
            />
          )}

          <CheckBox
            title={
              "Aufbau Freitag (18:00 - 22:00); falls andere Zeiten möglich sind bitte angeben im Feld Sonstiges."
            }
            isChecked={fridayConstruction}
            inputChange={(value) => setFridayConstruction(value)}
          />
          <CheckBox
            title={
              "Aufbau Samstag (06:00 - 09:30); falls andere Zeiten möglich sind bitte angeben im Feld Sonstiges."
            }
            isChecked={saturdayConstruction}
            inputChange={(value) => setSaturdayConstruction(value)}
          />
          <CheckBox
            title={
              "Abbau Sonntag (18:00 - 22:00); falls andere Zeiten möglich sind bitte angeben im Feld Sonstiges."
            }
            isChecked={sundayDeconstruction}
            inputChange={(value) => setSundayDeconstruction(value)}
          />

          <Spacer />
          <h3>Verpflegung</h3>

          <RadioButton
            title="Essen"
            names={FOOD_PREFERENCE_OPTIONS.map((option) => option.label)}
            options={FOOD_PREFERENCE_OPTIONS.map((option) => option.value)}
            selectedOption={foodPreferences}
            inputChange={setFoodPreferences}
            onBlur={() => handleBlur("foodPreferences", foodPreferences)}
            inputRef={refs.foodPreferences}
            isError={!!getFieldError("foodPreferences")}
            require
          />
          {getFieldError("foodPreferences") && (
            <FieldErrorText>{getFieldError("foodPreferences")}</FieldErrorText>
          )}

          <InputOptionTextArea
            title="Allergien/Unverträglichkeiten"
            inputText={foodDetails}
            inputChange={setFoodDetails}
            onBlur={() => handleBlur("foodDetails", foodDetails)}
            inputRef={refs.foodDetails}
            isError={!!getFieldError("foodDetails")}
          />
          {getFieldError("foodDetails") && (
            <FieldErrorText>{getFieldError("foodDetails")}</FieldErrorText>
          )}

          <Spacer />
          <h3>Interessen/Aufgaben/Erfahrungen</h3>

          <InputOptionInput
            title="Beruf/Qualifikationen"
            inputText={qualificationsWorkExperience}
            inputChange={setQualificationsWorkExperience}
            onBlur={() => handleBlur("qualificationsWorkExperience", qualificationsWorkExperience)}
            inputRef={refs.qualificationsWorkExperience}
            isError={!!getFieldError("qualificationsWorkExperience")}
          />
          {getFieldError("qualificationsWorkExperience") && (
            <FieldErrorText>{getFieldError("qualificationsWorkExperience")}</FieldErrorText>
          )}

          <InputOptionTextArea
            title="Stärken"
            inputText={myStrengths}
            inputChange={(value) => setMyStrengths(value)}
            onBlur={() => handleBlur("myStrengths", myStrengths)}
            inputRef={refs.myStrengths}
            isError={!!getFieldError("myStrengths")}
          />
          {getFieldError("myStrengths") && (
            <FieldErrorText>{getFieldError("myStrengths")}</FieldErrorText>
          )}

          <InputOptionTextArea
            title="Talente"
            inputText={talents}
            inputChange={(value) => setTalents(value)}
            onBlur={() => handleBlur("talents", talents)}
            inputRef={refs.talents}
            isError={!!getFieldError("talents")}
          />
          {getFieldError("talents") && <FieldErrorText>{getFieldError("talents")}</FieldErrorText>}

          <h4>Wunschteam (kann nicht garantiert werden)</h4>
          {DEPARTMENT_OPTIONS.map((dept) => (
            <CheckBox
              key={dept.value}
              title={dept.label}
              isChecked={selectedDepartments.includes(dept.value)}
              inputChange={(checked) => handleDepartmentChange(dept.value, checked)}
            />
          ))}

          <InputOptionTextArea
            title="Sonstiges"
            inputText={other}
            inputChange={(value) => setOther(value)}
            onBlur={() => handleBlur("other", other)}
            inputRef={refs.other}
            isError={!!getFieldError("other")}
          />
          {getFieldError("other") && <FieldErrorText>{getFieldError("other")}</FieldErrorText>}

          <Spacer />
          <h3>Einsatzzeiten</h3>

          <CheckBox
            title="Ich möchte am Samstag helfen"
            isChecked={workingOnSaturday}
            inputChange={setWorkingOnSaturday}
          />

          <CheckBox
            title="Ich möchte am Sonntag helfen"
            isChecked={workingOnSunday}
            inputChange={setWorkingOnSunday}
          />

          <RadioButton
            title="Bevorzugte Helferzeit"
            names={PREFERRED_WORKTIME_OPTIONS.map((option) => option.label)}
            options={PREFERRED_WORKTIME_OPTIONS.map((option) => option.value)}
            selectedOption={preferredWorktime}
            inputChange={setPreferredWorktime}
            onBlur={() => handleBlur("preferredWorktime", preferredWorktime)}
            inputRef={refs.preferredWorktime}
            isError={!!getFieldError("preferredWorktime")}
            require
          />
          {getFieldError("preferredWorktime") && (
            <FieldErrorText>{getFieldError("preferredWorktime")}</FieldErrorText>
          )}
          <p>Die genauen Zeiten geben wir wenige Wochen vor der YumeKai bekannt.</p>

          <Spacer />
          <h3>Richtlinien</h3>

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
            title="contactForwarding"
            content={
              <p>
                Dürfen wir der zuständigen Orga deine Kontaktdaten weiter geben.
                <RequiredNote>*</RequiredNote>
              </p>
            }
            isChecked={contactForwarding}
            inputChange={(value) => {
              setContactForwarding(value);
              if (touchedFields.contactForwarding) {
                handleBlur("contactForwarding", value);
              }
            }}
            inputRef={refs.contactForwarding}
            isError={!!getFieldError("contactForwarding")}
            require
          />
          {getFieldError("contactForwarding") && (
            <FieldErrorText>{getFieldError("contactForwarding")}</FieldErrorText>
          )}

          <CheckBox
            title="dataStoragePolicy"
            content={
              <p>
                Ich bin damit einverstanden, dass meine Daten durch die Dreamfly-Events UG
                elektronisch gespeichert werden und zum Zweck der Durchführung der Veranstaltung an
                die zuständigen Bereiche weitergeleitet werden dürfen.{" "}
                <RequiredNote>*</RequiredNote>
              </p>
            }
            isChecked={dataStoragePolicy}
            inputChange={(value) => {
              setDataStoragePolicy(value);
              if (touchedFields.dataStoragePolicy) {
                handleBlur("dataStoragePolicy", value);
              }
            }}
            inputRef={refs.dataStoragePolicy}
            isError={!!getFieldError("dataStoragePolicy")}
            require
          />
          {getFieldError("dataStoragePolicy") && (
            <FieldErrorText>{getFieldError("dataStoragePolicy")}</FieldErrorText>
          )}

          <CheckBox
            title="registrationReminder"
            content={
              <p>
                Ich möchte eine Erinnerungs-E-Mail erhalten, für die Anmeldungseröffnung der YumeKai
                2027.
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

          {fieldErrors.general && (
            <ErrorText style={{ marginTop: "1rem", textAlign: "center" }}>
              {fieldErrors.general}
            </ErrorText>
          )}

          <StyledButton type="submit">Anmelden</StyledButton>
        </StyledForm>
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
