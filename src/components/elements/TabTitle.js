import { useState } from "react";
import styled from "styled-components";

// Import Icons
import IconArrowDown from "/public/assets/icons/arrow_drop_down.svg";
import IconArrowRight from "/public/assets/icons/arrow_right.svg";

/*
Aufruf der Component

      <TabTitle
        title="Wann ist die YumeKai?"
        content="Der Termin der YumeKai 2025 ist noch nicht bekannt."
      />
*/

const Container = styled.div`
  margin: 10px 0;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  transition: transform 0.5s ease; /* Rotationseffekt */

  svg {
    fill: ${({ theme }) => theme.text};
    width: 100%;
    height: 100%;
    transform: ${({ $isopen }) => ($isopen ? "rotate(90deg)" : "rotate(0deg)")};
    transition: transform 0.5s ease; /* Rotation von SVG */
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
  color: ${({ $isopen, theme }) => ($isopen == 1 ? theme.primaryColor : theme.secondaryColor)};
`;

const Content = styled.div`
  margin-left: 40px;
  max-height: ${({ $view }) => ($view ? "500px" : "0")};
  overflow: hidden;
  padding: ${({ $view }) => ($view ? "10px 0" : "0")};
  transition: max-height 0.5s, padding 0.5s;
  opacity: ${({ $view }) => ($view ? "1" : "0")};
  transition: max-height 0.5s, padding 0.5s, opacity 0.5s;

  p {
    margin: 0;
  }
`;

export default function TabTitle({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <TitleContainer onClick={toggleContent}>
        <Icon $isopen={isOpen}>
          <IconArrowRight />
        </Icon>
        <Title $isopen={isOpen ? 1 : 0}>{title}</Title>
      </TitleContainer>
      <Content $view={isOpen ? 1 : 0}>{content}</Content>
    </Container>
  );
}
