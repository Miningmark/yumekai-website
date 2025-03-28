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
      <h2>Cosplay Crafting Wettbewerb</h2>
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
            Bei unserem Cosplay Crafting Wettbererb dreht sich alles um das Thema Crafting. Hier
            wird die Machart eures Cosplay von unserer talentierten Jurry bewertet. Zusätzlich
            bekommt jeder Teilnehmer die Chance für 30 Sekunden die Bühne zu erobern und sich in
            tolle Posen zu werfen für unser Publikum & unsere Fotografen. Selbstverständlich haben
            alle Teilnehmer auch hier die Möglichkeit, etwas zu gewinnen!
            <br />
            Die Anmeldung für den Cosplay Catwalk ist bis einschließlich des 22.05.2025 offen.
            <br />
            <br />
            Du möchtest beim Cosplay Crafting Wettbewerb teilnehmen? Das kannst du Hier machen.{" "}
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
              <StyledLink href="https://www.instagram.com/eralia_iwahana/" target="_blank">
                Eralia
              </StyledLink>
            </li>
          </ul>
        </DynamicContent>
      </div>
    </>
  );
}
