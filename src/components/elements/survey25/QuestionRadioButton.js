import styled from "styled-components";
import StyledQuestionBG from "@/components/elements/survey25/StyledQuestionBG";

const RadioGroup = styled.div`
  display: flex;

  margin-top: 10px;
`;

const RadioButtonLabel = styled.label`
  margin: 5px;
`;

const RadioButton = styled.input`
  margin-right: 3px;
`;

export default function QuestionRadioButton({ question, options, value, onChange }) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <StyledQuestionBG>
      <p>{question}</p>

      <RadioGroup>
        {options.map((option) => (
          <RadioButtonLabel key={option}>
            <RadioButton
              type="radio"
              name="day"
              value={option}
              checked={value === option}
              onChange={handleChange}
            />
            {option}
          </RadioButtonLabel>
        ))}
      </RadioGroup>
    </StyledQuestionBG>
  );
}
