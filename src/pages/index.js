//Components
import { StyledButton, UnstyledLink, Spacer, SpacerEmpty } from "@/components/styledComponents";
import SponsorsComponent from "@/components/home/Sponsors";
import HomeSlider from "@/components/home/HomeSlider";

//Articles
import HierKonntIhrUnsTreffen from "@/components/articles/2024/Hier-konnt-ihr-uns-treffen";
//import HelferPost from "@/components/articles/2025/HelferPost";
import AnkundigungMion from "@/components/articles/2025/AnkundigungMion";
import CounterClock from "@/components/elements/CounterClock";
import AnkundigungMayumiNagashi from "@/components/articles/2025/AnkundigungMayumiNagashi";
import YumeKaiZeichenwettbewerb25 from "@/components/articles/2025/YumeKai-Zeichenwettbewerb25";
import Crowdfunding from "@/components/articles/2025/Crowdfunding";
import EroffnungTicketShop from "@/components/articles/2025/EroffnungTicketShop";
import YumeKaiZeichenwettbewerb26 from "@/components/articles/2025/YumeKai-Zeichenwettbewerb26";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <SpacerEmpty />

      {/*UTC Time */}
      <CounterClock
        finalDate="2026-05-09T08:00:00Z"
        headline="Wir freuen uns auf die YumeKai 2026!"
      />
      <SpacerEmpty />

      <h1>Aktuelles</h1>
      <p>
        In der Rubrik „Aktuelles“ kannst du erfahren, was gerade bei YumeKai geschieht. Hier
        erwarten dich fortlaufend neue und fesselnde Nachrichten rund um die YumeKai.
      </p>
      <SpacerEmpty />
      <YumeKaiZeichenwettbewerb26 />
      <Spacer />
      <EroffnungTicketShop />
      <Spacer />
      <Crowdfunding />
      <Spacer />
      <HierKonntIhrUnsTreffen />
      <Spacer />
      <YumeKaiZeichenwettbewerb25 />
      <Spacer />

      <AnkundigungMayumiNagashi />
      <Spacer />
      <AnkundigungMion />

      {/* 
      <Spacer />
      <HelferPost />
      */}

      <Spacer />
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <UnstyledLink href={"/archiv"}>
          <StyledButton>Archiv</StyledButton>
        </UnstyledLink>
      </div>
      <SponsorsComponent />
    </>
  );
}
