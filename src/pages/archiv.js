//Imports

//Components
import { Spacer, SpacerEmpty } from "@/components/styledComponents";

//Articles
import YumeKaiNightInBildern from "@/components/articles/2024/YumeKai-Night-in-Bildern";
import ConventionsTippsFurElternCA from "@/components/articles/2024/Conventions-Tipps-fur-Eltern-CA";

export default function Archiv() {
  return (
    <>
      <h1>Archiv</h1>
      <p>Hier findet ihr alle älteren Beiträge von der Startseite (Aktuelles).</p>
      <Spacer />
      <ConventionsTippsFurElternCA />
      <SpacerEmpty />
      <YumeKaiNightInBildern />
    </>
  );
}
