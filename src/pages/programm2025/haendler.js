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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch; // wichtig: sorgt dafür, dass Cards gleich hoch werden
  gap: 30px;
`;

export default function Haendler() {
  return (
    <>
      <ReturnButton link="/programm2025" />

      <h1 style={{ textAlign: "center" }}>Händler</h1>

      <ContentContainer>
        <ContentCard
          title="Heldenschmiede"
          imageSrc={HeldenschmiedeImage}
          altText="Logo von Heldenschmiede"
          text={
            <p>
              Bei der{" "}
              <StyledLink href="https://www.heldenschmiede.eu/" target="_blank">
                Heldenschmiede
              </StyledLink>{" "}
              werden Manga- Brett- und Würfelfans glücklich! Ihr seid Fans japanischer und
              südkoreanischer Literatur? Dann seid ihr bei der Heldenschmiede genau richtig!
              <br />
              Egal ob Yuri, Yaoi, Isekai oder Shonen - hier bekommt ihr alles, was das Otaku-Herz
              begehrt! Hier jeder das Richtige für sich. Das ist definitiv der Place to Be für alle
              Fans!
            </p>
          }
          instaLink="https://www.heldenschmiede.eu/"
          instaLinkText="Heldenschmiede"
        />
        <ContentCard
          title="Manga-Merch"
          imageSrc={MangaMerchImage}
          altText="Logo von Manga-Merch"
          text={
            <p>
              Hallo an alle, wir von{" "}
              <StyledLink href="https://www.manga-merch.com" target="_blank">
                Manga-Merch.com
              </StyledLink>{" "}
              sind ein Label, das sich darauf spezialisiert hat, Merchandise und Plüschies mit
              Designs deutscher und internationaler Künstler herzustellen. Unsere Künstler sind alle
              am Umsatz beteiligt und profitieren so direkt von jedem Verkauf. Ob Plüschie,
              Mousepad, Geldbörse oder Tasche. Schaut mal bei uns vorbei. Ihr werdet bestimmt etwas
              Schönes für euch finden. Euer Manga-Merch.com-Team
            </p>
          }
        />
        <ContentCard
          title="CosmicMoonlight"
          imageSrc={CosmicMoonlightImage}
          altText="Bild von CosmicMoonlight"
          text={
            <p>
              Hallo, mein Name ist Jessica und ich bin die Designerin sowie Gründerin von{" "}
              <StyledLink href="https://www.cosmicmoonlight.com/" target="_blank">
                cosmicmoonlight
              </StyledLink>
              . An meinem Stand könnt ihr eine große Auswahl an selbst designtem Schmuck entdecken.
              Außerdem biete ich ein ausgefallenes Sortiment aus Edelstahl-, Messing- und
              Edelsteinschmuck an. Neben einer Vielzahl von Ketten für den Alltag gibt es bei mir
              auch eine große Auswahl an Chokern und Ohrschmuck. Ich freue mich schon darauf, euch
              bei mir begrüßen zu dürfen. Bis bald!
            </p>
          }
        />
        <ContentCard
          title="3D Druck David Verhoeven"
          imageSrc={DavidVerhoevenImage}
          altText="Logo von 3D Druck David Verhoeven"
          text={
            <p>
              Bei{" "}
              <StyledLink href="https://www.instagram.com/djv_3d/" target="_blank">
                3D Druck David Verhoeven
              </StyledLink>{" "}
              findet ihr verschiedenes aus dem 3D-Drucker. Beispielsweise findet ihr hier
              selbstgemachte Cosplay-Probs, Helme mit verbauter Technik, Masken, Schlüsselanhänger
              und viele weitere Produkte!
            </p>
          }
        />
        <ContentCard
          title="Arnos Retro Videogames"
          imageSrc={ArnosRetroVideogamesImage}
          altText="Logo von Arnos Retro Videogames"
          text={
            <p>
              Bei{" "}
              <StyledLink href="https://www.arnos-retro-videogames.com" target="_blank">
                Arnos Retro Videogames
              </StyledLink>{" "}
              findet ihr - wie der Name bereits sagt - Retrogames! Hier wird jeder Retro-Fan fündig.
              Angeboten werden Spiele von Game-Boy, Super-Nintendo, Nintendo 64, Nintendo DS, Switch
              und Playstation 1-5.
            </p>
          }
        />
        <ContentCard
          title="Cute Paradise"
          imageSrc={CuteParadiseImage}
          altText="Logo von Arnos Retro Cute Paradise"
          text={
            <p>
              Bei{" "}
              <StyledLink href="https://cute-paradise.at/" target="_blank">
                Cute Paradise
              </StyledLink>{" "}
              findet ihr cute/kawaii/niedliche Produkte mit tierischen Designs wie: Plüschtiere,
              Taschen, Pins, Schlüsselanhänger, Schreibzubehör, Geschirr und vieles mehr. Außerdem
              bekommt ihr tierisches Cosplay-Zubehör (wie Haarreifen-Ohren, Schweife, Halsbänder,
              Handschuhe und mehr).
            </p>
          }
        />
        <ContentCard
          title="Dein NöRD Shop"
          imageSrc={NoerdShopImage}
          altText="Logo von Arnos Retro Dein NöRD Shop"
          text={
            <p>
              Bei{" "}
              <StyledLink href="https://www.dein-noerd-shop.com" target="_blank">
                Dein NöRD Shop
              </StyledLink>{" "}
              findet ihr eine vielfältige Auswahl an Merchandise-Artikeln Merchandise Artikel zu den
              Themen Anime, Harry Potter und Gaming. Hier bekommt ihr beispielsweise Figuren,
              Tassen, Schlüsselanhänger, Kissen und Gläser!
            </p>
          }
        />

        <ContentCard
          title="Otakuwonderland"
          imageSrc={OtakuwonderlandImage}
          altText="Logo von Otakuwonderland"
          text={
            <p>
              Entdecke bei{" "}
              <StyledLink href="https://www.instagram.com/otakuwonderland_de/" target="_blank">
                Otakuwonderland
              </StyledLink>{" "}
              unsere vielfältige Auswahl an Terrarien, die von den aufregenden Welten der Pokémon
              und Digimon bis hin zu zauberhaften Baumgeistern und dem beliebten Genshin Impact
              reichen. Darüber hinaus bieten wir eine exquisite Kollektion gravierter Produkte aus
              Glas, Kork, Holz und Schiefer an. Ergänzt wird unser Sortiment durch liebevoll
              gestaltete Anhänger und niedliche Amigurumis.
            </p>
          }
        />
        <ContentCard
          title="PokeVend"
          imageSrc={PokeVendImage}
          altText="Logo von PokeVend"
          text={
            <p>
              <StyledLink href="https://www.pokevend.at" target="_blank">
                PokeVend
              </StyledLink>{" "}
              ist euer kompetenter und zuverlässiger Ansprechpartner rund um Pokémon Sammelkarten!
              Ihr Sortiment umfasst eine breite Palette an verschiedenen Produkten rund um das
              Pokemon TCG. Verschiedenste Pokémon TCG Einzelkarten, Zubehör für den optimalen
              Schutz. Hier findet ihr aktuelle Produkte, wie auch Karten, welche im regulären Handel
              nicht mehr zu finden sind.
            </p>
          }
        />
        <ContentCard
          title="Hero Base"
          imageSrc={HeroBaseImage}
          altText="Logo von Hero Base"
          text={
            <p>
              Bei{" "}
              <StyledLink
                href="https://alexander-karnitschnig.myshopify.com/collections"
                target="_blank"
              >
                Herobase
              </StyledLink>{" "}
              findet ihr Klemmbausteine und Tabeletop Zubehör.
            </p>
          }
        />
        <ContentCard
          title="Rune Store"
          imageSrc={RuneImage}
          altText="Logo von Rune Store"
          text={
            <p>
              <StyledLink href="https://www.rune-online.com" target="_blank">
                Rune Store
              </StyledLink>{" "}
              ist ein Manga-Merch-Shop aus Nordrhein-Westfalen. Hier werden unter anderem Cardgames,
              Figuren, japanische Snacks, Plüschtiere, Würfel und RPGs angeboten!
            </p>
          }
        />
        <ContentCard
          title="Silver Dragon Sabers"
          imageSrc={SilverdragonsabersImage}
          altText="Logo von Silver Dragon Sabers"
          text={
            <p>
              Bei{" "}
              <StyledLink href="https://www.sd-sabers.de" target="_blank">
                Silver Dragon Sabers
              </StyledLink>{" "}
              bekommt ihr - wie der Name bereits sagt - Lichtschwerter! Außerdem könnt ihr hier
              Edelsteine finden. Aber auch ein Reparatur-Service wird angeboten.
            </p>
          }
        />
        <ContentCard
          title="Squiggz"
          imageSrc={SquiggzImage}
          altText="Logo von Squiggz"
          text={
            <p>
              Fans von Warhammer 40k oder Yu-Gi-Oh!, aufgepasst: Dies ist der perfekte Ort für euch!
              Bei{" "}
              <StyledLink href="https://www.squiggz.com/" target="_blank">
                Squiggz
              </StyledLink>
              , dem städtischen Laden für TCG und TTG, findet ihr alles, was das Herz begehrt.
            </p>
          }
        />
        <ContentCard
          title="SteamSpirits"
          imageSrc={SteamSpiritsImage}
          altText="Logo von SteamSpirits"
          text={
            <p>
              Bei{" "}
              <StyledLink href="https://www.steamspirits.net" target="_blank">
                SteamSpirits
              </StyledLink>
              findet ihr alles im Steampunk-Style! Angeboten werden Steampunk inspirierter Schmuck,
              Accessoires und Items.
            </p>
          }
        />
      </ContentContainer>
    </>
  );
}
