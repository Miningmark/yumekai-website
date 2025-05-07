import styled from "styled-components";

//Components
import { Spacer, StyledButton, StyledLink } from "@/components/styledComponents";

//Images

const DisabledButton = styled(StyledButton)`
  background-color: gray;
  color: white;
  cursor: not-allowed;
`;

export default function Programm2025() {
  return (
    <>
        <h2>YumeKai 2025</h2>

        <p>Das vollständige Programm der YumeKai wird es hier ab dem 17.05.2025 zu sehen geben.</p>
        <div>
            <DisabledButton>zum Programm</DisabledButton>
        </div>
        

        <h3>Öffnungszeiten</h3>
        <p>
            <strong>Samstag:</strong> 10:00 - 21:00 Uhr
            <br/>
            <strong>Sonntag:</strong> 10:00 - 17:30 Uhr
            <br/>
            <strong>Cosplayball:</strong> Samstag 19:00 - 23:00 Uhr
            <br/>
        </p>
    </>
  )
}