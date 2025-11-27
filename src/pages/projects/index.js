import Columns2 from "@/components/elements/Columns2";
import { Spacer, SpacerEmpty } from "@/components/styledComponents";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

//logos
import YumeKaiLogo from "/public/assets/logo/yumekai_color_font.svg";
import YumeKaiNightLogo from "/public/assets/logo/yumekai-night-logo.png";

const ProjectLink = styled(Link)`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-large);
  border: solid 3px ${({ theme }) => theme.secondaryColor};

  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s;
  }

  svg {
    width: 70%;
    height: 70%;
    padding: 5% 0;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export default function Projects() {
  return (
    <>
      <h1>Projekte</h1>
      <p>
        Wir bei YumeKai haben die Vision, mit all unseren Projekten Menschen zu begeistern. Egal ob
        es sich um unsere große Convention YumeKai handelt oder um eines unserer kleineren geplanten
        Projekte. Für uns ist es das Wichtigste, dass jedes unserer Events zu einem unvergesslichen
        Traumerlebnis wird.
        <br />
        Wir möchten jeden Besucher verzaubern und geben dafür bei jedem noch so kleinen Event unser
        Bestes. Unser Ziel ist es, Jung und Alt durch (Populär-)Kultur zusammenzubringen und
        unvergessliche Momente zu schaffen.
      </p>
      <SpacerEmpty />
      <Columns2
        reverse={true}
        left={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ProjectLink href={"/projects/yumekai"}>
              <YumeKaiLogo />
            </ProjectLink>
          </div>
        }
        right={
          <>
            <h2>YumeKai</h2>
            <p>
              Die YumeKai ist eine jährliche Veranstaltung im Süden Bayerns, die Fans der
              asiatischen und vor allem japanischen Popkultur durch ein breites Programm aus Kultur,
              Bühnenauftritten, Workshops und Händlern zusammenbringt, um gemeinsame Leidenschaften
              zu teilen und kulturelle Begegnungen zu fördern.
            </p>
          </>
        }
      />
      <Spacer />
      <Columns2
        left={
          <>
            <h2>YumeKai Night</h2>
            <p>
              Die YumeKai - Night ist eine abendliche Veranstaltung im Süden Bayerns, die asiatische
              Musik, Gaming und Cosplay in den Mittelpunkt stellt. Tauche ein in die Popkultur,
              feiere zu J-Pop, K-Pop und deutschen Anime-Openings, und genieße eine unvergessliche
              Nacht mit Gleichgesinnten.
            </p>
          </>
        }
        right={
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ProjectLink href={"/projects/yumekai-night"}>
              <Image src={YumeKaiNightLogo} alt="" />
            </ProjectLink>
          </div>
        }
      />
      <SpacerEmpty />
    </>
  );
}
