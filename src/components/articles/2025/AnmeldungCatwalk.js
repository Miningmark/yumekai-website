import styled from "styled-components";
import Image from "next/image";

//logos
import hiruCrafting from "/public/assets/hirus/Hiru_Workshop.png";
import { StyledLink } from "@/components/styledComponents";

const DynamicContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ $widthpercent }) => `calc(${$widthpercent}% - 10px)`};
  ${({ $maxwidth }) => $maxwidth && `max-width: ${$maxwidth}px;`}

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export default function AnmeldungCatwalk() {
  return (
    <>
      <h2>Cosplay Catwalk</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent
          $widthpercent={40}
          $maxwidth={300}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Image
            src={hiruCrafting}
            alt="Bild von Hiru"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </DynamicContent>
        <DynamicContent $widthpercent={60}>
          <p>
            Bei unserem Cosplay Catwalk könnt ihr in Kürze die tollsten Cosplays bewundern! Hier hat
            jeder die Chance, für ein paar Sekunden die Bühne zu erobern und sein Kostüm zu
            präsentieren. Dabei spielt es keine Rolle, was ihr cosplayt oder woher ihr kommt.
            <br />
            <br />
            Das Craften des Cosplays an sich steht hier im Mittelpunkt. Selbstverständlich haben
            alle Teilnehmer auch hier die Möglichkeit, etwas zu gewinnen! Du möchtest beim Cosplay
            Catwalk teilnehmen das kannst du{" "}
            <StyledLink href="/registration/registrationCosplayCatwalk">Hier</StyledLink> machen.
            <br />
            <br />
            Bitte beachte die{" "}
            <StyledLink
              href="/downloads/Cosplay_Catwalk_Wettbewerb_Regeln_und_Teilnahmevorraussetzungen_2025.pdf"
              target="_blank"
            >
              Teilnahmebedingungen
            </StyledLink>
            <br />
            <br />
            Bewertet werden eure Cosplays von:
          </p>

          <ul>
            <li>
              <StyledLink href="https://www.instagram.com/korribancosplay/" target="_blank">
                Korriban
              </StyledLink>
            </li>
            <li>
              <StyledLink href="https://www.instagram.com/dokyato/" target="_blank">
                Dokyato
              </StyledLink>
            </li>
            <li>
              <StyledLink href="https://www.instagram.com/yaraiyacosplay/" target="_blank">
                Mineke
              </StyledLink>
            </li>
            <li>
              <StyledLink href="/" target="_blank">
                ????
              </StyledLink>
            </li>
          </ul>
        </DynamicContent>
      </div>
    </>
  );
}
