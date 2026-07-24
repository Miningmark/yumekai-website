import Image from "next/image";
import { DynamicContent, StyledButton, UnstyledLink } from "@/components/styledComponents";

//Images
import ballBild from "/public/assets/images/yumekai2026/mion_2.jpg";

export default function RueckblickYumekai2026() {
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
        <DynamicContent
          $widthpercent={40}
          $maxwidth={300}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Image
            src={ballBild}
            alt=" Mion YumeKai 2026"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </DynamicContent>
        <DynamicContent $widthpercent={60}>
          <h2>Rückblick: YumeKai 2026</h2>
          <p>
            Die dritte YumeKai in der Stadthalle Memmingen ist vorbei und wir blicken auf ein
            wundervolles Wochenende voller Showacts, Cosplay, Kunst und unvergesslicher Momente
            zurück.
            <br />
            <br />
            Lasst die Convention nochmal Revue passieren und werft einen Blick auf unsere Bilder
            von Ehrengästen, Cosplayern, Ausstellern, Wettbewerben und vielem mehr!
          </p>
          <UnstyledLink href="/review/yumekai-2026">
            <StyledButton>Zum Rückblick</StyledButton>
          </UnstyledLink>
        </DynamicContent>
      </div>
    </>
  );
}
