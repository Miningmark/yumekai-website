import styled from "styled-components";
import { useEffect, useState, useRef, use } from "react";

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

import {
  EVENT_ID,
  TICKET_COST,
  POWER_COST,
  WLAN_COST,
  COUNTRIES,
  LOCATION_OPTIONS,
  PROGRAMM_BOOKLET_OPTIONS,
  VENDOR_STANDSIZE_OPTIONS,
} from "@/util/registration_options";

const ACCEPTED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

const isImageFile = (fileName) => {
  return ACCEPTED_IMAGE_EXTENSIONS.some((ext) => fileName.toLowerCase().endsWith(ext));
};

export default function RegistrationAsVendor() {
  const [eventId, setEventId] = useState(EVENT_ID); //TODO: Event ID anpassen

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
  const [standSize, setStandSize] = useState("2x2"); //ENUM: 2x2, 2x3, 2x4, 2x5, 2x6, 2x7, INDIVIDUAL
  const [location, setLocation] = useState("STADTHALLE"); //ENUM: STADTHALLE, KOLBEHAUS, EGAL
  const [additionalExhibitorTicket, setAdditionalExhibitorTicket] = useState(0);
  const [power, setPower] = useState(false);
  const [wlan, setWlan] = useState(false);
  const [programmBooklet, setProgrammBooklet] = useState("NO"); //ENUM: NO, QUATER_SITE, HALF_SITE, FULL_SITE
  const [table, setTable] = useState("");
  const [announcement_text, setAnnouncement_text] = useState("");
  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [message, setMessage] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [dataStorage, setDataStorage] = useState(false);
  const [licensedMusic, setLicensedMusic] = useState(false);
  const [pictureRights, setPictureRights] = useState(false);
  const [conditions, setConditions] = useState(false);

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
    location: useRef(null),
    additionalExhibitorTicket: useRef(null),
    power: useRef(null),
    wlan: useRef(null),
    programmBooklet: useRef(null),
    table: useRef(null),
    announcement_text: useRef(null),
    website: useRef(null),
    instagram: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
    licensedMusic: useRef(null),
    pictureRights: useRef(null),
    vendorConditions: useRef(null),
  };

  const selectedStandCost =
    VENDOR_STANDSIZE_OPTIONS.find((option) => option.value === standSize).price *
      LOCATION_OPTIONS.find((option) => option.value === location).vendor || 0;
  const totalTicketCost = additionalExhibitorTicket * TICKET_COST;
  const totalStromCost = power ? POWER_COST : 0;
  const totalWlanCost = wlan ? WLAN_COST : 0;
  const totalProgrammBookletCost =
    PROGRAMM_BOOKLET_OPTIONS.find((option) => option.value === programmBooklet).price || 0;

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
    const nameValidation = validateString(name, "Vorname", 2, 100, true);
    if (!nameValidation.check)
      newErrors.push({ field: "name", message: nameValidation.description });

    // Nachname Validierung
    if (lastName) {
      const lastNameValidation = validateString(lastName, "Nachname", 2, 100, true);
      if (!lastNameValidation.check)
        newErrors.push({ field: "lastName", message: lastNameValidation.description });
    }

    // Email Validierung
    const emailValidation = validateString(email, "E-Mail", 2, 100, true, true);
    if (!emailValidation.check)
      newErrors.push({ field: "email", message: emailValidation.description });

    //Firmenname Validierung
    const vendorNameValidation = validateString(vendorName, "Firmenname", 2, 100, true);
    if (!vendorNameValidation.check)
      newErrors.push({ field: "vendorName", message: vendorNameValidation.description });

    //Straße Validierung
    const streetValidation = validateString(street, "Straße", 2, 100, true);
    if (!streetValidation.check)
      newErrors.push({ field: "street", message: streetValidation.description });

    //PLZ Validierung
    const postalCodeValidation = validateString(postalCode, "PLZ", 2, 10, true);
    if (!postalCodeValidation.check)
      newErrors.push({ field: "postalCode", message: postalCodeValidation.description });

    //Ort Validierung
    const cityValidation = validateString(city, "Ort", 2, 100, true);
    if (!cityValidation.check)
      newErrors.push({ field: "city", message: cityValidation.description });

    //Land Validierung
    const countryValidation = validateString(country, "Land", 2, 100, true);
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

    //Ankündigungstext des Standes Validierung
    const announcement_textValidation = validateString(
      announcement_text,
      "Ankündigungstext",
      10,
      2500,
      true
    );
    if (!announcement_textValidation.check)
      newErrors.push({
        field: "announcement_text",
        message: announcement_textValidation.description,
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
    if (!conditions)
      newErrors.push({
        field: "conditions",
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
    formData.append("eventId", eventId);
    formData.append("firstName", name.trim());
    formData.append("lastName", lastName.trim());
    formData.append("email", email.trim().toLowerCase());
    formData.append("vendorName", vendorName.trim());
    formData.append("street", street.trim());
    formData.append("postalCode", postalCode.trim());
    formData.append("city", city.trim());
    formData.append("country", country.trim());
    formData.append("typeOfAssortment", typeOfAssortment.trim());
    formData.append("announcementText", announcement_text.trim());
    formData.append("standSize", standSize);
    formData.append("location", location);
    formData.append("additionalExhibitorTicket", additionalExhibitorTicket);
    formData.append("power", power);
    formData.append("wlan", wlan);
    formData.append("programmBooklet", programmBooklet);
    formData.append("table", table === "Ja" ? true : false);
    formData.append("website", website.trim());
    formData.append("instagram", instagram.trim());
    formData.append("message", message.trim());
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("dataStoragePolicy", dataStorage);
    formData.append("licensedMusicPolicy", licensedMusic);
    formData.append("pictureRightsPolicy", pictureRights);
    formData.append("conditionsPolicy", conditions);
    formData.append("file", file);

    try {
      const response = await fetch(
        "https://node.miningmark.de/api/v1/event/application/createVendor",
        {
          method: "POST",
          body: {
            eventId: eventId,
            firstName: name.trim(),
            lastName: lastName.trim(),
            email: email.trim().toLowerCase(),
            vendorName: vendorName.trim(),
            street: street.trim(),
            postalCode: postalCode.trim(),
            city: city.trim(),
            country: country.trim(),
            typeOfAssortment: typeOfAssortment.trim(),
            announcementText: announcement_text.trim(),
            standSize: standSize,
            location: location,
            additionalExhibitorTicket: additionalExhibitorTicket,
            power: power,
            wlan: wlan,
            programmBooklet: programmBooklet,
            table: table === "Ja" ? true : false,
            website: website.trim(),
            instagram: instagram.trim(),
            message: message.trim(),
            privacyPolicy: privacyPolicy,
            dataStoragePolicy: dataStorage,
            licensedMusicPolicy: licensedMusic,
            pictureRightsPolicy: pictureRights,
            conditionsPolicy: conditions,
          },
        }
      );
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
        setLocation("STADTHALLE");
        setAdditionalExhibitorTicket(0);
        setPower(false);
        setWlan(false);
        setProgrammBooklet("Nein");
        setTable("");
        setAnnouncement_text("");
        setWebsite("");
        setInstagram("");
        setMessage("");
        setPrivacyPolicy(false);
        setDataStorage(false);
        setLicensedMusic(false);
        setPictureRights(false);
        setConditions(false);
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
    const maxFileSize = 5 * 1024 * 1024; // 5MB in Bytes

    if (file && file.size > maxFileSize) {
      setFileError("Die Datei darf maximal 5MB groß sein.");
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
              options={COUNTRIES}
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
              title="Ankündigungstext"
              inputText={announcement_text}
              inputChange={(value) => setAnnouncement_text(value)}
              inputRef={refs.announcement_text}
              isError={errors.some((error) => error.field === "announcement_text")}
              require
            />
            <p>
              Logo/Ankündigungsbild (max. 5MB, jpg, jpeg, png, webp) <RequiredNote>*</RequiredNote>
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
              title="Stand Lage"
              names={LOCATION_OPTIONS.map((option) => option.label)}
              options={LOCATION_OPTIONS.map((option) => option.value)}
              selectedOption={location}
              inputChange={(value) => setLocation(value)}
              inputRef={refs.location}
              isError={errors.some((error) => error.field === "location")}
              require
            />

            <RadioButton
              title={`Standgröße (${
                LOCATION_OPTIONS.find((option) => option.value === location).vendor
              }€ je m²)`}
              names={VENDOR_STANDSIZE_OPTIONS.map((option) => option.label)}
              options={VENDOR_STANDSIZE_OPTIONS.map((option) => option.value)}
              selectedOption={standSize}
              inputChange={(value) => setStandSize(value)}
              inputRef={refs.gender}
              isError={errors.some((error) => error.field === "standSize")}
              require
            />

            <InputOptionInput
              type="number"
              title={`Zusätzliches Ausstellerticket (je ${TICKET_COST}€)`}
              inputText={additionalExhibitorTicket}
              inputChange={(value) => setAdditionalExhibitorTicket(value)}
              inputRef={refs.additionalExhibitorTicket}
              isError={errors.some((error) => error.field === "additionalExhibitorTicket")}
              min={0}
              max={4}
            />

            <CheckBox
              title="strom"
              content={`Strom - (${POWER_COST}€)`}
              isChecked={power}
              inputChange={(value) => setPower(value)}
              inputRef={refs.power}
              isError={errors.some((error) => error.field === "power")}
            />

            <CheckBox
              title="wlan"
              content={`W-lan für ein EC-Karten-/Kreditkartengerät - (${WLAN_COST}€)`}
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
              names={PROGRAMM_BOOKLET_OPTIONS.map((option) => option.label)}
              options={PROGRAMM_BOOKLET_OPTIONS.map((option) => option.value)}
              selectedOption={programmBooklet}
              inputChange={(value) => setProgrammBooklet(value)}
              inputRef={refs.programmBooklet}
              isError={errors.some((error) => error.field === "programmBooklet")}
              require
            />
            <p>Der Zugang wird von einem YumeKai-Helfer auf dem ausgewählten Gerät eingerichtet.</p>

            <RadioButton
              title="Tische - (inklusive)"
              names={["Ja", "Nein"]}
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
                Standgröße:{" "}
                {VENDOR_STANDSIZE_OPTIONS.find((option) => option.value === standSize).label}
                {standSize !== "INDIVIDUAL" ? ` (${selectedStandCost.toFixed(2)} €)` : ""}
              </li>
              {additionalExhibitorTicket > 0 && (
                <li>
                  Zusätzliche Ausstellertickets: {additionalExhibitorTicket} x {TICKET_COST},00€ ={" "}
                  {totalTicketCost.toFixed(2)}€
                </li>
              )}
              {power && <li>Strom: {POWER_COST},00€</li>}
              {wlan && <li>W-Lan: {WLAN_COST},00€</li>}
              {programmBooklet !== "Nein" && (
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

            <h4>
              Gesamtbetrag: {totalCost.toFixed(2)}€ zzgl.MWST
              {standSize === "INDIVIDUAL" && "  und Standkosten"}
            </h4>

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
              title="conditions"
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
              isChecked={conditions}
              inputChange={(value) => setConditions(value)}
              inputRef={refs.conditions}
              isError={errors.some((error) => error.field === "conditions")}
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
