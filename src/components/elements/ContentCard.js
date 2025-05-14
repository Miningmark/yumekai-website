import Image from "next/image";
import styled from "styled-components";

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

const CardWrapper = styled.div`
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

  &:hover {
  border: 8px solid;
  border-image: repeating-linear-gradient(135deg,#F8CA00 0 10px,#E97F02 0 20px,#BD1550 0 30px) 8;
  -webkit-mask: 
    conic-gradient(from 180deg at top 8px right 8px, #0000 90deg,#000 0)
     var(--_i,200%) 0  /200% var(--_i,8px) border-box no-repeat,
    conic-gradient(at bottom 8px left  8px,  #0000 90deg,#000 0)
     0   var(--_i,200%)/var(--_i,8px) 200% border-box no-repeat,
    linear-gradient(#000 0 0) padding-box no-repeat;
  transition: .3s, -webkit-mask-position .3s .3s;
}

/*
&:hover {
  --_i: 100%;
  color: #CC333F;
  transition: .3s, -webkit-mask-size .3s .3s;
}
  */
`;

export default function ContentCard({ title, text, imageSrc, altText }) {
  return (
    <CardWrapper>
      <CardContent>
        <h2 style={{ textAlign: "center" }}>{title}</h2>
        {text ? <>{text}</> : null}
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
