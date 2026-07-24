//Imports

//Components
import { Spacer, SpacerEmpty } from "@/components/styledComponents";
import SEO from "@/components/elements/SEO";

//Articles
import YumeKaiNightInBildern from "@/components/articles/2024/YumeKai-Night-in-Bildern";
import ConventionsTippsFurElternCA from "@/components/articles/2024/Conventions-Tipps-fur-Eltern-CA";
import YumeKaiZeichenwettbewerb from "@/components/articles/2024/YumeKai-Zeichenwettbewerb";
import GewinnerPerformanceWettbewerb from "@/components/articles/2024/Gewinner-Performance-Wettbewerb";
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
import Crowdfunding from "@/components/articles/2025/Crowdfunding";
import AnkundigungMayumiNagashi from "@/components/articles/2025/AnkundigungMayumiNagashi";
import AnkundigungMion from "@/components/articles/2025/AnkundigungMion";
import YumeKaiZeichenwettbewerb26 from "@/components/articles/2025/YumeKai-Zeichenwettbewerb26";

export default function Archiv() {
  return (
    <>
      <SEO
        title="Archiv"
        description="Alle älteren Neuigkeiten und Ankündigungen der YumeKai im Archiv nachlesen."
        path="/archiv"
      />
      <h1>Archiv</h1>
      <p>Hier findet ihr alle älteren Beiträge von der Startseite (Aktuelles).</p>
      <Spacer />
      <YumeKaiZeichenwettbewerb26 />
      <Spacer />
      <Crowdfunding />
      <Spacer />
      <AnkundigungMayumiNagashi />
      <Spacer />
      <AnkundigungMion />
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
