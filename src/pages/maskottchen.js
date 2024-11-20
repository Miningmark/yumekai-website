import styled, { keyframes } from "styled-components";
import Image from "next/image";

//Components
import Columns2 from "@/components/elements/Columns2";
import { StyledLink, SpacerEmpty, BoldText } from "@/components/styledComponents";

//logos
import hiru from "/public/assets/logo/Hiru.webp";
import yumekoImage from "/public/assets/logo/Yumeko.png";

const MaskottchenWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 800px) {
    margin-top: 10px;
  }
`;
const MaskottchenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 800px) {
    width: 35%;
  }
`;

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

export default function Maskottchen() {
  return (
    <>
      <h1>Unsere Maskottchen</h1>
      <p>
        Unsere Maskottchen begleiten euch auf der Reise druch die YumeKai. Egal ob hier auf der
        Website oder überall auf unseren Veranstaltungen! Hier stellen sich Yumeko und Hiru vor:
      </p>
      <SpacerEmpty />
      <Columns2
        left={
          <>
            <h2>Yumeko – ユメコ</h2>
            <p>
              <BoldText>Geschlecht:</BoldText> Weiblich
            </p>
            <p>
              <BoldText>Alter:</BoldText> 17
            </p>
            <p>
              <BoldText>Größe:</BoldText> 1,65m
            </p>
            <p>
              <BoldText>Haarfarbe:</BoldText> Merinorot
            </p>
            <p>
              <BoldText>Augenfarbe:</BoldText> Bernstein-Braun
            </p>
            <p>
              <BoldText>Persönlichkeit:</BoldText> Abenteuerlustig, Neugierig, Spontan,
              Tollpatschig, Nerd
            </p>
            <p>
              <BoldText>Hobby’s:</BoldText> Gaming, Cosplay, Reisen, mit Hiru Spielen
            </p>
            <br />
            <small>
              Yumeko wurde von{" "}
              <StyledLink href="https://www.instagram.com/anaratwice/" target="_blank">
                anaratwice
              </StyledLink>{" "}
              gezeichnet.
            </small>
          </>
        }
        right={
          <MaskottchenWrapper>
            <MaskottchenContainer>
              <StyledYumekoImage
                src={yumekoImage}
                alt="Maskottchen Yumeko"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </MaskottchenContainer>
          </MaskottchenWrapper>
        }
      />
      <SpacerEmpty />
      <Columns2
        reverse={true}
        left={
          <MaskottchenWrapper>
            <MaskottchenContainer>
              <StyledYumekoImage
                src={hiru}
                alt="Maskottchen Yumeko"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </MaskottchenContainer>
          </MaskottchenWrapper>
        }
        right={
          <>
            <h2>Hiru </h2>
            <p>Kurzform von Hirune 昼寝</p>
            <p>
              <BoldText>Geschlecht:</BoldText> Weiblich
            </p>
            <p>
              <BoldText>Alter:</BoldText> 5
            </p>
            <p>
              <BoldText>Größe:</BoldText> 0,26m
            </p>
            <p>
              <BoldText>Fell:</BoldText> Weiß, Amber bis Ginger
            </p>
            <p>
              <BoldText>Augenfarbe:</BoldText> Pumkin Orange
            </p>
            <p>
              <BoldText>Persönlichkeit:</BoldText> verspielt, neugierig, immer für ein Schläfchen
              Bereit, aufgeschlossen
            </p>
            <p>
              <BoldText>Hobby’s:</BoldText> Conventions-Erkunden, Mittagsschläfchen halten, Kuscheln
            </p>
            <br />
            <small>
              Yumeko wurde von{" "}
              <StyledLink href="https://www.instagram.com/wynrayzero/" target="_blank">
                wynrayzero
              </StyledLink>{" "}
              gezeichnet.
            </small>
          </>
        }
      />
    </>
  );
}
