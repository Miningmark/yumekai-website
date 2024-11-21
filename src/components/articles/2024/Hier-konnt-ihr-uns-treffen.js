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
                    <li>30.11-01.12 ComicCon in Stuttgart</li>
                    <li>07.12-08.12 MostiCon in Wieselsburg</li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <h3>Hier waren wir:</h3>
                  <ul>
                    <li>Comic Con Dornbirn</li>
                    <li>AniMuc Fürstenfeldbruck</li>
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
