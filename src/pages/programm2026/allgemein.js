import styled from "styled-components";

//Components
import ReturnButton from "@/components/menu/ReturnButton";
import { Spacer, SpacerEmpty } from "@/components/styledComponents";

const Section = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;

const InfoGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const InfoBox = styled.div`
  border: 2px solid ${({ theme }) => theme.secondaryColor};
  border-radius: 16px;
  padding: 20px 30px;
  min-width: 220px;
  flex: 1;
  max-width: 280px;

  h3 {
    margin-top: 0;
    text-align: center;
  }

  p {
    margin: 6px 0;
    text-align: center;
  }
`;

const ListSection = styled.div`
  margin-bottom: 10px;

  h3 {
    margin-bottom: 8px;
  }

  ul {
    margin: 0;
    padding-left: 20px;

    li {
      margin-bottom: 4px;
    }
  }
`;

export default function Allgemein() {
  return (
    <>
      <ReturnButton link="/programm2026" />

      <h1 style={{ textAlign: "center" }}>Allgemein</h1>

      <Section>
        <h2 style={{ textAlign: "center" }}>Öffnungszeiten</h2>
        <InfoGrid>
          <InfoBox>
            <h3>Convention</h3>
            <p>
              <strong>Samstag:</strong> 10:00 – 21:00 Uhr
            </p>
            <p>
              <strong>Sonntag:</strong> 10:00 – 18:00 Uhr
            </p>
          </InfoBox>
          <InfoBox>
            <h3>Programm</h3>
            <p>
              <strong>Samstag:</strong> 11:00 – 18:30 Uhr
            </p>
            <p>
              <strong>Sonntag:</strong> 11:00 – 18:00 Uhr
            </p>
          </InfoBox>
          <InfoBox>
            <h3>Cosplayball</h3>
            <p>
              <strong>Samstag:</strong> 19:00 – 23:30 Uhr
            </p>
          </InfoBox>
        </InfoGrid>

        <Spacer />

        <h2 style={{ textAlign: "center" }}>Informationen</h2>

        <ListSection>
          <h3>Infostand</h3>
          <p>
            Am Infostand werden alle eure Fragen rund um die YumeKai beantwortet. Dort könnt ihr
            euch auch für die Workshops und Wettbewerbe anmelden.
          </p>
        </ListSection>

        <ListSection>
          <h3>Tickets und Einlass</h3>
          <p>
            Bitte habt immer euer Ticket dabei, egal ob in digitaler Form oder ausgedruckt. Ihr
            könnt die YumeKai nur mit Ticket betreten.
          </p>
        </ListSection>

        <ListSection>
          <h3>Helfer</h3>
          <p>
            Wendet euch bei Fragen oder wenn ihr Hilfe benötigt jederzeit an unsere Helfer, die ihr
            an ihren YumeKai-T-Shirts erkennen könnt.
          </p>
        </ListSection>

        <ListSection>
          <h3>Waffencheck</h3>
          <p>
            Jedes Prop muss dort vorgezeigt werden. Hier könnt ihr eure Props auch kostenlos
            abgeben! Alle Infos findet ihr in unseren Waffen- und Kostümregeln im Programmheft.
          </p>
        </ListSection>

        <ListSection>
          <h3>Garderobe</h3>
          <p>
            Auf der YumeKai gibt es eine Cosplay Garderobe, die ihr im Hauptgebäude der Stadthalle
            findet. Solltet ihr Hilfe beim Suchen brauchen, wendet euch an einen unserer Helfer.
          </p>
        </ListSection>

        <ListSection>
          <h3>Cosplay-Repair</h3>
          <p>
            Für (fast) jede kleine Panne steht euch der Cosplay-Repairstand mit Rat, Tat und
            Werkzeug zur Seite. Ob ein paar Stiche hier und dort oder einmal Knoten ausbürsten –
            wir sind bestens dafür ausgestattet.
          </p>
        </ListSection>

        <Spacer />

        <h2 style={{ textAlign: "center" }}>Locations</h2>
        <p>
          Wie im letzten Jahr erwarten euch neben der <strong>Stadthalle Memmingen</strong> zwei
          weitere Locations: das <strong>Maximilian-Kolbe-Haus</strong> und die{" "}
          <strong>VHS Memmingen</strong>. Beide Gebäude liegen weniger als 200 Meter von der
          Stadthalle entfernt und erweitern unser Programm mit vielen spannenden Inhalten. Hier
          findet ihr unsere Autoren-Area, weitere Aussteller, Künstler, Synchronsprecher, Karaoke
          sowie unsere Workshopräume.
        </p>
        <p>
          <strong>Wichtig:</strong> In der VHS und im Maximilian-Kolbe-Haus gibt es keine
          Möglichkeit, Cosplay-Waffen zu lagern. Falls ihr eine Prop oder Waffe dabeihabt, müsst
          ihr sie vorher am Waffencheck in der Stadthalle abgeben.
        </p>

        <Spacer />

        <h2 style={{ textAlign: "center" }}>Lageplan</h2>

        <h3>Stadthalle Erdgeschoss</h3>
        <InfoGrid>
          <InfoBox style={{ maxWidth: "400px" }}>
            <h3>Aussteller</h3>
            <ul style={{ textAlign: "left" }}>
              <li>ConUtopisch</li>
              <li>Comiccon Dornbirn</li>
              <li>Stargate Fotopoint</li>
              <li>Cosplay Repair</li>
              <li>Hokushin Ittō-ryū Hyōhō</li>
              <li>Cosplay Alpin e.V.</li>
              <li>405th European Regiment</li>
              <li>Cosplay-Union-Germany e.V.</li>
              <li>Hana &amp; Spring</li>
              <li>Towelday Austria</li>
              <li>CoHeKi e.V.</li>
            </ul>
          </InfoBox>
          <InfoBox style={{ maxWidth: "400px" }}>
            <h3>Cosplayer</h3>
            <ul style={{ textAlign: "left" }}>
              <li>Nekodanshi</li>
              <li>Xenia</li>
              <li>Scarlett Sirene</li>
              <li>Wolfus</li>
              <li>Eralia</li>
              <li>Kermi</li>
            </ul>
          </InfoBox>
        </InfoGrid>

        <SpacerEmpty />

        <h3>Stadthalle Oberes Stockwerk</h3>
        <InfoGrid>
          <InfoBox style={{ maxWidth: "400px" }}>
            <h3>Künstlerbereich</h3>
            <ul style={{ textAlign: "left" }}>
              <li>Yupiistar</li>
              <li>Yeiko Art</li>
              <li>Art of the Valley</li>
              <li>Miss_Malevolent</li>
              <li>Christal.Shadow</li>
              <li>Glueblade</li>
              <li>Akunyaah</li>
              <li>Just Design Creation</li>
              <li>Kitsu Kami</li>
              <li>Alice my Secret</li>
              <li>Myuchiisu</li>
              <li>Celezius</li>
              <li>CurseHunter_Art</li>
              <li>MinervasOwls</li>
              <li>Fyly</li>
              <li>Elli &amp; Nick</li>
              <li>Emystuu</li>
              <li>Kirian Yume</li>
              <li>Animalixu</li>
              <li>Yunuyei</li>
              <li>Anara_Twice</li>
              <li>SteamSpirits</li>
            </ul>
          </InfoBox>
          <InfoBox style={{ maxWidth: "400px" }}>
            <h3>Händlerbereich</h3>
            <ul style={{ textAlign: "left" }}>
              <li>Heldenschmiede</li>
              <li>Squiggz</li>
              <li>WoW Shop für Helden</li>
              <li>Infostand</li>
              <li>Spielfläche</li>
              <li>Animi-Shop</li>
              <li>Colorful Mind</li>
              <li>Otakuwonderland</li>
              <li>Shiga Food</li>
              <li>SleepyTigerYuki</li>
              <li>Tokidoll</li>
              <li>Aoni</li>
              <li>Palico Art</li>
              <li>Akumu</li>
              <li>Bavarian Woodfox</li>
              <li>Otaku Art</li>
              <li>Jenny Grams</li>
              <li>Estaticanime</li>
            </ul>
          </InfoBox>
        </InfoGrid>

        <SpacerEmpty />

        <h3>Maximilian-Kolbe-Haus &amp; VHS</h3>
        <InfoGrid>
          <InfoBox style={{ maxWidth: "400px" }}>
            <h3>Künstler (Kolbe/VHS)</h3>
            <ul style={{ textAlign: "left" }}>
              <li>CosplayConstellations</li>
              <li>Stars and Trinkets</li>
              <li>Jey.Creates</li>
              <li>COTOGLA</li>
              <li>SASEI</li>
              <li>Naomi Huber</li>
              <li>Franci Nevada</li>
              <li>Ulf Fildebrandt</li>
              <li>DELPHOXDX</li>
            </ul>
          </InfoBox>
          <InfoBox style={{ maxWidth: "400px" }}>
            <h3>Programm (Kolbe/VHS)</h3>
            <ul style={{ textAlign: "left" }}>
              <li>World and Shields e.V.</li>
              <li>Lucky 13</li>
              <li>NILO (Samstag) / Cellotic Duets (Sonntag)</li>
              <li>MION</li>
              <li>Yuri Hirano</li>
              <li>Stellaria</li>
              <li>Synchronsprecher Area</li>
              <li>Nuclear Bastards (Endzeit Area)</li>
              <li>DTG-Stammtisch &bdquo;Isargart&rdquo;</li>
              <li>Maid-Café DreamGarden</li>
            </ul>
          </InfoBox>
        </InfoGrid>

        <Spacer />

        <h2 style={{ textAlign: "center" }}>Anfahrt</h2>
        <p style={{ textAlign: "center" }}>
          <strong>Stadthalle Memmingen</strong>
          <br />
          An der Stadthalle 1<br />
          87700 Memmingen
        </p>
        <p>
          Die Stadthalle Memmingen ist gut mit dem Auto und der Bahn erreichbar. Vom Bahnhof
          Memmingen sind es ca. 10–15 Gehminuten bis zur Stadthalle.
        </p>
      </Section>
    </>
  );
}
