import Image from "next/image";
import { StyledLink, DynamicContent } from "@/components/styledComponents";

//Images
import MayumiNagashi from "/public/assets/images/yumekai2025/MayumiNagashi.jpg"; // bei Bildern muss Änderung mit ran

export default function AnkundigungMayumiNagashi() {
  return (
    <>
      <h2>🖌 Mayumi Nagashi auf der YumeKai 2025 🖌</h2>

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
            src={MayumiNagashi}
            alt="Mayumi Nagashi" // Wird zB vom Vorlesetool vorgelesen -> immer Text
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </DynamicContent>

        <DynamicContent $widthpercent={75}>
          {/* Muss mit oberer übereinstimmen */}
          <p>
            Manga zu lesen macht Spaß – aber wie oft bekommt ihr die
            Gelegenheit, einen Blick in das echte Arbeitsumfeld einer
            Manga-Künstlerin zu werfen? Die „Manga-Werkstatt“ bringt dieses
            seltene Erlebnis mitten ins Eventgeschehen.
            <br />
            <br />
            Die japanische Profi-Zeichnerin Mayumi Nagashi lässt euch zuschauen,
            wie ihre Zeichnungen entstehen – präzise, sicher und voller
            Ausdruck.
            <br />
            <br />
            Tafeln am Stand liefern zusätzliche Einblicke in ihre Werke, ihren
            Stil und den kreativen Prozess.
            <br />
            <br />
            Für Zeicheninteressierte bietet sich außerdem eine persönliche
            Beratung – nicht in Worten, sondern in Linien (eigene Zeichnungen
            sind mitzubringen). Ein Moment der Konzentration – vergänglich, und
            doch unvergesslich.
            <br />
            <br />
            <br />
            <br />
            Bild: ©Mayumi Nagashi/Cygames,Inc
          </p>
        </DynamicContent>
      </div>
    </>
  );
}
