//Components
import { StyledButton, UnstyledLink, Spacer, SpacerEmpty } from "@/components/styledComponents";
import SponsorsComponent from "@/components/home/Sponsors";
import HomeSlider from "@/components/home/HomeSlider";
import SEO from "@/components/elements/SEO";

//Articles
import HierKonntIhrUnsTreffen from "@/components/articles/2024/Hier-konnt-ihr-uns-treffen";
import HelferPost from "@/components/articles/2025/HelferPost";
import CounterClock from "@/components/elements/CounterClock";
import AnkundigungBall from "@/components/articles/2026/AnkundigungBall";
import CosplayWettbewerbePreise from "@/components/articles/2026/CosplayWettbewerbePreise";
import Oeffnungszeiten2026 from "@/components/articles/2026/Oeffnungszeiten2026";
import StellariaPaletteOfDreams from "@/components/articles/2026/StellariaPaletteOfDreams";
import RueckblickYumekai2026 from "@/components/articles/2026/RueckblickYumekai2026";
import YumeKaiZeichenwettbewerbGewinner26 from "@/components/articles/2026/YumeKai-Zeichenwettbewerb-Gewinner26";

export default function Home() {
  return (
    <>
      <SEO
        title="Startseite"
        description="YumeKai in Memmingen: Anime- und Cosplay-Convention mit Programm, Ticketshop, Aktuelles und allen Infos rund um die Veranstaltung."
        path="/"
      />
      <HomeSlider />
      <SpacerEmpty />

      {/*UTC Time */}
      {/* 
      <CounterClock
        finalDate="2026-05-09T08:00:00Z"
        headline="Wir freuen uns auf die YumeKai 2026!"
      />
      <SpacerEmpty />
      */}

      <h1>Aktuelles</h1>
      <p>
        In der Rubrik „Aktuelles“ kannst du erfahren, was gerade bei YumeKai geschieht. Hier
        erwarten dich fortlaufend neue und fesselnde Nachrichten rund um die YumeKai.
      </p>
      <RueckblickYumekai2026 />
      <Spacer />
      <YumeKaiZeichenwettbewerbGewinner26 />
      <Spacer />
      <HierKonntIhrUnsTreffen />
      <Spacer />
      {/*
      <CosplayWettbewerbePreise />
      <Spacer />
      <Oeffnungszeiten2026 />
      <Spacer />
      */}
      <StellariaPaletteOfDreams />
      <Spacer />
      <AnkundigungBall />
      <Spacer />

      {/*
      <HelferPost />
      <Spacer />
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
