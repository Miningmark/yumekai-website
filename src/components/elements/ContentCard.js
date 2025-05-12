import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { StyledLink } from "@/components/styledComponents";

/*
Aufruf der Component

      import ContentCard from "@/components/elements/ContentCard";

      <ContentCard
        href="http://www.instagram.com/anara"
        title="Anara Twice"
        text="Ich bin ein Text"     //optional
        imageSrc={hiruKunstler}
        altText="Logo von Anara Twice"
      />

      
*/

const CardWrapper = styled(StyledLink)`
  width: calc(50% - 20px);
  max-width: 290px;
`;

const CardContent = styled.div`
  width: 100%;
  position: relative;
  transition: all 0.3s ease-in-out;

  p, h2:{
    color: ${({ theme }) => theme.text};
  }

  &:hover {
    animation: border-animation 1s linear forwards;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border: 2px solid transparent;
    animation: border-animation 1s linear forwards;
  }

  @keyframes border-animation {
    0% {
      width: 0;
      height: 0;
      border-color: transparent;
    }
    25% {
      width: 100%;
      height: 0;
      border-color: black;
    }
    50% {
      width: 100%;
      height: 100%;
      border-color: black;
    }
    75% {
      width: 0;
      height: 100%;
      border-color: black;
    }
    100% {
      width: 100%;
      height: 100%;
      border-color: black;
    }
  }
`;

export default function ContentCard({ href, title, text, imageSrc, altText }){
  return (
    <CardWrapper href={href} target="_blank">
      <CardContent>
        <h2 style={{ textAlign: "center" }}>{title}</h2>
        {text ? <p>{text}</p> : null}
        <Image
          src={imageSrc}
          alt={altText}
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </CardContent>
    </CardWrapper>
  );
};
