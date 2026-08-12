import Link from "next/link";
import styled from "styled-components";
import { SocialMediaContainerFooter } from "@/components/menu/SocialMediaContainer";
import { StyledLinkAsButton } from "../elements/StyledLinkAsButton";

const FooterBackground = styled.footer`
  width: 100%;
  background-color: #ffb01e;
  color: #363537;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 36px 0 24px 0;
  border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  box-shadow: var(--shadow-lg);

  h3 {
    margin: 0 0 10px 0;
  }
`;

const FooterContainerWrapper = styled.div`
  width: 90%;
  max-width: 1600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: start;
  flex-wrap: wrap;
  gap: 28px 16px;

  @media (max-width: 500px) {
    width: 95%;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
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
  width: 90%;
  max-width: 1600px;
  margin-top: 8px;
  padding-top: 18px;
  border-top: 1px solid rgba(54, 53, 55, 0.18);

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
  transition: color var(--transition-fast), padding-left var(--transition-fast);
  border-radius: var(--radius-sm);
  display: inline-block;

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
    padding-left: 4px;
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
      </FooterContainerWrapper>
      <FooterLine>
        <p>© 2026 Dreamfly-Events UG</p>
        <FooterLink href={"/datenschutz"}>Datenschutz</FooterLink>
        <FooterLink href={"/impressum"}>Impressum</FooterLink>
      </FooterLine>
    </FooterBackground>
  );
}
