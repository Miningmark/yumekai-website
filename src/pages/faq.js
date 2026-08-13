import { useState } from "react";
import styled from "styled-components";
import TabTitle from "@/components/elements/TabTitle";
import { Spacer, StyledLink } from "@/components/styledComponents";
import SEO from "@/components/elements/SEO";

const Intro = styled.p`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
`;

const TocNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 24px 0 0 0;
`;

const TocLink = styled(StyledLink)`
  background-color: ${({ theme }) => theme.surfaceMuted};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: var(--radius-pill);
  padding: 8px 18px;
  font-size: 0.95rem;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor4};
    background-size: 0 2px;
  }
`;

const FAQGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

// Kategorien und Fragen zentral definiert, damit ID (fürs Accordion) und
// Inhalt an einer Stelle zusammengehören.
const categories = [
  {
    id: "yumekai",
    label: "YumeKai",
    title: "YumeKai",
    questions: [
      {
        title: "Was ist die YumeKai?",
        content: (
          <p>
            <StyledLink href={"/projects/yumekai"}>Hier</StyledLink> findest du weitere
            Informationen.
          </p>
        ),
      },
      {
        title: "Wann ist die YumeKai?",
        content: "Die YumeKai 2026 findet vom 09.05 bis zum 10.05 in Memmingen statt.",
      },
      {
        title: "Wo ist die YumeKai?",
        content:
          "Die YumeKai 2026 wird in der Stadthalle Memmingen und im Maximilian Kolbe Haus stattfinden.",
      },
      {
        title: "Wie komme ich zur YumeKai und wo kann ich parken?",
        content: (
          <>
            <p>
              Die Stadthalle Memmingen (An der Stadthalle 1, 87700 Memmingen) ist gut mit dem Auto
              und der Bahn erreichbar. Vom Bahnhof Memmingen sind es ca. 10–15 Gehminuten bis zur
              Stadthalle.
            </p>
            <p>Mit dem Auto könnt ihr u.a. in der Tiefgarage unter der Stadthalle parken.</p>
          </>
        ),
      },
      {
        title: "Kann ich das Gelände verlassen und wieder reinkommen?",
        content: "Ja, ein Wiedereintritt ist jederzeit möglich.",
      },
      {
        title: "Gibt es eine Garderobe für Taschen und Koffer?",
        content:
          "Ja, es gibt eine Garderobe, in der ihr auch Taschen und Koffer abgeben könnt. Die Aufbewahrung kostet 2€ je Teil.",
      },
      {
        title: "Darf ich meine Haustiere mitbringen?",
        content:
          "Haustiere sind bei der YumeKai leider nicht erlaubt. Eine Ausnahme bilden z.B. Assistenzhunde.",
      },
      {
        title: "Infos für Eltern",
        content: (
          <>
            <p>
              Die YumeKai ist eine Jugend-Veranstaltung, somit ist unser Programm jugendfrei.
              Unser Ziel ist es Jugendkultur spannend an einem Wochenende Näher zu bringen und
              möglichst viel Spaß auf die Gesichter von Klein und Groß zu zaubern. Einzelne
              Veranstaltungen sind nur für volljährige Besucher geeignet und werden auch als
              solche gekennzeichnet. Unser Secruitypersonal wird hier Alterskontrollen
              durchführen. Denken Sie daran, dass Ihr Kind einen Kinder- oder Personalausweis
              dabei hat, um das Alter nachzuweisen.
            </p>
            <p>
              Wenn Sie als Elternteil gerne mehr über Comic- und Manga-Conventions erfahren wollen
              und in Erfahrung bringen möchten, was ein Besuch zu so einer Veranstaltung alles
              bieten kann empfehlen wir den{" "}
              <StyledLink
                href="https://www.c-and-a.com/de/de/shop/comic-und-manga-conventions"
                target="_blank"
              >
                Artikel von C&A
              </StyledLink>{" "}
              durchzulesen.
            </p>
          </>
        ),
      },
      {
        title: "Ab welchem Alter darf man die YumeKai Besuchen?",
        content:
          "Kinder unter 14 Jahren müssen in Begleitung einer Erwachsene Begleitperson sein (Erziehungsberechtigte/r oder eine von den Erziehungsberechtigten autorisierte volljährige Person), um die YumeKai zu besuchen.",
      },
      {
        title: "Essen und Trinken",
        content: "Für Essen und Getränke ist gesorgt, hier werden wir noch genaueres bekannt geben.",
      },
      {
        title: "Kann ich im Cosplay kommen?",
        content: (
          <p>
            Ja, <StyledLink href="/waffenkostuemregeln">hier</StyledLink> findet ihr unsere
            Cosplay Regeln.
          </p>
        ),
      },
      {
        title: "Helfer Werden",
        content: (
          <p>
            Alle Informationen für Helfer findest du <StyledLink href="/helfer">hier</StyledLink>.
          </p>
        ),
      },
      {
        title: "Wie kann ich die YumeKai unterstützen?",
        content: (
          <p>
            z.b. kannst du ein YumeKai-Helfer werden, weitere Informationen findest du{" "}
            <StyledLink href="/helfer">hier</StyledLink>.
          </p>
        ),
      },
    ],
  },
  {
    id: "tickets",
    label: "Tickets",
    title: "Tickets",
    questions: [
      {
        title: "Wo kann ich meine Tickets kaufen?",
        content: (
          <p>
            Tickets kannst du in unseren <StyledLink href="/shop">Ticketshop</StyledLink> erwerben.
          </p>
        ),
      },
      {
        title: "Welche Zahlungsmethoden gibt es im Ticketshop?",
        content: "Im Ticketshop könnt ihr per Überweisung oder PayPal bezahlen.",
      },
      {
        title: "Kann ich mein Ticket übertragen?",
        content:
          "Bis einen Tag vor Veranstaltungsbeginn können die Ticketinhaber selbstständig geändert werden. Den Link dazu findet ihr in eurer Bestellbestätigung der bestellenden Person. Dabei wird ein neues digitales Ticket generiert, was dem neuen Inhaber des Tickets zur Verfügung gestellt werden muss. Wer danach ein Ticket umschreiben möchte, muss dies vor Ort an der Tageskasse anfragen und es ist nur möglich für Tickets, die noch nicht gescannt wurden.",
      },
      {
        title: "Kann ich meine Bestellung erneut einsehen?",
        content: "Ja, den Link dazu findet ihr in eurer Bestellbestätigung der bestellenden Person.",
      },
      {
        title: "Sondertickets (Begleiter- / Vergünstigtes- / Familien- bzw. Kinder-Ticket)",
        content: (
          <>
            <p>
              Eltern mit Kindern <strong>bis einschließlich</strong> 9 Jahre brauchen kein Ticket
              für ihren Nachwuchs. <strong>Kinder ab 10 Jahren</strong> benötigen ein Kinderticket.
              Bitte beachtet das Jugendschutzgesetz.
            </p>
            <p>Tickets zum ermäßigten Preis sind gültig für folgende Personengruppen:</p>
            <ul>
              <li>
                Besucher(innen) mit Schwerbehindertenausweis, mit Merkzeichen B, H, G oder aG
              </li>
              <li>
                <strong>Kinder 10–13 Jahre:</strong> Das Ticket ist nur zusammen mit einer
                volljährigen zahlenden Begleitperson gültig. Kindern unter 14 Jahren ist der
                Besuch ohne volljährige Begleitperson nicht gestattet.
              </li>
            </ul>
            <p>
              <strong>Hinweis:</strong> Kinder bis einschließlich 9 Jahre haben freien Eintritt,
              falls sie sich in Begleitung einer zahlenden volljährigen Begleitperson befinden. Es
              gibt keinen ermäßigten Eintritt für Eltern, Erziehungsberechtigte, Großeltern oder
              Verwandte.
            </p>
            <p>
              <strong>Wichtig:</strong> Wir bedauern sehr, dass der Teil der YumeKai im
              Maximilian-Kolbe-Haus nicht vollständig behindertengerecht ist. Leider bietet das
              Gebäude keine Möglichkeit, barrierefreie Zugänge zu schaffen. Dennoch sind alle
              anderen Bereiche der Veranstaltung für Besucherinnen und Besucher barrierefrei
              zugänglich.
            </p>
            <p>
              Inhaber von vergünstigten Tickets können am Einlass nach einem entsprechenden
              Nachweis gefragt werden, z.B. Behindertenausweis oder Lichtbildausweis.
            </p>
          </>
        ),
      },
      {
        title: "Sammlertickets",
        content:
          "Wählt ihr dieses Zusatzprodukt beim Bestellprozess, bekommt ihr von uns euer personalisiertes Sammlerticket, das ihr nicht nur sammeln könnt, sondern auch vor Ort als Eintrittsticket nutzen könnt. Das Ticket kann vor Ort abgeholt werden oder wir können dir das Sammlerticket auch zusenden.",
      },
      {
        title: "Kann ich meine Bestellung stornieren?",
        content: (
          <p>
            Pläne können sich jedoch auch manchmal unvorhergesehen ändern. Das wissen auch wir.
            Daher können Ticketkäufer*innen bereits bezahlte und nicht versandte Tickets
            stornieren. Dabei behält der Veranstalter eine Bearbeitungsgebühr von{" "}
            <strong>5 Euro je Rückerstattung</strong> ein.
            <br />
            <strong>Bei weiteren Fragen zu Stornierungen wendet euch an:</strong>{" "}
            <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink>
          </p>
        ),
      },
      {
        title: "Darf ich Tickets weiterverkaufen?",
        content:
          "Die Tickets sind personalisiert. Solltet ihr selbst nicht zur Veranstaltung kommen können, kannst du dein Ticket stornieren (s. oben) oder den Ticketinhaber selbstständig bis zum Tag vor Veranstaltungsbeginn ändern.",
      },
      {
        title: "Was sind personalisierte E-Tickets?",
        content:
          "Die Tickets für die YumeKai sind rein digital: Ihr erhaltet einen QR-Code (zum Ausdrucken oder zum Vorzeigen auf dem Smartphone) per E-Mail vor der Veranstaltung. Der Name des Ticketinhabers muss auf dem Ticket hinterlegt sein.",
      },
    ],
  },
];

export default function FAQ() {
  // Global über die ganze Seite: es ist immer nur ein Punkt gleichzeitig offen.
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <>
      <SEO
        title="FAQ"
        description="Häufig gestellte Fragen zur YumeKai: Termin, Ort, Tickets, Altersgrenzen und mehr auf einen Blick."
        path="/faq"
      />
      <h1>FAQ</h1>
      <Intro>
        Hier findest du Antworten auf die häufigsten Fragen rund um die YumeKai und unsere
        Tickets. Ist deine Frage nicht dabei? Dann schreib uns gerne über unser{" "}
        <StyledLink href="/kontaktformular">Kontaktformular</StyledLink>.
      </Intro>
      <TocNav aria-label="Inhaltsverzeichnis">
        {categories.map((category) => (
          <TocLink key={category.id} href={`#${category.id}`}>
            {category.label}
          </TocLink>
        ))}
      </TocNav>

      {categories.map((category) => (
        <div key={category.id}>
          <Spacer id={category.id} />
          <h2>{category.title}</h2>
          <FAQGroup>
            {category.questions.map((question, index) => {
              const questionId = `${category.id}-${index}`;
              return (
                <TabTitle
                  key={questionId}
                  id={questionId}
                  title={question.title}
                  content={question.content}
                  isOpen={openId === questionId}
                  onToggle={handleToggle}
                />
              );
            })}
          </FAQGroup>
        </div>
      ))}
    </>
  );
}
