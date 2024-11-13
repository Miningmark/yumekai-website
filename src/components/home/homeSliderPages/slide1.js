import styled from "styled-components";
import { useRef, useEffect } from "react";

//Components

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 300px;
  background: lightgreen;
`;

export default function Slide1() {
  return (
    <>
      <Wrapper>
        <h1>Slide1</h1>
        <p>dawfawf awf wain oiunwaof</p>
      </Wrapper>
    </>
  );
}
