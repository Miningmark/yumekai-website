import styled from "styled-components";

//logos and Images
import sliderBackground from "/public/assets/images/sonstiges/slider_hintergrund2.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor4};
  background-image: url(${sliderBackground.src}); /* Dein Bildpfad */
  background-size: cover; /* Bild skalieren, um das Element zu füllen */
  background-position: center; /* Zentriert das Bild */
  background-repeat: no-repeat; /* Verhindert Wiederholungen */
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

const Headline = styled.p`
  font-size: 2.5rem;
  color: var(--primary-color);
  font-weight: bold;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

export default function Slide2() {
  return (
    <>
      <Wrapper>
        <Content>
          <Headline>
            09.05 - 10.05.2026 <br />
            Memmingen
          </Headline>
        </Content>
      </Wrapper>
    </>
  );
}
