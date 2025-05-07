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

    <p>Das vollständige Programm der YumeKai wird ab dem 17.05.2025 hier verfügbar sein.</p>
    <div>
        <DisabledButton>Zum Programm</DisabledButton>
    </div>

    <h3>Öffnungszeiten</h3>
    <p>
        <strong>Samstag:</strong> 10:00 - 21:00 Uhr <br/>
        <strong>Sonntag:</strong> 10:00 - 17:30 Uhr <br/>
        Goldticket-Besitzer dürfen an beiden Tagen bereits um 09:30 Uhr die YumeKai betreten. <br/>
        <strong>Cosplayball:</strong> Samstag 19:00 - 23:00 Uhr
    </p>
</>
  )
}