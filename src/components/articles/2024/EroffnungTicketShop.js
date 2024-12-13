import styled from "styled-components";
import Image from "next/image";

//logos
import hiruTicket from "/public/assets/logo/Hiru-Ticket.webp";
import { StyledLink } from "@/components/styledComponents";

const DynamicContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ $widthpercent }) => `calc(${$widthpercent}% - 10px)`};
  ${({ $maxwidth }) => $maxwidth && `max-width: ${$maxwidth}px;`}

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export default function EroffnungTicketShop() {
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
        <DynamicContent $widthpercent={60}>
          <h2>YumeKai 2025 Tickets</h2>
          <p>
            Der <StyledLink href="/shop">Ticketshop</StyledLink> für die YumeKai 2025 öffnet in
            wenigen Tagen! Freut euch darauf, eure Tickets für das nächste große Event zu sichern.
            <br />
            <br /> Besonders lohnenswert: Wer sich frühzeitig entscheidet, hat die Möglichkeit,
            vergünstigte Early-Bird-Tickets zu ergattern.
          </p>
        </DynamicContent>
        <DynamicContent
          $widthpercent={40}
          $maxwidth={300}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Image
            src={hiruTicket}
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
