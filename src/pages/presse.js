import styled from "styled-components";

//Components
import { useState, useRef } from "react";
import { InputOptionTextArea, InputOptionInput } from "@/components/elements/InputComponents";
import { StyledButton, StyledForm, Spacer, StyledLink } from "@/components/styledComponents";
import { RequiredNote } from "@/components/styledInputComponents";
import CheckBox from "@/components/styled/CheckBox";

export default function Presse() {
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [workFunction, setWorkFunction] = useState("");
  const [medium, setMedium] = useState("");
  const [address, setAddress] = useState("");
  const [verification, setVerification] = useState("");
  const [message, setMessage] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");

  // Refs for form fields
  const refs = {
    contactPerson: useRef(null),
    email: useRef(null),
    workFunction: useRef(null),
    medium: useRef(null),
    address: useRef(null),
    verification: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = [];
    setErrors([]);

    // Validation
    if (!contactPerson.trim())
      newErrors.push({ field: "contactPerson", message: "Ansprechpartner ist ein Pflichtfeld" });
    if (contactPerson.length < 3)
      newErrors.push({ field: "contactPerson", message: "Ansprechpartner ist zu kurz" });
    if (contactPerson.length > 50)
      newErrors.push({ field: "contactPerson", message: "Ansprechpartner ist zu lang" });

    if (!email.trim()) newErrors.push({ field: "email", message: "E-Mail ist ein Pflichtfeld" });
    if (!email.includes("@"))
      newErrors.push({ field: "email", message: "E-Mail-Adresse ist ungültig" });
    if (email.length > 50) newErrors.push({ field: "email", message: "E-Mail ist zu lang" });

    if (workFunction.length < 3)
      newErrors.push({ field: "workFunction", message: "Berufsbezeichnung ist zu kurz" });
    if (workFunction.length > 50)
      newErrors.push({ field: "workFunction", message: "Berufsbezeichnung ist zu lang" });

    if (medium.length < 3) newErrors.push({ field: "medium", message: "Medium ist zu kurz" });
    if (medium.length > 100) newErrors.push({ field: "medium", message: "Medium ist zu lang" });

    if (address.length < 3) newErrors.push({ field: "address", message: "Adresse ist zu kurz" });
    if (address.length > 255) newErrors.push({ field: "address", message: "Adresse ist zu lang" });

    if (!verification.trim())
      newErrors.push({ field: "verification", message: "Nachweis ist ein Pflichtfeld" });
    if (verification.length < 3)
      newErrors.push({ field: "verification", message: "Nachweis ist zu kurz" });
    if (verification.length > 500)
      newErrors.push({ field: "verification", message: "Nachweis ist zu lang" });

    if (message.length < 10) newErrors.push({ field: "message", message: "Nachricht ist zu kurz" });
    if (message.length > 500)
      newErrors.push({ field: "message", message: "Nachricht ist zu lang" });

    if (!privacyPolicy)
      newErrors.push({ field: "privacyPolicy", message: "Datenschutzerklärung nicht akzeptiert" });

    if (newErrors.length > 0) {
      setErrors(newErrors);
      const firstError = newErrors[0];
      if (refs[firstError.field]?.current) {
        refs[firstError.field].current.scrollIntoView({ behavior: "smooth", block: "center" });
        refs[firstError.field].current.focus();
      }
      return;
    }

    try {
      const response = await fetch("/api/presseAkreditierung", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contactPerson,
          email,
          workFunction,
          medium,
          address,
          verification,
          message,
          privacyPolicy,
        }),
      });

      if (response.ok) {
        setSuccess("Presse Akkreditierung erfolgreich abgeschickt");
        setContactPerson("");
        setEmail("");
        setWorkFunction("");
        setMedium("");
        setAddress("");
        setVerification("");
        setMessage("");
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
    <>
      <h1>Akkreditierung für Presse-Vertreter</h1>
      <p>
        Sie möchten über die <strong>YumeKai</strong> berichten? Dann freuen wir uns über eine
        Online-Akkreditierung.
      </p>
      <strong>
        Eine Akkreditierung vor Ort ist nicht möglich. <br />
        <br />
        Inhaltverzeichnis
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
      <Spacer />
      <h2>Ansprechpartner Presse</h2>
      <p>
        Das YumeKai-Presseteam erreichen Sie unter{" "}
        <StyledLink href="mailto:info@yumekai.de.">info@yumekai.de.</StyledLink>
      </p>
      <Spacer />
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
        Falls Sie mehr als ein Ticket für Ihr Team benötigst, beschreiben Sie bitte genau, wer noch
        mitkommt und aus welchem Grund diese Person relevant für die Berichterstattung ist.
        <br /> Bitte schickten Sie uns nach der Berichterstattung die Links oder Scans zum Bericht
        per E-Mail, sodass wir sie in unserer Bibliothek aufnehmen und für zukünftige
        Akkreditierungsanfragen einbeziehen können.
        <br />
        <br /> Wir haben nur ein begrenztes Kontingent an Presse-Badges. Daher können wir nicht jede
        Anfrage annehmen. Eine Anfrage wird bei uns nach Relevanz bearbeitet: Das heißt, es könnten
        auch kleinere Projekte angenommen werden, obwohl wir vereinzelnd größeren Projekten absagen.{" "}
        <br />
        <br />
        Wir halten uns vor, Akkreditierungsanfragen ohne Nennung von Gründen abzusagen. Mögliche
        Gründe für eine Absage könnten z.B. kleinere Relevanz für uns sein oder
        Journalisten-Akkreditierungen in der Vergangenheit, bei denen keine Berichte entstanden
        sind.
      </p>
      <Spacer />
      <h2>Online Akkreditierung</h2>
      <p>
        Felder mit <RequiredNote>*</RequiredNote> sind Pflichtfelder.
      </p>
      <StyledForm onSubmit={handleSubmit}>
        <InputOptionInput
          title="Ansprechpartner"
          inputText={contactPerson}
          inputChange={(value) => setContactPerson(value)}
          require
          inputRef={refs.contactPerson}
          isError={errors.some((error) => error.field === "contactPerson")}
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
        <InputOptionInput
          title="Funktion"
          inputText={workFunction}
          inputChange={(value) => setWorkFunction(value)}
          inputRef={refs.workFunction}
          isError={errors.some((error) => error.field === "workFunction")}
        />
        <InputOptionInput
          title="Medium"
          inputText={medium}
          inputChange={(value) => setMedium(value)}
          inputRef={refs.medium}
          isError={errors.some((error) => error.field === "medium")}
        />
        <InputOptionTextArea
          title="Anschrift"
          inputText={address}
          inputChange={(value) => setAddress(value)}
          inputRef={refs.address}
          isError={errors.some((error) => error.field === "address")}
        />
        <InputOptionTextArea
          title="Nachweis "
          inputText={verification}
          inputChange={(value) => setVerification(value)}
          require
          inputRef={refs.verification}
          isError={errors.some((error) => error.field === "verification")}
        />
        <p style={{ marginTop: "-5px" }}>
          (Pressenachweis, einen schriftlichen Auftrag deines Chefredakteurs oder einen Nachweis
          über Fanprojekte, über welche du schreibst)
        </p>
        <InputOptionTextArea
          title="Nachricht"
          inputText={message}
          inputChange={(value) => setMessage(value)}
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
          inputRef={refs.privacyPolicy}
          isError={errors.some((error) => error.field === "privacyPolicy")}
          require
        />
        {success && <p style={{ color: "green" }}>{success}</p>}
        {errors.length > 0 && (
          <ul>
            {errors.map((error, index) => (
              <li key={index} style={{ color: "red" }}>
                {error.message}
              </li>
            ))}
          </ul>
        )}
        <StyledButton type="submit">Absenden</StyledButton>
      </StyledForm>
    </>
  );
}
