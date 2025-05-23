import Image from "next/image";
import { DynamicContent } from "@/components/styledComponents";

//Images
import MionImage from "/public/assets/images/yumekai2025/MION.png"; // bei Bildern muss Änderung mit ran

export default function AnkundigungMion() {
  return (
    <>
      <h2>Lasst uns MION auf der YumeKai 2025 willkommen heißen!</h2>

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
            Wir freuen uns euch ankündigen zu können, dass MION auf der
            YumeKai2025 auftreten wird! MION ist eine presigekrönte Sängerin und
            Songwriterin aus Nagoya. Aichi landete bei den Oricon Single Charts
            auf Platz 1 mit ihrem Hit &apos;Summer Magic&apos;.
            <br />
            <br />
            Als sie 16 war gewann sie den Outstanding Performance Award beim
            YAMAHA&apos;s Music Revolution Wettbewerb. Durch diesen Gewinn
            konnte MION ihre professionelle Karriere starten.
            <br />
            <br />
            In ihrer Heimat war MION bereits 10 Jahre als Sängerin und
            Songwriterin tätig. Mit 11 Solo-Singles hat MION bereits eine
            umfangreiche Erfahrung mit Live-Performances. In Japan trat sie
            bereits bei mehreren Musik-Festivals und Konzerten auf. Auch
            japanweite Touren gab es bereits.
            <br />
            <br />
            In 2022 erhielt MION ein Global Talent Visa in England.
            <br />
            <br />
            MION konnte bereits in über 20 Ländern weltweit auftreten. Umso mehr
            freuen wir uns, sie auf der YumeKai 2025 zum ersten Mal begrüßen zu
            dürfen!
            <br />
            <br />
            Bei ihrem Auftritt auf der YumeKai 2025 wird sie einen Mix aus
            eigenen Songs (J-Pop, J-Rock & Balladen) und Covern von bekannten
            Anime-Songs performen.
          </p>
        </DynamicContent>

        <DynamicContent
          $widthpercent={40} // soll 40% von der Seite einnehmen
          //$maxwidth={300}
          $align="center"
          $justify="center"
        >
          <Image
            src={MionImage}
            alt="Bild von MION" // Wird zB vom Vorlesetool vorgelesen -> immer Text
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
