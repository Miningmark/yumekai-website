import Image from "next/image";
import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

//Components
import Columns2 from "@/components/elements/Columns2";
import Columns3 from "@/components/elements/Columns3";
import RectangleContainer from "@/components/elements/RectangleContainer";
import MovingContentWrapper from "@/components/elements/MovingContent";
import { SpacerEmpty, StyledLink } from "@/components/styledComponents";

//Images
//import yumeKaiHeaderSmall from "/public/assets/logo/YumeKai-Header-Small.png";
import yumeKaiHeaderSmall from "/public/assets/logo/yumekai-Header-Large.jpg";
import yumeKaiHeaderLarge from "/public/assets/logo/yumekai-Header-Large.jpg";

//Icons
import ScheduleIcon from "/public/assets/icons/schedule.svg";
import YumeKaiLogo from "/public/assets/logo/yumekai_color_font.svg";
import cosplayerCollageImage from "/public/assets/images/yumekai2024/Cosplayer-Collage-2024.jpg";
import haendlerCollageImage from "/public/assets/images/yumekai2024/Handler-Collage-2024.jpg";
import kuenstlerCollageImage from "/public/assets/images/yumekai2024/Kunstler-Collage-2024.jpg";

const ScheduleIconWrapper = styled.div`
  margin-bottom: 10px;

  svg {
    fill: #363537;
  }
`;

const YumekaiHeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  img {
    width: 100%;
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  height: ${({ height }) => height}px;
`;

const LinkContent = styled.div`
  transform: translateY(0);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    transition: transform 0.3s ease-in-out;
  }
`;

export default function Projects() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    function updateDimensions() {
      setHeaderHeight(headerRef.current.clientHeight);
      setIsMobile(window.innerWidth < 800);
    }

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const headerImage = isMobile ? yumeKaiHeaderSmall : yumeKaiHeaderLarge;

  return (
    <>
      <HeaderContainer height={headerHeight}>
        <YumekaiHeaderWrapper ref={headerRef}>
          <SpacerEmpty />
          <Image
            src={headerImage}
            alt="YumeKai Projekt"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </YumekaiHeaderWrapper>
      </HeaderContainer>
      <SpacerEmpty />
      <h1>YumeKai</h1>
      <Columns2
        reverse={false}
        left={
          <>
            <p>
              Die YumeKai ist eine regelmäßige Veranstaltung im Süden Bayerns, die ein breit
              gefächertes Kultur-, Bühnen-, Händler- und Workshop-Programm bietet. Hier haben
              Besucher aller Art die Gelegenheit, in die faszinierende Welt der Popkultur,
              insbesondere der japanischen und asiatischen Kultur, einzutauchen. <br />
              <br />
              Unser Ziel ist es, eine beeindruckende Convention zu erschaffen, die für jeden
              Geschmack etwas Passendes bereithält. Über zwei Tage hinweg entsteht hier ein
              wahrgewordener Traum für Cosplayer, Anime- und Mangafans sowie Otakus und Nerds aller
              Erfahrungsstufen und für alle, die sich für diese Themen interessieren. <br />
              <br />
              Wir möchten eine Veranstaltung schaffen, die Jung und Alt gleichermaßen anspricht und
              unsere gemeinsamen Hobbys und Leidenschaften vermittelt. Die Mission der YumeKai
              besteht darin, diese Leidenschaften zu fördern und Begegnungen zwischen Menschen aber
              auch zwischen unterschiedlichen Kulturen zu ermöglichen. <br />
              <br />
              Die YumeKai soll ein Ort sein, an dem kleine und große Träume wahr werden können,
              unvergessliche Erlebnisse geschaffen werden und neue Verbindungen entstehen. <br />
              <br />
              Wenn auch du teil davon sein willst freuen wir uns wenn du uns auf dem Weg dahin
              begleitest! Wir sehen uns auf der YumeKai!
            </p>
          </>
        }
        right={
          <>
            <RectangleContainer center={1} color={1}>
              <h2 style={{ margin: "10px" }}>Nächste Veranstaltung</h2>
              <ScheduleIconWrapper>
                <ScheduleIcon />
              </ScheduleIconWrapper>
              <p>YumeKai</p>
              <p>Wo: Stadthalle Memmingen und Maximilian Kolbe Haus</p>
              <p>Wann: 31.05 - 01.06</p>
            </RectangleContainer>
            <MovingContentWrapper content={<YumeKaiLogo />}></MovingContentWrapper>
          </>
        }
      />
      <SpacerEmpty />
      <h2>Programm YumeKai 2024</h2>
      <p>
        Endlich war es so weit, die YumeKai hat zum ersten mal stattgefunden!{" "}
        <StyledLink href={"/review/yumekai-2024"}>Hier</StyledLink> könnt ihr euch das Programm der
        YumeKai noch einmal ansehen. Es gab das ganze Wochenende über viel zu entdecken. <br />{" "}
        <StyledLink href={"/review/yumekai-2024"}>Hier</StyledLink> habt ihr einmal ein paar kleine
        Einblicke, was alles geboten wurde. Für diejenigen, die bestimmte Künstler, Händler oder
        Special Guests suchen, steht das vollständige Programm der YumeKai 2024 mit einem Klick noch
        immer zur Verfügung, <StyledLink href={"/review/yumekai-2024"}>hier</StyledLink> könnt Ihr
        alle angekündigten Highlights und Programmpunkte finden. Wir sehen uns 2025 auf der nächsten
        YumeKai!
      </p>

      <Columns3
        left={
          <>
            <StyledLink href={"/review/yumekai-2024"}>
              <LinkContent>
                <h2 style={{ textAlign: "center" }}>Cosplayer</h2>
                <Image
                  src={cosplayerCollageImage}
                  alt="Cosplayer Collage"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </LinkContent>
            </StyledLink>
          </>
        }
        center={
          <>
            <StyledLink href={"/review/yumekai-2024"}>
              <LinkContent>
                <h2 style={{ textAlign: "center" }}>Händler</h2>
                <Image
                  src={haendlerCollageImage}
                  alt="Cosplayer Collage"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </LinkContent>
            </StyledLink>
          </>
        }
        right={
          <>
            <StyledLink href={"/review/yumekai-2024"}>
              <LinkContent>
                <h2 style={{ textAlign: "center" }}>Künstler</h2>
                <Image
                  src={kuenstlerCollageImage}
                  alt="Cosplayer Collage"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </LinkContent>
            </StyledLink>
          </>
        }
      />
    </>
  );
}
