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
import cosplayfotosBearbeitenBasicsBisProfitricksPhilippImage from "/public/assets/hirus/Cosplay-Fotos_bearbeiten_Basics_bis_Profi-Tricks_-_Philipp.jpg";
import cosplayAlsBerufseinstiegAusbildungZumDamenmaßschneiderImage from "/public/assets/hirus/Cosplay_als_Berufseinstieg_-_Ausbildung_zum_Damenmaßschneider.png";
import desnescitrusErfolgreichImNetzImage from "/public/assets/hirus/DesnesCitrus_-_Erfolgreich_im_Netz.png";
import fylyColorierenMitAlkoholmarkerImage from "/public/assets/hirus/fyly_-_Colorieren_mit_Alkoholmarker.png";
import kanzashiKunstQuinnsArtImage from "/public/assets/hirus/Kanzashi_Kunst_-_Quinn's_Art.jpg";
import laratornowCroquisDieKunstDesSchnellenZeichnensImage from "/public/assets/hirus/LaraTornow_Croquis_-_die_Kunst_des_schnellen_Zeichnens.png";
import mayumiNagashifbcJcultureInteraktiveMangawerkstattImage from "/public/assets/hirus/Mayumi_Nagashi_FBC_J-Culture_-_Interaktive_Mangawerkstatt.png";
import minekeImage from "/public/assets/hirus/Mineke.jpg";
import nuclearBastardsImage from "/public/assets/hirus/Nuclear_Bastards.png";
import speedpaintingImage from "/public/assets/hirus/Speedpainting.jpg";
import vanessaHerzPropmakingFürBeginnerImage from "/public/assets/hirus/Vanessa_Herz_Propmaking_für_Beginner.jpg";
import zaylinaBallkleiderNaehenImage from "/public/assets/hirus/Zaylina_-_Ballkleider_nähen.jpg";

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

      <h1 style={{ textAlign: "center" }}>Workshops</h1>

      <ContentContainer>
        <ContentCard
          title="Cosplay als Berufseinstieg"
          subtitle="Ausbildung zum Damenmaßschneider"
          imageSrc={AliceMySecretImage}
          altText="Bild von Cosplay als Berufseinstieg"
          text={
            <p>
              Du hast Spaß am Nähen und könntest dir vorstellen, das auch beruflich zu machen, hast
              aber keine Ahnung, wo man da einsteigen soll? Du willst einen Profi ein bisschen aus
              dem Nähkästchen plaudern hören und dir Tipps & Tricks aus dem Handwerk holen? Dann
              bist du hier richtig! Ich bin Marten, bekannt als Korriban Cosplay. Mit einem
              Modedesign Studium, einer abgeschlossenen Ausbildung zum Damenmaßschneider und einer
              beginnenden Selbstständigkeit im Bereich High-End Cosplay bin ich der richtige
              Ansprechpartner, wenn du dein Hobby zum Beruf machen willst. Ich erzähle dir alles
              über die Ausbildung, meine Top 5 Tricks aus dem Handwerk, und am Ende kannst du Fragen
              stellen!
            </p>
          }
          instaLink="https://www.instagram.com/korribancosplay/"
          instaLinkText="Korriban Cosplay"
          maxWidth={550}
        />
        <ContentCard
          title="Propmaking für Beginner"
          imageSrc={AliceMySecretImage}
          altText="Bild von Propmaking für Beginner"
          text={
            <p>
              Hier gehen wir die Grundlagen des Propmakings durch: Von der Planung wie man überhaupt
              anfängt, über die vielfältigen Materialien, bis hin zur Durchführung sowie Priming und
              Painting. Auch was zu beachten ist zum Thema Sicherheit beim Arbeiten. zudem kann ich
              Teilnehmern noch Tipps zu ihren eigenen Projekten geben und aufkommende Fragen
              beantworten.
            </p>
          }
          instaLink="https://www.instagram.com/Akunyaah"
          instaLinkText="Akunyaah"
          maxWidth={550}
        />
        <ContentCard
          title="Erfolgreich im Netz"
          subtitle="Finde deine Nische!"
          imageSrc={AliceMySecretImage}
          altText="Bild von AliceMySecret"
          text={
            <p>
              Seit über 10 Jahren auf YouTube aktiv, teilt Desnes Citrus in diesem Workshop seine
              Erfahrungen aus erster Hand. Erfahre, warum eine klare Nische der Schlüssel zum Erfolg
              ist - und wie du deine findest! Von der Ideenfindung bis zur Optimierung deines
              Contents bekommst du praktische Tipps für deinen eigenen erfolgreichen Auftritt im
              Netz.
            </p>
          }
          instaLink="Youtube.com/DesnestheDwarf"
          instaLinkText="Desnes Citrus"
          maxWidth={550}
        />
        <ContentCard
          title="Colorieren mit Alkoholmarker für Anfänger"
          imageSrc={AliceMySecretImage}
          altText="Bild von AliceMySecret"
          text={
            <p>
              Heyo, ich bin Fyly und zeichne hauptberuflich Anime - noch ganz traditionell auf
              Papier. In diesem Workshop bringe ich euch mein Lieblingsmedium Alkoholmarker näher -
              angefangen von verschiedenen Markenstiften, Papier und Linern, bis hin zu meinen
              persönlichen Tricks & Tipps. Der perfekte Einstieg ins Thema colorieren für Anfänger!
            </p>
          }
          instaLink="https://www.instagram.com/fyly_draws/"
          instaLinkText="Fyly"
          maxWidth={550}
        />
        <ContentCard
          title="Arbeiten mit Leder für Cosplay"
          imageSrc={AliceMySecretImage}
          altText="Bild von AliceMySecret"
          text={
            <p>
              Du wolltest schon immer lernen, wie man Leder im Cosplay einsetzt? In diesem Workshop
              zeigt dir Eralia aus den Niederlanden die Basics des Lederhandwerks - von Werkzeugen
              über Materialien bis hin zu einfachen Techniken, die du direkt anwenden kannst. Eralia
              ist seit 2010 in der Cosplay-Szene aktiv und begeistert mit aufwendigen Game-Cosplays,
              zum Beispiel aus Final Fantasy oder Baldur&apos;s Gate. Eralias Erfahrungen haben them
              die Möglichkeit gegeben die Niederlande in den ECG finals in Paris zu vertreten. Jetzt
              teilt Eralia die eigene Leidenschaft fürs Crafting - in diesem fall für Lederarbeiten
              - mit euch! Lerne, wie du deinem Cosplay mit Leder ausschmücken kannst.
            </p>
          }
          instaLink="https://www.instagram.com/eralia_iwahana/"
          instaLinkText="Eralia_Iwahana"
          maxWidth={550}
        />
        <ContentCard
          title="1x1 Kanzashi Kunst"
          imageSrc={AliceMySecretImage}
          altText="Bild von AliceMySecret"
          text={
            <p>
              Tauche ein in die bunte Blütenwelt der Kanzashi Kunst. In meinem Workshop "1x1 der
              Kanzashi Kunst" dreht sich alles um die wichtigsten Materialien und Werkzeuge, die du
              für den Einstieg benötigst. Ich zeige dir, welche Stoffe, Schneidewerkzeuge und
              Zubehörteile du brauchst, um deine ersten wunderschönen Kanzashi-Blüten zu kreieren.
              Außerdem gebe ich dir praktische Tipps und Tricks, wo du das Material günstig und
              qualitativ hochwertig kaufen kannst. Damit steht deinem kreativen Start nichts mehr im
              Weg!
            </p>
          }
          instaLink="https://www.instagram.com/quinnskanzashi/"
          instaLinkText="Quinn"
          maxWidth={550}
        />
        <ContentCard
          title="Dokyato"
          imageSrc={AliceMySecretImage}
          altText="Bild von AliceMySecret"
          text={<p></p>}
          instaLink=""
          instaLinkText=""
          maxWidth={550}
        />
        <ContentCard
          title="Dokyato"
          imageSrc={AliceMySecretImage}
          altText="Bild von AliceMySecret"
          text={<p></p>}
          instaLink=""
          instaLinkText=""
          maxWidth={550}
        />
        <ContentCard
          title="Dokyato"
          imageSrc={AliceMySecretImage}
          altText="Bild von AliceMySecret"
          text={<p></p>}
          instaLink=""
          instaLinkText=""
          maxWidth={550}
        />
        <ContentCard
          title="Dokyato"
          imageSrc={AliceMySecretImage}
          altText="Bild von AliceMySecret"
          text={<p></p>}
          instaLink=""
          instaLinkText=""
          maxWidth={550}
        />
        <ContentCard
          title="Dokyato"
          imageSrc={AliceMySecretImage}
          altText="Bild von AliceMySecret"
          text={<p></p>}
          instaLink=""
          instaLinkText=""
          maxWidth={550}
        />
      </ContentContainer>
    </>
  );
}
