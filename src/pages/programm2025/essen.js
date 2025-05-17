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
import BubbleTimeImage from "/public/assets/images/yumekai2025/BubbleTime_Image.png";
import GrafImage from "/public/assets/images/yumekai2025/Graf_Image.png";
import TaiyakiImage from "/public/assets/images/yumekai2025/Taiyaki_Image.png";
import MaidCafeImage from "/public/assets/images/yumekai2025/MaidCafe_Image.png";

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
                title={"GRAF FOOD ON WHEELS!"}
                imageSrc={MaidCafeImage}
                altText="Logo von AliceMySecret"
                text={<p></p>} 
        />
        <ContentCard
                title={"GRAF FOOD ON WHEELS!"}
                imageSrc={GrafImage}
                altText="Logo von AliceMySecret"
                text={<p></p>}  
        />
        <ContentCard
                title={"GRAF FOOD ON WHEELS!"}
                imageSrc={TaiyakiImage}
                altText="Logo von AliceMySecret"
                text={<p></p>}  
        />
        <ContentCard
                title={"GRAF FOOD ON WHEELS!"}
                imageSrc={BubbleTimeImage}
                altText="Logo von AliceMySecret"
                text={<p></p>}  
        />


        </ContentContainer>
    </>
  );
}