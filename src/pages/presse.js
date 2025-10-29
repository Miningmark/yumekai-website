import styled from "styled-components";

//Components
import { useState, useRef } from "react";
import { InputOptionTextArea, InputOptionInput } from "@/components/elements/InputComponents";
import {
  StyledButton,
  StyledForm,
  Spacer,
  StyledLink,
  ModalOverlay,
  SuccessText,
} from "@/components/styledComponents";
import { RequiredNote } from "@/components/styledInputComponents";
import CheckBox from "@/components/styled/CheckBox";
import LoadingAnimation from "@/components/styled/LoadingAnimation";
import {
  EVENT_ID,
  COUNTRIES,
} from "@/util/registration_options";

export default function Presse() {
  const [eventId, setEventId] = useState(EVENT_ID); //TODO: Event ID anpassen

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [street, setStreet] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

  const [workFunction, setWorkFunction] = useState("");
  const [medium, setMedium] = useState("");
  const [address, setAddress] = useState("");
  const [verification, setVerification] = useState("");
  const [message, setMessage] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [dataStorage, setDataStorage] = useState(false);

  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Refs for form fields
  const refs = {
    name: useRef(null),
        lastName: useRef(null),
    email: useRef(null),
    street: useRef(null),
        postalCode: useRef(null),
        city: useRef(null),
        country: useRef(null),
    workFunction: useRef(null),
    medium: useRef(null),
    address: useRef(null),
    verification: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = [];
    setErrors([]);

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

     //Straße Validierung
        const streetValidation = validateString(street, "Straße", 3, 50, true);
        if (!streetValidation.check)
          newErrors.push({ field: "street", message: streetValidation.description });
    
        //PLZ Validierung
        const postalCodeValidation = validateString(postalCode, "PLZ", 2, 10, true);
        if (!postalCodeValidation.check)
          newErrors.push({ field: "postalCode", message: postalCodeValidation.description });
    
        //Ort Validierung
        const cityValidation = validateString(city, "Ort", 2, 50, true);
        if (!cityValidation.check)
          newErrors.push({ field: "city", message: cityValidation.description });
    
        //Land Validierung
        const countryValidation = validateString(country, "Land", 2, 50, true);
        if (!countryValidation.check)
          newErrors.push({ field: "country", message: countryValidation.description });
    

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

        //Datenspeicherung
        if (!dataStorage)
          newErrors.push({ field: "dataStorage", message: "Datenspeicherung muss akzeptiert werden" });
    

    if (newErrors.length > 0) {
      setErrors(newErrors);
      const firstError = newErrors[0];
      if (refs[firstError.field]?.current) {
        refs[firstError.field].current.scrollIntoView({ behavior: "smooth", block: "center" });
        refs[firstError.field].current.focus();
      }
      return;
    }

    setLoading(true);

    const formData = new FormData();
        formData.append("eventId", eventId);
        formData.append("firstName", name.trim());
        formData.append("lastName", lastName.trim());
        formData.append("email", email.trim().toLowerCase());
        formData.append("street", street.trim());
        formData.append("postalCode", postalCode.trim());
        formData.append("city", city.trim());
        formData.append("country", country.trim());
        

    try {
      const response = await fetch("https://node.miningmark.de/api/v1/event/application/createPresseAkreditierung", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: name,
          lastName: lastName,
          email,
          street,
          postalCode,
          city,
          country,
          workFunction,
          medium,
          verification,
          message,
          privacyPolicy,
        }),
      });

      if (response.ok) {
        setSuccess("Presse Akkreditierung erfolgreich abgeschickt");
        setName("");
        setLastName("");
        setEmail("");
        setStreet("");
        setPostalCode("");
        setCity("");
        setCountry("");
        setWorkFunction("");
        setMedium("");
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
    setLoading(false);
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

      <Spacer id="ansprechpartner" />
      <h2>Ansprechpartner Presse</h2>

      <p>
        Das YumeKai-Presseteam erreichen Sie unter{" "}
        <StyledLink href="mailto:info@yumekai.de.">info@yumekai.de.</StyledLink>
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

      <Spacer id="akkreditierung" />
      <h2>Online Akkreditierung</h2>
      {!success && (
        <>
          {" "}
          <p>
            Felder mit <RequiredNote>*</RequiredNote> sind Pflichtfelder.
          </p>
          <StyledForm onSubmit={handleSubmit}>
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
              type="email"
              inputText={email}
              inputChange={(value) => setEmail(value)}
              require
              inputRef={refs.email}
              isError={errors.some((error) => error.field === "email")}
            />

            <Spacer />
                        <h2>Adresse</h2>
            
                        <InputOptionInput
                          title="Straße"
                          inputText={street}
                          inputChange={setStreet}
                          inputRef={refs.street}
                          isError={errors.some((error) => error.field === "street")}
                          require
                        />
                        <InputOptionInput
                          title="PLZ"
                          inputText={postalCode}
                          inputChange={setPostalCode}
                          inputRef={refs.postalCode}
                          isError={errors.some((error) => error.field === "postalCode")}
                          require
                        />
                        <InputOptionInput
                          title="Ort"
                          inputText={city}
                          inputChange={setCity}
                          inputRef={refs.city}
                          isError={errors.some((error) => error.field === "city")}
                          require
                        />
                        <InputOptionSelect
                          title="Land"
                          options={COUNTRIES}
                          inputText={country}
                          inputChange={(value) => setCountry(value)}
                          inputRef={refs.country}
                          isError={errors.some((error) => error.field === "country")}
                          require
                        />

            <Spacer />
            <h2>Presseangaben</h2>

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
