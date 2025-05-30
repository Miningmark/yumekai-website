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
import LoadingAnimation from "@/components/styled/LoadingAnimation";
import validateString from "@/util/inputCheck";

export default function RegistrationCosplayAuction() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  const [artistName, setArtistName] = useState("");
  const [characterName, setCharacterName] = useState("");
  const [characterOrigin, setCharacterOrigin] = useState("");
  const [hobby, setHobby] = useState("");

  const [message, setMessage] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [dataStorage, setDataStorage] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");
  const [fileError, setFileError] = useState("");
  const [loading, setLoading] = useState(false);

  const refs = {
    name: useRef(null),
    lastName: useRef(null),
    birthDate: useRef(null),
    email: useRef(null),
    confirmEmail: useRef(null),
    artistName: useRef(null),
    characterName: useRef(null),
    characterOrigin: useRef(null),
    hobby: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
    ageCheck: useRef(null),
  };

  async function submit(e) {
    e.preventDefault();

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

    //Geburtsdatum
    if (!birthDate.trim()) {
      newErrors.push({ field: "birthDate", message: "Geburtsdatum ist ein Pflichtfeld" });
    } else {
      const birthDateObject = new Date(birthDate);
      const today = new Date();
      const age = today.getFullYear() - birthDateObject.getFullYear();
      const isBirthdayPassedThisYear =
        today.getMonth() > birthDateObject.getMonth() ||
        (today.getMonth() === birthDateObject.getMonth() &&
          today.getDate() >= birthDateObject.getDate());

      const actualAge = isBirthdayPassedThisYear ? age : age - 1; // Alter korrigieren, falls Geburtstag dieses Jahr noch nicht war

      if (actualAge < 18) {
        newErrors.push({ field: "birthDate", message: "Du musst mindestens 18 Jahre alt sein" });
      }
    }

    // Email Validierung
    const emailValidation = validateString(email, "E-Mail", 2, 100, true, true);
    if (!emailValidation.check)
      newErrors.push({ field: "email", message: emailValidation.description });

    // Email Bestätigung
    if (email !== confirmEmail)
      newErrors.push({ field: "confirmEmail", message: "E-Mail stimmt nicht überein" });

    // Künstlername Validierung
    const artistNameValidation = validateString(artistName, "Künstlername", 2, 50);
    if (!artistNameValidation.check)
      newErrors.push({ field: "artistName", message: artistNameValidation.description });

    // Charakter Validierung
    const characterNameValidation = validateString(characterName, "Charakter", 2, 50, true);
    if (!characterNameValidation.check)
      newErrors.push({ field: "characterName", message: characterNameValidation.description });

    // Charakter Ursprung Validierung
    const characterOriginValidation = validateString(
      characterOrigin,
      "Charakter Ursprung",
      2,
      50,
      true
    );
    if (!characterOriginValidation.check)
      newErrors.push({ field: "characterOrigin", message: characterOriginValidation.description });

    // Hobby Validierung
    const hobbyValidation = validateString(hobby, "Hobby", 2, 50);
    if (!hobbyValidation.check)
      newErrors.push({ field: "hobby", message: hobbyValidation.description });

    //Nachricht Validierung
    const messageValidation = validateString(message, "Nachricht", 0, 2500);
    if (!messageValidation.check)
      newErrors.push({ field: "message", message: messageValidation.description });

    //Datenschutzerklärung
    if (!privacyPolicy)
      newErrors.push({ field: "privacyPolicy", message: "Datenschutzerklärung zustimmen" });

    //Datenspeicherung
    if (!dataStorage)
      newErrors.push({ field: "dataStorage", message: "Datenspeicherung muss akzeptiert werden" });

    //Altersüberprüfung
    if (!ageCheck)
      newErrors.push({ field: "ageCheck", message: "Altersüberprüfung muss akzeptiert werden" });

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
    formData.append("birthdate", birthDate);
    formData.append("email", email.trim().toLowerCase());
    formData.append("artistName", artistName.trim());
    formData.append("characterName", characterName.trim());
    formData.append("characterOrigin", characterOrigin.trim());
    formData.append("hobby", hobby.trim());
    formData.append("message", message.trim());
    formData.append("privacyPolicy", privacyPolicy);
    formData.append("dataStorage", dataStorage);
    formData.append("ageCheck", ageCheck);

    try {
      const response = await fetch("/api/registrationCosplayAuction", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSuccess(
          "Deine Anmeldung war erfolgreich. Du erhälst in Kürze eine Bestätigung per E-Mail."
        );
        setName("");
        setLastName("");
        setBirthDate("");
        setEmail("");
        setConfirmEmail("");
        setArtistName("");
        setCharacterName("");
        setCharacterOrigin("");
        setHobby("");
        setMessage("");
        setPrivacyPolicy(false);
        setDataStorage(false);
        setAgeCheck(false);
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
      <h1>Anmeldung zur Cosplay versteigerung</h1>
      <p>
        <strong>Unterstützung durch Sachspenden</strong>
        <br />
        <br />
        Letztes Jahr gab es zu jedem ersteigerten Cosplayer noch ein weiteres Goodie, welches durch
        Händler, Künstler und unsere Sponsoren bereitgestellt wurde. Gerne können auch in diesem
        Jahr wieder Sachspenden abgegeben werden, um die Versteigerung zu unterstützen. Falls ihr
        uns auf diese Weise helfen möchtet, meldet euch gerne über unser{" "}
        <StyledLink href="/kontaktformular">Kontaktformular</StyledLink> (mit dem Bereich „Bühne“)
        bei uns!
        <br />
        <br />
        Bei Fragen oder eventuellen Unklarheiten kannst du dich gerne per E-Mail an:{" "}
        <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink> oder benutzt unser{" "}
        <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>. 
      </p>

      <h2>Die Anmeldung für die Cosplay-Auktion ist bereits geschlossen.</h2>

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
              title="Geburtsdatum"
              type="date"
              inputText={birthDate}
              inputChange={(value) => setBirthDate(value)}
              inputRef={refs.birthDate}
              isError={errors.some((error) => error.field === "birthDate")}
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
              title="Charakter"
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
            <InputOptionInput
              title="Hobby"
              inputText={hobby}
              inputChange={(value) => setHobby(value)}
              inputRef={refs.hobby}
              isError={errors.some((error) => error.field === "hobby")}
            />

            <InputOptionTextArea
              title="Nachricht"
              inputText={message}
              inputChange={setMessage}
              inputRef={refs.message}
              isError={errors.some((error) => error.field === "message")}
            />

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
              title="ageCheck"
              content={
                <p>
                  Hiermit bestätige ich, dass ich über 18 Jahre alt bin und einer Altersüberprüfung
                  durch Vorzeigen eines gültigen Lichtbildausweises/Reisepasses/Führerscheins am Tag
                  der Convention zustimme.
                  <RequiredNote>*</RequiredNote>
                </p>
              }
              isChecked={ageCheck}
              inputChange={(value) => setAgeCheck(value)}
              inputRef={refs.ageCheck}
              isError={errors.some((error) => error.field === "ageCheck")}
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
