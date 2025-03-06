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
          <h2>Cosplay Catwalk</h2>
          <p>
            Bei unserem Cosplay Catwalk könnt ihr in Kürze die tollsten Cosplays bewundern! 
            Hier hat jeder die Chance, für ein paar Sekunden die Bühne zu erobern und sein 
            Kostüm zu präsentieren. Dabei spielt es keine Rolle, was ihr cosplayt oder woher 
            ihr kommt. Das Craften des Cosplays an sich steht hier im Mittelpunkt. Selbstverständlich 
            haben alle Teilnehmer auch hier die Möglichkeit, etwas zu gewinnen!

            Du möchtest beim Cosplay Catwalk teilnehmen das hannst du <StyledLink href="/shop">Hier</StyledLink> machen.
            Bitte beachte die   <StyledLink href="/" target="_blank">
            Teilnahmebedingungen</StyledLink>

            Bewertet werden eure Cosplays Von:
          </p>
          
          <ul>
            <li>
                <StyledLink href="/" target="_blank">
                    Korriban
                </StyledLink>
            </li>
            <li>
                <StyledLink href="/" target="_blank">
                    Dokyato
                </StyledLink>
            </li>
            <li>
                <StyledLink href="/" target="_blank">
                    Eralia
                </StyledLink>
            </li>
            <li>
                <StyledLink href="/" target="_blank">
                    Mineke
                </StyledLink>
            </li>
          </ul>

        </DynamicContent>
      </div>
    </>
  );
}
