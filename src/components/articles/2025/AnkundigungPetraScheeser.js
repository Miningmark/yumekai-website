import Image from "next/image";

//Components
import Columns2 from "@/components/elements/Columns2";

//Images
import petraScheeserImage from "/public/assets/images/yumekai2025/Petra_Scheeser.png";

export default function AnkundigungPetraScheeser() {
  return (
    <>
      <h2>🎉 Petra Scheeser auf der YumeKai 2025! 🎤✨</h2>
      <Columns2
        left={
          <>
            <p>
              Wir freuen uns riesig, euch eine ganz besondere Ankündigung machen zu dürfen: Petra
              Scheeser, die bekannte und talentierte Stimme hinter zahlreichen Anime- und
              Serienintros, wird Teil der YumeKai 2025 sein und euch mit einem einzigartigen
              Auftritt verzaubern!
              <br />
              <br />
              Erlebt die Stimme hinter den Openings von Winx Club, Sailor Moon, Digimon, Ranma ½ und
              vielen weiteren Klassikern. Lasst euch von diesen legendären Anime- und
              Serien-Openings in Gänsehaut-Momente versetzen! 🌟
              <br />
              <br />
              Freut euch auf spannende Einblicke in Petras beeindruckende Arbeit, eine Signierstunde
              und die Möglichkeit, sie live auf unserer Bühne zu erleben. Markiert euch die YumeKai
              dick im Kalender – dieses Highlight dürft ihr auf keinen Fall verpassen!
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
                  src={petraScheeserImage}
                  alt="Petra Scheeser"
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
