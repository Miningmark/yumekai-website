
import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

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
    SuccessText,
    StyledLink,
    Spacer,
    ModalOverlay,
  } from "@/components/styledComponents";
  import { RequiredNote } from "@/components/styledInputComponents";
  import CheckBox from "@/components/styled/CheckBox";
  import FileUpload from "@/components/styled/FileUpload";
  import MultiFileUpload from "@/components/styled/MultiFileUpload";
  import LoadingAnimation from "@/components/styled/LoadingAnimation";
  import validateString from "@/util/inputCheck";

  const ACCEPTED_IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"];
const MAX_FILE_SIZE_MB = 10;

const isImageFile = (fileName) => {
    return ACCEPTED_IMAGE_EXTENSIONS.some((ext) => fileName.toLowerCase().endsWith(ext));
  };



export default function registrationArtContest(){
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");
    const [artistName, setArtistName] = useState("");

    const [website, setWebsite] = useState("");
    const [instagram, setInstagram] = useState("");
    const [file, setFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const [message, setMessage] = useState("");
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const [dataStorage, setDataStorage] = useState(false);
    const [pictureRights, setPictureRights] = useState(false);

    const [errors, setErrors] = useState([]);
    const [success, setSuccess] = useState("");
    const [fileError, setFileError] = useState("");
    const [loading, setLoading] = useState(false);

    const refs = {
        name: useRef(null),
        lastName: useRef(null),
        email: useRef(null),
        confirmEmail: useRef(null),
        artistName: useRef(null),
        website: useRef(null),
        instagram: useRef(null),
        file: useRef(null),
        message: useRef(null),
        privacyPolicy: useRef(null),
        dataStorage: useRef(null),
        pictureRights: useRef(null),
      };


      async function submit(event) {
        event.preventDefault();
    
        const newErrors = [];
        setErrors([]);
        setSuccess("");


      }

    return  (
        <>
            <h1>Anmeldung zum Zeichenwettbewerb</h1>
            <p>
                Du möchtest am Zeichenwettbewerb auf der YumeKai 2025 teilnehmen!
                <br />
                <br />
                Bitte beachtet die{" "}
                <StyledLink href="/" target="_blank">
                Teilnahme- und Auswahlbedingungen für den Zeichenwettbewerb
                </StyledLink>
                .
                <br />
                <br />
                Bei Fragen oder eventuellen Unklarheiten wendest du dich per E-Mail an:{" "}
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
              title="ArtistName"
              inputText={artistName}
              inputChange={(value) => setArtistName(value)}
              inputRef={refs.name}
              isError={errors.some((error) => error.field === "name")}
            />

            <Spacer />

            </StyledForm>
                </>
            )}
        </>
    );
}