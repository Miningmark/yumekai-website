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
import RadioButton from "@/components/styled/RadioButton";
import CheckBox from "@/components/styled/CheckBox";
import FileUpload from "@/components/styled/FileUpload";
import LoadingAnimation from "@/components/styled/LoadingAnimation";
import {
  REGISTRATION_START_ARTIST,
  REGISTRATION_END_ARTIST,
  checkRegistrationPeriod,
  EVENT_ID,
  TICKET_COST,
  WLAN_COST,
  LOCATION_OPTIONS,
  PROGRAMM_BOOKLET_OPTIONS,
  ARTIST_STANDSIZE_OPTIONS,
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

export default function Artist() {
  const [eventId, setEventId] = useState(EVENT_ID);

  const [registrationStatus, setRegistrationStatus] = useState(() =>
    checkRegistrationPeriod(REGISTRATION_START_ARTIST, REGISTRATION_END_ARTIST)
  );

  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [addressData, setAddressData] = useState({
    street: "",
    houseNumber: "",
    postalCode: "",
    city: "",
    country: "",
  });

  const [typeOfArt, setTypeOfArt] = useState("");
  const [standSize, setStandSize] = useState("FULL_TABLE");
  const [location, setLocation] = useState("STADTHALLE");
  const [additionalExhibitorTicket, setAdditionalExhibitorTicket] = useState(0);
  const [wlan, setWlan] = useState(false);
  const [programmBooklet, setProgrammBooklet] = useState("NO");
  const [announcementText, setAnnouncementText] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
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

  const refs = {
    gender: useRef(null),
    name: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    confirmEmail: useRef(null),
    vendorName: useRef(null),
    artistName: useRef(null),
    street: useRef(null),
    houseNumber: useRef(null),
    postalCode: useRef(null),
    city: useRef(null),
    country: useRef(null),
    typeOfArt: useRef(null),
    standSize: useRef(null),
    location: useRef(null),
    additionalExhibitorTicket: useRef(null),
    wlan: useRef(null),
    programmBooklet: useRef(null),
    announcementText: useRef(null),
    website: useRef(null),
    instagram: useRef(null),
    image: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
    licensedMusic: useRef(null),
    pictureRights: useRef(null),
    conditions: useRef(null),
    registrationReminder: useRef(null),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRegistrationStatus(
        checkRegistrationPeriod(REGISTRATION_START_ARTIST, REGISTRATION_END_ARTIST)
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

      case "vendorName":
        if (value && value.trim().length > 0) {
          const vendorNameValidation = validateString(value, "Firmenname", 2, 100);
          if (!vendorNameValidation.check) error = vendorNameValidation.description;
        }
        break;

      case "artistName":
        const artistNameValidation = validateString(value, "Künstlername", 3, 100, true);
        if (!artistNameValidation.check) error = artistNameValidation.description;
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

      case "typeOfArt":
        const typeOfArtValidation = validateString(value, "Angebotene Artikel", 5, 2500, true);
        if (!typeOfArtValidation.check) error = typeOfArtValidation.description;
        break;

      case "announcementText":
        const announcementValidation = validateString(value, "Ankündigungstext", 5, 2500, true);
        if (!announcementValidation.check) error = announcementValidation.description;
        break;

      case "standSize":
        if (!value) error = "Standgröße ist erforderlich";
        break;

      case "additionalExhibitorTicket":
        if (value < 0) error = "Mindestens 0 zusätzliche Ausstellertickets";
        else if (value > 2) error = "Maximal 2 zusätzliche Ausstellertickets";
        break;

      case "programmBooklet":
        if (!value) error = "Programmheft ist erforderlich";
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
    errors.vendorName = validateSingleField("vendorName", vendorName);
    errors.artistName = validateSingleField("artistName", artistName);

    // Adresse
    errors.street = validateSingleField("street", addressData.street);
    errors.houseNumber = validateSingleField("houseNumber", addressData.houseNumber);
    errors.postalCode = validateSingleField("postalCode", addressData.postalCode);
    errors.city = validateSingleField("city", addressData.city);
    errors.country = validateSingleField("country", addressData.country);

    // Stand
    errors.typeOfArt = validateSingleField("typeOfArt", typeOfArt);
    errors.announcementText = validateSingleField("announcementText", announcementText);
    errors.standSize = validateSingleField("standSize", standSize);
    errors.additionalExhibitorTicket = validateSingleField(
      "additionalExhibitorTicket",
      additionalExhibitorTicket
    );
    errors.programmBooklet = validateSingleField("programmBooklet", programmBooklet);

    // Allgemeines
    errors.website = validateSingleField("website", website);
    errors.instagram = validateSingleField("instagram", instagram);
    errors.message = validateSingleField("message", message);
    errors.image = validateSingleField("image", null, { file });

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
    formData.append("vendorName", vendorName.trim());
    formData.append("artistName", artistName.trim());
    formData.append("street", addressData.street.trim());
    formData.append("houseNumber", addressData.houseNumber.trim());
    formData.append("postalCode", addressData.postalCode.trim());
    formData.append("city", addressData.city.trim());
    formData.append("country", addressData.country.trim());
    formData.append("typeOfArt", typeOfArt.trim());
    formData.append("announcementText", announcementText.trim());
    formData.append("standSize", standSize);
    formData.append("location", location);
    formData.append("additionalExhibitorTickets", additionalExhibitorTicket);
    formData.append("wlanRequired", wlan);
    formData.append("bookletSite", programmBooklet);
    formData.append("website", website.trim());
    formData.append("instagram", instagram.trim());
    formData.append("message", message.trim());
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("dataStoragePolicy", dataStorage);
    formData.append("licensedMusicPolicy", licensedMusic);
    formData.append("pictureRightsPolicy", pictureRights);
    formData.append("conditionsPolicy", conditions);
    formData.append("registrationReminder", registrationReminder);
    formData.append("image", file);

    try {
      const response = await fetch(
        "https://node.miningmark.de/api/v1/event/application/createArtist",
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
        setVendorName("");
        setArtistName("");
        setAddressData({ street: "", houseNumber: "", postalCode: "", city: "", country: "" });
        setTypeOfArt("");
        setStandSize("FULL_TABLE");
        setLocation("STADTHALLE");
        setAdditionalExhibitorTicket(0);
        setWlan(false);
        setProgrammBooklet("NO");
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

    // Erstelle eine temporäre URL für das Crop-Modal
    const reader = new FileReader();
    reader.onloadend = () => {
      setTempImageUrl(reader.result);
      setTempFile(selectedFile);
      setShowCropModal(true); // Öffne das Crop-Modal
    };
    reader.readAsDataURL(selectedFile);
  }

  const handleCropComplete = ({ blob, file, previewUrl }) => {
    setFile(file);
    setPreviewUrl(previewUrl);
    setShowCropModal(false);

    // Cleanup
    if (tempImageUrl) {
      URL.revokeObjectURL(tempImageUrl);
    }
    setTempImageUrl(null);
    setTempFile(null);

    // Validierung triggern wenn Feld bereits berührt wurde
    if (touchedFields.image) {
      const error = validateSingleField("image", null, { file: file });
      setFieldErrors((prev) => ({
        ...prev,
        image: error,
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
    if (refs.image?.current) {
      refs.image.current.value = "";
    }
  };

  const selectedStandCost =
    ARTIST_STANDSIZE_OPTIONS.find((option) => option.value === standSize).price *
      LOCATION_OPTIONS.find((option) => option.value === location).artist || 0;
  const totalTicketCost =
    additionalExhibitorTicket > 0 ? TICKET_COST * additionalExhibitorTicket : 0;
  const totalWlanCost = wlan ? WLAN_COST : 0;
  const totalProgrammBookletCost =
    PROGRAMM_BOOKLET_OPTIONS.find((option) => option.value === programmBooklet).price || 0;

  const totalCost = selectedStandCost + totalProgrammBookletCost + totalTicketCost + totalWlanCost;

  return (
    <>
      <h1>Anmeldung als Künstler</h1>
      <p>
        Sichert euch euren Platz auf der YumeKai 2026!
        <br />
        <br />
        Bitte beachtet die{" "}
        <StyledLink href="/downloads/Teilnahmebedingungen_Kuenstler_2025.pdf" target="_blank">
          Teilnahme- und Auswahlbedingungen für Künstler
        </StyledLink>
        .
        <br />
        <br />
        Bei Fragen oder eventuellen Unklarheiten kannst du dich gerne per E-Mail an:{" "}
        <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutze unser{" "}
        <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>.
      </p>

      <h2>Die Anmeldung als Künstler ist momentan geschlossen. (TEST-Modus)</h2>

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
              title="Firmenname"
              inputText={vendorName}
              inputChange={(value) => setVendorName(value)}
              onBlur={() => handleBlur("vendorName", vendorName)}
              inputRef={refs.vendorName}
              isError={!!getFieldError("vendorName")}
            />
            {getFieldError("vendorName") && (
              <FieldErrorText>{getFieldError("vendorName")}</FieldErrorText>
            )}

            <InputOptionInput
              title="Künstlername"
              inputText={artistName}
              inputChange={(value) => setArtistName(value)}
              onBlur={() => handleBlur("artistName", artistName)}
              inputRef={refs.artistName}
              isError={!!getFieldError("artistName")}
              require
            />
            {getFieldError("artistName") && (
              <FieldErrorText>{getFieldError("artistName")}</FieldErrorText>
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

            <InputOptionTextArea
              title="Angebotene Artikel"
              inputText={typeOfArt}
              inputChange={(value) => setTypeOfArt(value)}
              onBlur={() => handleBlur("typeOfArt", typeOfArt)}
              inputRef={refs.typeOfArt}
              isError={!!getFieldError("typeOfArt")}
              require
            />
            {getFieldError("typeOfArt") && (
              <FieldErrorText>{getFieldError("typeOfArt")}</FieldErrorText>
            )}

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

            <RadioButton
              title="Stand Lage"
              names={LOCATION_OPTIONS.map((option) => option.label)}
              options={LOCATION_OPTIONS.map((option) => option.value)}
              selectedOption={location}
              inputChange={(value) => setLocation(value)}
              inputRef={refs.location}
              require
            />

            <RadioButton
              title="Standgröße"
              names={ARTIST_STANDSIZE_OPTIONS.map((option) => option.label)}
              options={ARTIST_STANDSIZE_OPTIONS.map((option) => option.value)}
              selectedOption={standSize}
              inputChange={(value) => setStandSize(value)}
              inputRef={refs.standSize}
              isError={!!getFieldError("standSize")}
              require
            />
            {getFieldError("standSize") && (
              <FieldErrorText>{getFieldError("standSize")}</FieldErrorText>
            )}

            <InputOptionInput
              type="number"
              title={`Zusätzliches Ausstellerticket (je ${TICKET_COST}€)`}
              inputText={additionalExhibitorTicket}
              inputChange={(value) => setAdditionalExhibitorTicket(value)}
              onBlur={() => handleBlur("additionalExhibitorTicket", additionalExhibitorTicket)}
              inputRef={refs.additionalExhibitorTicket}
              isError={!!getFieldError("additionalExhibitorTicket")}
              min={0}
              max={2}
            />
            {getFieldError("additionalExhibitorTicket") && (
              <FieldErrorText>{getFieldError("additionalExhibitorTicket")}</FieldErrorText>
            )}

            <CheckBox
              title="wlan"
              content={`W-lan für ein EC-Karten-/Kreditkartengerät (${WLAN_COST}€)`}
              isChecked={wlan}
              inputChange={(value) => setWlan(value)}
              inputRef={refs.wlan}
            />
            <p>Der Zugang wird von einem YumeKai-Helfer auf dem ausgewählten Gerät eingerichtet.</p>

            <RadioButton
              title={
                <>
                  <span>
                    Programmheft{" "}
                    <StyledLink href="/downloads/Programmheft-Infoblatt.pdf" target="_blank">
                      Infoblatt
                    </StyledLink>{" "}
                  </span>
                </>
              }
              names={PROGRAMM_BOOKLET_OPTIONS.map((option) => option.label)}
              options={PROGRAMM_BOOKLET_OPTIONS.map((option) => option.value)}
              selectedOption={programmBooklet}
              inputChange={(value) => setProgrammBooklet(value)}
              inputRef={refs.programmBooklet}
              isError={!!getFieldError("programmBooklet")}
              require
            />
            {getFieldError("programmBooklet") && (
              <FieldErrorText>{getFieldError("programmBooklet")}</FieldErrorText>
            )}

            <h3>Gesamtkosten</h3>
            <ul>
              <li>
                Standgröße:{" "}
                {ARTIST_STANDSIZE_OPTIONS.find((option) => option.value === standSize).label} (
                {selectedStandCost.toFixed(2)}€)
              </li>
              {additionalExhibitorTicket > 0 && (
                <li>
                  Zusätzliche Ausstellertickets: {additionalExhibitorTicket} x {TICKET_COST},00€ ={" "}
                  {totalTicketCost.toFixed(2)}€
                </li>
              )}
              {wlan && <li>W-Lan: {WLAN_COST},00€</li>}
              {programmBooklet !== "NO" && (
                <li>
                  Programmheft:{" "}
                  {
                    PROGRAMM_BOOKLET_OPTIONS.find((option) => option.value === programmBooklet)
                      .label
                  }{" "}
                  ({totalProgrammBookletCost.toFixed(2)}€)
                </li>
              )}
            </ul>

            <h4>Gesamtbetrag: {totalCost.toFixed(2)}€ zzgl. MwSt.</h4>

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
                  <StyledLink
                    href="/downloads/Teilnahmebedingungen_Kuenstler_2025.pdf"
                    target="_blank"
                  >
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
          fileName={tempFile?.name || "workshop-image.png"}
        />
      )}
    </>
  );
}
