import { useState, useRef } from "react";
import {
  InputOptionTextArea,
  InputOptionInput,
  InputOptionSelect,
  InputOptionCheckbox,
  InputOptionRadio,
} from "@/components/elements/InputComponents";
import { StyledButton, StyledForm, ErrorText, SuccessText } from "../styledComponents";

export default function HelferForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [discordName, setDiscordName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [strengths, setStrengths] = useState("");
  const [desiredTeam, setDesiredTeam] = useState("");
  const [other, setOther] = useState("");
  const [nickname, setNickname] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [assembly, setAssembly] = useState(false);
  const [deconstruction, setDeconstruction] = useState(false);
  const [gender, setGender] = useState(null);
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [contactForwarding, setContactForwarding] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const discordNameRef = useRef(null);
  const birthdateRef = useRef(null);
  const lastNameRef = useRef(null);
  const genderRef = useRef(null);
  const phoneRef = useRef(null);
  const privacyPolicyRef = useRef(null);
  const contactForwardingRef = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(gender);

    if (name === "") {
      nameRef.current.focus();
      setError("Bitte gebe deinen Vornamen an.");
      return;
    }
    if (lastName === "") {
      lastNameRef.current.focus();
      setError("Bitte gebe deinen Nachnamen an.");
      return;
    }
    if (!gender) {
      console.log("TEST");
      genderRef.current.focus();
      setError("Bitte wähle dein Geschlecht aus.");
      return;
    }
    if (discordName === "") {
      discordNameRef.current.focus();
      setError("Bitte gebe deinen Discordnamen an.");
      return;
    }
    if (birthdate === "") {
      birthdateRef.current.focus();
      setError("Bitte gebe dein Geburtsdatum an.");
      return;
    }
    if (email === "") {
      emailRef.current.focus();
      setError("Bitte gebe deine E-Mail Adresse an.");
      return;
    }
    if (phone === "") {
      phoneRef.current.focus();
      setError("Bitte gebe deine Telefonnummer an.");
      return;
    }
    if (!privacyPolicy) {
      privacyPolicyRef.current.focus();
      setError("Bestätige bitte die Datenschutzerklärung.");
      return;
    }
    if (!contactForwarding) {
      contactForwardingRef.current.focus();
      setError("Bestätige bitte die Datenweitergabe an unsere Orga.");
      return;
    }
    setError(null);

    try {
      const response = await fetch("/api/helferRegistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          discordName,
          birthdate,
          strengths,
          desiredTeam,
          other,
          nickname,
          lastName,
          phone,
          assembly,
          deconstruction,
          gender,
          privacyPolicy,
          contactForwarding,
        }),
      });

      if (response.ok) {
        console.log("Daten erfolgreich eingefügt:"); //TODO: Löschen result.insertID
        setSuccess(
          "Deine Anmeldung war erfolgreich. Du erhälst in Kürze eine Bestätigung per E-Mail."
        );
      } else {
        const result = await response.json();
        setError("Fehler beim Speichern der Daten. Bitte Probiere es später noch einmal.");
        console.error("Fehler beim Einfügen der Daten:", result.error); //TODO: allternative bestätigunsseite wegen bereits eingegebener E-Mail
      }
    } catch (error) {
      setError("Fehler beim Speichern der Daten. Bitte Probiere es später noch einmal.");
      console.error("Fehler beim Einfügen der Daten:", error);
    }

    // Reset form error
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <p>Alle Felder mit * sind Pflichtfelder.</p>
      <InputOptionInput
        title="Name *"
        inputText={name}
        inputChange={(value) => setName(value)}
        inputRef={nameRef}
      />
      <InputOptionInput
        title="Nachname *"
        inputText={lastName}
        inputChange={(value) => setLastName(value)}
        inputRef={lastNameRef}
      />
      <InputOptionInput
        title="Rufname"
        inputText={nickname}
        inputChange={(value) => setNickname(value)}
      />
      <InputOptionRadio
        title="Geschlecht *"
        options={["Männlich", "Weiblich", "Divers"]}
        selectedOption={gender}
        inputChange={(value) => setGender(value)}
        inputRef={genderRef}
      />
      <InputOptionInput
        title="Discord Name *"
        inputText={discordName}
        inputChange={(value) => setDiscordName(value)}
        inputRef={discordNameRef}
      />
      <InputOptionInput
        title="Geburtsdatum *"
        inputText={birthdate}
        inputChange={(value) => setBirthdate(value)}
        type="date"
        inputRef={birthdateRef}
      />
      <InputOptionCheckbox
        title={"Aufbauhelfer"}
        isChecked={assembly}
        inputChange={(value) => setAssembly(value)}
      />
      <InputOptionCheckbox
        title={"Abbauhelfer"}
        isChecked={deconstruction}
        inputChange={(value) => setDeconstruction(value)}
      />
      <InputOptionInput
        title="E-Mail *"
        inputText={email}
        inputChange={(value) => setEmail(value)}
        inputRef={emailRef}
      />
      <InputOptionInput
        title="Telefonnummer *"
        inputText={phone}
        inputChange={(value) => setPhone(value)}
        inputRef={phoneRef}
      />
      <InputOptionInput
        title="Wunsch Team/Tätigkeit"
        inputText={desiredTeam}
        inputChange={(value) => setDesiredTeam(value)}
      />
      <InputOptionTextArea
        title="Stärken"
        inputText={strengths}
        inputChange={(value) => setStrengths(value)}
      />
      <InputOptionTextArea
        title="Sonstiges"
        inputText={other}
        inputChange={(value) => setOther(value)}
      />

      <InputOptionCheckbox
        title={
          "Ich habe die Datenschutzerklärung gelesen, verstanden und akzeptiere diese. Ich habe verstanden, dass ich die Zustimmung zur Datenschutzerklärung jederzeit widerrufen kann. Über den Widerruf habe ich die Passage in der Datenschutzerklärung gelesen und verstanden.*"
        }
        isChecked={privacyPolicy}
        inputChange={(value) => setPrivacyPolicy(value)}
        inputRef={privacyPolicyRef}
      />
      <InputOptionCheckbox
        title={"Dürfen wir, der zuständigen Orga deine Kontaktdaten weiter geben.*"}
        isChecked={contactForwarding}
        inputChange={(value) => setContactForwarding(value)}
        inputRef={contactForwardingRef}
      />
      {error && <ErrorText>{error}</ErrorText>}
      {success && <SuccessText>{success}</SuccessText>}
      <StyledButton type="submit">Anmelden</StyledButton>
    </StyledForm>
  );
}
