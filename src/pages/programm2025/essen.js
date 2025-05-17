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
                imageSrc={GrafImage}
                altText="Bild von GRAF FOOD ON WHEELS!"
                text={<p>Heiße HOT DOGS - natürlich auch vegan, würzige CURRYWURST mit knusprigen POMMES, herzhaftes GYROS mit POMMES, RINDSBURGER & CHEESEBURGER mit 150g Rindfleischpatty, feuriges CHILI CON CARNE und veganes CHILI SIN CARNE.</p>} 
        />
        <ContentCard
                title={"Vivid Arise Maid Café"}
                imageSrc={MaidCafeImage}
                altText="Logo von Vivid Arise Maid Café"
                text={<p>Taucht ein in eine Welt voller Magie und Charme! Wir laden euch herzlich im Maximilian-Kolbe-Haus ein, das einzigartige Erlebnis unseres Maid Cafés zu genießen. Unser Team von Vivid Arise freut sich darauf, euch mit einem Lächeln zu empfangen und einen unvergesslichen Aufenthalt zu gestalten.</p>}  
        />
        <ContentCard
                title={"Taiyaki"}
                imageSrc={TaiyakiImage}
                altText="Bild von Taiyaki"
                text={<p>Die Wie.MAI.KAI bietet die beliebten, fischförmigen Waffeln an, die traditionell mit süßer roter Bohnenpaste (Anko) gefüllt sind. Alternativ gibt es auch Varianten mit köstlicher Schokocreme. Der Name &quot;Taiyaki&quot; bedeutet wörtlich &quot;gebackene Meerbrasse&quot; und bezieht sich auf die charakteristische Form der Waffel.</p>}  
        />
        <ContentCard
                title={"bubbleTime"}
                imageSrc={BubbleTimeImage}
                altText="Logo von bubbleTime"
                text={<p>Angeboten werden alle möglichen Fruchtbubbletee, Milch Bubbletee und Klassik Bubble Tea.</p>}  
        />


        </ContentContainer>
    </>
  );
}