import Image from "next/image";
import styled from "styled-components";
import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const usePrevNextButtons = (emblaApi, onButtonClick) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    if (onButtonClick) onButtonClick(emblaApi);
  }, [emblaApi, onButtonClick]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className="embla__button embla__button--prev" type="button" {...restProps}>
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button className="embla__button embla__button--next" type="button" {...restProps}>
      <svg className="embla__button__svg" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  );
};

const ImageTest = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: var(--border-radius-large);
`;

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

export default function ImageSlider({
  images,
  visibleCount,
  duration = 2,
  space = "1rem",
  sliderAlign = "center",
  controls = true,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: sliderAlign, loop: true }, [
    Autoplay({ delay: duration * 1000 }),
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

  return (
    <Embla className="embla">
      <Embla_Viewport ref={emblaRef}>
        <Embla_Container $space={space}>
          {images.map((imageObj, index) => {
            const isObject = typeof imageObj === "object" && imageObj !== null;
            const imageUrl = isObject ? imageObj.image : imageObj;
            const imageLink = isObject ? imageObj.link : null;

            const imageElement = (
              <div className="embla__slide__number">
                <ImageTest src={imageUrl} alt={isObject ? imageObj.alt : "Bild"} />
              </div>
            );

            return (
              <Embla_Slide $visiblecount={visibleCount} $space={space} key={index}>
                {imageLink ? (
                  <a href={imageLink} target="_blank" rel="noopener noreferrer">
                    {imageElement}
                  </a>
                ) : (
                  imageElement
                )}
              </Embla_Slide>
            );
          })}
        </Embla_Container>
      </Embla_Viewport>
      {controls && (
        <div className="embla__controls">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
              aria-label="vorheriges Bild"
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
              aria-label="nächstes Bild"
            />
          </div>
        </div>
      )}
    </Embla>
  );
}
