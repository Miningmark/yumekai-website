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
import validateString from "@/util/inputCheck";

const TimeslotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  ${({ $iserror }) => $iserror && `border: solid 2px red;`}
  ${({ $iserror }) => $iserror && `padding: 10px;`}
`;

const EU_COUNTRIES = [
  "Deutschland",
  "Österreich",
  "Schweiz",
  "Belgien",
  "Frankreich",
  "Italien",
  "Spanien",
  "Niederlande",
  "Polen",
  "Tschechien",
  "Dänemark",
  "Schweden",
  "Norwegen",
  "Finnland",
  "Irland",
  "Portugal",
  "Griechenland",
  "Ungarn",
  "Rumänien",
  "Bulgarien",
];

const ACCOMODATION_OPTIONS = [
  "Nicht benötigt",
  "wäre gut, aber nicht notwendig",
  "zwingend benötigt",
];

const ACCEPTED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
const ACCEPTED_FILE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".pdf"];
const MAX_FILE_SIZE_MB = 10;

const isImageFile = (fileName) => {
  return ACCEPTED_IMAGE_EXTENSIONS.some((ext) => fileName.toLowerCase().endsWith(ext));
};

export default function RegistrationAsShowact() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [groupName, setGroupName] = useState("");
  const [groupMembers, setGroupMembers] = useState(1);
  const [description, setDescription] = useState("");
  const [timeSlot1, setTimeSlot1] = useState(false);
  const [timeSlot2, setTimeSlot2] = useState(false);
  const [timeSlot3, setTimeSlot3] = useState(false);
  const [timeSlot4, setTimeSlot4] = useState(false);
  const [constructionTime, setConstructionTime] = useState("");
  const [performanceTime, setPerformanceTime] = useState("");
  const [deconstructionTime, setDeconstructionTime] = useState("");
  const [accomodation, setAccomodation] = useState("");
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
  const [showactConditions, setShowactConditions] = useState(false);

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");
  const [fileError, setFileError] = useState("");
  const [fileError2, setFileError2] = useState("");
  const [loading, setLoading] = useState(false);

  const refs = {
    name: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    confirmEmail: useRef(null),
    street: useRef(null),
    postalCode: useRef(null),
    city: useRef(null),
    country: useRef(null),
    groupName: useRef(null),
    groupMembers: useRef(null),
    description: useRef(null),
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
    licensedMusic: useRef(null),
    pictureRights: useRef(null),
    showactConditions: useRef(null),
  };

  async function submit(event) {
    event.preventDefault();

    const newErrors = [];
    setErrors([]);
    setSuccess("");

    // Validierungslogik mit validateString
    // Name Validierung
    const nameValidation = validateString(name, "Vorname", 2, 50, true);
    if (!nameValidation.check)
      newErrors.push({ field: "name", message: nameValidation.description });

    // Nachname Validierung
    const lastNameValidation = validateString(lastName, "Nachname", 2, 50, true);
    if (!lastNameValidation.check)
      newErrors.push({ field: "lastName", message: lastNameValidation.description });

    // Email Validierung
    const emailValidation = validateString(email, "E-Mail", 2, 100, true, true);
    if (!emailValidation.check)
      newErrors.push({ field: "email", message: emailValidation.description });

    //Straße Validierung
    const streetValidation = validateString(street, "Straße", 2, 50, true);
    if (!streetValidation.check)
      newErrors.push({ field: "street", message: streetValidation.description });

    //PLZ Validierung
    const postalCodeValidation = validateString(postalCode, "PLZ", 2, 10, true);
    if (!postalCodeValidation.check)
      newErrors.push({ field: "postalCode", message: postalCodeValidation.description });

    //Ort Validierung
    const cityValidation = validateString(city, "Ort", 2, 50, true);
    if (!cityValidation.check)
      newErrors.push({ field: "city", message: cityValidation.description });

    //Land Validierung
    const countryValidation = validateString(country, "Land", 2, 50, true);
    if (!countryValidation.check)
      newErrors.push({ field: "country", message: countryValidation.description });

    //Gruppenname Validierung
    const groupNameValidation = validateString(groupName, "Gruppenname", 2, 50, true);
    if (!groupNameValidation.check)
      newErrors.push({ field: "groupName", message: groupNameValidation.description });

    //Gruppenmitglieder Validierung
    if (groupMembers < 1)
      newErrors.push({ field: "groupMembers", message: "Mindestens 1 Gruppenmitglied" });
    if (groupMembers > 25)
      newErrors.push({ field: "groupMembers", message: "Maximal 25 Mitglieder" });

    //Beschreibung Validierung
    const descriptionValidation = validateString(description, "Beschreibung", 5, 2500, true);
    if (!descriptionValidation.check)
      newErrors.push({ field: "description", message: descriptionValidation.description });

    //Zeitslots Validierung
    if (!timeSlot1 && !timeSlot2 && !timeSlot3 && !timeSlot4)
      newErrors.push({ field: "timeSlots", message: "Bitte wähle mindestens einen Zeitraum" });

    //Aufbauzeit Validierung
    if (constructionTime < 1)
      newErrors.push({ field: "constructionTime", message: "Aufbaudauer mindestens 1 Minute" });
    if (constructionTime > 60)
      newErrors.push({ field: "constructionTime", message: "Aufbaudauer maximal 60 Minuten" });

    //Aufführungszeit Validierung
    if (performanceTime < 30)
      newErrors.push({ field: "performanceTime", message: "Auftritt mindestens 30 Minute" });
    if (performanceTime > 180)
      newErrors.push({ field: "performanceTime", message: "Auftritt maximal 180 Minuten" });

    //Abbauzeit Validierung
    if (deconstructionTime < 1)
      newErrors.push({ field: "deconstructionTime", message: "Abbaudauer mindestens 1 Minute" });
    if (deconstructionTime > 60)
      newErrors.push({ field: "deconstructionTime", message: "Abbaudauer maximal 60 Minuten" });

    //Unterkunft Validierung
    const accomodationValidation = validateString(accomodation, "Unterkunft", 3, 100, true);
    if (!accomodationValidation.check)
      newErrors.push({ field: "accomodation", message: accomodationValidation.description });

    //Benötigte Technik Validierung
    const requiredEquipmentValidation = validateString(
      requiredEquipment,
      "Benötigte Technik",
      0,
      2500
    );
    if (!requiredEquipmentValidation.check)
      newErrors.push({
        field: "requiredEquipment",
        message: requiredEquipmentValidation.description,
      });

    //Mitgebrachte Technik Validierung
    const broughtEquipmentValidation = validateString(
      broughtEquipment,
      "Mitgebrachte Technik",
      0,
      2500
    );
    if (!broughtEquipmentValidation.check)
      newErrors.push({
        field: "broughtEquipment",
        message: broughtEquipmentValidation.description,
      });

    //Website Validierung
    const websiteValidation = validateString(website, "Website", 0, 100);
    if (!websiteValidation.check)
      newErrors.push({ field: "website", message: websiteValidation.description });

    //Instagram Validierung
    const instagramValidation = validateString(instagram, "Instagram", 0, 100);
    if (!instagramValidation.check)
      newErrors.push({ field: "instagram", message: instagramValidation.description });

    //Nachricht Validierung
    const messageValidation = validateString(message, "Nachricht", 0, 2500);
    if (!messageValidation.check)
      newErrors.push({ field: "message", message: messageValidation.description });

    //Bild
    if (!file) newErrors.push({ field: "image", message: "Bild ist ein Pflichtfeld" });

    //Datenschutzerklärung
    if (!privacyPolicy)
      newErrors.push({ field: "privacyPolicy", message: "Datenschutzerklärung zustimmen" });

    //Datenspeicherung
    if (!dataStorage)
      newErrors.push({ field: "dataStorage", message: "Datenspeicherung muss akzeptiert werden" });

    //Bildrechte
    if (!pictureRights)
      newErrors.push({ field: "pictureRights", message: "Bildrechte müssen bestätigt werden" });

    //Teilnahmebedingungen
    if (!showactConditions)
      newErrors.push({
        field: "showactConditions",
        message: "Teilnahmebedingungen müssen akzeptiert werden",
      });

    //Check if there are any errors
    if (newErrors.length > 0) {
      setErrors(newErrors);

      // Scroll to the first error
      const firstError = newErrors[0];
      if (refs[firstError.field]?.current) {
        refs[firstError.field].current.scrollIntoView({ behavior: "smooth", block: "center" });
        refs[firstError.field].current.focus();
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
    formData.append("name", name.trim());
    formData.append("lastName", lastName.trim());
    formData.append("email", email.trim().toLowerCase());
    formData.append("street", street.trim());
    formData.append("postalCode", postalCode.trim());
    formData.append("city", city.trim());
    formData.append("country", country.trim());
    formData.append("groupName", groupName.trim());
    formData.append("groupMembers", groupMembers);
    formData.append("description", description.trim());
    formData.append("timeSlots", timeSlots);
    formData.append("constructionTime", constructionTime);
    formData.append("performanceTime", performanceTime);
    formData.append("deconstructionTime", deconstructionTime);
    formData.append("accomodation", accomodation);
    formData.append("requiredEquipment", requiredEquipment.trim());
    formData.append("broughtEquipment", broughtEquipment.trim());
    formData.append("website", website.trim());
    formData.append("instagram", instagram.trim());
    formData.append("message", message.trim());
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("dataStorage", dataStorage);
    formData.append("pictureRights", pictureRights);
    formData.append("showactConditions", showactConditions);
    formData.append("file", file);
    if (file2 && Array.isArray(file2)) {
      file2.forEach((singleFile, index) => {
        formData.append(`file2[${index}]`, singleFile);
      });
    }

    try {
      const response = await fetch("/api/registrationAsShowact", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(
          "Deine Anmeldung war erfolgreich. Du erhälst in Kürze eine Bestätigung per E-Mail."
        );
        setName("");
        setLastName("");
        setEmail("");
        setConfirmEmail("");
        setStreet("");
        setPostalCode("");
        setCity("");
        setCountry("");
        setGroupName("");
        setGroupMembers(1);
        setDescription("");
        setTimeSlot1(false);
        setTimeSlot2(false);
        setTimeSlot3(false);
        setTimeSlot4(false);
        setConstructionTime("");
        setPerformanceTime("");
        setDeconstructionTime("");
        setAccomodation("");
        setRequiredEquipment("");
        setBroughtEquipment("");
        setWebsite("");
        setInstagram("");
        setMessage("");
        setPrivacyPolicy(false);
        setDataStorage(false);
        setPictureRights(false);
        setShowactConditions(false);
        setFile(null);
        setFile2(null);
        setPreviewUrl(null);
        setPreviewUrl2(null);
        setErrors([]);
      } else {
        setErrors([
          {
            field: "general",
            message: "Fehler beim Absenden der Anmeldung, Bitte versuche es später nochmal.",
          },
        ]);
      }
    } catch (error) {
      setErrors([
        {
          field: "general",
          message: "Fehler beim Absenden der Anmeldung, Bitte versuche es später nochmal.",
        },
      ]);
    }
    setLoading(false);
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    const maxFileSize = MAX_FILE_SIZE_MB * 1024 * 1024; // 1MB in Bytes

    if (file && file.size > maxFileSize) {
      setFileError(`Die Datei darf maximal ${MAX_FILE_SIZE_MB}MB groß sein.`);
      return;
    }
    setFileError("");
    setFile(file);

    if (isImageFile(file.name)) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
      setFile(null);
      setFileError("Bitte wähle ein gültiges Bild aus. (jpg, jpeg, png, webp)");
    }
  }

  return (
    <>
      <h1>Anmeldung als Showact</h1>
      <p>
        Sichert euch euren Platz auf der YumeKai 2025!
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
        <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutzt unser{" "}
        <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>. 
      </p>
      {!success && (
        <>
          <p>
            Felder mit <RequiredNote>*</RequiredNote> sind Pflichtfelder.
          </p>

          <StyledForm onSubmit={submit}>
            <h2>Persönliche Angaben</h2>
            <InputOptionInput
              title="Name"
              inputText={name}
              inputChange={(value) => setName(value)}
              inputRef={refs.name}
              isError={errors.some((error) => error.field === "name")}
              require
            />
            <InputOptionInput
              title="Nachname"
              inputText={lastName}
              inputChange={(value) => setLastName(value)}
              inputRef={refs.lastName}
              isError={errors.some((error) => error.field === "lastName")}
              require
            />
            <InputOptionInput
              title="E-Mail"
              inputText={email}
              inputChange={(value) => setEmail(value)}
              inputRef={refs.email}
              isError={errors.some((error) => error.field === "email")}
              require
            />
            <InputOptionInput
              title="E-Mail Bestätigen"
              inputText={confirmEmail}
              inputChange={setConfirmEmail}
              inputRef={refs.emailConfirm}
              isError={errors.some((error) => error.field === "confirmEmail")}
              require
            />

            <Spacer />
            <h2>Adresse</h2>

            <InputOptionInput
              title="Straße"
              inputText={street}
              inputChange={setStreet}
              inputRef={refs.street}
              isError={errors.some((error) => error.field === "street")}
              require
            />
            <InputOptionInput
              title="PLZ"
              inputText={postalCode}
              inputChange={setPostalCode}
              inputRef={refs.postalCode}
              isError={errors.some((error) => error.field === "postalCode")}
              require
            />
            <InputOptionInput
              title="Ort"
              inputText={city}
              inputChange={setCity}
              inputRef={refs.city}
              isError={errors.some((error) => error.field === "city")}
              require
            />
            <InputOptionSelect
              title="Land"
              options={EU_COUNTRIES}
              inputText={country}
              inputChange={(value) => setCountry(value)}
              inputRef={refs.country}
              isError={errors.some((error) => error.field === "country")}
              require
            />

            <Spacer />
            <h2>Gruppenangaben</h2>

            <InputOptionInput
              title="Gruppenname"
              inputText={groupName}
              inputChange={setGroupName}
              inputRef={refs.groupName}
              isError={errors.some((error) => error.field === "groupName")}
              require
            />
            <InputOptionInput
              title="Gruppenmitglieder"
              inputText={groupMembers}
              inputChange={setGroupMembers}
              inputRef={refs.groupMembers}
              isError={errors.some((error) => error.field === "groupMembers")}
              require
              type="number"
              min={1}
              max={25}
            />
            <InputOptionTextArea
              title="Beschreibung"
              inputText={description}
              inputChange={setDescription}
              inputRef={refs.description}
              isError={errors.some((error) => error.field === "description")}
              require
            />
            <p>
              Logo/Ankündigungsbild (max. 10MB, jpg, jpeg, png, webp) <RequiredNote>*</RequiredNote>
            </p>
            <FileUpload
              handleFileChange={handleFileChange}
              inputRef={refs.image}
              previewUrl={previewUrl}
              file={file}
              isError={errors.some((error) => error.field === "image")}
            />
            {fileError && <ErrorText style={{ textAlign: "center" }}>{fileError}</ErrorText>}

            <TimeslotsContainer $iserror={errors.some((error) => error.field === "timeSlots")}>
              <h3>Bevorzugter Tag/Uhrzeit (min. 1 Option wählen)</h3>
              <CheckBox
                title="timeSlot1"
                content="Samstag 11:00-14:00 Uhr"
                isChecked={timeSlot1}
                inputChange={(value) => setTimeSlot1(value)}
                inputRef={refs.timeSlots}
              />
              <CheckBox
                title="timeSlot2"
                content="Samstag 14:00-18:00 Uhr"
                isChecked={timeSlot2}
                inputChange={(value) => setTimeSlot2(value)}
              />
              <CheckBox
                title="timeSlot3"
                content="Sonntag 11:00-14:00 Uhr"
                isChecked={timeSlot3}
                inputChange={(value) => setTimeSlot3(value)}
              />
              <CheckBox
                title="timeSlot4"
                content="Sonntag 14:00-18:00 Uhr"
                isChecked={timeSlot4}
                inputChange={(value) => setTimeSlot4(value)}
              />
            </TimeslotsContainer>
            <InputOptionInput
              title="Aufbauzeit (in Minuten)"
              inputText={constructionTime}
              inputChange={setConstructionTime}
              inputRef={refs.constructionTime}
              isError={errors.some((error) => error.field === "constructionTime")}
              require
              type="number"
              min={1}
              max={60}
            />
            <InputOptionInput
              title="Aufführungszeit (in Minuten)"
              inputText={performanceTime}
              inputChange={setPerformanceTime}
              inputRef={refs.performanceTime}
              isError={errors.some((error) => error.field === "performanceTime")}
              require
              type="number"
              min={30}
              max={180}
            />
            <InputOptionInput
              title="Abbauzeit (in Minuten)"
              inputText={deconstructionTime}
              inputChange={setDeconstructionTime}
              inputRef={refs.deconstructionTime}
              isError={errors.some((error) => error.field === "deconstructionTime")}
              require
              type="number"
              min={1}
              max={60}
            />
            <p>
              Technischer Rider / Hospitality Rider / Lichtplan (max. 3 Dateien mit je.{" "}
              {MAX_FILE_SIZE_MB}MB, jpg, jpeg, png, webp, pdf)
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
              isError={errors.some((error) => error.field === "technicalRider") || fileError2}
              setFileError={setFileError2}
            />
            {fileError2 && <ErrorText style={{ textAlign: "center" }}>{fileError2}</ErrorText>}

            <InputOptionSelect
              title="Unterkunft"
              options={ACCOMODATION_OPTIONS}
              inputText={accomodation}
              inputChange={(value) => setAccomodation(value)}
              inputRef={refs.accomodation}
              isError={errors.some((error) => error.field === "accomodation")}
              require
            />
            <InputOptionTextArea
              title="Benötigte Technik"
              inputText={requiredEquipment}
              inputChange={setRequiredEquipment}
              inputRef={refs.requiredEquipment}
              isError={errors.some((error) => error.field === "requiredEquipment")}
            />
            <InputOptionTextArea
              title="Mitgebrachte Technik"
              inputText={broughtEquipment}
              inputChange={setBroughtEquipment}
              inputRef={refs.broughtEquipment}
              isError={errors.some((error) => error.field === "broughtEquipment")}
            />

            <Spacer />
            <h2>Allgemeines</h2>

            <InputOptionInput
              title="Website"
              inputText={website}
              inputChange={setWebsite}
              inputRef={refs.website}
              isError={errors.some((error) => error.field === "website")}
            />
            <InputOptionInput
              title="Instagram"
              inputText={instagram}
              inputChange={setInstagram}
              inputRef={refs.instagram}
              isError={errors.some((error) => error.field === "instagram")}
            />
            <InputOptionTextArea
              title="Nachricht"
              inputText={message}
              inputChange={setMessage}
              inputRef={refs.message}
              isError={errors.some((error) => error.field === "message")}
            />

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
              inputChange={(value) => setPrivacyPolicy(value)}
              inputRef={refs.privacyPolicy}
              isError={errors.some((error) => error.field === "privacyPolicy")}
              require
            />
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
              inputChange={(value) => setDataStorage(value)}
              inputRef={refs.dataStorage}
              isError={errors.some((error) => error.field === "dataStorage")}
              require
            />
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
              inputChange={(value) => setPictureRights(value)}
              inputRef={refs.pictureRights}
              isError={errors.some((error) => error.field === "pictureRights")}
              require
            />
            <CheckBox
              title="showactConditions"
              content={
                <p>
                  Ich habe die{" "}
                  <StyledLink href="/downloads/Infoblatt_Showacts_2025.pdf" target="_blank">
                    Teilnahmebedingungen
                  </StyledLink>{" "}
                  gelesen und akzeptiere diese.<RequiredNote>*</RequiredNote>
                </p>
              }
              isChecked={showactConditions}
              inputChange={(value) => setShowactConditions(value)}
              inputRef={refs.showactConditions}
              isError={errors.some((error) => error.field === "showactConditions")}
              require
            />

            {errors && (
              <ul>
                {errors.map((error, index) => (
                  <li key={index} style={{ color: "red" }}>
                    {error.message}
                  </li>
                ))}
              </ul>
            )}
            <StyledButton type="submit">Anmelden</StyledButton>
          </StyledForm>
        </>
      )}
      {success && <SuccessText>{success}</SuccessText>}
      {loading && (
        <>
          <ModalOverlay>
            <LoadingAnimation />
          </ModalOverlay>
        </>
      )}
    </>
  );
}
