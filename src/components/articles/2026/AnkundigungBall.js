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
          <h2>⭐️ Einladung zum YumeKai-Cosplay-Ball ⭐️</h2>
          <p>
            Am 09.05.2026 ist es wieder so weit: Unser Cosplayball geht in die nächste Runde!
            <br />
            Taucht mit uns ein in eine festliche Nacht, in der beeindruckende Cosplays auf eleganten
            Ballflair treffen. Ob prachtvolles Ballkleid, detailverliebtes Cosplay oder eine
            kreative Mischung aus beidem, hier stehen Spaß und Gemeinschaft im Mittelpunkt.
            <br />
            <br />
            Freut euch auch in diesem Jahr auf ganz besondere Highlights: Ein Live-Konzert mit dem
            Cellotic Duets, welche den Ballabend musikalisch begleiten und für eine einzigartige
            Atmosphäre sorgen! Im Anschluss übernimmt ein DJ und verwandelt den Ball in eine Disco,
            um den Abend perfekt ausklingen zu lassen.
            <br />
            <br />
            Natürlich wird es auch wieder einen Fotopoint geben, an dem ihr eure unvergesslichen
            Momente festhalten könnt.
            <br />
            <br />
            Für den Ball wird ein separates Ticket benötigt, welches 10€ kostet und sowohl online,
            als auch Tageskasse gekauft werden kann.*
            <br />
            <StyledLink href="/shop" target="_blank">
              zum Ticketshop
            </StyledLink>
            <br />
            <br />
            Beginn: 19:00 Uhr
            <br />
            Ende: 23:30 Uhr
            <br />
            Ort: Großer Saal in der Stadthalle
            <br />
            <br />
            Bitte achtet auf unseren Dresscode, damit wir gemeinsam eine stimmige und angenehme
            Atmosphäre für den Ball schaffen können. Die genauen Vorgaben für euer Ballgewand findet
            ihr hier:{" "}
            <StyledLink href="/downloads/Cosplay_Ball_Dresscode_2026.pdf" target="_blank">
              Ballregeln
            </StyledLink>
            <br />
            <br />
            Wir freuen uns auf einen unvergesslichen Abend mit euch!
            <br />
            <br />
            <span style={{ fontSize: "0.7rem", color: "inherit" }}>
              *Für alle Austeller/Künstler/Händler und Helfenden der YumeKai gibt es zudem die
              Möglichekit auf ein reduziertes Ballticket (5€) an der Tageskasse!
            </span>
          </p>
        </DynamicContent>
      </div>
    </>
  );
}
