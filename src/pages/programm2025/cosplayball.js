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
import hiruBallImage from "/public/assets/hirus/Hiru_Ball.png";
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";

const DynamicContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ $widthpercent }) => `calc(${$widthpercent}% - 10px)`};
  ${({ $maxwidth }) => $maxwidth && `max-width: ${$maxwidth}px;`}

  @media (max-width: 800px) {
    width: 100%;
  }
`;



export default function Cosplayball() {
  return (
    <>
      <ReturnButton link="/programm2025" />

      <h1 style={{ textAlign: "center" }}>Cosplayball - Ein Abend voller Magie & Musik </h1>

<div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent
          $widthpercent={40}
          $maxwidth={300}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Image
            src={hiruBallImage}
            alt="Hiru mit Ballkleid"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </DynamicContent>
        <DynamicContent $widthpercent={60}>
          <p>
            Beginn: 19:00 Uhr | Disco ab: 21:30 Uhr | Endet um 23:00 Uhr<br />
<br />
Taucht ein in eine zauberhafte Nacht voller Anmut, Musik und unvergesslicher Momente! Unser Cosplayball lädt euch ein, in festlicher Gewandung die Tanzfläche zu erobern und gemeinsam einen Abend der besonderen Art zu erleben.<br />
<br />
Für die passende musikalische Atmosphäre sorgt das Cellotic Duett des Cellotic Soundtrack Ensembles. Mit gefühlvollen und zugleich tanzbaren Cover-Versionen bekannter Anime-, Gaming- und Serien-Soundtracks begleiten sie euch durch den Abend und schaffen eine einzigartige Stimmung.<br />
<br />
Ab 21:30 Uhr verwandelt sich der Ball in eine stimmungsvolle Disco, bei der ihr zu euren Lieblingsbeats ausgelassen tanzen könnt.<br />
<br />
Haltet eure besonderen Augenblicke fest: Unser Foto Point vor Ort bietet die perfekte Kulisse für Erinnerungen, die bleiben.<br />
<br />
Bitte denkt daran: Der Cosplayball ist ein festlicher Anlass - wir bitten euch, in eleganter, balltauglicher Kleidung zu erscheinen.<br />
            
            Die genauen Vorgaben für euer Ballgewand findet ihr hier:{" "}
            <StyledLink href="/downloads/Ball_Regeln.pdf" target="_blank">
              Ballregeln
            </StyledLink>
            <br /><br />
Wir freuen uns auf einen stilvollen und zauberhaften Abend mit euch!
          </p>
        </DynamicContent>
      </div>
<p style={{textAlign:"center"}}>Ihr habt noch kein Ticket? dann sichert euch jetzt noch schnell eure ballkarten für den Cosplayball auf der YumeKai 2025!</p>
<div style={{display:"flex", justifyContent:"center"}}><StyledLinkAsButton  href="/shop">Ticketshop</StyledLinkAsButton></div>
      
            
    </>
  );
}
