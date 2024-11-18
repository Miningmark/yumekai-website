import styled, { keyframes } from "styled-components";
import Image from "next/image";

//Components
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";

//logos and Images
import yumekoImage from "/public/assets/logo/Yumeko.png";
import speechBubble from "/public/assets/images/sonstiges/sprechblase1.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  background: linear-gradient(45deg, #ff1f1f63, #ffffff00);
  height: 600px;

  @media (max-width: 800px) {
    height: 400px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  max-width: 90%;
  height: 100%;
  position: relative;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(50% - 10px);
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
    display: ${({ $noview }) => ($noview ? "none" : "flex")};
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-10px) translateX(10px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
`;

const MovingImage = styled(Image)`
  animation: ${floatAnimation} 6s ease-in-out infinite;
  position: absolute;
  left: calc(50% - 120px);
  top: 110px;
`;

const StyledBox = styled.div`
  position: absolute;
  bottom: ${({ $bottomvalue }) => `${$bottomvalue}px`};
  left: 50%;
  transform: translateX(-50%) scale(1);
  background-color: ${({ $bgcolor }) => $bgcolor};
  border-radius: 10px;
  padding: 20px;
  color: ${({ $textcolor }) => $textcolor};
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;

  cursor: default;

  transition: 0.5s;

  &:hover {
    transform: translateX(-50%) scale(1.05);
    transition: 0.5s;
  }

  @media (max-width: 1000px) {
    font-size: 1.2rem;
  }
`;

const Headline = styled.p`
  font-size: 2.5rem;
  color: var(--primary-color);
  font-weight: bold;

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

export default function Slide1() {
  return (
    <>
      <Wrapper>
        <Content>
          <Column>
            <Headline>
              Willkommen bei <br />
              YumeKai
            </Headline>
            <p>
              Hier findest du nicht nur Informationen rund um unsere Veranstaltungen, sondern auch
              aktuelle Pläne und alle möglichen Details. Bei uns erhältst du alles, was du brauchst,
              um den Traum der YumeKai zu erleben – von Programmplänen bis hin zu unserem
              Ticketshop!
            </p>
            <StyledLinkAsButton href="/projects">Unsere Projekte</StyledLinkAsButton>
          </Column>
          <Column $noview="1">
            <div style={{ width: "auto", height: "400px" }}>
              <Image
                src={yumekoImage}
                alt="Maskottchen Yumeko"
                style={{
                  width: "auto",
                  height: "100%",
                }}
              />
            </div>
            <MovingImage
              src={speechBubble}
              alt="Speech Bubble"
              style={{
                width: "auto",
                height: "50px",
              }}
            />
            <StyledBox $bgcolor="white" $textcolor="var(--tertiary-color)" $bottomvalue="10">
              "Lebe deinen Traum"
            </StyledBox>
            <StyledBox $bgcolor="var(--tertiary-color)" $textcolor="white" $bottomvalue="60">
              Unser Motto
            </StyledBox>
          </Column>
        </Content>
      </Wrapper>
    </>
  );
}
