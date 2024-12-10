import styled from "styled-components";
import { useState, useRef } from "react";
import Image from "next/image";

//Components
import { InputOptionInput, InputOptionCheckbox } from "@/components/elements/InputComponents";
import { StyledButton, StyledForm, StyledLink } from "@/components/styledComponents";
import { RequiredNote } from "@/components/styledInputComponents";

//Images
import yumekoImage from "/public/assets/logo/Yumeko.png";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  // Refs for form fields
  const refs = {
    name: useRef(null),
    email: useRef(null),
    privacyPolicy: useRef(null),
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = [];
    setErrors([]);

    if (!name.trim()) newErrors.push({ field: "name", message: "Name ist ein Pflichtfeld" });
    if (name.length < 3) newErrors.push({ field: "name", message: "Name  ist zu kurz" });
    if (name.length > 50) newErrors.push({ field: "name", message: "Name ist zu lang" });

    if (!email.trim()) newErrors.push({ field: "email", message: "E-Mail ist ein Pflichtfeld" });
    if (!email.includes("@"))
      newErrors.push({ field: "email", message: "E-Mail-Adresse ist ungültig" });
    if (email.length > 100)
      newErrors.push({
        field: "email",
        message: "E-Mail-Adresse darf maximal 100 Zeichen lang sein",
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
      const response = await fetch("/api/newsletterRegistration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          privacyPolicy,
        }),
      });

      if (response.ok) {
        setSuccess(
          "Vielen Dank für deine Anmeldung. Du erhältst in Kürze eine Bestätigung per E-Mail."
        );
        setName("");
        setEmail("");
        setPrivacyPolicy(false);
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
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "600px" }}>
        <h1>Newsletter Anmeldung</h1>
        <ImageContainer>
          <Image
            src={yumekoImage}
            alt="Yumeko"
            style={{
              width: "150px",
              height: "auto",
            }}
          />
        </ImageContainer>
        <p>
          Melde dich hier für unseren Newsletter an und erhalte regelmäßig Informationen zu unseren
          Events und Projekten.
        </p>
        <p>
          Felder mit <RequiredNote>*</RequiredNote> sind Pflichtfelder.
        </p>
        <StyledForm onSubmit={handleSubmit}>
          <InputOptionInput
            title="Name"
            inputText={name}
            inputChange={(value) => setName(value)}
            require
            inputRef={refs.name}
            isError={errors.some((error) => error.field === "name")}
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

          <InputOptionCheckbox
            title={
              <p>
                Ja, ich möchte gerne regelmäßig den personalisierten Newsletter der YumeKai
                erhalten. <br />
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
          {success && <p style={{ color: "green" }}>{success}</p>}
          <StyledButton type="submit">Anmelden</StyledButton>
        </StyledForm>
      </div>
    </div>
  );
}
