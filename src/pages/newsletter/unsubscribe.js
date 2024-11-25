import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";

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

export default function Unsubscribe() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const tokenFromUrl = urlParams.get("token");
      setToken(tokenFromUrl);
    }
  }, []);

  useEffect(() => {
    if (token) {
      unsubscribeNewsletter().finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [token]);

  async function unsubscribeNewsletter() {
    try {
      const response = await fetch(`/api/newsletterRegistration?token=${token}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      if (response.status === 200) {
        setSuccess("Du hast dich erfolgreich vom YumeKai Newsletter abgemeldet");
      } else if (response.status === 400) {
        setSuccess("Du hast diesen Newsletter bereits abgemeldet.");
      } else {
        throw new Error("Fehler beim Abmelden");
      }
    } catch (error) {
      setError("Fehler beim Abmelden des Newsletters");
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "600px" }}>
        {success && (
          <>
            <h1>Du hast dich erfolgreich vom YumeKai Newsletter abgemeldet</h1>
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
            <p style={{ textAlign: "center" }}>
              Wir würden uns freuen, dich bald wieder begrüßen zu dürfen – du kannst dich jederzeit
              erneut anmelden!
            </p>
          </>
        )}

        {error && (
          <>
            <h1>Es ist ein Fehler aufgetreten</h1>
            <p style={{ color: "red" }}>{error}</p>
          </>
        )}

        {!token && !loading && <h1>Es ist ein Fehler aufgetreten</h1>}

        {loading && <h1>Lade...</h1>}

        <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
          <StyledLinkAsButton href={"/"}>Startseite</StyledLinkAsButton>
          <StyledLinkAsButton href={"/projects"}>Projekte</StyledLinkAsButton>
          <StyledLinkAsButton href={"/kontaktformular"}>Kontakt</StyledLinkAsButton>
        </div>
      </div>
    </div>
  );
}
