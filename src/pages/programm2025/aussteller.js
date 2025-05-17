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
import cohekiImage from "/public/assets/images/yumekai2025/CoHeKi.png";
import cosplayAlpinImage from "/public/assets/images/yumekai2025/Cosplay_Alpin.jpg";
import cosquestLogoImage from "/public/assets/images/yumekai2025/CosQuest_Logo.png";
import cuglogoImage from "/public/assets/images/yumekai2025/CUGLogo.jpg";
import goVereinImage from "/public/assets/images/yumekai2025/Go_Verein.png";
import kdkasaiImage from "/public/assets/images/yumekai2025/KDKasai.png";
import mishiroBannerImage from "/public/assets/images/yumekai2025/Mishiro_Banner.png";
import ngeItashasImage from "/public/assets/images/yumekai2025/NGE_Itashas.jpg";
import nuclearBastardsImage from "/public/assets/images/yumekai2025/Nuclear_Bastards.jpg";
import towldayaustriaImage from "/public/assets/images/yumekai2025/TowldayAustria.jpg";
import vanityartImage from "/public/assets/images/yumekai2025/VanityArt.jpg";
import vividAriseEvImage from "/public/assets/images/yumekai2025/Vivid_Arise_eV.png";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch; // wichtig: sorgt dafür, dass Cards gleich hoch werden
  gap: 30px;
`;

export default function Haendler() {
  return (
    <>
      <ReturnButton link="/programm2025" />

      <h1 style={{ textAlign: "center" }}>Händler</h1>

      <ContentContainer></ContentContainer>
    </>
  );
}
