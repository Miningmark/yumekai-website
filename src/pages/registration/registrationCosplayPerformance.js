import { useState, useRef } from "react";

//Components
import { InputOptionTextArea, InputOptionInput } from "@/components/elements/InputComponents";
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
import MultiFileUpload from "@/components/styled/MultiFileUpload";
import LoadingAnimation from "@/components/styled/LoadingAnimation";
import validateString from "@/util/inputCheck";

const ACCEPTED_FILE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".pdf"];
const ACCEPTED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
const ACCEPTED_SOUND_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".mp3", "wav", ".mp4"];
const MAX_FILE_SIZE_MB = 10;
const MAX_FILE_SIZE_MB_2 = 50;

export default function RegistrationCosplayCatwalk() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [artistName, setArtistName] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [characterOrigin, setCharacterOrigin] = useState("");

  const [file, setFile] = useState([]);
  const [previewUrl, setPreviewUrl] = useState([]);

  const [file2, setFile2] = useState([]);
  const [previewUrl2, setPreviewUrl2] = useState([]);

  const [file3, setFile3] = useState([]);
  const [previewUrl3, setPreviewUrl3] = useState([]);

  const [message, setMessage] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [dataStorage, setDataStorage] = useState(false);
  const [pictureRights, setPictureRights] = useState(false);
  const [performanceConditions, setPerformanceConditions] = useState(false);

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");
  const [fileError, setFileError] = useState("");
  const [fileError2, setFileError2] = useState("");
  const [fileError3, setFileError3] = useState("");
  const [loading, setLoading] = useState(false);

  const refs = {
    name: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    confirmEmail: useRef(null),
    artistName: useRef(null),
    characterName: useRef(null),
    characterOrigin: useRef(null),
    file: useRef(null),
    file2: useRef(null),
    file3: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
    licensedMusic: useRef(null),
    pictureRights: useRef(null),
    performanceConditions: useRef(null),
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
      newErrors.push({
        field: "lastName",
        message: lastNameValidation.description,
      });

    // Email Validierung
    const emailValidation = validateString(email, "E-Mail", 2, 100, true, true);
    if (!emailValidation.check)
      newErrors.push({ field: "email", message: emailValidation.description });

    // Email Bestätigung
    if (email !== confirmEmail)
      newErrors.push({
        field: "confirmEmail",
        message: "E-Mail stimmt nicht überein",
      });

    // Künstlername Validierung
    const artistNameValidation = validateString(artistName, "Künstlername", 2, 50);
    if (!artistNameValidation.check)
      newErrors.push({
        field: "artistName",
        message: artistNameValidation.description,
      });

    // Charakter Validierung
    const characterNameValidation = validateString(characterName, "Charakter Name", 2, 50, true);
    if (!characterNameValidation.check)
      newErrors.push({
        field: "characterName",
        message: characterNameValidation.description,
      });

    // Charakter Herkunft Validierung
    const characterOriginValidation = validateString(
      characterOrigin,
      "Charakter Herkunft",
      2,
      50,
      true
    );
    if (!characterOriginValidation.check)
      newErrors.push({
        field: "characterOrigin",
        message: characterOriginValidation.description,
      });

    //Nachricht Validierung
    const messageValidation = validateString(message, "Nachricht", 0, 2500);
    if (!messageValidation.check)
      newErrors.push({
        field: "message",
        message: messageValidation.description,
      });

    //Daten Charakter Referenz
    if (file.length === 0)
      newErrors.push({
        field: "dataField",
        message: "Charakterreferenz ist ein Pflichtfeld",
      });

    //Daten Charakter Bilder
    if (file2.length === 0)
      newErrors.push({
        field: "dataField",
        message: "Charakterbild ist ein Pflichtfeld",
      });

    //Datenschutzerklärung
    if (!privacyPolicy)
      newErrors.push({
        field: "privacyPolicy",
        message: "Datenschutzerklärung zustimmen",
      });

    //Datenspeicherung
    if (!dataStorage)
      newErrors.push({
        field: "dataStorage",
        message: "Datenspeicherung muss akzeptiert werden",
      });

    //Bildrechte
    if (!pictureRights)
      newErrors.push({
        field: "pictureRights",
        message: "Bildrechte müssen bestätigt werden",
      });

    //Teilnahmebedingungen
    if (!performanceConditions)
      newErrors.push({
        field: "performanceConditions",
        message: "Teilnahmebedingungen müssen akzeptiert werden",
      });

    //Check if there are any errors
    if (newErrors.length > 0) {
      setErrors(newErrors);

      // Scroll to the first error
      const firstError = newErrors[0];
      if (refs[firstError.field]?.current) {
        refs[firstError.field].current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        refs[firstError.field].current.focus();
      }
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("artistName", artistName);
    formData.append("characterName", characterName);
    formData.append("characterOrigin", characterOrigin);
    formData.append("message", message);
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("dataStorage", dataStorage);
    formData.append("pictureRights", pictureRights);
    formData.append("performanceConditions", performanceConditions);
    if (file && Array.isArray(file)) {
      file.forEach((singleFile, index) => {
        formData.append(`file1[${index}]`, singleFile);
      });
    }
    if (file2 && Array.isArray(file2)) {
      file2.forEach((singleFile, index) => {
        formData.append(`file2[${index}]`, singleFile);
      });
    }
    if (file3 && Array.isArray(file3)) {
      file3.forEach((singleFile, index) => {
        formData.append(`file3[${index}]`, singleFile);
      });
    }

    try {
      const response = await fetch("/api/registrationCosplayPerformance", {
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
        setArtistName("");
        setCharacterName("");
        setCharacterOrigin("");
        setMessage("");
        setPrivacyPolicy(false);
        setDataStorage(false);
        setPictureRights(false);
        setPerformanceConditions(false);
        setFile([]);
        setFile2([]);
        setFile3([]);
        setPreviewUrl([]);
        setPreviewUrl2([]);
        setPreviewUrl3([]);
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

  return (
    <>
      <h1>Anmeldung für den Cosplay Performance Wettbewerb </h1>
      <p>
        Sichert euch euren Platz auf der YumeKai 2025!
        <br />
        <br />
        Bitte beachtet die{" "}
        <StyledLink href="" target="_blank">
          Teilnahmebedingungen für den Cosplay Performance Wettbewerb
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
            <InputOptionInput
              title="Künstlername"
              inputText={artistName}
              inputChange={(value) => setArtistName(value)}
              inputRef={refs.artistName}
              isError={errors.some((error) => error.field === "artistName")}
            />
            <InputOptionInput
              title="Charakter Name"
              inputText={characterName}
              inputChange={(value) => setCharacterName(value)}
              inputRef={refs.characterName}
              isError={errors.some((error) => error.field === "characterName")}
              require
            />
            <InputOptionInput
              title="Charakter Ursprung"
              inputText={characterOrigin}
              inputChange={(value) => setCharacterOrigin(value)}
              inputRef={refs.characterOrigin}
              isError={errors.some((error) => error.field === "characterOrigin")}
              require
            />

            <p>
              Charakter Vorlage/Referenz des Cosplays (max. 3 Dateien mit je. {MAX_FILE_SIZE_MB}MB,
              jpg, jpeg, png, webp, pdf)
            </p>
            <MultiFileUpload
              name="referenz"
              inputRef={refs.dataField}
              previewUrl={previewUrl}
              files={file}
              setFiles={setFile}
              previewUrls={previewUrl}
              setPreviewUrls={setPreviewUrl}
              maxFileSize={MAX_FILE_SIZE_MB}
              maxFiles={3}
              acceptedExtensions={ACCEPTED_FILE_EXTENSIONS}
              isError={errors.some((error) => error.field === "dataField") || fileError}
              setFileError={setFileError}
            />
            {fileError && <ErrorText style={{ textAlign: "center" }}>{fileError}</ErrorText>}

            <p>
              Bild des Cosplays (max. 3 Dateien mit je. {MAX_FILE_SIZE_MB}MB, jpg, jpeg, png, webp)
            </p>
            <MultiFileUpload
              name="image"
              inputRef={refs.dataField2}
              previewUrl={previewUrl2}
              files={file2}
              setFiles={setFile2}
              previewUrls={previewUrl2}
              setPreviewUrls={setPreviewUrl2}
              maxFileSize={MAX_FILE_SIZE_MB}
              maxFiles={3}
              acceptedExtensions={ACCEPTED_IMAGE_EXTENSIONS}
              isError={errors.some((error) => error.field === "dataField2") || fileError2}
              setFileError={setFileError2}
            />
            {fileError2 && <ErrorText style={{ textAlign: "center" }}>{fileError2}</ErrorText>}

            <p>
              Hintergrund für den Auftritt Bild,Ton oder Video (max. 4 Dateien mit je.{" "}
              {MAX_FILE_SIZE_MB_2}MB, jpg, jpeg, png, webp, mp3, wav, mp4)
            </p>
            <MultiFileUpload
              name="background"
              inputRef={refs.dataField3}
              previewUrl={previewUrl3}
              files={file3}
              setFiles={setFile3}
              previewUrls={previewUrl3}
              setPreviewUrls={setPreviewUrl3}
              maxFileSize={MAX_FILE_SIZE_MB_2}
              maxFiles={4}
              acceptedExtensions={ACCEPTED_SOUND_IMAGE_EXTENSIONS}
              isError={errors.some((error) => error.field === "dataField3") || fileError3}
              setFileError={setFileError3}
            />
            {fileError3 && <ErrorText style={{ textAlign: "center" }}>{fileError3}</ErrorText>}

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
              title="performanceConditions"
              content={
                <p>
                  Ich habe die{" "}
                  <StyledLink href="" target="_blank">
                    Teilnahmebedingungen
                  </StyledLink>{" "}
                  gelesen und akzeptiere diese.<RequiredNote>*</RequiredNote>
                </p>
              }
              isChecked={performanceConditions}
              inputChange={(value) => setPerformanceConditions(value)}
              inputRef={refs.performanceConditions}
              isError={errors.some((error) => error.field === "performanceConditions")}
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
