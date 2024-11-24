//Imports

//Components
import { StyledLink } from "../styledComponents";

export default function YumeKaiNightRules() {
  return (
    <>
      <h2>Erlaubte Waffen</h2>

      <p>
        Erlaubte Waffen sind Gegenstände, die auf der gesamten Veranstaltung getragen werden dürfen.
        Dennoch gilt auch hier, ein umsichtiger Umgang. Zu den erlaubten Waffen gehören
        beispielsweise:
      </p>
      <ul>
        <li>
          LARP-Waffen („Live Action Role Play“) aus Latex oder Schaumstoff mit Stabilisierungskern
          (Maximallänge 1,10 Meter)
        </li>
        <li>Waffen und Stäbe aus Pappe, Plastik oder weichen Materialien bis 1,10 Meter</li>
        <li>Bögen (Ungespannt) und Köcher ohne Pfeile (Bögen maximal 1,30 Meter)</li>
        <li>Waffenimitationen aus Schaumstoff, Gummi, Pappe, Plastik, weichen Materialien</li>
        <li>Paddel</li>
        <li>Gerten bis maximal 1,10 Meter</li>
        <li>Schilder mit einer Maximalgröße von 1,10 m</li>
        <li>
          Schwerter aus mindestens 75 Prozent Plastik oder Weichmaterial mit einer Maximallänge von
          1,10 Meter
        </li>
      </ul>

      <h2>Verbotene Waffen</h2>

      <p>
        Verbotene Waffen sind auf der Veranstaltung nicht gestattet. Gemäß dem Waffengesetz (WaffG)
        werden Waffen, die als illegal eingestuft sind, konfisziert, was zu einem Hausverbot und dem
        Entzug des Tickets führt. Dabei spielt es keine Rolle, ob der Besitzer im Besitz einer
        Waffenbesitzkarte (Waffenschein) ist. Zudem sind wir verpflichtet, die Polizei über Verstöße
        gegen das WaffG zu informieren. Auf der YumeKai-Night ist es etwas enger, daher bitten wir
        darum, die für diesen Ort angepassten Waffenregeln zu respektieren. Vielen Dank. Zu den
        verbotenen Waffen gehören unter anderem:
      </p>
      <ul>
        <li>
          Echte Schusswaffen, scharfe Munition, Gas- und Softairpistolen (mit oder ohne Munition)
        </li>
        <li>Pfeile aus Metall</li>
        <li>Wurfwaffen aus Metall (z. B. Kunai, Wurfsterne, Wurfäxte, Wurfmesser)</li>
        <li>Totschläger, Stahlruten, metallene Baseballschläger, Schlagringe</li>
        <li>Explosive oder pyrotechnische Gegenstände (Knallkörper, Granaten, Feuerwerkskörper)</li>
        <li>
          Hieb- und Stichwaffen aus Metall, unabhängig von scharfer oder stumpfer Klinge oder Spitze
          (z. B. Schwerter, Macheten, Beile, Morgensterne, Piken, Messer, ausgenommen Taschenmesser)
        </li>
        <li>Würgewaffen (z. B. Nunchakus)</li>
        <li>
          sogenannte Anscheinswaffen nach dem WaffG, Schusswaffen, die für echte Waffen gehalten
          werden können (Sonderfälle: Die Waffe ist 50% größer oder kleiner als das Original oder
          sie ist deutlich mit Neonfarben gekennzeichnet, maximale Größe 60 cm)
        </li>
        <li>Gespannte Bögen</li>
        <li>Stäbe, Schwerter, Peitschen und Gerten über 1,10 m Länge, unabhängig vom Material</li>
      </ul>

      <h2>Kleidungsaccessoires</h2>

      <p>
        Auch bei Kleidung und Cosplays gibt es einige Regeln, die wir festlegen müssen. Unsere
        Absicht ist nicht, jemanden zu ärgern oder bestimmte Cosplays zu verbieten. Dennoch müssen
        aus Sicherheitsgründen und zur Gewährleistung von Fluchtwegen und Durchgangsmöglichkeiten
        bestimmte Vorschriften eingehalten werden. Zu den Kleidungsaccessoires gehören
        beispielsweise:
      </p>
      <ul>
        <li>Stacheln an Schmuck wie Halsbändern dürfen nicht länger als 5 cm sein</li>
        <li>Metallketten müssen zur Kleidung gehören und dürfen nicht leicht abnehmbar sein</li>
        <li>Kleidung und Rüstung sollten keine scharfen Kanten oder Ecken aufweisen</li>
        <li>Flügel dürfen eine maximale Spannweite von 1,10 Meter haben</li>
        <li>Teufelshörner dürfen maximal 30 Zentimeter lang sein</li>
      </ul>

      <strong>
        Generell gelten die Bestimmungen des Waffengesetzes der Bundesrepublik Deutschland und die
        darin enthaltenen Einzelvorschriften. Eine vollständige Liste ist auf folgender Website
        einsehbar:{" "}
      </strong>
      <StyledLink
        href={"https://www.gesetze-im-internet.de/waffg_2002/anlage_2.html"}
        target="_blank"
      >
        https://www.gesetze-im-internet.de/waffg_2002/anlage_2.html
      </StyledLink>
    </>
  );
}
