import styled from "styled-components";

//Components
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
              Bei der Heldenschmiede werden Manga- Brett- und Würfelfans glücklich! Ihr seid Fans
              japanischer und südkoreanischer Literatur? Dann seid ihr bei der Heldenschmiede genau
              richtig!
              <br />
              Egal ob Yuri, Yaoi, Isekai oder Shonen - hier bekommt ihr alles, was das Otaku-Herz
              begehrt! Hier jeder das Richtige für sich. Das ist definitiv der Place to Be für alle
              Fans!
            </p>
          }
          webLink="https://www.heldenschmiede.eu/"
          webLinkText="Heldenschmiede"
        />
        <ContentCard
          title="Manga-Merch"
          imageSrc={MangaMerchImage}
          altText="Logo von Manga-Merch"
          text={
            <p>
              Hallo an alle, wir von Manga-Merch.com sind ein Label, das sich darauf spezialisiert
              hat, Merchandise und Plüschies mit Designs deutscher und internationaler Künstler
              herzustellen. Unsere Künstler sind alle am Umsatz beteiligt und profitieren so direkt
              von jedem Verkauf. Ob Plüschie, Mousepad, Geldbörse oder Tasche. Schaut mal bei uns
              vorbei. Ihr werdet bestimmt etwas Schönes für euch finden. <br />
              Euer Manga-Merch.com-Team
            </p>
          }
          webLink="https://www.manga-merch.com"
          webLinkText="Manga-Merch"
        />
        <ContentCard
          title="CosmicMoonlight"
          imageSrc={CosmicMoonlightImage}
          altText="Bild von CosmicMoonlight"
          text={
            <p>
              Hallo, mein Name ist Jessica und ich bin die Designerin sowie Gründerin von
              cosmicmoonlight. An meinem Stand könnt ihr eine große Auswahl an selbst designtem
              Schmuck entdecken. Außerdem biete ich ein ausgefallenes Sortiment aus Edelstahl-,
              Messing- und Edelsteinschmuck an. Neben einer Vielzahl von Ketten für den Alltag gibt
              es bei mir auch eine große Auswahl an Chokern und Ohrschmuck. Ich freue mich schon
              darauf, euch bei mir begrüßen zu dürfen. Bis bald!
            </p>
          }
          webLink="https://www.cosmicmoonlight.com/"
          webLinkText="CosmicMoonlight"
        />
        <ContentCard
          title="3D Druck David Verhoeven"
          imageSrc={DavidVerhoevenImage}
          altText="Logo von 3D Druck David Verhoeven"
          text={
            <p>
              Bei 3D Druck David Verhoeven findet ihr verschiedenes aus dem 3D-Drucker.
              Beispielsweise findet ihr hier selbstgemachte Cosplay-Probs, Helme mit verbauter
              Technik, Masken, Schlüsselanhänger und viele weitere Produkte!
            </p>
          }
          instaLink="https://www.instagram.com/djv_3d/"
          instaLinkText="3D Druck David Verhoeven"
        />
        <ContentCard
          title="Arnos Retro Videogames"
          imageSrc={ArnosRetroVideogamesImage}
          altText="Logo von Arnos Retro Videogames"
          text={
            <p>
              Bei Arnos Retro Videogames findet ihr - wie der Name bereits sagt - Retrogames! Hier
              wird jeder Retro-Fan fündig. Angeboten werden Spiele von Game-Boy, Super-Nintendo,
              Nintendo 64, Nintendo DS, Switch und Playstation 1-5.
            </p>
          }
          webLink="https://www.arnos-retro-videogames.com"
          webLinkText="Arnos Retro Videogames"
        />
        <ContentCard
          title="Cute Paradise"
          imageSrc={CuteParadiseImage}
          altText="Logo von Arnos Retro Cute Paradise"
          text={
            <p>
              Bei Cute Paradise findet ihr cute/kawaii/niedliche Produkte mit tierischen Designs
              wie: Plüschtiere, Taschen, Pins, Schlüsselanhänger, Schreibzubehör, Geschirr und
              vieles mehr. Außerdem bekommt ihr tierisches Cosplay-Zubehör (wie Haarreifen-Ohren,
              Schweife, Halsbänder, Handschuhe und mehr).
            </p>
          }
          webLink="https://cute-paradise.at/"
          webLinkText="Cute Paradise"
        />
        <ContentCard
          title="Dein NöRD Shop"
          imageSrc={NoerdShopImage}
          altText="Logo von Arnos Retro Dein NöRD Shop"
          text={
            <p>
              Bei Dein NöRD Shop findet ihr eine vielfältige Auswahl an Merchandise-Artikeln
              Merchandise Artikel zu den Themen Anime, Harry Potter und Gaming. Hier bekommt ihr
              beispielsweise Figuren, Tassen, Schlüsselanhänger, Kissen und Gläser!
            </p>
          }
          webLink="https://www.dein-noerd-shop.com"
          webLinkText="Dein NöRD Shop"
        />

        <ContentCard
          title="Otakuwonderland"
          imageSrc={OtakuwonderlandImage}
          altText="Logo von Otakuwonderland"
          text={
            <p>
              Entdecke bei Otakuwonderland unsere vielfältige Auswahl an Terrarien, die von den
              aufregenden Welten der Pokémon und Digimon bis hin zu zauberhaften Baumgeistern und
              dem beliebten Genshin Impact reichen. Darüber hinaus bieten wir eine exquisite
              Kollektion gravierter Produkte aus Glas, Kork, Holz und Schiefer an. Ergänzt wird
              unser Sortiment durch liebevoll gestaltete Anhänger und niedliche Amigurumis.
            </p>
          }
          webLink="https://www.instagram.com/otakuwonderland_de/"
          webLinkText="Otakuwonderland"
        />
        <ContentCard
          title="PokèVend"
          imageSrc={PokeVendImage}
          altText="Logo von PokeVend"
          text={
            <p>
              PokèVendist euer kompetenter und zuverlässiger Ansprechpartner rund um Pokémon
              Sammelkarten! Ihr Sortiment umfasst eine breite Palette an verschiedenen Produkten
              rund um das Pokemon TCG. Verschiedenste Pokémon TCG Einzelkarten, Zubehör für den
              optimalen Schutz. Hier findet ihr aktuelle Produkte, wie auch Karten, welche im
              regulären Handel nicht mehr zu finden sind.
            </p>
          }
          webLink="https://www.pokevend.at"
          webLinkText="PokèVend"
        />
        <ContentCard
          title="Hero Base"
          imageSrc={HeroBaseImage}
          altText="Logo von Hero Base"
          text={<p>Bei Herobase findet ihr Klemmbausteine und Tabeletop Zubehör.</p>}
          webLink="https://alexander-karnitschnig.myshopify.com/collections"
          webLinkText="Hero Base"
        />
        <ContentCard
          title="Rune Store"
          imageSrc={RuneImage}
          altText="Logo von Rune Store"
          text={
            <p>
              Rune Store ist ein Manga-Merch-Shop aus Nordrhein-Westfalen. Hier werden unter anderem
              Cardgames, Figuren, japanische Snacks, Plüschtiere, Würfel und RPGs angeboten!
            </p>
          }
          webLink="https://www.rune-online.com"
          webLinkText="Rune Store"
        />
        <ContentCard
          title="Silver Dragon Sabers"
          imageSrc={SilverdragonsabersImage}
          altText="Logo von Silver Dragon Sabers"
          text={
            <p>
              Bei Silver Dragon Sabers bekommt ihr - wie der Name bereits sagt - Lichtschwerter!
              Außerdem könnt ihr hier Edelsteine finden. Aber auch ein Reparatur-Service wird
              angeboten.
            </p>
          }
          webLink="https://www.sd-sabers.de"
          webLinkText="Silver Dragon Sabers"
        />
        <ContentCard
          title="Squiggz"
          imageSrc={SquiggzImage}
          altText="Logo von Squiggz"
          text={
            <p>
              Fans von Warhammer 40k oder Yu-Gi-Oh!, aufgepasst: Dies ist der perfekte Ort für euch!
              Bei Squiggz, dem städtischen Laden für TCG und TTG, findet ihr alles, was das Herz
              begehrt.
            </p>
          }
          webLink="https://www.squiggz.com/"
          webLinkText="Squiggz"
        />
        <ContentCard
          title="SteamSpirits"
          imageSrc={SteamSpiritsImage}
          altText="Logo von SteamSpirits"
          text={
            <p>
              Bei SteamSpirits findet ihr alles im Steampunk-Style! Angeboten werden Steampunk
              inspirierter Schmuck, Accessoires und Items.
            </p>
          }
          webLink="https://www.steamspirits.net"
          webLinkText="SteamSpirits"
        />
      </ContentContainer>
    </>
  );
}
