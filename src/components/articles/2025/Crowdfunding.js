import Image from "next/image";
import {DynamicContent } from "@/components/styledComponents";
import { StyledLink } from "@/components/styledComponents";

//Images
import HiruImage from "/public/assets/hirus/Hiru_Support_25.png";

export default function Crowdfunding() {
  return (
    <>
      <h2>YumeKai-Crowdfunding</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent
          $widthpercent={25} // soll 40% von der Seite einnehmen
          //  $maxwidth={300}
          $align="center"
          $justify="center"
        >
          <Image
            src={HiruImage}
            alt="Crowdfunding Hiru"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </DynamicContent>

        <DynamicContent $widthpercent={75}>
          {/* Muss mit oberer übereinstimmen */}
          <h3>Hilf mit, die YumeKai 2026 Wirklichkeit werden zu lassen!</h3>
         <p>Die YumeKai 2026 braucht deine Unterstützung! Wir sind auf einem spannenden Crowdfunding-Trip, um dieses einzigartige Event zu realisieren.
        <br/><br/>
            Bis zum 31. Dezember 2025 kannst du uns auf  <StyledLink href="/shop" target="_blank">
              YumeKai-Crowdfunding
            </StyledLink> unterstützen und dafür tolle Belohnungen.
            <br/><br/>
            Jede Spende, egal wie klein, bringt uns näher an unser Ziel. Werde Teil der YumeKai-Community und hilf uns, ein unvergessliches Erlebnis zu schaffen!</p>

        </DynamicContent>
      </div>
    </>
  );
}
