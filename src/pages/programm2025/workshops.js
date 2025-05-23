import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";
import ContentCard from "@/components/elements/ContentCard";

//Images
import HiruWorkshop from "/public/assets/hirus/Hiru_Workshop.png";
import cosplayfotosBearbeitenBasicsBisProfitricksPhilippImage from "/public/assets/images/yumekai2025/Cosplay-Fotos_bearbeiten_Basics_bis_Profi-Tricks_-_Philipp.jpg";
import cosplayAlsBerufseinstiegAusbildungZumDamenmaßschneiderImage from "/public/assets/images/yumekai2025/Cosplay_als_Berufseinstieg_-_Ausbildung_zum_Damenmaßschneider.png";
import desnescitrusErfolgreichImNetzImage from "/public/assets/images/yumekai2025/DesnesCitrus_-_Erfolgreich_im_Netz.png";
import fylyColorierenMitAlkoholmarkerImage from "/public/assets/images/yumekai2025/fyly_-_Colorieren_mit_Alkoholmarker.png";
import kanzashiKunstQuinnsArtImage from "/public/assets/images/yumekai2025/Kanzashi_Kunst_-_Quinns_Art.jpg";
import laratornowCroquisDieKunstDesSchnellenZeichnensImage from "/public/assets/images/yumekai2025/LaraTornow_Croquis_-_die_Kunst_des_schnellen_Zeichnens.png";
import mayumiNagashifbcJcultureInteraktiveMangawerkstattImage from "/public/assets/images/yumekai2025/Mayumi_Nagashi_FBC_J-Culture_-_Interaktive_Mangawerkstatt.png";
import minekeImage from "/public/assets/images/yumekai2025/Mineke.jpg";
import nuclearBastardsImage from "/public/assets/images/yumekai2025/Nuclear_Bastards.png";
import speedpaintingImage from "/public/assets/images/yumekai2025/Speedpainting.jpg";
import vanessaHerzPropmakingFürBeginnerImage from "/public/assets/images/yumekai2025/Vanessa_Herz_Propmaking_für_Beginner.jpg";
import zaylinaBallkleiderNaehenImage from "/public/assets/images/yumekai2025/Zaylina_-_Ballkleider_naehen.jpg";
import StockingsWorkshopImage from "/public/assets/images/yumekai2025/StockingsWorkshop_Image.png";
import andyKnoteImage from "/public/assets/images/yumekai2025/Andy_Knote.jpg";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch; // wichtig: sorgt dafür, dass Cards gleich hoch werden
  gap: 30px;
`;

export default function Workshops() {
  return (
    <>
      <ReturnButton link="/programm2025" />

      <h1 style={{ textAlign: "center" }}>Workshops</h1>

      <ContentContainer>
        <ContentCard
          title="Cosplay als Berufseinstieg"
          subtitle="Ausbildung zum Damenmaßschneider"
          imageSrc={cosplayAlsBerufseinstiegAusbildungZumDamenmaßschneiderImage}
          altText="Bild von Cosplay als Berufseinstieg"
          text={
            <p>
              Du hast Spaß am Nähen und könntest dir vorstellen, das auch beruflich zu machen, hast
              aber keine Ahnung, wo man da einsteigen soll? Du willst einen Profi ein bisschen aus
              dem Nähkästchen plaudern hören und dir Tipps & Tricks aus dem Handwerk holen? Dann
              bist du hier richtig! Ich bin Marten, bekannt als Korriban Cosplay. Mit einem
              Modedesign Studium, einer abgeschlossenen Ausbildung zum Damenmaßschneider und einer
              beginnenden Selbstständigkeit im Bereich High-End Cosplay bin ich der richtige
              Ansprechpartner, wenn du dein Hobby zum Beruf machen willst. Ich erzähle dir alles
              über die Ausbildung, meine Top 5 Tricks aus dem Handwerk, und am Ende kannst du Fragen
              stellen!
            </p>
          }
          instaLink="https://www.instagram.com/korribancosplay/"
          instaLinkText="Korriban Cosplay"
          maxWidth={550}
        />
        <ContentCard
          title="Propmaking für Beginner"
          imageSrc={vanessaHerzPropmakingFürBeginnerImage}
          altText="Bild von Propmaking für Beginner"
          text={
            <p>
              Hier gehen wir die Grundlagen des Propmakings durch: Von der Planung wie man überhaupt
              anfängt, über die vielfältigen Materialien, bis hin zur Durchführung sowie Priming und
              Painting. Auch was zu beachten ist zum Thema Sicherheit beim Arbeiten. zudem kann ich
              Teilnehmern noch Tipps zu ihren eigenen Projekten geben und aufkommende Fragen
              beantworten.
            </p>
          }
          instaLink="https://www.instagram.com/Akunyaah"
          instaLinkText="Akunyaah"
          maxWidth={550}
        />
        <ContentCard
          title="Erfolgreich im Netz"
          subtitle="Finde deine Nische!"
          imageSrc={desnescitrusErfolgreichImNetzImage}
          altText="Bild von Erfolgreich im Netz"
          text={
            <p>
              Seit über 10 Jahren auf YouTube aktiv, teilt Desnes Citrus in diesem Workshop seine
              Erfahrungen aus erster Hand. Erfahre, warum eine klare Nische der Schlüssel zum Erfolg
              ist - und wie du deine findest! Von der Ideenfindung bis zur Optimierung deines
              Contents bekommst du praktische Tipps für deinen eigenen erfolgreichen Auftritt im
              Netz.
            </p>
          }
          instaLink="https://www.instagram.com/DesnesCitrus/"
          instaLinkText="Desnes Citrus"
          maxWidth={550}
        />
        <ContentCard
          title="Colorieren mit Alkoholmarker für Anfänger"
          imageSrc={fylyColorierenMitAlkoholmarkerImage}
          altText="Bild von Colorieren mit Alkoholmarker für Anfänger"
          text={
            <p>
              Heyo, ich bin Fyly und zeichne hauptberuflich Anime - noch ganz traditionell auf
              Papier. In diesem Workshop bringe ich euch mein Lieblingsmedium Alkoholmarker näher -
              angefangen von verschiedenen Markenstiften, Papier und Linern, bis hin zu meinen
              persönlichen Tricks & Tipps. Der perfekte Einstieg ins Thema colorieren für Anfänger!
            </p>
          }
          instaLink="https://www.instagram.com/fyly_draws/"
          instaLinkText="Fyly"
          maxWidth={550}
        />
        <ContentCard
          title="Arbeiten mit Leder für Cosplay"
          imageSrc={HiruWorkshop}
          altText="Bild von AliceMySecret"
          text={
            <p>
              Du wolltest schon immer lernen, wie man Leder im Cosplay einsetzt? In diesem Workshop
              zeigt dir Eralia aus den Niederlanden die Basics des Lederhandwerks - von Werkzeugen
              über Materialien bis hin zu einfachen Techniken, die du direkt anwenden kannst. Eralia
              ist seit 2010 in der Cosplay-Szene aktiv und begeistert mit aufwendigen Game-Cosplays,
              zum Beispiel aus Final Fantasy oder Baldur&apos;s Gate. Eralias Erfahrungen haben them
              die Möglichkeit gegeben die Niederlande in den ECG finals in Paris zu vertreten. Jetzt
              teilt Eralia die eigene Leidenschaft fürs Crafting - in diesem fall für Lederarbeiten
              - mit euch! Lerne, wie du deinem Cosplay mit Leder ausschmücken kannst.<br />
              <em>Dieser Workshop wird auf englisch gehalten.</em>
            </p>
          }
          instaLink="https://www.instagram.com/eralia_iwahana/"
          instaLinkText="Eralia_Iwahana"
          maxWidth={550}
        />
        <ContentCard
          title="1x1 Kanzashi Kunst"
          imageSrc={kanzashiKunstQuinnsArtImage}
          altText="Bild von 1x1 Kanzashi Kunst"
          text={
            <p>
              Tauche ein in die bunte Blütenwelt der Kanzashi Kunst. In meinem Workshop &quot;1x1 der
              Kanzashi Kunst&quot; dreht sich alles um die wichtigsten Materialien und Werkzeuge, die du
              für den Einstieg benötigst. Ich zeige dir, welche Stoffe, Schneidewerkzeuge und
              Zubehörteile du brauchst, um deine ersten wunderschönen Kanzashi-Blüten zu kreieren.
              Außerdem gebe ich dir praktische Tipps und Tricks, wo du das Material günstig und
              qualitativ hochwertig kaufen kannst. Damit steht deinem kreativen Start nichts mehr im
              Weg!
            </p>
          }
          instaLink="https://www.instagram.com/quinnskanzashi/"
          instaLinkText="Quinn"
          maxWidth={550}
        />
        <ContentCard
          title="Speedpainting Challenge"
          imageSrc={speedpaintingImage}
          altText="Bild von Speedpainting Challenge"
          text={
            <p>
              Das Team der Heldenschmiede steht uns dieses Jahr nicht nur übers gesamte Wochenende
              mit einem coolen Stand voller Merchandise zur Verfügung, sondern bietet außerdem am
              Sonntag noch zwei Speedpainting Challenges an! Hierbei bekommt ihr Farben, Pinsel und
              eine Figur gestellt und habt nach einer kurzen Einführung eine volle Stunde Zeit, die
              Miniatur zu bemalen. Es gibt dabei keine Vorgaben zur Bemalung und ihr müsst nichts
              mitbringen außer Begeisterung und vielleicht einem Hauch Disziplin - wer schon
              Hobbyerfahrung hat, weiß, dass eine Stunde pro Modell eine knackige Vorgabe ist. Die
              Modelle werden euch von Games Workshop, die Farben von Army Painter und die Pinsel von
              Lupri zur Verfügung gestellt - vielen Dank an der Stelle für den Support! Im Anschluss
              dürft ihr das Modell natürlich behalten und so eine coole Erinnerung mit heim nehmen.
              Die Startzeiten am Sonntag sind um 12:15 und um 15:45 - bitte meldet euch vorher an,
              da wir pro Challenge nur 10 Plätze haben. Die Anmeldeliste könnt ihr beim Infostand
              der YumeKai finden.
            </p>
          }
          webLink="https://www.heldenschmiede.eu/"
          webLinkText="Heldenschmiede"
          maxWidth={550}
        />
        <ContentCard
          title="Croquis"
          subtitle="die Kunst des schnellen Zeichnens"
          imageSrc={laratornowCroquisDieKunstDesSchnellenZeichnensImage}
          altText="Bild von Croquis"
          text={
            <p>
              Mit Croquis bezeichnet man eine Zeichenübungstechnik, durch die schnelles Zeichnen
              aller Dinge und Wesen möglich wird, auch Comics, Mangas und Animationen werden u.a.
              durch sie erschaffen. So ist durch jene Zeichentechnik auch die Möglichkeit gegeben
              Proportionen, Gesten, Gelenke und Gliedmaßen in ihrer realistischen Darstellung
              zeichnerisch zu perfektionieren. Im hier angebotenen Craschkurs geht es nach einer
              kurzen theoretischen Einführung weiter zum praktischen Teil - Croquis-Aufwärmtraining.
              Hierfür benötigen die Teilnehmer Papier und idealerweise Kugelschreiber oder Stabilo.
              Die Farbe eurer Stifte kann gerne variieren. Nachdem erklärt wurde, auf was während
              der praktischen Phase geachtet werden sollte, geht es mit den ersten Runden los. Dabei
              handelt es sich um das Skizzieren eines vorgegebenen Objektes durch bestimmte
              Stiftführung innerhalb eines Zeitraffers, welcher sich wiederum pro Runde etwas
              verkürzt. Auf diese Weise wird durch Croquis die schnelle Beobachtungsgabe und
              Stiftführung trainiert.
            </p>
          }
          instaLink=""
          instaLinkText="Lara"
          maxWidth={550}
        />
        <ContentCard
          title="Die Kunst des Überlebens"
          subtitle="Vorbereitung auf die Endzeit"
          imageSrc={nuclearBastardsImage}
          altText="Bild von die Kunst des Überlebens"
          text={
            <p>
              In diesem Workshop zeigen euch die Nuclear Bastards die Grundlagen was eigentlich
              Endzeit ist, die ersten Schritte beim Basteln und geben euch Tipps und Tricks damit
              ihr durchstarten könnt.
            </p>
          }
          instaLink="https://www.instagram.com/nuclear.bastards/"
          instaLinkText="Nuclear Bastards"
          maxWidth={550}
        />
        <ContentCard
          title="Interaktive Manga-Werkstatt"
          imageSrc={mayumiNagashifbcJcultureInteraktiveMangawerkstattImage}
          altText="Bild von Interaktive Manga-Werkstatt"
          text={
            <p>
              Manga zu lesen macht Spaß - aber wie oft bekommt ihr die Gelegenheit, einen Blick in
              das echte Arbeitsumfeld einer Manga-Künstlerin zu werfen? Die „Manga-Werkstatt“ bringt
              dieses seltene Erlebnis mitten ins Eventgeschehen. Die japanische Profi-Zeichnerin
              Mayumi Nagashi lässt euch zuschauen, wie ihre Zeichnungen entstehen - präzise, sicher
              und voller Ausdruck. Tafeln am Stand liefern zusätzliche Einblicke in ihre Werke,
              ihren Stil und den kreativen Prozess. Für Zeicheninteressierte bietet sich außerdem
              eine persönliche Beratung - nicht in Worten, sondern in Linien &#40;eigene Zeichnungen
              sind mitzubringen&#41;. Ein Moment der Konzentration - vergänglich, und doch
              unvergesslich.
            </p>
          }
          instaLink="https://www.instagram.com/nagashi_mayumi/"
          instaLinkText="Mayumi Nagashi"
          maxWidth={550}
        />
        <ContentCard
          title="Q&A mit Andy Knote"
          imageSrc={andyKnoteImage}
          altText="Bild von Andy Knote"
          text={
            <p>
              Andy Knote ist der Produzent vieler alter deutschen Anime Openings wie beispielsweise
              von Yu-Gi- Oh!, One Piece, Detectve Conan. Auf der YuemKai bietet er für euch ein Q&A
              an, auf welchem ihr ihm eure Fragen stellen könnt.
            </p>
          }
          instaLink="https://www.instagram.com/andy_knote/"
          instaLinkText="Andy Knote"
          maxWidth={550}
        />
        <ContentCard
          title="Cosplay Competition für Beginner"
          imageSrc={minekeImage}
          altText="Bild von Display Competition für Beginner"
          text={
            <p>
              Du hast Lust, an einem Cosplay-Wettbewerb teilzunehmen, weißt aber nicht, wo du
              anfangen sollst? Dann ist dieser Workshop genau das Richtige für dich! Die erfahrene
              Cosplayerin Mineke &#40;alias Yaraiya&#41; aus den Niederlanden gibt dir wertvolle
              Tipps und Einblicke in die Welt der Cosplay- Competitions. Seit 2010 im Cosplay aktiv,
              vertritt Mineke seit 2016 regelmäßig ihr Land bei internationalen Wettbewerben wie dem
              WCS &#40;World Cosplay Summit&#41; und C4. Besonders liebt sie es, aufwendige Details
              umzusetzen und spektakuläre Bühnen-Requisiten zu bauen. In diesem Workshop teilt sie
              ihre Erfahrungen und erklärt euch die wichtigsten Grundlagen. Mineke freut sich
              darauf, euch kennenzulernen.<br />
              <em>Dieser Workshop wurd auf englisch gehalten.</em>
            </p>
          }
          instaLink="https://www.instagram.com/yaraiyacosplay/"
          instaLinkText="Yaraiya Cosplay"
          maxWidth={550}
        />
        <ContentCard
          title="Cosplay-Fotos bearbeiten"
          subtitle="Basics bis Profi-Tricks"
          imageSrc={cosplayfotosBearbeitenBasicsBisProfitricksPhilippImage}
          altText="Bild von Cosplay-Fotos bearbeiten"
          text={
            <p>
              Möchtest du wissen, wie Cosplay-Fotografen ihre Bilder bearbeiten? Möchtest du selbst
              kreativ werden, statt auf Standardfilter zurückzugreifen? Oder die Fotos vom letzten
              Cosplay-Shooting endlich selbst bearbeiten, weil der Fotograf nicht dazu kommt? Ob
              Anfänger*in oder Fortgeschrittene*r - in diesem Workshop zeige ich dir, wie du deine
              Cosplay-Fotos auf das nächste Level bringst. Zunächst behandeln wir die Basics:
              Belichtung, Farben, Kontraste. Du lernst, mit einfachen Techniken schnell sichtbare
              Verbesserungen zu erzielen. Danach geht es um fortgeschrittene Techniken. Du erfährst,
              wie du mit Masken den Blick des Betrachters lenkst und Details hervorhebst, damit
              deine Bilder richtig zur Geltung kommen. Hinweis: Ich präsentiere die Techniken mit
              Adobe Lightroom, das einige kostenpflichtige Funktionen bietet. Aber keine Sorge: Das
              Wissen ist allgemein anwendbar und du kannst das Gelernte auch mit anderen Tools
              umsetzen.
            </p>
          }
          instaLink="https://www.instagram.com/photos_by_philipp/"
          instaLinkText="Philipp"
          maxWidth={550}
        />
        <ContentCard
          title="Stockings Workshop"
          imageSrc={StockingsWorkshopImage}
          altText="Bild von Stockings Workshop"
          text={
            <p>
              Außergewöhnliche Charakterdesigns stellen uns Cosplayer immer wieder vor neue
              Herausforderungen: Ein gutes Beispiel hierfür ist die Vielzahl an bunten, gemusterten
              Socken, Strümpfen und Strumpfhosen unserer Lieblingscharaktere. Oft gibt es diese
              weder in gewünschter Farbe oder Material, noch mit dem passendem Muster zu kaufen.
              Also heißt es mal wieder: selber machen! Im folgenden Tutorial zeigen wir euch, wie
              ihr die außergewöhnliche Beinbekleidung eurer Helden selbst herstellt.
            </p>
          }
          instaLink="https://www.instagram.com/imoneecosplay/"
          instaLinkText="Imonee Cosplay"
          maxWidth={550}
        />
        <ContentCard
          title="Ballkleider"
          subtitle="Eleganz trifft Fantasie"
          imageSrc={zaylinaBallkleiderNaehenImage}
          altText="Bild von Ballkleider"
          text={
            <p>
              Tauche ein in die Welt der prachtvollen Ballkleider. In diesem Workshop lernst du, wie
              du atemberaubende Kleider für Cosplay-Bälle, Fantasy-Events oder Fotoshootings
              gestaltest. Wir besprechen verschiedene Schnittmuster, Stoffwahl, Verzierungen und wie
              du dein Ballkleid strukturierst. Egal ob du ein historisch inspiriertes Design oder
              eine märchenhafte Robe planst - hier bekommst du wertvolle Tipps für die Umsetzung.
              Lass dich inspirieren und bring deine Ideen mit!
            </p>
          }
          instaLink="https://www.instagram.com/zaylina1/"
          instaLinkText="Zaylina"
          maxWidth={550}
        />
      </ContentContainer>
    </>
  );
}
