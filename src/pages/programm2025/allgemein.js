import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";

//Components
import Columns2 from "@/components/elements/Columns2";
import { SpacerEmpty, Spacer, StyledLink } from "@/components/styledComponents";
import ReturnButton from "@/components/menu/ReturnButton";
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";
import DataViewer from "@/components/DataViewer";

//Images
import mapImage from "/public/assets/images/yumekai2025/map.png";
import lageplanKolbehausImage from "/public/assets/images/yumekai2025/Lageplan_Kolbe-VHS.png";
import lageplanSatdthalleEGImage from "/public/assets/images/yumekai2025/Lageplan_Stadthalle_EG.png";
import lageplanSatdthalleOGImage from "/public/assets/images/yumekai2025/Lageplan_Stadthalle_OG.png";
import ortImage from "/public/assets/images/yumekai2025/Ort_Image.png";
import zeitplanSamstagImage from "/public/assets/images/yumekai2025/Zeitplan_Samstag.png";
import zeitplanSonntagImage from "/public/assets/images/yumekai2025/Zeitplan_Sonntag.png";

const DynamicContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ $widthpercent }) => `calc(${$widthpercent}% - 10px)`};
  ${({ $maxwidth }) => $maxwidth && `max-width: ${$maxwidth}px;`}

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const NoDotList = styled.ol`
  list-style: none;
  counter-reset: list;
`;

const NoDotListItem = styled.li`
  counter-increment: list;
  //position: relative;

  &::before {
    content: counter(list) " ";
    //position: absolute;
    //left: 0;
    font-weight: bold;
  }
`;

export default function Allgemein() {
  const [viewFile, setViewFile] = useState(null);

  return (
    <>
      <ReturnButton link="/programm2025" />
      <h1>Allgemein</h1>
      <h3>Öffnungszeiten</h3>
      <p>
        Unsere Öffnungszeiten für die YumeKai 2025 sind wie folgt:
        <br />
        Samstag: 10:00 - 21:00 Uhr
        <br />
        Sonntag: 10:00 - 17:30 Uhr
        <br />
        <br />
        Besucher mit einem Goldticket dürfen bereits 30 Minuten früher auf die Convention und haben
        somit einen Einlass ab 9:30 Uhr.
        <br />
        <br />
        Einzelne Bereiche schließen bereits früher/später:
        <br />
        Küntlerbereich:
        <br />
        Samstag bis 19:00 Uhr
        <br />
        Sonntag bis 17:30 Uhr
        <br />
        <br />
        Händlerbereich:
        <br />
        Samstag bis 19:00 Uhr
        <br />
        Sonntag bis 17:30 Uhr
        <br />
        <br />
        Vivid Arise Maid Café:
        <br />
        Samstag bis 20:00 Uhr
        <br />
        Sonntag bis 17:00 Uhr
        <br />
        <br />
        Cospayball:
        <br />
        Samstag bis 23:00 Uhr
      </p>
      <Spacer />

      <h3>Programmheft</h3>
      <p>Lust auf mehr Infos? Unser digitales Programmheft gibt&apos;s hier als PDF zum Mitnehmen.</p>
      <div style={{ margin: "20px 0" }}>
        <StyledLinkAsButton href={"/downloads/YumeKai_2025_Programmheft.pdf"} target="_blank">
          Programmheft 2025
        </StyledLinkAsButton>
      </div>

      <Spacer />
      <h3>Anfahrt</h3>
      <p style={{ marginBottom: "0" }}>
        Die Yumekai 2025 findet in der Stadthalle Memmingen, sowie in dem Maximilian-Kolbe-Haus und
        dem gegenüberliegendem Gebäude der VHS Memmingen statt. Das Haupthaus, in dem ihr auch die
        Tageskasse und den Waffencheck findet, ist die Stadthalle Memmingen.
        <br />
        <br />
        <strong>Adresse der Stadthalle Memmingen:</strong>
        <br />
        Platz der deutschen Einheit 1, 87700 Memmingen
        <br />
        <br />
        <strong>Anfahrt mit dem Auto:</strong>
        <br />
        Die Stadthalle Memmingen ist über die Autobahn A7 oder A96 mit der Ausfahrt &quot;13
        Memmingen Nord&quot; oder mit öffentlichen Verkehrsmitteln zu erreichen. Wir empfehlen die
        Anreise mit den öffentlichen Verkehrsmitteln.
        <br />
        <br />
        <strong>Parken:</strong>
      </p>
      <ul style={{ margin: "0" }}>
        <li>Tiefgarage Stadthalle, 450 Stellplätze, Entfernung: ca. 0 Minute zu Fuß</li>
        <li>Parkhaus Schwesternstraße, 335 Stellplätze, Entfernung: ca. 10 Minuten zu Fuß</li>
        <li>Parkhaus Steinbogenstraße, 330 Stellplätze, Entfernung: ca. 12 Minuten zu Fuß</li>
        <li>Parkhaus Bahnhofsstraße, 330 Stellplätze, Entfernung: ca. 15 Minuten zu Fuß</li>
      </ul>
      <p style={{ marginTop: "5px" }}>
        Weitere Informationen bezüglich Parkmöglichkeiten entnehmen Sie bitte folgender Seite:{" "}
        <StyledLink href={"https://stadtwerke-memmingen.de/parkhaeuser"} target="_blank">
          https://stadtwerke-memmingen.de/parkhaeuser
        </StyledLink>
        .
      </p>

      <p>
        <strong>Anfahrt mit den öffentlichen Verkehrsmitteln:</strong>
        <br />
        Die Stadthalle Memmingen ist zu Fuß ca. 15 Minuten (1 Km) vom Bahnhof entfernt.
      </p>

      <Image
        src={mapImage}
        alt="Anfahrt Karte"
        style={{
          width: "350px",
          height: "auto",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          setViewFile("/public/assets/images/yumekai2025/map.png");
        }}
      />
      <small style={{ fontSize: "0.5em", marginTop: "5px" }}>
        Hintergrundkarte: © Bayerische Vermessungsverwaltung (2025), Datenquelle: Geoportal Bayern
        www.geoportal.bayern.de
      </small>
      <div style={{ margin: "20px 0" }}>
        <StyledLinkAsButton href={"https://maps.app.goo.gl/o7RvbkgHpFvpPAjZ7"} target="_blank">
          zu Google Maps
        </StyledLinkAsButton>
      </div>
      <Spacer />
      <h3>Ort</h3>
      <p>
        Dieses Jahr wächst die YumeKai - neben der Stadthalle Memmingen erwarten euch zwei weitere
        Locations: das Maximilian-Kolbe-Haus und die VHS Memmingen!
        <br />
        Beide Gebäude liegen weniger als 200 Meter von der Stadthalle entfernt und erweitern unser
        Programm mit vielen spannenden Inhalten.
      </p>
      <Image
        src={ortImage}
        alt="Wegbeschreibung zu den Gebüuden der VHS und des Maximilian-Kolbe-Hauses"
        style={{
          width: "350px",
          height: "auto",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          setViewFile("/public/assets/images/yumekai2025/Ort_Image.png");
        }}
      />
      <small style={{ fontSize: "0.5em", marginTop: "5px" }}>
        Hintergrundkarte: © Bayerische Vermessungsverwaltung (2025), Datenquelle: Geoportal Bayern
        www.geoportal.bayern.de
      </small>

      <Spacer />
      <h3>Lageplan</h3>
      <p>
        <strong>Maximilian-Kolbe-Haus und VHS Memmingen</strong>
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent
          $widthpercent={60}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Image
            src={lageplanKolbehausImage}
            alt="Lageplan Kolbehaus"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              setViewFile("/public/assets/images/yumekai2025/Lageplan_Kolbe-VHS.png");
            }}
          />
        </DynamicContent>
        <DynamicContent $widthpercent={40}>
          <h4 style={{ marginBottom: "0" }}>Autoren:</h4>

          <p>
            Naomi Huber
            <br />
            Yui Spallek
          </p>
          <p></p>

          <h4 style={{ marginBottom: "0" }}>Synchronsprecher & Ehrengäste:</h4>
          <p>
            Sebastian Fitzner
            <br />
            Dominik Auer
            <br />
            Julia Meynen
            <br />
            Andy Knote
            <br />
            Petra Scheeser
          </p>
        </DynamicContent>
      </div>

      <p>
        <strong>Stadthalle Erdgeschoss</strong>
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent
          $widthpercent={60}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Image
            src={lageplanSatdthalleEGImage}
            alt="Lageplan Stadthalle EG"
            style={{
              width: "100%",
              height: "auto",
              cursor: "pointer",
            }}
            onClick={() => {
              setViewFile("/public/assets/images/yumekai2025/Lageplan_Stadthalle_EG.png");
            }}
          />
        </DynamicContent>
        <DynamicContent $widthpercent={40}>
          <Columns2
            mobile={2}
            align={2}
            left={
              <>
                <h4>Aussteller:</h4>
                <NoDotList>
                  <NoDotListItem>Cosplay Repair</NoDotListItem>
                  <NoDotListItem>Vivid Arise e.V.</NoDotListItem>
                  <NoDotListItem>Cosplay Union Germany</NoDotListItem>
                  <NoDotListItem>CoHeKi e.V. </NoDotListItem>
                  <NoDotListItem>CosQuest</NoDotListItem>
                  <NoDotListItem>Mishiro Augsburg</NoDotListItem>
                  <NoDotListItem>KDKasai</NoDotListItem>
                  <NoDotListItem>Bayerische Go Verein </NoDotListItem>
                  <NoDotListItem>Hana & Spring </NoDotListItem>
                  <NoDotListItem>Towelday-Austira</NoDotListItem>
                </NoDotList>
                <p></p>
                <h4 style={{ marginBottom: "0" }}>Foto Punkt:</h4>
                <p>Vanity Art Photography</p>
              </>
            }
            right={
              <>
                <h4>Ehrengäste:</h4>
                <NoDotList>
                  <NoDotListItem>Cosplay Repair</NoDotListItem>
                  <NoDotListItem>Mayumi Nagashi</NoDotListItem>
                  <NoDotListItem>Korriban Cosplay</NoDotListItem>
                  <NoDotListItem>Zaylina</NoDotListItem>
                  <NoDotListItem>Dokyato</NoDotListItem>
                  <NoDotListItem>Imonee Cosplay</NoDotListItem>
                  <NoDotListItem>Yaraiya Cosplay</NoDotListItem>
                  <NoDotListItem>Eralia</NoDotListItem>
                </NoDotList>
              </>
            }
          />
        </DynamicContent>
      </div>

      <p>
        <strong>Stadthalle Obergeschoss</strong>
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent
          $widthpercent={60}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Image
            src={lageplanSatdthalleOGImage}
            alt="Lageplan Stadthalle OG"
            style={{
              width: "100%",
              height: "auto",
              cursor: "pointer",
            }}
            onClick={() => {
              setViewFile("/public/assets/images/yumekai2025/Lageplan_Stadthalle_OG.png");
            }}
          />
        </DynamicContent>
        <DynamicContent $widthpercent={40}>
          <Columns2
            mobile={2}
            align={2}
            left={
              <>
                <h4>Händlerbereich:</h4>
                <NoDotList>
                  <NoDotListItem>Heldenschmiede</NoDotListItem>
                  <NoDotListItem>Squiggz</NoDotListItem>
                  <NoDotListItem>PokéVend</NoDotListItem>
                  <NoDotListItem>Info- und Merchstand</NoDotListItem>
                  <NoDotListItem>NöRD Shop</NoDotListItem>
                  <NoDotListItem>Cute Paradise</NoDotListItem>
                  <NoDotListItem>Silver Dragon Sabers</NoDotListItem>
                  <NoDotListItem>Arnos Retro Videogames</NoDotListItem>
                  <NoDotListItem>HeroBase</NoDotListItem>
                  <NoDotListItem>Otaku Wonderland</NoDotListItem>
                  <NoDotListItem>Steam Spirits</NoDotListItem>
                  <NoDotListItem>Cosmic Moonlight</NoDotListItem>
                  <NoDotListItem>Manga Merch</NoDotListItem>
                  <NoDotListItem>3D Druck David Verhoeven</NoDotListItem>
                  <NoDotListItem>Rune Store</NoDotListItem>
                  <NoDotListItem>Spiel- / Interaktionsfläche</NoDotListItem>
                </NoDotList>
              </>
            }
            right={
              <>
                <h4>Künstlerbereich:</h4>
                <NoDotList>
                  <NoDotListItem>Yupiistar</NoDotListItem>
                  <NoDotListItem>Animalixu</NoDotListItem>
                  <NoDotListItem>Christal.ShadOwO</NoDotListItem>
                  <NoDotListItem>BeehiveArtists</NoDotListItem>
                  <NoDotListItem>Rina Mora Art</NoDotListItem>
                  <NoDotListItem>Larina</NoDotListItem>
                  <NoDotListItem>Tiny Paws Treasure und CyanCalla</NoDotListItem>
                  <NoDotListItem>Stellabialek</NoDotListItem>
                  <NoDotListItem>Berrin Jost</NoDotListItem>
                  <NoDotListItem>Loonaris</NoDotListItem>
                  <NoDotListItem>Fyly Artworks</NoDotListItem>
                  <NoDotListItem>Kitsukami</NoDotListItem>
                  <NoDotListItem>Quinnskanzashi</NoDotListItem>
                  <NoDotListItem>Franci Nevada</NoDotListItem>
                  <NoDotListItem>Emytsuu</NoDotListItem>
                  <NoDotListItem>Valyraka</NoDotListItem>
                  <NoDotListItem>Kirian Yume</NoDotListItem>
                  <NoDotListItem>Bavarian Woodfox Art</NoDotListItem>
                  <NoDotListItem>Madyra</NoDotListItem>
                  <NoDotListItem>Anara_Twice</NoDotListItem>
                  <NoDotListItem>Amidala Artwork</NoDotListItem>
                  <NoDotListItem>Alice My Secret</NoDotListItem>
                  <NoDotListItem>TacToki Illustrations</NoDotListItem>
                </NoDotList>
              </>
            }
          />
        </DynamicContent>
      </div>

      <Spacer />
      <h3>Zeitplan</h3>

      <Image
        src={zeitplanSamstagImage}
        alt="Zeitplan Samstag"
        style={{
          width: "50vw",
          maxWidth: "1200px",
          height: "auto",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          setViewFile("/public/assets/images/yumekai2025/ZeitplanSamstagGross_Image.png");
        }}
      />
      <SpacerEmpty />
      <Image
        src={zeitplanSonntagImage}
        alt="Zeitplan Sonntag"
        style={{
          width: "50vw",
          maxWidth: "1200px",
          height: "auto",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          setViewFile("/public/assets/images/yumekai2025/ZeitplanSonntagGross_Image.png");
        }}
      />

      {viewFile ? (
        <DataViewer
          file={viewFile}
          handleClose={() => {
            setViewFile(null);
          }}
        />
      ) : null}
    </>
  );
}
