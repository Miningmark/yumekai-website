import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";
import ContentCard from "@/components/elements/ContentCard";
import StyledLinkAsButton from "@/components/elements/StyledLinkAsButton";

//Images
import HiruCosplay from "/public/assets/hirus/Hiru_Cosplay.png";
import HiruSpielen from "/public/assets/hirus/Hiru_Spielen.png";
import HiruKunstler from "/public/assets/hirus/Hiru_Kunstler.png";
import HiruWorkshop from "/public/assets/hirus/Hiru_Workshop.png";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
`;

export default function Wettbewerbe() {
  return (
    <>
      <ReturnButton link="/programm2026" />

      <h1 style={{ textAlign: "center" }}>Wettbewerbe</h1>

      <ContentContainer>
        <ContentCard
          title="Cosplay Performance Wettbewerb"
          subtitle="Samstag, 09. Mai | 14:00 Uhr"
          imageSrc={HiruCosplay}
          altText="Cosplay Performance"
          text={
            <>
              <p>
                An alle Cosplayer und Performer! Zeigt was ihr draufhabt und gewinnt nicht nur
                Pokale, sondern auch tolle Preise, gesponsert von den unterschiedlichsten Händlern
                und Ausstellern sowie Partnern der YumeKai!
              </p>
              <p>
                Beim YumeKai Cosplay Performance Wettbewerb könnt ihr fantastische Auftritte und
                Performances unserer Teilnehmer bestaunen! Nicht nur haben wir eine unglaublich
                talentierte Jury, sondern auch tolle Preise. Lasst euch von unseren Cosplayern
                verzaubern und erlebt Cosplays einmal ganz anders auf der großen Bühne! Die
                Siegerehrung findet am Sonntag bei der Abschlussveranstaltung statt.
              </p>
              <p>
                <strong>Anmeldung:</strong> Am Infostand auf der YumeKai
              </p>
            </>
          }
          maxWidth={550}
        />

        <ContentCard
          title="Karavision Song Contest"
          subtitle="Samstag, 09. Mai | 17:00 Uhr"
          imageSrc={HiruWorkshop}
          altText="Karavision"
          text={
            <>
              <p>
                Wer braucht schon den ESC? Wir haben den Karavision Song Contest! Auch dieses Jahr
                wollen wir im Karaoke Raum wieder den besten Sänger der YumeKai küren. Also kommt,
                beweist euer Talent und verzückt uns mit wunderbarer Musik. Unsere unbestechliche
                Jury kürt den Besten.
              </p>
              <p>
                <strong>Maximale Teilnehmer-Anzahl:</strong> 10
                <br />
                <strong>Anmeldung:</strong> Im Karaoke-Raum
              </p>
            </>
          }
          maxWidth={550}
        />

        <ContentCard
          title="Zeichenwettbewerb"
          subtitle="Gesamtes Wochenende"
          imageSrc={HiruKunstler}
          altText="Zeichenwettbewerb"
          text={
            <p>
              Ganz gleich in welchem Stil du zeichnest, jeder ist willkommen! Deine Aufgabe ist
              einfach: Zeichne unser Maskottchen Yumeko in deiner Nationalität. Ob digital oder
              klassisch, Genderbend oder in einem völlig verrückten Stil! Unsere Jury wird eure
              Werke bewerten und die Gewinner werden am Sonntag bekannt gegeben.
            </p>
          }
          maxWidth={550}
        />

        <ContentCard
          title="One Piece Card Game Turnier"
          subtitle="Samstag, 09. Mai | 13:30 Uhr"
          imageSrc={HiruSpielen}
          altText="One Piece Turnier"
          text={
            <>
              <p>
                Setzt die Segel und stellt euch der Herausforderung! Am Samstag kämpfen bis zu 10
                Teilnehmer um den Titel des besten Piraten. Gespielt wird nach der aktuellsten
                Banliste – also bringt euer stärkstes Deck mit und zeigt, was ihr draufhabt!
                Natürlich gibt es tolle Preise für die Top 3.
              </p>
              <p>
                <strong>Anmeldung:</strong> Am Infostand auf der YumeKai
              </p>
            </>
          }
          maxWidth={550}
        />

        <ContentCard
          title="YU-GI-OH! Turnier"
          subtitle="Sonntag, 10. Mai | 13:30 Uhr"
          imageSrc={HiruSpielen}
          altText="Yu-Gi-Oh Turnier"
          text={
            <>
              <p>
                Es ist Zeit für ein D-D-D-Duell! An alle Duellanten auf der YumeKai. Turnieranmeldung
                am Infostand auf der YumeKai. Gespielt wird nach den Regeln für Local-Turnier. Das
                Deck für das Turnier muss den zum Zeitpunkt der YumeKai aktiven Banlisten
                entsprechen. Jeder Teilnehmer bekommt 2 OTS Booster.
              </p>
              <p>
                <strong>Anmeldung:</strong> Am Infostand auf der YumeKai
              </p>
            </>
          }
          maxWidth={550}
        />

        <ContentCard
          title="Cosplay Crafting Wettbewerb"
          subtitle="Sonntag, 10. Mai | 14:30 Uhr"
          imageSrc={HiruCosplay}
          altText="Cosplay Crafting"
          text={
            <>
              <p>
                Zeigt uns eure Kostüme und Crafting-Techniken! Gewinnt nicht nur Pokale, sondern
                auch tolle Preise, gesponsert von den unterschiedlichsten Händlern, Ausstellern und
                Partnern der YumeKai!
              </p>
              <p>
                Beim YumeKai Cosplay Crafting Wettbewerb könnt ihr die fantastischen Cosplays
                unserer Teilnehmer bestaunen! Lasst euch von unseren Cosplayern bei ihrem kurzen
                Catwalk über die Bühne verzaubern. Die Siegerehrung findet bei der
                Abschlussveranstaltung statt.
              </p>
              <p>
                <strong>Anmeldung:</strong> Am Infostand auf der YumeKai
              </p>
            </>
          }
          maxWidth={550}
        />

        <ContentCard
          title="Brettspiel- und Tabletopecke"
          subtitle="Samstag 9:30 – 19:00 Uhr | Sonntag 9:30 – 18:00 Uhr"
          imageSrc={HiruSpielen}
          altText="Brettspiele"
          text={
            <p>
              Am gesamten Wochenende habt ihr die Gelegenheit, am Stand der Heldenschmiede in die
              faszinierende Welt der Brettspiele einzutauchen. Der regionale Brettspielladen bringt
              eine vielfältige Auswahl an Spielen mit, von beliebten Klassikern bis hin zu
              spannenden Neuheiten. Des Weiteren wird von Squiggz ein Tabletoptisch bereitstehen,
              für alle die mal eine Runde Miniaturen-Wargaming ausprobieren wollen.
            </p>
          }
          maxWidth={550}
        />
      </ContentContainer>
    </>
  );
}
