import styled from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

//Components
import { usePrevNextButtons } from "@/components/elements/ImageCarousel";

//Slides
import Slide1 from "@/components/home/homeSliderPages/slide1";
//import Slide2 from "@/components/home/homeSliderPages/slide2";
import Slide3 from "@/components/home/homeSliderPages/slide3";
//import Slide4 from "@/components/home/homeSliderPages/slide4";
import Slide5 from "@/components/home/homeSliderPages/slide5";

const slideList = [Slide1, Slide3, Slide5];

const useDotButtons = (emblaApi, onButtonClick) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const onDotButtonClick = useCallback(
    (index) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      if (onButtonClick) onButtonClick(emblaApi);
    },
    [emblaApi, onButtonClick],
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
};

const Embla = styled.section`
  max-width: 100%;
  margin: auto;
`;

const Embla_Viewport = styled.div`
  overflow: hidden;
`;

const Embla_Container = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y pinch-zoom;
  margin-left: calc(${({ $space }) => $space} * -1);

  @media (max-width: 800px) {
    margin-left: -20px;
  }
`;

const Embla_Slide = styled.div`
  min-width: 0;
  padding-left: ${({ $space }) => $space};
  flex: 0 0 calc(100% / ${({ $visiblecount }) => $visiblecount});

  @media (max-width: 800px) {
    flex: 0 0 calc(100% / ${({ $visiblecount }) => $visiblecount / 2});
    padding-left: 20px;
  }
`;

const HomeSliderComponentWrapper = styled.section`
  position: relative;
  height: 600px;

  @media (max-width: 800px) {
    height: 400px;
  }
`;

const HomeSliderComponentContent = styled.div`
  position: absolute;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);

  h2 {
    text-align: center;
    font-size: 2rem;

    @media (max-width: 500px) {
      font-size: 1.5rem;
    }
  }
`;

const HeroNavButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ $side, $scrollbarwidth }) =>
    $side === "prev" ? "left: 16px;" : `right: ${16 + $scrollbarwidth}px;`}
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: var(--radius-pill);
  background-color: ${({ theme }) => theme.backgroundColor2};
  color: ${({ theme }) => theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow-md);
  transition: var(--transition-base);
  z-index: 10;
  padding: 0;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    transform: translateY(-50%) scale(1.08);
    box-shadow: var(--shadow-lg), var(--shadow-glow);
  }

  &:disabled {
    opacity: 0.35;
    cursor: default;
    box-shadow: var(--shadow-sm);
  }

  @media (max-width: 800px) {
    width: 36px;
    height: 36px;
    ${({ $side, $scrollbarwidth }) =>
      $side === "prev" ? "left: 8px;" : `right: ${8 + $scrollbarwidth}px;`}

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const DotsRow = styled.div`
  position: absolute;
  bottom: 16px;
  left: ${({ $scrollbarwidth }) => `calc(50% - ${$scrollbarwidth / 2}px)`};
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
`;

const Dot = styled.button`
  width: ${({ $active }) => ($active ? "24px" : "9px")};
  height: 9px;
  padding: 0;
  border: none;
  border-radius: var(--radius-pill);
  background-color: ${({ theme, $active }) => ($active ? theme.primaryColor : theme.border)};
  cursor: pointer;
  transition: var(--transition-base);

  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
  }
`;

export default function HomeSlider() {
  const duration = 5;
  const space = "0";
  const sliderAlign = "start";

  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

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

  useEffect(() => {
    // 100vw includes the scrollbar track, so anything pinned via `right` inside
    // the full-bleed slider needs this offset to line up with the visible edge.
    function updateScrollbarWidth() {
      setScrollbarWidth(window.innerWidth - document.documentElement.clientWidth);
    }

    updateScrollbarWidth();
    window.addEventListener("resize", updateScrollbarWidth);
    return () => window.removeEventListener("resize", updateScrollbarWidth);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: sliderAlign, loop: true }, [
    Autoplay({ delay: duration * 1000, stopOnInteraction: false }),
  ]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false ? autoplay.reset : autoplay.stop;

    resetOrStop();
  }, []);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi, onNavButtonClick);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButtons(
    emblaApi,
    onNavButtonClick,
  );

  return (
    <div>
      <HomeSliderComponentWrapper ref={wrapperRef}>
        <HomeSliderComponentContent ref={contentRef}>
          <Embla className="embla">
            <Embla_Viewport ref={emblaRef}>
              <Embla_Container $space={space}>
                {slideList.map((SlideComponent, index) => {
                  return (
                    <Embla_Slide $visiblecount={1} $space={space} key={index}>
                      <SlideComponent key={index} />
                    </Embla_Slide>
                  );
                })}
              </Embla_Container>
            </Embla_Viewport>
          </Embla>

          <HeroNavButton
            type="button"
            $side="prev"
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            aria-label="vorherige Folie"
          >
            <svg viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
              />
            </svg>
          </HeroNavButton>
          <HeroNavButton
            type="button"
            $side="next"
            $scrollbarwidth={scrollbarWidth}
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            aria-label="nächste Folie"
          >
            <svg viewBox="0 0 532 532">
              <path
                fill="currentColor"
                d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
              />
            </svg>
          </HeroNavButton>

          <DotsRow $scrollbarwidth={scrollbarWidth}>
            {scrollSnaps.map((_, index) => (
              <Dot
                key={index}
                $active={index === selectedIndex}
                onClick={() => onDotButtonClick(index)}
                aria-label={`Folie ${index + 1} anzeigen`}
                aria-current={index === selectedIndex}
              />
            ))}
          </DotsRow>
        </HomeSliderComponentContent>
      </HomeSliderComponentWrapper>
    </div>
  );
}
