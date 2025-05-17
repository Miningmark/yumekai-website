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
import CelloticDuetImage from "/public/assets/images/yumekai2025/25_Cellotic_Duet.jpg";
import andyKnoteImage from "/public/assets/images/yumekai2025/Andy_Knote.jpg";
import angeliqueImage from "/public/assets/images/yumekai2025/Angelique.jpg";
import cosplayVersteigerung1Image from "/public/assets/images/yumekai2025/Cosplay_Versteigerung_1.jpg";
import dominikAuerImage from "/public/assets/images/yumekai2025/Dominik_Auer.jpg";
import echoAneImage from "/public/assets/images/yumekai2025/Echo_Ane.png";
import juliaMeynenImage from "/public/assets/images/yumekai2025/Julia_Meynen_collage.jpg";
import junihuhnShinkaiImage from "/public/assets/images/yumekai2025/Junihuhn_Shinkai.png";
import lyriaIdolsignature2Image from "/public/assets/images/yumekai2025/Lyria_idolsignature_2.png";
import mionHHeartImage from "/public/assets/images/yumekai2025/MION_H_Heart.jpg";
import nerdDaddysImage from "/public/assets/images/yumekai2025/nerd_Daddys.jpg";
import petraScheeserImage from "/public/assets/images/yumekai2025/Petra_Scheeser.jpg";
import sebastianFitznerImage from "/public/assets/images/yumekai2025/Sebastian_Fitzner.jpg";
import stellariaYumekaiPromobild2025Image from "/public/assets/images/yumekai2025/Stellaria_YumeKai_Promobild_2025.png";

export default function Ehrengaeste() {
  return (
    <>
      <ReturnButton link="/programm2025" />
      <h1 style={{ textAlign: "center" }}>Ehrengäste</h1>
    </>
  );
}
