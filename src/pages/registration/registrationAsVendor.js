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

export default function RegistrationAsVendor() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [typeOfAssortment, setTypeOfAssortment] = useState("");
  const [standSize, setStandSize] = useState("");
  const [additionalExhibitorTicket, setAdditionalExhibitorTicket] = useState("0");
  const [descriptionOfStand, setDescriptionOfStand] = useState("");
  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [message, setMessage] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [dataStorage, setDataStorage] = useState(false);
  const [licensedMusic, setLicensedMusic] = useState(false);
  const [pictureRights, setPictureRights] = useState(false);
  const [vendorConditions, setVendorConditions] = useState(false);

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");
  const [fileError, setFileError] = useState("");

  const refs = {
    name: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    confirmEmail: useRef(null),
    vendorName: useRef(null),
    street: useRef(null),
    postalCode: useRef(null),
    city: useRef(null),
    country: useRef(null),
    typeOfAssortment: useRef(null),
    standSize: useRef(null),
    additionalExhibitorTicket: useRef(null),
    descriptionOfStand: useRef(null),
    website: useRef(null),
    instagram: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
    licensedMusic: useRef(null),
    pictureRights: useRef(null),
    vendorConditions: useRef(null),
  };

  async function submit(event) {
    event.preventDefault();
    console.log("Submit");

    const newErrors = [];
    setErrors([]);
    setSuccess("");
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
      <h1>Anmeldung als Händler</h1>
      <p>
        Sichert euch euren Platz auf der YumeKai 2025!
        <br />
        <br />
        Bitte beachtet die Teilnahme- und Auswahlbedingungen für Händler.
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
        <InputOptionInput
          title="Firmenname"
          inputText={vendorName}
          inputChange={(value) => setVendorName(value)}
          inputRef={refs.vendorName}
          isError={errors.some((error) => error.field === "vendorName")}
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
        <h2>Stand</h2>

        <InputOptionTextArea
          title="Warensortiment"
          inputText={typeOfAssortment}
          inputChange={(value) => setTypeOfAssortment(value)}
          inputRef={refs.typeOfAssortment}
          isError={errors.some((error) => error.field === "typeOfAssortment")}
          require
        />
        <InputOptionTextArea
          title="Beschreibung des Standes"
          inputText={descriptionOfStand}
          inputChange={(value) => setDescriptionOfStand(value)}
          inputRef={refs.descriptionOfStand}
          isError={errors.some((error) => error.field === "descriptionOfStand")}
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

        <RadioButton
          title="Standgröße"
          options={["2m x 2m", "2m x 3m", "2m x 4m", "2m x 5m"]}
          selectedOption={standSize}
          inputChange={(value) => setStandSize(value)}
          inputRef={refs.gender}
          isError={errors.some((error) => error.field === "standSize")}
          require
        />
        <InputOptionInput
          type="number"
          title="Zusätzliches Ausstellerticket"
          inputText={additionalExhibitorTicket}
          inputChange={(value) => setAdditionalExhibitorTicket(value)}
          inputRef={refs.additionalExhibitorTicket}
          isError={errors.some((error) => error.field === "additionalExhibitorTicket")}
          min={0}
          max={4}
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
          title="licensedMusic"
          content={
            <p>
              Ich habe zur Kenntnis genommen, dass GEMA-Lizenzierte Bild- oder Tonwiedergabe nicht
              erlaubt ist.<RequiredNote>*</RequiredNote>
            </p>
          }
          isChecked={licensedMusic}
          inputChange={(value) => setLicensedMusic(value)}
          inputRef={refs.licensedMusic}
          isError={errors.some((error) => error.field === "licensedMusic")}
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
          title="vendorConditions"
          content={
            <p>
              Ich habe die{" "}
              <StyledLink href="" target="_blank">
                Teilnahmebedingungen
              </StyledLink>{" "}
              gelesen und akzeptiere diese.<RequiredNote>*</RequiredNote>
            </p>
          }
          isChecked={vendorConditions}
          inputChange={(value) => setVendorConditions(value)}
          inputRef={refs.vendorConditions}
          isError={errors.some((error) => error.field === "vendorConditions")}
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
