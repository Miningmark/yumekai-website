import Image from "next/image";
import Link from "next/link";
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

// Import Icons
import IconUp from "/public/assets/icons/arrow_drop_up.svg";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const EntryLink = styled(StyledLink)`
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

const ReturnButton = styled(Link)`
  position: fixed;
  left: 50px;
  top: 100px;
  z-index: 9999;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f6f6f9;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  z-index: 900;
  opacity: 0.8;

  text-decoration: none;
  color: ${({ theme }) => theme.primaryColor};

  svg {
    fill: black;
    width: 40px;
    height: 40px;
    padding: 0;
  }

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
    opacity: 1;
  }
`;

export default function Kuenstler() {
  return (
    <>
      <ReturnButton href={"/programm2025"}>
        <IconUp />
      </ReturnButton>
      <h1 style={{ textAlign: "center" }}>Künstler</h1>

      <ContentContainer>
        <EntryLink href={"http://www.instagram.com/anara"} target="_blank">
          <LinkContent>
            <h2 style={{ textAlign: "center" }}>Anara Twice</h2>
            <Image
              src={hiruKunstler}
              alt="Logo von Anara Twice"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </LinkContent>
        </EntryLink>
      </ContentContainer>
    </>
  );
}
