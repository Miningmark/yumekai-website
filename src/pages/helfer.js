import TabTitle from "@/components/elements/TabTitle";
import HelferForm from "@/components/helfer/helferform";
import { StyledLink } from "@/components/styledComponents";

export default function Helfer() {
  return (
    <>
      <h1>Werde Teil des YumeKai-Teams!</h1>
      <p>
        Ohne Helfer und ehrenamtliche Teammitglieder wäre eine Convention nicht möglich. Wir freuen
        uns über alle, die die Projekte von YumeKai unterstützen möchten. Hast du Lust, Teil unseres
        Teams zu werden und gemeinsam mit uns Events auf die Beine zu stellen? Bei uns hast du die
        Möglichkeit dazu!
      </p>
      <p>
        Da wir selbst Erfahrung als Helfer auf Conventions gesammelt haben, wissen wir genau, wie es
        auf beiden Seiten aussieht. Uns ist bewusst, wie wertvoll und unverzichtbar engagierte und
        enthusiastische Helfer sind, um eine erfolgreiche Veranstaltung zu realisieren. Daher legen
        wir großen Wert auf ein starkes und harmonisches Team, in dem jeder seine Fähigkeiten und
        Leidenschaften einbringen kann.
      </p>
      <p>
        Als Teil des YumeKai-Teams wirst du die Möglichkeit haben, hinter die Kulissen einer
        Convention zu schauen, neue Menschen kennenzulernen und wertvolle Erfahrungen zu sammeln. Du
        kannst in verschiedenen Bereichen tätig sein, sei es beim Aufbau und der Dekoration, bei der
        Gästebetreuung, im Technik-Team oder bei der Organisation von Workshops und Aktivitäten.
        Dein Einsatz wird geschätzt und du wirst Teil einer einzigartigen Community, die gemeinsam
        die Faszination der Popkultur erlebt und teilt.
      </p>
      <p>
        Du hast Fragen? Schreib uns mit dem{" "}
        <StyledLink href={"/kontaktformular"}>Kontaktformular</StyledLink>.
      </p>
      <TabTitle
        title="Gibt es ein Mindestalter?"
        content={"Um uns bei der YumeKai zu unterstützen, musst du mindestens 18 Jahre alt sein."}
      />
      <TabTitle
        title="Was hat man im Team für Aufgaben?"
        content={
          "Die Aufgaben auf unseren Events sind weit gefächert. Es gibt viele Bereiche mit völlig unterschiedlichen Tätigkeiten. Zum Beispiel brauchen wir ein Team für die Einlasskontrollen, für die Betreuung von Info-Stände, Bühne und Programmablauf, Aufsichten im Bring & Buy, die Koordination der Panels und Workshops, die Betreuung der Ehrengäste und vieles mehr."
        }
      />
      <TabTitle
        title="Kann ich mir aussuchen, wo ich eingesetzt werde?"
        content={
          "Bei der Anmeldung kannst du natürlich die Wunschbereiche auswählen, beim denen du helfen möchtest. Bitte beachte aber, dass wir nicht jedem Wunsch nachkommen können und es vorkommen könnte, dass wir dich in anderen Bereichen zuteilen müssen."
        }
      />
      <TabTitle
        title="Ich unterstütze euch. Was bekomme ich dafür?"
        content={
          <>
            <p>
              Die uneingeschränkte Dankbarkeit aller Organisatoren, Teammitglieder und der Besucher
              ist dir sicher. Die YumeKai wird zum großen Teil ehrenamtlich organisiert. Dennoch
              wollen wir versuchen euch als Helfern auch etwas zurück zu geben. Auf jeden Fall
              wollen wir, dass ihr auch etwas von den Events auf denen ihr helft habt.
            </p>
            <p>Für eure Unterstützung bekommt ihr von uns:</p>
            <ul>
              <li>
                Verpflegung (je nach Veranstaltung und Tag z.B. eine Mahlzeit sowie verschiedene
                Snacks und Getränke)
              </li>
              <li>
                Ein Helfer-T-Shirt, das euch als Helfer ausweist und ihr im Anschluss behalten dürft
              </li>
              <li>Und vieles mehr</li>
            </ul>
          </>
        }
      />
      <TabTitle
        title="Mir ist etwas unklar. Wo kann ich mich melden?"
        content={
          <>
            <p>
              Für Fragen, die mit dem Team zusammen hängen, wende dich bitte mit unserem{" "}
              <StyledLink href={"/kontaktformular"}>Kontaktformular</StyledLink> an uns oder
              schreibe eine E-Mail an{" "}
              <StyledLink href={"mailto:helfer@yumekai.de"}>helfer@yumekai.de</StyledLink>
            </p>
          </>
        }
      />
      <h2>Helfer Anmeldung</h2>
      <HelferForm />
    </>
  );
}
