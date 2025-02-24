import Image from "next/image";

//Components
import Columns2 from "@/components/elements/Columns2";
import { StyledButton, UnstyledLink } from "@/components/styledComponents";
import FlippingCard from "@/components/elements/FlippingCard";

//logos
import hiruHandy from "/public/assets/logo/Hiru-Handy.webp";

export default function HierKonntIhrUnsTreffen() {
  return (
    <>
      <Columns2
        left={
          <>
            <FlippingCard
              cardHeight={400}
              frontContent={
                <>
                  <h3>Hier könnt ihr uns treffen:</h3>
                  <ul>
                    <li>01.03.25 Frankenmexx in Nürnberg</li>
                    <li>08.03-09.03 ComicCon in Dornbirn</li>
                    <li>22.03.25 Mishiro Animex Augsburg</li>
                    <li>29.03-30.03 GG Bavaria in München</li>
                    <li>12.04.25 Frühlings Gamevention in Kempten</li>
                    <li>10.05-11.05 Mini Con in Lustenau</li>
                    <li>17.05.25 Hana und Spring in Königsbrunn</li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <h3>Hier waren wir:</h3>
                  <ul>
                    <li>Minicon in Lustenau</li>
                    <li>Cosquest München</li>
                    <li>KDKasei in Regensburg</li>
                    <li>Hana & Spring in Königsbrunn</li>
                    <li>Hanami in Koblenz</li>
                    <li>Loricon in Seefeld in Tirol</li>
                    <li>Wie.Mai.Kai in Flörsheim</li>
                    <li>Cosday² in Frankfurt</li>
                    <li>DGT in Aach am Bodensee</li>
                    <li>Natsucon in Coburg</li>
                    <li>Nihonbashi in Kassel</li>
                    <li>Gamesvention in Kempten</li>
                    <li>Manganacht in Memmingen</li>
                    <li>ComicCon in Stuttgart</li>
                    <li>MostiCon in Wieselsburg</li>
                  </ul>
                </>
              }
            />
          </>
        }
        right={
          <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "60%", height: "auto" }}>
                <Image
                  src={hiruHandy}
                  alt="Maskottchen Hiru"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
              <p>Kennt ihr bereits Hiru?</p>
              <UnstyledLink href={"/maskottchen"}>
                <StyledButton>Infos zu Hiru</StyledButton>
              </UnstyledLink>
            </div>
          </>
        }
      />
    </>
  );
}
