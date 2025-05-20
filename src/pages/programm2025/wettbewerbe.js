import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";
import ContentCard from "@/components/elements/ContentCard";

//Images
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch; // wichtig: sorgt dafür, dass Cards gleich hoch werden
  gap: 30px;
`;

export default function Wettbewerbe() {
  return (
    <>
      <ReturnButton link="/programm2025" />

      <h1 style={{ textAlign: "center" }}>Wettbewerbe</h1>

      <ContentContainer>
        <ContentCard
          title="Cosplay Performance Wettbewerb"
          text={
            <>
              <p>
                An alle Cosplayer, Performer und Kreativen! Zeigt was ihr draufhabt und gewinnt
                nicht nur Pokale, sondern auch tolle Preise, gesponsort von den unterschiedlichsten
                Händlern und Ausstellern, sowie Partnern der YumeKai!
              </p>
              <StyledLinkAsButton
                href="/registration/registrationCosplayPerformance"
                target="_blank"
              >
                Anmeldung
              </StyledLinkAsButton>
            </>
          }
        />

        <ContentCard
          title="Cosplay Crafting Wettbewerb"
          text={
            <>
              <p>
                Zeigt uns eure Kostüme und gewinnt nicht nur Pokale, sondern auch tolle Preise!
                Gesponsert von den unterschiedlichsten Händlern, Ausstellern und Partnern der
                YumeKai!
              </p>
              <StyledLinkAsButton href="/registration/registrationCosplayCatwalk" target="_blank">
                Anmeldung
              </StyledLinkAsButton>
            </>
          }
        />

        <ContentCard
          title="Karavision Song Contest"
          text={
            <p>
              Hier wollen wir das beste Talent finden und ein wahres Musikfestival feiern. Deshalb
              kommt zum Karaoke-Raum und messt euch in unserem Musikwettstreit. Lasst euch bewerten
              von unserer sicher unbestechlichen Jury.
              <br />
              <br /> Teilnehmer-Anzahl: Maximal 10
              <br /> Anmeldung: im Karaoke-Raum.
            </p>
          }
        />

        <ContentCard
          title="Magic: The Gathering Draft Turnier"
          text={
            <p>
              Es wird zeit für magische Schlachten bei unseren Magic: The Gathering Drafts!
              Turnieranmeldung am Stand der Heldenschmiede oder am Infostand der YumeKai. Es gibt
              jeden Tag ein Booster-Draft Turnier.
              <br />
              <br />
              Anmeldung: Vor Ort am Stand der Heldenschmiede
              <br />
              Teilnahmegebühren: 16€
              <br />
              Gewinn: Booster für die Top 3<br />
              Start: 31. Mai & 01. Juni jewils um 13 Uhr
            </p>
          }
        />

        <ContentCard
          title="One Piece Card Game Turnier"
          text={
            <p>
              Setzt die Segel und stellt euch der Herausforderung! Am Samstag kämpfen bis zu 10
              Teilnehmer um den Titel des besten Piraten. Gespielt wird nach der aktuellsten
              Banliste - also bringt euer stärkstes Deck mit und zeigt, was ihr draufhabt! Natürlich
              gibt es tolle Preise für die Top 3. Also schnappt euch eure Karten und macht euch
              bereit für ein episches Duell!
              <br />
              <br />
              Anmeldung: Vor Ort am Stand von Squiggz
              <br />
              Start: 31.Mai um 14 Uhr
            </p>
          }
        />

        <ContentCard
          title="YU-GI-OH! - Turnier"
          text={
            <p>
              Es ist Zeit für ein D-D-D-Duell! An alle Duellanten auf der YumeKai. Gespielt wird
              nach den Regeln für Local-Turnier. Das Deck für das Turnier muss den zum Zeitpunkt der
              YumeKai aktiven Banlisten entsprechen. Jeder Teil- nehmer bekommt 2 OTS Booster.
              <br />
              <br />
              Anmeldung: Vor Ort am Stand von Squiggz
              <br />
              Start: 1. Juni um 14 Uhr
            </p>
          }
        />

        <ContentCard
          title="Francesco Bike Race 8 - Turnier"
          text={
            <p>
              Bereit für den ultimativen Rennspaß? In diesem actiongeladenen Rennspiel erwarten dich
              kurvenreiche Strecken, überraschende Hindernisse, spannende Duelle und sicherlich der
              ein oder an- dere Schildkrötenpanzer. Ob du nun ein erfahrener Fahrer oder ein Neuling
              bist, zeig Allen auf der YumeKai deine Skills auf der Rennstrecke! Den Besten winken
              solide Preise.
              <br />
              <br />
              Modus: Gruppenrennen & Punktesystem
              <br />
              Teilnehmerzahl: Maximal 32
              <br />
              Anmeldung: Vor Ort am Infostand
              <br />
              Start: 31. Mai um 12 Uh
            </p>
          }
        />

        <ContentCard
          title="Dragon Ball FighterZ - Turnier"
          text={
            <p>
              Bereit für explosive Kämpfe und atem- beraubende Kombos? Ist dein Power- level über
              9000? Auf der YumeKai 2025 erwartet dich ein Turnier im beliebten Anime-Fighting-Game,
              das sowohl Einsteiger als auch erfahrene Spieler he- rausfordert. Messe dich mit den
              anderen und demonstriere dein überlegenes Ki für erstklassige Preise!
              <br />
              <br />
              Teilnehmerzahl: Maximal 16
              <br />
              Anmeldung am Infostand
              <br />
              Modus: 1 vs. 1<br />
              Start: 1. Juni um 11 Uhr
            </p>
          }
        />

         <ContentCard
          title="Zeichenwettbewerb"
          text={
            <p>
              Hey, du hast diese unglaubliche Kreativität in dir? Perfekt!
            <br />
            <br />
            Wie wäre es, wenn du unser süßes Maskottchen Hiru in deinem ganz eigenen Stil zum Leben
            erweckst? Lass deiner Fantasie freien Lauf! Ob du Hiru als Genderbend darstellst, in
            alternativen Stilen experimentierst oder in einem völlig anderen Genre platzierst –
            alles ist erlaubt, solange Hiru immer noch erkennbar ist. 🎨✨
            <br />
            <br />
            Es wird einen Jury-Favoriten geben, welcher unter anderem einen Pokal erhält! Außerdem
            wird es für jede Kategorie einen Gewinner geben. (Jedes Bild kann nur in einer Kategorie
            gewinnen.)
            <br />
            <br />
            Folgende Kategorien gibt es:
            <br />
            ⭐ Beste Technik
            <br />
            ⭐ Kreativste Idee
            <br />
            ⭐ Qualität des Gesamtbilds
            <br />
            Anmeldung bis zum 17.05.2025
            </p>
          }
        />
      </ContentContainer>
    </>
  );
}
