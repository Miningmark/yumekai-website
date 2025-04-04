import styled from "styled-components";
import { useState, useRef } from "react";
import Image from "next/image";

//Components
import { InputOptionInput } from "@/components/elements/InputComponents";
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
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

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
    setLoading(false);
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
        {!success && (
          <>
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

              <CheckBox
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
      </div>
    </div>
  );
}
