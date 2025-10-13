//Components
import { StyledButton, UnstyledLink, Spacer, SpacerEmpty } from "@/components/styledComponents";
import SponsorsComponent from "@/components/home/Sponsors";
import HomeSlider from "@/components/home/HomeSlider";

//Articles
import HierKonntIhrUnsTreffen from "@/components/articles/2024/Hier-konnt-ihr-uns-treffen";
import AnkundigungJuliaMeyen from "@/components/articles/2024/AnkundigungJuliaMeyen";
import AnkundigungPetraScheeser from "@/components/articles/2025/AnkundigungPetraScheeser";
import AnkundigungDominikAuer from "@/components/articles/2025/AnkundigungDominikAuer";
import PhotoContest1 from "@/components/articles/2025/PhotoContest1";
import AnkundigungAndyKnote from "@/components/articles/2025/AnkundigungAndyKnote";
//import HelferPost from "@/components/articles/2025/HelferPost";
import AnkundigungSebastianFitzner from "@/components/articles/2025/AnkundigungSebastianFitzner";
import AnkundigungBall from "@/components/articles/2025/AnkundigungBall";
//import AnmeldungCatwalk from "@/components/articles/2025/AnmeldungCatwalk";
import AnkundigungMaidCafe from "@/components/articles/2025/AnkundigungMaidCafe";
import AnkundigungCosplayVersteigerung from "@/components/articles/2025/AnkundigungCosplayVersteigerung";
import AnkundigungCUG from "@/components/articles/2025/AkundigungCUG";
import AnkundigungCoheki from "@/components/articles/2025/AnkundigungCoheki";
import AnkundigungMion from "@/components/articles/2025/AnkundigungMion";
//import CounterClock from "@/components/elements/CounterClock";
//import AnmeldungYumeKaiWettbewerbe from "@/components/articles/2025/AnmeldungYumeKaiWettbewerbe";
import Programm2025 from "@/components/articles/2025/Programm2025";
import AnkundigungMayumiNagashi from "@/components/articles/2025/AnkundigungMayumiNagashi";
import YumeKaiZeichenwettbewerb25 from "@/components/articles/2025/YumeKai-Zeichenwettbewerb25";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <SpacerEmpty />
      {/*
      <CounterClock
        finalDate="2026-05-09T08:00:00Z"
        headline="Bald ist es soweit! Und die YumeKai 2026 findet statt."
      />
      <SpacerEmpty />
       */}
      {/*UTC Time */}

      <h1>Aktuelles</h1>
      <p>
        In der Rubrik „Aktuelles“ kannst du erfahren, was gerade bei YumeKai geschieht. Hier
        erwarten dich fortlaufend neue und fesselnde Nachrichten rund um die YumeKai.
      </p>
      <SpacerEmpty />
      <YumeKaiZeichenwettbewerb25 />
      <Spacer />
      {/* 
      <Programm2025 />
      <Spacer />
      */}
      {/* 
      <AnmeldungYumeKaiWettbewerbe />
      <Spacer />
      */}
      <AnkundigungMayumiNagashi />
      <Spacer />
      <AnkundigungMion />
      <Spacer />
      <AnkundigungCoheki />
      <Spacer />
      <AnkundigungCUG />
      <Spacer />
      <HierKonntIhrUnsTreffen />
      {/*
      <Spacer />
      <AnkundigungCosplayVersteigerung />
      <Spacer />
      <AnkundigungMaidCafe />
      
      */}
      {/*
      <Spacer />
      <AnmeldungCatwalk />
      <Spacer />
      */}
      <AnkundigungBall />
      <Spacer />
      <AnkundigungSebastianFitzner />
      {/* 
      <Spacer />
      <HelferPost />
      */}
      {/*
      <Spacer />
      <AnkundigungAndyKnote />
      <Spacer />
      <PhotoContest1 />
      <Spacer />
      <AnkundigungDominikAuer />
      <Spacer />
      <AnkundigungPetraScheeser />
      <Spacer />
      <AnkundigungJuliaMeyen />
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
