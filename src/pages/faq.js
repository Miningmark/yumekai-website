import TabTitle from "@/components/elements/TabTitle";
import { Spacer, StyledLink } from "@/components/styledComponents";
import Link from "next/link";

export default function FAQ() {
  return (
    <>
      <h1>FAQ</h1>
      <p>Inhaltsverzeichnis</p>
      <ul>
        <li>
          <StyledLink href="#yumekai">YumeKai</StyledLink>
        </li>
        <li>
          <StyledLink href="#tickets">Tickets</StyledLink>
        </li>
      </ul>
      <Spacer id="yumekai" />
      <h2>YumeKai</h2>
      <TabTitle
        title="Was ist die YumeKai?"
        content={
          <p>
            <Link href={"/projects/yumekai"}>Hier</Link> findest du weitere Informationen.
          </p>
        }
      />
      <TabTitle
        title="Wann ist die YumeKai?"
        content="Die YumeKai 2025 findet vom 31.05 bis zum 01.06 in Memmingen statt."
      />
      <TabTitle
        title="Wo ist die YumeKai?"
        content="Die YumeKai 2025 wird in der Stadthalle Memmingen und im Maximilian Kolbe Haus stattfinden."
      />
      <TabTitle
        title="Infos für Eltern"
        content={
          <>
            <p>
              Die YumeKai ist eine Jugend-Veranstaltung, somit ist unser Programm jugendfrei. Unser
              Ziel ist es Jugendkultur spannend an einem Wochenende Näher zu bringen und möglichst
              viel Spaß auf die Gesichter von Klein und Groß zu zaubern. Einzelne Veranstaltungen
              sind nur für volljährige Besucher geeignet und werden auch als solche gekennzeichnet.
              Unser Secruitypersonal wird hier Alterskontrollen durchführen. Denken Sie daran, dass
              Ihr Kind einen Kinder- oder Personalausweis dabei hat, um das Alter nachzuweisen.
            </p>
            <br />
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
        }
      />
      <TabTitle
        title="Ab welchem Alter darf man die YumeKai Besuchen?"
        content="Kinder unter 14 Jahren müssen in Begleitung einer Erwachsene Begleitperson sein (Erziehungsberechtigte/r oder eine von den Erziehungsberechtigten autorisierte volljährige Person), um die YumeKai zu besuchen."
      />
      <TabTitle
        title="Essen und Trinken"
        content="Für Essen und Getränke ist gesorgt, hier werden wir noch genaueres bekannt geben."
      />
      <TabTitle
        title="Kann ich im Cosplay kommen?"
        content={
          <>
            <p>
              Ja, <StyledLink href="/waffenkostuemregeln">hier</StyledLink> findet ihr unsere
              Cosplay Regeln.
            </p>
          </>
        }
      />
      <TabTitle
        title="Helfer Werden"
        content={
          <>
            <p>
              Alle Informationen für Helfer findest du <StyledLink href="/helfer">hier</StyledLink>.
            </p>
          </>
        }
      />
      <TabTitle
        title="Wie kann ich die YumeKai unterstützen?"
        content={
          <>
            <p>
              z.b. kannst du ein YumeKai-Helfer werden, weitere Informationen findest du{" "}
              <StyledLink href="/helfer">hier</StyledLink>.
            </p>
          </>
        }
      />

      <Spacer id="tickets" />
      <h2>Tickets</h2>
      <TabTitle
        title="Wo kann ich meine Tickets kaufen?"
        content={
          <>
            <p>
              Tickets kannst du in unseren <StyledLink href="/shop">Ticketshop</StyledLink>{" "}
              erwerben.
            </p>
          </>
        }
      />
      <TabTitle
        title="Kann ich mein Ticket für übertragen?"
        content="Bis einen Tag vor veranstaltungsbeginn können die Ticketinhaber selbstständig geändert werden. Den Link dazu findet ihr in eurer Bestellbestätigung der bestellenden Person. Dabei wird ein neues digitales Ticket generiert, was dem neuen Inhaber des Tickets zur Verfügung gestellt werden muss. Wer danach ein Ticket umschreiben möchte, muss dies vor Ort an der Tageskasse anfragen und es ist nur möglich für Tickets, die noch gescannt wurden."
      />
      <TabTitle
        title="Kann ich meine Bestellung erneut einsehen?"
        content="Ja, Den Link dazu findet ihr in eurer Bestellbestätigung der bestellenden Person."
      />
      <TabTitle
        title="Sondertickets (Begleiter- / Vergünstigtes- / Familien- bzw. Kinder-Ticket)"
        content={
          <>
            <p>
              Eltern mit Kindern <strong>bis einschließlich</strong> 9 Jahre brauchen kein Ticket
              für ihren Nachwuchs. <strong>Kinder ab 10 Jahren</strong> benötigen ein Kinderticket.
              Es gibt keinen ermäßigten Eintritt für Eltern, Erziehungsberechtigte, Großeltern oder
              Verwandte. Bitte beachtet das Jugendschutzgesetz.
            </p>
          </>
        }
      />
      <TabTitle
        title="Sammlertickets"
        content="Wählt ihr dieses Zusatzprodukt beim Bestellprozess, bekommt ihr von uns euer personalisiertes Sammlerticket, das ihr nicht nur sammeln könnt, sondern auch vor Ort als Eintrittsticket nutzen könnt. Das Ticket kann vor Ort abgeholt werden oder wir können dir das Sammlerticket auch zusenden."
      />
      <TabTitle
        title="Kann ich meine Bestellung stornieren?"
        content={
          <>
            <p>
              Pläne können sich jedoch auch manchmal unvorhergesehen ändern. Das wissen auch wir.
              Daher können Ticketkäufer*innen bereits bezahlte und nicht versandte Tickets
              stornieren. Dabei behält der Veranstalter eine Bearbeitungsgebühr von{" "}
              <strong>5 Euro je Rückerstattung</strong> ein.
              <br />
              <strong>Bei weiteren Fragen zu Stornierungen wendet euch an:</strong>{" "}
              <StyledLink href="mailto:info@yumekai.de">info@yumekai.de</StyledLink>
            </p>
          </>
        }
      />
      <TabTitle
        title="Darf ich Tickets weiterverkaufen?"
        content="Die Tickets für sind personalisiert. Solltet ihr selbst nicht zur Veranstaltung kommen können, kannst du dein Ticket stornieren (s. oben) oder den Ticketinhaber selbstständig bis zum Tag vor Veranstaltungsbeginn ändern."
      />
      <TabTitle
        title="Was sind personalisierte E-Tickets?"
        content="Die Tickets für die YumeKai sind rein digital: Ihr erhaltet einen QR-Code (zum Ausdrucken oder zum Vorzeigen auf dem Smartphone) per E-Mail vor der Veranstaltung. Der Name des Ticketinhabers muss auf dem Ticket hinterlegt sein."
      />
    </>
  );
}
