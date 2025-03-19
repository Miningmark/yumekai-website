import Image from "next/image";
import { StyledLink } from "@/components/styledComponents";
import styled from "styled-components";

//Images
import hiruKunstlerImage from "/public/assets/hirus/Hiru_Kunstler.png";


const DynamicContent = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ $widthpercent }) => `calc(${$widthpercent}% - 10px)`};
  ${({ $maxwidth }) => $maxwidth && `max-width: ${$maxwidth}px;`}

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export default function AnkundigungZeichenwettbewerb(){

    return (
    <>
        <h2>Der YumeKai Zeichenwettbewerb</h2>
        
        <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
       
        <DynamicContent $widthpercent={60}>
            <p>
               
                <br />
                <br />
                
                <br />
                <br />
                
                <br />
                <br />
                
                <br />
                <br />
                
                <br/>
                Teilnahme am Zeichenwettbewerb:{" "}
                <StyledLink href="/registration/registrationArtContest" target="_blank">
                    Anmeldung
                </StyledLink>
            </p>
        </DynamicContent>
        <DynamicContent
          $widthpercent={40}
          $maxwidth={300}
          style={{ justifyContent: "center", alignContent: "center" }}
        >
          <Image
            src={hiruKunstlerImage}
            alt="Künstler Hiru"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />
        </DynamicContent>
      </div>
    </>
    )
}