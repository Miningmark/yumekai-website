import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

//Components
import { Spacer, StyledLink } from "@/components/styledComponents";
import Columns2 from "@/components/elements/Columns2";
import ImageCarousel from "@/components/elements/ImageCarousel";

//Images
//Ehrengäste
import danielSchlauchImage from "/public/assets/images/yumekai2024/Daniel-Schlauch-by-Ruffys-Fotografie_4_3.png";
import dirkMeyerImage from "/public/assets/images/yumekai2024/Dirk-Meyer-by-Ruffys-Fotografie_4_3.png";
import hoshinoMitsukiImage from "/public/assets/images/yumekai2024/Hoshino-Mitsuki.png";
import junihuhnImage from "/public/assets/images/yumekai2024/Junihuhn.png";
import stellariaImage from "/public/assets/images/yumekai2024/Stellaria.jpg";
import tanukiImage from "/public/assets/images/yumekai2024/Tanuki.jpg";
import madlightImage from "/public/assets/images/yumekai2024/Madlight.png";
import steffShizoImage from "/public/assets/images/yumekai2024/Steffshizo.png";
import danijelKoestlichImage from "/public/assets/images/yumekai2024/Danijel-Koestlich.png";

//Cosplayer
import naruCosplayImage from "/public/assets/images/yumekai2024/Naru-Cosplay.jpg";
import paleLitteDragonAndArsinoeImage from "/public/assets/images/yumekai2024/PaleLittleDragon_und_Arsi_Arsinoe.jpg";
import eraliaImage from "/public/assets/images/yumekai2024/Eralia.jpg";
import willgrimImage from "/public/assets/images/yumekai2024/Willgrim.jpeg";
import meroYunytImage from "/public/assets/images/yumekai2024/Mero-und-Yunyte.jpg";
import evelynImage from "/public/assets/images/yumekai2024/Evelyn-Cosplay.jpg";
import imoneeCosplayImage from "/public/assets/images/yumekai2024/Imoneecosplay.jpg";
import nuclearBastardsImage from "/public/assets/images/yumekai2024/Nuclear-Bastards.jpg";

//Aussteller
import austrianItashaImage from "/public/assets/images/yumekai2024/Itashas.jpg";
import rubyTheRaptorImage from "/public/assets/images/yumekai2024/Ruby_the_Raptor.jpg";
import bokehBardenImage from "/public/assets/images/yumekai2024/Bokehbarden.png";

//Händler
import druckDavidVerhoevenImage from "/public/assets/images/yumekai2024/3D-Druck_David_Verhoeven.jpg";
import arnosRetroVideogamesImage from "/public/assets/images/yumekai2024/Arnos_Retro_Videogames.png";
import ashturiaImage from "/public/assets/images/yumekai2024/Ashturia.jpg";
import cosmicmoonlightImage from "/public/assets/images/yumekai2024/cosmicmoonlight.png";
import cuteParadiseImage from "/public/assets/images/yumekai2024/Cute_Paradise.png";
import deinNoerdShopImage from "/public/assets/images/yumekai2024/Dein_NoeRD_Shop.jpg";
import heldenschmiedeLogoImage from "/public/assets/images/yumekai2024/Heldenschmiede_Logo.png";
import narutoFoodtruckSweetsImage from "/public/assets/images/yumekai2024/Naruto_FoodTruck.png";
import otakuwonderlandImage from "/public/assets/images/yumekai2024/Otakuwonderland.png";
import pokevendImage from "/public/assets/images/yumekai2024/Pokevend.jpg";
import silverdragonSabersImage from "/public/assets/images/yumekai2024/Silverdragon_Sabers.png";
import squiggzImage from "/public/assets/images/yumekai2024/Squiggz.png";
import steamspiritsImage from "/public/assets/images/yumekai2024/SteamSpirits.png";
import yeOldOrcMerchandisingImage from "/public/assets/images/yumekai2024/ye_old_Orc_Merchandising.png";

//Künstler
import ananatzeImage from "/public/assets/images/yumekai2024/Ananatze.png";
import anaraTwiceImage from "/public/assets/images/yumekai2024/Anara_Twice.png";
import artsyAoriImage from "/public/assets/images/yumekai2024/Artsy_Aori.png";
import bavarianWoodfoxImage from "/public/assets/images/yumekai2024/Bavarian_Woodfox.png";
import cheekyChwingaImage from "/public/assets/images/yumekai2024/cheeky_chwinga.jpg";
import eenteImage from "/public/assets/images/yumekai2024/eente.png";
import emytsuuImage from "/public/assets/images/yumekai2024/Emytsuu.png";
import fylyImage from "/public/assets/images/yumekai2024/Fyly.png";
import ignispectusartImage from "/public/assets/images/yumekai2024/IgnisPectusArt.png";
import kirianYumeImage from "/public/assets/images/yumekai2024/Kirian_Yume.png";
import krixxiImage from "/public/assets/images/yumekai2024/krixxi.png";
import manyMindArtImage from "/public/assets/images/yumekai2024/Many_Mind_Art.jpg";
import mausalImage from "/public/assets/images/yumekai2024/mausal.jpg";
import myuchiisuImage from "/public/assets/images/yumekai2024/Myuchiisu.png";
import nikitasFantasiesImage from "/public/assets/images/yumekai2024/Nikitas_Fantasies.jpg";
import prettysmartfashionImage from "/public/assets/images/yumekai2024/Prettysmartfashion.png";
import roxinoImage from "/public/assets/images/yumekai2024/RoXino.png";
import rumbleTheKlabautermannImage from "/public/assets/images/yumekai2024/rumble_the_klabautermann.png";
import rumiyaImage from "/public/assets/images/yumekai2024/Rumiya.png";
import scarlettsirene2Image from "/public/assets/images/yumekai2024/scarlettsirene2.png";
import tactokiImage from "/public/assets/images/yumekai2024/TacToki.png";
import whalienWorksFluffylunariiImage from "/public/assets/images/yumekai2024/Whalien_Works__fluffylunarii.png";

//Vereine
import cohekiImage from "/public/assets/images/yumekai2024/CoHeKi.png";
import conquestLogoImage from "/public/assets/images/yumekai2024/ConQuest_Logo.png";
import cosplayalpinLogoImage from "/public/assets/images/yumekai2024/Cosplay-Alpin_logo.jpg";
import cosquestLogoImage from "/public/assets/images/yumekai2024/CosQuest_Logo.png";
import govereinImage from "/public/assets/images/yumekai2024/GO-Verein.png";
import muenchnerFursImage from "/public/assets/images/yumekai2024/Muenchner_Furs.png";
import nihonbashiImage from "/public/assets/images/yumekai2024/Nihonbashi.png";
import vividAriseImage from "/public/assets/images/yumekai2024/Vivid_Arise.png";

//Workshops
import berniCosWorkshopImage from "/public/assets/images/yumekai2024/berni_cos_Workshop.jpg";
import droidbuildingImage from "/public/assets/images/yumekai2024/Droidbuilding.png";
import eraliaWorkshopImage from "/public/assets/images/yumekai2024/Eralia_Workshop.jpg";
import fylyWorkshopImage from "/public/assets/images/yumekai2024/Fyly_Workshop.jpg";
import haekelnFuerAnfaengerImage from "/public/assets/images/yumekai2024/Haekeln_fuer_Anfaenger.png";
import hanaCosplayCosplayArmorAusEvaImage from "/public/assets/images/yumekai2024/Hana_Cosplay_Cosplay_Armor_aus_EVA.png";
import japanTravelImage from "/public/assets/images/yumekai2024/Japan_Travel.jpg";
import karriereImEsportImage from "/public/assets/images/yumekai2024/Karriere_im_E-Sport.png";
import lolitaPanelImage from "/public/assets/images/yumekai2024/Lolita_Panel.png";
import rollenspielleitung101Image from "/public/assets/images/yumekai2024/Rollenspiel-Leitung_101.jpg";
import schnittabaenderungImage from "/public/assets/images/yumekai2024/Schnittabaenderung.png";
import stateraImage from "/public/assets/images/yumekai2024/Statera.png";

//Essen
import narutoFoodtruckImage from "/public/assets/images/yumekai2024/Naruto_FoodTruck_Sweets.png";
import auroralogoImage from "/public/assets/images/yumekai2024/Aurora_Gruppe.jpg";
import auroraGruppeImage from "/public/assets/images/yumekai2024/Aurora-Logo.png";
import bildNarutoFoodtruckImage from "/public/assets/images/yumekai2024/Bild_Naruto_Foodtruck.jpg";

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
import catwalkGewinnerImage from "/public/assets/images/yumekai2024/Catwalk_gewinner.jpg";
import juryArsinoeImage from "/public/assets/images/yumekai2024/Jury_Arsinoe.png";
import juryEraliaImage from "/public/assets/images/yumekai2024/Jury_Eralia.jpg";
import juryEvelynImage from "/public/assets/images/yumekai2024/Jury_Evelyn.jpg";
import juryPalelittedragonImage from "/public/assets/images/yumekai2024/Jury_PaleLitteDragon.jpg";
import performanceDritterPlatzImage from "/public/assets/images/yumekai2024/Performance_dritter_platz.jpg";
import performanceErsterPlatzImage from "/public/assets/images/yumekai2024/Performance_erster_platz.jpg";
import performanceJuryFavoritImage from "/public/assets/images/yumekai2024/Performance_Jury_Favorit.jpg";
import performanceTeilnehmerImage from "/public/assets/images/yumekai2024/Performance_Teilnehmer.jpg";
import performanceZweiterPlatzImage from "/public/assets/images/yumekai2024/Performance_zweiter_platz.jpg";

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

const FoodImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const FoodImageContainer = styled.div`
  margin: 0;
  padding: 0;
  width: calc((100% - 20px) / 2);
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 8px;
  }
`;

export function FoodImageWrapperComponent({ src1, alt1 = "Bild", src2, alt2 = "Bild" }) {
  return (
    <FoodImageWrapper>
      <FoodImageContainer>
        <Image src={src1} alt={alt1} style={{ width: "100%", height: "auto" }} />
      </FoodImageContainer>
      <FoodImageContainer>
        <Image src={src2} alt={alt2} style={{ width: "100%", height: "auto" }} />
      </FoodImageContainer>
    </FoodImageWrapper>
  );
}

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

export default function YumeKai2024() {
  return (
    <>
      <h1>Rückblick YumeKai 2024</h1>
      <p>
        Am 1. & 2. Juni 2024 hat die erste YumeKai stattgefunden. Hier könnt ihr nochmal Eindrücke
        von unserer ersten Convention durch Bilder und Videos erleben!
      </p>

      <p>
        Hier könnt ihr einen Blick in unser{" "}
        <StyledLink href="/downloads/YumeKai_2024_Programmheft.pdf" target="_blank">
          Programmheft
        </StyledLink>{" "}
        von 2024 werfen und so einen guten Eindruck von unseren vielzähligen Programmpunkten
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
          <StyledLink href="#vereine">Vereine</StyledLink>
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
      <p>
        Unsere diesjährige Convention bot eine große Vielfalt an Programmpunkten und Ehrengästen,
        die die Herzen der Besucher höher schlagen ließen.
        <br />
        <br />
        Wir hatten die Ehre, einige herausragende Gäste begrüßen zu dürfen. Die Band Tanuki heizte
        mit ihrem mitreißenden Auftritt die Stimmung an, während die beliebte VTuberin Hoshino
        Mitsuki das Publikum mit ihrer charmanten Art begeisterte. Junihuhn verzauberte die
        Zuschauer mit seiner Klavierdarbietung und die Idol Tanzgruppe Stellaria zeigte ihre
        beeindruckende Choreographie auf der Bühne.
        <br />
        <br />
        Ein besonderes Highlight war das kurzfristig organisierte Synchronsprecher-Panel auf der
        großen Bühne. Daniel Schlauch, die deutsche Stimme von Luffy aus „One Piece“, und sein
        Kollege Dirk Meyer, der Usopp aus „One Piece“ spricht, teilten spannende Einblicke in ihre
        Arbeit und beantworteten zahlreiche Fragen der Fans.
        <br />
        <br />
        Am Sonntag überraschten wir unsere Besucher mit einem weiteren spontanen Panel. Aufgrund des
        Ausfalls unserer Künstlerin Anna sprang die Tanzgruppe Stellaria ein und hielt zusammen mit
        den Influencern MadLight und SteffShizo ein inspirierendes Panel. Sie berichteten über ihre
        Erfahrungen im Social Media Bereich und gaben wertvolle Tipps und Tricks weiter.
      </p>
      <ContentWrapper>
        <ContentContainer src={tanukiImage} alt="Tanuki" link="https://tanuki-band.de/" />
        <ContentContainer
          src={hoshinoMitsukiImage}
          alt="Hoshino Mitsuki"
          link="https://linktr.ee/HoshinoMitsuki"
        />
        <ContentContainer
          src={junihuhnImage}
          alt="Junihuhn"
          link="https://www.youtube.com/@Junihuhn"
        />
        <ContentContainer src={stellariaImage} alt="Stellaria" link="http://stellaria.carrd.co/" />
        <ContentContainer
          src={danielSchlauchImage}
          alt="Daniel Schlauch"
          caption="Bild von @ruffysfotos"
          link="https://www.instagram.com/daniel_schlauch/"
        />
        <ContentContainer
          src={dirkMeyerImage}
          alt="Dirk Meyer"
          caption="Bild von @ruffysfotos"
          link="https://www.instagram.com/synchronsprecher_dirk_meyer/"
        />
        <ContentContainer
          src={madlightImage}
          alt="MadLight"
          link="https://www.tiktok.com/@_madlight_"
        />
        <ContentContainer
          src={steffShizoImage}
          alt="SteffShizo"
          link="https://www.tiktok.com/@steffshizo_official_"
        />
        <ContentContainer
          src={danijelKoestlichImage}
          alt="Danijel Köstlich"
          link="https://www.instagram.com/danijel_koestlich/"
        />
      </ContentWrapper>

      <Spacer id="cosplayer" />

      <h2>Cosplayer</h2>
      <p>
        Die YumeKai 2024 war nicht nur ein Fest für Anime- und Manga-Liebhaber, sondern auch ein
        Paradies für Cosplay-Enthusiasten. Unsere Cosplay-Gäste und Walking Acts trugen maßgeblich
        zur magischen Atmosphäre der Convention bei und ließen die Herzen der Fans höher schlagen.
        <br />
        <br />
        Unsere talentierten Cosplay-Gäste waren ein echter Hingucker. Sie beeindruckten nicht nur
        mit ihren atemberaubenden Kostümen, sondern standen den Besuchern auch an ihren Ständen für
        Fragen und Fotos zur Verfügung. Ihre handwerklichen Fähigkeiten und die Liebe zum Detail in
        ihren Kostümen sorgten für große Bewunderung und inspirierende Gespräche. Die Besucher
        konnten hautnah erleben, wie viel Leidenschaft und Arbeit in den beeindruckenden
        Verkleidungen steckt.
        <br />
        <br />
        Einige unserer Cosplayer konnte man durch eine spannende Q&A-Session auf der Bühne näher
        kennenlernen. Sie teilten ihre Erfahrungen, gaben Einblicke in ihre kreative Arbeit und
        beantworteten die Fragen der neugierigen Fans. Darüber hinaus sah man sie auch als Juroren
        bei den Cosplay-Wettbewerben, wo sie ihr Fachwissen und ihren geschulten Blick einsetzten,
        um die beeindruckendsten Kostüme zu bewerten.
        <br />
        <br />
        Unsere Cosplay-Gäste und Walking Acts trugen maßgeblich dazu bei, die YumeKai 2024 zu einem
        unvergesslichen Erlebnis zu machen.
      </p>
      <ContentWrapper>
        <ContentContainer
          src={naruCosplayImage}
          alt="Naru Cosplay"
          link="https://www.instagram.com/n4ru_cosplay/"
        />
        <ContentContainer
          src={paleLitteDragonAndArsinoeImage}
          alt="PaleLittleDragon & Arsi_Arsinoe"
          link="https://www.instagram.com/palelittledragon/"
        />
        <ContentContainer
          src={eraliaImage}
          alt="Eralia"
          link="https://www.instagram.com/eralia_iwahana/"
        />
        <ContentContainer
          src={meroYunytImage}
          alt="Mero & Yunyte"
          link="https://www.instagram.com/mero_cos/"
        />
        <ContentContainer
          src={evelynImage}
          alt="Evelyn Cosplay"
          link="https://www.instagram.com/evelyn_cosplay/"
        />
        <ContentContainer
          src={imoneeCosplayImage}
          alt="Imoneecosplay"
          link="https://www.instagram.com/imoneecosplay/"
        />
        <ContentContainer
          src={willgrimImage}
          alt="Willgrim"
          link="https://www.instagram.com/willgrim_art/"
        />
        <ContentContainer
          src={nuclearBastardsImage}
          alt="Nuclear Bastards"
          link="https://www.instagram.com/nuclear.bastards/"
        />
      </ContentWrapper>

      <Spacer id="aussteller" />
      <h2>Aussteller</h2>
      <p>
        Trotz des schlechten Wetters ließen sich die Austrian Itashas nicht davon abhalten, ihre
        beeindruckenden Itashas im Außenbereich der Convention auszustellen. Diese kunstvoll
        gestalteten Fahrzeuge, die mit Motiven aus Anime und Manga verziert sind waren ein echter
        Blickfang.
        <br />
        <br />
        Ein besonderes Highlight auf der YumeKai 2024 war Ruby the Raptor, ein lebensgroßer
        Dinosaurier, der über die Convention gelaufen ist. Ruby begeisterte die Besucher jeden
        Alters mit ihrer realistischen Darstellung und sorgte für viele staunende Gesichter und
        unvergessliche Momente. Kinder und Erwachsene waren gleichermaßen fasziniert von Ruby, die
        mit ihrer Präsenz die Convention in ein kleines Jurassic Park-Abenteuer verwandelte.
        <br />
        <br />
        Die talentierten Fotografen von BokehBarden fingen die magischen Momente der YumeKai 2024
        mit ihren Kameras ein.
      </p>
      <ContentWrapper>
        <ContentContainer
          src={austrianItashaImage}
          alt="Austrian Itasha"
          link="https://www.instagram.com/austrian_itasha/"
        />
        <ContentContainer
          src={rubyTheRaptorImage}
          alt="Ruby the Raptor"
          link="https://www.instagram.com/rubytheraptor/"
        />
        <ContentContainer
          src={bokehBardenImage}
          alt="Bokehbarden"
          link="https://www.instagram.com/bokehbarden/"
        />
      </ContentWrapper>

      <Spacer id="haendler" />
      <h2>Händler</h2>
      <p>
        Dank unserer vielfältigen Händler war die YumeKai 2024 nicht nur ein Ort der Unterhaltung,
        sondern auch ein Shopping-Erlebnis der besonderen Art.
      </p>
      <ContentWrapper>
        <ContentContainer
          src={druckDavidVerhoevenImage}
          alt="3D-Druck David Verhoeven"
          link="https://www.instagram.com/djv_3d/"
        />
        <ContentContainer
          src={arnosRetroVideogamesImage}
          alt="Arnos Retro Videogames"
          link="https://www.arnos-retro-videogames.com/"
        />
        <ContentContainer
          src={ashturiaImage}
          alt="Ashturia"
          link="https://www.instagram.com/ashturia/"
        />
        <ContentContainer
          src={cosmicmoonlightImage}
          alt="Cosmicmoonlight"
          link="https://www.cosmicmoonlight.com/"
        />
        <ContentContainer
          src={cuteParadiseImage}
          alt="Cute Paradise"
          link="https://cute-paradise.at/"
        />
        <ContentContainer
          src={deinNoerdShopImage}
          alt="NÖRD-Shop"
          link="https://www.dein-noerd-shop.com/"
        />
        <ContentContainer
          src={heldenschmiedeLogoImage}
          alt="Heldenschmiede"
          link="https://www.heldenschmiede.eu/"
        />
        <ContentContainer
          src={narutoFoodtruckSweetsImage}
          alt={`Naturo Streetfood "Sweets"`}
          link="https://www.instagram.com/naruto.asiastreetfood"
        />
        <ContentContainer
          src={otakuwonderlandImage}
          alt="Otakuwonderland"
          link="https://www.instagram.com/otakuwonderland_de/"
        />
        <ContentContainer
          src={pokevendImage}
          alt="Pokevend"
          link="https://www.instagram.com/pokevend/"
        />
        <ContentContainer
          src={silverdragonSabersImage}
          alt="Silverdragon Sabers"
          link="https://sd-sabers.de/"
        />
        <ContentContainer src={squiggzImage} alt="Squiggz" link="https://www.squiggz.com/" />
        <ContentContainer
          src={steamspiritsImage}
          alt="Steamspirits"
          link="https://www.instagram.com/steamspirits/"
        />
        <ContentContainer
          src={yeOldOrcMerchandisingImage}
          alt="YeOldOrk"
          link="https://www.yeoldorc.at/"
        />
      </ContentWrapper>

      <Spacer id="kuenstleratelier" />
      <h2>Künstleratelier</h2>
      <p>
        Das Künstleratelier war ein wahres Juwel für Kreative und Kunstliebhaber. In diesem
        speziellen Bereich der Convention konnten die Besucher eine Vielzahl talentierter Künstler
        entdecken, die ihre selbstgemachten Werke präsentierten und verkauften. Hier gab es eine
        große Vielfalt an Produkten zu entdecken und nebenbei konnte man in persönliche Gespräche
        mit den Künstlern eintauchen.
      </p>
      <ContentWrapper>
        <ContentContainer
          src={ananatzeImage}
          alt="Ananatze"
          link="https://www.instagram.com/ananatze/"
        />
        <ContentContainer
          src={anaraTwiceImage}
          alt="Anara_Twice"
          link="https://www.instagram.com/anaratwice"
        />
        <ContentContainer
          src={artsyAoriImage}
          alt="Artsy Aori"
          link="https://www.instagram.com/artsy_aori/"
        />
        <ContentContainer
          src={bavarianWoodfoxImage}
          alt="Bavarian Woodfox"
          link="https://www.instagram.com/bavarianwoodfox/"
        />
        <ContentContainer
          src={cheekyChwingaImage}
          alt="Cheeky Chwinga"
          link="https://www.instagram.com/cheekychwinga/"
        />
        <ContentContainer
          src={eenteImage}
          alt="eente"
          link="https://www.instagram.com/eentenfarm/"
        />
        <ContentContainer
          src={emytsuuImage}
          alt="Emytsuu"
          link="https://www.instagram.com/emytsuu"
        />
        <ContentContainer src={fylyImage} alt="Fyly" link="https://www.instagram.com/fyly_draws/" />
        <ContentContainer
          src={ignispectusartImage}
          alt="IgnisPectusArt"
          link="https://www.instagram.com/ignis_pectus"
        />
        <ContentContainer
          src={kirianYumeImage}
          alt="Kirian Yume"
          link="https://www.instagram.com/kirianyume/"
        />
        <ContentContainer
          src={krixxiImage}
          alt="Krixxi"
          link="https://www.instagram.com/k.r.i.x.x.i/"
        />
        <ContentContainer
          src={manyMindArtImage}
          alt="Many Mind Art"
          link="https://www.instagram.com/manymindart/"
        />
        <ContentContainer
          src={mausalImage}
          alt="mausal"
          link="https://www.instagram.com/flashmausal/"
        />
        <ContentContainer
          src={myuchiisuImage}
          alt="Myuchiisu"
          link="https://www.instagram.com/myuchiisu"
        />
        <ContentContainer
          src={nikitasFantasiesImage}
          alt="Nikitas Fantasies"
          link="https://www.instagram.com/nikitasfantasiesart/"
        />
        <ContentContainer
          src={prettysmartfashionImage}
          alt="Pretty smartfashion"
          link="https://www.instagram.com/prettysmartfashion/"
        />
        <ContentContainer
          src={roxinoImage}
          alt="RoXino"
          link="https://www.instagram.com/roxinoart/"
        />
        <ContentContainer
          src={rumbleTheKlabautermannImage}
          alt="Rumble the Klabautermann"
          link="https://www.instagram.com/rumble.the.klabautermann/"
        />
        <ContentContainer
          src={rumiyaImage}
          alt="Rumiya"
          link="https://www.instagram.com/rumiya.art/"
        />
        <ContentContainer
          src={scarlettsirene2Image}
          alt="Inari‘s little Yokais"
          link="https://www.instagram.com/scarlettsirene2/"
        />
        <ContentContainer
          src={tactokiImage}
          alt="TacToki"
          link="https://www.instagram.com/tactoki/"
        />
        <ContentContainer
          src={whalienWorksFluffylunariiImage}
          alt="Whalien Works"
          link="https://www.instagram.com/fluffylunarii/"
        />
      </ContentWrapper>

      <Spacer id="vereine" />
      <h2>Vereine</h2>
      <p>
        Auf unserer Consvention haben sich viele Vereine bei euch vorgestellt und euch mit
        Fotokulissen oder Spielen beigeistern können.
      </p>
      <ContentWrapper>
        <ContentContainer src={cohekiImage} alt="CoHeKi e.V." link="https://coheki.de/" />
        <ContentContainer
          src={conquestLogoImage}
          alt="ConQuest Augsburg"
          link="https://discord.gg/7whnsZGSSU"
        />
        <ContentContainer
          src={cosplayalpinLogoImage}
          alt="Cosplay Alpin"
          link="https://www.instagram.com/cosplayalpin"
        />
        <ContentContainer
          src={cosquestLogoImage}
          alt="CosQuest München"
          link="https://www.instagram.com/cosplay_questmuc/"
        />
        <ContentContainer src={govereinImage} alt="Go-Verein e.V." link="http://www.bgov.de/" />
        <ContentContainer
          src={muenchnerFursImage}
          alt="Münchner Furs e.V."
          link="https://muenchner-furs.de/"
        />
        <ContentContainer src={nihonbashiImage} alt="Nihonbashi" link="https://nihonbashi.de/" />
        <ContentContainer
          src={vividAriseImage}
          alt="Vivid Arise e.V."
          link="https://vividarise.de/"
        />
      </ContentWrapper>

      <Spacer id="workshops" />
      <h2>Workshops</h2>
      <p>
        Es gab eine Vielzahl an Workshops, die den Besuchern die Möglichkeit gaben, neue Fähigkeiten
        zu erlernen und ihre kreativen Talente zu entfalten. Diese Workshops wurden von Experten aus
        verschiedenen Bereichen geleitet und deckten eine breite Palette an Themen ab, sodass für
        jeden etwas dabei war. Die Workshops waren so vielfältig wie die Interessen unserer
        Besucher. Zu den angebotenen Workshops gehörten:
      </p>
      <ContentWrapper>
        <ContentContainer
          src={berniCosWorkshopImage}
          alt="Basic Hautretouche in Photoshop"
          link="https://www.instagram.com/berni.cos/"
        />
        <ContentContainer
          src={droidbuildingImage}
          alt="Droiden und Requisiten - Wo fange ich an?"
          link="https://www.instagram.com/miningmark_photography/"
        />
        <ContentContainer
          src={eraliaWorkshopImage}
          alt="Cosplay acts! The do's and don't of cosplay performance"
          link="https://www.instagram.com/eralia_iwahana"
        />
        <ContentContainer
          src={fylyWorkshopImage}
          alt="Basics für Mangazeichnen"
          caption="Bild von Fyly"
          link="https://www.instagram.com/tactoki/"
        />
        <ContentContainer
          src={haekelnFuerAnfaengerImage}
          alt="Häkeln für Anfänger"
          link="https://www.instagram.com/otakuwonderland_de/"
        />
        <ContentContainer
          src={hanaCosplayCosplayArmorAusEvaImage}
          alt="Cosplay Armor aus EVA Foam"
          link="https://www.instagram.com/hana_cosplay_/"
        />
        <ContentContainer
          src={japanTravelImage}
          alt="Japan Travel Basics"
          link="https://www.instagram.com/scarlettsirene2/"
        />
        <ContentContainer
          src={karriereImEsportImage}
          alt="Karriere im E-Sport: Traum oder Wirklichkeit?"
          link="https://linktr.ee/vividarise"
        />
        <ContentContainer
          src={lolitaPanelImage}
          alt="Lolita Panel"
          link="https://www.instagram.com/lolitatreffen_muenchen/"
        />
        <ContentContainer
          src={rollenspielleitung101Image}
          alt="Rollenspiel-Leitung 101: Wie fange ich an? Ein Schritt ins Reich des Wahnsinns"
          link="https://x.com/TheMarvler?t=sXI6sU0-vOCqJiaKbXWrrQ&s=33"
        />
        <ContentContainer
          src={schnittabaenderungImage}
          alt="Schnittabänderung für Anfänger"
          link="https://www.instagram.com/ninoku_/"
        />
        <ContentContainer
          src={stateraImage}
          alt="Lichtschwertkampf - Die Waffe eines Jedis"
          link="https://www.instagram.com/statera_allgaeu/"
        />
      </ContentWrapper>

      <Spacer id="essen" />
      <h2>Essen</h2>
      <Columns2
        left={
          <>
            <h3>Naruto Foodtruck</h3>
            <FoodImageWrapperComponent
              src1={narutoFoodtruckImage}
              alt1="Naruto Foodtruck Logo"
              src2={bildNarutoFoodtruckImage}
              alt2="Bild Naruto Foodtruck"
            />
            <p>
              An alle Hungrigen Fans konnten sich hier mit Nudelsuppe, gebratenen Nudeln und
              weiteren japanischen Spezialitäten im Anime-Stil stärken!
              <br />
              <br /> Direkt vor der Stadthallebefand sich der Foodtruck, der euch die perfekte
              Möglichkeit bot, euch auf der YumeKai zu stärken.
              <br />
              <br /> Aber nicht nur das: Neben den besten Ramen in ganz Memmingen konntet ihr auch
              eine Vielzahl von Bubble Teas in allen erdenklichen Varianten und Geschmacksrichtungen
              genießen!
            </p>
          </>
        }
        right={
          <>
            <h3>Maidcafe Aurora</h3>
            <FoodImageWrapperComponent
              src1={auroraGruppeImage}
              alt1="Bild Aurora Gruppe"
              src2={auroralogoImage}
              alt2="Logo Aurora"
            />
            <p>
              Wir sind ein Maid & Butler Café und ein Projekt des Animexx e.V. Unser Ziel ist es,
              euch die Welt der japanischen Maids & Butler auf unsere eigene Art und Weise
              näherzubringen.
              <br />
              <br /> Bei lustigen Spielen, leckeren Speisen und Getränken könnt ihr für einen kurzen
              Moment dem Alltag entfliehen.
              <br />
              <br /> Wir vereinen deutsche & japanische Cafékultur und präsentieren euch dieses
              einzigartige Gefühlserlebnis! Unsere Maids und Butler haben sich über euren Besuch
              gefreut.
            </p>
          </>
        }
      />

      <Spacer id="spiele-gaming" />
      <h2>Spiele & Gaming</h2>
      <p>
        Für das Herz all unserer Brett- und Kartenspielfreunde hatten wir dank unseren Händlern der
        Heldenschmiede und dem Squiggz ein hervorangendes Angebot. Hier konnten nicht nur
        verschiedenste Spiele gekauft werden, sonder auch Demospiele getestet werden! Für alle Fans
        von TCG hatten wir Tuniere mit tollen Preisen vorbereitet!
        <br />
        <br />
        Wer mit Brettspielen, Kartenspielen oder Tabletop nichts anfangen konnte war bei unserem
        Gamingraum, der von dem Skyforgern geleitet wurde gut aufgehoben. Hier gab es nicht nur
        verschiedenste Konsolen und Spiele zum testen sondern auch interessante Turniere wie ein
        virtuelles Golf Tunier!
      </p>

      <Spacer id="cosplay-wettbewerbe" />
      <h2>Cosplay Wettbewerbe</h2>
      <h3>Catwalk:</h3>
      <p>
        Bein unserem Catwalk Wettbewerb hatten die Teilnehmer nur ca. 20 Sekunden Zeit um einmal
        über die Bühne zu laufen und vor dem Tisch der Jurry zu posen. Hier ein paar Schnappschüsse
        all unserer Teilnehmer. Die Bilder sind von unserem lieben Freund{" "}
        <StyledLink href={"https://www.mf-photographing.com/"} target="_blank">
          matze_photographing
        </StyledLink>
        .
      </p>
      <ImageCarousel visibleCount={5.5} duration={2.5} images={catwalkImages} />
      <p>
        Unsere Jury durfte natürlich auch auf die Bühne einlaufen und posen, bevor sie sich an die
        Bewertungsbögen gesetzt haben.
      </p>
      <ContentWrapper>
        <ContentContainer
          src={juryEvelynImage}
          alt="Evelyn Cosplay"
          link="https://www.instagram.com/evelyn_cosplay/"
        />
        <ContentContainer
          src={juryEraliaImage}
          alt="Eralia"
          link="https://www.instagram.com/eralia_iwahana/"
        />
        <ContentContainer
          src={juryPalelittedragonImage}
          alt="PaleLittleDragon"
          link="https://www.instagram.com/palelittledragon/"
        />
        <ContentContainer
          src={juryArsinoeImage}
          alt="Arsi_Arsinoe"
          link="https://www.instagram.com/arsi_arsinoe/"
        />
      </ContentWrapper>
      <br />
      <Columns2
        reverse={true}
        left={
          <>
            <Image
              src={catwalkGewinnerImage}
              alt="Gruppenbild der Cosplay Catwalk Gewinner"
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
          </>
        }
        right={
          <>
            <h4>
              Unsere wunderbaren Gewinner bei der <br />
              Preisverleihung am Sonntag:
            </h4>
            <p>
              <StyledLink href="https://www.instagram.com/tiefseemonster.krake/" target="_blank">
                Tiefseemonster.Krake
              </StyledLink>{" "}
              als Alastor von Hazbin Hotel
              <br />
              <br />
              Eden als Yugi Muto von Yu-Gi-Oh!
              <br />
              <br />
              <StyledLink href="https://www.instagram.com/makorichan_cosplay/" target="_blank">
                Makorichan
              </StyledLink>{" "}
              als Columbina von Genshin Impact
              <br />
              <br />
              <StyledLink href="https://www.instagram.com/scarlettsirene2/" target="_blank">
                Scarlett Sirene
              </StyledLink>{" "}
              als Shadowheart von Baldur’s Gate 3
            </p>
          </>
        }
      />
      <br />
      <h3>Performance:</h3>
      <p>
        Neben unserem Cosplay Catwalk gab es auch noch einen Cosplay Performance Wettbewerb. Hier
        hatte jeder unserer talentierten Teilnehmer bis zu 4 Minuten Zeit um einen unvergesslichen
        Auftritt hinzulegen. Da ist es für unsere Jury, die aus{" "}
        <StyledLink href="https://www.instagram.com/evelyn_cosplay/" target="_blank">
          Evelyn Cosplay
        </StyledLink>{" "}
        ,{" "}
        <StyledLink href="https://www.instagram.com/imoneecosplay/" target="_blank">
          Imoneecosplay
        </StyledLink>{" "}
        ,
        <StyledLink href="https://www.instagram.com/n4ru_cosplay/" target="_blank">
          Naru Cosplay
        </StyledLink>{" "}
        ,{" "}
        <StyledLink href="https://www.instagram.com/mero_cos/" target="_blank">
          Mero
        </StyledLink>{" "}
        &{" "}
        <StyledLink href="https://www.instagram.com/yunyte/" target="_blank">
          Yunyte
        </StyledLink>{" "}
        bestand gar nicht so leicht gefallen die Gewinner zu küren.
      </p>

      <Spacer id="danksagung" />
      <h2>Danksagung</h2>
      <p>
        Ein riesiges Dankeschön an alle, die die YumeKai 2024 zu einem unvergesslichen Erlebnis
        gemacht haben! Unser besonderer Dank gilt den Helfern, deren unermüdlicher Einsatz und
        Leidenschaft die Basis unseres Erfolgs waren. Ein großes Dankeschön geht auch an die
        Händler, deren vielfältige und einzigartige Produkte die YumeKai bereichert haben.
        <br />
        <br />
        Ein herzliches Dankeschön an alle Besucher – eure Begeisterung und Kreativität haben die
        Atmosphäre der Convention geprägt. Wir danken auch den Showacts und Ehrengästen, deren
        Auftritte und Panels die YumeKai 2024 unvergesslich gemacht haben. Ein besonderer Dank gilt
        den Cosplayern und Walking Acts, deren fantastische Kostüme und Präsenz die Convention
        lebendig und bunt gestaltet haben.
        <br />
        <br />
        Ein großes Dankeschön an die verschiedenen Vereine und Künstler, deren Präsentationen und
        Kunstwerke die Vielfalt und Kreativität der YumeKai hervorgehoben haben. Schließlich möchten
        wir den Workshop-Leitern danken, deren Expertise und Fähigkeit, Wissen zu vermitteln, die
        Besucher bereichert haben.
        <br />
        <br />
        Dank euch allen war die YumeKai 2024 ein voller Erfolg. Wir freuen uns schon auf das nächste
        Jahr!
      </p>
    </>
  );
}
