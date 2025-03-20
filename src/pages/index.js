//Imports

//Components
import { StyledButton, UnstyledLink, Spacer, SpacerEmpty } from "@/components/styledComponents";
import SponsorsComponent from "@/components/home/Sponsors";
import HomeSlider from "@/components/home/HomeSlider";

//Articles
import AnkundigungYumeKai2025 from "@/components/articles/2024/Ankundigung-YumeKai2025";

import HierKonntIhrUnsTreffen from "@/components/articles/2024/Hier-konnt-ihr-uns-treffen";

import Spendenubergabe from "@/components/articles/2024/Spendenubergabe";
import AnkundigungJuliaMeyen from "@/components/articles/2024/AnkundigungJuliaMeyen";
import EroffnungTicketShop from "@/components/articles/2024/EroffnungTicketShop";
import AnkundigungPetraScheeser from "@/components/articles/2025/AnkundigungPetraScheeser";
import AnkundigungDominikAuer from "@/components/articles/2025/AnkundigungDominikAuer";
import PhotoContest1 from "@/components/articles/2025/PhotoContest1";
import AnkundigungAndyKnote from "@/components/articles/2025/AnkundigungAndyKnote";
import HelferPost from "@/components/articles/2025/HelferPost";
import AnkundigungSebastianFitzner from "@/components/articles/2025/AnkundigungSebastianFitzner";
import AnkundigungBall from "@/components/articles/2025/AnkundigungBall";
import AnmeldungCatwalk from "@/components/articles/2025/AnmeldungCatwalk";
import AnkundigungMaidCafe from "@/components/articles/2025/AnkundigungMaidCafe";
import AnkundigungCosplayVersteigerung from "@/components/articles/2025/AnkundigungCosplayVersteigerung";
import AnkundigungZeichenwettbewerb from "@/components/articles/2025/AnkundigungZeichenwettbewerb";

export default function Home() {
  return (
    <>
      <HomeSlider />
      <SpacerEmpty />
      <h1>Aktuelles</h1>
      <p>
        In der Rubrik „Aktuelles“ kannst du erfahren, was gerade bei YumeKai geschieht. Hier
        erwarten dich fortlaufend neue und fesselnde Nachrichten rund um die YumeKai.
      </p>
      <SpacerEmpty />

      {/*
      <AnkundigungCosplayVersteigerung/>

      <Spacer />
*/}
      {/*
      <AnkundigungZeichenwettbewerb />

      <Spacer/>
*/}
      <AnkundigungMaidCafe />

      <Spacer />

      <AnmeldungCatwalk />

      <Spacer />

      <AnkundigungBall />

      <Spacer />

      <HierKonntIhrUnsTreffen />

      <Spacer />

      <AnkundigungSebastianFitzner />

      <Spacer />

      <HelferPost />

      <Spacer />

      <AnkundigungAndyKnote />

      <Spacer />

      <PhotoContest1 />

      <Spacer />

      <AnkundigungDominikAuer />

      <Spacer />

      <AnkundigungPetraScheeser />

      <Spacer />

      <EroffnungTicketShop />

      <Spacer />

      <AnkundigungJuliaMeyen />

      <Spacer />

      <Spendenubergabe />

      <Spacer />

      <AnkundigungYumeKai2025 />

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
