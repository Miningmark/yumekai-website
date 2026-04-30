import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";
import ContentCard from "@/components/elements/ContentCard";

//Images
import HiruBall from "/public/assets/hirus/Hiru_Ball.png";
import HiruShowact from "/public/assets/hirus/Hiru_Showact.png";
import CelloticDuetsBild from "/public/assets/images/yumekai2026/Cellotic Duets.png";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
`;

export default function Cosplayball() {
  return (
    <>
      <ReturnButton link="/programm2026" />

      <h1 style={{ textAlign: "center" }}>Cosplayball</h1>

      <ContentContainer>
        <ContentCard
          title="Cosplayball 2026"
          imageSrc={HiruBall}
          altText="Cosplayball Hiru"
          text={
            <>
              <p>
                Taucht ein in eine zauberhafte Nacht voller Anmut, Musik und unvergesslicher
                Momente! Unser Cosplayball lädt euch ein, in festlicher Gewandung die Tanzfläche zu
                erobern und gemeinsam einen Abend der besonderen Art zu erleben.
              </p>
              <p>
                <strong>Beginn:</strong> Samstag, 19:00 Uhr
                <br />
                <strong>Disco ab:</strong> 21:30 Uhr
                <br />
                <strong>Ende:</strong> 23:30 Uhr
              </p>
              <p>
                Bitte denkt daran: Der Cosplayball ist ein festlicher Anlass – wir bitten euch, in
                eleganter, balltauglicher Kleidung zu erscheinen.
              </p>
            </>
          }
          maxWidth={550}
        />

        <ContentCard
          title="Cellotic Duets"
          imageSrc={CelloticDuetsBild}
          altText="Cellotic Duets"
          text={
            <p>
              Für die passende musikalische Atmosphäre sorgt das <strong>Cellotic Duets</strong>{" "}
              des Cellotic Soundtrack Ensembles. Mit gefühlvollen und zugleich tanzbaren
              Cover-Versionen bekannter Anime-, Gaming- und Serien-Soundtracks begleiten sie euch
              durch den Abend und schaffen eine einzigartige Stimmung. Mit Cello, Piano und
              Percussion interpretieren die Musiker eine ausgewählte Sammlung melodischer
              Filmmusik-Stücke – von &bdquo;Game of Thrones&rdquo; über Studio Ghibli bis hin zu
              Hans-Zimmer-Kompositionen wie dem Soundtrack zu &bdquo;Interstellar&rdquo;.
            </p>
          }
          webLink="https://linktr.ee/cellotic"
          webLinkText="Cellotic Soundtrack Ensemble"
          maxWidth={550}
        />

        <ContentCard
          title="Disco mit DJ Steve Heng"
          imageSrc={HiruBall}
          altText="DJ Hiru"
          text={
            <p>
              Ab 21:30 Uhr verwandelt sich der Ball in eine stimmungsvolle Disco, bei der ihr zu
              euren Lieblingsbeats ausgelassen tanzen könnt. Hier legt{" "}
              <strong>DJ Steve Heng</strong> (@breakouttv) die Musik auf. Der DJ und Content
              Creator aus München vereint Anime-Openings, kreative Mashups und Geek Electro Techno
              zu einem einzigartigen Sound, der Anime-Fans und Tanzflächen gleichermaßen begeistert.
              Er ist bereits zum dritten Mal bei den YumeKai Nights in Memmingen dabei!
            </p>
          }
          instaLink="https://www.instagram.com/breakouttv/"
          instaLinkText="DJ Steve Heng"
          maxWidth={550}
        />
      </ContentContainer>
    </>
  );
}
