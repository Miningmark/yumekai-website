import { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Head from "next/head";
import { StyledButton, ModalOverlay } from "@/components/styledComponents";

import YumeKaiLogo from "/public/assets/logo/yumekai_color_font.svg";

import hiru from "/public/assets/hirus/Hiru.png";
import hiruBall from "/public/assets/hirus/Hiru_Ball.png";
import hiruBlume from "/public/assets/hirus/Hiru_Blume.png";
import hiruCosplay from "/public/assets/hirus/Hiru_Cosplay.png";
import hiruEssen from "/public/assets/hirus/Hiru_Essen.png";
import hiruFan from "/public/assets/hirus/Hiru_Fan.png";
import hiruHalloween from "/public/assets/hirus/Hiru_Halloween.png";
import hiruHandler from "/public/assets/hirus/Hiru_Handler.png";
import hiruHandy from "/public/assets/hirus/Hiru_Handy.png";
import hiruKunstler from "/public/assets/hirus/Hiru_Kunstler.png";
import hiruParty1 from "/public/assets/hirus/Hiru_Party1.png";
import hiruPlan from "/public/assets/hirus/Hiru_Plan.png";
import hiruShowact from "/public/assets/hirus/Hiru_Showact.png";
import hiruSpielen from "/public/assets/hirus/Hiru_Spielen.png";
import hiruSupport25 from "/public/assets/hirus/Hiru_Support_25.png";
import hiruTicket from "/public/assets/hirus/Hiru_Ticket.png";
import hiruWeihnachten from "/public/assets/hirus/Hiru_Weihnachten.png";
import hiruWorkshop from "/public/assets/hirus/Hiru_Workshop.png";
import idolHiru from "/public/assets/hirus/Idol_Hiru.png";

const hiruImages = [
  hiru,
  hiruBall,
  hiruBlume,
  hiruCosplay,
  hiruEssen,
  hiruFan,
  hiruHalloween,
  hiruHandler,
  hiruHandy,
  hiruKunstler,
  hiruParty1,
  hiruPlan,
  hiruShowact,
  hiruSpielen,
  hiruSupport25,
  hiruTicket,
  hiruWeihnachten,
  hiruWorkshop,
  idolHiru,
];

const PAIR_COUNT = 18;

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function createDeck() {
  const selected = shuffle(hiruImages).slice(0, PAIR_COUNT);
  return shuffle([...selected, ...selected]).map((image, index) => ({
    id: index,
    image,
    isFlipped: false,
    isMatched: false,
  }));
}

const IntroText = styled.p`
  text-align: center;
`;

const MovesText = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 1.3rem;
  color: ${({ theme }) => theme.primaryColor};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  width: 100%;
  max-width: 560px;
  margin: 0 auto 30px auto;

  @media (max-width: 600px) {
    gap: 5px;
  }
`;

const CardOuter = styled.div`
  aspect-ratio: 1;
  perspective: 1000px;
  cursor: pointer;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform var(--transition-base);
  transform-style: preserve-3d;
  transform: ${({ $flipped }) => ($flipped ? "rotateY(180deg)" : "rotateY(0)")};
`;

const CardFace = styled.div`
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: var(--radius-sm);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
`;

const CardBack = styled(CardFace)`
  background-color: ${({ theme }) => theme.backgroundColor2};
  border: 2px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18%;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const CardFront = styled(CardFace)`
  transform: rotateY(180deg);
  background-color: ${({ theme }) => theme.backgroundColor3};
  outline: ${({ $matched }) => ($matched ? "3px solid var(--success)" : "none")};
  outline-offset: -3px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
`;

const ModalBox = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor2};
  border-radius: var(--radius-lg);
  padding: 40px;
  max-width: 90vw;
  width: 360px;
  text-align: center;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: 14px;

  h2 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export default function HiruMemory() {
  const [cards, setCards] = useState([]);
  const [flippedIds, setFlippedIds] = useState([]);
  const [moves, setMoves] = useState(0);
  const [showWinModal, setShowWinModal] = useState(false);

  useEffect(() => {
    setCards(createDeck());
  }, []);

  useEffect(() => {
    if (flippedIds.length !== 2) return;

    const [firstId, secondId] = flippedIds;
    const firstCard = cards.find((card) => card.id === firstId);
    const secondCard = cards.find((card) => card.id === secondId);
    const isMatch = firstCard && secondCard && firstCard.image === secondCard.image;

    if (isMatch) {
      setCards((prev) =>
        prev.map((card) =>
          card.id === firstId || card.id === secondId ? { ...card, isMatched: true } : card
        )
      );
      setFlippedIds([]);
      return;
    }

    const timeout = setTimeout(() => {
      setCards((prev) =>
        prev.map((card) =>
          card.id === firstId || card.id === secondId ? { ...card, isFlipped: false } : card
        )
      );
      setFlippedIds([]);
    }, 900);

    return () => clearTimeout(timeout);
  }, [flippedIds, cards]);

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.isMatched)) {
      setShowWinModal(true);
    }
  }, [cards]);

  function handleCardClick(id) {
    if (flippedIds.length === 2) return;
    const card = cards.find((c) => c.id === id);
    if (!card || card.isFlipped || card.isMatched) return;

    setCards((prev) => prev.map((c) => (c.id === id ? { ...c, isFlipped: true } : c)));
    setFlippedIds((prev) => [...prev, id]);
    if (flippedIds.length === 0) setMoves((prev) => prev + 1);
  }

  function handleReset() {
    setCards(createDeck());
    setFlippedIds([]);
    setMoves(0);
    setShowWinModal(false);
  }

  return (
    <>
      <Head>
        <title>Hiru Memory | YumeKai</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <h1>Hiru Memory</h1>
      <IntroText>
        Ein geheimes Easter Egg für alle Hiru-Fans – finde alle Paare!
      </IntroText>
      <MovesText>Züge: {moves}</MovesText>
      <Grid>
        {cards.map((card) => (
          <CardOuter key={card.id} onClick={() => handleCardClick(card.id)}>
            <CardInner $flipped={card.isFlipped || card.isMatched}>
              <CardBack>
                <YumeKaiLogo />
              </CardBack>
              <CardFront $matched={card.isMatched}>
                <Image
                  src={card.image}
                  alt="Hiru"
                  fill
                  sizes="120px"
                  style={{ objectFit: "cover" }}
                />
              </CardFront>
            </CardInner>
          </CardOuter>
        ))}
      </Grid>
      <ButtonRow>
        <StyledButton onClick={handleReset}>Neues Spiel starten</StyledButton>
      </ButtonRow>

      {showWinModal && (
        <ModalOverlay onClick={handleReset}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <h2>Geschafft! 🎉</h2>
            <p>Du hast alle Hirus gefunden!</p>
            <p>
              Benötigte Züge: <strong>{moves}</strong>
            </p>
            <ButtonRow>
              <StyledButton onClick={handleReset}>Neues Spiel starten</StyledButton>
            </ButtonRow>
          </ModalBox>
        </ModalOverlay>
      )}
    </>
  );
}
