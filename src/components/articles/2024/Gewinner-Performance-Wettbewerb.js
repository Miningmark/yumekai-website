import styled, { keyframes } from "styled-components";
import Image from "next/image";

//Components
import Columns4 from "@/components/elements/Columns4";
import { StyledLink } from "@/components/styledComponents";

//Images
import fylyCosplayImgae from "/public/assets/images/yumekai2024/Fyly_Cosplay.jpg";
import tinyfufuCosplayImage from "/public/assets/images/yumekai2024/Tinyfufu_Cosplay.jpg";
import onyxCosplayImage from "/public/assets/images/yumekai2024/Onyx_Cosplay.jpg";
import scarlettCosplayImage from "/public/assets/images/yumekai2024/Scarlett_Sirene_Cosplay.jpg";

const StyledImageHome = styled(Image)`
  width: 100%;
  border-radius: var(--border-radius-large);
`;

export default function GewinnerPerformanceWettbewerb() {
  return (
    <>
      <div>
        <h2>Gewinner unseres Cosplay Performance Wettbewerbs</h2>
        <p>
          Bei unserem Cosplay Performance Wettbewerb am Samstag hatten wir unglaublich talentierte
          Teilnehmer. Da ist es für unsere Jury, die aus{" "}
          <StyledLink href={"https://www.instagram.com/evelyn_cosplay/"} target="_blank">
            Evelyn Cosplay
          </StyledLink>
          ,{" "}
          <StyledLink href={"https://www.instagram.com/imoneecosplay/"} target="_blank">
            Imoneecosplay
          </StyledLink>
          ,{" "}
          <StyledLink href={"https://www.instagram.com/n4ru_cosplay/"} target="_blank">
            Naru Cosplay
          </StyledLink>
          ,{" "}
          <StyledLink href={"https://www.instagram.com/imoneecosplay/"} target="_blank">
            Mero
          </StyledLink>
          {" & "}
          <StyledLink href={"https://www.instagram.com/yunyte/"}>Yunyte</StyledLink> bestand gar
          nicht so leicht gefallen die Gewinner zu küren.
        </p>
        <Columns4
          column1={
            <>
              <p style={{ textAlign: "center", marginBottom: 0 }}>Platz 1</p>
              <StyledImageHome
                src={onyxCosplayImage}
                alt="Onyx als Toybox
                Hatsune Miku von Vocaloid"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <p style={{ textAlign: "center", marginTop: 0 }}>
                <StyledLink href={"https://www.instagram.com/onyx_costumes/"} target="_blank">
                  Onyx
                </StyledLink>{" "}
                als Toybox Hatsune Miku von Vocaloid
              </p>
            </>
          }
          column2={
            <>
              <p style={{ textAlign: "center", marginBottom: 0 }}>Platz 2</p>
              <StyledImageHome
                src={fylyCosplayImgae}
                alt="Fyly als Shea Haulia
                von Arifureta S2"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <p style={{ textAlign: "center", marginTop: 0 }}>
                <StyledLink href={"https://www.instagram.com/fyly_cosplays/"} target="_blank">
                  Fyly
                </StyledLink>{" "}
                als Shea Haulia von Arifureta S2
              </p>
            </>
          }
          column3={
            <>
              <p style={{ textAlign: "center", marginBottom: 0 }}> Platz 3</p>
              <StyledImageHome
                src={scarlettCosplayImage}
                alt="Scarlett Sirene als
                Soraka Koi von League of Legends"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <p style={{ textAlign: "center", marginTop: 0 }}>
                <StyledLink href={"https://www.instagram.com/scarlettsirene2/"} target="_blank">
                  Scarlett Sirene
                </StyledLink>{" "}
                als Soraka Koi von League of Legends
              </p>
            </>
          }
          column4={
            <>
              <p style={{ textAlign: "center", marginBottom: 0 }}>Platz 4</p>
              <StyledImageHome
                src={tinyfufuCosplayImage}
                alt="Tinyfufu als Amity Blight
                von The Owl House"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <p style={{ textAlign: "center", marginTop: 0 }}>
                <StyledLink href={"https://www.instagram.com/tinyfufu/"} target="_blank">
                  Tinyfufu
                </StyledLink>{" "}
                als Amity Blight von The Owl House
              </p>
            </>
          }
        />
      </div>
    </>
  );
}
