import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";
import ContentCard from "@/components/elements/ContentCard";

//Images
import HiruNormal from "/public/assets/hirus/Hiru.png";
import SciFiNarischeBild from "/public/assets/images/yumekai2026/SciFi-Narische.png";
import ToweldayBild from "/public/assets/images/yumekai2026/Internationaler Handtuchtag.png";
import CosplayUnionBild from "/public/assets/images/yumekai2026/Cosplay-Union-Germany e.V..png";
import ConUtopischBild from "/public/assets/images/yumekai2026/ConUtopisch Events.png";
import NGEItashaBild from "/public/assets/images/yumekai2026/N.G.E. Itasha e.V..png";
import NuclearBastardsBild from "/public/assets/images/yumekai2026/Nuclear Bastards.png";
import HanaSpringBild from "/public/assets/images/yumekai2026/Hana & Spring Verein.png";
import HokushinBild from "/public/assets/images/yumekai2026/Hokushin Ittō-ryū Hyōhō.png";
import CosplayAlpinBild from "/public/assets/images/yumekai2026/cosplay Alpin.png";
import Regiment405thBild from "/public/assets/images/yumekai2026/405th European Regiment.png";
import CoHeKiBild from "/public/assets/images/yumekai2026/CoHeKi e.V..png";
import CCDBild from "/public/assets/images/yumekai2026/CCD_Logo.jpg";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
`;

export default function Aussteller() {
  return (
    <>
      <ReturnButton link="/programm2026" />

      <h1 style={{ textAlign: "center" }}>Aussteller &amp; Vereine</h1>

      <ContentContainer>
        <ContentCard
          title="SciFi-Narische"
          imageSrc={SciFiNarischeBild}
          altText="SciFi-Narische"
          text={
            <p>
              Unsere Organisation hat sich dem Ziel verschrieben, Gutes zu tun. Wir sind im ganzen
              Land als Cosplayer unterwegs, sammeln Spenden und zaubern Kindern ein Lächeln ins
              Gesicht mit unseren detailgetreuen Cosplays.
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Towelday Austria – Internationaler Handtuchtag"
          imageSrc={ToweldayBild}
          altText="Towelday Austria"
          text={
            <p>
              Philipp, offizieller Botschafter des internationalen Handtuchtags, berichtet von
              seinen Abenteuern auf den Reisen &bdquo;Per Anhalter durch die Galaxis&rdquo;. An
              jedem 25. Mai organisiert er eine Veranstaltung zum Gedanken an den SF-Autor Douglas
              Adams.
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Cosplay-Union-Germany e.V."
          imageSrc={CosplayUnionBild}
          altText="Cosplay-Union-Germany"
          text={
            <p>
              Wir sind eine Vereinigung von Fans, die versuchen originalgetreue Kostüme aus dem
              Science-Fiction oder Fantasy-Universum zu bauen. Unser Ziel ist es, mit authentischen
              Kostümen auf verschiedenen Veranstaltungen ein &bdquo;Highlight&rdquo; zu sein und
              für große Augen und Begeisterung bei kleinen und großen Fans zu sorgen.
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="ConUtopisch Events"
          imageSrc={ConUtopischBild}
          altText="ConUtopisch"
          text={
            <p>
              ConUtopisch ist der perfekte Mix aus Anime-, Manga-, Cosplay- und Gaming Convention
              im idyllischen Seefeld in Tirol – ein Ort, an dem sich Leidenschaft, Kreativität und
              Gemeinschaft in entspannter Atmosphäre treffen. Bei uns stehen nicht Größe und Hektik
              im Vordergrund, sondern ein gemütliches Miteinander, bei dem sich alle willkommen
              fühlen. Umgeben von der Tiroler Bergkulisse verbinden wir Convention-Feeling mit
              echter Gemütlichkeit.
            </p>
          }
          webLink="https://conutopisch.at"
          webLinkText="ConUtopisch"
          maxWidth={500}
        />

        <ContentCard
          title="N.G.E.-Itasha e.V."
          imageSrc={NGEItashaBild}
          altText="N.G.E.-Itasha"
          text={
            <p>
              Network of German and European Itasha e.V. – mit über 80 Mitgliedern in Europa der
              größte Verein dieser Art in Deutschland. Seit 2015 bringen wir Menschen die
              Itasha-Szene, welche ihren Ursprung in Japan hat, näher. Mit unseren Fahrzeugen
              zeigen wir, wie man seine Lieblingsfiguren aus Animes, Mangas und Games via
              Digitaldruck auf sein Fahrzeug bringen kann. Wir unterstützen mit Hilfestellung,
              nützlichen Tipps und rechtlichem Wissen.
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Nuclear Bastards"
          imageSrc={NuclearBastardsBild}
          altText="Nuclear Bastards"
          text={
            <p>
              ACHTUNG! DIE APOKALYPSE IST DA! Die Nuclear Bastards stürmen die YumeKai – und
              bringen Fallout! Tauche ein in ihre dystopische Welt, wo Schrott zu Stil und Chaos zu
              Kunst wird. Handgefertigte Kostüme verbinden Individualität und Nachhaltigkeit –
              jedes Teil ein Unikat, jedes Grinsen radioaktiv. Zwischen rostigen Fahrzeugen und
              rauchenden Kulissen spürst du die Apokalypse hautnah. Mach legendäre Fotos und stelle
              dich endzeitlichen Herausforderungen!
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Hana &amp; Spring"
          imageSrc={HanaSpringBild}
          altText="Hana & Spring"
          text={
            <p>
              Kommt bei unserem Hana &amp; Spring Infostand vorbei und lernt unsere Convention
              kennen! Wir erzählen euch, was euch erwartet, zeigen euch ein paar Highlights und
              quatschen gern mit euch über Cosplay, Programm &amp; Community. Wir freuen uns auf
              euch!
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Hokushin Ittō-ryū Hyōhō"
          imageSrc={HokushinBild}
          altText="Hokushin Ittō-ryū"
          text={
            <p>
              Eine über 200 Jahre ungebrochen überlieferte Samurai-Schule der Kriegskunst,
              Strategie, Philosophie und Etikette. Mit täglichen Vorführungen, spannenden Vorträgen
              und der Möglichkeit, Fragen direkt an zertifizierte Meister zu stellen. Informiert
              euch über Techniken, Geschichte, Philosophie und Traditionen der Samurai und erlebt
              authentische altjapanische Kultur hautnah.
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Cosplay Alpin e.V."
          imageSrc={CosplayAlpinBild}
          altText="Cosplay Alpin"
          text={
            <p>
              Cosplay Alpin e.V. ist ein regionaler Cosplay-Verein, der die Cosplay-Community in
              der Alpenregion fördert und vernetzt. Besucht uns an unserem Stand und lernt uns
              kennen!
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="405th European Regiment"
          imageSrc={Regiment405thBild}
          altText="405th European Regiment"
          text={
            <p>
              Das 405th European Regiment ist ein Zusammenschluss von Halo-Fans, die aufwändige
              Kostüme aus dem Halo-Universum bauen und auf Conventions präsentieren. Kommt vorbei
              und erlebt authentische Spartan-Rüstungen hautnah!
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="CoHeKi e.V."
          imageSrc={CoHeKiBild}
          altText="CoHeKi e.V."
          text={
            <p>
              Der CoHeKi e.V. engagiert sich für Kinder in Not und organisiert auf Conventions
              Aktionen, deren Erlöse Kinderhilfsprojekten zugutekommen. Besucht uns an unserem
              Stand und erfahrt mehr über unsere Arbeit!
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Comiccon Dornbirn"
          imageSrc={CCDBild}
          altText="Comiccon Dornbirn"
          text={
            <p>
              Comiccon Dornbirn ist eine österreichische Popkultur-Convention. Kommt an unseren
              Stand und erfahrt mehr über unser Event!
            </p>
          }
          maxWidth={500}
        />
      </ContentContainer>
    </>
  );
}
