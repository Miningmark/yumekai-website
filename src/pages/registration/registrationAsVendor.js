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
import validateString from "@/util/inputCheck";

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
  const [additionalExhibitorTicket, setAdditionalExhibitorTicket] = useState(0);
  const [strom, setStrom] = useState(false);
  const [wlan, setWlan] = useState(false);
  const [programmBooklet, setProgrammBooklet] = useState("Nein");
  const [table, setTable] = useState("");
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
  const [loading, setLoading] = useState(false);

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
    strom: useRef(null),
    wlan: useRef(null),
    programmBooklet: useRef(null),
    table: useRef(null),
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

  const standSizes = {
    "2x2": "2m x 2m",
    "2x3": "2m x 3m",
    "2x4": "2m x 4m",
    "2x5": "2m x 5m",
    "2x6": "2m x 6m",
    "2x7": "2m x 7m",
    individuell: 0,
  };
  const selectedStandSize = standSizes[standSize] || "--";

  // Kostenberechnung
  const standCosts = {
    "2x2": 200,
    "2x3": 300,
    "2x4": 400,
    "2x5": 500,
    "2x6": 600,
    "2x7": 700,
    individuell: 0,
  };

  const programmBookletCost = {
    Nein: 0,
    "Ganze Seite": 85,
    "Halbe Seite": 45,
    "Viertel Seite": 30,
  };

  const ticketCost = 42;
  const stromCost = 30;
  const wlanCost = 10;

  const selectedStandCost = standCosts[standSize] || 0;
  const totalTicketCost = additionalExhibitorTicket * ticketCost;
  const totalStromCost = strom ? stromCost : 0;
  const totalWlanCost = wlan ? wlanCost : 0;
  const totalProgrammBookletCost = programmBookletCost[programmBooklet] || 0;

  const totalCost =
    selectedStandCost + totalProgrammBookletCost + totalTicketCost + totalStromCost + totalWlanCost;

  async function submit(event) {
    event.preventDefault();
    console.log("Submit");

    const newErrors = [];
    setErrors([]);
    setSuccess("");

    // Validierungslogik mit validateString
    // Name Validierung
    const nameValidation = validateString(name, "Vorname", 2, 50, true);
    if (!nameValidation.check)
      newErrors.push({ field: "name", message: nameValidation.description });

    // Nachname Validierung
    if (lastName) {
      const lastNameValidation = validateString(lastName, "Nachname", 2, 50, true);
      if (!lastNameValidation.check)
        newErrors.push({ field: "lastName", message: lastNameValidation.description });
    }

    // Email Validierung
    const emailValidation = validateString(email, "E-Mail", 2, 100, true, true);
    if (!emailValidation.check)
      newErrors.push({ field: "email", message: emailValidation.description });

    //Firmenname Validierung
    const vendorNameValidation = validateString(vendorName, "Firmenname", 2, 50, true);
    if (!vendorNameValidation.check)
      newErrors.push({ field: "vendorName", message: vendorNameValidation.description });

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

    //Produktsortiment Validierung
    const typeOfAssortmentValidation = validateString(
      typeOfAssortment,
      "Produktsortiment",
      2,
      2500,
      true
    );
    if (!typeOfAssortmentValidation.check)
      newErrors.push({
        field: "typeOfAssortment",
        message: typeOfAssortmentValidation.description,
      });

    //Beschreibung des Standes Validierung
    const descriptionOfStandValidation = validateString(
      descriptionOfStand,
      "Beschreibung des Standes",
      10,
      2500,
      true
    );
    if (!descriptionOfStandValidation.check)
      newErrors.push({
        field: "descriptionOfStand",
        message: descriptionOfStandValidation.description,
      });

    //Standgröße Validierung
    const standSizeValidation = validateString(standSize, "Standgröße", 2, 50, true);
    if (!standSizeValidation.check)
      newErrors.push({ field: "standSize", message: standSizeValidation.description });

    //Zusätzliche Ausstellertickets Validierung
    if (additionalExhibitorTicket < 0)
      newErrors.push({
        field: "additionalExhibitorTicket",
        message: "Ungültige Anzahl an zusätzlichen Ausstellertickets (min. 0)",
      });
    if (additionalExhibitorTicket > 4)
      newErrors.push({
        field: "additionalExhibitorTicket",
        message: "Ungültige Anzahl an zusätzlichen Ausstellertickets (max. 4)",
      });

    //Tische Validierung
    const tableValidation = validateString(table, "Tische", 0, 10, true);
    if (!tableValidation.check)
      newErrors.push({ field: "table", message: tableValidation.description });

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
    if (!vendorConditions)
      newErrors.push({
        field: "vendorConditions",
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
    formData.append("name", name.trim());
    formData.append("lastName", lastName.trim());
    formData.append("email", email.trim().toLowerCase());
    formData.append("vendorName", vendorName.trim());
    formData.append("street", street.trim());
    formData.append("postalCode", postalCode.trim());
    formData.append("city", city.trim());
    formData.append("country", country.trim());
    formData.append("typeOfAssortment", typeOfAssortment.trim());
    formData.append("descriptionOfStand", descriptionOfStand.trim());
    formData.append("standSize", standSize);
    formData.append("additionalExhibitorTicket", additionalExhibitorTicket);
    formData.append("strom", strom);
    formData.append("wlan", wlan);
    formData.append("programmBooklet", programmBooklet);
    formData.append("table", table);
    formData.append("website", website.trim());
    formData.append("instagram", instagram.trim());
    formData.append("message", message.trim());
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("dataStorage", dataStorage);
    formData.append("licensedMusic", licensedMusic);
    formData.append("pictureRights", pictureRights);
    formData.append("vendorConditions", vendorConditions);
    formData.append("file", file);

    try {
      const response = await fetch("/api/registrationAsVendor", {
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
        setStreet("");
        setPostalCode("");
        setCity("");
        setCountry("");
        setTypeOfAssortment("");
        setStandSize("");
        setAdditionalExhibitorTicket(0);
        setStrom(false);
        setWlan(false);
        setProgrammBooklet("Nein");
        setTable("");
        setDescriptionOfStand("");
        setWebsite("");
        setInstagram("");
        setMessage("");
        setPrivacyPolicy(false);
        setDataStorage(false);
        setLicensedMusic(false);
        setPictureRights(false);
        setVendorConditions(false);
        setFile(null);
        setPreviewUrl(null);
      } else {
        const result = await response.json();
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
      <h1>Anmeldung als Händler</h1>
      <p>
        Sichert euch euren Platz auf der YumeKai 2025!
        <br />
        <br />
        Bitte beachtet die{" "}
        <StyledLink href="/downloads/Teilnahmebedingungen_Haendler_2025.pdf" target="_blank">
          Teilnahme- und Auswahlbedingungen für Händler
        </StyledLink>
        .
        <br />
        <br />
        Bei Fragen oder eventuellen Unklarheiten kannst du dich gerne per E-Mail an:{" "}
        <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutzt unser{" "}
        <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>. 
      </p>

      
      <h2>Die Anmeldung als Händler ist momentan geschlossen.</h2>

      {/* 
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
              title="Standgröße (50€ je m²)"
              names={[
                "2m x 2m",
                "2m x 3m",
                "2m x 4m",
                "2m x 5m",
                "2m x 6m",
                "2m x 7m",
                "Individuell (Preis auf Anfrage)",
              ]}
              options={["2x2", "2x3", "2x4", "2x5", "2x6", "2x7", "individuell"]}
              selectedOption={standSize}
              inputChange={(value) => setStandSize(value)}
              inputRef={refs.gender}
              isError={errors.some((error) => error.field === "standSize")}
              require
            />
            <InputOptionInput
              type="number"
              title="Zusätzliches Ausstellerticket (je 42€)"
              inputText={additionalExhibitorTicket}
              inputChange={(value) => setAdditionalExhibitorTicket(value)}
              inputRef={refs.additionalExhibitorTicket}
              isError={errors.some((error) => error.field === "additionalExhibitorTicket")}
              min={0}
              max={4}
            />
            <CheckBox
              title="strom"
              content="Strom - (30€)"
              isChecked={strom}
              inputChange={(value) => setStrom(value)}
              inputRef={refs.strom}
              isError={errors.some((error) => error.field === "strom")}
            />
            <CheckBox
              title="wlan"
              content="W-lan für ein EC-Karten-/Kreditkartengerät - (10€)"
              isChecked={wlan}
              inputChange={(value) => setWlan(value)}
              inputRef={refs.wlan}
              isError={errors.some((error) => error.field === "wlan")}
            />
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
            <p>Der Zugang wird von einem YumeKai-Helfer auf dem ausgewählten Gerät eingerichtet.</p>

            <RadioButton
              title="Tische - (inklusive)"
              names={["Ja ", "Nein"]}
              options={["Ja", "Nein"]}
              selectedOption={table}
              inputChange={(value) => setTable(value)}
              inputRef={refs.table}
              isError={errors.some((error) => error.field === "table")}
              require
            />

            <h3>Gesamtkosten</h3>
            <ul>
              <li>
                Standgröße: {selectedStandSize} (
                {standSize !== "individuell"
                  ? selectedStandCost.toFixed(2) + "€"
                  : "Preis auf Anfrage"}
                )
              </li>
              {additionalExhibitorTicket > 0 && (
                <li>
                  Zusätzliche Ausstellertickets: {additionalExhibitorTicket} x 42,00€ ={" "}
                  {totalTicketCost.toFixed(2)}€
                </li>
              )}
              {strom && <li>Strom: 30,00€</li>}
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
              title="vendorConditions"
              content={
                <p>
                  Ich habe die{" "}
                  <StyledLink
                    href="/downloads/Teilnahmebedingungen_Haendler_2025.pdf"
                    target="_blank"
                  >
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

      */}
    </>
  );
}
