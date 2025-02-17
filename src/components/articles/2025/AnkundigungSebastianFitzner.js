import Image from "next/image";

//Components
import Columns2 from "@/components/elements/Columns2";

//Images
import sebastianFitznerImage from "/public/assets/images/yumekai2025/Sebastian_Fitzner.png";
import sebastianFitznerCharImage from "/public/assets/images/yumekai2025/Sebastian_Fitzner_Char.png";

export default function AnkundigungSebastianFitzner() {
  return (
    <>
      <h2>🎤 Sebastian Fitzner auf der YumeKai 2025! 🌟</h2>
      <Columns2
        left={
          <>
            <p>
              Wir freuen uns sehr, Sebastian Fitzner als Special Guest für die YumeKai 2025
              anzukündigen!
              <br />
              <br />
              Sebastian ist die Stimme von vielen beliebten Anime- und Filmcharakteren. Ihr kennt
              ihn als Deku aus My Hero Academia, Laios aus Delicious in Dungeon, und Ciel
              Phantomhive aus Black Butler – um nur einige seiner vielen großartigen Rollen zu
              nennen!
              <br />
              <br />
              Außerdem leiht er seine Stimme Ned Leeds, dem besten Freund von Spider-Man, Ray aus
              The Promised Neverland, Hodaka Morishima aus Weathering With You, Bolin aus The Legend
              of Korra, Atsushi Nakajima aus Bungo Stray Dogs und noch viele viele weitere ikonische
              Charaktere!
            </p>
          </>
        }
        right={
          <>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <div style={{ width: "48%", height: "auto" }}>
                <Image
                  src={sebastianFitznerImage}
                  alt="Sabastian Fitzner"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div style={{ width: "48%", height: "auto" }}>
                <Image
                  src={sebastianFitznerCharImage}
                  alt="Deku aus My Hero Academia"
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
