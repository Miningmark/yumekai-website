import Image from "next/image";

//Components
import Columns2 from "@/components/elements/Columns2";

//Images
import maidCafeImage from "/public/assets/images/yumekai2025/maid_cafe.png";

export default function AnkundigungMaidCafe() {
  return (
    <>
      <h2>🌸Herzlich Willkommen zum Vivid Arise Maid Café!🌸</h2>
      <Columns2
        left={
          <>
            <p>
              Taucht ein in eine Welt voller Magie und Charme!
              <br />
              <br />
              Liebe Freunde und Besucher der Yumekai in Memmingen, wir laden euch herzlich ein, das
              einzigartige Erlebnis unseres Maid Cafés zu genießen. Unser Team von Vivid Arise freut
              sich darauf, euch mit einem Lächeln zu empfangen und einen unvergesslichen Aufenthalt
              zu gestalten.
              <br />
              <br />
              Erlebt eine zauberhafte Pause:
              <br />
              <br />
              🌸 Exklusive Themen-Speisen und Getränke – Genießt liebevoll zubereitete Leckereien
              und erfrischende Getränke, die ihr nirgendwo anders findet.
              <br />
              🌸 Interaktive Spiele und Unterhaltung – Nehmt teil an lustigen Aktivitäten und lasst
              euch von unseren Maids in Spielen herausfordern.
              <br />
              🌸 Fotogelegenheiten – Verewigt eure Erinnerungen mit unseren Maids in einem süßen
              oder witzigen Foto.
              <br />
              <br />
              Verpasst nicht die Chance, Teil dieser bezaubernden Erfahrung zu sein. Wir sind
              bereit, jeden Gast mit Freude und einem persönlichen Touch zu verwöhnen. Kommt vorbei
              und lasst euch verzaubern!
              <br />
              Macht euch bereit für süße Überraschungen und eine herzliche Atmosphäre – wir sehen
              uns im Vivid Arise Maid Café!
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
                  src={maidCafeImage}
                  alt="Logo von Maid Cafe"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                    backgroundColor: "#202020",
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
