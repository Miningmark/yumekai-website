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
                    <li>03.05 - 04.05 Kitsucon in Thayngen/ Reiat</li>
                    <li>10.05 - 11.05 Mini Con in Lustenau</li>
                    <li>17.05 Hana und Spring in Königsbrunn</li>
                    <li>24.05 - 25.05 NonkiCon in Spyer</li>
                    <li>04.06 - 06.06 WieMaiKai in Flörsheim</li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <h3>Hier waren wir:</h3>
                  <ul>
                    <li>Wie.Mai.Kai in Flörsheim</li>
                    <li>Cosday² in Frankfurt</li>
                    <li>DGT in Aach am Bodensee</li>
                    <li>Natsucon in Coburg</li>
                    <li>Nihonbashi in Kassel</li>
                    <li>Gamesvention in Kempten</li>
                    <li>Manganacht in Memmingen</li>
                    <li>ComicCon in Stuttgart</li>
                    <li>MostiCon in Wieselsburg</li>
                    <li>Frankenmexx in Nürnberg</li>
                    <li>ComicCon in Dornbirn</li>
                    <li>Mishiro in Augsburg</li>
                    <li>GG Bavaria in München</li>
                    <li>Frühlings Gamevention in Kempten</li>
                    <li>Animuc in Fürstenfeldbruck</li>
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
