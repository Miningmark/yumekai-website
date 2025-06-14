import styled, { keyframes } from "styled-components";
import Image from "next/image";

//Components
import Columns2 from "@/components/elements/Columns2";
import { StyledLink } from "@/components/styledComponents";

//Images
import emytsuuEinKuenstlerAufVierPfotenImage from "/public/assets/images/yumekai2025/Emytsuu_Ein_Kuenstler_auf_vier_Pfoten.jpg";
import or3oOnPawsBiblicallyAccurateHiruImage from "/public/assets/images/yumekai2025/or3o_on_paws_Biblically_accurate_Hiru.jpg";
import schl4fyOntoLuckAndNewAdventuresImage from "/public/assets/images/yumekai2025/Schl4fy_Onto_luck_and_new_adventures.jpg";
import valyrakaHiruImage from "/public/assets/images/yumekai2025/Valyraka_Hiru.jpg";

//logos
import hiruImage from "/public/assets/hirus/Hiru.png";

const floatAnimation = keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-15px) translateX(15px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
`;

const StyledYumekoImage = styled(Image)`
  animation: ${floatAnimation} 5s ease-in-out infinite;
`;

const StyledImageHome = styled(Image)`
  width: 100%;
  border-radius: var(--border-radius-large);
`;

export default function YumeKaiZeichenwettbewerb25() {
  return (
    <>
      <h2>YumeKai Zeichenwettbewerb 2025</h2>
      <Columns2
        left={
          <>
            <p>
              Wir freuen uns, die Gewinner unseres Zeichenwettbewerbs bekannt zu geben! Das Thema in
              diesem Jahr: Unser Maskottchen Hiru - gezeichnet in eurem eigenen Stil. Die Künstler
              haben beeindruckende Kreativität bewiesen und Hiru in einzigartigen, fantasievollen
              Interpretationen zum Leben erweckt.
            </p>
            <div style={{ justifyContent: "center" }} className="responsive-container">
              <div style={{ width: "80%", height: "auto" }}>
                <StyledYumekoImage
                  src={hiruImage}
                  alt="Maskottchen Yumeko"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </>
        }
        right={
          <>
            <Columns2
              mobile={2}
              left={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>1.Platz</p>
                  <StyledImageHome
                    src={schl4fyOntoLuckAndNewAdventuresImage}
                    alt="Hiru Version von Schl4fy"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>
                    von:{" "}
                    <StyledLink
                      href={"https://www.instagram.com/Schl4fmuetze/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Schl4fy
                    </StyledLink>
                  </p>
                </>
              }
              right={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Kreativste Idee</p>
                  <StyledImageHome
                    src={or3oOnPawsBiblicallyAccurateHiruImage}
                    alt="Hiru Version von or3o_on_paws"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>von: or3o_on_paws</p>
                </>
              }
            />
            <Columns2
              mobile={2}
              left={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Gesamtbild Qualität</p>
                  <StyledImageHome
                    src={emytsuuEinKuenstlerAufVierPfotenImage}
                    alt="Hiru Version von Emytsuu"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>
                    von:{" "}
                    <StyledLink
                      href={"https://www.instagram.com/emytsuu/"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Emytsuu
                    </StyledLink>
                  </p>
                </>
              }
              right={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Beste Technik</p>
                  <StyledImageHome
                    src={valyrakaHiruImage}
                    alt="Hiru Version von Valyraka"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>
                    von:{" "}
                    <StyledLink
                      href={"https://www.instagram.com/valyraka"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Valyraka
                    </StyledLink>
                  </p>
                </>
              }
            />
          </>
        }
      />
    </>
  );
}
