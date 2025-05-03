import styled from "styled-components";
import Image from "next/image";
import { useEffect, useState } from "react";

// images
import hiruImage from "/public/assets/logo/Hiru.webp";

export default function CounterClock({ finalDate, imageURL = hiruImage }) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const targetTime = finalDate instanceof Date ? finalDate.getTime() : Date.parse(finalDate);
    const total = targetTime - Date.now();
    const seconds = Math.max(Math.floor((total / 1000) % 60), 0);
    const minutes = Math.max(Math.floor((total / 1000 / 60) % 60), 0);
    const hours = Math.max(Math.floor((total / (1000 * 60 * 60)) % 24), 0);
    const days = Math.max(Math.floor(total / (1000 * 60 * 60 * 24)), 0);
    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = getTimeRemaining();
      setTimeLeft(updated);
      if (updated.total <= 0) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      <ClockWrapper>
        <Wrapper>
          <Headline>Bald ist es soweit!</Headline>
          <Time>
            <TimeBlock>
              <TimeNumber>
                {timeLeft.days > 99 ? "" : timeLeft.days > 9 ? "0" : "00"}
                {timeLeft.days}
              </TimeNumber>
              <TimeLabel>Tage</TimeLabel>
            </TimeBlock>
            <Colon>:</Colon>
            <TimeBlock>
              <TimeNumber>
                {timeLeft.hours < 10 ? "0" : ""}
                {timeLeft.hours}
              </TimeNumber>
              <TimeLabel>Stunden</TimeLabel>
            </TimeBlock>
            <Colon>:</Colon>
            <TimeBlock>
              <TimeNumber>
                {timeLeft.minutes < 10 ? "0" : ""}
                {timeLeft.minutes}
              </TimeNumber>
              <TimeLabel>Minuten</TimeLabel>
            </TimeBlock>
            <Colon>:</Colon>
            <TimeBlock>
              <TimeNumber>
                {timeLeft.seconds < 10 ? "0" : ""}
                {timeLeft.seconds}
              </TimeNumber>
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
`;

const TimeNumber = styled.span`
  font-size: clamp(1rem, 5vw, 5rem);
  font-weight: bold;
  min-width: 40px;
  text-align: center;
`;

const Colon = styled.span`
  font-size: clamp(1.5rem, 6vw, 4rem);
  font-weight: bold;
  align-self: center;
  line-height: 1;
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
