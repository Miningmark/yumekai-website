"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

// Images aus src/assets
import yumekaiLogoImage from "/public/assets/logo/yumekai_256px.png";
import hiruImage from "/public/assets/hirus/Hiru.png";
import hiruBlumeImage from "/public/assets/hirus/Hiru_Blume.png";
import hiruCosplayImage from "/public/assets/hirus/Hiru_Cosplay.png";
import hiruEssenImage from "/public/assets/hirus/Hiru_Essen.png";
import hiruFanImage from "/public/assets/hirus/Hiru_Fan.png";
import hiruHalloweenImage from "/public/assets/hirus/Hiru_Halloween.png";
import hiruHandlerImage from "/public/assets/hirus/Hiru_Handler.png";
import hiruHandyImage from "/public/assets/hirus/Hiru_Handy.png";
import hiruKunstlerImage from "/public/assets/hirus/Hiru_Kunstler.png";
import hiruParty1Image from "/public/assets/hirus/Hiru_Party1.png";
import hiruPlanImage from "/public/assets/hirus/Hiru_Plan.png";
import hiruShowactImage from "/public/assets/hirus/Hiru_Showact.png";
import hiruSpielenImage from "/public/assets/hirus/Hiru_Spielen.png";
import hiruTicketImage from "/public/assets/hirus/Hiru_Ticket.png";
import hiruWeihnachtenImage from "/public/assets/hirus/Hiru_Weihnachten.png";
import hiruWorkshopImage from "/public/assets/hirus/Hiru_Workshop.png";
import idolHiruImage from "/public/assets/hirus/Idol_Hiru.png";
import hiruBallImage from "/public/assets/hirus/Hiru_Ball.png";
import hiruLeftImage from "/public/assets/hirus/Hiru_Links.png";
import hiruRightImage from "/public/assets/hirus/Hiru_Rechts.png";
import hiruUpImage from "/public/assets/hirus/Hiru_Oben.png";
import hiruDownImage from "/public/assets/hirus/Hiru_Unten.png";
import hiruMagicalGirlImage from "/public/assets/hirus/Hiru_Magical_Girl.png";
import hiruSupport2Image from "/public/assets/hirus/Hiru_Support_2.png";
import hiruSupport25Image from "/public/assets/hirus/Hiru_Support_25.png";

const images = [
  hiruImage,
  hiruBlumeImage,
  hiruCosplayImage,
  hiruEssenImage,
  hiruFanImage,
  hiruHalloweenImage,
  hiruHandlerImage,
  hiruHandyImage,
  hiruKunstlerImage,
  hiruParty1Image,
  hiruPlanImage,
  hiruShowactImage,
  hiruSpielenImage,
  hiruTicketImage,
  hiruWeihnachtenImage,
  hiruWorkshopImage,
  idolHiruImage,
  hiruBallImage,
  hiruLeftImage,
  hiruRightImage,
  hiruUpImage,
  hiruDownImage,
  hiruMagicalGirlImage,
  hiruSupport2Image,
  hiruSupport25Image,
];

// Styled Components - Bootstrap-inspired Layout
const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  font-weight: 500;
  color: #212529;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const InfoSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const SubText = styled.p`
  color: #6c757d;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const ScoreText = styled.h2`
  color: #0d6efd;
  font-size: 2rem;
  font-weight: 400;
  margin: 0;
`;

const ButtonSection = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const Button = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: all 0.15s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  &:active {
    transform: translateY(1px);
  }
`;

const SecondaryButton = styled(Button)`
  color: #fff;
  background-color: #6c757d;
  border-color: #6c757d;

  &:hover {
    background-color: #5a6268;
    border-color: #545b62;
  }
`;

const SuccessButton = styled(Button)`
  color: #fff;
  background-color: #28a745;
  border-color: #28a745;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;

  &:hover {
    background-color: #218838;
    border-color: #1e7e34;
  }
`;

const GameGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  max-width: 600px;
  width: 100%;
  margin: 0 auto 2rem;

  @media (max-width: 768px) {
    gap: 4px;
    max-width: 100%;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    gap: 2px;
    padding: 0 5px;
  }
`;

const MemoryCard = styled.div`
  aspect-ratio: 1;
  perspective: 1000px;
  cursor: pointer;
  min-height: 60px;
  opacity: ${(props) => (props.$isMatched ? "0.6" : "1")};
  pointer-events: ${(props) => (props.$isMatched ? "none" : "auto")};
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props) => (props.$isFlipped ? "rotateY(180deg)" : "rotateY(0)")};
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 576px) {
    border-radius: 4px;
  }
`;

const CardFront = styled(CardFace)`
  background: #4a90e2;
`;

const CardBack = styled(CardFace)`
  background: white;
  transform: rotateY(180deg);
`;

const CardImageWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 576px) {
    width: 95%;
    height: 95%;
  }

  img {
    object-fit: cover;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 90%;
`;

const ModalHeader = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #dee2e6;
`;

const ModalTitle = styled.h5`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 500;
  color: #212529;
`;

const ModalBody = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const ModalHeading = styled.h4`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #212529;
`;

const ModalText = styled.p`
  font-size: 1.25rem;
  margin: 0;
  color: #212529;
`;

const ModalFooter = styled.div`
  padding: 1rem 1.5rem;
  border-top: 1px solid #dee2e6;
  display: flex;
  justify-content: center;
`;

// Card Component
const Card = ({ image, isFlipped, isMatched, onClick }) => {
  return (
    <MemoryCard $isMatched={isMatched} onClick={onClick}>
      <CardInner $isFlipped={isFlipped || isMatched}>
        <CardFront>
          <CardImageWrapper>
            <Image
              src={yumekaiLogoImage}
              alt="Card Back"
              fill
              sizes="(max-width: 480px) 15vw, (max-width: 768px) 12vw, 100px"
            />
          </CardImageWrapper>
        </CardFront>
        <CardBack>
          <CardImageWrapper>
            <Image
              src={image}
              alt="Card Front"
              fill
              sizes="(max-width: 480px) 15vw, (max-width: 768px) 12vw, 100px"
            />
          </CardImageWrapper>
        </CardBack>
      </CardInner>
    </MemoryCard>
  );
};

// Funktion zum zufälligen Auswählen von 18 Bildern
const getRandomImages = (allImages, count = 18) => {
  const shuffled = [...allImages].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Main Component

export default function Memory() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [tries, setTries] = useState(0);
  const [showModal, setShowModal] = useState(false);

  console.log(
    "Cards:",
    cards.map((card) => card.image.src)
  );

  // Karten initialisieren
  const initializeCards = () => {
    // Wähle zufällig 18 Bilder aus
    const selectedImages = getRandomImages(images, 18);

    // Verdopple die Bilder für Memory-Paare
    const shuffledCards = [...selectedImages, ...selectedImages]
      .sort(() => Math.random() - 0.5)
      .map((image, index) => ({
        id: index,
        image,
        isFlipped: false,
        isMatched: false,
      }));

    setCards(shuffledCards);
  };

  useEffect(() => {
    initializeCards();
  }, []);

  // Check for a match
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (first.image === second.image) {
        setMatchedCards((prev) => [...prev, first.id, second.id]);
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === first.id || card.id === second.id ? { ...card, isMatched: true } : card
          )
        );
      }

      // Reset flipped cards
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            flippedCards.some((flippedCard) => flippedCard.id === card.id)
              ? { ...card, isFlipped: card.isMatched }
              : card
          )
        );
        setFlippedCards([]);
      }, 1000);
    }
  }, [flippedCards]);

  // Check for win condition
  useEffect(() => {
    if (cards.length > 0 && matchedCards.length === cards.length) {
      setShowModal(true);
    }
  }, [matchedCards, cards]);

  const handleCardClick = (id) => {
    if (flippedCards.length === 2 || matchedCards.includes(id)) return;

    const clickedCard = cards.find((card) => card.id === id);
    if (!clickedCard || clickedCard.isFlipped) return;

    setFlippedCards((prev) => [...prev, clickedCard]);
    setCards((prevCards) =>
      prevCards.map((card) => (card.id === id ? { ...card, isFlipped: true } : card))
    );

    if (flippedCards.length === 0) {
      setTries((prev) => prev + 1);
    }
  };

  function handleReset() {
    initializeCards();
    setFlippedCards([]);
    setMatchedCards([]);
    setTries(0);
    setShowModal(false);
  }

  return (
    <Container>
      <h1>Memory Game</h1>

      <InfoSection>
        <SubText>Wie viele Versuche brauchst du um alle Hirus zuzuordnen?</SubText>
        <h2>Züge: {tries}</h2>
      </InfoSection>

      <GameGrid>
        {cards.map((card) => (
          <Card
            key={card.id}
            image={card.image}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </GameGrid>

      <ButtonSection>
        <SecondaryButton onClick={handleReset}>Neues Spiel starten</SecondaryButton>
      </ButtonSection>

      {/* Custom Modal mit styled-components */}
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Herzlichen Glückwunsch!</ModalTitle>
            </ModalHeader>
            <ModalBody>
              <ModalHeading>Du hast das Spiel gewonnen! 🎉</ModalHeading>
              <ModalText>
                Benötigte Züge: <strong>{tries}</strong>
              </ModalText>
            </ModalBody>
            <ModalFooter>
              <SuccessButton onClick={handleReset}>Neues Spiel starten</SuccessButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}
