import React from "react";
import Image from "next/image";
import { DynamicContent } from "@/components/styledComponents";

// Images
import stellariaShowactImage from "/public/assets/images/yumekai2026/Showact Stellaria - Stellaria Logo mit Aufschrift.png";

export default function StellariaPaletteOfDreams() {
  return (
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
        $widthpercent={35}
        $maxwidth={300}
        style={{ justifyContent: "center", alignContent: "center" }}
      >
        <Image
          src={stellariaShowactImage}
          alt="Stellaria Logo"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </DynamicContent>

      <DynamicContent $widthpercent={65}>
        <h2>Performance: Stellaria - Palette of Dreams</h2>
        <p>
          Wenn sich Farben, Magie und funkelnde Träume verweben, öffnet sich der Vorhang zu einer
          neuen Welt. Tretet ein in ein Universum, in dem jeder Moment unvergesslich wird! Mit
          ihrem neuen Konzept „Stellaria: Palette of Dreams“ erschafft Stellaria einen
          zauberhaften Kosmos, in dem Magical-Girl-Ästhetik mit Idol-Performances verschmilzt.
          Werdet Teil dieser magischen Show und lasst euch mitreißen!
          <br />
          <br />
          Euch erwartet eine Performance voller funkelnder Momente und ausdrucksstarker
          Choreographien. Selbst entworfene Idolsona-Kostüme, detailverliebte Visuals und ein
          präzises Zusammenspiel aus Licht und Bewegung formen eine Stage, die begeistert, berührt
          und zum Träumen einlädt.
          <br />
          <br />
          Von „Clear“ aus Card Captor Sakura: Clear Card bis „Umapyoi Legend“ aus Umamusume
          entfaltet sich ein abwechslungsreiches Programm, das Fans unterschiedlichster Genres
          gleichermaßen anspricht. Bringt eure Lightsticks mit und genießt eine Performance voller
          magischer Momente!
        </p>
      </DynamicContent>
    </div>
  );
}
