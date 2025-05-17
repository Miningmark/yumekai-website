import Image from "next/image";
import styled, { keyframes } from "styled-components";

//Icons
import InstaIcon from "/public/assets/icons/instagram.svg";

/*
Aufruf der Component

      import ContentCard from "@/components/elements/ContentCard";

      <ContentCard
        href="http://www.instagram.com/anara"
        title="Anara Twice"
        text="Ich bin ein Text"     //optional
        imageSrc={hiruKunstler}
        altText="Logo von Anara Twice"
        instaLink="https://www.instagram.com/anara"
        instaLinkText="Instagram"
      />

      
*/

const CardWrapper = styled.div`
  flex: 1 1 290px;
  max-width: 290px;

  .card {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(163deg, #e9300b 0%, #ffb01e 100%);
    border-radius: 20px;
    transition: all 0.3s;
  }

  .card2 {
    width: calc(100% - 16px);
    height: 100%;
    background-color: ${({ theme }) => theme.backgroundColor4};
    padding: 8px;
    border-radius: 18px;
    transition: all 0.2s;

    p,
    h2 {
      color: ${({ theme }) => theme.text};
    }
  }

  .card2:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }

  .card:hover {
    box-shadow: 0px 0px 30px 1px rgba(255, 176, 30, 0.3);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  text-align: center;
`;

const CardTitle = styled.h2`
  min-height: 2.3em;
  text-align: center;
  margin-bottom: 0px;
`;

const InstaLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  text-decoration: none;
  color: #bd1550;

  svg {
    width: 24px;
    height: 24px;
    fill: #bd1550;
  }

  &:hover {
    color: #a78bfa;
    transition: fill 0.3s;

    svg {
      fill: #a78bfa;
      transition: fill 0.3s;
    }
  }
`;

export default function ContentCard({
  title,
  text = null,
  imageSrc,
  altText,
  instaLink = null,
  instaLinkText = null,
}) {
  return (
    <CardWrapper>
      <CardContent className="card">
        <div className="card2">
          <CardTitle>{title}</CardTitle>
          {text ? <>{text}</> : null}
          <Image
            src={imageSrc}
            alt={altText}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          {instaLink && instaLinkText && (
            <InstaLink href={instaLink} target="_blank" rel="noopener noreferrer">
              <InstaIcon />
              {instaLinkText}
            </InstaLink>
          )}
        </div>
      </CardContent>
    </CardWrapper>
  );
}
