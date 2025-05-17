import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";

//Images
import hiruImage from "/public/assets/hirus/Hiru.png";

function getTimeRemaining(finalDate) {
  const targetTime = finalDate instanceof Date ? finalDate.getTime() : Date.parse(finalDate);
  const total = targetTime - Date.now();

  if (total <= 0) {
    return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  return { total, days, hours, minutes, seconds };
}

function padZero(num, length = 2) {
  return String(num).padStart(length, "0");
}

export default function CounterClock({ finalDate, imageURL = hiruImage, headline = "" }) {
  const [timeLeft, setTimeLeft] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const update = () => setTimeLeft(getTimeRemaining(finalDate));
    update();

    const timer = setInterval(() => {
      update();
    }, 1000);

    return () => clearInterval(timer);
  }, [finalDate]);

  if (!isClient || !timeLeft) return null;

  return (
    <Container>
      <ClockWrapper>
        <Wrapper>
          <Headline>{headline}</Headline>
          <Time>
            <TimeBlock>
              <TimeNumber>{padZero(timeLeft.days, 3)}</TimeNumber>
              <TimeLabel>Tage</TimeLabel>
            </TimeBlock>
            <Colon>:</Colon>
            <TimeBlock>
              <TimeNumber>{padZero(timeLeft.hours)}</TimeNumber>
              <TimeLabel>Stunden</TimeLabel>
            </TimeBlock>
            <Colon>:</Colon>
            <TimeBlock>
              <TimeNumber>{padZero(timeLeft.minutes)}</TimeNumber>
              <TimeLabel>Minuten</TimeLabel>
            </TimeBlock>
            <Colon>:</Colon>
            <TimeBlock>
              <TimeNumber>{padZero(timeLeft.seconds)}</TimeNumber>
              <TimeLabel>Sekunden</TimeLabel>
            </TimeBlock>
          </Time>
        </Wrapper>

        {imageURL && (
          <ImageWrapper>
            <Image
              src={imageURL}
              alt="Clock Image"
              fill
              style={{ objectFit: "contain", maxHeight: "200px" }}
              priority
            />
          </ImageWrapper>
        )}
      </ClockWrapper>
    </Container>
  );
}

// Styled Components

const Container = styled.div`
  background-color: var(--secondary-color);
  padding: 2rem;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 800px) {
    padding: 1rem;
  }

  @media (max-width: 400px) {
    padding: 0.5rem;
  }
`;

const Wrapper = styled.div`
  flex: 0 0 66%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    flex: 0 0 100%;
  }
`;

const Headline = styled.h3`
  font-size: clamp(1.2rem, 4vw, 2rem);
  margin-bottom: 1.5rem;
  text-align: center;
  color: #363537;
`;

const ClockWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;

const TimeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #363537;
`;

const TimeNumber = styled.span`
  font-size: clamp(1rem, 5vw, 5rem);
  font-weight: bold;
  min-width: 40px;
  text-align: center;
  color: #363537;
`;

const Colon = styled.span`
  font-size: clamp(1.5rem, 6vw, 4rem);
  font-weight: bold;
  align-self: center;
  line-height: 1;
  color: #363537;
`;

const TimeLabel = styled.span`
  font-size: clamp(0.8rem, 2vw, 1rem);
  margin-top: 0.5rem;
`;

const ImageWrapper = styled.div`
  flex: 0 0 33%;
  max-height: 200px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }
`;
