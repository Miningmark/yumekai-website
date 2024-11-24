import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

//Components
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";

//Images
import yumekoImage from "/public/assets/logo/Yumeko.png";

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

export default function Confirm() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [token, setToken] = useState(null);

  const urlParams = new URLSearchParams(window.location.search);

  useEffect(() => {
    setToken(urlParams.get("token"));

    try {
      confirmNewsletter();
    } catch (error) {
      setError("Fehler beim Bestätigen des Newsletters");
    }
  }, [urlParams, token]);

  async function confirmNewsletter() {
    const response = await fetch(`/api/newsletter/confirm?token=${token}`);
    if (response.status == 200) {
      setSuccess("Du hast nun den YumeKai Newsletter abonniert");
    }
  }

  if (urlParams.get("token") === null) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: "600px" }}>
          <h1>Es ist ein Fehler aufgetreten</h1>
          <StyledLinkAsButton href={"/"}>Startseite</StyledLinkAsButton>
          <StyledLinkAsButton href={"/projects"}>Projekte</StyledLinkAsButton>
          <StyledLinkAsButton href={"/kontaktformular"}>Kontakt</StyledLinkAsButton>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "600px" }}>
        {success && (
          <>
            <h1>Du hast nun den YumeKai Newsletter abonniert</h1>
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
            <p>Du wirst in bald von uns hören.</p>
          </>
        )}

        {error && (
          <>
            <h1>Es ist ein Fehler aufgetreten</h1>
            <p style={{ color: "red" }}>{error}</p>
          </>
        )}

        <div>
          <StyledLinkAsButton href={"/"}>Startseite</StyledLinkAsButton>
          <StyledLinkAsButton href={"/projects"}>Projekte</StyledLinkAsButton>
          <StyledLinkAsButton href={"/kontaktformular"}>Kontakt</StyledLinkAsButton>
        </div>
      </div>
    </div>
  );
}
