import styled from "styled-components";
import Image from "next/image";
import { useState, useRef } from "react";
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
} from "@/util/registration_options";

const FieldErrorText = styled(ErrorText)`
  margin-top: -10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

const ACCEPTED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
const MAX_IMAGE_SIZE_MB = 10;

const PREFERRED_WORKTIME_OPTIONS = [
  { value: "Schicht 1", label: "Schicht 1" },
  { value: "Schicht 2", label: "Schicht 2" },
];

const isImageFile = (fileName) => {
  return ACCEPTED_IMAGE_EXTENSIONS.some((ext) => fileName.toLowerCase().endsWith(ext));
};

export default function HelferForm() {
  const [eventId, setEventId] = useState(EVENT_ID);

  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [discordName, setDiscordName] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [clothesSize, setClothesSize] = useState("");
  const [additionalShirt, setAdditionalShirt] = useState(false);
  const [arrival, setArrival] = useState("");
  const [requiresParkingTicket, setRequiresParkingTicket] = useState(false);
  const [assemblyFriday, setAssemblyFriday] = useState(false);
  const [assembly, setAssembly] = useState(false);
  const [deconstruction, setDeconstruction] = useState(false);

  const [foodPreference, setFoodPreference] = useState("");
  const [foodDetails, setFoodDetails] = useState("");

  const [occupation, setOccupation] = useState("");
  const [strengths, setStrengths] = useState("");
  const [departmentAdmission, setDepartmentAdmission] = useState(false);
  const [departmentWeaponsCheck, setDepartmentWeaponsCheck] = useState(false);
  const [departmentStage, setDepartmentStage] = useState(false);
  const [departmentSpringer, setDepartmentSpringer] = useState(false);
  const [departmentKaraoke, setDepartmentKaraoke] = useState(false);
  const [departmentBringAndBay, setDepartmentBringAndBay] = useState(false);
  const [departmentWorkshop, setDepartmentWorkshop] = useState(false);
  const [departmentSpecialGuest, setDepartmentSpecialGuest] = useState(false);
  const [other, setOther] = useState("");

  const [workingOnSaturday, setWorkingOnSaturday] = useState(false);
  const [workingOnSunday, setWorkingOnSunday] = useState(false);
  const [preferredWorktime, setPreferredWorktime] = useState("");

  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [contactForwarding, setContactForwarding] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [fileError, setFileError] = useState("");
  const [loading, setLoading] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});

  const refs = {
    gender: useRef(null),
    name: useRef(null),
    lastName: useRef(null),
    nickname: useRef(null),
    gender: useRef(null),
    street: useRef(null),
    postalCode: useRef(null),
    city: useRef(null),
    country: useRef(null),
    email: useRef(null),
    confirmEmail: useRef(null),
    birthdate: useRef(null),
    discordName: useRef(null),
    phone: useRef(null),
    privacyPolicy: useRef(null),
    contactForwarding: useRef(null),
    clothesSize: useRef(null),
    arrival: useRef(null),
    foodPreference: useRef(null),
    foodDetails: useRef(null),
    occupation: useRef(null),
    strengths: useRef(null),
    other: useRef(null),
    workingOnSaturday: useRef(null),
    workingOnSunday: useRef(null),
    preferredWorktime: useRef(null),
    image: useRef(null),
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

      case "nickname":
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

      case "phone":
        const phoneValidation = validateString(value, "Telefonnummer", 5, 25, true);
        if (!phoneValidation.check) error = phoneValidation.description;
        break;

      case "street":
        const streetError = validateField(value, "Straße", 2, 50, true);
        if (streetError) error = streetError.message;
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

      case "clothesSize":
        if (!value) error = "T-Shirt Größe ist ein Pflichtfeld";
        break;

      case "arrival":
        if (!value) error = "Anreise ist ein Pflichtfeld";
        break;

      case "foodPreference":
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

      case "occupation":
        if (value && value.trim().length > 0) {
          const occupationValidation = validateString(value, "Beruf/Qualifikationen", 2, 100);
          if (!occupationValidation.check) error = occupationValidation.description;
        }
        break;

      case "strengths":
        if (value && value.trim().length > 0) {
          const strengthsValidation = validateString(value, "Stärken", 3, 500);
          if (!strengthsValidation.check) error = strengthsValidation.description;
        }
        break;

      case "other":
        if (value && value.trim().length > 0) {
          const otherValidation = validateString(value, "Sonstiges", 3, 1000);
          if (!otherValidation.check) error = otherValidation.description;
        }
        break;

      case "preferredWorktime":
        if (value && value.trim().length > 0) {
          const worktimeValidation = validateString(value, "Bevorzugte Schicht", 1, 50);
          if (!worktimeValidation.check) error = worktimeValidation.description;
        }
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
    errors.nickname = validateSingleField("nickname", nickname);
    errors.email = validateSingleField("email", email);
    errors.confirmEmail = validateSingleField("confirmEmail", confirmEmail, { email });
    errors.gender = validateSingleField("gender", gender);
    errors.birthdate = validateSingleField("birthdate", birthdate);
    errors.discordName = validateSingleField("discordName", discordName);
    errors.phone = validateSingleField("phone", phone);

    // Adresse
    errors.street = validateSingleField("street", street);
    errors.postalCode = validateSingleField("postalCode", postalCode);
    errors.city = validateSingleField("city", city);
    errors.country = validateSingleField("country", country);

    // Allgemeines
    errors.clothesSize = validateSingleField("clothesSize", clothesSize);
    errors.arrival = validateSingleField("arrival", arrival);
    errors.foodPreference = validateSingleField("foodPreference", foodPreference);
    errors.foodDetails = validateSingleField("foodDetails", foodDetails);

    // Interessen
    errors.occupation = validateSingleField("occupation", occupation);
    errors.strengths = validateSingleField("strengths", strengths);
    errors.other = validateSingleField("other", other);

    // Einsatzzeiten
    errors.preferredWorktime = validateSingleField("preferredWorktime", preferredWorktime);

    // Bild
    errors.image = validateSingleField("image", null, { file });

    // Bedingungen
    errors.privacyPolicy = validateSingleField("privacyPolicy", privacyPolicy);
    errors.contactForwarding = validateSingleField("contactForwarding", contactForwarding);

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

    const desiredTeam =
      [
        departmentAdmission && "Einlasskontrolle",
        departmentWeaponsCheck && "Waffencheck",
        departmentStage && "Bühne",
        departmentSpringer && "Springer",
        departmentKaraoke && "Karaoke",
        departmentBringAndBay && "Bring & Buy",
        departmentWorkshop && "Workshop",
        departmentSpecialGuest && "Ehrengast betreuung",
      ]
        .filter(Boolean)
        .join(", ")
        .trim() || "Kein Wunschteam";

    const formData = new FormData();
    formData.append("eventId", eventId);
    formData.append("gender", gender);
    formData.append("firstName", name.trim());
    formData.append("lastName", lastName.trim());
    formData.append("nickname", nickname.trim());
    formData.append("discordName", discordName.trim());
    formData.append("birthdate", birthdate);
    formData.append("email", email.trim().toLowerCase());
    formData.append("phone", phone.trim());
    formData.append("street", street.trim());
    formData.append("postalCode", postalCode.trim());
    formData.append("city", city.trim());
    formData.append("country", country);
    formData.append("occupation", occupation.trim());
    formData.append("clothesSize", clothesSize);
    formData.append("additionalShirt", additionalShirt);
    formData.append("arrival", arrival);
    formData.append("requiresParkingTicket", requiresParkingTicket);
    formData.append("foodPreference", foodPreference);
    formData.append("foodDetails", foodDetails.trim());
    formData.append("strengths", strengths.trim());
    formData.append("desiredTeam", desiredTeam);
    formData.append("other", other.trim());
    formData.append("assemblyFriday", assemblyFriday);
    formData.append("assembly", assembly);
    formData.append("deconstruction", deconstruction);
    formData.append("workingOnSaturday", workingOnSaturday);
    formData.append("workingOnSunday", workingOnSunday);
    formData.append("preferredWorktime", preferredWorktime);
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("contactForwarding", contactForwarding);
    formData.append("file", file);

    try {
      const response = await fetch("/api/helferRegistration", {
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
        setNickname("");
        setDiscordName("");
        setBirthdate("");
        setEmail("");
        setConfirmEmail("");
        setPhone("");
        setStreet("");
        setPostalCode("");
        setCity("");
        setCountry("");
        setOccupation("");
        setClothesSize("");
        setAdditionalShirt(false);
        setArrival("");
        setRequiresParkingTicket(false);
        setFoodPreference("");
        setFoodDetails("");
        setStrengths("");
        setDepartmentAdmission(false);
        setDepartmentWeaponsCheck(false);
        setDepartmentStage(false);
        setDepartmentSpringer(false);
        setDepartmentKaraoke(false);
        setDepartmentBringAndBay(false);
        setDepartmentWorkshop(false);
        setDepartmentSpecialGuest(false);
        setOther("");
        setAssembly(false);
        setDeconstruction(false);
        setAssemblyFriday(false);
        setWorkingOnSaturday(false);
        setWorkingOnSunday(false);
        setPreferredWorktime("");
        setPrivacyPolicy(false);
        setContactForwarding(false);
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

  return (
    <>
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
            title="Rufname"
            inputText={nickname}
            inputChange={(value) => setNickname(value)}
            onBlur={() => handleBlur("nickname", nickname)}
            inputRef={refs.nickname}
            isError={!!getFieldError("nickname")}
          />
          {getFieldError("nickname") && (
            <FieldErrorText>{getFieldError("nickname")}</FieldErrorText>
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
            inputText={birthdate}
            inputChange={(value) => setBirthdate(value)}
            onBlur={() => handleBlur("birthdate", birthdate)}
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
            inputText={phone}
            inputChange={(value) => setPhone(value)}
            onBlur={() => handleBlur("phone", phone)}
            inputRef={refs.phone}
            isError={!!getFieldError("phone")}
            require
          />
          {getFieldError("phone") && <FieldErrorText>{getFieldError("phone")}</FieldErrorText>}

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
            inputText={clothesSize}
            inputChange={setClothesSize}
            onBlur={() => handleBlur("clothesSize", clothesSize)}
            inputRef={refs.clothesSize}
            isError={!!getFieldError("clothesSize")}
            require
          />
          {getFieldError("clothesSize") && (
            <FieldErrorText>{getFieldError("clothesSize")}</FieldErrorText>
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

          {arrival === "Auto" && (
            <CheckBox
              title="Parkticket benötigt"
              isChecked={requiresParkingTicket}
              inputChange={setRequiresParkingTicket}
            />
          )}

          <CheckBox
            title={
              "Aufbau Freitag (18:00 - 22:00) falls andere Zeiten möglich sind bitte angeben bei Sonstiges."
            }
            isChecked={assemblyFriday}
            inputChange={(value) => setAssemblyFriday(value)}
          />
          <CheckBox
            title={
              "Aufbau Samstag (06:00 - 09:30) falls andere Zeiten möglich sind bitte angeben bei Sonstiges."
            }
            isChecked={assembly}
            inputChange={(value) => setAssembly(value)}
          />
          <CheckBox
            title={
              "Abbau Sonntag (18:00 - 22:00) falls andere Zeiten möglich sind bitte angeben bei Sonstiges."
            }
            isChecked={deconstruction}
            inputChange={(value) => setDeconstruction(value)}
          />

          <Spacer />
          <h3>Verpflegung</h3>

          <RadioButton
            title="Essen"
            names={FOOD_PREFERENCE_OPTIONS.map((option) => option.label)}
            options={FOOD_PREFERENCE_OPTIONS.map((option) => option.value)}
            selectedOption={foodPreference}
            inputChange={setFoodPreference}
            onBlur={() => handleBlur("foodPreference", foodPreference)}
            inputRef={refs.foodPreference}
            isError={!!getFieldError("foodPreference")}
            require
          />
          {getFieldError("foodPreference") && (
            <FieldErrorText>{getFieldError("foodPreference")}</FieldErrorText>
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
            inputText={occupation}
            inputChange={setOccupation}
            onBlur={() => handleBlur("occupation", occupation)}
            inputRef={refs.occupation}
            isError={!!getFieldError("occupation")}
          />
          {getFieldError("occupation") && (
            <FieldErrorText>{getFieldError("occupation")}</FieldErrorText>
          )}

          <InputOptionTextArea
            title="Stärken"
            inputText={strengths}
            inputChange={(value) => setStrengths(value)}
            onBlur={() => handleBlur("strengths", strengths)}
            inputRef={refs.strengths}
            isError={!!getFieldError("strengths")}
          />
          {getFieldError("strengths") && (
            <FieldErrorText>{getFieldError("strengths")}</FieldErrorText>
          )}

          <h4>Wunschteam (kann nicht garantiert werden)</h4>
          <CheckBox
            title={"Einlasskontrolle"}
            isChecked={departmentAdmission}
            inputChange={(value) => setDepartmentAdmission(value)}
          />
          <CheckBox
            title={"Waffencheck"}
            isChecked={departmentWeaponsCheck}
            inputChange={(value) => setDepartmentWeaponsCheck(value)}
          />
          <CheckBox
            title={"Bühne"}
            isChecked={departmentStage}
            inputChange={(value) => setDepartmentStage(value)}
          />
          <CheckBox
            title={"Springer"}
            isChecked={departmentSpringer}
            inputChange={(value) => setDepartmentSpringer(value)}
          />
          <CheckBox
            title={"Karaoke"}
            isChecked={departmentKaraoke}
            inputChange={(value) => setDepartmentKaraoke(value)}
          />
          <CheckBox
            title={"Bring & Buy"}
            isChecked={departmentBringAndBay}
            inputChange={(value) => setDepartmentBringAndBay(value)}
          />
          <CheckBox
            title={"Workshop"}
            isChecked={departmentWorkshop}
            inputChange={(value) => setDepartmentWorkshop(value)}
          />

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
            title="Ich möchte am Samstag arbeiten"
            isChecked={workingOnSaturday}
            inputChange={setWorkingOnSaturday}
          />

          <CheckBox
            title="Ich möchte am Sonntag arbeiten"
            isChecked={workingOnSunday}
            inputChange={setWorkingOnSunday}
          />

          <RadioButton
            title="Bevorzugte Schicht"
            names={PREFERRED_WORKTIME_OPTIONS.map((option) => option.label)}
            options={PREFERRED_WORKTIME_OPTIONS.map((option) => option.value)}
            selectedOption={preferredWorktime}
            inputChange={setPreferredWorktime}
            onBlur={() => handleBlur("preferredWorktime", preferredWorktime)}
            inputRef={refs.preferredWorktime}
            isError={!!getFieldError("preferredWorktime")}
          />
          {getFieldError("preferredWorktime") && (
            <FieldErrorText>{getFieldError("preferredWorktime")}</FieldErrorText>
          )}

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
