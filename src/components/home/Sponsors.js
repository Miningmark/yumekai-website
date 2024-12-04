import styled from "styled-components";
import { useRef, useEffect } from "react";

//Components
import ImageCarousel from "@/components/elements/ImageCarousel";

//Sponsor Images
import arnosRetroVideogamesImage from "/public/assets/images/sponsors/Arnos_Retro_Videogames.png";
import cineplexImage from "/public/assets/images/sponsors/Cineplex.png";
import cohekiImage from "/public/assets/images/sponsors/CoHeKi.png";
import comicTimeImage from "/public/assets/images/sponsors/comic_time.png";
import foamlordImage from "/public/assets/images/sponsors/Foamlord.png";
import fuyukoImage from "/public/assets/images/sponsors/fuyuko.png";
import heldenschmiedeImage from "/public/assets/images/sponsors/Heldenschmiede.png";
import japandigestImage from "/public/assets/images/sponsors/japandigest.png";
import mangaMerchImage from "/public/assets/images/sponsors/manga_merch.png";
import sndrbrImage from "/public/assets/images/sponsors/sndrbr.png";
import squiggzImage from "/public/assets/images/sponsors/Squiggz.png";
import zauberfederImage from "/public/assets/images/sponsors/Zauberfeder.png";
import stadtMM from "/public/assets/images/sponsors/Stadt_Memmingen.png";
import mrVeranstaltung from "/public/assets/images/sponsors/MR_Veranstaltung.png";
import { SpacerEmpty } from "../styledComponents";

const sponsorList = [
  {
    image: arnosRetroVideogamesImage,
    alt: "Arnos Retro Videogames",
    link: "https://www.arnos-retro-videogames.com/",
  },
  { image: cineplexImage, alt: "Cineplex", link: "https://www.cineplex.de/memmingen/" },
  { image: cohekiImage, alt: "CoHeKi", link: "https://coheki.de/" },
  { image: comicTimeImage, alt: "Comic Time", link: "https://www.comic-time.de/de/" },
  { image: foamlordImage, alt: "Foamlord", link: "https://www.foamlord.de/" },
  { image: fuyukoImage, alt: "Fuyuko", link: "https://fuyuko.de/" },
  { image: heldenschmiedeImage, alt: "Heldenschmiede", link: "https://www.heldenschmiede.eu/" },
  { image: japandigestImage, alt: "Japandigest", link: "https://www.japandigest.de/" },
  { image: mangaMerchImage, alt: "Manga Merch", link: "https://manga-merch.com/" },
  { image: sndrbrImage, alt: "Sndrbr", link: "https://sndrbr.de/" },
  { image: squiggzImage, alt: "Squiggz", link: "https://www.squiggz.com/" },
  { image: zauberfederImage, alt: "Zauberfeder", link: "https://zauberfeder.de/" },
  { image: stadtMM, alt: "Stadt Memmingen", link: "https://www.memmingen.de/" },
  { image: mrVeranstaltung, alt: "M&R Veranstaltung", link: "https://mr-veranstaltung.de/" },
];

const SponsorsComponentWrapper = styled.section`
  position: relative;
  margin-top: 30px;
`;

const SponsorsComponentContent = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.backgroundColor4};
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 40px;

  h2 {
    text-align: center;
    font-size: 2rem;

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;

const EllipseTop = styled.div`
  position: absolute;
  width: 100vw;
  height: 40px;
  background-color: ${({ theme }) => theme.backgroundColor4};
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  border-radius: 40% 50% 0 0;
  z-index: 1;
`;

export default function SponsorsComponent() {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    function updateHeight() {
      if (wrapperRef.current && contentRef.current) {
        wrapperRef.current.style.height = `${contentRef.current.offsetHeight - 10}px`;
      }
    }

    updateHeight();

    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div>
      <SponsorsComponentWrapper ref={wrapperRef}>
        <EllipseTop />
        <SponsorsComponentContent ref={contentRef}>
          <h2>Sponsoren & Partner</h2>
          <ImageCarousel
            visibleCount={8}
            duration={3}
            images={sponsorList}
            space="50px"
            sliderAlign={"start"}
            controls={false}
          />
          <SpacerEmpty />
        </SponsorsComponentContent>
      </SponsorsComponentWrapper>
    </div>
  );
}
