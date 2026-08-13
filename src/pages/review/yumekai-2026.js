import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import Columns3 from "@/components/elements/Columns3";

// Components
import { StyledLink } from "@/components/styledComponents";
import Columns2 from "@/components/elements/Columns2";
import ImageCarousel from "@/components/elements/ImageCarousel";
import SEO from "@/components/elements/SEO";

// Images – Showacts & Ehrengäste
import StellariaBild from "/public/assets/images/yumekai2026/Showact Stellaria - Stellaria Logo mit Aufschrift.png";
import YuriHiranoBild from "/public/assets/images/yumekai2026/Yuri Hirano.jpg";
import MionBild from "/public/assets/images/yumekai2026/MION.png";
import NiloBild from "/public/assets/images/yumekai2026/Nilo.jpg";
import LyriaBild from "/public/assets/images/yumekai2026/Lyria.jpg";
import CelloticDuetsBild from "/public/assets/images/yumekai2026/Cellotic Duets.jpg";
import Lucky13Bild from "/public/assets/images/yumekai2026/Lucky13.jpg";
import NicolleGonsiorBild from "/public/assets/images/yumekai2026/Nicolle Gonsior.jpeg";
import MarieJeanneWideraBild from "/public/assets/images/yumekai2026/Marie-Jeanne Widera.jpeg";
import DJSteveHengBild from "/public/assets/images/yumekai2026/presse_steveheng_00.jpg";

// Images – Cosplayer
import XeniaBild from "/public/assets/images/yumekai2026/Xenia.jpg";
import KermiBild from "/public/assets/images/yumekai2026/Kermi.jpg";
import EraliasBild from "/public/assets/images/yumekai2026/Eralias.jpg";
import NekodanshiBild from "/public/assets/images/yumekai2026/Nekodanshi.jpg";
import WolfusBild from "/public/assets/images/yumekai2026/Barbie_TigaPhotography_WolfusCosplay.jpg";
import ScarlettBild from "/public/assets/images/yumekai2026/scarlet.jpg";

// Images – Aussteller
import SciFiNarischeBild from "/public/assets/images/yumekai2026/SciFi-Narische.jpg";
import ToweldayBild from "/public/assets/images/yumekai2026/Internationaler Handtuchtag.jpg";
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
import BavarianWoodfoxBild from "/public/assets/images/yumekai2026/BavarianWoodfox.jpg";
import ColorfulMindBild from "/public/assets/images/yumekai2026/Colorful Mind.png";
import EuphonyBild from "/public/assets/images/yumekai2026/Euphony GmbH.png";
import AnimiBild from "/public/assets/images/yumekai2026/Animi.png";
import TenityDesignBild from "/public/assets/images/yumekai2026/Tenity_Design.jpg";
import ShigaFoodBild from "/public/assets/images/yumekai2026/Shiga Food GmbH.png";
import AkumuBild from "/public/assets/images/yumekai2026/Akumu.png";

// Images – Künstleratelier
import ImgAkunyaah from "/public/assets/images/yumekai2026/Akunyaah - KEIN INSTA.png";
import ImgGlueblade from "/public/assets/images/yumekai2026/Glueblade - KEIN INSTA.jpg";
import ImgJustDesign from "/public/assets/images/yumekai2026/@just_design_creation.png";
import ImgAnaratwice from "/public/assets/images/yumekai2026/@anaratwice.png";
import ImgYunuyei from "/public/assets/images/yumekai2026/@yunuyei.png";
import ImgYeikoArt from "/public/assets/images/yumekai2026/@yeiko_art.png";
import ImgNevadaArtShop from "/public/assets/images/yumekai2026/@nevada.art.shop.png";
import ImgAnimalixu from "/public/assets/images/yumekai2026/@animalixu.jpg";
import ImgKitsuKami from "/public/assets/images/yumekai2026/@kitsu_kami.png";
import ImgAliceMySecret from "/public/assets/images/yumekai2026/@alicemysecret.png";
import ImgEmytsuu from "/public/assets/images/yumekai2026/@emytsuu.png";
import ImgMinervasOwls from "/public/assets/images/yumekai2026/@minervasowls.png";
import ImgSteamSpirits from "/public/assets/images/yumekai2026/@steamspirits.png";
import ImgKirianYume from "/public/assets/images/yumekai2026/@kirianyume.png";
import ImgMyuchiisu from "/public/assets/images/yumekai2026/@myuchiisu.jpg";
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

// Images – Autoren
import ImgUlfFildebrandt from "/public/assets/images/yumekai2026/@ulffildebrandt.jpg";
import ImgNaomiHuber from "/public/assets/images/yumekai2026/@naomihuber_.png";
import ImgDelphoxsart from "/public/assets/images/yumekai2026/@delphoxsart.png";

// Images – Workshops
import AkunyaahWorkshopBild from "/public/assets/images/yumekai2026/Akunyaah Workshop.png";
import KermiWorkshopBild from "/public/assets/images/yumekai2026/Kermi Workshop.jpg";
import WolfusWorkshopBild from "/public/assets/images/yumekai2026/Wolfus Workshop.png";
import EraliaWorkshopBild from "/public/assets/images/yumekai2026/Eralia Workshop.jpg";
import NGEItashaWorkshopBild from "/public/assets/images/yumekai2026/N.G.E. Itasha e.V. workshop.jpg";
import YunuyeiBild from "/public/assets/images/yumekai2026/Yunuyei.png";
import NevadaBild from "/public/assets/images/yumekai2026/Nevada.png";
import StellariaDanceWorkshopBild from "/public/assets/images/yumekai2026/Stellaria_Random_Play_Dance.png";
import TanzkursBild from "/public/assets/images/yumekai2026/Tanzkurs_square.jpg";
import HarukyuWorkshopBild from "/public/assets/images/yumekai2026/Harukyu_Duo_Workshop.jpg";
import ScarlettWorkshopBild from "/public/assets/images/yumekai2026/Scarlett_Workshop.jpg";

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
// Images – Crafting Wettbewerb Teilnehmer
import crafting1 from "/public/assets/images/yumekai2026/CosplayCrafting.jpg";

// Images – Zeichenwettbewerb Teilnehmer
import ZeichenMimic from "/public/assets/images/yumekai2026/zeichenwettbewerb_mimic.png";
import ZeichenSmurfyTheArtist from "/public/assets/images/yumekai2026/zeichenwettbewerb_smurfy_the_artist.png";
import ZeichenLina from "/public/assets/images/yumekai2026/zeichenwettbewerb_lina.jpg";
import ZeichenLuzyana from "/public/assets/images/yumekai2026/zeichenwettbewerb_luzyana.jpg";
import ZeichenOr3oOnPaws from "/public/assets/images/yumekai2026/zeichenwettbewerb_or3o_on_paws.jpg";
import ZeichenCarolinTempest from "/public/assets/images/yumekai2026/zeichenwettbewerb_carolin_tempest.jpg";
import ZeichenMitsuri from "/public/assets/images/yumekai2026/zeichenwettbewerb_mitsuri.jpg";
import ZeichenBelabi from "/public/assets/images/yumekai2026/zeichenwettbewerb_belabi.jpg";
import ZeichenFiona from "/public/assets/images/yumekai2026/zeichenwettbewerb_fiona.jpg";
import ZeichenFranciNevada from "/public/assets/images/yumekai2026/zeichenwettbewerb_franci_nevada.png";
import queerBunnyImage from "/public/assets/images/yumekai2026/QueerBunny.jpg";
import leloImage from "/public/assets/images/yumekai2026/lelo.jpg";
import evelusikImage from "/public/assets/images/yumekai2026/evelusik.png";
import lauraskketchesImage from "/public/assets/images/yumekai2026/lauraskketches.jpg";

// Images – Cosplay Ball
import ball01 from "/public/assets/images/yumekai2026/ball_01.jpg";
import ball02 from "/public/assets/images/yumekai2026/ball_02.jpg";
import ball03 from "/public/assets/images/yumekai2026/ball_03.jpg";
import ball04 from "/public/assets/images/yumekai2026/ball_04.jpg";
import ball05 from "/public/assets/images/yumekai2026/ball_05.jpg";
import ball06 from "/public/assets/images/yumekai2026/ball_06.jpg";
import ball07 from "/public/assets/images/yumekai2026/ball_07.jpg";
import ball08 from "/public/assets/images/yumekai2026/ball_08.jpg";
import ball09 from "/public/assets/images/yumekai2026/ball_09.jpg";
import ball10 from "/public/assets/images/yumekai2026/ball_10.jpg";
import ball11 from "/public/assets/images/yumekai2026/ball_11.jpg";
import ball12 from "/public/assets/images/yumekai2026/ball_12.jpg";
import ball13 from "/public/assets/images/yumekai2026/ball_13.jpg";
import ball14 from "/public/assets/images/yumekai2026/ball_14.jpg";

const performanceImages = [
  {
    image: performance1,
    alt: "faefire_phoenix",
    link: "",
    caption: (
      <>
        faefire_phoenix
        <br />
        <small>Columbina (Genshin Impact)</small>
      </>
    ),
  },
  {
    image: performance2,
    alt: "Gokuri",
    link: "",
    caption: (
      <>
        Gokuri
        <br />
        <small>Rapunzel (Rapunzel – neu verföhnt)</small>
      </>
    ),
  },
  {
    image: performance4,
    alt: "Tinyfufu",
    link: "https://www.instagram.com/tinyfufu/",
    caption: (
      <>
        Tinyfufu
        <br />
        <small>Miorine Rembran (Mobile Suit Gundam: The Witch from Mercury)</small>
      </>
    ),
  },
  {
    image: performance3,
    alt: "meedori",
    link: "",
    caption: (
      <>
        meedori
        <br />
        <small>Special Week (Umamusume)</small>
      </>
    ),
  },
  {
    image: performance5,
    alt: "Palelittledragon",
    link: "https://www.instagram.com/palelittledragon/",
    caption: (
      <>
        Palelittledragon
        <br />
        <small>Uraume (Jujutsu Kaisen)</small>
      </>
    ),
  },
  {
    image: performance6,
    alt: "lady.krul",
    link: "",
    caption: (
      <>
        lady.krul
        <br />
        <small>Shinobu Kocho & Kokushibo (Demon Slayer)</small>
      </>
    ),
  },
  {
    image: performance7,
    alt: "Imonee Cosplay",
    link: "https://www.instagram.com/imoneecosplay/",
    caption: (
      <>
        Lia von Imonee Cosplay
        <br />
        <small>Minto Aizawa (Tokyo Mew Mew (Remake))</small>
      </>
    ),
  },
  {
    image: performance9,
    alt: "Shinoa_Kitsune",
    link: "",
    caption: (
      <>
        Shinoa_Kitsune
        <br />
        <small>Ruby Hoshino (Oshi No Ko)</small>
      </>
    ),
  },
  {
    image: performance8,
    alt: "Akunyaah",
    link: "",
    caption: (
      <>
        Akunyaah
        <br />
        <small>Till (Alien Stage)</small>
      </>
    ),
  },
];

// TODO: Sobald die Fotos vom Crafting Wettbewerb vorliegen, jeweils als
// craftingXX importieren (z. B. "/public/assets/images/yumekai2026/cosplaycrafting_01.jpg")
// und unten bei "image" statt null einsetzen.
const craftingImages = [
  {
    image: null,
    alt: "Yulj",
    link: "",
    caption: (
      <>
        Yulj
        <br />
        <small>Jack Frost</small>
      </>
    ),
  },
  {
    image: null,
    alt: "ellaenra",
    link: "",
    caption: (
      <>
        ellaenra
        <br />
        <small>Syl (Oblivion Shivering Isles)</small>
      </>
    ),
  },
  {
    image: null,
    alt: "Sovncosplay",
    link: "https://www.instagram.com/sovncosplay/",
    caption: (
      <>
        Sovncosplay
        <br />
        <small>Silverwind Nargacuga Rüstung (Monster Hunter)</small>
      </>
    ),
  },
  {
    image: null,
    alt: "Nasuka",
    link: "",
    caption: (
      <>
        Nasuka
        <br />
        <small>Astrid Hofferson</small>
      </>
    ),
  },
  {
    image: null,
    alt: "Serinua_cosplay",
    link: "https://www.instagram.com/serinua_cosplay/",
    caption: (
      <>
        Serinua_cosplay
        <br />
        <small>Tragosso</small>
      </>
    ),
  },
  {
    image: null,
    alt: "Gokuri",
    link: "",
    caption: (
      <>
        Gokuri
        <br />
        <small>Tardis</small>
      </>
    ),
  },
  {
    image: null,
    alt: "Mechatroxcosplay",
    link: "",
    caption: (
      <>
        Mechatroxcosplay
        <br />
        <small>Bonearmor-Rüstung (Monster Hunter Wilds)</small>
      </>
    ),
  },
  {
    image: null,
    alt: "Jami",
    link: "",
    caption: (
      <>
        Jami
        <br />
        <small>Rouran (The Apothecary Diaries)</small>
      </>
    ),
  },
  {
    image: null,
    alt: "Spacekatcos",
    link: "",
    caption: (
      <>
        Spacekatcos
        <br />
        <small>Zinogre Rüstungsset (Monster Hunter World)</small>
      </>
    ),
  },
  {
    image: null,
    alt: "Jul",
    link: "",
    caption: (
      <>
        Jul
        <br />
        <small>Fern (Frieren: Beyond Journey&apos;s End)</small>
      </>
    ),
  },
  {
    image: null,
    alt: "faefire_phoenix",
    link: "",
    caption: (
      <>
        faefire_phoenix
        <br />
        <small>Columbina (Genshin Impact)</small>
      </>
    ),
  },
];

const zeichenwettbewerbImages = [
  {
    image: ZeichenMimic,
    alt: "Mimic",
    link: "",
    caption: (
      <>
        Mimic
        <br />
        <small>Socken und Birkenstock</small>
      </>
    ),
  },
  {
    image: ZeichenSmurfyTheArtist,
    alt: "Smurfy-The-Artist",
    link: "",
    caption: (
      <>
        Smurfy-The-Artist
        <br />
        <small>Yumeko als osmanische Prinzessin</small>
      </>
    ),
  },
  {
    image: evelusikImage,
    alt: "evelusik",
    link: "",
    caption: (
      <>
        evelusik
        <br />
        <small>Tanz der Heimat</small>
      </>
    ),
  },
  {
    image: ZeichenLina,
    alt: "Lina",
    link: "",
    caption: (
      <>
        Lina
        <br />
        <small>Die Tagebücher der Yumeko</small>
      </>
    ),
  },
  {
    image: queerBunnyImage,
    alt: "QueerBunny",
    link: "",
    caption: (
      <>
        QueerBunny
        <br />
        <small>Yumeko als Wolpertinger</small>
      </>
    ),
  },
  {
    image: ZeichenLuzyana,
    alt: "Luzyana",
    link: "",
    caption: (
      <>
        Luzyana
        <br />
        <small>Yumeko in Deutschland</small>
      </>
    ),
  },
  {
    image: ZeichenOr3oOnPaws,
    alt: "or3o_on_paws",
    link: "",
    caption: (
      <>
        or3o_on_paws
        <br />
        <small>Yumeko im Dirndl</small>
      </>
    ),
  },
  {
    image: ZeichenCarolinTempest,
    alt: "Carolin Tempest",
    link: "",
    caption: (
      <>
        Carolin Tempest
        <br />
        <small>Ruhlaer Tracht</small>
      </>
    ),
  },
  {
    image: ZeichenMitsuri,
    alt: "Mitsuri",
    link: "",
    caption: (
      <>
        Mitsuri
        <br />
        <small>Yumeko goes Bavaria (Genderbend)</small>
      </>
    ),
  },
  {
    image: leloImage,
    alt: "Lelo",
    link: "",
    caption: (
      <>
        Lelo
        <br />
        <small>Anno 1500 – Memminger Yumeko</small>
      </>
    ),
  },
  {
    image: ZeichenBelabi,
    alt: "Belabi",
    link: "",
    caption: (
      <>
        Belabi
        <br />
        <small>Yumekai 2026 belabi (Melanie)</small>
      </>
    ),
  },
  {
    image: ZeichenFiona,
    alt: "Fiona",
    link: "",
    caption: (
      <>
        Fiona
        <br />
        <small>Yumeko in ungarischer Tracht</small>
      </>
    ),
  },
  {
    image: lauraskketchesImage,
    alt: "lauraskketches",
    link: "",
    caption: (
      <>
        lauraskketches
        <br />
        <small>Ein Lebkuchenherz für Yumeko 💗</small>
      </>
    ),
  },
  {
    image: ZeichenFranciNevada,
    alt: "Franci Nevada",
    link: "",
    caption: (
      <>
        Franci Nevada
        <br />
        <small>La Figlia del Nord e del Sole</small>
      </>
    ),
  },
];

const cosplayballImages = [
  { image: ball01, alt: "Cosplay Ball 1", link: "" },
  { image: ball02, alt: "Cosplay Ball 2", link: "" },
  { image: ball03, alt: "Cosplay Ball 3", link: "" },
  { image: ball04, alt: "Cosplay Ball 4", link: "" },
  { image: ball05, alt: "Cosplay Ball 5", link: "" },
  { image: ball06, alt: "Cosplay Ball 6", link: "" },
  { image: ball07, alt: "Cosplay Ball 7", link: "" },
  { image: ball08, alt: "Cosplay Ball 8", link: "" },
  { image: ball09, alt: "Cosplay Ball 9", link: "" },
  { image: ball10, alt: "Cosplay Ball 10", link: "" },
  { image: ball11, alt: "Cosplay Ball 11", link: "" },
  { image: ball12, alt: "Cosplay Ball 12", link: "" },
  { image: ball13, alt: "Cosplay Ball 13", link: "" },
  { image: ball14, alt: "Cosplay Ball 14", link: "" },
];

const StyledImageHome = styled(Image)`
  width: 100%;
  border-radius: var(--border-radius-large);
`;

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

  &:hover img {
    transform: scale(1.06);
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

const ImageFrame = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 8px;

  img {
    display: block;
    transition: transform var(--transition-base);
  }
`;

const HeroSection = styled.section`
  position: relative;
  overflow: hidden;
  background-image: linear-gradient(163deg, #e9300b 0%, #ffb01e 100%);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 48px 40px;
  margin: 10px 0 25px 0;
  text-align: center;

  h1 {
    color: #fff;
    padding: 0;
    margin: 0 0 16px 0;
  }

  p {
    max-width: 720px;
    margin: 0 auto;
    color: #fff;
  }

  @media (max-width: 500px) {
    padding: 32px 20px;
  }
`;

const HeroBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(255, 255, 255, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: var(--radius-pill);
  padding: 8px 18px;
  color: #fff;
  font-family: var(--font-heading), Tahoma, sans-serif;
  font-weight: 700;
  font-size: 0.95rem;
  margin-bottom: 18px;
`;

const TocNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 24px 0 10px 0;
  padding: 0;
`;

const TocLink = styled(StyledLink)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.surfaceMuted};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: var(--radius-pill);
  padding: 8px 18px;
  font-size: 0.95rem;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor4};
    background-size: 0 2px;
  }
`;

const SectionDivider = styled.div`
  position: relative;
  height: 1px;
  background-color: ${({ theme }) => theme.border};
  margin: 40px 0 28px 0;

  &::before {
    content: "";
    position: absolute;
    top: -1.5px;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 4px;
    border-radius: var(--radius-pill);
    background-image: linear-gradient(90deg, #e9300b, #ffb01e);
  }

  @media (max-width: 500px) {
    margin: 24px 0 18px 0;
  }
`;

const RankList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 16px 0;

  li {
    display: flex;
    align-items: center;
  }
`;

const RankBadge = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-family: var(--font-heading), Tahoma, sans-serif;
  font-weight: 800;
  font-size: 0.95rem;
  color: #2b2a2c;
  margin-right: 12px;
  box-shadow: var(--shadow-sm);
  background-color: ${({ $place }) =>
    $place === 1 ? "#FFD700" : $place === 2 ? "#C0C0C0" : "#CD7F32"};
`;

const AwardList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 16px 0;

  li {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

const AwardTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
  color: ${({ $fg }) => $fg || "#fff"};
  background-color: ${({ $bg }) => $bg};
`;

const PageBody = styled.div`
  display: flex;
  flex-direction: column;

  & > h2 {
    align-self: flex-start;
    padding: 8px 22px;
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-sm);
    background-color: #e9300b;
    color: #fff;
  }
`;

const ThanksBox = styled.div`
  background-color: ${({ theme }) => theme.surfaceMuted};
  border: 1px solid ${({ theme }) => theme.border};
  border-left: 4px solid var(--secondary-color);
  border-radius: var(--radius-md);
  padding: 24px 28px;
  margin: 25px 0;

  p:last-child {
    margin-bottom: 0;
  }
`;

const SupporterList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0;
  margin: 0;
  justify-content: center;

  li {
    background-color: ${({ theme }) => theme.surfaceMuted};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: var(--radius-pill);
    padding: 8px 16px;
    font-size: 0.95rem;
    font-weight: 600;
  }
`;

export function ContentContainer({ src, alt = "Bild", caption = "", link }) {
  return (
    <FigureContainer>
      <ImageFrame>
        <Image src={src} alt={`Bild von ${alt}`} style={{ width: "100%", height: "auto" }} priority />
      </ImageFrame>
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
      <SEO
        title="Rückblick YumeKai 2026"
        description="Rückblick auf die YumeKai 2026: Showacts, Ehrengäste, Cosplayer und Aussteller im Überblick."
        path="/review/yumekai-2026"
      />
      <PageBody>
      <HeroSection>
        <HeroBadge>09.–10. Mai 2026 · Stadthalle Memmingen</HeroBadge>
        <h1>Rückblick YumeKai 2026</h1>
        <p>
          Am 09. und 10. Mai fand in diesem Jahr unsere dritte YumeKai statt. Hier könnt ihr die
          schönsten Momente der Convention noch einmal Revue passieren lassen und gemeinsam in
          Erinnerungen schwelgen. Vielleicht entdeckt ihr euch oder eure Freunde ja sogar auf dem
          einen oder anderen Bild.
        </p>
      </HeroSection>

      <p>
        Außerdem könnt ihr einen Blick in unser{" "}
        <StyledLink href="/downloads/YumeKai_2026_Programmheft.pdf" target="_blank">
          Programmheft
        </StyledLink>{" "}
        werfen und mehr über unsere zahlreichen Partner, Sponsoren, Händler, Künstler, Aussteller
        sowie die vielfältigen Programmpunkte erfahren.{" "}
      </p>

      <TocNav>
        <TocLink href="#showacts">Showacts &amp; Ehrengäste</TocLink>
        <TocLink href="#cosplayer">Cosplayer</TocLink>
        <TocLink href="#aussteller">Aussteller</TocLink>
        <TocLink href="#haendler">Händler</TocLink>
        <TocLink href="#kuenstleratelier">Künstleratelier</TocLink>
        <TocLink href="#autoren">Autoren</TocLink>
        <TocLink href="#workshops">Workshops</TocLink>
        <TocLink href="#essen">Essen</TocLink>
        <TocLink href="#gaming">Spiele, Gaming, Karaoke</TocLink>
        <TocLink href="#cosplay-wettbewerbe">Cosplay Wettbewerbe</TocLink>
        <TocLink href="#zeichenwettbewerb">Zeichen Wettbewerb</TocLink>
        <TocLink href="#cosplayball">Cosplay Ball</TocLink>
        <TocLink href="#danksagung">Danksagung</TocLink>
      </TocNav>

      <SectionDivider id="showacts" />
      <h2>Showacts &amp; Ehrengäste</h2>
      <p>
        Auch in diesem Jahr hatten wir ein ausgewogenes Bühnenprogramm mit alten Bekannten und neuen
        Gesichtern bieten.
        <br />
        MION hatte bereits im letzten Jahr so viel Spaß bei uns, dass sie dieses Jahr direkt ihre
        Kollegin Yurimaru mitgebracht hat. Für Yurimaru war es dabei etwas ganz Besonderes: Sie
        feierte bei uns ihren ersten Auftritt in Deutschland! Ihr konntet die beiden sowohl solo als
        auch gemeinsam auf der Bühne erleben. Bei so viel Idol-Power durfte natürlich auch Stellaria
        nicht fehlen. Mit ihrem Programm &bdquo;Palette of Dreams&ldquo; brachten sie die Bühne zum
        Strahlen und standen sogar gemeinsam mit MION und Yurimaru auf der Bühne. <br />
        Zum ersten Mal mit dabei war außerdem NILO, die mit ihrer Liebe zu japanischem City Pop und
        Anime-Songs ordentlich Schwung auf die Bühne brachte. Ebenfalls wieder dabei war Lyria, eine
        Idol- VTuberin mit geballter Stimmenpower. Sie hatte eine bunte Mischung aus beliebten
        Anime- und Videogame-Songs im Gepäck und sorgte damit für ordentlich Stimmung. <br /> Zum
        zweiten Mal durften wir auch Cellotic Duets bei uns begrüßen. Sie präsentierten
        instrumentale Soundtrack-Musik aus Filmen, Serien und Games verschiedenster Genres. Ihre
        Musik konntet ihr sowohl beim Ball am Samstagabend als auch bei einem regulären Konzert
        genießen. Für die Disco- Hälfte des Balls war außerdem wieder DJ Steve Heng mit dabei. Er
        vereinte Anime-Openings, kreative Mashups und Geek-Electro-Techno zu einer ganz besonderen
        Mischung. <br />
        Zum ersten Mal durften wir auch Lucky 13, eine Theater-Showgruppe, bei uns begrüßen. Sie
        führten ihr Stück &bdquo;A Midsummer Night&apos;s Dream!!! On Ice – A Case Study of
        Shakespeare&ldquo; auf. Darin kombinierten sie eine Vielzahl verschiedener Anime auf
        kreative und humorvolle Weise und begeisterten damit das Publikum. <br />
        Bei unseren Synchronsprecherinnen gab es geballte Frauenpower: Wir durften Nicolle Gonsior
        und Marie-Jeanne Widera bei uns begrüßen, die den Charakteren Yamato und Flambé ihre Stimmen
        leihen. Gemeinsam mit PinkStarke standen die beiden für ein Q&A auf der Bühne und
        beantworteten eure Fragen. Anschließend konntet ihr sie auch an ihrem Stand besuchen und
        euch ein Autogramm sichern.
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

      <SectionDivider id="cosplayer" />
      <h2>Cosplayer</h2>
      <p>
        Auch in diesem Jahr durften wir wieder zahlreiche talentierte Cosplayer bei uns begrüßen.
        Neben neuen Gesichtern wie Xenia, Wolfus, Kermi und dem Cosplay-Duo Nekodanshi durften wir
        auch bekannte Gäste wie Eralia und Scarlett Sirene erneut bei uns begrüßen. An ihren Ständen
        in der Stadthalle konntet ihr euch mit ihnen über verschiedene Cosplay-Themen austauschen,
        Fragen stellen oder gemeinsam Fotos machen. Außerdem unterstützten sie unsere Cosplay
        Wettbewerbe als Jurymitglieder. In ihren Workshops gaben sie spannende Einblicke in die Welt
        des Cosplays und teilten ihr Wissen, ihre Erfahrungen sowie viele hilfreiche Tipps und
        Tricks. Dabei hattet ihr die Gelegenheit, gezielt Fragen zu stellen und euch direkt mit den
        Cosplayern auszutauschen.
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

      <SectionDivider id="aussteller" />
      <h2>Aussteller</h2>
      <p>
        Auch in diesem Jahr waren wieder zahlreiche Aussteller mit den unterschiedlichsten
        Themengebieten auf der YumeKai vertreten. An ihren Ständen konntet ihr mehr über ihre
        Projekte, Vereine und Angebote erfahren sowie mit ihnen ins Gespräch kommen.
        <br />
        <br />
        Darüber hinaus boten viele Aussteller spannende Workshops und informative Vorträge an, bei
        denen ihr noch tiefer in die jeweiligen Themen eintauchen und Neues entdecken konntet.
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
        <ContentContainer src={CCDBild} alt="Comic Con Dornbirn" />
      </ContentWrapper>

      <SectionDivider id="haendler" />
      <h2>Händler</h2>
      <p>
        Was wäre eine Convention ohne ihre Händler? Auch in diesem Jahr wartete wieder eine große
        Auswahl an Verkaufsständen auf euch. Von Mangas und Merchandise über Schmuck und asiatische
        Snacks bis hin zu einzigartigen handgefertigten Produkten gab es jede Menge zu entdecken.
        Dies war natürlich auch die perfekte Gelegenheit, dass ein oder andere neue Lieblingsstück
        mit nach Hause zu nehmen.
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
        <ContentContainer src={TenityDesignBild} alt="Tenity Design" />
        <ContentContainer src={ShigaFoodBild} alt="Shiga Food GmbH" />
        <ContentContainer src={AkumuBild} alt="Akumu" />
      </ContentWrapper>

      <SectionDivider id="kuenstleratelier" />
      <h2>Künstleratelier</h2>
      <p>
        Eine Artist Alley gehört mittlerweile zu fast jeder Anime-Convention und bei uns gab es in
        diesem Jahr sogar gleich zwei! Eine befand sich in dem Hauptgebäude, der Stadthalle und eine
        im Maximilian Kolbe-Haus. Hier konntet ihr bei den Artists durchschauen, verschiedenste
        Kunstgegenstände entdecken, euch in Gespräche vertiefen und viel neues entdecken. Einige
        Künstler haben ihr Wissen und ihre Expertise auch in Workshops mit euch geteilt und dort
        nochmal spezifischere Fragen beantwortet.
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
      </ContentWrapper>

      <SectionDivider id="autoren" />
      <h2>Autoren</h2>
      <p>
        Auch in diesem Jahr durften unsere Autoren auf der YumeKai natürlich nicht fehlen. An ihren
        Ständen konntet ihr in ihre Bücher hineinschnuppern, mehr über ihre Geschichten erfahren und
        ihnen eure Fragen stellen. Außerdem bot sich die Gelegenheit mehr über den kreativen
        Entstehungsprozess ihrer Werke zu erfahren.
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

      <SectionDivider id="workshops" />
      <h2>Workshops</h2>
      <p>
        Auch bei den Workshops gab es dieses Jahr eine Menge zum Erkunden und lernen. Verschiedene
        Themenbereiche wurden hier dieses Jahr präsentiert, sei es Cosplay, Itashas, Miniaturen
        bemalen, kreative Selbstständigkeit oder auch tanzen. Hier gab es wirklich zu allen Themen
        etwas.
      </p>
      <ContentWrapper>
        <ContentContainer
          src={StellariaBild}
          alt="Stellaria – Japanische Idol-Kultur"
          link="https://www.instagram.com/stellaria.idols/"
        />
        <ContentContainer
          src={StellariaDanceWorkshopBild}
          alt="Stellaria – Random Play Dance"
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
        <ContentContainer
          src={ScarlettWorkshopBild}
          alt="Cosplay Safety 101"
          link="https://www.instagram.com/scarlett_cos/"
        />
        <ContentContainer src={HokushinBild} alt="Hokushin – Samurai Vorführung" />
        <ContentContainer src={NGEItashaWorkshopBild} alt="N.G.E.-Itasha Workshop" />
        <ContentContainer src={HarukyuWorkshopBild} alt="Ars Metamorphosis - Wigs & Makeup" />
        <ContentContainer src={TanzkursBild} alt="Tanzkurs" />
      </ContentWrapper>

      <SectionDivider id="essen" />
      <h2>Essen</h2>
      <p>
        Auch für Essen war gesorgt, entweder etwas deftiges beim Becher Bistro oder beim Gasthof
        Bräuhaus Lepple oder für die süße Entspannung zwischendurch sorgte das Maid Cafe
        DreamGarden.
      </p>
      <ContentWrapper>
        <ContentContainer src={BecherBistroBild} alt="Becher Bistro" />
        <ContentContainer src={DreamgardenBild} alt="Maid-Café DreamGarden" />
        <ContentContainer src={BrauhausLeppleBild} alt="Gasthof Bräuhaus Lepple" />
      </ContentWrapper>

      <SectionDivider id="gaming" />
      <h2>Spiele, Gaming, Karaoke</h2>
      <p>
        Für das Herz all unserer Brett- und Kartenspielfreunde hatten wir dank unseren Händlern der
        Heldenschmiede und dem Squiggz ein hervorragendes Angebot. Hier konnten nicht nur
        verschiedenste Spiele gekauft werden, sondern auch Demospiele getestet werden! Für alle Fans
        von TCG gab es auch Turniere zum Mitspielen. Wer mit Brettspielen, Kartenspielen oder
        Tabletop nichts anfangen konnte war bei unsererm Gamingbereich gut aufgehoben. Hier gab es
        die verschiedensten Konsolen und Spiele zum Testen. Auch dieses Jahr war unser Karaoke Raum
        wieder am Start, hier konntet ihr über das gesamte Wochenende singen. Am Samstagabend gab es
        dort den zweiten Karavision Song Contest auf der YumeKai!
      </p>

      <SectionDivider id="cosplay-wettbewerbe" />
      <h2>Cosplay Wettbewerbe</h2>
      <h3>Performance:</h3>
      <p>
        Bei unserem Performance Wettbewerb hatte jeder Teilnehmer bis zu 4 Minuten auf der Bühne
        Zeit, sich mit einer kurzen Darbietung auf der Bühne zu präsentieren. All unsere Teilnehmer
        haben hier die Herzen der Zuschauer durch ihre Performances erobert, sodass es unserer Jury
        nicht einfach viel sich zu entscheiden.
        <br />
      </p>
      <ImageCarousel visibleCount={5.5} duration={2.5} images={performanceImages} />

      <RankList>
        <li>
          <RankBadge $place={1}>1</RankBadge>
          <StyledLink
            href="https://www.instagram.com/tinyfufu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tinyfufu
          </StyledLink>{" "}
          als Miorine Rembran (Mobile Suit Gundam: The Witch from Mercury)
        </li>
        <li>
          <RankBadge $place={2}>2</RankBadge>
          Lia von{" "}
          <StyledLink
            href="https://www.instagram.com/imoneecosplay/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Imonee Cosplay
          </StyledLink>{" "}
          als Minto Aizawa (Tokyo Mew Mew (Remake))
        </li>
        <li>
          <RankBadge $place={3}>3</RankBadge>
          <StyledLink
            href="https://www.instagram.com/palelittledragon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Palelittledragon
          </StyledLink>{" "}
          als Uraume (Jujutsu Kaisen)
        </li>
      </RankList>

      <h3>Crafting:</h3>

      <p>
        Unserem Crafting Wettbewerb ging dieses Jahr in die zweite Runde. Hier wurden nur die
        Cosplays, Wigs, Accessoires und Make-Up der Teilnehmenden Bewertet. Der kurze Catwalk auf
        der Bühne wurde nicht in die Bewertung aufgenommen, sodass es wirklich nur um die Crafting
        Techniken und die Fähigkeiten der Teilnehmer ging.
        <br />
      </p>
      <Image
        src={crafting1}
        alt="Crafting Wettbewerb"
        sizes="(max-width: 600px) 90vw, 300px"
        style={{
          display: "block",
          width: "60%",
          height: "auto",
          margin: "0 auto",
          borderRadius: "10px",
        }}
      />

      <RankList>
        <li>
          <RankBadge $place={1}>1</RankBadge>
          <StyledLink
            href="https://www.instagram.com/serinua_cosplay/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Serinua_cosplay
          </StyledLink>{" "}
          als Tragosso
        </li>
        <li>
          <RankBadge $place={2}>2</RankBadge>
          <StyledLink href="" target="_blank" rel="noopener noreferrer">
            Jul
          </StyledLink>{" "}
          als Fern (Frieren: Beyond Journey&apos;s End)
        </li>
        <li>
          <RankBadge $place={3}>3</RankBadge>
          <StyledLink
            href="https://www.instagram.com/sovncosplay/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sovncosplay
          </StyledLink>{" "}
          als Silverwind Nargacuga Rüstung (Monster Hunter)
        </li>
      </RankList>

      <SectionDivider id="zeichenwettbewerb" />
      <h2>Zeichen Wettbewerb</h2>
      <p>
        Wieder mit dabei war auch unser Zeichenwettbewerb, hier konnten im Vorhinein Bilder zum
        Themenbereich &bdquo;Yumeko Worldwide&ldquo; eingereicht werden. Diese wurden von unserer
        talentierten Jury, welche aus{" "}
        <StyledLink href="https://www.instagram.com/wynrayzero/" target="_blank">
          wynrayzero
        </StyledLink>{" "}
        (Schöpfer von unserem Maskottchen Hiru), Matina (Teil unserer Teamleitung) und{" "}
        <StyledLink href="https://bsky.app/profile/papaapplepie.bsky.social" target="_blank">
          Papa_ApplePie
        </StyledLink>{" "}
        bestand, bewertet. Am Sonntagabend wurden die Gewinner und alle Teilnehmerbilder dann auf
        der großen Bühne gezeigt.
      </p>

      <ImageCarousel visibleCount={5.5} duration={2.5} images={zeichenwettbewerbImages} />

      <AwardList>
        <li>
          <AwardTag $bg="#e9300b">Beste Kreativität</AwardTag>
          <strong>QueerBunny (Connor)</strong> – Yumeko als Wolpertinger
        </li>
        <li>
          <AwardTag $bg="#ffb01e" $fg="#2b2a2c">
            Beste Qualität
          </AwardTag>
          <strong>Lelo</strong> – Anno 1500 – Memminger Yumeko
        </li>
        <li>
          <AwardTag $bg="#388e3c">Beste Technik</AwardTag>
          <strong>evelusik</strong> – Tanz der Heimat
        </li>
        <li>
          <AwardTag $bg="#3b82f6">Jury Favorit / 1. Platz</AwardTag>
          <strong>lauraskketches</strong> – Ein Lebkuchenherz für Yumeko 💗
        </li>
      </AwardList>

      <SectionDivider id="cosplayball" />
      <h2>Cosplayball</h2>
      <p>
        Auch in diesem Jahr fand zum zweiten Mal unser Cosplay-Ball statt. Für die passende
        musikalische Atmosphäre sorgte das Cellotic Duets des Cellotic Soundtrack Ensembles. Mit
        gefühlvollen und zugleich tanzbaren Cover-Versionen bekannter Anime-, Gaming- und
        Serien-Soundtracks begleiteten sie euch durch den Abend und schafften eine einzigartige
        Stimmung. Im Anschluss an den Ball ging der Abend nahtlos in eine Disco über. Hier legte DJ
        Steve Heng (@breakouttv) die Musik auf. Mit seiner einzigartigen Mischung aus Clubsound und
        Anime- Popkultur kreiert er energiegeladene Sets.
      </p>
      <ImageCarousel visibleCount={5.5} duration={2.5} images={cosplayballImages} />

      <SectionDivider id="danksagung" />
      <h2>Danksagung</h2>
      <p>
        Eine Convention wie die YumeKai lebt von einem abwechslungsreichen und spannenden Programm.
        Deshalb möchten wir an dieser Stelle ein riesiges Dankeschön aussprechen an alle
        Unterstützer!
      </p>
      <p>
        Unser besonderer Dank gilt unseren fantastischen YumeKai-Helfern! Ohne eure Arbeit, euer
        Engagement und eure Begeisterung wäre die YumeKai nicht das, was sie ist. Ihr seid das Herz
        unserer Veranstaltung und wir sind unendlich dankbar für eure Unterstützung!
      </p>
      <p>
        Ein großes Dankeschön geht auch an alle Händler, Autoren und Künstler, die mit ihren
        einzigartigen Angeboten und kreativen Arbeiten für ein unvergessliches Einkaufserlebnis und
        Erinnerungsstücke gesorgt haben.
      </p>
      <p>
        Unsere Workshopleiter verdienen ebenfalls Anerkennung – ihr habt euer Wissen über Cosplay,
        Kunst, Japan und vieles mehr geteilt und unseren Besuchern wertvolle Einblicke ermöglicht.
        Ein ebenso herzliches Dankeschön geht an alle Aussteller, die mit ihren interaktiven oder
        informativen Ständen zur Vielfalt der YumeKai beigetragen haben.
      </p>
      <p>
        Auf unserer Bühne haben uns viele talentierte Showacts mit Gesang, Tanz, Musik und
        beeindruckenden Performances begeistert. Ihr habt die YumeKai mit euren Auftritten zu etwas
        ganz Besonderem gemacht! Ein großes Dankeschön geht auch an unsere Fotografen, die all die
        magischen Momente für die Ewigkeit festgehalten haben.
      </p>
      <p>
        Und schließlich möchten wir uns bei euch, unseren Besuchern, bedanken! Ohne euch gäbe es
        keine YumeKai. Eure Begeisterung, eure Kreativität und euer Engagement machen unsere
        Veranstaltung zu einem einzigartigen Ort.
      </p>
      <p>
        Ein ganz besonderes Dankeschön geht noch an alle Unterstützer unseres Crowdfundings, durch
        eure Hilfe konnten wir auch diese YumeKai wieder zu einer fantastischen Convention machen!
      </p>
      <ThanksBox>
        <p>
          Danke für ein wundervolles Wochenende und für all die besonderen Momente, die wir
          gemeinsam erleben durften.
          <br />
          Wir freuen uns schon auf die nächste YumeKai mit euch!
          <br />
          Euer YumeKai-Team
        </p>
      </ThanksBox>

      <h3>Crowdfunding</h3>
      <p>
        Ein besonderer Dank geht an alle Unterstützer:innen unseres Crowdfundings, die die YumeKai
        2026 mit möglich gemacht haben:
      </p>
      <SupporterList>
        <li>Kirawitha</li>
        <li>Naomi Huber</li>
        <li>Stefanie</li>
        <li>Claudia</li>
        <li>kindsoul.new</li>
        <li>AnnaLeiBrandt</li>
        <li>Joey Jäger</li>
        <li>Kio derSchwabenotter</li>
        <li>Synchronevents.de</li>
        <li>Shinoa Aizawa</li>
        <li>DelphoxsArt</li>
        <li>Manuel Beringer</li>
        <li>Sara Hetges</li>
        <li>Felix Wagner</li>
        <li>Sandra Wimmer</li>
        <li>Lordzwiebelback</li>
        <li>Karokitty</li>
        <li>Yulj</li>
        <li>StrifeAlone</li>
        <li>AkioSensei</li>
        <li>Lukas</li>
        <li>Filum Sensei</li>
        <li>TOWELDAY Austria</li>
      </SupporterList>
      </PageBody>
    </>
  );
}
