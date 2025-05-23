import Link from "next/link";
import styled from "styled-components";

//import Icons
import XLogo from "/public/assets/icons/x.svg";
import DiscordLogo from "/public/assets/icons/discord.svg";
import InstagramLogo from "/public/assets/icons/instagram.svg";

const SocialMediaHeaderSection = styled.section`
  position: absolute;
  left: 20px;
  top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 550px) {
    flex-direction: column;
    left: 10px;
    top: 5px;
    transform: scale(0.8);
  }
`;

const SocialMediaFooterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: row;
  }
`;

const SocialMediaButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-small);
  border: solid 2px ${({ theme }) => theme.primaryColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    transform: translateY(-5px);
  }

  svg {
    fill: ${({ theme }) => theme.primaryColor};
    width: 30px;
    height: 30px;
    padding: 0;
  }
`;

export function SocialMediaContainer() {
  return (
    <>
      <Link
        href={"https://www.instagram.com/yumekai.official/"}
        aria-label="Instagram Link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SocialMediaButton>
          <InstagramLogo />
        </SocialMediaButton>
      </Link>
      <Link href={"https://twitter.com/Yumekai_Events"} aria-label="X Link" target="_blank" rel="noopener noreferrer">
        <SocialMediaButton>
          <XLogo />
        </SocialMediaButton>
      </Link>
      <Link href={"https://discord.gg/JZBCtb8V6U"} aria-label="Discord Link" target="_blank" rel="noopener noreferrer">
        <SocialMediaButton>
          <DiscordLogo />
        </SocialMediaButton>
      </Link>
    </>
  );
}

export function SocialMediaContainerHeader() {
  return (
    <SocialMediaHeaderSection>
      <SocialMediaContainer />
    </SocialMediaHeaderSection>
  );
}

export function SocialMediaContainerFooter() {
  return (
    <SocialMediaFooterSection>
      <SocialMediaContainer />
    </SocialMediaFooterSection>
  );
}
