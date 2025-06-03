import Image from "next/image";

//Components
import Columns2 from "@/components/elements/Columns2";
import { StyledButton, UnstyledLink } from "@/components/styledComponents";
import FlippingCard from "@/components/elements/FlippingCard";

//images
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
                    <li>04.06 - 06.06 WieMaiKai in Flörsheim</li>
                    <li>08.08 - 10.08 DGT in Aach</li>
                    <li>05.09 - 07.09 Asia Area in Oschersleben</li>
                    <li>12.09 - 14.09 Gamesvention in Kempten</li>
                    <li>07.11 - 09.11 YaYoCo in Dachau</li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <h3>Hier waren wir:</h3>
                  <ul>
                    <li>Cosday² in Frankfurt</li>
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
                    <li>Kitsucon in Thayngen/Reiat</li>
                    <li>Mini Con in Lustenau</li>
                    <li>Hana und Spring in Königsbrunn</li>
                    <li>NonkiCon in Speyer</li>
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
