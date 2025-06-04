import styled, { keyframes } from "styled-components";
import Image from "next/image";

//Components
import Columns2 from "@/components/elements/Columns2";
import { StyledLink } from "@/components/styledComponents";

//Images
import emytsuuImage from "/public/assets/images/yumekai2024/Emytsuu_Zeichnung.jpg";
import leloImage from "/public/assets/images/yumekai2024/LeLo.jpg";
import miruImage from "/public/assets/images/yumekai2024/Miru.jpg";
import stellaImage from "/public/assets/images/yumekai2024/Stella.jpg";

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
      <Columns2
        left={
          <>
            <h2>YumeKai Zeichenwettbewerb 2025</h2>
            <p>
             Wir freuen uns, die Gewinner unseres Zeichenwettbewerbs bekannt zu geben! 
             Das Thema in diesem Jahr: Unser Maskottchen Hiru – gezeichnet in eurem 
             eigenen Stil. Die Künstler haben beeindruckende Kreativität bewiesen und 
             Hiru in einzigartigen, fantasievollen Interpretationen zum Leben erweckt.
            </p>
            <div style={{ justifyContent: "center" }} className="responsive-container">
              <div style={{ width: "60%", height: "auto" }}>
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
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Beste Technik</p>
                  <StyledImageHome
                    src={miruImage}
                    alt="Yumeko Interpretation von Miru"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>
                    von:{" "}
                    <StyledLink href={"https://www.instagram.com/mirukusagii/"} target="_blank" rel="noopener noreferrer">
                      Miru
                    </StyledLink>
                  </p>
                </>
              }
              right={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Kreativste Idee</p>
                  <StyledImageHome
                    src={leloImage}
                    alt="Yumeko Interpretation von LeLo"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>
                    von:{" "}
                    <StyledLink href={"https://www.instagram.com/hydrangea_bunny/"} target="_blank" rel="noopener noreferrer">
                      LeLo
                    </StyledLink>
                  </p>
                </>
              }
            />
            <Columns2
              mobile={2}
              left={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Gesamtbild Qualität</p>
                  <StyledImageHome
                    src={emytsuuImage}
                    alt="Yumeko Interpretation von Emytsuu"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>
                    von:{" "}
                    <StyledLink href={"https://www.instagram.com/emytsuu/"} target="_blank" rel="noopener noreferrer">
                      Emytsuu
                    </StyledLink>
                  </p>
                </>
              }
              right={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Favorit der Jury</p>
                  <StyledImageHome
                    src={stellaImage}
                    alt="Yumeko Interpretation von Stella"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>von: Stella</p>
                </>
              }
            />
          </>
        }
      />
    </>
  );
}
