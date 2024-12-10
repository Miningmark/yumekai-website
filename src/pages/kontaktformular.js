import styled from "styled-components";
import { useState, useRef } from "react";

//Components
import {
  InputOptionTextArea,
  InputOptionInput,
  InputOptionSelect,
} from "@/components/elements/InputComponents";
import { StyledButton, StyledForm, StyledLink } from "@/components/styledComponents";
import { RequiredNote } from "@/components/styledInputComponents";
import CheckBox from "@/components/styled/CheckBox";

export default function Kontaktformular() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [area, setArea] = useState("");
  const [subject, setSubject] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  // Refs for form fields
  const refs = {
    name: useRef(null),
    lastName: useRef(null),
    email: useRef(null),
    area: useRef(null),
    subject: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = [];
    setErrors([]);
    setSuccess("");

    if (!name.trim()) newErrors.push({ field: "name", message: "Vorname ist ein Pflichtfeld" });
    if (name.length < 3) newErrors.push({ field: "name", message: "Vorname  ist zu kurz" });
    if (name.length > 50) newErrors.push({ field: "name", message: "Vorname ist zu lang" });
    if (lastName.length < 3)
      newErrors.push({ field: "lastName", message: "Nachname  ist zu kurz" });
    if (lastName.length > 50)
      newErrors.push({ field: "lastName", message: "Nachname ist zu lang" });
    if (!email.trim()) newErrors.push({ field: "email", message: "E-Mail ist ein Pflichtfeld" });
    if (!email.includes("@"))
      newErrors.push({ field: "email", message: "E-Mail-Adresse ist ungültig" });
    if (email.length > 100)
      newErrors.push({
        field: "email",
        message: "E-Mail-Adresse darf maximal 100 Zeichen lang sein",
      });
    if (!area) newErrors.push({ field: "area", message: "Bereich ist ein Pflichtfeld" });
    if (!subject.trim())
      newErrors.push({ field: "subject", message: "Betreff ist ein Pflichtfeld" });
    if (subject.length < 5) newErrors.push({ field: "subject", message: "Betreff ist zu kurz" });
    if (subject.length > 100) newErrors.push({ field: "subject", message: "Betreff ist zu lang" });
    if (!message.trim())
      newErrors.push({ field: "message", message: "Nachricht ist ein Pflichtfeld" });
    if (message.length < 10)
      newErrors.push({
        field: "message",
        message: "Nachricht muss mindestens 10 Zeichen lang sein",
      });
    if (message.length > 500)
      newErrors.push({
        field: "message",
        message: "Nachricht darf maximal 500 Zeichen lang sein",
      });
    if (!privacyPolicy)
      newErrors.push({ field: "privacyPolicy", message: "Datenschutzerklärung nicht akzeptiert" });

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

    try {
      const response = await fetch("/api/contactRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastName: lastName || null,
          email,
          area,
          subject,
          message,
          privacyPolicy,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess("Kontaktanfrage erfolgreich abgeschickt");
        setName("");
        setLastName("");
        setEmail("");
        setArea("");
        setSubject("");
        setMessage("");
        setPrivacyPolicy(false);
        setErrors([]);
      } else {
        setErrors([
          {
            field: "general",
            message: "Fehler beim Absenden der Anfrage, Bitte versuche es später nochmal.",
          },
        ]);
      }
    } catch (error) {
      setErrors([
        {
          field: "general",
          message: "Fehler beim Absenden der Anfrage, Bitte versuche es später nochmal.",
        },
      ]);
    }

    // Reset form error
  }

  return (
    <>
      <h1>Kontaktformular</h1>
      <p>
        In nachfolgendem Formular kannst Du Kontakt zu uns aufnehmen. Egal, ob Du nun eine Presse-
        oder Händleranfrage hast oder Helfer werden magst oder einfach nur etwas anderes wissen
        möchtest, hier bist Du richtig!
      </p>
      <p>
        Felder mit <RequiredNote>*</RequiredNote> sind Pflichtfelder.
      </p>
      <StyledForm onSubmit={handleSubmit}>
        <InputOptionInput
          title="Vorname"
          inputText={name}
          inputChange={(value) => setName(value)}
          require
          inputRef={refs.name}
          isError={errors.some((error) => error.field === "name")}
        />
        <InputOptionInput
          title="Nachname"
          inputText={lastName}
          inputChange={(value) => setLastName(value)}
          inputRef={refs.lastName}
          isError={errors.some((error) => error.field === "lastName")}
        />
        <InputOptionInput
          title="E-Mail"
          type="email"
          inputText={email}
          inputChange={(value) => setEmail(value)}
          require
          inputRef={refs.email}
          isError={errors.some((error) => error.field === "email")}
        />
        <InputOptionSelect
          title="Bereich"
          options={[
            "Allgemeines",
            "Helfer",
            "Bühne",
            "Aussteller/Händler",
            "Tickets",
            "Presse",
            "Sonstiges",
            "Workshops/Vorträge",
          ]}
          inputText={area}
          inputChange={(value) => setArea(value)}
          require
          inputRef={refs.area}
          isError={errors.some((error) => error.field === "area")}
        />

        <InputOptionInput
          title="Betreff"
          inputText={subject}
          inputChange={(value) => setSubject(value)}
          require
          inputRef={refs.subject}
          isError={errors.some((error) => error.field === "subject")}
        />
        <InputOptionTextArea
          title="Nachricht"
          inputText={message}
          inputChange={(value) => setMessage(value)}
          require
          inputRef={refs.message}
          isError={errors.some((error) => error.field === "message")}
        />
        <CheckBox
          title={
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
          require
          inputRef={refs.privacyPolicy}
          isError={errors.some((error) => error.field === "privacyPolicy")}
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
        {success && <p style={{ color: "green" }}>{success}</p>}
        <StyledButton type="submit">Anmelden</StyledButton>
      </StyledForm>
    </>
  );
}
