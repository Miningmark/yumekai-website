import styled from "styled-components";
import { useState, useRef } from "react";
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
  StyledLink,
  ModalOverlay,
  SuccessText,
} from "@/components/styledComponents";
import { RequiredNote } from "@/components/styledInputComponents";
import CheckBox from "@/components/styled/CheckBox";
import LoadingAnimation from "@/components/styled/LoadingAnimation";

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
  const [loading, setLoading] = useState(false);

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

    // Validierungslogik mit validateString
    // Name Validierung
    const nameValidation = validateString(name, "Vorname", 2, 50, true);
    if (!nameValidation.check)
      newErrors.push({ field: "name", message: nameValidation.description });

    // Nachname Validierung
    if (lastName) {
      const lastNameValidation = validateString(lastName, "Nachname");
      if (!lastNameValidation.check)
        newErrors.push({ field: "lastName", message: lastNameValidation.description });
    }

    // Email Validierung
    const emailValidation = validateString(email, "E-Mail", 2, 100, true, true);
    if (!emailValidation.check)
      newErrors.push({ field: "email", message: emailValidation.description });

    // Bereich Validierung
    const areaValidation = validateString(area, "Bereich", 2, 50, true);
    if (!areaValidation.check)
      newErrors.push({ field: "area", message: areaValidation.description });

    // Betreff Validierung
    const subjectValidation = validateString(subject, "Betreff", 2, 100, true);
    if (!subjectValidation.check)
      newErrors.push({ field: "subject", message: subjectValidation.description });

    // Nachricht Validierung
    const messageValidation = validateString(message, "Nachricht", 5, 2500, true);
    if (!messageValidation.check)
      newErrors.push({ field: "message", message: messageValidation.description });

    // Datenschutzerklärung Validierung
    if (!privacyPolicy)
      newErrors.push({
        field: "privacyPolicy",
        message: "Datenschutzerklärung nicht akzeptiert",
      });

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

    try {
      const response = await fetch("/api/contactRequest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          lastName: lastName.trim() || null,
          email: email.trim().toLowerCase(),
          area,
          subject: subject.trim(),
          message: message.trim(),
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

    setLoading(false);
  }

  return (
    <>
      <h1>Kontaktformular</h1>
      {!success && (
        <>
          <p>
            Mithilfe des nachfolgenden Formulars kannst du Kontakt zu uns aufnehmen. Unabhängig
            davon, ob du nun eine Presse- oder Händleranfrage hast oder einfach nur etwas anderes
            wissen möchtest, hier bist du richtig!
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
                "Workshops/Vorträge",
                "Sonstiges",
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
                  gelesen, verstanden und akzeptiere diese. Ich habe verstanden, dass ich die
                  Zustimmung zur Datenschutzerklärung jederzeit widerrufen kann. Über den Widerruf
                  habe ich die Passage in der Datenschutzerklärung gelesen und verstanden.
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
