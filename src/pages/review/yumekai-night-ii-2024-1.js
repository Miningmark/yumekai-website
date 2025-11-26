import Image from "next/image";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

//Components
import { Spacer, SpacerEmpty, StyledLink } from "@/components/styledComponents";
import Columns2 from "@/components/elements/Columns2";
import ImageCarousel from "@/components/elements/ImageCarousel";

//Images
import yumekainight21Image from "/public/assets/images/yumekai-night-2-2024/yumekai-night-2-1.jpg";
import yumekainight210Image from "/public/assets/images/yumekai-night-2-2024/yumekai-night-2-10.jpg";
import yumekainight211Image from "/public/assets/images/yumekai-night-2-2024/yumekai-night-2-11.jpg";
import yumekainight22Image from "/public/assets/images/yumekai-night-2-2024/yumekai-night-2-2.jpg";
import yumekainight23Image from "/public/assets/images/yumekai-night-2-2024/yumekai-night-2-3.jpg";
import yumekainight24Image from "/public/assets/images/yumekai-night-2-2024/yumekai-night-2-4.jpg";
import yumekainight25Image from "/public/assets/images/yumekai-night-2-2024/yumekai-night-2-5.jpg";
import yumekainight26Image from "/public/assets/images/yumekai-night-2-2024/yumekai-night-2-6.jpg";
import yumekainight27Image from "/public/assets/images/yumekai-night-2-2024/yumekai-night-2-7.jpg";
import yumekainight28Image from "/public/assets/images/yumekai-night-2-2024/yumekai-night-2-8.jpg";
import yumekainight29Image from "/public/assets/images/yumekai-night-2-2024/yumekai-night-2-9.jpg";

import yumekainight2cosplaywettbewerbImage from "/public/assets/images/yumekai-night-2-2024/yumekai-night-2-cosplaywettbewerb.jpg";

import evelynImage from "/public/assets/images/yumekai-night-2-2024/Evelyn.jpg";
import palelittledragonImage from "/public/assets/images/yumekai-night-2-2024/PaleLittleDragon.jpg";
import skyforgerImage from "/public/assets/images/yumekai-night-2-2024/Skyforger.jpg";
import steffshizoImage from "/public/assets/images/yumekai-night-2-2024/SteffShizo.jpg";
import stellariaWorkshopImage from "/public/assets/images/yumekai-night-2-2024/Stellaria_Workshop.jpg";
import stevehengImage from "/public/assets/images/yumekai-night-2-2024/steveheng.jpg";
import thelatetheoryImage from "/public/assets/images/yumekai-night-2-2024/TheLateTheory.jpg";
import tiefseemonsterImage from "/public/assets/images/yumekai-night-2-2024/Tiefseemonster.jpg";
import arsiArsinoeImage from "/public/assets/images/yumekai-night-2-2024/Arsi_Arsinoe.jpg";

import flyinbbqImage from "/public/assets/images/yumekai-night-2-2024/FlyinBBQ.jpg";
import karaokeImage from "/public/assets/images/yumekai-night-2-2024/Karaoke.jpg";

import heldenschmiedeLogoImage from "/public/assets/images/yumekai2024/Heldenschmiede_Logo.jpg";
import otakuwonderlandImage from "/public/assets/images/yumekai2024/Otakuwonderland.jpg";
import tactokiImage from "/public/assets/images/yumekai2024/TacToki.jpg";
import cohekiImage from "/public/assets/images/yumekai2024/CoHeKi.jpg";

const sliderImages = [
  { image: yumekainight21Image, alt: "YumeKai Night II 2024", link: "" },
  { image: yumekainight210Image, alt: "YumeKai Night II 2024", link: "" },
  { image: yumekainight211Image, alt: "YumeKai Night II 2024", link: "" },
  { image: yumekainight22Image, alt: "YumeKai Night II 2024", link: "" },
  { image: yumekainight23Image, alt: "YumeKai Night II 2024", link: "" },
  { image: yumekainight24Image, alt: "YumeKai Night II 2024", link: "" },
  { image: yumekainight25Image, alt: "YumeKai Night II 2024", link: "" },
  { image: yumekainight26Image, alt: "YumeKai Night II 2024", link: "" },
  { image: yumekainight27Image, alt: "YumeKai Night II 2024", link: "" },
  { image: yumekainight28Image, alt: "YumeKai Night II 2024", link: "" },
  { image: yumekainight29Image, alt: "YumeKai Night II 2024", link: "" },
];

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const FigureContainer = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  width: calc((100% - 60px) / 4);

  @media (max-width: 1000px) {
    width: calc((100% - 40px) / 3);
  }

  @media (max-width: 800px) {
    width: calc((100% - 20px) / 2);
  }

  img {
    border-radius: 8px;
  }

  figcaption {
    font-size: 0.75rem;
    font-weight: bold;
    text-align: center;
    height: 0px;

    @media (max-width: 800px) {
      font-size: 0.6rem;
    }
  }

  p {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 20px 0;

    @media (max-width: 800px) {
      font-size: 1.1rem;
    }
  }

  a {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 20px 0;
    text-decoration: none;
    color: ${({ theme }) => theme.text};

    @media (max-width: 800px) {
      font-size: 1.1rem;
    }
  }
`;

export function ContentContainer({ src, alt = "Bild", caption = "", link }) {
  return (
    <FigureContainer>
      <Image src={src} alt={`Bild von ${alt}`} style={{ width: "100%", height: "auto" }} priority />
      <figcaption>{caption}</figcaption>
      {!link ? (
        <p>{alt}</p>
      ) : (
        <Link href={link} target="_blank">
          {alt}
        </Link>
      )}
    </FigureContainer>
  );
}

export default function YumeKaiNightII2024() {
  return (
    <>
      <h1>Rückblick YumeKai - Night II 2024</h1>

      <p>
        Taucht ein in die Highlights der YumeKai-Night am 2. November in Memmingen! 🎉 Die
        Anime-Party im Maximilian-Kolbe-Haus bot eine aufregende Mischung aus mitreißender
        Unterhaltung, vielfältigen Shopping-Möglichkeiten mit Händlern und Künstlern und packender
        Action. Ob Anime-Fan, Cosplayer oder Neugierige – hier war für jeden etwas dabei! 💫
        <br />
        <br />
        Ein Event voller Energie, das uns und hoffentlich euch in Erinnerung bleibt! 🎶✨
      </p>

      <ul>
        <li>
          <StyledLink href="#ehrengaeste">Ehrengäste</StyledLink>
        </li>
        <li>
          <StyledLink href="#aussteller">Händler</StyledLink>
        </li>
        <li>
          <StyledLink href="#programm">Programm</StyledLink>
        </li>
        <li>
          <StyledLink href="#danksagung">Danksagung</StyledLink>
        </li>
      </ul>

      <Spacer id="ehrengaeste" />

      <h2>Ehrengäste</h2>
      <p>
        Unsere großartigen Special Guests standen euch für Fotos, spannende Gespräche und kreative
        Inspiration zur Verfügung! Wir danken unserer fantastische Jury des Cosplay-Wettbewerbs:
        Evelyn, Tiefseemonster, Arsi_Arsinoe und PaleLittleDragon. Mit ihrem geschulten Blick und
        ihrer Leidenschaft für Cosplay sorgten sie für ein unvergessliches Highlight des Abends!
        🎭🎉
      </p>

      <ContentWrapper>
        <ContentContainer
          src={evelynImage}
          alt="Evelyn"
          link="https://www.instagram.com/evelyn_cosplay/"
        />
        <ContentContainer
          src={tiefseemonsterImage}
          alt="Tiefseemonster"
          link="https://www.instagram.com/tiefseemonster.krake/"
        />
        <ContentContainer
          src={arsiArsinoeImage}
          alt="Arsi_Arsinoë"
          link="https://www.instagram.com/arsi_arsinoe/"
        />
        <ContentContainer
          src={palelittledragonImage}
          alt="PaleLittleDragon"
          link="https://www.instagram.com/palelittledragon/"
        />
        <ContentContainer
          src={steffshizoImage}
          alt="SteffShizo & Pocahontas"
          link="https://www.tiktok.com/@steffshizo_official_"
        />
      </ContentWrapper>

      <Spacer id="aussteller" />

      <h2>Aussteller</h2>
      <p>
        Für alle Fans und Sammler bot die YumeKai - Night eine gut gemischte Auswahl an
        Shoppingmöglichkeiten! 🛍✨
        <br />
        <br />
        Unsere Händler und Künstler präsentierten ein vielfältiges Angebot, das keine Wünsche offen
        ließ. Von Merchandise und einzigartigen Accessoires bis hin zu handgefertigten Kunstwerken –
        hier konnte jeder Besucher fündig werden. Egal, ob ihr auf der Suche nach einem neuen Manga
        oder auf der Suche nach dem neuen Plüschi oder einfach nur stöbern wolltet, die Stände waren
        ein wahres Paradies für alle Fans. 🎨🎁
        <br />
        <br />
        Vielen Dank an unsere großartigen Händler und Künstler, die mit ihrem kreativen Engagement
        und ihren Produkten die Veranstaltung bereichert haben!
      </p>

      <ContentWrapper>
        <ContentContainer
          src={heldenschmiedeLogoImage}
          alt="Heldenschmiede"
          link="https://www.heldenschmiede.eu/"
        />
        <ContentContainer
          src={otakuwonderlandImage}
          alt="OtakuWonderland"
          link="https://www.instagram.com/otakuwonderland_de/"
        />
        <ContentContainer
          src={tactokiImage}
          alt="TacToki"
          link="https://www.instagram.com/tactoki/"
        />
        <ContentContainer src={cohekiImage} alt="CoHeKi e.V." link="https://coheki.de/" />

        <ContentContainer src={flyinbbqImage} alt="Flying BBQ Foodtruck" link="" />
      </ContentWrapper>

      <Spacer id="programm" />

      <h2>Programm</h2>
      <p>
        Der Abend bot ein vielfältiges Programm: mitreißende Musikacts sorgten für Stimmung, während
        der Gaming-Raum spannende Spieleerlebnisse bot. 🎮 Karaoke lud dazu ein, die Bühne zu
        erobern, und ein kreativer Workshop rundete das Angebot ab. Ein abwechslungsreicher Abend
        voller Unterhaltung! 🎤✨
      </p>

      <ContentWrapper>
        <ContentContainer src={stevehengImage} alt="DJ Steve Heng" link="" />
        <ContentContainer src={thelatetheoryImage} alt="The Late Theory" link="" />
        <ContentContainer src={stellariaWorkshopImage} alt="Stellaria Workshop" link="" />
        <ContentContainer src={skyforgerImage} alt="Skyforger" link="" />
        <ContentContainer src={karaokeImage} alt="Karaoke" link="" />
      </ContentWrapper>

      <SpacerEmpty id="danksagung" />
      <h2>Danksagung</h2>

      <p>
        Ein herzliches Dankeschön geht an alle, die die YumeKai - Night zu einem unvergesslichen
        Erlebnis gemacht haben! Ihr alle habt dazu beigetragen, diesen Abend mit Leben, Kreativität
        und unvergesslichen Momenten zu füllen. <br />
        <br />
        Unser Dank gilt zunächst unseren großartigen Gästen: PaleLittleDragon, Tiefseemonster,
        Evelyn und Arsinoë – eure inspirierenden Cosplays waren ein Highlight des Abends! Ein
        riesiges Dankeschön auch an die Band The Late Theory und DJ SteveHang, die mit genialer
        Musik und einer tollen Stimmung die Tanzfläche zum Beben gebracht haben.
        <br />
        <br />
        Ein besonderer Dank geht auch an unsere Händler, die mit ihren Angeboten das Event
        bereichert haben: Heldenschmiede, TacToki, OtakuWonderland und der Flying BBQ Foodtruck –
        ihr habt unseren Gästen eine fantastische Auswahl und noch mehr Gründe zum Staunen geboten.
        <br />
        <br />
        Ein weiterer Höhepunkt war der mitreißende Cheerings-Workshop, geleitet von der talentierten
        Tanzgruppe Stellaria. Eure Energie und euer Engagement haben alle Teilnehmer begeistert und
        die Stimmung auf ein neues Level gehoben.
        <br />
        <br />
        Natürlich möchten wir uns auch bei allen Teilnehmern und Besuchern bedanken, die so
        zahlreich erschienen sind. Eure kreativen Kostüme, eure Begeisterung auf der Tanzfläche und
        euer Einsatz bei der Party haben diesen Abend erst so magisch gemacht. Ihr habt die YumeKai
        - Night mit Leben gefüllt und zu einem besonderen Erlebnis gemacht!
        <br />
        <br />
        Nicht zu vergessen ist das Team von CoHeKi e.V., das mit der Spendenaktion und ihrem
        Engagement einen wertvollen Beitrag geleistet hat. Ein riesiges Dankeschön geht auch an alle
        Helfer und Organisatoren im Hintergrund – ohne eure Unterstützung, eure Leidenschaft und
        euren Einsatz wäre dieser Abend nicht möglich gewesen.
        <br />
        <br />
        Wir freuen uns schon jetzt auf das nächste Mal und darauf, mit euch allen wieder
        unvergessliche Momente zu erleben. 🌟
      </p>
    </>
  );
}
