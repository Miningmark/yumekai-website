import styled from "styled-components";
import { useRef, useEffect } from "react";
import { StyledButton } from "@/components/styledComponents";
import { StyledLinkAsButton } from "@/components/elements/StyledLinkAsButton";

//Components

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 300px;
  background: linear-gradient(45deg, red, white);
`;

export default function Slide1() {
  return (
    <>
      <Wrapper>
        <h1>
          Willkommen bei <br />
          YumeKai
        </h1>
        <p>
          Hier findest du nicht nur Informationen rund um unsere Veranstaltungen, sondern auch
          aktuelle Pläne und alle möglichen Details. Bei uns erhältst du alles, was du brauchst, um
          den Traum der YumeKai zu erleben – von Programmplänen bis hin zu unserem Ticketshop!
        </p>
        <StyledLinkAsButton href="/projects">Unsere Projekte</StyledLinkAsButton>
      </Wrapper>
    </>
  );
}
