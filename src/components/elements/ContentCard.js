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

  p,
  h2 {
    color: ${({ theme }) => theme.text};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid transparent;
    pointer-events: none;
    background: linear-gradient(90deg, black, black) no-repeat;
    background-size: 400% 400%;
    animation: snake-border 4s linear infinite;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: destination-out;
    padding: 2px;
  }

  @keyframes snake-border {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 400% 50%;
    }
  }
`;

export default function ContentCard({ href, title, text, imageSrc, altText }) {
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
}
