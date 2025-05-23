import Image from "next/image";
import {DynamicContent } from "@/components/styledComponents";

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
  Manga zu lesen macht Spaß – aber wie oft bekommt man die Gelegenheit, hinter die Kulissen einer professionellen Manga-Produktion zu blicken? Die &quot;Manga-Werkstatt&quot; bringt genau dieses Erlebnis direkt ins Event.
  <br /><br />
  Die japanische Profi-Zeichnerin Mayumi Nagashi zeigt live, wie ihre Zeichnungen entstehen – präzise, ausdrucksstark und mit sicherer Hand. 
  <br /><br />
  Infotafeln am Stand geben zusätzliche Einblicke in ihren Zeichenstil, ihre Werke und ihren kreativen Arbeitsprozess – anschaulich und inspirierend.
  <br /><br />
  Für alle, die selbst zeichnen, bietet sich ein besonderes Extra: individuelle Zeichenberatung – nicht durch Worte, sondern direkt durch Linien. Eigene Skizzen können mitgebracht und von ihr persönlich begutachtet werden. 
  <br /><br />
  Ein einzigartiger Moment kreativen Austauschs – kurzlebig, aber unvergesslich.
  <br /><br /><br /><br />
  Bild: &copy;Mayumi Nagashi / Cygames, Inc.
</p>

        </DynamicContent>
      </div>
    </>
  );
}
