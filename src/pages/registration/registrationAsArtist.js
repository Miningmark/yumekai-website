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
import RadioButton from "@/components/styled/RadioButton";
import CheckBox from "@/components/styled/CheckBox";
import FileUpload from "@/components/styled/FileUpload";
import LoadingAnimation from "@/components/styled/LoadingAnimation";

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

export default function RegistrationAsArtist() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [vendorName, setVendorName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [street, setStreet] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const [typeOfArt, setTypeOfArt] = useState("");
  const [standSize, setStandSize] = useState("");
  const [additionalExhibitorTicket, setAdditionalExhibitorTicket] = useState("");
  const [wlan, setWlan] = useState(false);
  const [programmBooklet, setProgrammBooklet] = useState("Nein");
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
  const [artistConditions, setArtistConditions] = useState(false);

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");
  const [fileError, setFileError] = useState("");
  const [loading, setLoading] = useState(false);

  const refs = {
    name: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    confirmEmail: useRef(null),
    vendorName: useRef(null),
    artistName: useRef(null),
    street: useRef(null),
    postalCode: useRef(null),
    city: useRef(null),
    country: useRef(null),
    typeOfArt: useRef(null),
    standSize: useRef(null),
    additionalExhibitorTicket: useRef(null),
    wlan: useRef(null),
    programmBooklet: useRef(null),
    descriptionOfStand: useRef(null),
    website: useRef(null),
    instagram: useRef(null),
    image: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
    licensedMusic: useRef(null),
    pictureRights: useRef(null),
    artistConditions: useRef(null),
  };

  // Kostenberechnung
  const standCosts = {
    "Ganzer Tisch": 90,
    "Halber Tisch": 50,
  };

  const programmBookletCost = {
    Nein: 0,
    "Ganze Seite": 85,
    "Halbe Seite": 45,
    "Viertel Seite": 30,
  };

  const ticketCost = 52;
  const wlanCost = 10;

  const selectedStandCost = standCosts[standSize] || 0;
  const totalTicketCost = additionalExhibitorTicket ? ticketCost : 0;
  const totalWlanCost = wlan ? wlanCost : 0;
  const totalProgrammBookletCost = programmBookletCost[programmBooklet] || 0;

  const totalCost = selectedStandCost + totalProgrammBookletCost + totalTicketCost + totalWlanCost;

  async function submit(event) {
    event.preventDefault();

    const newErrors = [];
    setErrors([]);
    setSuccess("");

    const validateField = (value, fieldName, title, min, max, required = false) => {
      if (required && !value.trim())
        newErrors.push({ field: fieldName, message: `${title} ist ein Pflichtfeld` });
      if (value && value.length < min)
        newErrors.push({ field: fieldName, message: `${title} ist zu kurz` });
      if (value.length > max) newErrors.push({ field: fieldName, message: `${title} ist zu lang` });
      return null;
    };

    validateField(name, "name", "Vorname", 3, 50, true);
    validateField(lastName, "lastName", "Nachname", 3, 50, true);
    if (!email.trim()) newErrors.push({ field: "email", message: "E-Mail ist ein Pflichtfeld" });
    if (!email.includes("@"))
      newErrors.push({ field: "email", message: "E-Mail-Adresse ist ungültig" });
    if (email.length > 100)
      newErrors.push({
        field: "email",
        message: "E-Mail-Adresse darf maximal 100 Zeichen lang sein",
      });
    if (confirmEmail.trim() !== email.trim())
      newErrors.push({ field: "confirmEmail", message: "E-Mail stimmt nicht überein" });
    validateField(vendorName, "vendorName", "Firmenname", 3, 50, false);
    validateField(artistName, "artistName", "Künstlername", 3, 50, true);
    validateField(street, "street", "Straße", 3, 50, true);
    validateField(postalCode, "postalCode", "PLZ", 5, 10, true);
    validateField(city, "city", "Ort", 3, 50, true);
    validateField(country, "country", "Land", 3, 50, true);
    validateField(typeOfArt, "typeOfArt", "Art der Kunst", 3, 2500, true);
    validateField(
      descriptionOfStand,
      "descriptionOfStand",
      "Beschreibung des Standes",
      10,
      2500,
      true
    );
    validateField(website, "website", "Website", 0, 100, false);
    validateField(instagram, "instagram", "Instagram", 0, 100, false);
    validateField(message, "message", "Nachricht", 0, 2500, false);
    if (!standSize)
      newErrors.push({ field: "standSize", message: "Standgröße ist ein Pflichtfeld" });
    if (!programmBooklet)
      newErrors.push({ field: "programmBooklet", message: "Programmheft ist ein Pflichtfeld" });

    //Bild
    if (!file) newErrors.push({ field: "image", message: "Bild ist ein Pflichtfeld" });

    //Datenschutzerklärung
    if (!privacyPolicy)
      newErrors.push({ field: "privacyPolicy", message: "Datenschutzerklärung zustimmen" });

    //Datenspeicherung
    if (!dataStorage)
      newErrors.push({ field: "dataStorage", message: "Datenspeicherung muss akzeptiert werden" });

    //GEMA
    if (!licensedMusic)
      newErrors.push({
        field: "licensedMusic",
        message: "GEMA-Lizenzierte Musik ist nicht erlaubt",
      });

    //Bildrechte
    if (!pictureRights)
      newErrors.push({ field: "pictureRights", message: "Bildrechte müssen bestätigt werden" });

    //Teilnahmebedingungen
    if (!artistConditions)
      newErrors.push({
        field: "artistConditions",
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

    const formData = new FormData();
    formData.append("name", name);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("vendorName", vendorName);
    formData.append("artistName", artistName);
    formData.append("street", street);
    formData.append("postalCode", postalCode);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("typeOfArt", typeOfArt);
    formData.append("descriptionOfStand", descriptionOfStand);
    formData.append("standSize", standSize);
    formData.append("additionalExhibitorTicket", additionalExhibitorTicket);
    formData.append("wlan", wlan);
    formData.append("programmBooklet", programmBooklet);
    formData.append("website", website);
    formData.append("instagram", instagram);
    formData.append("message", message);
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("dataStorage", dataStorage);
    formData.append("licensedMusic", licensedMusic);
    formData.append("pictureRights", pictureRights);
    formData.append("artistConditions", artistConditions);
    formData.append("file", file);

    try {
      const response = await fetch("/api/registrationAsArtist", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setSuccess(
          "Deine Anmeldung war erfolgreich. Du erhälst in Kürze eine Bestätigung per E-Mail."
        );
        setErrors([]);
        setName("");
        setLastName("");
        setEmail("");
        setConfirmEmail("");
        setVendorName("");
        setArtistName("");
        setStreet("");
        setPostalCode("");
        setCity("");
        setCountry("");
        setTypeOfArt("");
        setStandSize("");
        setAdditionalExhibitorTicket("");
        setWlan(false);
        setProgrammBooklet("Nein");
        setDescriptionOfStand("");
        setWebsite("");
        setInstagram("");
        setMessage("");
        setPrivacyPolicy(false);
        setDataStorage(false);
        setLicensedMusic(false);
        setPictureRights(false);
        setArtistConditions(false);
        setFile(null);
        setPreviewUrl(null);
      } else {
        const data = await response.json();
        setErrors([
          {
            field: "general",
            message: "Fehler beim Absenden der Anmeldung, Bitte versuche es später nochmal.",
          },
        ]);
        console.error("Fehler beim Einfügen der Daten:", result.error);
      }
    } catch (error) {
      setErrors([
        {
          field: "general",
          message: "Fehler beim Absenden der Anmeldung, Bitte versuche es später nochmal.",
        },
      ]);
      console.error("Fehler beim Einfügen der Daten:", error);
    }
    setLoading(false);
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
      <h1>Anmeldung als Künstler</h1>
      <p>
        Sichert euch euren Platz auf der YumeKai 2025!
        <br />
        <br />
        Bitte beachtet die{" "}
        <StyledLink href="/downloads/Teilnahmebedingungen_Kuenstler_2025.pdf" target="_blank">
          Teilnahme- und Auswahlbedingungen für Künstler
        </StyledLink>
        .
        <br />
        <br />
        Bei Fragen oder eventuellen Unklarheiten wendest du dich per E-Mail an:{" "}
        <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutzt unser{" "}
        <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>. 
      </p>
      {!success && (
        <>
          {" "}
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
            />
            <InputOptionInput
              title="Künstlername"
              inputText={artistName}
              inputChange={(value) => setArtistName(value)}
              inputRef={refs.artistName}
              isError={errors.some((error) => error.field === "artistName")}
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
              title="Art der Kunst"
              inputText={typeOfArt}
              inputChange={(value) => setTypeOfArt(value)}
              inputRef={refs.typeOfArt}
              isError={errors.some((error) => error.field === "typeOfArt")}
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
              names={["Ganzer Tisch (90€)", "Halber Tisch (50€)"]}
              options={["Ganzer Tisch", "Halber Tisch"]}
              selectedOption={standSize}
              inputChange={(value) => setStandSize(value)}
              inputRef={refs.gender}
              isError={errors.some((error) => error.field === "standSize")}
              require
            />
            <CheckBox
              title="Zusätzliches Ausstellerticket (42€)"
              inputText={additionalExhibitorTicket}
              inputChange={(value) => setAdditionalExhibitorTicket(value)}
              inputRef={refs.additionalExhibitorTicket}
              isError={errors.some((error) => error.field === "additionalExhibitorTicket")}
            />
            <CheckBox
              title="wlan"
              content="W-lan für ein EC-Karten-/Kreditkartengerät - (10€)"
              isChecked={wlan}
              inputChange={(value) => setWlan(value)}
              inputRef={refs.wlan}
              isError={errors.some((error) => error.field === "wlan")}
            />
            <p>Der Zugang wird von einem YumeKai-Helfer auf dem ausgewählten Gerät eingerichtet.</p>
            <RadioButton
              title={
                <>
                  <span>
                    Programmheft{" "}
                    <StyledLink href="/downloads/Programmheft-Infoblatt.pdf" target="_blanck">
                      Infoblatt
                    </StyledLink>{" "}
                  </span>
                </>
              }
              names={["Nein", "Viertel Seite (30€)", "Halbe Seite (45€)", "Ganze Seite (85€)"]}
              options={["Nein", "Viertel Seite", "Halbe Seite", "Ganze Seite"]}
              selectedOption={programmBooklet}
              inputChange={(value) => setProgrammBooklet(value)}
              inputRef={refs.programmBooklet}
              isError={errors.some((error) => error.field === "programmBooklet")}
              require
            />

            <h3>Gesamtkosten</h3>
            <ul>
              <li>
                Standgröße: {standSize} ({selectedStandCost.toFixed(2)}€)
              </li>
              {additionalExhibitorTicket && <li>Zusätzliche Ausstellertickets: 52,00€</li>}
              {wlan && <li>W-Lan: 10,00€</li>}
              {programmBooklet !== "Nein" && (
                <li>
                  Programmheft: {programmBooklet} ({totalProgrammBookletCost.toFixed(2)}€)
                </li>
              )}
            </ul>

            <h4>Gesamtbetrag: {totalCost.toFixed(2)}€ zzgl.MWST</h4>

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
              title="licensedMusic"
              content={
                <p>
                  Ich habe zur Kenntnis genommen, dass GEMA-Lizenzierte Tonwiedergabe nicht erlaubt
                  ist.<RequiredNote>*</RequiredNote>
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
              title="artistConditions"
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
              isChecked={artistConditions}
              inputChange={(value) => setArtistConditions(value)}
              inputRef={refs.artistConditions}
              isError={errors.some((error) => error.field === "artistConditions")}
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
