import styled from "styled-components";
import Image from "next/image";

//Components
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";

//Images
import hiruPlanImage from "/public/assets/hirus/Hiru_Plan.png";
import hiruTicketImage from "/public/assets/hirus/Hiru_Ticket.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 600px;
  background: linear-gradient(45deg, #ff1f1f63, #ffffff00);

  @media (max-width: 800px) {
    height: 400px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  max-width: 90%;
  height: 100%;
  position: relative;
`;

const Headline = styled.p`
  font-size: 2.5rem;
  color: var(--primary-color);
  font-weight: bold;
  margin-bottom: 5px;

  @media (max-width: 800px) {
    font-size: 2rem;
    margin: 10px 0 0 0;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  flex: 1;

  @media (max-width: 800px) {
    gap: 15px;
  }
`;

const ImageContainer = styled.div`
  height: 280px;
  display: flex;
  align-items: flex-end;

  @media (max-width: 800px) {
    height: 150px;

    &:last-child {
      display: none;
    }
  }

  @media (max-width: 500px) {
    height: 110px;
  }
`;

const TimeTable = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 1.2rem;

  @media (max-width: 800px) {
    font-size: 0.9rem;
    gap: 4px;
  }

  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;

const TimeEntry = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 31, 31, 0.1);
  border-radius: 10px;
  padding: 8px 20px;

  @media (max-width: 800px) {
    padding: 5px 12px;
  }
`;

const Location = styled.p`
  font-size: 1.1rem;
  margin: 5px 0;

  @media (max-width: 800px) {
    font-size: 0.85rem;
    margin: 3px 0;
  }
`;

export default function Slide4() {
  return (
    <Wrapper>
      <Content>
        <Headline>Öffnungszeiten YumeKai 2026</Headline>
        <InfoRow>
          <ImageContainer>
            <Image
              src={hiruPlanImage}
              alt="Hiru mit Plan"
              style={{
                width: "auto",
                height: "100%",
              }}
            />
          </ImageContainer>
          <TimeTable>
            <TimeEntry>
              <strong>Samstag, 09.05.</strong>
              10:00 - 21:00 Uhr
            </TimeEntry>
            <TimeEntry>
              <strong>Sonntag, 10.05.</strong>
              10:00 - 18:00 Uhr
            </TimeEntry>
            <TimeEntry>
              <strong>Cosplayball Sa.</strong>
              19:00 - 23:30 Uhr
            </TimeEntry>
            <Location>Stadthalle Memmingen & Maximilian-Kolbe-Haus</Location>
          </TimeTable>
          <ImageContainer>
            <Image
              src={hiruTicketImage}
              alt="Hiru mit Ticket"
              style={{
                width: "auto",
                height: "100%",
              }}
            />
          </ImageContainer>
        </InfoRow>
        <div style={{ marginBottom: "20px" }}>
          <StyledLinkAsButton href="/shop">Zum Ticketshop</StyledLinkAsButton>
        </div>
      </Content>
    </Wrapper>
  );
}
