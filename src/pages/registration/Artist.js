import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import validateString from "@/util/inputCheck";

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
  EVENT_ID,
  TICKET_COST,
  WLAN_COST,
  COUNTRIES,
  LOCATION_OPTIONS,
  PROGRAMM_BOOKLET_OPTIONS,
  ARTIST_STANDSIZE_OPTIONS,
} from "@/util/registration_options";

const ACCEPTED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

const isImageFile = (fileName) => {
  return ACCEPTED_IMAGE_EXTENSIONS.some((ext) => fileName.toLowerCase().endsWith(ext));
};

export default function Artist() {
  const [eventId, setEventId] = useState(EVENT_ID); //TODO: Event ID anpassen

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
  const [standSize, setStandSize] = useState("FULL_TABLE"); //ENUM: HALF_TABLE, FULL_TABLE
  const [location, setLocation] = useState("STADTHALLE"); //ENUM: STADTHALLE, KOLBEHAUS, EGAL
  const [additionalExhibitorTicket, setAdditionalExhibitorTicket] = useState(0);
  const [wlan, setWlan] = useState(false);
  const [programmBooklet, setProgrammBooklet] = useState("NO"); //ENUM: NO, QUATER_SITE, HALF_SITE, FULL_SITE
  const [announcementText, setAnnouncementText] = useState("");
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
    const vendorNameValidation = validateString(vendorName, "Firmenname");
    if (!vendorNameValidation.check)
      newErrors.push({ field: "vendorName", message: vendorNameValidation.description });

    //Künstlername Validierung
    const artistNameValidation = validateString(artistName, "Künstlername", 2, 50, true);
    if (!artistNameValidation.check)
      newErrors.push({ field: "artistName", message: artistNameValidation.description });

    //Straße Validierung
    const streetValidation = validateString(street, "Straße", 3, 50, true);
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

    //Art der Kunst Validierung
    const typeOfArtValidation = validateString(typeOfArt, "Art der Kunst", 2, 2500, true);
    if (!typeOfArtValidation.check)
      newErrors.push({ field: "typeOfArt", message: typeOfArtValidation.description });

    //Ankündigungstext des Standes Validierung
    const announcementTextValidation = validateString(
      announcementText,
      "Ankündigungstext",
      5,
      2500,
      true
    );
    if (!announcementTextValidation.check)
      newErrors.push({
        field: "announcementText",
        message: announcementTextValidation.description,
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
    formData.append("artistName", artistName.trim());
    formData.append("street", street.trim());
    formData.append("postalCode", postalCode.trim());
    formData.append("city", city.trim());
    formData.append("country", country.trim());
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
    formData.append("file", file);

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
        Bei Fragen oder eventuellen Unklarheiten kannst du dich gerne per E-Mail an:{" "}
        <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutzt unser{" "}
        <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>. 
      </p>

      <h2>Die Anmeldung als Künstler ist momentan geschlossen.</h2>

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
              title="Angebotene Artikel"
              inputText={typeOfArt}
              inputChange={(value) => setTypeOfArt(value)}
              inputRef={refs.typeOfArt}
              isError={errors.some((error) => error.field === "typeOfArt")}
              require
            />
            <InputOptionTextArea
              title="Ankündigungstext"
              inputText={announcementText}
              inputChange={(value) => setAnnouncementText(value)}
              inputRef={refs.announcementText}
              isError={errors.some((error) => error.field === "announcementText")}
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
              title="Standgröße"
              names={ARTIST_STANDSIZE_OPTIONS.map((option) => option.label)}
              options={ARTIST_STANDSIZE_OPTIONS.map((option) => option.value)}
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
              max={2}
            />

            <CheckBox
              title="wlan"
              content={`W-lan für ein EC-Karten-/Kreditkartengerät (${WLAN_COST}€)`}
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
              names={PROGRAMM_BOOKLET_OPTIONS.map((option) => option.label)}
              options={PROGRAMM_BOOKLET_OPTIONS.map((option) => option.value)}
              selectedOption={programmBooklet}
              inputChange={(value) => setProgrammBooklet(value)}
              inputRef={refs.programmBooklet}
              isError={errors.some((error) => error.field === "programmBooklet")}
              require
            />

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
              isChecked={conditions}
              inputChange={(value) => setConditions(value)}
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
