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

export default function Archiv() {
  return (
    <>
      <h1>Archiv</h1>
      <p>Hier findet ihr alle älteren Beiträge von der Startseite (Aktuelles).</p>
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
