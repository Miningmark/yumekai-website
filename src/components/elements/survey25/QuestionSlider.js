import styled from "styled-components";
import { useState } from "react";
import StyledQuestionBG from "@/components/elements/survey25/StyledQuestionBG";

const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

const Slider = styled.input`
  flex-grow: 1;
  margin: 0 10px;
  appearance: none;
  height: 6px;
  border-radius: 3px;
  background: ${({ $unselected, $value }) =>
    $unselected
      ? "#ccc"
      : `linear-gradient(to right, #4caf50 0%, #4caf50 ${($value / 10) * 100}%, #ccc ${
          ($value / 10) * 100
        }%, #ccc 100%)`};
  outline: none;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({ $unselected }) => ($unselected ? "#999" : "#4caf50")};
    cursor: pointer;
    border: 2px solid white;
    margin-top: -6px;
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${({ $unselected }) => ($unselected ? "#999" : "#4caf50")};
    cursor: pointer;
    border: 2px solid white;
  }
`;

const Emoji = styled.span`
  font-size: 1.5rem;
`;

const SliderValue = styled.div`
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
`;

const CheckboxContainer = styled.div`
  margin-top: 10px;
`;

export default function QuestionSlider({ question, value, onChange }) {
  const [notApplicable, setNotApplicable] = useState(false);

  const isUnselected = value === null || notApplicable;
  const displayValue = isUnselected ? 5 : value; // Mitte ist 5

  function handleSliderChange(event) {
    const newValue = Number(event.target.value);
    if (notApplicable) {
      setNotApplicable(false);
      console.log("Checkbox unchecked");
    }
    onChange(newValue);
  }

  function handleCheckboxChange(event) {
    setNotApplicable(event.target.checked);
    if (event.target.checked) {
      onChange(null);
    } else {
      onChange(null);
    }
  }

  return (
    <StyledQuestionBG>
      <p>{question}</p>

      <SliderContainer>
        <Emoji>👎</Emoji>
        <Slider
          type="range"
          min={0}
          max={10}
          step={1}
          value={notApplicable ? 5 : displayValue}
          onChange={handleSliderChange}
          $unselected={isUnselected}
          $value={displayValue}
        />
        <Emoji>👍</Emoji>
      </SliderContainer>

      <SliderValue>{notApplicable ? " " : value}</SliderValue>

      <CheckboxContainer>
        <label>
          <input type="checkbox" checked={notApplicable} onChange={handleCheckboxChange} />
          Keine Angabe
        </label>
      </CheckboxContainer>
    </StyledQuestionBG>
  );
}
