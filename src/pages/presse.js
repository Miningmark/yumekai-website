import styled from "styled-components";
import { useState, useRef, useEffect } from "react";
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
  Spacer,
  StyledLink,
  ModalOverlay,
  SuccessText,
} from "@/components/styledComponents";
import { RequiredNote } from "@/components/styledInputComponents";
import CheckBox from "@/components/styled/CheckBox";
import LoadingAnimation from "@/components/styled/LoadingAnimation";
import AddressFields from "@/components/registrations/AddressFields";
import { EVENT_ID, GENDER_OPTIONS } from "@/util/registration_options";

const FieldErrorText = styled(ErrorText)`
  margin-top: -10px;
  margin-bottom: 10px;
  font-size: 0.9rem;
`;

export default function Presse() {
  const [eventId, setEventId] = useState(EVENT_ID);

  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [addressData, setAddressData] = useState({
    street: "",
    houseNumber: "",
    postalCode: "",
    city: "",
    country: "",
  });
  const [workFunction, setWorkFunction] = useState("");
  const [medium, setMedium] = useState("");
  const [verification, setVerification] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [dataStorage, setDataStorage] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [touchedFields, setTouchedFields] = useState({});

  const [registrationTest, setRegistrationTest] = useState(false);

  const refs = {
    gender: useRef(null),
    name: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    street: useRef(null),
    houseNumber: useRef(null),
    postalCode: useRef(null),
    city: useRef(null),
    country: useRef(null),
    workFunction: useRef(null),
    medium: useRef(null),
    verification: useRef(null),
    website: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
  };

  useEffect(() => {
    // Prüfe auf Test-Modus
    const urlParams = new URLSearchParams(window.location.search);
    const isTestMode = urlParams.get("test") === "true";

    if (isTestMode) {
      setRegistrationTest(true);
    }
  }, []);

  const handleAddressDataChange = (field, value) => {
    setAddressData((prev) => ({ ...prev, [field]: value }));
  };

  // Zentrale Validierungsfunktion
  const validateSingleField = (field, value, additionalData = {}) => {
    let error = null;

    switch (field) {
      case "gander":
        if (!value) error = "Anrede ist ein Pflichtfeld";
        break;
      case "name":
        const nameValidation = validateString(value, "Vorname", 2, 100, true);
        if (!nameValidation.check) error = nameValidation.description;
        break;

      case "lastName":
        const lastNameValidation = validateString(value, "Nachname", 2, 100, true);
        if (!lastNameValidation.check) error = lastNameValidation.description;
        break;

      case "email":
        const emailValidation = validateString(value, "E-Mail", 2, 100, true, true);
        if (!emailValidation.check) error = emailValidation.description;
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

      case "workFunction":
        const workFunctionValidation = validateString(value, "Funktion", 3, 50, true);
        if (!workFunctionValidation.check) error = workFunctionValidation.description;
        break;

      case "medium":
        const mediumValidation = validateString(value, "Medium", 3, 100, true);
        if (!mediumValidation.check) error = mediumValidation.description;
        break;

      case "verification":
        const verificationValidation = validateString(value, "Nachweis", 3, 500, true);
        if (!verificationValidation.check) error = verificationValidation.description;
        break;

      case "website":
        const websiteValidation = validateString(value, "Website", 0, 100);
        if (!websiteValidation.check) error = websiteValidation.description;
        break;

      case "message":
        const messageValidation = validateString(value, "Nachricht", 5, 2500, true);
        if (!messageValidation.check) error = messageValidation.description;
        break;

      case "privacyPolicy":
        if (!value) error = "Datenschutzerklärung muss akzeptiert werden";
        break;

      case "dataStorage":
        if (!value) error = "Datenspeicherung muss akzeptiert werden";
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

    // Adresse
    errors.street = validateSingleField("street", addressData.street);
    errors.houseNumber = validateSingleField("houseNumber", addressData.houseNumber);
    errors.postalCode = validateSingleField("postalCode", addressData.postalCode);
    errors.city = validateSingleField("city", addressData.city);
    errors.country = validateSingleField("country", addressData.country);

    // Presseangaben
    errors.workFunction = validateSingleField("workFunction", workFunction);
    errors.medium = validateSingleField("medium", medium);
    errors.verification = validateSingleField("verification", verification);
    errors.website = validateSingleField("website", website);
    errors.message = validateSingleField("message", message);

    // Bedingungen
    errors.privacyPolicy = validateSingleField("privacyPolicy", privacyPolicy);
    errors.dataStorage = validateSingleField("dataStorage", dataStorage);

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

    const formData = new FormData();
    formData.append("eventId", eventId);
    formData.append("gender", gender);
    formData.append("firstName", name.trim());
    formData.append("lastName", lastName.trim());
    formData.append("email", email.trim().toLowerCase());
    formData.append("street", addressData.street.trim());
    formData.append("houseNumber", addressData.houseNumber.trim());
    formData.append("postalCode", addressData.postalCode.trim());
    formData.append("city", addressData.city.trim());
    formData.append("country", addressData.country.trim());
    formData.append("workFunction", workFunction.trim());
    formData.append("mediaOutlet", medium.trim());
    formData.append("pressPass", verification.trim());
    formData.append("website", website.trim());
    formData.append("message", message.trim());
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("dataStoragePolicy", dataStorage);

    try {
      const fetchURL = registrationTest
        ? "https://node.miningmark.de"
        : "https://orgaboard.yumekai.de";
      const response = await fetch(`${fetchURL}/api/v1/event/application/createPress`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess("Presse Akkreditierung erfolgreich abgeschickt");
        // Reset form
        setGender("");
        setName("");
        setLastName("");
        setEmail("");
        setAddressData({ street: "", houseNumber: "", postalCode: "", city: "", country: "" });
        setWorkFunction("");
        setMedium("");
        setVerification("");
        setWebsite("");
        setMessage("");
        setPrivacyPolicy(false);
        setDataStorage(false);
        setFieldErrors({});
        setTouchedFields({});
      } else {
        setFieldErrors({
          general: "Fehler beim Absenden der Anfrage. Bitte versuche es später nochmal.",
        });
      }
    } catch (error) {
      setFieldErrors({
        general: "Fehler beim Absenden der Anfrage. Bitte versuche es später nochmal.",
      });
    }
    setLoading(false);
  }

  return (
    <>
      <h1>Akkreditierung für Presse-Vertreter</h1>
      <p>
        Du möchtest über die <strong>YumeKai</strong> berichten? Dann freuen wir uns über eine
        Online-Akkreditierung.
      </p>
      <strong>
        Eine Akkreditierung vor Ort ist nicht möglich. <br />
        <br />
        Inhaltsverzeichnis
      </strong>
      <ul>
        <li>
          <StyledLink href="#ansprechpartner">Ansprechpartner Presse</StyledLink>
        </li>
        <li>
          <StyledLink href="#richtlinien">Akkreditierungsrichtlinien für die YumeKai</StyledLink>
        </li>
        <li>
          <StyledLink href="#akkreditierung">Online-Akkreditierung</StyledLink>
        </li>
      </ul>

      <Spacer id="ansprechpartner" />
      <h2>Ansprechpartner Presse</h2>

      <p>
        Das YumeKai-Presseteam erreichen Sie unter{" "}
        <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink>
      </p>

      <Spacer id="richtlinien" />
      <h2>Akkreditierungsrichtlinien</h2>

      <p>
        Eine Akkreditierung erfolgt ausschließlich zum Zwecke{" "}
        <strong>der journalistischen Berichterstattung</strong>. Deshalb behält sich die YumeKai die
        Überprüfung des Nachweises der journalistischen Tätigkeit vor.
        <br />
        <br /> Eine Akkreditierung vor Ort ist aus organisatorischen Gründen nicht möglich. Eine
        vorherige Online-Akkreditierung über das Anmeldeformular ist verpflichtend. Eine
        Akkreditierung muss jedes Jahr neu vergeben werden. <br />
        <br />
        <strong>
          Um sich als Presse auf der YumeKai zu akkreditieren, muss einer der folgenden Nachweise
          erbracht werden:
        </strong>
      </p>
      <ul>
        <li>Presseausweis von dju, DJV, BDZV, VDZ oder VDS.</li>
        <li>
          Aktueller Auftrag zur Berichterstattung über die YumeKai durch die Chefredaktion des
          Mediums, für das berichtet werden soll. Bei freien Redakteuren und Fotografen ist dies
          zwingend notwendig.
        </li>
        <li>
          Durch Vorlage eines höchstens sechs Monate alten Beleges, dass Sie für Schülerzeitungen
          arbeiten, oder durch Vorlage eines gültigen Ausweises einer Jugendpresseorganisation und
          durch Vorlage einer schriftlichen Bestätigung der Schule, welche die redaktionelle
          Tätigkeit für die Schülerzeitung bestätigt.
        </li>
        <li>
          Für Fan-Magazine, Blogger, Youtuber oder TikTok/Instagram-Creator muss das Online-Formular
          vollständig ausgefüllt werden und ein Nachweis über die Reichweiten der letzten sechs
          Monate erbracht werden.
        </li>
      </ul>
      <p>
        Falls Sie mehr als ein Ticket für Ihr Team benötigen, beschreiben Sie bitte genau, wer noch
        mitkommt und aus welchem Grund diese Person relevant für die Berichterstattung ist.
        <br /> Bitte schicken Sie uns nach der Berichterstattung die Links oder Scans zum Bericht
        per E-Mail, sodass wir sie in unserer Bibliothek aufnehmen und für zukünftige
        Akkreditierungsanfragen einbeziehen können.
        <br />
        <br /> Wir haben nur ein begrenztes Kontingent an Presse-Badges. Daher können wir nicht jede
        Anfrage annehmen. Eine Anfrage wird bei uns nach Relevanz bearbeitet: Das heißt, es könnten
        auch kleinere Projekte angenommen werden, obwohl wir vereinzelt größeren Projekten absagen.{" "}
        <br />
        <br />
        Wir halten uns vor, Akkreditierungsanfragen ohne Nennung von Gründen abzusagen. Mögliche
        Gründe für eine Absage könnten z.B. kleinere Relevanz für uns sein oder
        Journalisten-Akkreditierungen in der Vergangenheit, bei denen keine Berichte entstanden
        sind.
      </p>

      <Spacer id="akkreditierung" />
      <h2>Online Akkreditierung</h2>

      {registrationTest && <h2>Testmodus Aktiv!</h2>}

      {!success && (
        <>
          <p>
            Felder mit <RequiredNote>*</RequiredNote> sind Pflichtfelder.
          </p>

          <StyledForm onSubmit={handleSubmit}>
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
              type="email"
              inputText={email}
              inputChange={(value) => setEmail(value)}
              onBlur={() => handleBlur("email", email)}
              inputRef={refs.email}
              isError={!!getFieldError("email")}
              require
            />
            {getFieldError("email") && <FieldErrorText>{getFieldError("email")}</FieldErrorText>}

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
            <h2>Presseangaben</h2>

            <InputOptionInput
              title="Funktion"
              inputText={workFunction}
              inputChange={(value) => setWorkFunction(value)}
              onBlur={() => handleBlur("workFunction", workFunction)}
              inputRef={refs.workFunction}
              isError={!!getFieldError("workFunction")}
              require
            />
            {getFieldError("workFunction") && (
              <FieldErrorText>{getFieldError("workFunction")}</FieldErrorText>
            )}

            <InputOptionInput
              title="Medium"
              inputText={medium}
              inputChange={(value) => setMedium(value)}
              onBlur={() => handleBlur("medium", medium)}
              inputRef={refs.medium}
              isError={!!getFieldError("medium")}
              require
            />
            {getFieldError("medium") && <FieldErrorText>{getFieldError("medium")}</FieldErrorText>}

            <InputOptionTextArea
              title="Nachweis"
              inputText={verification}
              inputChange={(value) => setVerification(value)}
              onBlur={() => handleBlur("verification", verification)}
              inputRef={refs.verification}
              isError={!!getFieldError("verification")}
              require
            />
            {getFieldError("verification") && (
              <FieldErrorText>{getFieldError("verification")}</FieldErrorText>
            )}
            <p style={{ marginTop: "-10px", fontSize: "0.9rem", color: "#666" }}>
              (Pressenachweis, einen schriftlichen Auftrag deines Chefredakteurs oder einen Nachweis
              über Fanprojekte, über welche Sie schreiben)
            </p>

            <InputOptionTextArea
              title="Möchten Sie uns noch etwas mitteilen?"
              inputText={message}
              inputChange={(value) => setMessage(value)}
              onBlur={() => handleBlur("message", message)}
              inputRef={refs.message}
              isError={!!getFieldError("message")}
              require
            />
            {getFieldError("message") && (
              <FieldErrorText>{getFieldError("message")}</FieldErrorText>
            )}

            <InputOptionInput
              title="Webseite"
              inputText={website}
              inputChange={setWebsite}
              onBlur={() => handleBlur("website", website)}
              inputRef={refs.website}
              isError={!!getFieldError("website")}
            />
            {getFieldError("website") && (
              <FieldErrorText>{getFieldError("website")}</FieldErrorText>
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
                  gelesen, verstanden, und bin mir bewusst, dass ich meine Einwilligung jederzeit
                  widerrufen kann.
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
                  Ich willige ein, dass meine Daten von der Firma Dreamfly-Events UG elektronisch
                  gespeichert und zum Zweck der Veranstaltungsdurchführung an die zuständigen
                  Bereiche weitergegeben werden.
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

            {fieldErrors.general && (
              <ErrorText style={{ marginTop: "1rem", textAlign: "center" }}>
                {fieldErrors.general}
              </ErrorText>
            )}

            <StyledButton type="submit">Absenden</StyledButton>
          </StyledForm>
        </>
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
