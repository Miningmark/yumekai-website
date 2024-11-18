import styled, { keyframes } from "styled-components";
import Image from "next/image";

//Components
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";

//logos and Images
import yumekoImage from "/public/assets/logo/Yumeko.png";
import hiruImage from "/public/assets/logo/Hiru.webp";

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
  flex-direction: column;
  align-items: center;
  width: 1200px;
  max-width: 90%;
  height: 100%;
  position: relative;
`;

const Headline = styled.p`
  font-size: 2.5rem;
  color: var(--primary-color);
  font-weight: bold;

  @media (max-width: 800px) {
    font-size: 2.25rem;
    margin: 10px 0 0 0;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  gap: 50px;

  @media (max-width: 800px) {
    height: 150px;
  }
`;

export default function Slide3() {
  return (
    <>
      <Wrapper>
        <Content>
          <Headline>Wer sind wir?</Headline>
          <ImageContainer>
            <div style={{ width: "auto", height: "100%" }}>
              <Image
                src={yumekoImage}
                alt="Maskottchen Yumeko"
                style={{
                  width: "auto",
                  height: "100%",
                }}
              />
            </div>
            <div style={{ width: "auto", height: "100%" }}>
              <Image
                src={hiruImage}
                alt="Maskottchen Yumeko"
                style={{
                  width: "auto",
                  height: "100%",
                }}
              />
            </div>
          </ImageContainer>
          <p>
            Hallo, wir sind Yumeko und Hiru, das bezaubernde Maskottchen der YumeKai mit ihrer
            Begleitung! Falls du neugierig darauf bist, uns besser kennenzulernen, laden wir dich
            herzlich dazu ein, unser ConHon-Eintrag zu lesen und mit uns in die Welt der YumeKai
            einzutauchen.
          </p>
          <StyledLinkAsButton href="/maskottchen">mehr infos über uns</StyledLinkAsButton>
        </Content>
      </Wrapper>
    </>
  );
}
