import styled from "styled-components";
import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

//Components
import ImageCarousel from "@/components/elements/ImageCarousel";

//Slides
import Slide1 from "@/components/home/homeSliderPages/slide1";
import Slide2 from "@/components/home/homeSliderPages/slide2";
import Slide3 from "@/components/home/homeSliderPages/slide3";

const slideList = [Slide1, Slide2, Slide3];

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

export default function HomeSlider() {
  const duration = 3;
  const space = "0";
  const controls = false;
  const sliderAlign = "start";

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

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: sliderAlign, loop: true }, [
    Autoplay({ delay: duration * 1000 }),
  ]);

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
        </HomeSliderComponentContent>
      </HomeSliderComponentWrapper>
    </div>
  );
}
