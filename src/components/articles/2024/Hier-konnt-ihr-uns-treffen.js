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
                  <h2>Hier könnt ihr uns treffen:</h2>
                  <ul>
                    <li>18.09 - 20.09 Gamesvention in Kempten</li>
                    <li>19.09 - 20.09 Mini Con in Rankweil</li>
                    <li>26.09 - 27.09 Techniktreffen in Speyer</li>
                    <li>28.11 - 29.11 ComicCon in Stuttgart</li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <h2>Hier waren wir:</h2>
                  <ul>
                    <li>Cosplay & Game in Bludenz</li>
                    <li>Yayuco in Dachau</li>
                    <li>ComicCon in Stuttgart</li>
                    <li>Manganacht in Memmingen</li>
                    <li>ComicCon in Dornbirn</li>
                    <li>Gamesvention in Kempten</li>
                    <li>Mishiro in Augsburg</li>
                    <li>NonkiCon in Speyer</li>
                    <li>Hana & Spring in Königsbrunn</li>
                    <li>PopCon in Lindau</li>
                    <li>Wie.Mai.Kai in Flörsheim</li>
                    <li>Gamers Heaven Tirol in Telfs</li>
                    <li>Cosday² in Frankfurt</li>
                    <li>ConUtopisch in Seefeld in Tirol</li>
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
                  sizes="(max-width: 800px) 60vw, 300px"
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
