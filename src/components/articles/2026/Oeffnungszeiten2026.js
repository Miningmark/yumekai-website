import Image from "next/image";
import styled from "styled-components";

//Images
import hiruPlanImage from "/public/assets/hirus/Hiru_Plan.png";
import hiruTicketImage from "/public/assets/hirus/Hiru_Ticket.png";

const DynamicContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ $widthpercent }) => `calc(${$widthpercent}% - 10px)`};
  ${({ $maxwidth }) => $maxwidth && `max-width: ${$maxwidth}px;`}

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const InfoBox = styled.div`
  background: var(--primary-transparent-color, rgba(233, 48, 11, 0.08));
  border-radius: 10px;
  padding: 15px 20px;
  margin-bottom: 10px;
`;

export default function Oeffnungszeiten2026() {
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
          $widthpercent={25}
          $maxwidth={250}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Image
            src={hiruPlanImage}
            alt="Hiru mit Plan"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </DynamicContent>
        <DynamicContent $widthpercent={50}>
          <h2>Öffnungszeiten der YumeKai 2026</h2>
          <InfoBox>
            <p style={{ margin: 0 }}>
              <strong>Samstag, 09.05.2026:</strong> 10:00 - 21:00 Uhr
              <br />
              <strong>Sonntag, 10.05.2026:</strong> 10:00 - 18:00 Uhr
            </p>
          </InfoBox>
          <p>
            <strong>Ort:</strong> Stadthalle Memmingen & Maximilian-Kolbe-Haus
          </p>
          <InfoBox>
            <p style={{ margin: 0 }}>
              <strong>Cosplayball:</strong> Samstag, 19:00 - 23:30 Uhr
              <br />
              Im großen Saal in der Stadthalle
            </p>
          </InfoBox>
          <p>
            Wir freuen uns auf ein tolles Wochenende mit euch!
          </p>
        </DynamicContent>
        <DynamicContent
          $widthpercent={25}
          $maxwidth={250}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Image
            src={hiruTicketImage}
            alt="Hiru mit Ticket"
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
