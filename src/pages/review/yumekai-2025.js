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


//Cosplayer
import DokyatoImage from "/public/assets/images/yumekai2025/Dokyato_Image.png";
import EraliaImage from "/public/assets/images/yumekai2025/Eralia_Image.png";
import KorribanImage from "/public/assets/images/yumekai2025/Korriban_Image.png";
import MinekeImage from "/public/assets/images/yumekai2025/Mineke_Image.png";
import ZalinaImage from "/public/assets/images/yumekai2025/Zalina_Image.png";
import UchihaCorpImage from "/public/assets/images/yumekai2025/UchihaCorp_Image.png";


//Aussteller

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


//Vereine

//Workshops

//Essen

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
import catwalk25Image from "/public/assets/images/yumekai2024/catwalk_25.jpg"

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
            Am 31.Mai & 1.Juni 2025 hat die erste YumeKai stattgefunden. Hier könnt ihr nochmal Eindrücke
            von unserer ersten Convention durch Bilder und Videos erleben!
          </p>
    
          <p>
            Hier könnt ihr einen Blick in unser{" "}
            <StyledLink href="/downloads/YumeKai_2025_Programmheft.pdf" target="_blank">
              Programmheft
            </StyledLink>{" "}
            von 2025 werfen und so einen guten Eindruck von unseren vielzähligen Programmpunkten
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
          <p></p>
          <ContentWrapper>
           <ContentContainer src={stellariaYumekaiPromobild2025Image} alt="Stellaria: Moonlight Melodies" link="https://www.instagram.com/stellaria.idols/" />
          <ContentContainer src={mionHHeartImage} alt="MION" link="https://www.instagram.com/mion_official/" />
          <ContentContainer src={echoAneImage} alt="Echo Ane" link="https://www.instagram.com/echoane_music?igsh=MWk2Y2piODNkbnRqaw%3D%3D&utm_source=qr" />
          <ContentContainer src={cosplayVersteigerung1Image} alt="Cosplayer Versteigerung" link="https://www.instagram.com/coheki_ev/" />
          <ContentContainer src={junihuhnShinkaiImage} alt="Junihuhn - Shinkai Piano Concert" link="https://www.instagram.com/juni.huhn/" />
          <ContentContainer src={petraScheeserImage} alt="Petra Scheeser" link="https://www.instagram.com/scheeserin/" />
          <ContentContainer src={lyriaIdolsignature2Image} alt="Lyria" link="https://www.instagram.com/lyriavt/" />
          <ContentContainer src={CelloticDuetImage} alt="Cellotic Duets" link="https://linktr.ee/cellotic" />
          <ContentContainer src={angeliqueImage} alt="Live on Stage: Angel_NG" link="https://www.instagram.com/angel_ng___?igsh=MW5uYzZ4YzNmYW5x&utm_source=qr" />
          <ContentContainer src={nerdDaddysImage} alt="Nerd Daddy's - Anime, Manga & das Leben Ü30 - LIVE auf der Yumekai!" link="https://www.instagram.com/nerddaddys.podcast/" />
          <ContentContainer src={andyKnoteImage} alt="Andy Knote" link="https://www.instagram.com/andy_knote/" />
                  
            </ContentWrapper>

             <Spacer id="cosplayer" />
            
                  <h2>Cosplayer</h2>
                  <p></p>
                  <ContentWrapper>
                    <ContentContainer src={DokyatoImage} alt="Dokyato" link="https://www.instagram.com/dokyato/" />
                    <ContentContainer src={EraliaImage} alt="Eralia" link="https://www.instagram.com/eralia_iwahana/" />
                    <ContentContainer src={KorribanImage} alt="Korriban Cosplay" link="https://www.instagram.com/korribancosplay/" />
                    <ContentContainer src={MinekeImage} alt="Yaraiya Cosplay" link="https://www.instagram.com/yaraiyacosplay/" />
                    <ContentContainer src={ZalinaImage} alt="Zaylina" link="https://www.instagram.com/zaylina1/" />
                    <ContentContainer src={UchihaCorpImage} alt="Imonee Cosplay" link="https://www.instagram.com/imoneecosplay/" />
                  </ContentWrapper>

                   <Spacer id="aussteller" />
                        <h2>Aussteller</h2>
                        <p></p>
                  <ContentWrapper></ContentWrapper>

                  <Spacer id="haendler" />
                        <h2>Händler</h2>
                          <p>
                            Die YumeKai 2025 war nicht nur eine Convention voller Spaß und Unterhaltung, sondern dank unserer vielfältigen Händler auch ein einzigartiges Shopping-Erlebnis.
                          </p>
                  <ContentWrapper>
                    <ContentContainer src={HeldenschmiedeImage} alt="Heldenschmiede" link="https://www.heldenschmiede.eu/" />
                    <ContentContainer src={MangaMerchImage} alt="Manga-Merch" link="https://www.manga-merch.com" />
                    <ContentContainer src={CosmicMoonlightImage} alt="CosmicMoonlight" link="https://www.cosmicmoonlight.com/" />
                    <ContentContainer src={DavidVerhoevenImage} alt="3D Druck David Verhoeven" link="https://www.instagram.com/djv_3d/" />
                    <ContentContainer src={ArnosRetroVideogamesImage} alt="Arnos Retro Videogames" link="https://www.arnos-retro-videogames.com" />
                    <ContentContainer src={CuteParadiseImage} alt="Cute Paradise" link="https://cute-paradise.at/" />
                    <ContentContainer src={NoerdShopImage} alt="Dein NöRD Shop" link="https://www.dein-noerd-shop.com" />
                    <ContentContainer src={OtakuwonderlandImage} alt="Otakuwonderland" link="https://www.instagram.com/otakuwonderland_de/" />
                    <ContentContainer src={PokeVendImage} alt="PokèVend" link="https://www.pokevend.at" />
                    <ContentContainer src={HeroBaseImage} alt="Hero Base" link="https://alexander-karnitschnig.myshopify.com/collections" />
                    <ContentContainer src={RuneImage} alt="Rune Store" link="https://www.rune-online.com" />
                    <ContentContainer src={SilverdragonsabersImage} alt="Silver Dragon Sabers" link="https://www.sd-sabers.de" />
                    <ContentContainer src={SquiggzImage} alt="Squiggz" link="https://www.squiggz.com/" />
                    <ContentContainer src={SteamSpiritsImage} alt="SteamSpirits" link="https://www.steamspirits.net" />
                  </ContentWrapper>

                   <Spacer id="kuenstleratelier" />
                        <h2>Künstleratelier</h2>
                         <p></p>
                  <ContentWrapper>
                    <ContentContainer src={AliceMySecretImage} alt="AliceMySecret" link="https://www.instagram.com/alicemysecret" />
                    <ContentContainer src={BerrinJostImage} alt="Berrin Jost" link="https://www.instagram.com/crazy_berrin" />
                    <ContentContainer src={EmytsuuImage} alt="Emytsuu" link="https://www.instagram.com/emytsuu/?hl=de" />
                    <ContentContainer src={LoonarisImage} alt="Loonaris" link="https://www.instagram.com/loonarisarts" />
                    <ContentContainer src={AnimalixuImage} alt="Animalixu" link="https://www.instagram.com/animalixu" />
                    <ContentContainer src={BavarianwoodfoxImage} alt="BavarianWoodfox.art" link="https://www.instagram.com/bavarianwoodfox/" />
                    <ContentContainer src={StellaBialekImage} alt="Stella Bialek" link="https://www.instagram.com/stellabialek" />
                    <ContentContainer src={AmidalaImage} alt="Amidala Artwork" link="https://www.instagram.com/amidala.artwork/" />
                    <ContentContainer src={FranciNevadaImage} alt="Franci Nevada" link="https://www.instagram.com/nevada.art.shop/" />
                    <ContentContainer src={KitsukamiImage} alt="Kitsukami" link="https://www.instagram.com/kitsu_kami/" />
                    <ContentContainer src={TacTokiImage} alt="TacToki Illustrations" link="https://www.instagram.com/tactoki/" />
                    <ContentContainer src={LarinaImage} alt="Larina" link="https://www.instagram.com/lariina.art/" />
                    <ContentContainer src={MadyraImage} alt="Madyra" link="https://www.instagram.com/madyra_arts" />
                    <ContentContainer src={QuinnImage} alt="Quinn" link="https://www.instagram.com/quinnskanzashi/" />
                    <ContentContainer src={RinaMoraImage} alt="Rina Mora Art" link="https://www.instagram.com/rina.mora.art" />
                    <ContentContainer src={BeehiveArtistsImage} alt="BeehiveArtists" link="https://www.instagram.com/beehiveartists/" />
                    <ContentContainer src={FyflyImage} alt="Fyly" link="https://instagram.com/fyly_cosplays" />
                    <ContentContainer src={tinypawsImage} alt="Tiny Paws Treasures" link="https://www.instagram.com/cyancalla/" />
                    <ContentContainer src={yupiistarImage} alt="Yupiistar" link="https://yupiistar.carrd.co/#portfolio" />
                    <ContentContainer src={AnaraImage} alt="Anara_Twice" link="https://www.instagram.com/anaratwice/?hl=de" />
                    <ContentContainer src={ChristalShad0w0Image} alt="Christal.Shad0w0" link="https://www.instagram.com/christal.shadow/" />
                    <ContentContainer src={KirianYumeImage} alt="Kirian Yume" link="https://www.instagram.com/kirianyume/" />
                    <ContentContainer src={ValyrakaImage} alt="Valyraka" link="https://www.instagram.com/valyraka/" />
                  </ContentWrapper>

                   <Spacer id="autoren" />
                        <h2>Autoren</h2>
                         <p>In diesem Jahr gab es zusätzlich zu all den tollen Künstlern auch noch einen eigenen Autoren-Brerich.</p>
                        <ContentWrapper>
                            <ContentContainer src={YuiSpallekImage} alt="Yui Spallek" link="https://www.instagram.com/yui_spallek" />
                            <ContentContainer src={AshturiaImage} alt="Ashturia" link="https://www.naomihuber.com/" />
                        </ContentWrapper>


                   <Spacer id="vereine" />
                        <h2>Vereine</h2>
                          <p></p>
                  <ContentWrapper></ContentWrapper>

                   <Spacer id="workshops" />
                        <h2>Workshops</h2>
                        <p></p>
                  <ContentWrapper></ContentWrapper>

                   <Spacer id="essen" />
                        <h2>Essen</h2>

                         <Spacer id="spiele-gaming" />
                              <h2>Spiele & Gaming</h2>

                               <Spacer id="cosplay-wettbewerbe" />
                                    <h2>Cosplay Wettbewerbe</h2>
                                    <h3>Catwalk:</h3>

                                    <h3>Performance:</h3>

                                      <Spacer id="danksagung" />
                                          <h2>Danksagung</h2>
                                         <p>
                                            Ein riesiges Dankeschön an alle, die die YumeKai 2025 zu einem unvergesslichen Erlebnis gemacht haben! 
                                            Ohne euch wäre diese Convention nicht das, was sie ist. Unser besonderer Dank gilt den Helfern, 
                                            deren unermüdlicher Einsatz und Leidenschaft das Herzstück unseres Erfolgs waren. Ebenso danken wir 
                                            den Händlern, die mit ihren einzigartigen Produkten und kreativen Ständen die YumeKai bereichert haben.
                                            <br />
                                            <br />
                                            Ein herzliches Dankeschön an unsere fantastischen Besucher – eure Energie, Begeisterung und Kreativität 
                                            haben die Atmosphäre der YumeKai geprägt. Auch den Showacts und Ehrengästen gilt unser großer Dank: 
                                            Eure Auftritte und Panels haben die Convention zu einem besonderen Highlight gemacht. 
                                            <br />
                                            <br />
                                            Ein extra großes Dankeschön geht an die Cosplayer und Walking Acts, die mit ihren beeindruckenden Kostümen 
                                            und ihrer Präsenz für eine lebendige und farbenfrohe Convention gesorgt haben. Ebenso möchten wir die 
                                            zahlreichen Vereine und Künstler hervorheben, deren Präsentationen und Kunstwerke die Vielfalt und Kreativität 
                                            der YumeKai in den Mittelpunkt gerückt haben.
                                            <br />
                                            <br />
                                            Nicht zu vergessen sind die Workshop-Leiter, die mit ihrer Expertise und Leidenschaft Wissen vermittelt und 
                                            unsere Besucher inspiriert haben.
                                            <br />
                                            <br />
                                            Dank euch allen war die YumeKai 2025 ein voller Erfolg! Wir freuen uns schon auf das nächste Jahr und können es 
                                            kaum erwarten, euch alle wiederzusehen!
                                        </p>

    </>
  )
}