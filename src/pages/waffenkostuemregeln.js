import TabCard from "@/components/elements/TabCard";
import { SpacerEmpty, BoldText, StyledLink } from "@/components/styledComponents";
import YumeKaiRules from "@/components/waffenkostuemregelnComponents/Yumekai-rules";
import YumeKaiNightRules from "@/components/waffenkostuemregelnComponents/Yumekai-night-rules";

export default function Waffenkostuemregeln() {
  return (
    <>
      <h1>Regeln für Cosplay und Cosplay-Waffen</h1>
      <BoldText>Cosplay-Regeln</BoldText>
      <p>
        Warum benötigen wir Cosplay- und Waffenregeln? Viele Cosplayer können nicht ohne die
        Nachbildung von Waffen, Requisiten oder anderen „Props“ auskommen. Oft stecken in diesen
        Gegenständen viel Detailarbeit und Liebe, sei es, um das Erscheinungsbild noch
        beeindruckender zu gestalten oder weil sie das charakteristische Merkmal der Figur sind. Ein
        Ritter ohne sein Schwert wäre einfach nicht dasselbe, und was wäre Darth Vader ohne sein
        Lichtschwert? Diese Regeln sind nicht dazu da, um jemanden zu ärgern. Wir müssen die Gesetze
        der Bundesrepublik Deutschland und die Anweisungen des Ordnungsamtes in Memmingen befolgen.
        Daraus ergeben sich die Regeln für die YumeKai. Wir sind sicher, dass niemand mit seinem in
        Liebe hergestellte Cosplay absichtlich Gefahrensituationen erzeugen will. Dennoch könnte es
        zu Unfällen kommen, daher müssen wir bestimmte Vorsichtsmaßnahmen treffen.
      </p>
      <BoldText>
        HINWEIS: Unsere Helfer in der Halle haben immer das letzte Wort. Es kann vorkommen, dass
        etwas übersehen wurde, und daher können Entscheidungen des Waffen-Checks rückgängig gemacht
        werden.
      </BoldText>
      <p>
        Um Diskussionen am Waffencheck vorzubeugen, halten sich unsere Helfer*innen genau an die
        Vorgaben bezüglich der Waffenlänge. Unabhängig davon, ob es sich um 1 cm oder 10 cm
        Überlänge handelt - Ausnahmen werden keine gemacht. Außerdem kann es vorkommen, dass
        ähnliche Waffen, wie z. B. Lichtschwerter, im Einzelfall unterschiedlich beurteilt werden
        (Nicht was die Länge angeht). Diese Entscheidungen erfolgen hauptsächlich aus
        Sicherheitsgründen wegen z. B. scharfen Kanten oder ähnlichem.
      </p>
      <p>
        Solltet du dir nicht sicher sein ob deine Waffe erlaubt ist oder verboten, schreib und bitte
        eine E-Mail an <StyledLink href="mailto:Info@Yumekai.de">Info@Yumekai.de</StyledLink> oder
        verwende das Kontaktformular auf unserer Website.
      </p>
      <SpacerEmpty />
      <TabCard
        tabs={[
          {
            title: "YumeKai",
            content: <YumeKaiRules />,
          },
        ]}

        /* 
            title: "YumeKai - Night",
            content: <YumeKaiNightRules />,
          */
      />
    </>
  );
}
