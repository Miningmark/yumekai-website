import Image from "next/image";
import styled from "styled-components";

//Components
import { DynamicContent, StyledLink } from "@/components/styledComponents";
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";

//Images
import hiruCosplay from "/public/assets/hirus/Hiru_Cosplay.png";

const HiruImage = styled.div`
  max-width: 200px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export default function CosplayWettbewerbePreise() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2>Cosplay Wettbewerbe - Jetzt anmelden und tolle Preise gewinnen!</h2>
          <p>
            Bei unseren Cosplay Wettbewerben erwarten euch dieses Jahr wieder großartige Gewinne,
            gesponsert von unseren tollen Sponsoren! Alle Platzierten erhalten zusätzlich eine
            Gewinntüte mit weiteren tollen Überraschungen. Die Anmeldung ist ab sofort möglich!
          </p>
        </div>
        <HiruImage>
          <Image
            src={hiruCosplay}
            alt="Cosplay Hiru"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </HiruImage>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent $widthpercent={50}>
          <h3>Cosplay Crafting Wettbewerb</h3>
          <p>Zeigt uns euer handwerkliches Können mit euren selbstgebauten Cosplays!</p>
          <ul style={{ marginLeft: "20px", marginTop: "5px" }}>
            <li>
              <strong>1. Platz:</strong> 50€ Gutschein von{" "}
              <StyledLink href="https://www.foamlord.de/" target="_blank" rel="noopener noreferrer">
                Foamlord
              </StyledLink>{" "}
              + 1x2 Weekendtickets{" "}
              <StyledLink
                href="https://comiccondornbirn.at/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ComicCon Dornbirn
              </StyledLink>{" "}
              + 40€ Steamgutschein{" "}
              <StyledLink
                href="https://Cosplayforum.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Cosplayforum.net
              </StyledLink>
            </li>
            <li>
              <strong>2. Platz:</strong> 30€ Gutschein von Foamlord
            </li>
            <li>
              <strong>3. Platz:</strong> 20€ Gutschein von Foamlord
            </li>
          </ul>
          <p style={{ marginTop: "5px", fontSize: "0.9em", fontStyle: "italic" }}>
            Für Gewinner aus der Schweiz wird der Preis von{" "}
            <StyledLink href="https://craftingshop.ch/" target="_blank" rel="noopener noreferrer">
              Craftingshop Schweiz
            </StyledLink>{" "}
            übernommen.
          </p>
          <div style={{ marginTop: "10px" }}>
            <StyledLinkAsButton href="/registration/cosplaycrafting">
              Zur Anmeldung Crafting Wettbewerb
            </StyledLinkAsButton>
          </div>
        </DynamicContent>

        <DynamicContent $widthpercent={50}>
          <h3>Cosplay Performance Wettbewerb</h3>
          <p>
            Bühne frei für euren großen Auftritt! Hier zählt eure Show – Ausdruck, Kreativität und
            Bühnenpräsenz.
          </p>
          <ul style={{ marginLeft: "20px", marginTop: "5px" }}>
            <li>
              <strong>1. Platz:</strong> Nintendo Switch Lite{" "}
              <StyledLink
                href="https://comiccondornbirn.at/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ComicCon Dornbirn
              </StyledLink>
            </li>
            <li>
              <strong>2. Platz:</strong> 1x2 Weekendtickets{" "}
              <StyledLink
                href="https://comiccondornbirn.at/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ComicCon Dornbirn
              </StyledLink>
            </li>
            <li>
              <strong>3. Platz:</strong> Überraschungsgewinn
            </li>
          </ul>
          <div style={{ marginTop: "10px" }}>
            <StyledLinkAsButton href="/registration/cosplayperformance">
              Zur Anmeldung Performance Wettbewerb
            </StyledLinkAsButton>
          </div>
        </DynamicContent>
      </div>
    </>
  );
}
