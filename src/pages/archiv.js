//Imports

//Components
import { Spacer, SpacerEmpty } from "@/components/styledComponents";

//Articles
import YumeKaiNightInBildern from "@/components/articles/2024/YumeKai-Night-in-Bildern";
import ConventionsTippsFurElternCA from "@/components/articles/2024/Conventions-Tipps-fur-Eltern-CA";
import YumeKaiZeichenwettbewerb from "@/components/articles/2024/YumeKai-Zeichenwettbewerb";
import GewinnerPerformanceWettbewerb from "@/components/articles/2024/Gewinner-Performance-Wettbewerb";
//import AnkundigungYumeKai2025 from "@/components/articles/2024/Ankundigung-YumeKai2025";
//import EroffnungTicketShop from "@/components/articles/2024/EroffnungTicketShop";
import Spendenubergabe from "@/components/articles/2024/Spendenubergabe";
import AnkundigungJuliaMeyen from "@/components/articles/2024/AnkundigungJuliaMeyen";
import AnkundigungPetraScheeser from "@/components/articles/2025/AnkundigungPetraScheeser";
import AnkundigungDominikAuer from "@/components/articles/2025/AnkundigungDominikAuer";
import PhotoContest1 from "@/components/articles/2025/PhotoContest1";
import AnkundigungAndyKnote from "@/components/articles/2025/AnkundigungAndyKnote";
import AnkundigungMaidCafe from "@/components/articles/2025/AnkundigungMaidCafe";
import AnkundigungCosplayVersteigerung from "@/components/articles/2025/AnkundigungCosplayVersteigerung";
import AnkundigungSebastianFitzner from "@/components/articles/2025/AnkundigungSebastianFitzner";
import AnkundigungBall from "@/components/articles/2025/AnkundigungBall";
import AnkundigungCUG from "@/components/articles/2025/AkundigungCUG";
import AnkundigungCoheki from "@/components/articles/2025/AnkundigungCoheki";

export default function Archiv() {
  return (
    <>
      <h1>Archiv</h1>
      <p>Hier findet ihr alle älteren Beiträge von der Startseite (Aktuelles).</p>
      <Spacer />
      <AnkundigungCoheki />
      <Spacer />
      <AnkundigungCUG />
      <Spacer />
      <AnkundigungBall />
      <Spacer />
      <AnkundigungSebastianFitzner />
      <Spacer />
      <AnkundigungCosplayVersteigerung />
      <Spacer />
      <AnkundigungMaidCafe />
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
      <Spacer />
      <Spendenubergabe />
      <Spacer />
      <GewinnerPerformanceWettbewerb />
      <Spacer />
      <YumeKaiZeichenwettbewerb />
      <Spacer />
      <ConventionsTippsFurElternCA />
      <SpacerEmpty />
      <YumeKaiNightInBildern />
    </>
  );
}
