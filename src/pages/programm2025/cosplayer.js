import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";
import ContentCard from "@/components/elements/ContentCard";

//Images
import DokyatoImage from "/public/assets/images/yumekai2025/Dokyato_Image.png";
import EraliaImage from "/public/assets/images/yumekai2025/Eralia_Image.png";
import KorribanImage from "/public/assets/images/yumekai2025/Korriban_Image.png";
import MinekeImage from "/public/assets/images/yumekai2025/Mineke_Image.png";
import ZalinaImage from "/public/assets/images/yumekai2025/Zalina_Image.png";
import UchihaCorpImage from "/public/assets/images/yumekai2025/UchihaCorp_Image.png";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch; // wichtig: sorgt dafür, dass Cards gleich hoch werden
  gap: 30px;
`;

export default function Cosplayer() {
  return (
    <>
      <ReturnButton link="/programm2025" />

      <h1 style={{ textAlign: "center" }}>Cosplayer</h1>

      <ContentContainer>
        <ContentCard
          title="Dokyato"
          imageSrc={DokyatoImage}
          altText="Bild von Dokyato"
          text={
            <p>
              Rudy, bekannt als Dokyato, begeistert seit acht Jahren mit kreativem Makeup,
              Wig-Styling und Cosplays. Besonders beliebt sind seine humorvollen Inhalte mit seinem
              Vater. Auf der YumeKai 2025 könnt ihr ihn endlich persönlich kennenlernen!
            </p>
          }
          instaLink="https://www.instagram.com/dokyato/"
          instaLinkText="Dokyato"
        />

        <ContentCard
          title="Eralia"
          imageSrc={EraliaImage}
          altText="Bild von Eralia"
          text={
            <p>
              Unser Ehrengast aus den Niederlanden begeistert seit 2010 mit aufwendigen Designs aus
              Games wie Final Fantasy und Baldur&apos;s Gate. Internationale Wettbewerbsteilnahmen
              unterstreichen Eralias Leidenschaft für Details, Handwerk und Performance.
            </p>
          }
          instaLink="https://www.instagram.com/eralia_iwahana/"
          instaLinkText="Eralia_Iwahana"
        />
        <ContentCard
          title="Korriban Cosplay"
          imageSrc={KorribanImage}
          altText="Bild von Korriban"
          text={
            <p>
              Marten ist gelernter Maßschneider, Modedesigner und professioneller Cosplayer mit
              großer Star-Wars-Leidenschaft. Seit 2020 macht er Cosplay beruflich. Begleitet wird er
              von seiner Freundin Lordzwiebelback. Wir freuen uns auf dieses talentierte Duo!
            </p>
          }
          instaLink="https://www.instagram.com/korribancosplay/"
          instaLinkText="Korriban Cosplay"
        />
        <ContentCard
          title="Yaraiya Cosplay"
          imageSrc={MinekeImage}
          altText="Bild von Yaraiya"
          text={
            <p>
              Die niederländische Cosplayerin Mineke, bekannt als Yaraiya, ist erfahrene
              internationale Teilnehmerin bei WCS, C4 und anderen Wettbewerben. Sie liebt es,
              spektakuläre Requisiten zu bauen und ihr Wissen mit der Commuity zu teilen.
            </p>
          }
          instaLink="https://www.instagram.com/yaraiyacosplay/"
          instaLinkText="Yaraiya Cosplay"
        />
        <ContentCard
          title="Zaylina"
          imageSrc={ZalinaImage}
          altText="Bild von Zaylina"
          text={
            <p>
              Zaylina cosplayt seit 2017 mit viel Herzblut und Kreativität. Von aufwendigen Perücken
              bis hin zu selbstgemachtem Schmuck - Zaylina lebt das Handwerk. Besonders liebt Zaylina
              Charaktere aus Barbie Filmen, Animes, Disney und der Gaming-Welt.
            </p>
          }
          instaLink="https://www.instagram.com/zaylina1/"
          instaLinkText="Zaylina"
        />
        <ContentCard
          title="Imonee Cosplay"
          imageSrc={UchihaCorpImage}
          altText="Bild von Imonee Cosplay"
          text={
            <p>
              {" "}
              Das preisgekrönte Cosplay Duo war bereits Finalist bei DCM, C4 und Teilnehmer beim WCS
              2022 in Japan. Als Jury und beim Q&A auf der YumeKai teilen sie ihre Erfahrung mit
              euch. Triff sie auch am eigenen Stand!
            </p>
          }
          instaLink="https://www.instagram.com/imoneecosplay/"
          instaLinkText="Imonee Cosplay"
        />
      </ContentContainer>
    </>
  );
}
