import Image from "next/image";
import { DynamicContent } from "@/components/styledComponents";

//Images
import hiruImage from "/public/assets/logo/Hiru-Handy.webp";

export default function AnkundigungYumekai2027() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <DynamicContent $widthpercent={60}>
          <h2>Save the Date: YumeKai 2027</h2>
          <p>
            Der Termin für die nächste YumeKai steht fest: Am <strong>21. und 22. August 2027</strong>{" "}
            laden wir euch wieder zu einem Wochenende voller Cosplay, Kunst, Showacts und
            unvergesslicher Momente ein.
            <br />
            <br />
            Tragt euch das Datum schon mal im Kalender ein – weitere Infos folgen in Kürze!
          </p>
        </DynamicContent>
        <DynamicContent
          $widthpercent={40}
          $maxwidth={300}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Image
            src={hiruImage}
            alt="Maskottchen Hiru mit Handy"
            sizes="(max-width: 800px) 90vw, 300px"
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
