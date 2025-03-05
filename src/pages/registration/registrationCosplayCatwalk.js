/*
-Input Felder: Name, Nachname, Künstlername, Name des Charakters/Cosplays
-Upload Feld: Abgabe Crafting Tagebuch (PDF 2-6 DIN A4 Seiten) im PDF-Format
-Download der Teilnahmebedingungen

______________________________________________
Als deko gerne die Crafting Hiru
Falls dir noch mehr Felder einfallen, die wichtig wären, gerne Ergänzen




Bei unserem Cosplay Catwalk könnt ihr in Kürze die tollsten Cosplays bewundern! Hier hat jeder die Chance, für ein paar Sekunden die Bühne zu erobern und sein Kostüm zu präsentieren. Dabei spielt es keine Rolle, was ihr cosplayt oder woher ihr kommt. Das Craften des Cosplays an sich steht hier im Mittelpunkt. Selbstverständlich haben alle Teilnehmer auch hier die Möglichkeit, etwas zu gewinnen!


___________________
Gerne die Crafting Hiru (Workshop Hiru) als Bild verwenden, oder ein anderes, wenn Ihr eine coolere Idde habt
Link zu den teilnahmebdingungen / Anmeldeformular auf der Webseite

Jury:
-Korriban 
-Dokyato 
-Eralia  
-Mineke 
*/

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

export default function registrationCosplayCatwalk(){
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [confirmEmail, setConfirmEmail] = useState("");

    const [artistName, setArtistName] = useState("");
    const [characterName, setCharacterName] = useState("");

    const [file, setFile] = useState([]);
    const [previewUrl, setPreviewUrl] = useState([]);

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
    characterName: useRef(null),
    file: useRef(null),
    message: useRef(null),
    privacyPolicy: useRef(null),
    dataStorage: useRef(null),
    licensedMusic: useRef(null),
    pictureRights: useRef(null),
  };


  async function submit(event) {
    event.preventDefault();

    const newErrors = [];
    setErrors([]);
    setSuccess("");


  }



    return (<><h1>Anmeldung für Cosplay Catwalk</h1>
    <p>
      Sichert euch euren Platz auf der YumeKai 2025!
      <br />
      <br />
      Bitte beachtet die{" "}
      <StyledLink href="/" target="_blank">
        Teilnahme- und Auswahlbedingungen für den Cosplay Catwalk
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

      </>
      )}
      </>
      );
}
