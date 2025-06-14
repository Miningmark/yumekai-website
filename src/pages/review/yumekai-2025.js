import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

//Components
import { Spacer, SpacerEmpty, StyledLink } from "@/components/styledComponents";
import Columns2 from "@/components/elements/Columns2";
import ImageCarousel from "@/components/elements/ImageCarousel";

//Images
//Ehrengäste
import CelloticDuetImage from "/public/assets/images/yumekai2025/25_Cellotic_Duet.jpg";
import andyKnoteImage from "/public/assets/images/yumekai2025/Andy_Knote.jpg";
import angeliqueImage from "/public/assets/images/yumekai2025/Angelique.jpg";
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

//Cosplayer
import DokyatoImage from "/public/assets/images/yumekai2025/Dokyato_Image.png";
import EraliaImage from "/public/assets/images/yumekai2025/Eralia_Image.png";
import KorribanImage from "/public/assets/images/yumekai2025/Korriban_Image.png";
import MinekeImage from "/public/assets/images/yumekai2025/Mineke_Image.png";
import ZalinaImage from "/public/assets/images/yumekai2025/Zalina_Image.png";
import UchihaCorpImage from "/public/assets/images/yumekai2025/UchihaCorp_Image.png";

//Aussteller
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
import HanaUSpringImage from "/public/assets/images/yumekai2025/HanaUSpring_Image.png";

//Händler
import HeldenschmiedeImage from "/public/assets/images/yumekai2025/Heldenschmiede_Image.png";
import MangaMerchImage from "/public/assets/images/yumekai2025/MangaMerch_Image.png";
import CosmicMoonlightImage from "/public/assets/images/yumekai2025/CosmicMoonlight_Image.png";
import DavidVerhoevenImage from "/public/assets/images/yumekai2025/3D_Druck_David_Verhoeven_Image.png";
import ArnosRetroVideogamesImage from "/public/assets/images/yumekai2025/ArnosRetroVideogames_Image.png";
import CuteParadiseImage from "/public/assets/images/yumekai2025/CuteParadise_Image.png";
import NoerdShopImage from "/public/assets/images/yumekai2025/NoerdShop_Image.png";
import HeroBaseImage from "/public/assets/images/yumekai2025/HeroBase_Image.png";
import OtakuwonderlandImage from "/public/assets/images/yumekai2025/Otakuwonderland_Image.png";
import PokeVendImage from "/public/assets/images/yumekai2025/PokeVend_Image.png";
import RuneImage from "/public/assets/images/yumekai2025/Rune_Image.png";
import SilverdragonsabersImage from "/public/assets/images/yumekai2025/Silverdragonsabers_Image.png";
import SquiggzImage from "/public/assets/images/yumekai2025/Squiggz_Image.png";
import SteamSpiritsImage from "/public/assets/images/yumekai2025/SteamSpirits_Image.png";

//Künstler
import AliceMySecretImage from "/public/assets/images/yumekai2025/AliceMySecret_Image.png";
import BerrinJostImage from "/public/assets/images/yumekai2025/BerrinJost_Image.png";
import EmytsuuImage from "/public/assets/images/yumekai2025/Emytsuu_Image.png";
import LoonarisImage from "/public/assets/images/yumekai2025/Loonaris_Image.png";
import AnimalixuImage from "/public/assets/images/yumekai2025/Animalixu_Image.png";
import BavarianwoodfoxImage from "/public/assets/images/yumekai2025/Bavarianwoodfox_Image.png";
import StellaBialekImage from "/public/assets/images/yumekai2025/StellaBialek_Image.png";
import AmidalaImage from "/public/assets/images/yumekai2025/Amidala_Image.png";
import FranciNevadaImage from "/public/assets/images/yumekai2025/FranciNevada_Image.png";
import KitsukamiImage from "/public/assets/images/yumekai2025/Kitsukami_Image.png";
import TacTokiImage from "/public/assets/images/yumekai2025/TacToki_Image.png";
import LarinaImage from "/public/assets/images/yumekai2025/Larina_Image.png";
import MadyraImage from "/public/assets/images/yumekai2025/Madyra_Image.png";
import QuinnImage from "/public/assets/images/yumekai2025/Quinn_Image.png";
import RinaMoraImage from "/public/assets/images/yumekai2025/RinaMora_Image.png";
import BeehiveArtistsImage from "/public/assets/images/yumekai2025/BeehiveArtists_Image.png";
import FyflyImage from "/public/assets/images/yumekai2025/Fyfly_Image.png";
import tinypawsImage from "/public/assets/images/yumekai2025/tinypaws_Image.png";
import yupiistarImage from "/public/assets/images/yumekai2025/yupiistar_Image.png";
import ValyrakaImage from "/public/assets/images/yumekai2025/Valyraka_Image.png";
import KirianYumeImage from "/public/assets/images/yumekai2025/KirianYume_Image.png";
import ChristalShad0w0Image from "/public/assets/images/yumekai2025/ChristalShad0w0_Image.png";
import AnaraImage from "/public/assets/images/yumekai2025/Anara_Image.png";

//Autoren
import YuiSpallekImage from "/public/assets/images/yumekai2025/YuiSpallek_Image.png";
import AshturiaImage from "/public/assets/images/yumekai2025/Ashturia_Image.png";

//Workshops
import HiruWorkshop from "/public/assets/hirus/Hiru_Workshop.png";
import cosplayfotosBearbeitenBasicsBisProfitricksPhilippImage from "/public/assets/images/yumekai2025/Cosplay-Fotos_bearbeiten_Basics_bis_Profi-Tricks_-_Philipp.jpg";
import cosplayAlsBerufseinstiegAusbildungZumDamenmaßschneiderImage from "/public/assets/images/yumekai2025/Cosplay_als_Berufseinstieg_-_Ausbildung_zum_Damenmaßschneider.png";
import desnescitrusErfolgreichImNetzImage from "/public/assets/images/yumekai2025/DesnesCitrus_-_Erfolgreich_im_Netz.png";
import fylyColorierenMitAlkoholmarkerImage from "/public/assets/images/yumekai2025/fyly_-_Colorieren_mit_Alkoholmarker.png";
import kanzashiKunstQuinnsArtImage from "/public/assets/images/yumekai2025/Kanzashi_Kunst_-_Quinns_Art.jpg";
import laratornowCroquisDieKunstDesSchnellenZeichnensImage from "/public/assets/images/yumekai2025/LaraTornow_Croquis_-_die_Kunst_des_schnellen_Zeichnens.png";
import mayumiNagashifbcJcultureInteraktiveMangawerkstattImage from "/public/assets/images/yumekai2025/Mayumi_Nagashi_FBC_J-Culture_-_Interaktive_Mangawerkstatt.png";
import minekeImage from "/public/assets/images/yumekai2025/Mineke.jpg";
//import nuclearBastardsImage from "/public/assets/images/yumekai2025/Nuclear_Bastards.png";  //Doppelt
import speedpaintingImage from "/public/assets/images/yumekai2025/Speedpainting.jpg";
import vanessaHerzPropmakingFürBeginnerImage from "/public/assets/images/yumekai2025/Vanessa_Herz_Propmaking_für_Beginner.jpg";
import zaylinaBallkleiderNaehenImage from "/public/assets/images/yumekai2025/Zaylina_-_Ballkleider_naehen.jpg";
import StockingsWorkshopImage from "/public/assets/images/yumekai2025/StockingsWorkshop_Image.png";
//import andyKnoteImage from "/public/assets/images/yumekai2025/Andy_Knote.jpg";  //Doppelt

//Essen
import GrafImage from "/public/assets/images/yumekai2025/Graf_Image.png";
import TaiyakiImage from "/public/assets/images/yumekai2025/Taiyaki_Image.png";
import MaidCafeImage from "/public/assets/images/yumekai2025/MaidCafe_Image.png";
import daZioTullioImage from "/public/assets/images/yumekai2025/Da_Zio_Tullio.jpg";

//Cosplay Wettbewerbe
import catwalk01Image from "/public/assets/images/yumekai2024/catwalk_01.jpg";
import catwalk02Image from "/public/assets/images/yumekai2024/catwalk_02.jpg";
import catwalk03Image from "/public/assets/images/yumekai2024/catwalk_03.jpg";
import catwalk04Image from "/public/assets/images/yumekai2024/catwalk_04.jpg";
import catwalk05Image from "/public/assets/images/yumekai2024/catwalk_05.jpg";
import catwalk06Image from "/public/assets/images/yumekai2024/catwalk_06.jpg";
import catwalk07Image from "/public/assets/images/yumekai2024/catwalk_07.jpg";
import catwalk08Image from "/public/assets/images/yumekai2024/catwalk_08.jpg";
import catwalk09Image from "/public/assets/images/yumekai2024/catwalk_09.jpg";
import catwalk10Image from "/public/assets/images/yumekai2024/catwalk_10.jpg";
import catwalk11Image from "/public/assets/images/yumekai2024/catwalk_11.jpg";
import catwalk12Image from "/public/assets/images/yumekai2024/catwalk_12.jpg";
import catwalk13Image from "/public/assets/images/yumekai2024/catwalk_13.jpg";
import catwalk14Image from "/public/assets/images/yumekai2024/catwalk_14.jpg";
import catwalk15Image from "/public/assets/images/yumekai2024/catwalk_15.jpg";
import catwalk16Image from "/public/assets/images/yumekai2024/catwalk_16.jpg";
import catwalk17Image from "/public/assets/images/yumekai2024/catwalk_17.jpg";
import catwalk18Image from "/public/assets/images/yumekai2024/catwalk_18.jpg";
import catwalk19Image from "/public/assets/images/yumekai2024/catwalk_19.jpg";
import catwalk20Image from "/public/assets/images/yumekai2024/catwalk_20.jpg";
import catwalk21Image from "/public/assets/images/yumekai2024/catwalk_21.jpg";
import catwalk22Image from "/public/assets/images/yumekai2024/catwalk_22.jpg";
import catwalk23Image from "/public/assets/images/yumekai2024/catwalk_23.jpg";
import catwalk24Image from "/public/assets/images/yumekai2024/catwalk_24.jpg";
import catwalk25Image from "/public/assets/images/yumekai2024/catwalk_25.jpg";

const catwalkImages = [
  { image: catwalk01Image, alt: "Bild Catwalk 01", link: "" },
  { image: catwalk02Image, alt: "Bild Catwalk 02", link: "" },
  { image: catwalk03Image, alt: "Bild Catwalk 03", link: "" },
  { image: catwalk04Image, alt: "Bild Catwalk 04", link: "" },
  { image: catwalk05Image, alt: "Bild Catwalk 05", link: "" },
  { image: catwalk06Image, alt: "Bild Catwalk 06", link: "" },
  { image: catwalk07Image, alt: "Bild Catwalk 07", link: "" },
  { image: catwalk08Image, alt: "Bild Catwalk 08", link: "" },
  { image: catwalk09Image, alt: "Bild Catwalk 09", link: "" },
  { image: catwalk10Image, alt: "Bild Catwalk 10", link: "" },
  { image: catwalk11Image, alt: "Bild Catwalk 11", link: "" },
  { image: catwalk12Image, alt: "Bild Catwalk 12", link: "" },
  { image: catwalk13Image, alt: "Bild Catwalk 13", link: "" },
  { image: catwalk14Image, alt: "Bild Catwalk 14", link: "" },
  { image: catwalk15Image, alt: "Bild Catwalk 15", link: "" },
  { image: catwalk16Image, alt: "Bild Catwalk 16", link: "" },
  { image: catwalk17Image, alt: "Bild Catwalk 17", link: "" },
  { image: catwalk18Image, alt: "Bild Catwalk 18", link: "" },
  { image: catwalk19Image, alt: "Bild Catwalk 19", link: "" },
  { image: catwalk20Image, alt: "Bild Catwalk 20", link: "" },
  { image: catwalk21Image, alt: "Bild Catwalk 21", link: "" },
  { image: catwalk22Image, alt: "Bild Catwalk 22", link: "" },
  { image: catwalk23Image, alt: "Bild Catwalk 23", link: "" },
  { image: catwalk24Image, alt: "Bild Catwalk 24", link: "" },
  { image: catwalk25Image, alt: "Bild Catwalk 25", link: "" },
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

export default function YumeKai2025() {
  return (
    <>
      <h1>Rückblick YumeKai 2025</h1>
      <p>
        Am 31.Mai & 1.Juni 2025 hat die zweite YumeKai stattgefunden. Hier könnt ihr nochmal
        Eindrücke der Convention durch Bilder und Videos erleben!
      </p>

      <p>
        Werft gerne auch einen Blick in unser{" "}
        <StyledLink href="/downloads/YumeKai_2025_Programmheft.pdf" target="_blank">
          Programmheft
        </StyledLink>{" "}
        von 2025, um so einen besseren Eindruck von unseren vielzähligen Programmpunkten zu
        bekommen.
      </p>

      <ul>
        <li>
          <StyledLink href="#ehrengaeste">Ehrengäste</StyledLink>
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
          <StyledLink href="#spiele-gaming">Spiele & Gaming</StyledLink>
        </li>
        <li>
          <StyledLink href="#cosplay-wettbewerbe">Cosplay Wettbewerbe</StyledLink>
        </li>
        <li>
          <StyledLink href="#danksagung">Danksagung</StyledLink>
        </li>
      </ul>

      <Spacer id="ehrengaeste" />

      <h2>Ehrengäste</h2>
      <p>Dieses Jahr hatten wir für euch noch mehr Ehrengäste im Programm und sogar unseren ersten internationalen Showact auf der Bühne stehen!<br />
      <br />
      Zum ersten Mal haben wir auch mit den Nerd Daddy's live Podcasts auf unserer Bühne präsentieren dürfen. Bei den Podcasts waren auch ein großer Teil unserer Ehrengäste mit dabei, so konntet ihr mehr über Petra Scheeser oder Andy Knote erfahren am Samstag. Und am Sonntag wurden die Synchronsprecher Dominik Auer, Julia Meynen und Sebastian Fitzner in den Fokus genommen.<br />
      <br />
      Natürlich durfte auch bei dieser Veranstaltung von uns Stellaria nicht fehlen, sie gehören inzwischen zu unserem festen Inventar und zeigen immer vollen Einsatz auf der Bühne. Mit ihrem Programm &quot;Stellaria: Moonlight Melodies&quot; haben sie die Bühne ordentlich in Stimmung gebracht am Samstagvormittag. Anschließend waren sie an ihrem Merchstand für euch da, für Bilder, Gespräche und Fragen.<br/>
      <br />
      Unsere internationale Sängerin MION hat mit ihrem Repertoire an Songs und ihrer süßen Art jeden in den Bann gezogen und ihr konntet sie über die ganze Convention hinweg auch an ihrem eigenen Merchstand antreffen und euch mit ihr unterhalten. Wir hatten die Freude sie und ihren Manager vom Flughafen abzuholen und ihnen Deutschland etwas näher zu bringen. Wir haben unterschiedliche Städte besichtigt und sie haben Currywurst und Brezeln probiert, welche ihnen sehr geschmeckt haben.<br />
      <br />
      Mit geballter Stimmenpower durften wir Echo Ane zum ersten Mal bei uns auf der Bühne begrüßen. Sie hat ihren eigenen Song &quot;Kawaii-Rave&quot; bei uns präsentiert und mit ihrer Songliste nicht nur Anime Herzen höher schlagen lassen, sondern auch die Kindheitserinnerungen wieder aufleben lassen.<br />
      <br />
      Auch Junihuhn war dieses Jahr wieder mit am Start und hat mit seinem Programmpunkt &quot;Junihuhn - Shinkai Piano Concert&quot;. Das Publikum wurde durch die emotionale Piano Aufführung zu Tränen gerührt. Für alle Fans von &quot;Suzume&quot;, &quot;Your Name&quot; und &quot;Weathering With You&quot; können wir nur empfehlen die Aufführung von Junihuhn zu sehen!<br />
      <br />
      Highlight am Samstagabend war dann das Konzert von Petra Scheeser, welche die Nostalgie im Bühnensaal erweckt hat. Sie und Andy Knote konntet ihr am Samstag auf der Convention antreffen und bei einem Q&A und Podcast mehr über die beiden erfahren. Am Abend gab es nach dem Konzert auch noch die Möglichkeit bei einer gratis Autogrammstunde bei ihnen vorbei zu schauen.<br />
      <br />
      Wer am Samstag auf dem Cosplay Ball war, hatte die Gelegenheit zu der Musik von Cellotic Duetts zu tanzen. Als Duett haben die beiden den Tanzsaal ordentlich in Stimmung gebracht und so manchen Tanzpärchen eine Träne aus dem Auge gelockt mit ihren emotionalen Stücken. Auch am Sonntag konntet ihr sie nochmals live auf der Bühne erleben oder sie an ihrem Merchstand ansprechen.<br />
      <br />
      Mit dabei hatten wir dieses Jahr auch Lyria, eine VTuberin aus der Schweiz, welche wir auch letztes Jahr schon bei uns begrüßen durften. Sie hat die lange Reise mit der Bahn auf sich genommen, um vor Ort dabei zu sein und euch von hinter dem Vorhang sehen zu können.<br />
      <br />
      Angel_NG hat bei uns ihren aller ersten Bühnenauftritt gefeiert und dank eurer Unterstützung eine gute Premiere bei uns machen dürfen! Bei ihrer Liederauswahl war Sie besonders aufmerksam und wollte euch Songs präsentieren, die nicht zu häufig auf der Bühne vorkommen und auch die Kindheitserinnerungen in euch wecken.<br />
      <br />
      Unsere Synchronsprecher Dominik Auer, Julia Meynen und Sebastian Fitzner konntet ihr im Synchronsprecher Bereich des Maximilian-Kolbe-Haus auffinden und mit ihnen unvergessliche Momente kreieren.
    </p>
      <ContentWrapper>
        <ContentContainer
          src={stellariaYumekaiPromobild2025Image}
          alt="Stellaria"
          link="https://www.instagram.com/stellaria.idols/"
        />
        <ContentContainer
          src={mionHHeartImage}
          alt="MION"
          link="https://www.instagram.com/mion_official/"
        />
        <ContentContainer
          src={echoAneImage}
          alt="Echo Ane"
          link="https://www.instagram.com/echoane_music?igsh=MWk2Y2piODNkbnRqaw%3D%3D&utm_source=qr"
        />
        <ContentContainer
          src={junihuhnShinkaiImage}
          alt="Junihuhn"
          link="https://www.instagram.com/juni.huhn/"
        />
        <ContentContainer
          src={petraScheeserImage}
          alt="Petra Scheeser"
          link="https://www.instagram.com/scheeserin/"
        />
        <ContentContainer
          src={lyriaIdolsignature2Image}
          alt="Lyria"
          link="https://www.instagram.com/lyriavt/"
        />
        <ContentContainer
          src={CelloticDuetImage}
          alt="Cellotic Duets"
          link="https://linktr.ee/cellotic"
        />
        <ContentContainer
          src={angeliqueImage}
          alt="Angel_NG"
          link="https://www.instagram.com/angel_ng___?igsh=MW5uYzZ4YzNmYW5x&utm_source=qr"
        />
        <ContentContainer
          src={nerdDaddysImage}
          alt="Nerd Daddy's"
          link="https://www.instagram.com/nerddaddys.podcast/"
        />
        <ContentContainer
          src={andyKnoteImage}
          alt="Andy Knote"
          link="https://www.instagram.com/andy_knote/"
        />
        <ContentContainer
          src={dominikAuerImage}
          alt="Dominik Auer"
          link="https://www.instagram.com/dominikauer.official/"
        />
        <ContentContainer
          src={juliaMeynenImage}
          alt="Julia Meynen"
          link="https://www.instagram.com/juliameynen/"
        />
        <ContentContainer
          src={sebastianFitznerImage}
          alt="Sebastian Fitzner"
          link="https://www.instagram.com/fitzner.sebastian/"
        />
      </ContentWrapper>

      <Spacer id="cosplayer" />

      <h2>Cosplayer</h2>
      <p>Auch dieses Jahr hatten wir wieder unglaublich talentierte Cosplayer bei uns zu Gast. <br />
      <br />
      Ihr konntet sie an ihren Ständen in der Stadthalle zu verschiedenen Themen ansprechen oder Fotos mit ihnen machen. Bei den Cosplay Wettbewerben waren sie als Jury dabei und bei dem Q&A konnte man sie näher kennen lernen. 
      <br /><br />Bei jedem von ihnen konntet ihr auch bei einem Workshop tiefer in Cosplay Themen reinkommen und nochmals gezielte Fragen stellen. Über das Wochenende hinweg haben Sie Erfahrungen, Tipps und Tricks mit euch geteilt und standen mit all ihrer Erfahrung euch zur Seite.</p>
      <ContentWrapper>
        <ContentContainer
          src={DokyatoImage}
          alt="Dokyato"
          link="https://www.instagram.com/dokyato/"
        />
        <ContentContainer
          src={EraliaImage}
          alt="Eralia"
          link="https://www.instagram.com/eralia_iwahana/"
        />
        <ContentContainer
          src={KorribanImage}
          alt="Korriban Cosplay"
          link="https://www.instagram.com/korribancosplay/"
        />
        <ContentContainer
          src={MinekeImage}
          alt="Yaraiya Cosplay"
          link="https://www.instagram.com/yaraiyacosplay/"
        />
        <ContentContainer
          src={ZalinaImage}
          alt="Zaylina"
          link="https://www.instagram.com/zaylina1/"
        />
        <ContentContainer
          src={UchihaCorpImage}
          alt="Imonee Cosplay"
          link="https://www.instagram.com/imoneecosplay/"
        />
      </ContentWrapper>

      <Spacer id="aussteller" />
      <h2>Aussteller</h2>
      <p>Unsere Austeller haben euch die unterschiedlichsten Themengebiete nähergebracht und ausprobieren lassen. Für jeden war etwas dabei, sei es eine entspannte Runde Go spielen oder bei den Nuclear Bastads eine Endzeit-Bastel-Aktivität mitzumachen. <br />
      <br />
      Dieses Jahr konntet ihr im Sonnenschein auch richtig die Itashas der N.G.E Itascha e.V. bewundern. Oder das Maid Café von Vivid Arise eSports e.V. für Kuchen und Kaffee besuchen.<br />
      <br />Bei den Foto Requisiten von Cosplay Alpin konnten wieder super Bilder geschossen werden. Und der CoHeKi e.V. war wieder für Spendensammlung für einen guten Zweck unterwegs.<br />
      <br />Bei unseren zahlreichen Ausstellern konntet ihr auch mehr zu anderen Themen wie Conventions oder Cosplay mehr erfahren.</p>
      <ContentWrapper>
        <ContentContainer
          src={cuglogoImage}
          alt="Cosplay Union Germany"
          link="https://www.instagram.com/cosplay_union_germany/"
        />
        <ContentContainer
          src={mishiroBannerImage}
          alt="Mishiro"
          link="https://www.instagram.com/mishiro_augsburg/"
        />
        <ContentContainer
          src={vanityartImage}
          alt="Vanity Art Photography"
          link="https://www.instagram.com/vanity_art_photography/"
        />
        <ContentContainer
          src={kdkasaiImage}
          alt="KDKasai"
          link="https://www.instagram.com/kdkasai/"
        />
        <ContentContainer
          src={cohekiImage}
          alt="CoHeKi e.V."
          link="https://www.instagram.com/coheki_ev/"
        />
        <ContentContainer
          src={ngeItashasImage}
          alt="N.G.E. Itasha e.V"
          link="https://www.instagram.com/n.g.e._itasha/"
        />
        <ContentContainer
          src={nuclearBastardsImage}
          alt="Nuclear Bastards"
          link="https://www.instagram.com/nuclear.bastards/"
        />
        <ContentContainer
          src={cosquestLogoImage}
          alt="CosQuest"
          link="https://www.instagram.com/cosplay_questmuc/"
        />
        <ContentContainer
          src={cosplayAlpinImage}
          alt="Cosplay Alpin"
          link="https://www.instagram.com/cosplayalpin/"
        />
        <ContentContainer
          src={towldayaustriaImage}
          alt="Towelday Austria"
          link="https://www.instagram.com/towelday_austria/"
        />
        <ContentContainer
          src={goVereinImage}
          alt="Bayrischer Go Verein e.V."
          link="https://www.bgov.de/"
        />
        <ContentContainer
          src={vividAriseEvImage}
          alt="Vivid Arise eSports e.V."
          link="https://www.instagram.com/vivid_arise_esports/"
        />
        <ContentContainer
          src={HanaUSpringImage}
          alt="Hana & Spring Convention"
          link="https://www.instagram.com/hana_spring_con/"
        />
      </ContentWrapper>

      <Spacer id="haendler" />
      <h2>Händler</h2>
      <p>
        Auch bei der YumeKai 2025 boten unsere Händler ein vielfältiges Shopping-Erlebnis für euch an. 
        <br />Egal in welche Richtung, hier war alles vertreten von unter anderem Brettspielen zu Plüschtieren zu Schmuck und auch über Tabletop und TCG hinweg gab es auch Lichtschwerter oder 3D Druck und auch Klemmbausteine.
      </p>
      <ContentWrapper>
        <ContentContainer
          src={HeldenschmiedeImage}
          alt="Heldenschmiede"
          link="https://www.heldenschmiede.eu/"
        />
        <ContentContainer
          src={MangaMerchImage}
          alt="Manga-Merch"
          link="https://www.manga-merch.com"
        />
        <ContentContainer
          src={CosmicMoonlightImage}
          alt="CosmicMoonlight"
          link="https://www.cosmicmoonlight.com/"
        />
        <ContentContainer
          src={DavidVerhoevenImage}
          alt="3D Druck David Verhoeven"
          link="https://www.instagram.com/djv_3d/"
        />
        <ContentContainer
          src={ArnosRetroVideogamesImage}
          alt="Arnos Retro Videogames"
          link="https://www.arnos-retro-videogames.com"
        />
        <ContentContainer
          src={CuteParadiseImage}
          alt="Cute Paradise"
          link="https://cute-paradise.at/"
        />
        <ContentContainer
          src={NoerdShopImage}
          alt="Dein NöRD Shop"
          link="https://www.dein-noerd-shop.com"
        />
        <ContentContainer
          src={OtakuwonderlandImage}
          alt="Otakuwonderland"
          link="https://www.instagram.com/otakuwonderland_de/"
        />
        <ContentContainer src={PokeVendImage} alt="PokèVend" link="https://www.pokevend.at" />
        <ContentContainer
          src={HeroBaseImage}
          alt="Hero Base"
          link="https://alexander-karnitschnig.myshopify.com/collections"
        />
        <ContentContainer src={RuneImage} alt="Rune Store" link="https://www.rune-online.com" />
        <ContentContainer
          src={SilverdragonsabersImage}
          alt="Silver Dragon Sabers"
          link="https://www.sd-sabers.de"
        />
        <ContentContainer src={SquiggzImage} alt="Squiggz" link="https://www.squiggz.com/" />
        <ContentContainer
          src={SteamSpiritsImage}
          alt="SteamSpirits"
          link="https://www.steamspirits.net"
        />
      </ContentWrapper>

      <Spacer id="kuenstleratelier" />
      <h2>Künstleratelier</h2>
      <p>In unserem Künstlerbereich konntet ihr ein paar bekannte Gesichter von letztem Jahr wieder finden, aber auch viele neue kennenlernen. Unser Künstleratelier hat euch in allen Bereichen und von den unterschiedlichsten Fandoms Kunst und handgemachtes geboten. <br />
      Einige haben ihr Wissen und ihre Expertise auch in Workshops mit euch geteilt und dort nochmal spezifischere Fragen beantwortet.</p>
      <ContentWrapper>
        <ContentContainer
          src={AliceMySecretImage}
          alt="AliceMySecret"
          link="https://www.instagram.com/alicemysecret"
        />
        <ContentContainer
          src={BerrinJostImage}
          alt="Berrin Jost"
          link="https://www.instagram.com/crazy_berrin"
        />
        <ContentContainer
          src={EmytsuuImage}
          alt="Emytsuu"
          link="https://www.instagram.com/emytsuu/?hl=de"
        />
        <ContentContainer
          src={LoonarisImage}
          alt="Loonaris"
          link="https://www.instagram.com/loonarisarts"
        />
        <ContentContainer
          src={AnimalixuImage}
          alt="Animalixu"
          link="https://www.instagram.com/animalixu"
        />
        <ContentContainer
          src={BavarianwoodfoxImage}
          alt="BavarianWoodfox.art"
          link="https://www.instagram.com/bavarianwoodfox/"
        />
        <ContentContainer
          src={StellaBialekImage}
          alt="Stella Bialek"
          link="https://www.instagram.com/stellabialek"
        />
        <ContentContainer
          src={AmidalaImage}
          alt="Amidala Artwork"
          link="https://www.instagram.com/amidala.artwork/"
        />
        <ContentContainer
          src={FranciNevadaImage}
          alt="Franci Nevada"
          link="https://www.instagram.com/nevada.art.shop/"
        />
        <ContentContainer
          src={KitsukamiImage}
          alt="Kitsukami"
          link="https://www.instagram.com/kitsu_kami/"
        />
        <ContentContainer
          src={TacTokiImage}
          alt="TacToki Illustrations"
          link="https://www.instagram.com/tactoki/"
        />
        <ContentContainer
          src={LarinaImage}
          alt="Larina"
          link="https://www.instagram.com/lariina.art/"
        />
        <ContentContainer
          src={MadyraImage}
          alt="Madyra"
          link="https://www.instagram.com/madyra_arts"
        />
        <ContentContainer
          src={QuinnImage}
          alt="Quinn"
          link="https://www.instagram.com/quinnskanzashi/"
        />
        <ContentContainer
          src={RinaMoraImage}
          alt="Rina Mora Art"
          link="https://www.instagram.com/rina.mora.art"
        />
        <ContentContainer
          src={BeehiveArtistsImage}
          alt="BeehiveArtists"
          link="https://www.instagram.com/beehiveartists/"
        />
        <ContentContainer src={FyflyImage} alt="Fyly" link="https://instagram.com/fyly_cosplays" />
        <ContentContainer
          src={tinypawsImage}
          alt="Tiny Paws Treasures"
          link="https://www.instagram.com/cyancalla/"
        />
        <ContentContainer
          src={yupiistarImage}
          alt="Yupiistar"
          link="https://yupiistar.carrd.co/#portfolio"
        />
        <ContentContainer
          src={AnaraImage}
          alt="Anara_Twice"
          link="https://www.instagram.com/anaratwice/?hl=de"
        />
        <ContentContainer
          src={ChristalShad0w0Image}
          alt="Christal.Shad0w0"
          link="https://www.instagram.com/christal.shadow/"
        />
        <ContentContainer
          src={KirianYumeImage}
          alt="Kirian Yume"
          link="https://www.instagram.com/kirianyume/"
        />
        <ContentContainer
          src={ValyrakaImage}
          alt="Valyraka"
          link="https://www.instagram.com/valyraka/"
        />
      </ContentWrapper>

      <Spacer id="autoren" />
      <h2>Autoren</h2>
      <p>
        In diesem Jahr gab es zusätzlich zu all den tollen Künstlern auch noch einen eigenen
        Autoren-Brerich. Hier konntet ihr euch mit Yui Spallek und Ashturia unterhalten und euch austauschen.
      </p>
      <ContentWrapper>
        <ContentContainer
          src={YuiSpallekImage}
          alt="Yui Spallek"
          link="https://www.instagram.com/yui_spallek"
        />
        <ContentContainer src={AshturiaImage} alt="Ashturia" link="https://www.naomihuber.com/" />
      </ContentWrapper>

      <Spacer id="workshops" />
      <h2>Workshops</h2>
      <p>Auch bei den Workshops gab es dieses Jahr eine Menge zum Erkunden und lernen. Verschiedene tehmenbereiche wurden hier dieses Jahr präsentiert, sei es Cosplay, Zeichnen, Miniaturen bemalen, Internet päsenz zeigen oder auch Bühnenauftritte. Hier gab es wirklich zu allen Themen etwas, ein besinderes Highlight war unser Q&A mit Andy Knoten, welchen ihr näher kennenlernen durftet.</p>

      <ContentWrapper>
        <ContentContainer
          src={cosplayAlsBerufseinstiegAusbildungZumDamenmaßschneiderImage}
          alt="Cosplay als Berufseinstieg"
          link="https://www.instagram.com/korribancosplay/"
        />
        <ContentContainer
          src={vanessaHerzPropmakingFürBeginnerImage}
          alt="Propmaking für Beginner"
          link="https://www.instagram.com/Akunyaah/"
        />
        <ContentContainer
          src={desnescitrusErfolgreichImNetzImage}
          alt="Erfolgreich im Netz"
          link="https://www.instagram.com/DesnesCitrus/"
        />
        <ContentContainer
          src={fylyColorierenMitAlkoholmarkerImage}
          alt="Colorieren mit Alkoholmarker für Anfänger"
          link="https://www.instagram.com/fyly_draws/"
        />
        {/*<ContentContainer src={HiruWorkshop} alt="Arbeiten mit Leder für Cosplay" link="https://www.instagram.com/eralia_iwahana/" />*/}
        <ContentContainer
          src={kanzashiKunstQuinnsArtImage}
          alt="1x1 Kanzashi Kunst"
          link="https://www.instagram.com/quinnskanzashi/"
        />
        <ContentContainer
          src={speedpaintingImage}
          alt="Speedpainting Challenge"
          link="https://www.heldenschmiede.eu/"
        />
        <ContentContainer
          src={laratornowCroquisDieKunstDesSchnellenZeichnensImage}
          alt="Croquis - die Kunst des schnellen Zeichnens"
        />
        <ContentContainer
          src={nuclearBastardsImage}
          alt="Die Kunst des Überlebens - Vorbereitung auf die Endzeit"
          link="https://www.instagram.com/nuclear.bastards/"
        />
        <ContentContainer
          src={mayumiNagashifbcJcultureInteraktiveMangawerkstattImage}
          alt="Interaktive Manga-Werkstatt"
          link="https://www.instagram.com/nagashi_mayumi/"
        />
        <ContentContainer
          src={andyKnoteImage}
          alt="Q&A mit Andy Knote"
          link="https://www.instagram.com/andy_knote/"
        />
        <ContentContainer
          src={minekeImage}
          alt="Cosplay Competition für Beginner"
          link="https://www.instagram.com/yaraiyacosplay/"
        />
        <ContentContainer
          src={cosplayfotosBearbeitenBasicsBisProfitricksPhilippImage}
          alt="Cosplay-Fotos bearbeiten - Basics bis Profi-Tricks"
          link="https://www.instagram.com/photos_by_philipp/"
        />
        <ContentContainer
          src={StockingsWorkshopImage}
          alt="Stockings Workshop"
          link="https://www.instagram.com/imoneecosplay/"
        />
        <ContentContainer
          src={zaylinaBallkleiderNaehenImage}
          alt="Ballkleider - Eleganz trifft Fantasie"
          link="https://www.instagram.com/zaylina1/"
        />
      </ContentWrapper>

      <Spacer id="essen" />
      <h2>Essen</h2>
      <p>Was wäre eine Convention ohne die richtige Stärung zwischendurch? Bei unseren Foodtrucks und außenständen konttet ihr euch sowohl Deftiges als auch Süßes holen und wer sich dabei ein bisschen entspannen wollte konnte das Vivid Arise Maid Café besuchen kommen.</p>

      <ContentWrapper>
        <ContentContainer src={GrafImage} alt="GRAF FOOD ON WHEELS!" />
        <ContentContainer src={daZioTullioImage} alt="Da Zio Tullio" />
        <ContentContainer src={TaiyakiImage} alt="Wie.MAI.KAI" />
        <ContentContainer src={MaidCafeImage} alt="Vivid Arise Maid Café" />
      </ContentWrapper>

      <Spacer id="spiele-gaming" />
      <h2>Spiele, Gaming & Karaoke</h2>
      <p>Für das Herz all unserer Brett- und Kartenspielfreunde hatten wir dank unseren Händlern der Heldenschmiede und dem Squiggz ein hervorangendes Angebot. Hier konnten nicht nur verschiedenste Spiele gekauft werden, sonder auch Demospiele getestet werden! Für alle Fans von TCG gab es Tuniere von Magic: the Gathering, YU-GI-OH! und dem One Piece Card Game mit tollen Preisen!<br />
<br />
Wer mit Brettspielen, Kartenspielen oder Tabletop nichts anfangen konnte war bei unserem Gamingraum, der von dem Skyforgern geleitet wurde gut aufgehoben. Hier gab es nicht nur verschiedenste Konsolen und Spiele zum testen sondern auch interessante Turniere wie Dragon Ball FighterZ!<br />
<br />
Neu dabei war dieses Jahr unser Karaoke Raum, in welchem ihr über das gesamte Wochenende singen konntet. Am Samstagabend gab es dort sogar einen Karavision Song Contest!</p>

      <Spacer id="cosplay-wettbewerbe" />
      <h2>Cosplay Wettbewerbe & Catwalk</h2>
      <h3>Performance:</h3>
      <p>Bei unserem Performance Wettbewerb hatte jeder teilnehmer bis zu 4 Minuten auf der Bühne Zeit,  sich mit einer kurzen Darbietung auf der Bühne zu präsentieren. Da wir in diesem Jahr leider nur wenige Teilnehmer begrüßen durften, haben wir uns dazu entschieden, lediglich einen ersten Platz zu vergeben. Alle vier Teilnehmenden erhielten jedoch als Anerkennung für ihren Mut und ihre Teilnahme eine kleine Gewinntüte. Unser Jurry bestehend aus <StyledLink href="https://www.instagram.com/eralia_iwahana/" target="_blank" rel="noopener noreferrer">Eralia</StyledLink>,<StyledLink href="https://www.instagram.com/zaylina1/" target="_blank" rel="noopener noreferrer">Zaylina</StyledLink>, <StyledLink href="https://www.instagram.com/yaraiyacosplay/" target="_blank" rel="noopener noreferrer">Yaraiya</StyledLink> und <StyledLink href="https://www.instagram.com/imoneecosplay/" target="_blank" rel="noopener noreferrer">Imonee Cosplay</StyledLink> hatte es sehr schwer sich für einen Gewinner zu entscheiden. Der erste Platz ging an das Duo <StyledLink href="https://www.instagram.com/tiefseemonster.krake/" target="_blank" rel="noopener noreferrer">Krake und Tiger</StyledLink> als Seth (god version) und Anubis (child version).</p>
      <ContentWrapper>
        <ContentContainer src={GrafImage} alt="Bild von dem Cosplay Performance Wettbewerb" />
      </ContentWrapper>

      <h3>Crafting:</h3>
      <p>Mit unserem Crafting Wettbewerb wollten wir mal etwas ganz anderes ausprobieren. Hier wurden nur die Cosplays, Wigs, Accessoires und Make-Up der Teilnehmnden Berwertet. Der kurze catwalk auf der Bühne wurde nicht in die Bewertwung aufgenommen, sodass es wirklich nur um die Crafting Techniken und sie Fähigkeiten der Teilnehmer ging. Unsere Jury bestand aus <StyledLink href="https://www.instagram.com/dokyato/" target="_blank" rel="noopener noreferrer">Dokyato</StyledLink>,<StyledLink href="https://www.instagram.com/eralia_iwahana/" target="_blank" rel="noopener noreferrer">Eralia</StyledLink>, <StyledLink href="https://www.instagram.com/yaraiyacosplay/" target="_blank" rel="noopener noreferrer">Yaraiya</StyledLink> und <StyledLink href="https://www.instagram.com/korribancosplay/" target="_blank" rel="noopener noreferrer">Korriban</StyledLink>.<br />
      <br />
      1.Platz: Lara als Sister Lidwin von Baldur's Gate 3<br />
      2.Platz: Duo bestehend aus <StyledLink href="https://www.instagram.com/tiefseemonster.krake/" target="_blank" rel="noopener noreferrer">Krake und Tiger</StyledLink> als Aonung und Tsireya von Avatar<br />
      3.Platz: <StyledLink href="https://www.instagram.com/fenriscosplay/" target="_blank" rel="noopener noreferrer">Fenriscosplay</StyledLink>Fenriscosplay als Valkyre aus Black Desert</p>
      <ContentWrapper>
        <ContentContainer src={GrafImage} alt="Bild von dem Cosplay Performance Wettbewerb" />
      </ContentWrapper>
      
      <h3>Offener Catwalk:</h3>
      <p>Bei dem Offenen Catwalk durfte jeder Teilnehmen und einmal über die große Bühne laufen und posieren. Ganz ohne Druck vor Bewertung oder Performance durfte jeder hier die Zeit auf der Bühne genießen. Hier ein paar Einblicke der Teilnehmer:</p>









      <Spacer id="danksagung" />
      <h2>Danksagung</h2>
      <p>
        Ein riesiges Dankeschön an alle, die die YumeKai 2025 zu einem unvergesslichen Erlebnis
        gemacht haben! Ohne euch wäre diese Convention nicht das, was sie ist. Unser besonderer Dank
        gilt den Helfern, deren unermüdlicher Einsatz und Leidenschaft das Herzstück unseres Erfolgs
        waren. Ebenso danken wir den Händlern, die mit ihren einzigartigen Produkten und kreativen
        Ständen die YumeKai bereichert haben.
        <br />
        <br />
        Ein herzliches Dankeschön an unsere fantastischen Besucher, eure Energie, Begeisterung und
        Kreativität haben die Atmosphäre der YumeKai geprägt. Auch den Showacts und Ehrengästen gilt
        unser großer Dank: Eure Auftritte und Panels haben die Convention zu einem besonderen
        Highlight gemacht.
        <br />
        <br />
        Ein extra großes Dankeschön geht an die Cosplayer und Walking Acts, die mit ihren
        beeindruckenden Kostümen und ihrer Präsenz für eine lebendige und farbenfrohe Convention
        gesorgt haben. Ebenso möchten wir die zahlreichen Vereine und Künstler hervorheben, deren
        Präsentationen und Kunstwerke die Vielfalt und Kreativität der YumeKai in den Mittelpunkt
        gerückt haben.
        <br />
        <br />
        Nicht zu vergessen sind die Workshop-Leiter, die mit ihrer Expertise und Leidenschaft Wissen
        vermittelt und unsere Besucher inspiriert haben.
        <br />
        <br />
        Dank euch allen war die YumeKai 2025 ein voller Erfolg! Wir freuen uns schon auf das nächste
        Jahr und können es kaum erwarten, euch alle wiederzusehen!
      </p>
    </>
  );
}
