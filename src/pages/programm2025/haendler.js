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
import HeldenschmiedeImage from "/public/assets/images/yumekai2025/Heldenschmiede_Logo.png";
import hiruKunstler from "/public/assets/hirus/Hiru_Kunstler.png";


const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default function Haendler() {
  return (
    <>
      <ReturnButton link="/programm2025" />

      <h1 style={{ textAlign: "center" }}>Händler</h1>

      <ContentContainer>

        <ContentCard
        title="Heldenschmiede"
        imageSrc={HeldenschmiedeImage}
        altText="Logo von Heldenschmiede"
        text={<p>Bei der <StyledLink href="https://www.heldenschmiede.eu/" target="_blank">Heldenschmiede</StyledLink> werden Manga- Brett- und Würfelfans glücklich! Ihr seid Fans japanischer und südkoreanischer Literatur? Dann seid ihr bei der Heldenschmiede genau richtig!<br />Egal ob Yuri, Yaoi, Isekai oder Shonen - hier bekommt ihr alles, was das Otaku-Herz begehrt! Hier jeder das Richtige für sich. Das ist definitiv der Place to Be für alle Fans!</p>}
      />
      <ContentCard
        title="Manga-Merch"
        imageSrc={HeldenschmiedeImage}
        altText="Logo von Heldenschmiede"
        text={<p>Hallo an alle, 
          wir von Manga-Merch.com sind ein Label, das sich darauf spezialisiert hat, Merchandise und Plüschies mit Designs deutscher und internationaler Künstler herzustellen. Unsere Künstler sind alle am Umsatz beteiligt und profitieren so direkt von jedem Verkauf. Ob Plüschie, Mousepad, Geldbörse oder Tasche. Schaut mal bei uns vorbei. Ihr werdet bestimmt etwas Schönes für euch finden. 
          Euer Manga-Merch.com-Team</p>}
      />
      <ContentCard
        title="Heldenschmiede"
        imageSrc={HeldenschmiedeImage}
        altText="Logo von Heldenschmiede"
        text={<p>Bei der <StyledLink href="https://www.heldenschmiede.eu/" target="_blank">Heldenschmiede</StyledLink> werden Manga- Brett- und Würfelfans glücklich! Ihr seid Fans japanischer und südkoreanischer Literatur? Dann seid ihr bei der Heldenschmiede genau richtig!<br />Egal ob Yuri, Yaoi, Isekai oder Shonen - hier bekommt ihr alles, was das Otaku-Herz begehrt! Hier jeder das Richtige für sich. Das ist definitiv der Place to Be für alle Fans!</p>}
      />
      <ContentCard
        title="Heldenschmiede"
        imageSrc={HeldenschmiedeImage}
        altText="Logo von Heldenschmiede"
        text={<p>Bei der <StyledLink href="https://www.heldenschmiede.eu/" target="_blank">Heldenschmiede</StyledLink> werden Manga- Brett- und Würfelfans glücklich! Ihr seid Fans japanischer und südkoreanischer Literatur? Dann seid ihr bei der Heldenschmiede genau richtig!<br />Egal ob Yuri, Yaoi, Isekai oder Shonen - hier bekommt ihr alles, was das Otaku-Herz begehrt! Hier jeder das Richtige für sich. Das ist definitiv der Place to Be für alle Fans!</p>}
      />
      

      </ContentContainer>
    </>
  );
}
