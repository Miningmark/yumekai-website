import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";
import ContentCard from "@/components/elements/ContentCard";

//Images
import HiruWorkshop from "/public/assets/hirus/Hiru_Workshop.png";
import HiruKunstler from "/public/assets/hirus/Hiru_Kunstler.png";
import HiruCosplay from "/public/assets/hirus/Hiru_Cosplay.png";
import HiruSpielen from "/public/assets/hirus/Hiru_Spielen.png";
import YunuyeiBild from "/public/assets/images/yumekai2026/Yunuyei.png";
import NevadaBild from "/public/assets/images/yumekai2026/Nevada.png";
import AkunyaahWorkshopBild from "/public/assets/images/yumekai2026/Akunyaah Workshop.png";
import KermiWorkshopBild from "/public/assets/images/yumekai2026/Kermi Workshop.jpg";
import WolfusWorkshopBild from "/public/assets/images/yumekai2026/Wolfus Workshop.png";
import EraliaWorkshopBild from "/public/assets/images/yumekai2026/Eralia Workshop.png";
import HokushinWorkshopBild from "/public/assets/images/yumekai2026/Hokushin Ittō-ryū Hyōhō.png";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
`;

export default function Workshops() {
  return (
    <>
      <ReturnButton link="/programm2026" />

      <h1 style={{ textAlign: "center" }}>Workshops</h1>

      <h2 style={{ textAlign: "center" }}>Samstag</h2>
      <ContentContainer>
        <ContentCard
          title="Tanzkurs – Ballvorbereitung"
          subtitle="11:00 Uhr | Raum 2"
          imageSrc={HiruWorkshop}
          altText="Workshop Hiru"
          text={
            <p>
              Wenn ihr an diesem Abend ganz besonders stilsicher über das Parkett schweben wollt,
              dann sind unsere Tanzkurse die ideale Vorbereitung. Wir zeigen euch die ersten
              Schritte, setzen euch auf dem Parkett in Szene und halten auch für Kenner noch den
              letzten Feinschliff parat. Von Cha-Cha-Cha bis Walzer, Salsa bis Discofox führen wir
              euch durch die Tänze des Balls. Vielleicht findet hier sogar das ein oder andere
              Tanzpaar zusammen.
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Stellaria: Japanische Idol-Kultur – Cheering und Fanchants"
          subtitle="12:05 Uhr | Raum 1"
          imageSrc={HiruWorkshop}
          altText="Workshop Hiru"
          text={
            <p>
              Entdeckt die Welt der japanischen Idolkultur mit Stellaria! In ihrem interaktiven
              Workshop taucht ihr ein in die Kunst des Cheerings mit Penlights und UO&apos;s.
              Gemeinsam mit den Tänzern übt ihr Cheering und Wotagei zu beliebten Songs und erlebt,
              wie viel Spaß es macht, aktiv mitzumachen! Später könnt ihr das Gelernte direkt bei
              den Showacts der Convention umsetzen und die YumeKai richtig aufheizen!
            </p>
          }
          instaLink="https://www.instagram.com/stellaria.idols/"
          instaLinkText="Stellaria"
          maxWidth={500}
        />

        <ContentCard
          title="Yunuyei: Kreativ Selbstständig – Chancen, Herausforderungen und Risiken"
          subtitle="13:10 Uhr | Raum 1"
          imageSrc={YunuyeiBild}
          altText="Workshop Hiru"
          imageMaxHeight="200px"
          text={
            <p>
              Du bist kreativ und träumst davon, deine Leidenschaft zum Beruf zu machen? Dann ist
              dieser Vortrag genau das Richtige für dich! Hier erfährst du, was du unbedingt wissen
              solltest, bevor du den Schritt in die Selbstständigkeit wagst. Welche Vorteile bringt
              das Leben als eigener Chef mit sich? Welche Herausforderungen erwarten dich, und was
              sind die weniger sichtbaren Schattenseiten? Du erhältst wertvolle Tipps, um fundierte
              Entscheidungen zu treffen – und erfährst, wann der richtige Zeitpunkt für den Start
              ist.
            </p>
          }
          instaLink="https://www.instagram.com/yunuyei/"
          instaLinkText="Yunuyei"
          maxWidth={500}
        />

        <ContentCard
          title="Nevada: Waffen gegen den Art Block!"
          subtitle="14:20 Uhr | Raum 1"
          imageSrc={NevadaBild}
          altText="Workshop Hiru"
          text={
            <p>
              Jeder der kreativ arbeitet hat von ihm gehört oder schon gegen ihn gekämpft – den Art
              Block. Für viele ist er die meist gefürchtete Herausforderung, doch mit den richtigen
              Waffen wird dieser scheinbare Endgegner kein Problem! Franci Nevada hilft euch dabei,
              für jedes eurer kreativen Abenteuer vorbereitet zu sein. Mit ihrer 5-jährigen
              Erfahrung als Künstlerin und Illustratorin unter dem Brand &bdquo;Nevada Art
              Shop&rdquo; und ihrer Ausbildung zur Kunstpädagogin bringt sie euch die besten
              Strategien gegen den Kreativitäts-Killer bei.
            </p>
          }
          instaLink="https://www.instagram.com/nevada.art.shop/"
          instaLinkText="Nevada Art Shop"
          maxWidth={500}
        />

        <ContentCard
          title="Hokushin Ittō-ryū Hyōhō"
          subtitle="14:20 Uhr | Raum 2"
          imageSrc={HokushinWorkshopBild}
          altText="Workshop Hiru"
          text={
            <p>
              Hokushin Ittō-ryū Hyōhō – eine über 200 Jahre ungebrochen überlieferte
              Samurai-Schule der Kriegskunst, Strategie, Philosophie und Etikette. Erlebt mehrere
              Vorführungen einer der bekanntesten Samurai-Schulen des feudalen Japans direkt auf
              der YumeKai – mit täglichen Vorführungen, spannenden Vorträgen und der Möglichkeit,
              eure Fragen direkt an zertifizierte Meister und Lehrer zu stellen. Informiert euch
              über Techniken, Geschichte, Philosophie und Traditionen der Samurai.
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Kermi: Einstieg ins Cosplay Crafting"
          subtitle="15:10 Uhr | Raum 1"
          imageSrc={KermiWorkshopBild}
          altText="Workshop Hiru"
          text={
            <p>
              Kermi hält einen Vortrag über das Thema &bdquo;Einstieg ins Cosplay Crafting&rdquo;.
              Dort gibt sie euch einen ersten Einblick in die wichtigsten Materialien und Werkzeuge.
              Darüber hinaus teilt sie Einblicke in ihren persönlichen Workflow: Wie plane ich ein
              Cosplay? Wie gehe ich an neue Projekte heran? Das Ziel ist es, den Einstieg zu
              erleichtern, Unsicherheiten zu beseitigen und eine solide Grundlage für eigene
              Cosplay-Projekte zu schaffen.
            </p>
          }
          instaLink="https://www.instagram.com/kermi.cos/"
          instaLinkText="Kermi"
          maxWidth={500}
        />

        <ContentCard
          title="Akunyaah: Glued Wigs für Beginner"
          subtitle="15:15 Uhr | Raum 2"
          imageSrc={AkunyaahWorkshopBild}
          altText="Workshop Hiru"
          text={
            <p>
              Hier werden die Grundlagen von Glued Wigs durchgegangen. Wie man überhaupt die Wefts
              formt und wie man Ansätze und Ponytails klebt. Auch wie man Ahoge und spezielle
              Shapes macht wird kurz besprochen.
            </p>
          }
          instaLink="https://www.instagram.com/akunyaah/"
          instaLinkText="Akunyaah"
          maxWidth={500}
        />

        <ContentCard
          title="N.G.E. &amp; Xenia: Itashas"
          subtitle="15:35 Uhr | Raum 1"
          imageSrc={HiruSpielen}
          altText="Workshop Hiru"
          text={
            <p>
              Ein Workshop über den Ursprung von Itasha, deren Geschichte in Deutschland und der
              Welt. Außerdem lernst du, wie du ein eigenes Itasha bekommst, worauf man achten
              sollte, wie man sie pflegt und was man alles sonst noch so über das Thema Itasha
              wissen sollte.
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Ars Metamorphosis – Verwandlung durch Wigs &amp; Makeup"
          subtitle="16:15 Uhr | Raum 2"
          imageSrc={HiruCosplay}
          altText="Workshop Hiru"
          text={
            <p>
              Dieser Workshop ist perfekt für alle, die die Grundlagen von Cosplay-Make-up und
              Wigstyling erlernen oder ihr Wissen erweitern möchten. Schritt für Schritt zeigt dir
              @serina.violetcosplay, gelernte Schneiderin und Cosplayerin seit 8 Jahren, wie du mit
              einfachen Techniken eindrucksvolle Looks erschaffst und deine Perücke richtig stylst.
              Lerne Tricks, die dir den Einstieg erleichtern – und nimm neue Skills mit, die dein
              Cosplay-Level sofort anheben.
            </p>
          }
          instaLink="https://www.instagram.com/serina.violetcosplay/"
          instaLinkText="serina.violetcosplay"
          maxWidth={500}
        />
      </ContentContainer>

      <h2 style={{ textAlign: "center", marginTop: "40px" }}>Sonntag</h2>
      <ContentContainer>
        <ContentCard
          title="Stellaria: J-Pop und K-Pop Random Play Dance"
          subtitle="12:20 Uhr | Raum 2"
          imageSrc={HiruWorkshop}
          altText="Workshop Hiru"
          text={
            <p>
              Wolltet ihr schon immer zeigen, wie toll ihr tanzen könnt, traut euch aber nicht auf
              die große Bühne? Dann ist dieses Event genau das Richtige! Mit einer Mischung aus
              bekannten J-Pop und K-Pop Liedern veranstaltet die Tanzgruppe Stellaria einen Random
              Play Dance, bei dem jeder eingeladen ist, in den Tanzkreis zu rennen und sein Können
              zu zeigen! Auch Zuschauer sind herzlich eingeladen!
            </p>
          }
          instaLink="https://www.instagram.com/stellaria.idols/"
          instaLinkText="Stellaria"
          maxWidth={500}
        />

        <ContentCard
          title="Wolfus: Cosplay &amp; Nachhaltigkeit – Wie du Umwelt &amp; Geldbeutel schonst"
          subtitle="12:45 Uhr | Raum 1"
          imageSrc={WolfusWorkshopBild}
          altText="Workshop Hiru"
          text={
            <p>
              Cosplay macht Spaß, kann aber schnell teuer werden und viel Material verbrauchen. In
              einer Zeit von Fast Fashion und Wegwerfmentalität lohnt es sich, auch beim Cosplay
              neue Wege zu gehen. In diesem Workshop erfährst du, wie du Kostüme nachhaltiger
              umsetzen kannst, ohne auf Kreativität oder Wirkung zu verzichten. Freu dich auf
              praktische Tipps von Wolfus, persönliche Erfahrungen und Ideen, wie nachhaltiges
              Cosplay nicht nur verantwortungsvoll, sondern auch besonders kreativ sein kann.
            </p>
          }
          instaLink="https://www.instagram.com/wolfus.cos/"
          instaLinkText="Wolfus"
          maxWidth={500}
        />

        <ContentCard
          title="Speedpainting!"
          subtitle="13:40 Uhr &amp; 14:50 Uhr | Raum 2"
          imageSrc={HiruKunstler}
          altText="Workshop Hiru"
          text={
            <p>
              Du hast eine Stunde Zeit, ein Modell zu bemalen. Farben, Pinsel und Modelle stellen
              wir. Vorerfahrung hilft, ist aber kein Muss. Die Figur darfst du am Ende natürlich
              behalten! Mit freundlicher Unterstützung der Heldenschmiede, Games Workshop und The
              Army Painter. Speedpainting Challenge – 1 Stunde für 1 Modell.
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Cori.Rani: Origami auf der YumeKai!"
          subtitle="14:10 Uhr | Raum 1"
          imageSrc={HiruKunstler}
          altText="Workshop Hiru"
          text={
            <p>
              Habt ihr schon mal Origami gesehen und euch gefragt, wie diese komplexen Figuren aus
              nur einem Papier gefaltet werden? Beim Workshop auf der YumeKai helfe ich euch, diese
              Kunst etwas einfacher nachzuvollziehen. Ich mache seit über 3 Jahren liebend gerne
              Origami und teile dieses Hobby sehr gerne. Neulinge sind mit Geduld und Sorgfalt
              eingewiesen! Erfahrene Origamisten sind ebenso herzlich eingeladen.
            </p>
          }
          maxWidth={500}
        />

        <ContentCard
          title="Scarlett: Cosplay Safety 101 – von Cosplayer für Cosplayer"
          subtitle="16:00 Uhr | Raum 1"
          imageSrc={HiruCosplay}
          altText="Workshop Hiru"
          text={
            <p>
              Dieser Workshop wird von einer erfahrenen Cosplayerin geleitet, die auf jahrelange
              Praxis zurückblickt und ihr Wissen aus erster Hand weitergibt. Im Fokus stehen der
              sichere Einsatz von Materialien und Werkzeugen, das Vermeiden von Verletzungen beim
              Crafting sowie wichtige Verhaltensweisen für mehr Sicherheit auf Conventions und in
              der Öffentlichkeit.
            </p>
          }
          instaLink="https://www.instagram.com/scarlett.sirene/"
          instaLinkText="Scarlett Sirene"
          maxWidth={500}
        />

        <ContentCard
          title="Eralia: The Basics of EVA Foam"
          subtitle="16:15 Uhr | Raum 2"
          imageSrc={EraliaWorkshopBild}
          altText="Workshop Hiru"
          text={
            <>
              <p>
                Eralia führt euch von Anfang bis Ende durch den Prozess der Requisitenherstell aus
                EVA-Schaumstoff. Von den besten Schnitttechniken über das Versiegeln bis hin zur
                Grundierung und Lackierung – in diesem Kurs werden alle Grundlagen behandelt, damit
                ihr mit eurem ersten Schaumstoff-Requisit beginnen oder eure Arbeit auf das nächste
                Niveau bringen könnt.
              </p>
              <p>
                <em>Bitte beachten: Dieser Kurs wird auf Englisch abgehalten.</em>
              </p>
            </>
          }
          instaLink="https://www.instagram.com/eralia_iwahana/"
          instaLinkText="Eralia"
          maxWidth={500}
        />
      </ContentContainer>
    </>
  );
}
