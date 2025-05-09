import Image from "next/image";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

//Components
import Columns2 from "@/components/elements/Columns2";
import Columns3 from "@/components/elements/Columns3";
import RectangleContainer from "@/components/elements/RectangleContainer";
import MovingContentWrapper from "@/components/elements/MovingContent";
import { SpacerEmpty, StyledLink } from "@/components/styledComponents";

//Images
import hiruKunstler from "/public/assets/hirus/Hiru_Kunstler.png";
import hiruHandler from "/public/assets/hirus/Hiru_Handler.png";
import hiruPlan from "/public/assets/hirus/Hiru_Plan.png";
import hiruWorkshop from "/public/assets/hirus/Hiru_Workshop.png";
import hiruSpielen from "/public/assets/hirus/Hiru_Spielen.png";
import hiruCosplay from "/public/assets/hirus/Hiru_Cosplay.png";
import hiruNormal from "/public/assets/hirus/Hiru.png";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const MenuLink = styled(StyledLink)`
  width: calc(50% - 20px);
  max-width: 290px;
`;

const LinkContent = styled.div`
  width: 100%;
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    transition: transform 0.3s ease-in-out;
  }
`;

export default function Programm2025() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>YumeKai Programm 2025</h1>

      <MenuContainer>
        <MenuLink href={"/programm2025/kuenstler"}>
          <LinkContent>
            <h2 style={{ textAlign: "center" }}>Künstler</h2>
            <Image
              src={hiruKunstler}
              alt="Künstler-Hiru"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </LinkContent>
        </MenuLink>

        <MenuLink href={"/programm2025/haendler"}>
          <LinkContent>
            <h2 style={{ textAlign: "center" }}>Händler</h2>
            <Image
              src={hiruHandler}
              alt="Händler-Hiru"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </LinkContent>
        </MenuLink>

        <MenuLink href={"/programm2025/cosplay"}>
          <LinkContent>
            <h2 style={{ textAlign: "center" }}>Händler</h2>
            <Image
              src={hiruCosplay}
              alt="Cosplay-Hiru"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </LinkContent>
        </MenuLink>

        <MenuLink href={"/programm2025/plan"}>
          <LinkContent>
            <h2 style={{ textAlign: "center" }}>Händler</h2>
            <Image
              src={hiruPlan}
              alt="Plan-Hiru"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </LinkContent>
        </MenuLink>
      </MenuContainer>
    </>
  );
}
