import Image from "next/image";
import styled, { keyframes, css } from "styled-components";
import { useState } from "react";

//Components
import { StyledLink } from "@/components/styledComponents";

//Images
import hiruKunstler from "/public/assets/hirus/Hiru_Kunstler.png";
import hiruHandler from "/public/assets/hirus/Hiru_Handler.png";
import hiruPlan from "/public/assets/hirus/Hiru_Plan.png";
import hiruWorkshop from "/public/assets/hirus/Hiru_Workshop.png";
import hiruSpielen from "/public/assets/hirus/Hiru_Spielen.png";
import hiruCosplay from "/public/assets/hirus/Hiru_Cosplay.png";
import hiruNormal from "/public/assets/hirus/Hiru.png";
import hiruEssen from "/public/assets/hirus/Hiru_Essen.png";
import hiruShowact from "/public/assets/hirus/Hiru_Showact.png";
import hiruBall from "/public/assets/hirus/Hiru_Ball.png";

const floatDiagonal = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(5px, -5px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 900px) {
    gap: 15px;
  }

  @media (max-width: 400px) {
    gap: 10px;
  }
`;

const MenuLink = styled(StyledLink)`
  width: calc(20% - 20px);
  min-width: 175px;
  max-width: 200px;
  aspect-ratio: 1 / 1;

  @media (max-width: 900px) {
    min-width: 150px;
    max-width: 175px;
  }
`;

const LinkContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.secondaryColor};

  h2 {
    text-align: center;
    margin: 10px 0;
    font-size: clamp(1.2rem, 2vw, 1.5rem);
  }

  &:hover {
    transform: translateY(-10px);
    transition: transform 0.3s ease-in-out;
  }
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease-in-out;

  ${({ animate }) =>
    animate &&
    css`
      animation: ${floatDiagonal} 2s ease-in-out infinite;
    `}
`;

const ImageWrapper = styled.div`
  height: calc(100% - 55px);
  aspect-ratio: 1 / 1;
  overflow: hidden;

  @media (max-width: 475px) {
    height: calc(100% - 45px);
  }
`;

const menuItems = [
  {
    title: "Allgemein",
    href: "/programm2025/allgemein",
    image: hiruPlan,
    alt: "Plan-Hiru",
  },
  {
    title: "Cosplayball",
    href: "/programm2025/cosplayball",
    image: hiruBall,
    alt: "Ball-Hiru",
  },
  {
    title: "Workshops",
    href: "/programm2025/workshops",
    image: hiruWorkshop,
    alt: "Workshop-Hiru",
  },
  {
    title: "Künstler",
    href: "/programm2025/kuenstler",
    image: hiruKunstler,
    alt: "Künstler-Hiru",
  },
  {
    title: "Händler",
    href: "/programm2025/haendler",
    image: hiruHandler,
    alt: "Händler-Hiru",
  },
  {
    title: "Ehrengäste",
    href: "/programm2025/ehrengaeste",
    image: hiruShowact,
    alt: "Showact-Hiru",
  },
  {
    title: "Cosplayer",
    href: "/programm2025/cosplayer",
    image: hiruCosplay,
    alt: "Cosplay-Hiru",
  },
  {
    title: "Aussteller",
    href: "/programm2025/aussteller",
    image: hiruNormal,
    alt: "Hiru",
  },
  {
    title: "Essen",
    href: "/programm2025/essen",
    image: hiruEssen,
    alt: "Essen-Hiru",
  },
  {
    title: "Wettbewerbe",
    href: "/programm2025/wettbewerbe",
    image: hiruSpielen,
    alt: "Spielen-Hiru",
  },
];

export default function Programm2025() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Programm 2025</h1>

      <MenuContainer>
        {menuItems.map((item, index) => (
          <MenuLink
            key={index}
            href={item.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <LinkContent>
              <h2>{item.title}</h2>
              <ImageWrapper>
                <StyledImage
                  src={item.image}
                  alt={item.alt}
                  animate={hoveredIndex === index}
                  priority
                />
              </ImageWrapper>
            </LinkContent>
          </MenuLink>
        ))}
      </MenuContainer>
    </>
  );
}
