import Image from "next/image";

//Components
import Columns2 from "@/components/elements/Columns2";

//Images
import dominikAuerImage from "/public/assets/images/yumekai2025/Dominik_Auer.png";
import dominikAuerCharImage from "/public/assets/images/yumekai2025/Dominik_Auer_Char.png";

export default function AnkundigungDominikAuer() {
  return (
    <>
      <h2>🎤 Dominik Auer auf der YumeKai 2025! 🌟</h2>
      <Columns2
        left={
          <>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              <div style={{ width: "48%", height: "auto" }}>
                <Image
                  src={dominikAuerImage}
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
                  src={dominikAuerCharImage}
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
        right={
          <>
            <p>
              Als nächsten Special Guest für die YumeKai 2025 freuen wir uns, euch Dominik Auer
              ankündigen zu dürfen!
              <br />
              <br />
              Dominik Auer ist ein Synchronsprecher aus der Region und bekannt für seine
              vielseitigen Rollen, unter anderem als Inuyasha, Samwell Tarly aus Game of Thrones und
              Tuxedo Mask aus Sailor Moon. 💫 Außerdem leiht er auch Tsuchigomori aus Toilet-Bound
              Hanako-kun und vielen weiteren Charakteren seine Stimme.
            </p>
          </>
        }
      />
    </>
  );
}
