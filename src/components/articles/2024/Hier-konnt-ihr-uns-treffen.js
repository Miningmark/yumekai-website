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
                    <li>09.05 - 10.05 YumeKai in Memmingen</li>
                    <li>16.05 - 17.05 NonkiCon in Speyer</li>
                    <li>23.05 - 24.05 Hana & Spring in Königsbrunn</li>
                    <li>06.06 - 07.06 PopCon in Lindau</li>
                    <li>13.06 - 14.06 Wie.Mai.Kai in Flörsheim</li>
                    <li>04.07 - 05.07 ConUtopisch in Seefeld in Tirol</li>
                    <li>18.09 - 20.09 Gamesvention in Kempten</li>
                  </ul>
                </>
              }
              backContent={
                <>
                  <h3>Hier waren wir:</h3>
                  <ul>
                    <li>Mini Con in Lustenau</li>
                    <li>Hana und Spring in Königsbrunn</li>
                    <li>NonkiCon in Speyer</li>
                    <li>WieMaiKai in Flörsheim</li>
                    <li>Loricon in Seefeld</li>
                    <li>Cosday² in Frankfurt</li>
                    <li>Techniktreffen in Speyer</li>
                    <li>Cosplay & Game in Bludenz</li>
                    <li>Yayuco in Dachau</li>
                    <li>ComicCon in Stuttgart</li>
                    <li>Manganacht in Memmingen</li>
                    <li>ComicCon in Dornbirn</li>
                    <li>Gamesvention in Kempten</li>
                    <li>Mishiro in Augsburg</li>
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
