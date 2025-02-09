import Image from "next/image";

//Components
import Columns2 from "@/components/elements/Columns2";

//Images
import andyKnoteImage from "/public/assets/images/yumekai2025/Andy_Knote.png";

export default function AnkundigungAndyKnote() {
  return (
    <>
      <h2>Andy Knote auf der YumeKai 2025!</h2>
      <Columns2
        left={
          <>
            <p>
              Wir freuen uns sehr, euch bekannt geben zu dürfen, dass Andy Knote, der Schöpfer und
              Produzent vieler deutscher Anime-Openings, auf der YumeKai 2025 dabei sein wird!
              <br />
              <br />
              Als Produzent und Texter hinter den bekanntesten deutschen Anime-Openings hat Andy
              Knote zusammen mit den Anime Allstars zahlreiche unvergessliche Melodien für Serien
              wie „One Piece“, „Digimon“ und viele mehr erschaffen. Mit über 15 Jahren Erfahrung in
              der Anime-Musikszene hat er über 25 Alben für bekannte Anime-Serien produziert und
              unzählige Episoden-Songs beigesteuert.
              <br />
              <br />
              Lasst euch diese Gelegenheit nicht entgehen, den kreativen Kopf hinter euren
              Lieblings-Openings live zu erleben!
            </p>
          </>
        }
        right={
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100%", maxWidth: "400px", height: "auto" }}>
                <Image
                  src={andyKnoteImage}
                  alt="Bild Andy Knote"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </>
        }
      />
    </>
  );
}
