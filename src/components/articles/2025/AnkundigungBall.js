import Image from "next/image";
import { StyledLink } from "@/components/styledComponents";
import styled from "styled-components";

//Images
import hiruBallImage from "/public/assets/hirus/Hiru_Ball.png";

const DynamicContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ $widthpercent }) => `calc(${$widthpercent}% - 10px)`};
  ${({ $maxwidth }) => $maxwidth && `max-width: ${$maxwidth}px;`}

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export default function AnkundigungBall() {
  return (
    <>
      <h2>⭐️ Einladung zum YumeKai-Cosplay-Ball ⭐️</h2>
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
            src={hiruBallImage}
            alt="Hiru mit Ballkleid"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </DynamicContent>
        <DynamicContent $widthpercent={60}>
          <p>
            Am 31. Mai 2025 ist es so weit, erstmalig bieten wir euch am Samstagabend einen
            Cosplayball an! Taucht in eine festliche Nacht ein, bei der beeindruckende Cosplays auf
            den festlichen Ballflair treffen. 💃✨
            <br />
            <br />
            Der Ball bietet nicht nur die perfekte Gelegenheit um Ballkleider zu tragen oder eurer
            Kreativität freien Lauf zu lassen bei der Erstellung eines aufwendigen Cosplay. Denn
            hier steht Spaß und Gemeinsamkeit im Vordergrund. Und wer würde nicht gerne mal mit dem
            Lieblingscharakter aus einem Anime tanzen? 🎶
            <br />
            <br />
            Auch in unseren Workshops werden wir auf das Thema Tanz, Ball und in diesem Zusammenhang
            Cosplays eingehen. Vor Ort werden wir auch einen Fotopoint haben, damit ihr eure
            unvergesslichen Momente festhalten könnt! 📸
            <br />
            <br />
            Der Ball beginnt um 19 Uhr und geht bis 23 Uhr, er wird in zwei Hälften unterteilt,
            einen klassischen Tanzball zu Beginn und eine Disco im Anschluss.
            <br />
            <br />
            Bitte achtet auf den Dresscode, da wir für jeden einen angenehmen Abend schaffen wollen.
            <br />
            <br />
            Die genauen Vorgaben für euer Ballgewand findet ihr hier:{" "}
            <StyledLink href="/downloads/Ball_Regeln.pdf" target="_blank">
              Ballregeln
            </StyledLink>
          </p>
        </DynamicContent>
      </div>
    </>
  );
}
