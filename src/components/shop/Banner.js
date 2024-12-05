import styled from "styled-components";
import Image from "next/image";

//logos
import hiruTicket from "/public/assets/logo/Hiru-Ticket.webp";
import { StyledButton } from "../styledComponents";
import { StyledLinkAsButton } from "../elements/StyledLinkAsButton";

const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  height: 400px;
  position: relative;

  @media (max-width: 800px) {
    height: 300px;
  }
`;

const BannerContainer = styled.div`
  background-color: var(--tertiary-color);
  border-radius: 20px;
  width: 100%;
  height: 200px;
  display: flex;
  gap: 10px;
  align-items: center;

  @media (max-width: 800px) {
    height: 150px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin: 100px;

  @media (max-width: 800px) {
    flex-direction: column;
    margin: 10px;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 0px;
  width: 400px;
  height: 400px;

  @media (max-width: 800px) {
    right: 0px;
    bottom: 20px;
    width: 200px;
    height: 200px;
  }
`;

export default function Banner() {
  return (
    <>
      <BannerWrapper>
        <BannerContainer>
          <LinkContainer>
            <StyledLinkAsButton href="/faq">FAQ</StyledLinkAsButton>
            <StyledLinkAsButton href="/kontaktformular">Kontakt</StyledLinkAsButton>
          </LinkContainer>
        </BannerContainer>
        <ImageContainer>
          <Image
            src={hiruTicket}
            alt="Bild von Hiru"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </ImageContainer>
      </BannerWrapper>
    </>
  );
}
