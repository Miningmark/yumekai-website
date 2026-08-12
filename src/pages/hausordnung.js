import ConvexBackground from "@/components/elements/ConvexBackground";
import { SpacerEmpty, StyledLink } from "@/components/styledComponents";
import SEO from "@/components/elements/SEO";

export default function Hausordnung() {
  return (
    <>
      <SEO
        title="Hausordnung"
        description="Die Hausordnung der YumeKai: Regeln zu Sicherheit, Verhalten und Ausweispflicht während der Veranstaltung."
        path="/hausordnung"
      />
      <p>
        Um sicherzustellen, dass jeder Besucher ein unvergessliches Erlebnis genießt, bitten wir
        euch, unsere Hausordnung zu beachten. Diese Richtlinien dienen der Sicherheit, dem Komfort
        und dem respektvollen Miteinander aller Teilnehmer. Vielen Dank!
      </p>
      <SpacerEmpty />
      <ConvexBackground color={1}>
        <h2>Hausordnung YumeKai</h2>
        <ul>
          <li>
            In der gesamten Messehalle ist der Konsum von Drogen und Alkohol strengstens untersagt.
            Ein Verstoß gegen diese Regel kann zur sofortigen Ausschluss von der Veranstaltung
            führen. Der Eintritt wird berauschten Personen verwehrt.
          </li>
          <li>
            Während der Veranstaltung gilt die{" "}
            <StyledLink
              href={
                "https://www.memmingen.de/fileadmin/Allgemeine_Dateiverwaltung/Bereich_Amt1.1_Veranstaltungsstaetten/Stadthalle/Haus-_und_Benutzungsordnung_SH_30_11_22.pdf"
              }
              target="_blank"
            >
              Hausordnung der Stadthalle Memmingen
            </StyledLink>{" "}
            in der gesamten Messehalle. Die Waffenregeln gelten sowohl für die Halle als auch für
            den Park und den Vorplatz.
          </li>
          <li>
            Kinder unter 14 Jahren dürfen die Veranstaltung nur in Begleitung eines erwachsenen
            Erziehungsberechtigten besuchen.
          </li>
          <li>
            Während der YumeKai besteht durchgehend Ausweispflicht. Das bedeutet, dass ein gültiger
            Altersnachweis stets mitgeführt werden muss. (Nur offizielle Dokumente wie
            Personalausweis, Führerschein oder Reisepass werden akzeptiert.)
          </li>
          <li>
            Das Rauchen in der Messehalle ist nicht gestattet, ebenso wie offenes Feuer auf dem
            gesamten Gelände.
          </li>
          <li>
            Wir bitten darum, sich außerhalb des Geländes (im Park, in der Innenstadt, etc.)
            angemessen zu verhalten. Beachtet, dass die Veranstaltung in der Innenstadt stattfindet
            und dort Anwohner leben. Bitte betretet keine Privatgrundstücke.
          </li>
          <li>
            Das Mitbringen von Essen oder Softdrinks in die Messehalle ist nicht erlaubt.
            Mittbringen von Wasser ist jedoch ausdrücklich gestattet (Bitte trinkt genug). Getränke
            und Speisen können in der Umgebung und in der Messehalle erworben werden.
          </li>
          <li>Drohnenflüge sind auf dem Gelände nicht gestattet.</li>
          <li>
            In der Messehalle ist jede Art des Showkampfes verboten. Ausnahmen sind
            Cosplay-Wettbewerbe oder ähnliche Veranstaltungen.
          </li>
          <li>
            Im Veranstaltungsbereich bitten wir darum, keinen Müll liegen zu lassen. Bitte entsorgt
            euren Müll in den dafür vorgesehenen Mülleimern.
          </li>
          <li>
            Lebende Tiere sind in der Messehalle unerwünscht, es sei denn, es handelt sich um
            Assistenztiere.
          </li>
          <li>Das Verkaufen von Waren ist ohne Genehmigung der Organisatoren nicht gestattet. </li>
        </ul>
      </ConvexBackground>
    </>
  );
}
