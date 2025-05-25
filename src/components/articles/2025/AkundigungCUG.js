import Image from "next/image";
import { DynamicContent } from "@/components/styledComponents";

//Images
import CUG_LogoImage from "/public/assets/images/yumekai2025/CUG_Logo.png"; // bei Bildern muss Änderung mit ran

export default function AnkundigungCUG() {
  return (
    <>
      <h2>🍀 Es stellt sich vor: Cosplay Union Germany! 🍀</h2>

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
          {/* Muss mit oberer übereinstimmen */}
          <p>
            Cosplay Union Germany ist eine Vereinigung von Fans, die versuchen,
            originalgetreue Kostüme aus dem Science-Fiction oder
            Fantasy-Universum zu bauen, egal aus welchem Genre.
            <br />
            <br />
            Das Ziel von Cosplay Union ist es, mit authentischen Kostümen auf
            verschiedenen Veranstaltungen ein Highlight zu sein und für große
            Augen und Begeisterung bei kleinen und großen Fans zu sorgen.
          </p>
        </DynamicContent>

        <DynamicContent
          $widthpercent={40} // soll 40% von der Seite einnehmen
          //$maxwidth={300}
          $align="center"
          $justify="center"
        >
          <Image
            src={CUG_LogoImage}
            alt="Cosplay Union Germany Logo" // Wird zB vom Vorlesetool vorgelesen -> immer Text
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
