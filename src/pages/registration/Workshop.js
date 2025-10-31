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
import CheckBox from "@/components/styled/CheckBox";
import FileUpload from "@/components/styled/FileUpload";
import LoadingAnimation from "@/components/styled/LoadingAnimation";
import {
  REGISTRATION_START_WORKSHOP,
  REGISTRATION_END_WORKSHOP,
  checkRegistrationPeriod,
  EVENT_ID,
  COUNTRIES,
} from "@/util/registration_options";
import AddressFields from "@/components/registrations/AddressFields";

const TimeslotsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  ${({ $iserror }) => $iserror && `border: solid 2px red;`}
  ${({ $iserror }) => $iserror && `padding: 10px;`}
`;

const ACCEPTED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];

const isImageFile = (fileName) => {
  return ACCEPTED_IMAGE_EXTENSIONS.some((ext) => fileName.toLowerCase().endsWith(ext));
};

export default function Workshop() {
  const [eventId, setEventId] = useState(EVENT_ID); //TODO: Event ID anpassen

  const [registrationStatus, setRegistrationStatus] = useState(() =>
    checkRegistrationPeriod(REGISTRATION_START_WORKSHOP, REGISTRATION_END_WORKSHOP)
  );

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [addressData, setAddressData] = useState({
    street: "",
    postalCode: "",
    city: "",
    country: "",
  });

  const [workshopTitle, setWorkshopTitle] = useState("");
  const [announcementText, setAnnouncementText] = useState("");
  const [leaders, setLeaders] = useState(1);
  const [timeSlot1, setTimeSlot1] = useState(false);
  const [timeSlot2, setTimeSlot2] = useState(false);
  const [timeSlot3, setTimeSlot3] = useState(false);
  const [timeSlot4, setTimeSlot4] = useState(false);
  const [constructionTime, setConstructionTime] = useState(0);
  const [workshopTime, setWorkshopTime] = useState(0);
  const [deconstructionTime, setDeconstructionTime] = useState(0);
  const [workshopRequirements, setWorkshopRequirements] = useState("");
  const [participants, setParticipants] = useState(0);

  const [website, setWebsite] = useState("");
  const [instagram, setInstagram] = useState("");
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const [message, setMessage] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [dataStorage, setDataStorage] = useState(false);
  const [pictureRights, setPictureRights] = useState(false);

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");
  const [fileError, setFileError] = useState("");
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
    workshopTitle: useRef(null),
    announcementText: useRef(null),
    leaders: useRef(null),
    timeSlots: useRef(null),
    constructionTime: useRef(null),
    workshopTime: useRef(null),
    deconstructionTime: useRef(null),
    workshopRequirements: useRef(null),
    participants: useRef(null),
    website: useRef(null),
    instagram: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
    pictureRights: useRef(null),
  };

  useEffect(() => {
    // Aktualisiere den Status alle Minute
    const interval = setInterval(() => {
      setRegistrationStatus(
        checkRegistrationPeriod(REGISTRATION_START_WORKSHOP, REGISTRATION_END_WORKSHOP)
      );
    }, 60000); // 60 Sekunden

    return () => clearInterval(interval);
  }, []);

  // Handler für Adressdaten
  const handleAddressDataChange = (field, value) => {
    setAddressData((prev) => ({ ...prev, [field]: value }));
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
    if (lastName) {
      const lastNameValidation = validateString(lastName, "Nachname", 2, 50, true);
      if (!lastNameValidation.check)
        newErrors.push({ field: "lastName", message: lastNameValidation.description });
    }

    // Email Validierung
    const emailValidation = validateString(email, "E-Mail", 2, 100, true, true);
    if (!emailValidation.check)
      newErrors.push({ field: "email", message: emailValidation.description });

    // Validierung Adressdaten
    const streetError = validateField(addressData.street, "Straße", 3, 50, true);
    if (streetError) newErrors.push(streetError);

    const postalCodeError = validateField(addressData.postalCode, "PLZ", 2, 10, true);
    if (postalCodeError) newErrors.push(postalCodeError);

    const cityError = validateField(addressData.city, "Ort", 2, 50, true);
    if (cityError) newErrors.push(cityError);

    const countryError = validateField(addressData.country, "Land", 2, 50, true);
    if (countryError) newErrors.push(countryError);

    //Titel des Workshops Validierung
    const workshopTitleValidation = validateString(
      workshopTitle,
      "Titel des Workshops",
      3,
      100,
      true
    );
    if (!workshopTitleValidation.check)
      newErrors.push({ field: "workshopTitle", message: workshopTitleValidation.description });

    //Beschreibung des Workshops Validierung
    const announcementTextValidation = validateString(
      announcementText,
      "Ankündigungstext",
      10,
      2500,
      true
    );
    if (!announcementTextValidation.check)
      newErrors.push({
        field: "announcementText",
        message: announcementTextValidation.description,
      });

    //Leiter*innen Validierung
    if (leaders < 1)
      newErrors.push({ field: "leaders", message: "Leiter*innen muss mindestens 1 sein" });
    if (leaders > 5)
      newErrors.push({ field: "leaders", message: "Leiter*innen darf maximal 5 sein" });

    //Zeitslots Validierung
    if (!(timeSlot1 || timeSlot2 || timeSlot3 || timeSlot4))
      newErrors.push({ field: "timeSlots", message: "Bitte mindestens eine Option wählen" });

    //Aufbauzeit
    if (constructionTime < 1)
      newErrors.push({ field: "constructionTime", message: "Aufbauzeit muss mindestens 1 sein" });
    if (constructionTime > 30)
      newErrors.push({ field: "constructionTime", message: "Aufbauzeit darf maximal 30 sein" });

    //Workshopzeit
    if (workshopTime < 30)
      newErrors.push({ field: "workshopTime", message: "Workshopzeit muss mindestens 30 sein" });
    if (workshopTime > 360)
      newErrors.push({ field: "workshopTime", message: "Workshopzeit darf maximal 360 sein" });

    //Abbauzeit
    if (deconstructionTime < 1)
      newErrors.push({ field: "deconstructionTime", message: "Abbauzeit muss mindestens 1 sein" });
    if (deconstructionTime > 30)
      newErrors.push({ field: "deconstructionTime", message: "Abbauzeit darf maximal 30 sein" });

    //Anforderungen für den Workshop
    const workshopRequirementsValidation = validateString(
      workshopRequirements,
      "Anforderungen für den Workshop",
      5,
      2500
    );
    if (!workshopRequirementsValidation.check)
      newErrors.push({
        field: "workshopRequirements",
        message: workshopRequirementsValidation.description,
      });

    //Teilnehmer*innen
    if (participants) {
      if (participants < 1)
        newErrors.push({
          field: "participants",
          message: "Teilnehmer*innen muss mindestens 1 sein",
        });
      if (participants > 40)
        newErrors.push({ field: "participants", message: "Teilnehmer*innen darf maximal 40 sein" });
    }
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
      timeSlot1 && "Samstag 11:00-15:00 Uhr",
      timeSlot2 && "Samstag 15:00-20:00 Uhr",
      timeSlot3 && "Sonntag 11:00-14:00 Uhr",
      timeSlot4 && "Sonntag 14:00-18:00 Uhr",
    ]
      .filter(Boolean)
      .join(", ")
      .trim();

    const formData = new FormData();
    formData.append("eventId", eventId);
    formData.append("firstName", name.trim());
    formData.append("lastName", lastName.trim());
    formData.append("email", email.trim().toLowerCase());
    formData.append("street", addressData.street.trim());
    formData.append("postalCode", addressData.postalCode.trim());
    formData.append("city", addressData.city.trim());
    formData.append("country", addressData.country.trim());
    formData.append("workshopTitle", workshopTitle.trim());
    formData.append("announcementText", announcementText.trim());
    formData.append("leaders", leaders);
    formData.append("timeSlots", timeSlots);
    formData.append("constructionTime", constructionTime);
    formData.append("workshopTime", workshopTime);
    formData.append("deconstructionTime", deconstructionTime);
    formData.append("workshopRequirements", workshopRequirements.trim());
    formData.append("participants", participants || 40);
    formData.append("website", website.trim());
    formData.append("instagram", instagram.trim());
    formData.append("message", message.trim());
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("dataStoragePolicy", dataStorage);
    formData.append("pictureRightsPolicy", pictureRights);
    formData.append("image", file);

    try {
      const response = await fetch(
        "https://node.miningmark.de/api/v1/event/application/createWorkshop",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setSuccess(
          "Deine Anmeldung war erfolgreich. Du erhälst in Kürze eine Bestätigung per E-Mail."
        );
        setName("");
        setLastName("");
        setEmail("");
        setConfirmEmail("");
        setAddressData({ street: "", postalCode: "", city: "", country: "" });
        setWorkshopTitle("");
        setAnnouncementText("");
        setLeaders(1);
        setTimeSlot1(false);
        setTimeSlot2(false);
        setTimeSlot3(false);
        setTimeSlot4(false);
        setConstructionTime(0);
        setWorkshopTime(0);
        setDeconstructionTime(0);
        setWorkshopRequirements("");
        setParticipants(0);
        setWebsite("");
        setInstagram("");
        setMessage("");
        setPrivacyPolicy(false);
        setDataStorage(false);
        setPictureRights(false);
        setFile(null);
        setPreviewUrl(null);
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
      <h1>Anmeldung als Workshopleiter</h1>
      <p>Sichert euch euren Platz auf der YumeKai 2025!</p>
      <p>
        <strong>HINWEIS:</strong>
        <br />
        Wir können nicht gewährleisten, dass euer Workshop für die YumeKai 2024 ausgewählt oder der
        gewünschte Zeitslot garantiert werden kann. Bei einer hohen Nachfrage an Workshops streben
        wir an, ein möglichst ausgewogenes Angebot zu schaffen.
        <br />
        <br />
        Falls euer Workshop oder Vortrag ausgewählt wird, erhaltet ihr von uns ein Wochenendticket,
        das den Zugang zur Convention ermöglicht. Detaillierte Informationen zu eurem Workshop oder
        Vortrag werden euch per E-Mail mitgeteilt, sofern ihr ausgewählt werdet.
        <br />
        <br />
        Bitte beachtet, dass wir keine Erstattungen für Materialien oder Fahrtkosten für
        Workshop-Leiter anbieten können. Als Workshopleiter musst du mindestens 18 Jahre alt sein.
        Workshops, die von Ausstellern oder Helfern angeboten werden möchten, werden in unserer
        Auswahl bevorzugt behandelt, sofern dies nicht zu einer Beeinträchtigung eines ausgewogenen
        Angebots führt.
      </p>
      <p>
        Bei Fragen oder eventuellen Unklarheiten kannst du dich gerne per E-Mail an:{" "}
        <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutzt unser{" "}
        <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>. 
      </p>

      <h2>Die Anmeldung als Workshop-Leiter ist momentan geschlossen.</h2>

      {/* Anmeldezeitraum Status */}
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

            <AddressFields
              data={addressData}
              onChange={handleAddressDataChange}
              refs={refs}
              errors={errors}
            />

            <Spacer />
            <h2>Workshop</h2>
            <InputOptionInput
              title="Titel des Workshops"
              inputText={workshopTitle}
              inputChange={setWorkshopTitle}
              inputRef={refs.workshopTitle}
              isError={errors.some((error) => error.field === "workshopTitle")}
              require
            />
            <InputOptionTextArea
              title="Ankündigungstext"
              inputText={announcementText}
              inputChange={setAnnouncementText}
              inputRef={refs.announcementText}
              isError={errors.some((error) => error.field === "announcementText")}
              require
            />
            <InputOptionInput
              title="Leiter*innen"
              inputText={leaders}
              inputChange={setLeaders}
              inputRef={refs.leaders}
              isError={errors.some((error) => error.field === "leaders")}
              require
              type="number"
              min={1}
              max={5}
            />
            <TimeslotsContainer $iserror={errors.some((error) => error.field === "timeSlots")}>
              <h3>Bevorzugter Tag/Uhrzeit (min. 1 Option wählen)</h3>
              <CheckBox
                title="timeSlot1"
                content="Samstag 11:00-15:00 Uhr"
                isChecked={timeSlot1}
                inputChange={(value) => setTimeSlot1(value)}
                inputRef={refs.timeSlots}
              />
              <CheckBox
                title="timeSlot2"
                content="Samstag 15:00-20:00 Uhr"
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
              max={30}
            />
            <InputOptionInput
              title="Workshopzeit (in Minuten)"
              inputText={workshopTime}
              inputChange={setWorkshopTime}
              inputRef={refs.workshopTime}
              isError={errors.some((error) => error.field === "workshopTime")}
              require
              type="number"
              min={30}
              max={360}
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
              max={30}
            />
            <InputOptionTextArea
              title="Anforderungen für den Workshop (z.B. Material, Technik, etc.)"
              inputText={workshopRequirements}
              inputChange={setWorkshopRequirements}
              inputRef={refs.workshopRequirements}
              isError={errors.some((error) => error.field === "workshopRequirements")}
            />
            <InputOptionInput
              title="Teilnehmer*innen"
              inputText={participants}
              inputChange={setParticipants}
              inputRef={refs.participants}
              isError={errors.some((error) => error.field === "participants")}
              type="number"
              min={1}
              max={40}
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
