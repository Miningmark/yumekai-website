import Image from "next/image";

//Components
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";
import { Spacer, StyledButton, StyledLink } from "@/components/styledComponents";

//Images
import hiruCosplay from "/public/assets/hirus/Hiru_Cosplay.png";

export default function AnmeldungYumeKaiWettbewerbe() {
  return (
    <>
        <h2>YumeKai Wettbewerbe</h2>

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
                <p>
                    Du bist kreativ? Wie wäre es, wenn du unser süßes Maskottchen Hiru in deinem ganz eigenen Stiel zum Leben erweckst? Lass deiner Fantasie freien lauf.
                    <br />
                    <StyledLink href="/downloads/Teilnahmebedingungen_Zeichenwettbewerb_2025.pdf" target="_blank">
                        Teilnahmebedingungen Zeichenwettbewerb
                    </StyledLink>
                </p>
                <StyledLinkAsButton href={"/registration/registrationArtContest"} target="_blank">
                    zur Anmeldung
                </StyledLinkAsButton>
            </div>
         
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