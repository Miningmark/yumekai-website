import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";
import ContentCard from "@/components/elements/ContentCard";

//Images
import HiruHandler from "/public/assets/hirus/Hiru_Handler.png";
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
`;

export default function Haendler() {
  return (
    <>
      <ReturnButton link="/programm2026" />

      <h1 style={{ textAlign: "center" }}>Händler</h1>

      <ContentContainer>
        <ContentCard
          title="Colorful Mind Tattoo-Atelier"
          imageSrc={ColorfulMindBild}
          altText="Colorful Mind"
          text={
            <p>
              Hey, ich heiße Julia und ich bin leidenschaftliche Tätowiererin seit 2019. In meinem
              Studio dreht sich alles um hochwertige und individuelle Tattookunst. Ich habe mich auf
              verschiedene Stile spezialisiert, darunter Fineline, Dotwork, Mandala und
              Tierportraits. Mit viel Liebe zum Detail entwerfe ich für meine Kunden ihr eigenes,
              persönliches Tattoo – sei es ein japanisches Tattoo, ein Anime- oder Gaming-Tattoo.
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Euphony GmbH"
          imageSrc={EuphonyBild}
          altText="Euphony"
          text={
            <p>
              Euer Händler für Anime-Figuren, Plüschtiere und Cosplay-Schaumstoffwaffen.
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Otaku Art"
          imageSrc={OtakuArtBild}
          altText="Otaku Art"
          text={
            <p>
              Dein Anime-Shop mit Herz &amp; Stil! Bei uns findest du liebevoll ausgewählte
              Anime-Figuren, DIY-Kits, Paper Theater, Lucky Bags und jede Menge Kawaii-Merch zum
              Verlieben. Egal ob du sammelst, dein Regal verschönern willst oder einfach nur nach
              einem coolen Schlüsselanhänger suchst – bei uns wirst du fündig!
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Squiggz"
          imageSrc={SquiggzBild}
          altText="Squiggz"
          text={
            <p>
              Fans von Warhammer 40k oder Yu-Gi-Oh!, aufgepasst: Dies ist der perfekte Ort für
              euch! Bei Squiggz, dem städtischen Laden für TCG und TTG, findet ihr alles, was das
              Herz begehrt.
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Heldenschmiede"
          imageSrc={HeldenschmiedeBild}
          altText="Heldenschmiede"
          text={
            <p>
              Ihr seid Fans japanischer und südkoreanischer Literatur? Dann seid ihr bei der
              Heldenschmiede genau richtig! Egal ob Yuri, Yaoi, Isekai oder Shonen – hier bekommt
              ihr alles, was das Otaku-Herz begehrt! Außerdem bieten wir euch Merchandise, Trading
              Card Games, Brettspiele, Pen &amp; Paper und Würfel.
            </p>
          }
          webLink="https://www.heldenschmiede.eu"
          webLinkText="Heldenschmiede"
          maxWidth={500}
        />

        <ContentCard
          title="Akumu"
          imageSrc={AkumuBild}
          altText="Akumu"
          text={
            <p>
              Hallo ich bin Akumu und bei mir findet ihr handgemachten Schmuck und vieles mehr.
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Jenny Grams – Tenity Designs"
          imageSrc={JennyGramsBild}
          altText="Jenny Grams / Tenity Designs"
          text={
            <p>
              Tenity_Design streamt als Vtuberin auf Twitch. Dort spielt sie nicht nur comfy Games,
              sondern sorgt z.B. auch mit Bastel-Streams für Entspannung. An ihrem Stand bietet sie
              eigenes Merchandise sowie handgemachte Notizbücher, Anhänger und Foil-Art an!
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Animi"
          imageSrc={AnimiBild}
          altText="Animi"
          text={
            <p>
              Wir sind Animi – ein aufstrebendes Unternehmen, das mit Leidenschaft original
              lizenzierte Anime-Figuren und Merch anbietet. Unsere beliebten AniBoxen sind
              handverlesene Highlights, bei denen Qualität vor Quantität steht – nicht vergleichbar
              mit herkömmlichen Lucky Bags!
            </p>
          }
          webLink="https://www.animi-shop.de"
          webLinkText="Animi Shop"
          maxWidth={500}
        />

        <ContentCard
          title="Otakuwonderland"
          imageSrc={OtakuwonderlandBild}
          altText="Otakuwonderland"
          text={
            <p>
              Entdecke unsere vielfältige Auswahl an handgefertigten Terrarien – inspiriert von
              fantastischen Kreaturen, digitalen Welten und mystischen Naturwesen. Außerdem findest
              du bei uns eine exklusive Auswahl an gravierten Produkten aus Glas, Kork, Holz und
              Schiefer, liebevoll gestaltete Anhänger, niedliche Amigurumis sowie detailreiche
              3D-Druck-Figuren und -Anhänger.
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="BavarianWoodfox"
          imageSrc={BavarianWoodfoxBild}
          altText="BavarianWoodfox"
          text={
            <p>
              Handgefertigte Bausätze und Deko aus Holz. Würfeltürme, Mimics, Würfel und
              Schlüsselanhänger.
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Shiga Food"
          imageSrc={ShigaFoodBild}
          altText="Shiga Food"
          text={
            <p>
              Shiga Food freut sich, bei YumeKai dabei zu sein! Wir sind ein junges Unternehmen und
              importieren originale Snacks, Süßwaren, Miso, Sojasauce, Grüntee und Matcha direkt
              aus Japan. Unser Ziel ist es, echte japanische Produkte so erschwinglich wie möglich
              anzubieten. Qualität und Herkunft stehen an erster Stelle – alles Made in Japan.
            </p>
          }
          maxWidth={500}
        />
      </ContentContainer>
    </>
  );
}
