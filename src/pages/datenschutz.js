import styled from "styled-components";
import Link from "next/link";

const DatenschutzWrapper = styled.div`
  width: 100%;
  h2,
  h3 {
    margin: 25px 0 10px 0;
  }

  p {
    margin: 5px 0;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.7rem;
    }

    h2 {
      font-size: 1.4rem;
    }
  }
`;

export default function Datenschutz() {
  return (
    <DatenschutzWrapper>
      <h1>Datenschutzerklärung</h1>

      <h2>Allgemeiner Hinweis und Pflichtinformationen</h2>
      <p>Benennung der verantwortlichen Stelle</p>
      <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
      <p>
        Dreamfly-Events UG (Haftungsbeschränkt)
        <br />
        Markus Sibbe
        <br />
        Talbergstraße 7a
        <br />
        87779 Trunkelsberg
      </p>
      <p>
        Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und
        Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
      </p>

      <h2>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>
      <p>
        Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung
        möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den
        Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf
        erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
      </p>

      <h2>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h2>
      <p>
        Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein
        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde
        bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des
        Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet.
      </p>

      <h2>Recht auf Datenübertragbarkeit</h2>
      <p>
        Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
        eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die
        Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung
        der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
        machbar ist.
      </p>

      <h2>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</h2>
      <p>
        Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf
        unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten,
        deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung,
        Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema
        personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten
        Kontaktmöglichkeiten an uns wenden.
      </p>

      <h2>SSL- bzw. TLS-Verschlüsselung</h2>
      <p>
        Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns
        als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit
        sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen
        eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am
        Schloss-Symbol in der Browserzeile.
      </p>

      <h2>Server-Log-Dateien</h2>
      <p>
        In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch
        Informationen, die Ihr Browser automatisch an uns übermittelt. Dies sind:
      </p>
      <ul>
        <li>Besuchte Seite auf unserer Domain</li>
        <li>Datum und Uhrzeit der Serveranfrage</li>
        <li>Browsertyp und Browserversion</li>
        <li>Verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>IP-Adresse</li>
      </ul>
      <p>
        Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der
        Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur
        Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
      </p>

      <h2>Hosting</h2>
      <p>
        Diese Website wird bei einem externen Dienstleister gehostet, der Hetzner Online GmbH.
        Personenbezogene Daten, die auf dieser Website erfasst werden, werden auf den Servern des
        Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und
        Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige
        Daten, die über eine Website generiert werden, handeln.
      </p>
      <p>
        Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
        potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer
        sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen
        professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
      </p>
      <p>
        Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
        Leistungspflichten erforderlich ist.
      </p>
      <p>
        Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben wir einen Vertrag über
        Auftragsverarbeitung mit unserem Hoster geschlossen.
      </p>

      <h2>Kontaktformular</h2>
      <p>
        Per Kontaktformular übermittelte Daten werden einschließlich Ihrer Kontaktdaten gespeichert,
        um Ihre Anfrage bearbeiten zu können oder um für Anschlussfragen bereitzustehen. Eine
        Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.
      </p>
      <p>
        Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich auf
        Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits
        erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose
        Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
        Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
      </p>
      <p>
        Über das Kontaktformular übermittelte Daten verbleiben bei uns, bis Sie uns zur Löschung
        auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der
        Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen – insbesondere
        Aufbewahrungsfristen – bleiben unberührt.
      </p>

      <h2>Newsletter-Daten</h2>
      <p>
        Zum Versenden unseres Newsletters benötigen wir von Ihnen eine E-Mail-Adresse. Eine
        Verifizierung der angegebenen E-Mail-Adresse ist notwendig und der Empfang des Newsletters
        ist einzuwilligen. Ergänzende Daten werden nicht erhoben oder sind freiwillig. Die
        Verwendung der Daten erfolgt ausschließlich für den Versand des Newsletters.
      </p>
      <p>
        Die bei der Newsletteranmeldung gemachten Daten werden ausschließlich auf Grundlage Ihrer
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) verarbeitet. Ein Widerruf Ihrer bereits erteilten
        Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per
        E-Mail oder Sie melden sich über den „Austragen“-Link im Newsletter ab. Die Rechtmäßigkeit
        der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
      </p>
      <p>
        Zur Einrichtung des Abonnements eingegebene Daten werden im Falle der Abmeldung gelöscht.
        Sollten diese Daten für andere Zwecke und an anderer Stelle an uns übermittelt worden sein,
        verbleiben diese weiterhin bei uns.
      </p>

      <h2>Cookies</h2>
      <p>
        Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem
        Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver
        und sicherer zu machen.
      </p>
      <p>
        Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende Ihrer Browser-Sitzung
        von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät bestehen, bis Sie
        diese selbst löschen. Solche Cookies helfen uns, Sie bei Rückkehr auf unserer Website
        wiederzuerkennen.
      </p>
      <p>
        Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken
        oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem
        Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann eine
        eingeschränkte Funktionalität unserer Website zur Folge haben.
      </p>
      <p>
        Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der
        Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig sind,
        erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir
        ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und
        reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. für
        Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerklärung separat behandelt.
      </p>

      <h2>Local Storage</h2>
      <p>
        Wir verwenden LocalStorage, um Ihre Einstellungen, wie z. B. Ihre bevorzugte Sprache oder
        das Design der Webseite, zu speichern. Diese Daten werden nur auf Ihrem Gerät gespeichert
        und nicht an unseren Server gesendet. Die Daten bleiben so lange gespeichert, bis Sie sie
        selbst löschen oder der Browser die Daten entfernt. Sie können diese Informationen jederzeit
        über die Browsereinstellungen löschen oder in den lokalen Speicher-Einstellungen Ihres
        Browsers verwalten.
      </p>
    </DatenschutzWrapper>
  );
}
