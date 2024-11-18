import { useState, useEffect } from "react";
import styled from "styled-components";

const MovingWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    height: 180px;
    align-items: flex-start;

    svg {
      width: 60%;
      height: 60%;
    }
  }
`;

const MovingContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  will-change: transform;

  svg {
    width: 60%;
    height: 60%;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 500px) {
    margin-top: -20px;

    svg {
      width: 60%;
      height: 60%;
    }
  }
`;

export default function MovingContentWrapper({ content }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;

      const x = -((clientX - centerX) / centerX) * 20;
      const y = -((clientY - centerY) / centerY) * 20;

      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <MovingWrapper>
      <MovingContent style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}>
        {content}
      </MovingContent>
    </MovingWrapper>
  );
}
