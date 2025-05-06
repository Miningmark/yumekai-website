import Image from "next/image";

//Components
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";
import { Spacer, StyledButton, StyledLink, DynamicContent } from "@/components/styledComponents";

//Images
import hiruCosplay from "/public/assets/hirus/Hiru_Cosplay.png";

export default function AnmeldungYumeKaiWettbewerbe() {
  return (
    <>
        <h2>YumeKai Wettbewerbs Anmeldungen</h2>

        <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent $widthpercent={70}>
            <div>
                <h3>Zeichenwettbewerb</h3>
                <p>
                    Du bist kreativ? Wie wäre es, wenn du unser süßes Maskottchen Hiru in deinem ganz eigenen Stil zum Leben erweckst? Lass deiner Fantasie freien lauf.
                    <br />
                    <StyledLink href="/downloads/Teilnahmebedingungen_Zeichenwettbewerb_2025.pdf" target="_blank">
                        Teilnahmebedingungen Zeichenwettbewerb
                    </StyledLink>
                </p>
                <StyledLinkAsButton href={"/registration/registrationArtContest"} target="_blank" rel="noopener noreferrer">
                    zur Anmeldung
                </StyledLinkAsButton>
            </div>

            <div>
                <h3>Cosplay Crafting Wettbewerb</h3>
                <p>
                    Du baust deine eigenen Cosplays? Wie wäre es, wenn du uns dein können beim Cosplay Crafting Wettbewerb zeigst.
                    <br />
                    <StyledLink href="/downloads/Cosplay_Catwalk_Wettbewerb_Regeln_und_Teilnahmevorraussetzungen_2025.pdf" target="_blank">
                        Teilnahmebedingungen Cosplay Crafting Wettbewerb
                    </StyledLink>
                </p>
                <StyledLinkAsButton href={"/registration/registrationCosplayCatwalk"} target="_blank" rel="noopener noreferrer">
                    zur Anmeldung
                </StyledLinkAsButton>
            </div>
         
            <div>
                <h3>Cosplay Performance Wettbewerb</h3>
                <p>
                    Du baust deine eigenen Cosplays? Wie wäre es, wenn du uns dein können auf der Bühne zeigst.
                    <br />
                    <StyledLink href="/downloads/Cosplay_Performance_Wettbewerb_Teilnahmevorraussetzungen.pdf" target="_blank">
                        Teilnahmebedingungen Cosplay Performance Wettbewerb
                    </StyledLink>
                </p>
                <StyledLinkAsButton href={"/registration/registrationCosplayPerformance"} target="_blank" rel="noopener noreferrer">
                    zur Anmeldung
                </StyledLinkAsButton>
            </div>

            <p>
                Bei allen Wettbewerben erwarten dich tolle Preise, es lohnt sich teilzunehmen.
            </p>

        </DynamicContent>

        <DynamicContent
          $widthpercent={30}
          $maxwidth={300}
          $align="center"
          $justify="center"
        >
          <Image
            src={hiruCosplay}
            alt="Cosplay Hiru"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </DynamicContent>
      </div>
    </>
  )
}