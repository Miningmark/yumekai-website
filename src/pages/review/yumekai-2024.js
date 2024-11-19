import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

//Components
import { Spacer, StyledLink } from "@/components/styledComponents";

//Images
//Ehrengäste
import danielSchlauchImage from "/public/assets/images/yumekai2024/Daniel-Schlauch-by-Ruffys-Fotografie_4_3.png";
import dirkMeyerImage from "/public/assets/images/yumekai2024/Dirk-Meyer-by-Ruffys-Fotografie_4_3.png";
import hoshinoMitsukiImage from "/public/assets/images/yumekai2024/Hoshino-Mitsuki.png";
import junihuhnImage from "/public/assets/images/yumekai2024/Junihuhn.png";
import stellariaImage from "/public/assets/images/yumekai2024/Stellaria.jpg";
import tanukiImage from "/public/assets/images/yumekai2024/Tanuki.jpg";
import madlightImage from "/public/assets/images/yumekai2024/MadLight.png";
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

//Essen
import narutoFoodtruckImage from "/public/assets/images/yumekai2024/Naruto_FoodTruck_Sweets.png";

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
  width: calc((100% - 40px) / 3);

  @media (max-width: 800px) {
    width: calc((100% - 40px) / 2);
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
    font-size: 1.75rem;
    font-weight: bold;
    margin: 20px 0;

    @media (max-width: 800px) {
      font-size: 1.1rem;
    }
  }

  a {
    font-size: 1.75rem;
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
        Wir hatten die Ehre, einige herausragende Gäste begrüßen zu dürfen. Die Band Tanuki heizte
        mit ihrem mitreißenden Auftritt die Stimmung an, während die beliebte VTuberin Hoshino
        Mitsuki das Publikum mit ihrer charmanten Art begeisterte. Junihuhn verzauberte die
        Zuschauer mit seiner Klavierdarbietung und die Idol Tanzgruppe Stellaria zeigte ihre
        beeindruckende Choreographie auf der Bühne.
        <br />
        Ein besonderes Highlight war das kurzfristig organisierte Synchronsprecher-Panel auf der
        großen Bühne. Daniel Schlauch, die deutsche Stimme von Luffy aus „One Piece“, und sein
        Kollege Dirk Meyer, der Usopp aus „One Piece“ spricht, teilten spannende Einblicke in ihre
        Arbeit und beantworteten zahlreiche Fragen der Fans.
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
        Unsere talentierten Cosplay-Gäste waren ein echter Hingucker. Sie beeindruckten nicht nur
        mit ihren atemberaubenden Kostümen, sondern standen den Besuchern auch an ihren Ständen für
        Fragen und Fotos zur Verfügung. Ihre handwerklichen Fähigkeiten und die Liebe zum Detail in
        ihren Kostümen sorgten für große Bewunderung und inspirierende Gespräche. Die Besucher
        konnten hautnah erleben, wie viel Leidenschaft und Arbeit in den beeindruckenden
        Verkleidungen steckt.
        <br />
        Einige unserer Cosplayer konnte man durch eine spannende Q&A-Session auf der Bühne näher
        kennenlernen. Sie teilten ihre Erfahrungen, gaben Einblicke in ihre kreative Arbeit und
        beantworteten die Fragen der neugierigen Fans. Darüber hinaus sah man sie auch als Juroren
        bei den Cosplay-Wettbewerben, wo sie ihr Fachwissen und ihren geschulten Blick einsetzten,
        um die beeindruckendsten Kostüme zu bewerten.
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

      <Spacer />
      <h2 id="aussteller">Aussteller</h2>
      <p>
        Trotz des schlechten Wetters ließen sich die Austrian Itashas nicht davon abhalten, ihre
        beeindruckenden Itashas im Außenbereich der Convention auszustellen. Diese kunstvoll
        gestalteten Fahrzeuge, die mit Motiven aus Anime und Manga verziert sind waren ein echter
        Blickfang.
        <br />
        Ein besonderes Highlight auf der YumeKai 2024 war Ruby the Raptor, ein lebensgroßer
        Dinosaurier, der über die Convention gelaufen ist. Ruby begeisterte die Besucher jeden
        Alters mit ihrer realistischen Darstellung und sorgte für viele staunende Gesichter und
        unvergessliche Momente. Kinder und Erwachsene waren gleichermaßen fasziniert von Ruby, die
        mit ihrer Präsenz die Convention in ein kleines Jurassic Park-Abenteuer verwandelte.
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
      <p>Inhalt zum Künstleratelier...</p>

      <Spacer id="vereine" />
      <h2>Vereine</h2>
      <p>Inhalt zu Vereinen...</p>

      <Spacer id="workshops" />
      <h2>Workshops</h2>
      <p>Inhalt zu Workshops...</p>

      <Spacer id="essen" />
      <h2>Essen</h2>
      <p>Inhalt zu Essen...</p>

      <Spacer id="spiele-gaming" />
      <h2>Spiele & Gaming</h2>
      <p>Inhalt zu Spiele & Gaming...</p>

      <Spacer id="cosplay-wettbewerbe" />
      <h2>Cosplay Wettbewerbe</h2>
      <p>Inhalt zu Cosplay Wettbewerben...</p>

      <Spacer id="danksagung" />
      <h2>Danksagung</h2>
      <p>Inhalt zur Danksagung...</p>
    </>
  );
}
