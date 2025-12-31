import Image from "next/image";
import { DynamicContent } from "@/components/styledComponents";

//Components
import { StyledLink } from "@/components/styledComponents";

//Images
import ArtHiruImage from "/public/assets/hirus/Hiru_Kunstler.png";

export default function YumeKaiZeichenwettbewerb26() {
  return (
    <>
      <h2>YumeKai Zeichenwettbewerb - Yumeko Worldwide</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent $widthpercent={70}>
          {/* Muss mit oberer übereinstimmen */}
          <p>
            Hey, du hast diese unglaubliche Kreativität in dir? Perfekt! Wie wäre es, wenn du unser
            Maskottchen Yumeko in deiner Nationalität neu zum leben erweckst?
            <br />
            <br />
            Lass deiner Fantasie freien Lauf! Ob du Yumeko als Genderbend darstellst, in
            alternativen Stilen experimentierst oder in einem völlig anderen Genre platzierst –
            alles ist erlaubt, solange Yumeko immer noch erkennbar ist. Wir sind super gespannt
            darauf, was du zauberst! Also schnapp dir deine Lieblingsstifte oder öffne dein
            Grafiktablett – und lass Yumeko in deiner Kreativität neu erstrahlen!
            <br />
            <br />
            Mehr Informationen zu Yumeko findest du unter folgendem Link:{" "}
            <StyledLink href="https://yumekai.de/maskottchen" target="_blank">
              yumekai.de/maskottchen
            </StyledLink>
            <br />
            <br />
            <StyledLink
              href="/downloads/Teilnahmebedingungen_Zeichenwettbewerb_2026.pdf"
              target="_blank"
            >
              Teilnahmebedingungen für den Zeichenwettbewerb
            </StyledLink>
            <br />
            <br />
            <StyledLink href="/registration/artcontest" target="_blank">
              Anmeldeformular für den Zeichenwettbewerb
            </StyledLink>
          </p>
        </DynamicContent>

        <DynamicContent
          $widthpercent={30} // soll 40% von der Seite einnehmen
          //$maxwidth={300}
          $align="center"
          $justify="center"
        >
          <Image
            src={ArtHiruImage}
            alt="Bild von Hiru Künstler"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </DynamicContent>
      </div>
    </>
  );
}
