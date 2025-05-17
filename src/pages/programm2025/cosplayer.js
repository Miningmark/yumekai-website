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
import DokyatoImage from "/public/assets/images/yumekai2025/Dokyato_Image.png";
import EraliaImage from "/public/assets/images/yumekai2025/Eralia_Image.png";
import KorribanImage from "/public/assets/images/yumekai2025/Korriban_Image.png";
import MinekeImage from "/public/assets/images/yumekai2025/Mineke_Image.png";
import ZalinaImage from "/public/assets/images/yumekai2025/Zalina_Image.png";
//import ImoneeImage from "/public/assets/images/yumekai2025/Imonee_Image.png";


const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default function Cosplayer() {
  return (
    <>
      <ReturnButton link="/programm2025" />

      <h1 style={{ textAlign: "center" }}>Cosplayer</h1>

      <ContentContainer>

        <ContentCard
        title="Dokyato"
        imageSrc={DokyatoImage}
        altText="Bild von Dokyato"
        text={<p>Rudy, bekannt als <StyledLink href="https://www.instagram.com/dokyato/" target="_blank">Dokyato</StyledLink>, begeistert seit acht Jahren mit kreativem Makeup, Wig-Styling und Cosplays. Besonders beliebt sind seine humorvollen Inhalte mit seinem Vater. Auf der YumeKai 2025 könnt ihr ihn endlich persönlich kennenlernen!</p>}
      />

      <ContentCard
        title="Eralia"
        imageSrc={EraliaImage}
        altText="Bild von Eralia"
        text={<p>Unser Ehrengast aus den Niederlanden begeistert seit 2010 mit aufwendigen Designs aus Games wie Final Fantasy und Baldur&apos;s Gate. Internationale Wettbewerbsteilnahmen unterstreichen <StyledLink href="https://www.instagram.com/eralia_iwahana/" target="_blank">Eralias</StyledLink> Leidenschaft für Details, Handwerk und Performance.</p>}
      />
      <ContentCard
        title="Korriban Cosplay"
        imageSrc={KorribanImage}
        altText="Bild von Korriban"
        text={<p>Marten ist gelernter Maßschneider, Modedesigner und professioneller Cosplayer mit großer Star-Wars-Leidenschaft. Seit 2020 macht er Cosplay beruflich. Begleitet wird er von seiner Freundin Lordzwiebelback. Wir freuen uns auf dieses talentierte Duo!</p>}
      />
      <ContentCard
        title="Yaraiya Cosplay"
        imageSrc={MinekeImage}
        altText="Bild von Yaraiya"
        text={<p>Die niederländische Cosplayerin Mineke, bekannt als <StyledLink href="https://www.instagram.com/yaraiyacosplay/" target="_blank">Yaraiya</StyledLink>, ist erfahrene internationale Teilnehmerin bei WCS, C4 und anderen Wettbewerben. Sie liebt es, spektakuläre Requisiten zu bauen und ihr Wissen mit der Commuity zu teilen. </p>}
      />
      <ContentCard
        title="Zaylina"
        imageSrc={ZalinaImage}
        altText="Bild von Zaylina"
        text={<p><StyledLink href="https://www.instagram.com/yaraiyacosplay/" target="_blank">Zaylina</StyledLink> cosplayt seit 2017 mit viel Herzblut und Kreativität. Von aufwendigen Perücken bis hin zu selbstgemachtem Schmuck - sie lebt ihr Handwerk. Besonders liebt sie Charaktere aus Barbie Filmen, Animes, Disney und der Gaming-Welt. </p>}
      />
      <ContentCard
        title="Imonee Cosplay"
        imageSrc={ZalinaImage}
        altText="Bild von Zaylina"
        text={<p> Das preisgekrönte Cosplay Duo war bereits Finalist bei DCM, C4 und Teilnehmer beim WCS 2022 in Japan. Als Jury und beim Q&A auf der YumeKai teilen sie ihre Erfahrung mit euch. Triff sie auch am eigenen Stand! </p>}
      />

      </ContentContainer>
    </>
  );
}
