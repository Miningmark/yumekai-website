import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";
import ContentCard from "@/components/elements/ContentCard";

//Images
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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch; // wichtig: sorgt dafür, dass Cards gleich hoch werden
  gap: 30px;
`;

export default function Aussteller() {
  return (
    <>
      <ReturnButton link="/programm2025" />

      <h1 style={{ textAlign: "center" }}>Aussteller</h1>
      <ContentContainer>
        <ContentCard
          title="Cosplay Union Germany"
          imageSrc={cuglogoImage}
          altText="Logo von Cosplay Union Germany"
          text={
            <p>
              Wir sind eine Gemeinschaft von Sci-Fi- und Fantasy-Fans, die originalgetreue Kostüme
              aus verschiedenen Universen erschaffen. Unser Ziel ist es, mit authentischen Outfits
              auf Events für Begeisterung zu sorgen und große wie kleine Besucher in fantastische
              Welten zu entführen.
            </p>
          }
          instaLink="https://www.instagram.com/cosplay_union_germany/"
          instaLinkText="Cosplay Union Germany"
        />
        <ContentCard
          title="Mishiro"
          imageSrc={mishiroBannerImage}
          altText="Logo von Mishiro"
          text={
            <p>
              Die Mishiro ist eine gemütliche Animexx-Veranstaltung in Augsburg, die alle zwei
              Monate stattfindet. Euch erwarten Anime-Quizzes, Gaming, Karaoke und viele
              Gleichgesinnte. Taucht ein in eine entspannte Atmosphäre voller Nerd-Kultur.
            </p>
          }
          instaLink="https://www.instagram.com/mishiro_augsburg/"
          instaLinkText="Mishiro"
        />
        <ContentCard
          title="Vanity Art Photography"
          imageSrc={vanityartImage}
          altText="Logo von Vanity Art Photography"
          text={
            <p>
              Vanity Art Photography ist auch 2025 wieder als offizieller Fotograf der YumeKai
              dabei! Mit über 20 Jahren Erfahrung und Auftritten auf Events wie Comic Con Stuttgart
              oder Dokomi sorgt er für beeindruckende Aufnahmen. Nutzt die Chance auf professionelle
              Cosplay-Fotos direkt vor Ort!
            </p>
          }
          instaLink="https://www.instagram.com/vanity_art_photography/"
          instaLinkText="Vanity Art Photography"
        />
        <ContentCard
          title="KDKasai"
          imageSrc={kdkasaiImage}
          altText="Logo von KDKasai"
          text={
            <p>
              Die KDKasai ist das Cosplay-Event in Regensburg! Egal ob Karaoke, Laufsteg oder
              Cosplayball mit VIP-Bereich - hier könnt ihr euch entfalten. Besucht unseren Stand auf
              der YumeKai, informiert euch über unser Programm und sichert euch exklusive Rabatte
              auf Tickets!
            </p>
          }
          instaLink="https://www.instagram.com/kdkasai/"
          instaLinkText="KDKasai"
        />
        <ContentCard
          title="CoHeKi e.V."
          imageSrc={cohekiImage}
          altText="Logo von CoHeKi e.V."
          text={
            <p>
              Wir sind CoHeKi e.V., ein gemeinnütziger Verein, bestehend aus Cosplayern, die Kindern
              ein Lächeln schenken möchten. Auf Events sammeln wir Spenden für Organisationen wie
              die Hilfe für krebskranke Kinder Frankfurt e.V. und Frühstart ins Leben e.V. -
              unterstützt uns dabei!
            </p>
          }
          instaLink="https://www.instagram.com/coheki_ev/"
          instaLinkText="CoHeKi e.V."
        />
        <ContentCard
          title="N.G.E. Itasha e.V"
          imageSrc={ngeItashasImage}
          altText="Logo von N.G.E. Itasha e.V"
          text={
            <p>
              Der N.G.E.-Itasha e.V. ist Deutschlands größter Itasha-Verein! Wir bringen euch die
              japanische Kunst, Anime- und Gaming-Charaktere auf Fahrzeuge zu bringen, näher. Bei
              uns gibt es Tipps, rechtliches Wissen und Unterstützung für Einsteiger!
            </p>
          }
          instaLink="https://www.instagram.com/n.g.e._itasha/"
          instaLinkText="N.G.E. Itasha e.V"
        />
        <ContentCard
          title="Nuclear Bastards"
          imageSrc={nuclearBastardsImage}
          altText="Logo von Nuclear Bastards"
          text={
            <p>
              Die Nuclear Bastards haben die Apokalypse überlebt! In rostroten Outfits aus Schrott
              und Stahl erzählen wir Geschichten aus einer alternativen Zukunft. Erlebt unser
              postapokalyptisches Lager, lasst euch die Karten legen und entdeckt unsere
              einzigartige Ästhetik!
            </p>
          }
          instaLink="https://www.instagram.com/nuclear.bastards/"
          instaLinkText="Nuclear Bastards"
        />
        <ContentCard
          title="CosQuest"
          imageSrc={cosquestLogoImage}
          altText="Logo von CosQuest"
          text={
            <p>
              Die CosQuest ist das monatliche Abendevent für Nerds in München! Karaoke, Gaming und
              spannende Themenabende erwarten euch in entspannter Atmosphäre. Unsere Events richten
              sich an ein erwachsenes Publikum - kommt vorbei und erlebt einen unvergesslichen
              Abend!
            </p>
          }
          instaLink="https://www.instagram.com/cosplay_questmuc/"
          instaLinkText="CosQuest"
        />
        <ContentCard
          title="Cosplay Alpin"
          imageSrc={cosplayAlpinImage}
          altText="Logo von Cosplay Alpin"
          text={
            <p>
              {" "}
              Cosplay Alpin aus Vorarlberg ist auf der YumeKai! Von Star Wars über Herr der Ringe
              bis Anime - wir bringen detailreiche Kostüme und beeindruckende Props mit. Bestaunt
              unsere Werke und taucht in die Welt des Cosplays ein!
            </p>
          }
          instaLink="https://www.instagram.com/cosplayalpin/"
          instaLinkText="Cosplay Alpin"
        />
        <ContentCard
          title="Towelday Austria"
          imageSrc={towldayaustriaImage}
          altText="Logo von Towelday Austria"
          text={
            <p>
              Handtuch dabei? Dann besucht den &bdquo;Per Anhalter durch die Galaxis&rdquo;-Stand
              von Towelday Austria! Taucht ein in Douglas Adams&apos; skurriles Universum,
              diskutiert die Antwort auf alles und feiert mit uns intergalaktischen Humor. Keine
              Panik - wir sehen uns auf der YumeKai!
            </p>
          }
          instaLink="https://www.instagram.com/towelday_austria/"
          instaLinkText="Towelday Austria"
        />
        <ContentCard
          title="Bayrischer Go Verein e.V."
          imageSrc={goVereinImage}
          altText="Logo von Bayrischer Go Verein e.V."
          text={
            <p>
              Der Bayerische Go Verein setzt sich für die Förderung des traditionsreichen Go-Spiels
              ein. Ob Anfänger oder erfahrener Spieler - bei uns findet ihr Gleichgesinnte. Besucht
              uns auf der YumeKai und entdeckt die Faszination dieses strategischen Brettspiels!
            </p>
          }
          webLink="https://www.bgov.de/"
          webLinkText="Bayrischer Go Verein e.V."
        />
        <ContentCard
          title="Vivid Arise eSports e.V."
          imageSrc={vividAriseEvImage}
          altText="Logo von Vivid Arise eSports e.V."
          text={
            <p>
              Ein junger Verein aus Augsburg mit Mitgliedern aus ganz Deutschland. Ihr Fokus liegt
              auf japanischen Arcade-Games, Rhythmus und Wettbewerb. Sie sind im E-Sport aktiv in
              Pokémon Unite, VGC, Smash Bros. Ultimate und Valorant. Schaut direkt vor Ort bei ihnen
              vorbei und erfahrt mehr!
            </p>
          }
          instaLink="https://www.instagram.com/vivid_arise_esports/"
          instaLinkText="Vivid Arise eSports e.V."
        />
        <ContentCard
          title="Hana & Spring Convention"
          imageSrc={HanaUSpringImage}
          altText="Logo von Hana & Spring Convention"
          text={
            <p>
              Seit 2024 bringen wir die bunte Welt der Popkultur in die Matrix Königsbrunn und laden
              dich ein, ein einzigartiges Erlebnis im modernen südostasiatischen Stil zu entdecken.
            </p>
          }
          instaLink="https://www.instagram.com/hana_spring_con/"
          instaLinkText="Hana & Spring Convention"
        />
      </ContentContainer>
    </>
  );
}
