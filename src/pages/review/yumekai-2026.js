import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

// Components
import { Spacer, SpacerEmpty, StyledLink } from "@/components/styledComponents";
import Columns2 from "@/components/elements/Columns2";
import ImageCarousel from "@/components/elements/ImageCarousel";

// Images – Showacts & Ehrengäste
import StellariaBild from "/public/assets/images/yumekai2026/Showact Stellaria - Stellaria Logo mit Aufschrift.png";
import YuriHiranoBild from "/public/assets/images/yumekai2026/Yuri Hirano.png";
import MionBild from "/public/assets/images/yumekai2026/MION.png";
import NiloBild from "/public/assets/images/yumekai2026/Nilo.jpg";
import LyriaBild from "/public/assets/images/yumekai2026/Lyria.png";
import CelloticDuetsBild from "/public/assets/images/yumekai2026/Cellotic Duets.png";
import Lucky13Bild from "/public/assets/images/yumekai2026/Lucky13.jpg";
import NicolleGonsiorBild from "/public/assets/images/yumekai2026/Nicolle Gonsior.jpeg";
import MarieJeanneWideraBild from "/public/assets/images/yumekai2026/Marie-Jeanne Widera.jpeg";
import DJSteveHengBild from "/public/assets/images/yumekai2026/presse_steveheng_00.png";

// Images – Cosplayer
import XeniaBild from "/public/assets/images/yumekai2026/Xenia.jpg";
import KermiBild from "/public/assets/images/yumekai2026/Kermi.jpg";
import EraliasBild from "/public/assets/images/yumekai2026/Eralias.png";
import NekodanshiBild from "/public/assets/images/yumekai2026/Nekodanshi.jpg";
import WolfusBild from "/public/assets/images/yumekai2026/Barbie_TigaPhotography_WolfusCosplay.png";
import ScarlettBild from "/public/assets/images/yumekai2026/scarlet.jpg";

// Images – Aussteller
import SciFiNarischeBild from "/public/assets/images/yumekai2026/SciFi-Narische.png";
import ToweldayBild from "/public/assets/images/yumekai2026/Internationaler Handtuchtag.png";
import CosplayUnionBild from "/public/assets/images/yumekai2026/Cosplay-Union-Germany e.V..png";
import ConUtopischBild from "/public/assets/images/yumekai2026/ConUtopisch Events.png";
import NGEItashaBild from "/public/assets/images/yumekai2026/N.G.E. Itasha e.V..png";
import NuclearBastardsBild from "/public/assets/images/yumekai2026/Nuclear Bastards.png";
import HanaSpringBild from "/public/assets/images/yumekai2026/HanaSpringVerein.png";
import HokushinBild from "/public/assets/images/yumekai2026/Hokushin.png";
import CosplayAlpinBild from "/public/assets/images/yumekai2026/cosplay Alpin.png";
import Regiment405thBild from "/public/assets/images/yumekai2026/405th European Regiment.png";
import CoHeKiBild from "/public/assets/images/yumekai2026/CoHeKi e.V..png";
import CCDBild from "/public/assets/images/yumekai2026/CCD_Logo.png";

// Images – Händler
import OtakuArtBild from "/public/assets/images/yumekai2026/Otaku Art.png";
import SquiggzBild from "/public/assets/images/yumekai2026/Squiggz.png";
import HeldenschmiedeBild from "/public/assets/images/yumekai2026/Heldenschmiede.png";
import OtakuwonderlandBild from "/public/assets/images/yumekai2026/Otakuwonderland.png";
import BavarianWoodfoxBild from "/public/assets/images/yumekai2026/BavarianWoodfox.png";
import ColorfulMindBild from "/public/assets/images/yumekai2026/Colorful Mind.png";
import EuphonyBild from "/public/assets/images/yumekai2026/Euphony GmbH.png";
import AnimiBild from "/public/assets/images/yumekai2026/Animi.png";
import JennyGramsBild from "/public/assets/images/yumekai2026/Jenny Grams.png";
import ShigaFoodBild from "/public/assets/images/yumekai2026/Shiga Food GmbH.png";
import AkumuBild from "/public/assets/images/yumekai2026/Akumu.png";

// Images – Künstleratelier
import ImgAkunyaah from "/public/assets/images/yumekai2026/Akunyaah - KEIN INSTA.png";
import ImgGlueblade from "/public/assets/images/yumekai2026/Glueblade - KEIN INSTA.png";
import ImgJustDesign from "/public/assets/images/yumekai2026/@just_design_creation.png";
import ImgAnaratwice from "/public/assets/images/yumekai2026/@anaratwice.png";
import ImgYunuyei from "/public/assets/images/yumekai2026/@yunuyei.png";
import ImgYeikoArt from "/public/assets/images/yumekai2026/@yeiko_art.png";
import ImgNevadaArtShop from "/public/assets/images/yumekai2026/@nevada.art.shop.png";
import ImgAnimalixu from "/public/assets/images/yumekai2026/@animalixu.png";
import ImgKitsuKami from "/public/assets/images/yumekai2026/@kitsu_kami.png";
import ImgAliceMySecret from "/public/assets/images/yumekai2026/@alicemysecret.png";
import ImgEmytsuu from "/public/assets/images/yumekai2026/@emytsuu.png";
import ImgMinervasOwls from "/public/assets/images/yumekai2026/@minervasowls.png";
import ImgSteamSpirits from "/public/assets/images/yumekai2026/@steamspirits.png";
import ImgKirianYume from "/public/assets/images/yumekai2026/@kirianyume.png";
import ImgMyuchiisu from "/public/assets/images/yumekai2026/@myuchiisu.png";
import ImgArtOfTheValley from "/public/assets/images/yumekai2026/@art.of.the.valley.png";
import ImgChristalShadow from "/public/assets/images/yumekai2026/@christal.shad0w0.png";
import ImgJeyCreates from "/public/assets/images/yumekai2026/@jey.creates.png";
import ImgColortoglas from "/public/assets/images/yumekai2026/@colortoglas.png";
import ImgSaseiArt from "/public/assets/images/yumekai2026/@sasei.art.png";
import ImgCelezius from "/public/assets/images/yumekai2026/@celezius.png";
import ImgMissMalevolent from "/public/assets/images/yumekai2026/@miss_malevolent_.png";
import ImgStarsAndTrinkets from "/public/assets/images/yumekai2026/@starsandtrinketsshop.png";
import ImgFylyDraws from "/public/assets/images/yumekai2026/@fyly_draws.jpg";
import ImgTrashelsArt from "/public/assets/images/yumekai2026/@trashelsArt.png";
import ImgMikasMoonbrew from "/public/assets/images/yumekai2026/@MikasMoonbrew.png";
import ImgKeebokun from "/public/assets/images/yumekai2026/@keebokun.png";
import ImgBiggugusu from "/public/assets/images/yumekai2026/@biggugusu.png";
import ImgPingunerddarts from "/public/assets/images/yumekai2026/@pingunerddarts.png";
import ImgTeiSyokumoku from "/public/assets/images/yumekai2026/@tei_syokumoku.png";
import ImgYupiistar from "/public/assets/images/yumekai2026/@yupiistar.png";

// Images – Autoren
import ImgUlfFildebrandt from "/public/assets/images/yumekai2026/@ulffildebrandt.png";
import ImgNaomiHuber from "/public/assets/images/yumekai2026/@naomihuber_.png";
import ImgDelphoxsart from "/public/assets/images/yumekai2026/@delphoxsart.png";

// Images – Workshops
import AkunyaahWorkshopBild from "/public/assets/images/yumekai2026/Akunyaah Workshop.png";
import KermiWorkshopBild from "/public/assets/images/yumekai2026/Kermi Workshop.jpg";
import WolfusWorkshopBild from "/public/assets/images/yumekai2026/Wolfus Workshop.png";
import EraliaWorkshopBild from "/public/assets/images/yumekai2026/Eralia Workshop.png";
import NGEItashaWorkshopBild from "/public/assets/images/yumekai2026/N.G.E. Itasha e.V. workshop.png";
import YunuyeiBild from "/public/assets/images/yumekai2026/Yunuyei.png";
import NevadaBild from "/public/assets/images/yumekai2026/Nevada.png";

// Images – Essen
import BecherBistroBild from "/public/assets/images/yumekai2026/Becher Bistro.png";
import BrauhausLeppleBild from "/public/assets/images/yumekai2026/Brauhaus Lepple.png";
import DreamgardenBild from "/public/assets/images/yumekai2026/Dreamgarden.jpg";

// Images – Performance Teilnehmer
import performance1 from "/public/assets/images/yumekai2026/cosplayperformance_1.jpg";
import performance2 from "/public/assets/images/yumekai2026/cosplayperformance_2.jpg";
import performance3 from "/public/assets/images/yumekai2026/cosplayperformance_3.jpg";
import performance4 from "/public/assets/images/yumekai2026/cosplayperformance_4.jpg";
import performance5 from "/public/assets/images/yumekai2026/cosplayperformance_5.jpg";
import performance6 from "/public/assets/images/yumekai2026/cosplayperformance_6.jpg";
import performance7 from "/public/assets/images/yumekai2026/cosplayperformance_7.jpg";
import performance8 from "/public/assets/images/yumekai2026/cosplayperformance_8.jpg";
import performance9 from "/public/assets/images/yumekai2026/cosplayperformance_9.jpg";

import queerBunnyImage from "/public/assets/images/yumekai2026/zeichenwettbewerb/QueerBunny.png";
import leloImage from "/public/assets/images/yumekai2026/zeichenwettbewerb/Lelo.png";
import evelusikImage from "/public/assets/images/yumekai2026/zeichenwettbewerb/Evelusik.png";
import lauraskketchesImage from "/public/assets/images/yumekai2026/zeichenwettbewerb/lauraskketches.png";

const performanceImages = [
  { image: performance1, alt: "Performance 1", link: "" },
  { image: performance2, alt: "Performance 2", link: "" },
  { image: performance3, alt: "Performance 3", link: "" },
  { image: performance4, alt: "Performance 4", link: "" },
  { image: performance5, alt: "Performance 5", link: "" },
  { image: performance6, alt: "Performance 6", link: "" },
  { image: performance7, alt: "Performance 7", link: "" },
  { image: performance8, alt: "Performance 8", link: "" },
  { image: performance9, alt: "Performance 9", link: "" },
];

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ContentContainer2 = styled.div`
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

  p {
    font-size: 1.3rem;
    margin: 20px 0;

    @media (max-width: 800px) {
      font-size: 1.1rem;
    }
  }

  a {
    font-size: 1.3rem;
    margin: 20px 0;

    @media (max-width: 800px) {
      font-size: 1.1rem;
    }
  }
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

export default function YumeKai2026() {
  return (
    <>
      <h1>Rückblick YumeKai 2026</h1>
      <p>
        Am 09. und 10. Mai 2026 fand die dritte YumeKai in der Stadthalle Memmingen statt. Hier
        könnt ihr nochmal Eindrücke der Convention durch Bilder erleben!
      </p>

      <ul>
        <li>
          <StyledLink href="#showacts">Showacts &amp; Ehrengäste</StyledLink>
        </li>
        <li>
          <StyledLink href="#cosplayer">Cosplayer</StyledLink>
        </li>
        <li>
          <StyledLink href="#aussteller">Aussteller</StyledLink>
        </li>
        <li>
          <StyledLink href="#haendler">Händler</StyledLink>
        </li>
        <li>
          <StyledLink href="#kuenstleratelier">Künstleratelier</StyledLink>
        </li>
        <li>
          <StyledLink href="#autoren">Autoren</StyledLink>
        </li>
        <li>
          <StyledLink href="#workshops">Workshops</StyledLink>
        </li>
        <li>
          <StyledLink href="#essen">Essen</StyledLink>
        </li>
        <li>
          <StyledLink href="#cosplay-wettbewerbe">Cosplay Wettbewerbe</StyledLink>
        </li>
        <li>
          <StyledLink href="#zeichenwettbewerb">Zeichen Wettbewerb</StyledLink>
        </li>
        <li>
          <StyledLink href="#danksagung">Danksagung</StyledLink>
        </li>
      </ul>

      <Spacer id="showacts" />
      <h2>Showacts &amp; Ehrengäste</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <ContentWrapper>
        <ContentContainer
          src={YuriHiranoBild}
          alt="Yuri Hirano"
          link="https://www.instagram.com/yuri_hirano_official/"
        />
        <ContentContainer
          src={MionBild}
          alt="MION"
          link="https://www.instagram.com/mion_official/"
        />
        <ContentContainer
          src={NiloBild}
          alt="NILO"
          link="https://www.instagram.com/nilo_music_official/"
        />
        <ContentContainer
          src={StellariaBild}
          alt="Stellaria"
          link="https://www.instagram.com/stellaria.idols/"
        />
        <ContentContainer src={LyriaBild} alt="Lyria" link="https://www.instagram.com/lyriavt/" />
        <ContentContainer
          src={CelloticDuetsBild}
          alt="Cellotic Duets"
          link="https://linktr.ee/cellotic"
        />
        <ContentContainer src={Lucky13Bild} alt="Lucky 13" />
        <ContentContainer src={NicolleGonsiorBild} alt="Nicolle Gonsior" />
        <ContentContainer src={MarieJeanneWideraBild} alt="Marie-Jeanne Widera" />
        <ContentContainer
          src={DJSteveHengBild}
          alt="DJ Steve Heng"
          link="https://www.instagram.com/breakouttv/"
        />
      </ContentWrapper>

      <Spacer id="cosplayer" />
      <h2>Cosplayer</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <ContentWrapper>
        <ContentContainer src={XeniaBild} alt="Xenia" link="https://www.instagram.com/xenia.cos/" />
        <ContentContainer
          src={WolfusBild}
          alt="Wolfus"
          link="https://www.instagram.com/wolfus.cos/"
        />
        <ContentContainer
          src={ScarlettBild}
          alt="Scarlett Sirene"
          link="https://www.instagram.com/scarlett.sirene/"
        />
        <ContentContainer src={KermiBild} alt="Kermi" link="https://www.instagram.com/kermi.cos/" />
        <ContentContainer
          src={EraliasBild}
          alt="Eralia"
          link="https://www.instagram.com/eralia_iwahana/"
        />
        <ContentContainer
          src={NekodanshiBild}
          alt="Nekodanshi"
          link="https://www.instagram.com/nekodanshi.de/"
        />
      </ContentWrapper>

      <Spacer id="aussteller" />
      <h2>Aussteller</h2>
      <p>
        Unsere Aussteller und Vereine haben euch wieder die unterschiedlichsten Themengebiete
        nähergebracht. Von Samurai-Vorführungen der Hokushin Ittō-ryū über beeindruckende
        Halo-Rüstungen des 405th European Regiments bis hin zu den apokalyptischen Kostümen der
        Nuclear Bastards war für jeden etwas dabei.
        <br />
        <br />
        Der CoHeKi e.V. sammelte wieder für Kinder in Not, Cosplay Alpin und die Cosplay-Union
        vernetzten die Community. Beim N.G.E.-Itasha Stand gab es auch draußen mit den tollen
        Fahrzeugen viel zu entdecken.
      </p>
      <ContentWrapper>
        <ContentContainer src={SciFiNarischeBild} alt="SciFi-Narische" />
        <ContentContainer src={ToweldayBild} alt="Towelday Austria" />
        <ContentContainer src={CosplayUnionBild} alt="Cosplay-Union-Germany" />
        <ContentContainer src={ConUtopischBild} alt="ConUtopisch Events" />
        <ContentContainer src={NGEItashaBild} alt="N.G.E.-Itasha e.V." />
        <ContentContainer src={NuclearBastardsBild} alt="Nuclear Bastards" />
        <ContentContainer src={HanaSpringBild} alt="Hana &amp; Spring" />
        <ContentContainer src={HokushinBild} alt="Hokushin Ittō-ryū" />
        <ContentContainer src={CosplayAlpinBild} alt="Cosplay Alpin" />
        <ContentContainer src={Regiment405thBild} alt="405th European Regiment" />
        <ContentContainer src={CoHeKiBild} alt="CoHeKi e.V." />
        <ContentContainer src={CCDBild} alt="CCD" />
      </ContentWrapper>

      <Spacer id="haendler" />
      <h2>Händler</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <ContentWrapper>
        <ContentContainer src={ColorfulMindBild} alt="Colorful Mind Tattoo-Atelier" />
        <ContentContainer src={EuphonyBild} alt="Euphony GmbH" />
        <ContentContainer src={OtakuArtBild} alt="Otaku Art" />
        <ContentContainer src={SquiggzBild} alt="Squiggz" />
        <ContentContainer src={HeldenschmiedeBild} alt="Heldenschmiede" />
        <ContentContainer src={OtakuwonderlandBild} alt="Otakuwonderland" />
        <ContentContainer src={BavarianWoodfoxBild} alt="BavarianWoodfox" />
        <ContentContainer src={AnimiBild} alt="Animi" />
        <ContentContainer src={JennyGramsBild} alt="Jenny Grams" />
        <ContentContainer src={ShigaFoodBild} alt="Shiga Food GmbH" />
        <ContentContainer src={AkumuBild} alt="Akumu" />
      </ContentWrapper>

      <Spacer id="kuenstleratelier" />
      <h2>Künstleratelier</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <ContentWrapper>
        <ContentContainer
          src={ImgMinervasOwls}
          alt="MinervasOwls"
          link="https://www.instagram.com/minervasowls/"
        />
        <ContentContainer
          src={ImgYunuyei}
          alt="Yunuyei"
          link="https://www.instagram.com/yunuyei/"
        />
        <ContentContainer
          src={ImgSteamSpirits}
          alt="SteamSpirits"
          link="https://www.instagram.com/steamspirits/"
        />
        <ContentContainer
          src={ImgYeikoArt}
          alt="Yeiko Art"
          link="https://www.instagram.com/yeiko_art/"
        />
        <ContentContainer
          src={ImgEmytsuu}
          alt="Emytsuu"
          link="https://www.instagram.com/emytsuu/"
        />
        <ContentContainer
          src={ImgAliceMySecret}
          alt="Alice my Secret"
          link="https://www.instagram.com/alicemysecret/"
        />
        <ContentContainer
          src={ImgMyuchiisu}
          alt="Myuchiisu"
          link="https://www.instagram.com/myuchiisu/"
        />
        <ContentContainer
          src={ImgArtOfTheValley}
          alt="Art of the Valley"
          link="https://www.instagram.com/art.of.the.valley/"
        />
        <ContentContainer
          src={ImgKirianYume}
          alt="Kirian Yume"
          link="https://www.instagram.com/kirianyume/"
        />
        <ContentContainer
          src={ImgAnimalixu}
          alt="Animalixu"
          link="https://www.instagram.com/animalixu/"
        />
        <ContentContainer
          src={ImgKitsuKami}
          alt="Kitsu Kami"
          link="https://www.instagram.com/kitsu_kami/"
        />
        <ContentContainer
          src={ImgAnaratwice}
          alt="Anaratwice"
          link="https://www.instagram.com/anaratwice/"
        />
        <ContentContainer
          src={ImgGlueblade}
          alt="Glueblade"
          link="https://www.instagram.com/glueblade/"
        />
        <ContentContainer
          src={ImgNevadaArtShop}
          alt="Nevada Art Shop"
          link="https://www.instagram.com/nevada.art.shop/"
        />
        <ContentContainer
          src={ImgAkunyaah}
          alt="Akunyaah"
          link="https://www.instagram.com/akunyaah/"
        />
        <ContentContainer
          src={ImgChristalShadow}
          alt="Christal Shadow"
          link="https://www.instagram.com/christal.shad0w0/"
        />
        <ContentContainer
          src={ImgJustDesign}
          alt="Just Design Creation"
          link="https://www.instagram.com/just_design_creation/"
        />
        <ContentContainer
          src={ImgJeyCreates}
          alt="Jey.Creates"
          link="https://www.instagram.com/jey.creates/"
        />
        <ContentContainer
          src={ImgFylyDraws}
          alt="Fyly Draws"
          link="https://www.instagram.com/fyly_draws/"
        />
        <ContentContainer
          src={ImgMissMalevolent}
          alt="Miss_Malevolent_"
          link="https://www.instagram.com/miss_malevolent_/"
        />
        <ContentContainer
          src={ImgStarsAndTrinkets}
          alt="Stars and Trinkets"
          link="https://www.instagram.com/starsandtrinketsshop/"
        />
        <ContentContainer
          src={ImgColortoglas}
          alt="Colortoglas"
          link="https://www.instagram.com/colortoglas/"
        />
        <ContentContainer
          src={ImgSaseiArt}
          alt="Sasei Art"
          link="https://www.instagram.com/sasei.art/"
        />
        <ContentContainer
          src={ImgCelezius}
          alt="Celezius"
          link="https://www.instagram.com/celezius/"
        />
        <ContentContainer
          src={ImgTrashelsArt}
          alt="TrashelsArt"
          link="https://www.instagram.com/trashels_drawing/"
        />
        <ContentContainer
          src={ImgMikasMoonbrew}
          alt="Mikas Moonbrew"
          link="https://www.instagram.com/mikasmoonbrew/"
        />
        <ContentContainer
          src={ImgKeebokun}
          alt="Keebokun"
          link="https://www.instagram.com/keebokun/"
        />
        <ContentContainer
          src={ImgBiggugusu}
          alt="Biggugusu"
          link="https://www.instagram.com/biggugusu/"
        />
        <ContentContainer
          src={ImgPingunerddarts}
          alt="Pingunerddarts"
          link="https://www.instagram.com/pingunerddarts/"
        />
        <ContentContainer
          src={ImgTeiSyokumoku}
          alt="Tei Syokumoku"
          link="https://www.instagram.com/tei_syokumoku/"
        />
        <ContentContainer
          src={ImgYupiistar}
          alt="Yupiistar"
          link="https://www.instagram.com/yupiistar/"
        />
      </ContentWrapper>

      <Spacer id="autoren" />
      <h2>Autoren</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <ContentWrapper>
        <ContentContainer
          src={ImgUlfFildebrandt}
          alt="Ulf Fildebrandt"
          link="https://www.instagram.com/ulffildebrandt/"
        />
        <ContentContainer
          src={ImgNaomiHuber}
          alt="Naomi Huber – Ashturia"
          link="https://www.instagram.com/naomihuber_/"
        />
        <ContentContainer
          src={ImgDelphoxsart}
          alt="DelphoxDX"
          link="https://www.instagram.com/delphoxdx/"
        />
      </ContentWrapper>

      <Spacer id="workshops" />
      <h2>Workshops</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <ContentWrapper>
        <ContentContainer
          src={StellariaBild}
          alt="Stellaria – Japanische Idol-Kultur"
          link="https://www.instagram.com/stellaria.idols/"
        />
        <ContentContainer
          src={YunuyeiBild}
          alt="Yunuyei – Kreativ Selbstständig"
          link="https://www.instagram.com/yunuyei/"
        />
        <ContentContainer
          src={NevadaBild}
          alt="Nevada – Illustration Workshop"
          link="https://www.instagram.com/nevada.art.shop/"
        />
        <ContentContainer src={AkunyaahWorkshopBild} alt="Akunyaah Workshop" />
        <ContentContainer
          src={KermiWorkshopBild}
          alt="Kermi – Einstieg ins Cosplay Crafting"
          link="https://www.instagram.com/kermi.cos/"
        />
        <ContentContainer
          src={WolfusWorkshopBild}
          alt="Wolfus – Performance Workshop"
          link="https://www.instagram.com/wolfus.cos/"
        />
        <ContentContainer
          src={EraliaWorkshopBild}
          alt="Eralia Workshop"
          link="https://www.instagram.com/eralia_iwahana/"
        />
        <ContentContainer src={HokushinBild} alt="Hokushin – Samurai Vorführung" />
        <ContentContainer src={NGEItashaWorkshopBild} alt="N.G.E.-Itasha Workshop" />
      </ContentWrapper>

      <Spacer id="essen" />
      <h2>Essen</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <ContentWrapper>
        <ContentContainer src={BecherBistroBild} alt="Becher Bistro" />
        <ContentContainer src={DreamgardenBild} alt="Maid-Café DreamGarden" />
        <ContentContainer src={BrauhausLeppleBild} alt="Gasthof Bräuhaus Lepple" />
      </ContentWrapper>

      <Spacer id="cosplay-wettbewerbe" />
      <h2>Cosplay Wettbewerbe</h2>
      <h3>Performance:</h3>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        <br />
        <ImageCarousel visibleCount={5.5} duration={2.5} images={performanceImages} />
        <br />
        1. Platz:{" "}
        <StyledLink
          href="https://www.instagram.com/tinyfufu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tinyfufu
        </StyledLink>
        <br />
        2. Platz: Lia von{" "}
        <StyledLink
          href="https://www.instagram.com/imoneecosplay/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Imonee Cosplay
        </StyledLink>
        <br />
        3. Platz:{" "}
        <StyledLink
          href="https://www.instagram.com/palelittledragon/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Palelittledragon
        </StyledLink>
      </p>
      <h3>Crafting:</h3>
      <p>
        Mit unserem Crafting Wettbewerb wurden ausschließlich die handwerklichen Fähigkeiten der
        Teilnehmer bewertet – Cosplays, Wigs, Accessoires und Make-Up standen im Mittelpunkt.
        <br />
        <br />
        1. Platz:{" "}
        <StyledLink
          href="https://www.instagram.com/serinua_cosplay/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Serinua Cosplay
        </StyledLink>
        <br />
        2. Platz: Jul
        <br />
        3. Platz:{" "}
        <StyledLink
          href="https://www.instagram.com/sovncosplay/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sovncosplay
        </StyledLink>
      </p>

      <Spacer id="zeichenwettbewerb" />
      <h2>Zeichen Wettbewerb</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <Columns2
        left={
          <>
            <p style={{ textAlign: "center", marginBottom: 0 }}>Kreativität</p>
            <ContentContainer src={queerBunnyImage} alt="QueerBunny" />
            <p style={{ textAlign: "center", marginTop: 0 }}>
              von: <strong>QueerBunny</strong>
            </p>
          </>
        }
        right={
          <>
            <p style={{ textAlign: "center", marginBottom: 0 }}>Qualität</p>
            <ContentContainer src={leloImage} alt="Lelo" />
            <p style={{ textAlign: "center", marginTop: 0 }}>
              von: <strong>Lelo</strong>
            </p>
          </>
        }
      />
      <Columns2
        left={
          <>
            <p style={{ textAlign: "center", marginBottom: 0 }}>Technik</p>
            <ContentContainer src={evelusikImage} alt="Evelusik" />
            <p style={{ textAlign: "center", marginTop: 0 }}>
              von: <strong>Evelusik</strong>
            </p>
          </>
        }
        right={
          <>
            <p style={{ textAlign: "center", marginBottom: 0 }}>Jury Favorit / 1. Platz</p>
            <ContentContainer src={lauraskketchesImage} alt="lauraskketches" />
            <p style={{ textAlign: "center", marginTop: 0 }}>
              von: <strong>lauraskketches</strong>
            </p>
          </>
        }
      />

      <Spacer id="danksagung" />
      <h2>Danksagung</h2>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
        et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
        diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
        gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    </>
  );
}
