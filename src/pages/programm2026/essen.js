import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";
import ContentCard from "@/components/elements/ContentCard";

//Images
import HiruEssen from "/public/assets/hirus/Hiru_Essen.png";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
`;

export default function Essen() {
  return (
    <>
      <ReturnButton link="/programm2026" />

      <h1 style={{ textAlign: "center" }}>Essen &amp; Trinken</h1>

      <ContentContainer>
        <ContentCard
          title="Becher Bistro"
          imageSrc={HiruEssen}
          altText="Becher Bistro"
          text={
            <>
              <p>
                Der Becher Bistro bringt euch japanisches Streetfood auf die YumeKai! Freut euch
                auf frisch zubereitete Köstlichkeiten – authentisch, lecker und perfekt für eine
                kleine Japan-Auszeit auf der Convention.
              </p>
              <p>
                <strong>Angebot:</strong>
              </p>
              <ul>
                <li>Sandos</li>
                <li>Knuspriges Karaage</li>
                <li>Tonkatsu</li>
                <li>Wakame-Salat</li>
                <li>Hausgemachter Erdbeer-Matcha</li>
              </ul>
            </>
          }
          maxWidth={550}
        />

        <ContentCard
          title="Maid-Café DreamGarden"
          imageSrc={HiruEssen}
          altText="Maid-Café DreamGarden"
          text={
            <>
              <p>
                Konnichiwa minna-san! Müde vom Laufen? Lust auf etwas Süßes? Schaut bei uns
                vorbei! Wir sind das Maid-Café DreamGarden und verzaubern seit 2018 eure
                Convention-Experience.
              </p>
              <p>
                Dieses Mal werden wir euch an der YumeKai mit Leckereien und Erfrischungen die
                Zeit versüßen. Unsere Maids und Butlers helfen euch gerne bei der Entscheidung.
              </p>
              <p>
                <strong>Angebot:</strong>
              </p>
              <ul>
                <li>Eeveelution Cupcakes</li>
                <li>Melon-Soda</li>
              </ul>
              <p>
                <em>
                  Das Maid-Café ist im VHS-Gebäude an Samstag und Sonntag geöffnet.
                </em>
              </p>
            </>
          }
          maxWidth={550}
        />
      </ContentContainer>
    </>
  );
}
