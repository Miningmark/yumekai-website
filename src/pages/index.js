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
import CounterClock from "@/components/elements/CounterClock";
//import AnmeldungYumeKaiWettbewerbe from "@/components/articles/2025/AnmeldungYumeKaiWettbewerbe";
import AnkundigungMayumiNagashi from "@/components/articles/2025/AnkundigungMayumiNagashi";
import YumeKaiZeichenwettbewerb25 from "@/components/articles/2025/YumeKai-Zeichenwettbewerb25";

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
