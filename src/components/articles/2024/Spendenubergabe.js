import Image from "next/image";

//Components
import Columns2 from "@/components/elements/Columns2";
import { StyledButton, UnstyledLink } from "@/components/styledComponents";

//Images
import spendenubergabeImage from "/public/assets/images/yumekai-night-2-2024/Spendenubergabe_CoHeKi.jpg";

export default function Spendenubergabe() {
  return (
    <>
      <h2>Spendenübergabe mit CoHeKi</h2>
      <Columns2
        left={
          <>
            <p>
              Auf der YumeKai 2024 konnte der CoHeKi e. V. eine stolze Summe von 1.555 € für einen
              guten Zweck sammeln. 🌟
              <br />
              <br />
              Der Check wurde Linda Fremuth, der ersten Vorsitzenden der Nierenkinder Memmingen, auf
              der YumeKai-Night übergeben.
              <br />
              <br />
              Wir freuen uns riesig, dass solch ein Betrag auf der YumeKai gesammelt werden konnte
              und dieses Geld nun für die Unterstützung von nierenkranken Kindern verwendet werden
              kann!
              <br />
              <br />
              Danke an alle die dazu beigetragen haben! ❤️‍🩹
            </p>
          </>
        }
        right={
          <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "80%", height: "auto" }}>
                <Image
                  src={spendenubergabeImage}
                  alt="Spendenübergabe mit CoHeKi"
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
