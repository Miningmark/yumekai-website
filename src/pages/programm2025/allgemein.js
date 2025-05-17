import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

//Components
import Columns2 from "@/components/elements/Columns2";
import Columns3 from "@/components/elements/Columns3";
import RectangleContainer from "@/components/elements/RectangleContainer";
import MovingContentWrapper from "@/components/elements/MovingContent";
import { SpacerEmpty,Spacer, StyledLink } from "@/components/styledComponents";
import ReturnButton from "@/components/menu/ReturnButton";
import ContentCard from "@/components/elements/ContentCard";
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";
import DataViewer from "@/components/DataViewer";

//Images
import mapImage from "/public/assets/images/yumekai2025/map.png";
import lageplanKolbehausImage from "/public/assets/images/yumekai2025/Lageplan_Kolbe-VHS.png";
import lageplanSatdthalleEGImage from "/public/assets/images/yumekai2025/Lageplan_Stadthalle_EG.png";
import lageplanSatdthalleOGImage from "/public/assets/images/yumekai2025/Lageplan_Stadthalle_OG.png";
import ortImage from "/public/assets/images/yumekai2025/Ort_Image.png";

export default function Allgemein() {
  const [viewFile, setViewFile] = useState(null);

  return (
    <>
    <ReturnButton link="/programm2025" />
      <h1>Allgemein</h1>
      <h3>Öffnungszeiten</h3>
      <p>Unsere Öffnungszeiten für die YumeKai 2025 sind wie folgt:<br />
      Samstag: 10:00 - 21:00 Uhr<br />
      Sonntag: 10:00 - 17:30 Uhr<br />
      <br />
      Besucher mit einem Goldticket dürfen bereits 30 Minuten früher auf die Convention und haben somit einen Einlass ab 9:30 Uhr.<br />
      <br />
      Einzelne Bereiche schließen bereits früher/später:<br />
      Küntlerbereich:<br />
      Samstag bis 19:00 Uhr<br />
      Sonntag bis 17:30 Uhr<br /><br />
      Händlerbereich:<br />
      Samstag bis 19:00 Uhr<br />
      Sonntag bis 17:30 Uhr<br /><br />
      Vivid Arise Maid Café:<br />
      Samstag bis 20:00 Uhr<br />
      Sonntag bis 17:00 Uhr<br /><br />
      Cospayball:<br />
      Samstag bis 23:00 Uhr</p>
  <Spacer/>

      <h3>Programmheft</h3>
      <p>Lust auf mehr Infos? Unser digitales Programmheft gibt's hier als PDF zum Mitnehmen.</p>
      <div style={{ margin: "20px 0" }}>
        <StyledLinkAsButton href={"/downloads/YumeKai_2025_Programmheft.pdf"} target="_blank">
          Programmheft 2025
        </StyledLinkAsButton>
      </div>

      <Spacer/>
<h3>Anfahrt</h3>
<p style={{marginBottom : "0"}}>Die Yumekai 2025 findet in der Stadthalle Memmingen, sowie in dem Maximilian-Kolbe-Haus und dem gegenüberliegendem Gebäude der VHS Memmingen statt. Das Haupthaus, in dem ihr auch die Tageskasse und den Waffencheck findet, ist die Stadthalle Memmingen.<br />
<br />
<strong>Adresse der Stadthalle Memmingen:</strong><br />
Platz der deutschen Einheit 1, 87700 Memmingen<br />
<br />
<strong>Anfahrt mit dem Auto:</strong><br />
Die Stadthalle Memmingen ist über die Autobahn A7 oder A96 mit der Ausfahrt &quot;13 Memmingen Nord&quot; oder mit öffentlichen Verkehrsmitteln zu erreichen. Wir empfehlen die Anreise mit den öffentlichen Verkehrsmitteln.<br />
<br />
<strong>Parken:</strong></p>
<ul style={{margin : "0"}}>
  <li>Tiefgarage Stadthalle, 450 Stellplätze, Entfernung: ca. 0 Minute zu Fuß</li>
  <li>Parkhaus Schwesternstraße, 335 Stellplätze, Entfernung: ca. 10 Minuten zu Fuß</li>
  <li>Parkhaus Steinbogenstraße, 330 Stellplätze, Entfernung: ca. 12 Minuten zu Fuß</li>
  <li>Parkhaus Bahnhofsstraße, 330 Stellplätze, Entfernung: ca. 15 Minuten zu Fuß</li>
</ul>
<p style={{marginTop : "5px"}}>Weitere Informationen bezüglich Parkmöglichkeiten entnehmen Sie bitte folgender Seite: <StyledLink href={"https://stadtwerke-memmingen.de/parkhaeuser"} target="_blank">https://stadtwerke-memmingen.de/parkhaeuser</StyledLink>.</p>

<p><strong>Anfahrt mit den öffentlichen Verkehrsmitteln:</strong><br />
Die Stadthalle Memmingen ist zu Fuß ca. 15 Minuten (1 Km) vom Bahnhof entfernt.</p>


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
            <Spacer/>
<h3>Ort</h3>
<p>Dieses Jahr wächst die YumeKai - neben der Stadthalle Memmingen erwarten euch zwei weitere Locations: das Maximilian-Kolbe-Haus und die VHS Memmingen!<br />
Beide Gebäude liegen weniger als 200 Meter von der Stadthalle entfernt und erweitern unser Programm mit vielen spannenden Inhalten.</p>
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

      <Spacer/>
      <h3>Lageplan</h3>
      <p>Maximilian-Kolbe-Haus und VHS Memmingen</p>

      <Image
        src={lageplanKolbehausImage}
        alt="Lageplan Kolbehaus"
        style={{
          width: "350px",
          height: "auto",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          setViewFile("/public/assets/images/yumekai2025/Lageplan_Kolbe-VHS.png");
        }}
      />

      <Image
        src={lageplanSatdthalleEGImage}
        alt="Lageplan Stadthalle EG"
        style={{
          width: "350px",
          height: "auto",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          setViewFile("/public/assets/images/yumekai2025/Lageplan_Stadthalle_EG.png");
        }}
      />

      <Image
        src={lageplanSatdthalleOGImage}
        alt="Lageplan Stadthalle OG"
        style={{
          width: "350px",
          height: "auto",
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          setViewFile("/public/assets/images/yumekai2025/Lageplan_Stadthalle_OG.png");
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
