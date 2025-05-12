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
import ReturnButton from "@/components/menu/ReturnButton";

//Images
import hiruKunstler from "/public/assets/hirus/Hiru_Kunstler.png";


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


export default function Kuenstler() {
  return (
    <>
      <ReturnButton link="/programm2025" />

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
