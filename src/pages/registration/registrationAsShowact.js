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
} from "@/components/styledComponents";
import { RequiredNote } from "@/components/styledInputComponents";
import RadioButton from "@/components/styled/RadioButton";
import CheckBox from "@/components/styled/CheckBox";
import FileUpload from "@/components/styled/FileUpload";

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

const ACCEPTED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

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

  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [message, setMessage] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [dataStorage, setDataStorage] = useState(false);
  const [pictureRights, setPictureRights] = useState(false);
  const [showactConditions, setShowactConditions] = useState(false);

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");
  const [fileError, setFileError] = useState("");

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
    timeSlot1: useRef(null),
    timeSlot2: useRef(null),
    timeSlot3: useRef(null),
    timeSlot4: useRef(null),
    constructionTime: useRef(null),
    performanceTime: useRef(null),
    deconstructionTime: useRef(null),
    website: useRef(null),
    instagram: useRef(null),
    file: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
    licensedMusic: useRef(null),
    pictureRights: useRef(null),
    showactConditions: useRef(null),
  };

  async function submit(event) {
    event.preventDefault();
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    const maxFileSize = 10 * 1024 * 1024; // 10MB in Bytes

    if (file && file.size > maxFileSize) {
      setFileError("Die Datei darf maximal 10MB groß sein.");
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
        Bitte beachtet die Teilnahme- und Auswahlbedingungen für Showacts.
        <br />
        <br />
        Bei Fragen oder eventuellen Unklarheiten wendest du dich per E-Mail an:{" "}
        <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutzt unser{" "}
        <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>. 
      </p>

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

        <h3>Bevorzugter Tag/Uhrzeit</h3>
        <CheckBox
          title="timeSlot1"
          content="Samstag 11:00-14:00 Uhr"
          isChecked={timeSlot1}
          inputChange={(value) => setTimeSlot1(value)}
          inputRef={refs.timeSlot1}
          isError={errors.some((error) => error.field === "timeSlot1")}
        />
        <CheckBox
          title="timeSlot2"
          content="Samstag 15:00-18:00 Uhr"
          isChecked={timeSlot2}
          inputChange={(value) => setTimeSlot2(value)}
          inputRef={refs.timeSlot2}
          isError={errors.some((error) => error.field === "timeSlot2")}
        />
        <CheckBox
          title="timeSlot3"
          content="Sonntag 11:00-14:00 Uhr"
          isChecked={timeSlot3}
          inputChange={(value) => setTimeSlot3(value)}
          inputRef={refs.timeSlot3}
          isError={errors.some((error) => error.field === "timeSlot3")}
        />
        <CheckBox
          title="timeSlot4"
          content="Sonntag 14:00-18:00 Uhr"
          isChecked={timeSlot4}
          inputChange={(value) => setTimeSlot4(value)}
          inputRef={refs.timeSlot4}
          isError={errors.some((error) => error.field === "timeSlot4")}
        />
        <InputOptionInput
          title="Aufbauzeit (in Minuten)"
          inputText={constructionTime}
          inputChange={setConstructionTime}
          inputRef={refs.constructionTime}
          isError={errors.some((error) => error.field === "constructionTime")}
          require
          type="number"
          min={1}
          max={180}
        />
        <InputOptionInput
          title="Aufführungszeit (in Minuten)"
          inputText={performanceTime}
          inputChange={setPerformanceTime}
          inputRef={refs.performanceTime}
          isError={errors.some((error) => error.field === "performanceTime")}
          require
          type="number"
          min={1}
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
          max={180}
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
              gelesen, verstanden und akzeptiere diese. Ich habe verstanden, dass ich die Zustimmung
              zur Datenschutzerklärung jederzeit widerrufen kann. Über den Widerruf habe ich die
              Passage in der Datenschutzerklärung gelesen und verstanden.
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
              elektronisch gespeichert werden und zum Zweck der Durchführung der Veranstaltung an
              die zuständigen Bereiche weitergeleitet werden dürfen.<RequiredNote>*</RequiredNote>
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
              Hiermit bestätige ich, dass die Bildrechte der hochgeladenen Bilder bei mir liegen.
              Ich bin damit einverstanden und genehmige der Dreamfly-Events UG das hier eingereichte
              Bildmaterial zu ihren Zwecken sowohl digital als auch in gedruckter Form (z.B.
              Werbung, Social Media, Programmheft, Webseite, etc.) nutzen zu dürfen. Alternativ -
              sofern kein Bildmaterial hochgeladen worden ist - dass kein Bildmaterial eingereicht
              wurde.<RequiredNote>*</RequiredNote>
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
              <StyledLink href="" target="_blank">
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
        {success && <SuccessText>{success}</SuccessText>}
        <StyledButton type="submit">Anmelden</StyledButton>
      </StyledForm>
    </>
  );
}
