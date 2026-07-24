import styled, { keyframes } from "styled-components";
import Image from "next/image";

//Components
import Columns2 from "@/components/elements/Columns2";
import { StyledLink } from "@/components/styledComponents";

//Images
import queerBunnyImage from "/public/assets/images/yumekai2026/QueerBunny.jpg";
import leloImage from "/public/assets/images/yumekai2026/lelo.jpg";
import evelusikImage from "/public/assets/images/yumekai2026/evelusik.png";
import lauraskketchesImage from "/public/assets/images/yumekai2026/lauraskketches.jpg";

//logos
import yumekoImage from "/public/assets/logo/Yumeko.png";

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

const StyledYumekoImage = styled.div`
  animation: ${floatAnimation} 5s ease-in-out infinite;
`;

const StyledImageHome = styled(Image)`
  width: 100%;
  border-radius: var(--border-radius-large);
`;

export default function YumeKaiZeichenwettbewerbGewinner26() {
  return (
    <>
      <h2>YumeKai Zeichenwettbewerb 2026 - Die Gewinner</h2>
      <Columns2
        left={
          <>
            <p>
              Wir freuen uns, die Gewinner unseres Zeichenwettbewerbs bekannt zu geben! Das Thema in
              diesem Jahr: Yumeko Worldwide - unser Maskottchen Yumeko in eurer eigenen
              Nationalität. Die Künstler haben mit unglaublicher Kreativität Yumeko in
              einzigartigen, kulturell inspirierten Interpretationen zum Leben erweckt.
            </p>
            <div style={{ justifyContent: "center" }} className="responsive-container">
              <div style={{ width: "80%", height: "auto" }}>
                <StyledYumekoImage>
                  <Image
                    src={yumekoImage}
                    alt="Maskottchen Yumeko"
                    sizes="(max-width: 1000px) 60vw, 480px"
                    style={{ width: "100%", height: "auto" }}
                  />
                </StyledYumekoImage>
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
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Jury Favorit / 1.Platz</p>
                  <StyledImageHome
                    src={lauraskketchesImage}
                    alt="Ein Lebkuchenherz für Yumeko von lauraskketches"
                    sizes="(max-width: 800px) 45vw, 290px"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>von: lauraskketches</p>
                </>
              }
              right={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Beste Kreativität</p>
                  <StyledImageHome
                    src={queerBunnyImage}
                    alt="Yumeko als Wolpertinger von QueerBunny"
                    sizes="(max-width: 800px) 45vw, 290px"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>von: QueerBunny</p>
                </>
              }
            />
            <Columns2
              mobile={2}
              left={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Beste Qualität</p>
                  <StyledImageHome
                    src={leloImage}
                    alt="Anno 1500 - Memminger Yumeko von Lelo"
                    sizes="(max-width: 800px) 45vw, 290px"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>von: Lelo</p>
                </>
              }
              right={
                <>
                  <p style={{ textAlign: "center", marginBottom: 0 }}>Beste Technik</p>
                  <StyledImageHome
                    src={evelusikImage}
                    alt="Tanz der Heimat von evelusik"
                    sizes="(max-width: 800px) 45vw, 290px"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                  <p style={{ textAlign: "center", marginTop: 0 }}>von: evelusik</p>
                </>
              }
            />
          </>
        }
      />
    </>
  );
}
