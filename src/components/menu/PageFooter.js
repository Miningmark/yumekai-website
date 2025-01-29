import Link from "next/link";
import styled from "styled-components";
import { SocialMediaContainerFooter } from "@/components/menu/SocialMediaContainer";
import { StyledButton } from "@/components/styledComponents";
import { StyledLinkAsButton } from "../elements/StyledLinkAsButton";

const FooterBackground = styled.footer`
  width: 100%;
  background-color: #ffb01e;
  color: #363537;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px 0 20px 0;
`;

const FooterContainerWrapper = styled.div`
  width: 90%;
  max-width: 1600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    width: 95%;
    flex-direction: column;
    align-items: center;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    padding: 3px 0;
  }
`;

const FooterLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;

  p,
  a {
    margin: 5px;
  }

  @media (max-width: 420px) {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: #363537;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
`;

export default function PageFooter() {
  return (
    <FooterBackground>
      <FooterContainerWrapper>
        <FooterContainer>
          <br />
          <SocialMediaContainerFooter />
        </FooterContainer>
        <FooterContainer>
          <h3>Kontakt</h3>
          <ul>
            <li>
              <FooterLink href={"/kontaktformular"}>Kontaktformular</FooterLink>
            </li>
            <li>
              <FooterLink href={"/helfer"}>Helfer werden</FooterLink>
            </li>
            <li>
              <FooterLink href={"/presse"}>Presse</FooterLink>
            </li>
          </ul>
        </FooterContainer>
        <FooterContainer>
          <h3>Dreamfly-Events</h3>
          <ul>
            <li>
              <FooterLink href={"/ueber-uns"}>Über uns</FooterLink>
            </li>
            <li>
              <FooterLink href={"/das-sind-wir"}>Das sind Wir</FooterLink>
            </li>
            <li>
              <FooterLink href={"/impressum"}>Impressum</FooterLink>
            </li>
          </ul>
        </FooterContainer>
        <FooterContainer>
          <h3>Infos</h3>
          <ul>
            <li>
              <FooterLink href={"/faq"}>FAQ</FooterLink>
            </li>
            <li>
              <FooterLink href={"/hausordnung"}>Hausordnung</FooterLink>
            </li>
            <li>
              <FooterLink href={"/waffenkostuemregeln"}>Waffen- & Kostümregeln</FooterLink>
            </li>
          </ul>
        </FooterContainer>
        <FooterContainer>
          <h3>Newsletter</h3>
          <StyledLinkAsButton href={"/newsletter/register"} style={{ textAlign: "center" }}>
            Anmelden
          </StyledLinkAsButton>
        </FooterContainer>
      </FooterContainerWrapper>
      <FooterLine>
        <p>© 2025 Dreamfly-Events UG</p>
        <FooterLink href={"/datenschutz"}>Datenschutz</FooterLink>
        <FooterLink href={"/impressum"}>Impressum</FooterLink>
      </FooterLine>
    </FooterBackground>
  );
}
