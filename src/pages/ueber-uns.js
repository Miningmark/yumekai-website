import Image from "next/image";

//Components
import Columns3 from "@/components/elements/Columns3";
import FlippingCard from "@/components/elements/FlippingCard";

//Images
import markusImage from "/public/assets/images/personen/gruender-3.jpg";
import yannickImage from "/public/assets/images/personen/gruender-2.jpg";
import alexImage from "/public/assets/images/personen/gruender-1.jpg";
import SEO from "@/components/elements/SEO";

export default function AboutUS() {
  return (
    <>
      <SEO
        title="Über uns"
        description="Die Dreamfly-Events UG: Wer hinter der YumeKai steht und wofür wir stehen."
        path="/ueber-uns"
      />
      <h1>Dreamfly-Events UG</h1>
      <p>
        Die Dreamfly-Events UG konzipiert, plant und führt öffentliche Veranstaltungen durch, die
        sich vor allem mit der (Populär-)Kultur Japans und Asiens beschäftigen. Gleichzeitig ist uns
        aber auch die westliche Populärkultur wichtig. <br />
        Unser Ziel ist es, auf unseren Veranstaltungen die Popkultur und klassische Kultur aus Japan
        und Asien für alle zugänglich zu machen. Wir möchten die Kunst und Kultur Asiens anschaulich
        und erlebbar für Jung und Alt präsentieren. Durch Informationsveranstaltungen,
        Diskussionsmöglichkeiten, Workshops und mehr möchten wir die Vielfalt dieser Kulturen nach
        Süddeutschland bringen. <br />
        Mit unseren Veranstaltungen möchten wir die japanische und asiatische Kultur fördern und
        Interessierten näherbringen. Besonderes Augenmerk legen wir dabei auf die japanische
        Popkultur wie Cosplay und Musik, sowie auf die japanische Zeichen- und Animationskunst. Wir
        wollen die Völkerverständigung durch die Vermittlung einer anderen Kultur fördern und somit
        Begegnungen zwischen Menschen unterschiedlicher Kulturen ermöglichen. <br />
        Der Gedanke hinter der Dreamfly-Events UG ist es, unseren Traum von mehr Conventions und
        Veranstaltungen rund um die japanische und asiatische Kultur zu verwirklichen. Wir glauben
        daran, dass solche Events die Möglichkeit bieten, Menschen zusammenzubringen, Wissen zu
        teilen, neue Erfahrungen zu machen und eine Brücke zwischen den Kulturen zu schlagen. <br />
        Die Dreamfly-Events UG besteht aus drei Gründern bzw. Veranstaltern, die bereits im privaten
        Bereich umfangreiche organisatorische Erfahrungen gesammelt haben.
      </p>
      <Columns3
        left={
          <>
            <FlippingCard
              frontColor={"#363636"}
              textColor={"#ffb01e"}
              backColor={"#2B2B2B"}
              cardHeight={600}
              frontContent={
                <>
                  <h2 style={{ fontSize: "1.7rem" }}>Yannick Schesser</h2>
                  <p>PR Manager / CEO</p>
                  <p>
                    Yannick Schesser, ist der PR-Manager und CEO der Dreamfly-Events UG. Mit
                    langjähriger Erfahrung bei der Organisation von Conventions verfügt er über ein
                    breites Netzwerk in der Szene. In seiner Rolle als PR-Manager kümmert er sich um
                    die Öffentlichkeitsarbeit der Dreamfly-Events UG. Er sorgt dafür, dass die
                    Veranstaltungen bekannt werden und steht in engem Kontakt mit Ausstellern,
                    Pressevertretern und anderen Personen.
                  </p>
                </>
              }
              backContent={
                <>
                  <Image
                    src={yannickImage}
                    alt="Gründer Yannick"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </>
              }
            />
          </>
        }
        center={
          <>
            <FlippingCard
              frontColor={"#363636"}
              textColor={"#ffb01e"}
              backColor={"#2B2B2B"}
              cardHeight={600}
              frontContent={
                <>
                  <h2 style={{ fontSize: "1.7rem" }}>Markus Sibbe</h2>
                  <p>Systemadministrator / CEO</p>
                  <p>
                    Markus Sibbe ist der Systemadministrator und ebenfalls CEO der Dreamfly-Events
                    UG. Mit seinem Fachwissen in der Systemadministration kümmert er sich um die
                    technische Infrastruktur des Unternehmens. Er stellt sicher, dass alle
                    Geschäftsprozesse reibungslos ablaufen und die Online-Auftritte optimal
                    funktionieren. Markus trägt dazu bei, dass die internen Abläufe effizient
                    gestaltet sind und unterstützt das Team bei technischen Herausforderungen.
                  </p>
                </>
              }
              backContent={
                <>
                  <Image
                    src={markusImage}
                    alt="Gründer Markus"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </>
              }
            />
          </>
        }
        right={
          <>
            <FlippingCard
              frontColor={"#363636"}
              textColor={"#ffb01e"}
              backColor={"#2B2B2B"}
              cardHeight={600}
              frontContent={
                <>
                  <h2 style={{ fontSize: "1.7rem" }}>Alexander Hafner</h2>
                  <p>Accountant / CEO</p>
                  <p>
                    Alexander Hafner hat bereits im privaten Bereich Erfahrungen in der Organisation
                    von Veranstaltungen gesammelt. Bei der Dreamfly-Events UG ist er für die
                    Finanzen zuständig. Als Accountant stellt er sicher, dass alle finanziellen
                    Angelegenheiten der Firma ordnungsgemäß verwaltet werden. Er sorgt für eine
                    genaue Buchführung und stellt sicher, dass alle Zahlungen und Ausgaben im
                    Einklang mit den finanziellen Zielen und Vorgaben der Dreamfly-Events UG stehen.
                  </p>
                </>
              }
              backContent={
                <>
                  <Image
                    src={alexImage}
                    alt="Gründer Alexander"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </>
              }
            />
          </>
        }
      />
    </>
  );
}
