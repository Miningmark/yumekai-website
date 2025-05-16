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
import ContentCard from "@/components/elements/ContentCard";

//Images
import AliceMySecretImage from "/public/assets/images/yumekai2025/AliceMySecret_Image.png";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default function Kuenstler() {
  return (
    <>
      <ReturnButton link="/programm2025" />

      <h1 style={{ textAlign: "center" }}>Essen</h1>

      <ContentContainer>

        <ContentCard
                title={<StyledLink href="https://www.instagram.com/alicemysecret" target="_blank">Bubble Time</StyledLink>}
                imageSrc={AliceMySecretImage}
                altText="Logo von AliceMySecret" 
        />
        </ContentContainer>
    </>
  );
}