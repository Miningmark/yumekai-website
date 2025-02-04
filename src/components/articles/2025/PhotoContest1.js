import Image from "next/image";
import styled from "styled-components";

//Components
import Columns4 from "@/components/elements/Columns4";
import { StyledLink } from "@/components/styledComponents";

//Images
import photo1 from "/public/assets/images/sonstiges/photoContest1_25/fotowettbewerb1.jpg";
import photo2 from "/public/assets/images/sonstiges/photoContest1_25/fotowettbewerb2.jpg";
import photo3 from "/public/assets/images/sonstiges/photoContest1_25/fotowettbewerb3.jpg";
import photo4 from "/public/assets/images/sonstiges/photoContest1_25/fotowettbewerb4.jpg";

const StyledImageHome = styled(Image)`
  width: 100%;
  border-radius: var(--border-radius-large);
`;

export default function PhotoContest1() {
  return (
    <>
      <h2>Die Gewinner des Cosplay-Foto-Contests! 📸</h2>
      <p>
        Eure Einsendungen haben uns alle begeistert. Dafür erstmal: ein großes Lob an euch alle,
        eure Cosplays und Bilder sind super geworden! <br />
        Die Einsendungen wurden von unserer Jury unter diesen Kategorien bewertet:
      </p>
      <ul>
        <li style={{ listStyle: "none" }}>⭕ Bestes Gesamtbild</li>
        <li style={{ listStyle: "none" }}>⭕ Originalgetreue</li>
        <li style={{ listStyle: "none" }}>⭕ Kreativität</li>
      </ul>
      <p>Daraus haben sich folgende Gewinner ergeben:</p>
      <Columns4
        column1={
          <>
            <StyledImageHome
              src={photo1}
              alt="Clicker aus The Last of Us"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <p style={{ textAlign: "center", marginTop: 0 }}>
              🥇 1. Platz
              <br />
              <StyledLink href="https://www.instagram.com/rhean_cosplay/" target="_blank">
                rhean_cosplay
              </StyledLink>{" "}
              als ein Clicker aus The Last of Us <br /> Foto: battitude_arts
            </p>
          </>
        }
        column2={
          <>
            <StyledImageHome
              src={photo2}
              alt="Loid Forger aus Spy x Family"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <p style={{ textAlign: "center", marginTop: 0 }}>
              🥈 2. Platz
              <br />
              <StyledLink href="https://www.instagram.com/avokaddocosplay/" target="_blank">
                avokaddocosplay
              </StyledLink>{" "}
              als Loid Forger aus Spy x Family <br /> Foto: leolina_shots <br /> Anya:
              @kuricaet_cosplay
            </p>
          </>
        }
        column3={
          <>
            <StyledImageHome
              src={photo3}
              alt="Sasuke aus Naruto"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <p style={{ textAlign: "center", marginTop: 0 }}>
              🥉 3. Platz
              <br />
              <StyledLink href="https://www.instagram.com/_sunnycos/" target="_blank">
                _sunnycos
              </StyledLink>{" "}
              als Sasuke aus Naruto <br /> Foto: matze_photographing
            </p>
          </>
        }
        column4={
          <>
            <StyledImageHome
              src={photo4}
              alt="Aelin Ashryver Galathynius aus Throne of Glass"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <p style={{ textAlign: "center", marginTop: 0 }}>
              ⭐ Yumekais Favorite
              <br />
              <StyledLink href="https://www.instagram.com/myo_cos/" target="_blank">
                myo_cos
              </StyledLink>{" "}
              als Aelin Ashryver Galathynius aus Throne of Glass <br /> Foto: @der_doppelbock <br />
              Bearbeitung: @foto_yuu
            </p>
          </>
        }
      />
    </>
  );
}
