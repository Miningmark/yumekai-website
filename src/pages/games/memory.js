"use client";

import React, { useState, useEffect, useCallback } from "react";
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
const CardWrapper = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid
    ${({ $isflipped }) => ($isflipped ? "var(--primary-color)" : "var(--secondary-color)")};
  border-radius: 6px;
  background-color: ${({ $ismatched }) => ($ismatched ? "#a0a0a0" : "#fff")};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  perspective: 1000px; /* Wichtig für die 3D-Ansicht */
  transform-style: preserve-3d;
  position: relative;
  transform: ${({ $isflipped }) => ($isflipped ? "rotateY(180deg)" : "rotateY(0deg)")};
  transition: transform 1s;

  @media (min-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 1.2s cubic-bezier(0.7, -0.3, 0.3, 1.8);
  position: relative;
  transform-origin: center;
  border-radius: 5px;
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  transform: rotateY(0deg); /* Wichtig für die Vorderseite */
  border-radius: 5px;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  //background-color: #fff;
  background-color: ${({ $ismatched }) => ($ismatched ? "#a0a0a0" : "#fff")};
  color: #fff;
  transform: rotateY(180deg); /* Wichtig für die Rückseite */
  border-radius: 5px;
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

const Card = ({ image, isFlipped, isMatched, onClick }) => {
  return (
    <CardWrapper $isflipped={isFlipped ? 1 : 0} $ismatched={isMatched ? 1 : 0} onClick={onClick}>
      <CardInner>
        <CardFront>
          <Image
            src={yumekaiLogoImage}
            alt="Card Image"
            width={300}
            height={300}
            style={{
              width: "80%",
              height: "80%",
            }}
          />
        </CardFront>
        <CardBack $ismatched={isMatched ? 1 : 0}>
          <Image
            src={image}
            alt="Card Image"
            width={300}
            height={300}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </CardBack>
      </CardInner>
    </CardWrapper>
  );
};

const GameWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.textColor};
`;

export default function Memory() {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [tries, setTries] = useState(0);
  const [showModal, setShowModal] = useState(false);

  console.log(cards);
  console.log(flippedCards);
  console.log(matchedCards);

  // Hilfsfunktion: Wähle 18 zufällige Bilder aus
  const getRandomImages = useCallback(() => {
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 18);
  }, []);

  useEffect(() => {
    const selectedImages = getRandomImages();
    const shuffledCards = [...selectedImages, ...selectedImages]
      .sort(() => Math.random() - 0.5)
      .map((image, index) => ({ id: index, image, isFlipped: false, isMatched: false }));

    setCards(shuffledCards);
  }, [getRandomImages]);

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
    const selectedImages = getRandomImages();
    const shuffledCards = [...selectedImages, ...selectedImages]
      .sort(() => Math.random() - 0.5)
      .map((image, index) => ({ id: index, image, isFlipped: false, isMatched: false }));

    setCards(shuffledCards);
    setFlippedCards([]);
    setMatchedCards([]);
    setTries(0);
  }

  return (
    <>
      <h1>Memory Game</h1>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Züge: {tries}</h2>
        <GameWrapper>
          {cards.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              isFlipped={card.isFlipped}
              isMatched={card.isMatched}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </GameWrapper>
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
      </div>
    </>
  );
}
