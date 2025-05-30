import React, { useState } from "react";
import styled from "styled-components";
import StyledQuestionBG from "@/components/elements/survey25/StyledQuestionBG";

const TextContainer = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const TextInput = styled.textarea`
  width: calc(100% - 22px);
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  height: 100px;
  resize: vertical;
`;

const CharCount = styled.div`
  margin-top: 5px;
  font-size: 0.875rem;
  color: ${(props) => (props.remaining < 0 ? "red" : "#666")};
`;

export default function QuestionTextInput({ question, value, onChange }) {
  const [inputValue, setInputValue] = useState(value);
  const maxLength = 500;

  function handleChange(event) {
    const newValue = event.target.value;
    if (newValue.length <= maxLength) {
      setInputValue(newValue);
      onChange(newValue);
    } else {
      setInputValue(newValue.slice(0, maxLength));
      onChange(newValue.slice(0, maxLength));
    }
  }

  return (
    <StyledQuestionBG>
      <p>{question}</p>

      <TextContainer>
        <TextInput value={inputValue} onChange={handleChange} maxLength={maxLength} />
        <CharCount remaining={maxLength - inputValue.length}>
          {maxLength - inputValue.length} Zeichen verbleiben
        </CharCount>
      </TextContainer>
    </StyledQuestionBG>
  );
}
