import styled from "styled-components";
import Image from "next/image";

//logos
import hiruWorkshop from "/public/assets/logo/Hiru-Workshop.webp";

const DynamicContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ $widthpercent }) => `calc(${$widthpercent}% - 10px)`};
  ${({ $maxwidth }) => $maxwidth && `max-width: ${$maxwidth}px;`}

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export default function AnkundigungYumeKai2025() {
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
        <DynamicContent $widthpercent={65}>
          <h2>🚀 Großartige Neuigkeiten! 🚀</h2>
          <p>
            Die Planungen für die <strong>YumeKai 2025</strong> sind in vollem Gange, und wir
            arbeiten hart daran, das Event noch spektakulärer zu machen! Freut euch auf mehr
            Showacts, mehr Aussteller, mehr spannende Workshops und natürlich hochkarätige Gäste!
            <br />
            <br />
            Der Ticket-Vorverkauf startet schon bald – seid schnell und sichert euch rechtzeitig
            eure Tickets für die zweite YumeKai in Memmingen! Dieses Mal sind wir nicht nur in der
            Stadthalle, sondern auch im Maximilian-Kolbe-Haus vertreten.
            <br />
            <br /> Wir können es kaum erwarten, euch auf der YumeKai 2025 wiederzusehen!
          </p>
        </DynamicContent>
        <DynamicContent
          $widthpercent={35}
          $maxwidth={300}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Image
            src={hiruWorkshop}
            alt="Bild von Hiru"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </DynamicContent>
      </div>
    </>
  );
}
