//Imports

//Components
import { StyledButton, UnstyledLink, Spacer, SpacerEmpty } from "@/components/styledComponents";
import SponsorsComponent from "@/components/home/Sponsors";
import HomeSlider from "@/components/home/HomeSlider";

//Articles
import AnkundigungYumeKai2025 from "@/components/articles/2024/Ankundigung-YumeKai2025";

import GewinnerPerformanceWettbewerb from "@/components/articles/2024/Gewinner-Performance-Wettbewerb";
import YumeKaiZeichenwettbewerb from "@/components/articles/2024/YumeKai-Zeichenwettbewerb";
import HierKonntIhrUnsTreffen from "@/components/articles/2024/Hier-konnt-ihr-uns-treffen";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <h1>Aktuelles</h1>
      <p>
        In der Rubrik „Aktuelles“ kannst du erfahren, was gerade bei YumeKai geschieht. Hier
        erwarten dich fortlaufend neue und fesselnde Nachrichten rund um die YumeKai.
      </p>
      <SpacerEmpty />

      <AnkundigungYumeKai2025 />

      <Spacer />

      <HierKonntIhrUnsTreffen />

      <SpacerEmpty />

      <GewinnerPerformanceWettbewerb />

      <Spacer />

      <YumeKaiZeichenwettbewerb />

      <Spacer />

      {/*
      
      Archiv

      */}

      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <UnstyledLink href={"/archiv"}>
          <StyledButton>Archiv</StyledButton>
        </UnstyledLink>
      </div>
      <SponsorsComponent />
    </>
  );
}
