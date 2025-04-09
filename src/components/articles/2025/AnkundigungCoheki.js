import Image from "next/image";
import { StyledLink, DynamicContent } from "@/components/styledComponents";

//Images
import CohekiImage from "/public/assets/images/sponsors/CoHeKi.png"; // bei Bildern muss Änderung mit ran

export default function AnkundigungCoheki() {
  return (
    <>
      <h2>CoHeKi e.V. - Cosplayer Helfen Kinder</h2>

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
          $widthpercent={40} // soll 40% von der Seite einnehmen
          //$maxwidth={300}
          $align="center"
          $justify="center"
        >
          <Image
            src={CohekiImage}
            alt="CoHeKi e.V. Logo" // Wird zB vom Vorlesetool vorgelesen -> immer Text
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </DynamicContent>

        <DynamicContent $widthpercent={60}>
          {/* Muss mit oberer übereinstimmen */}
          <p>
            Freudig können wir verkünden, dass der CoHeKi e.V. auch dieses Jahr
            wieder Teil der YumeKai sein wird. 💚
            <br />
            <br />
            Der CoHeKi e.V. ein mildtätiger Verein, bestehend aus hauptsächlich
            Cosplayern, also Menschen die sich z.B. als Charaktere aus
            Kinofilmen und Comics verkleiden und deren Ziel es unter anderem
            ist, Kindern ein Lächeln ins Gesicht zu zaubern. Ihr Ziel ist es,
            gemeinsam mit eurer Unterstützung auf verschiedenen Veranstaltungen
            Spenden zu sammeln. Diese leiten sie an gemeinnützige Organisationen
            weiter, wie der Hilfe für krebskranke Kinder Frankfurt e.V. oder dem
            Frühstart ins Leben e.V. aus München.{" "}
            <StyledLink
              href="https://www.instagram.com/coheki_ev/"
              target="_blank"
            >
              @coheki_ev
            </StyledLink>
          </p>
        </DynamicContent>
      </div>
    </>
  );
}
