import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";
import ContentCard from "@/components/elements/ContentCard";

//Images
import HiruCosplay from "/public/assets/hirus/Hiru_Cosplay.png";
import XeniaBild from "/public/assets/images/yumekai2026/Xenia.jpg";
import KermiBild from "/public/assets/images/yumekai2026/Kermi.jpg";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
`;

export default function Cosplayer() {
  return (
    <>
      <ReturnButton link="/programm2026" />

      <h1 style={{ textAlign: "center" }}>Cosplayer</h1>

      <ContentContainer>
        <ContentCard
          title="Xenia"
          imageSrc={XeniaBild}
          altText="Xenia"
          text={
            <p>
              Heya! Ich bin Xenia und habe 2016 mit Cosplay angefangen. 2024 habe ich mir einen
              großen Traum erfüllt und Cosplay zu meinem Beruf gemacht. Ursprünglich komme ich aus
              Deutschland, bin aber Anfang 2026 in die Schweiz ausgewandert. Am meisten liebe ich
              es, Rüstungen und Waffen zu craften – seit einiger Zeit habe ich jedoch auch das
              Nähen für mich entdeckt. Besonders gerne setze ich Charaktere aus League of Legends
              um. Daneben entstehen bei mir aber auch immer wieder Anime-Cosplays, wobei Fate
              definitiv mein Lieblingsfandom ist.
            </p>
          }
          instaLink="https://www.instagram.com/xenia.cos/"
          instaLinkText="Xenia"
        />

        <ContentCard
          title="Wolfus"
          imageSrc={HiruCosplay}
          altText="Wolfus"
          text={
            <p>
              Wolfus ist eine preisgekrönte Cosplayerin aus Österreich, die ihre Cosplays mit viel
              Liebe zum Detail anfertigt. Mit ihrer Erfahrung aus nationalen und internationalen
              Wettbewerben wird sie uns als Judge beim Performance Contest unterstützen. Dabei legt
              sie großen Wert auf Kreativität, Ausdruck und die individuelle Umsetzung jeder
              Performance. Zusätzlich wird sie auch einen Workshop halten. Der Austausch mit der
              Community ist ihr besonders wichtig – Cosplay ist ein Hobby für alle, unabhängig von
              Körperform, Hautfarbe oder Aussehen.
            </p>
          }
          instaLink="https://www.instagram.com/wolfus.cos/"
          instaLinkText="Wolfus"
        />

        <ContentCard
          title="Scarlett Sirene"
          imageSrc={HiruCosplay}
          altText="Scarlett Sirene"
          text={
            <p>
              Scarlett Sirene ist seit 2018 als Cosplayerin aktiv und betreibt ihr Hobby nebenbei
              mit großer Leidenschaft. Sie hat sich besonders auf die Arbeit mit EVA-Foam sowie auf
              aufwendiges Wig Styling spezialisiert. Mit ihren detailreichen Kostümen konnte sie
              bereits mehrfach Preise auf Conventions gewinnen. Zusätzlich gibt sie Workshops, unter
              anderem zu den Themen Sicherheit im Cosplay sowie ADHS und Cosplay, und teilt so ihre
              Erfahrungen, um andere in der Community zu unterstützen.
            </p>
          }
          instaLink="https://www.instagram.com/scarlett.sirene/"
          instaLinkText="Scarlett Sirene"
        />

        <ContentCard
          title="Kermi"
          imageSrc={KermiBild}
          altText="Kermi"
          text={
            <p>
              Hey, ich bin Kermi! Ich cosplaye seit über 5 Jahren und habe meine Leidenschaft im
              Rüstungsbauen und Nähen gefunden. Für mich bedeutet Cosplay, der Kreativität freien
              Lauf zu lassen und Charaktere zum Leben zu erwecken. Außerdem freue ich mich sehr,
              auf der YumeKai einen Vortrag über das Thema &bdquo;Einstieg ins Cosplay
              Crafting&rdquo; zu halten.
            </p>
          }
          instaLink="https://www.instagram.com/kermi.cos/"
          instaLinkText="Kermi"
        />

        <ContentCard
          title="Eralia"
          imageSrc={HiruCosplay}
          altText="Eralia"
          text={
            <p>
              Eralia ist ein preisgekrönter Cosplayer, Kostümbildner, Cosplay-Juror und Performer
              aus den Niederlanden. Eralia verfügt über mehr als 12 Jahre Erfahrung im
              handwerklichen Bereich und beherrscht ein breites Spektrum an Fertigkeiten wie
              Lederverarbeitung, Schaumstoffbearbeitung, die Arbeit mit Thermoplasten, Nähen und
              vieles mehr. Eralia hat die Niederlande bei zahlreichen internationalen
              Cosplay-Wettbewerben vertreten und ist auf einigen der weltweit größten
              Cosplay-Bühnen aufgetreten.
            </p>
          }
          instaLink="https://www.instagram.com/eralia_iwahana/"
          instaLinkText="Eralia"
        />

        <ContentCard
          title="Nekodanshi"
          imageSrc={HiruCosplay}
          altText="Nekodanshi"
          text={
            <p>
              Wir sind @harukyucosplay &amp; @serina.violetcosplay – seit knapp 8 Jahren
              leidenschaftliche Cosplayer mit fast 70 Cosplays im Repertoire. Während Harukyu
              Experte für Crafting, Content und Technik ist, ist Serina als gelernte Schneiderin
              Expertin für Crafting, Nähen und teilt im Workshop &bdquo;Ars Metamorphosis&rdquo;
              ihr Wissen über Perücken-Styling und Makeup. Ihr könnt uns auch an unserem Stand von
              @nekodanshi.de, unserer Cosplay Agentur &amp; Community Plattform finden.
            </p>
          }
          instaLink="https://www.instagram.com/nekodanshi.de/"
          instaLinkText="Nekodanshi"
        />
      </ContentContainer>
    </>
  );
}
