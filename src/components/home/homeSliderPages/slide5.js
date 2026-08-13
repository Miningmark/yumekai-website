import styled from "styled-components";
import Image from "next/image";

//Components
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";

//Images
import NiloBild from "/public/assets/images/yumekai2026/Nilo.jpg";
import ball04 from "/public/assets/images/yumekai2026/ball_08.jpg";
import performance4 from "/public/assets/images/yumekai2026/cosplayperformance_4.jpg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%ball_08;
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
  gap: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 15px 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: calc(50% - 10px);
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

const GalleryColumn = styled.div`
  width: calc(50% - 10px);
  height: 380px;
  position: relative;

  @media (max-width: 800px) {
    display: none;
  }
`;

const MobileGallery = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    width: 100%;
    max-width: 320px;
    gap: 8px;
  }
`;

const MobilePhoto = styled.div`
  position: relative;
  flex: 1;
  aspect-ratio: 3 / 4;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const Tag = styled.span`
  background-color: var(--tertiary-color);
  color: white;
  font-weight: bold;
  font-size: 0.85rem;
  padding: 4px 12px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 10px;
`;

const Headline = styled.p`
  font-size: 2.5rem;
  color: var(--primary-color);
  font-weight: bold;
  margin: 0 0 10px 0;

  @media (max-width: 800px) {
    font-size: 1.6rem;
    margin: 0 0 8px 0;
  }

  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`;

const Photo = styled.div`
  position: absolute;
  width: 170px;
  height: 230px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  border: 4px solid white;

  @media (max-width: 1000px) {
    width: 140px;
    height: 190px;
  }
`;

export default function Slide5() {
  return (
    <Wrapper>
      <Content>
        <Column>
          <Headline>Rückblick: YumeKai 2026</Headline>
          <Description>
            Showacts, Cosplay, Kunst und unvergessliche Momente – wirf einen Blick zurück auf ein
            wundervolles Convention-Wochenende.
          </Description>
          <MobileGallery>
            <MobilePhoto>
              <Image
                src={NiloBild}
                alt="NILO auf der YumeKai 2026"
                fill
                sizes="110px"
                style={{ objectFit: "cover" }}
              />
            </MobilePhoto>
            <MobilePhoto>
              <Image
                src={ball04}
                alt="Cosplayball YumeKai 2026"
                fill
                sizes="110px"
                style={{ objectFit: "cover" }}
              />
            </MobilePhoto>
            <MobilePhoto>
              <Image
                src={performance4}
                alt="Cosplay Performance YumeKai 2026"
                fill
                sizes="110px"
                style={{ objectFit: "cover" }}
              />
            </MobilePhoto>
          </MobileGallery>
          <StyledLinkAsButton href="/review/yumekai-2026">Zum Rückblick</StyledLinkAsButton>
        </Column>
        <GalleryColumn>
          <Photo style={{ top: "0", left: "70px", transform: "rotate(-6deg)", zIndex: 1 }}>
            <Image
              src={NiloBild}
              alt="NILO auf der YumeKai 2026"
              fill
              sizes="170px"
              style={{ objectFit: "cover" }}
            />
          </Photo>
          <Photo style={{ top: "90px", right: "10px", transform: "rotate(5deg)", zIndex: 2 }}>
            <Image
              src={ball04}
              alt="Cosplayball YumeKai 2026"
              fill
              sizes="170px"
              style={{ objectFit: "cover" }}
            />
          </Photo>
          <Photo style={{ bottom: "0", left: "220px", transform: "rotate(4deg)", zIndex: 3 }}>
            <Image
              src={performance4}
              alt="Cosplay Performance YumeKai 2026"
              fill
              sizes="170px"
              style={{ objectFit: "cover" }}
            />
          </Photo>
        </GalleryColumn>
      </Content>
    </Wrapper>
  );
}
