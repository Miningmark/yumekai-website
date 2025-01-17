import Image from "next/image";

//Components
import Columns2 from "@/components/elements/Columns2";

//Images
import juliaMeyenImage from "/public/assets/images/yumekai2025/Julia_Meynen.jpg";
import juliaMeyenChar1Image from "/public/assets/images/yumekai2025/Julia_Meynen_Char1.png";

export default function AnkundigungJuliaMeyen() {
  return (
    <>
      <h2>Endlich ist es soweit!</h2>
      <Columns2
        left={
          <>
            <p>
              Als unseren ersten Special Guest für die YumeKai 2025 freuen wir uns euch Julia Meynen
              vorstellen zu dürfen!
              <br />
              <br />
              Julia Meynen ist unter anderem für ihre Rollen als Nezuko, Ayumi Yoshida und D.Va
              bekannt. 🌟 Außerdem leiht sie auch Leafa aus Sword Art Online oder Yui Hirasawa aus
              K-ON ihre Stimme, und noch vielen mehr!
            </p>
          </>
        }
        right={
          <>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <div style={{ width: "48%", height: "auto" }}>
                <Image
                  src={juliaMeyenImage}
                  alt="Julia Meyen"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div style={{ width: "48%", height: "auto" }}>
                <Image
                  src={juliaMeyenChar1Image}
                  alt="Julia Meyen"
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
