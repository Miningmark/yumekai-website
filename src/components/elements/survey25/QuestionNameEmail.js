import styled from "styled-components";
import StyledQuestionBG from "@/components/elements/survey25/StyledQuestionBG";

const TextContainer = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const TextInput = styled.input`
  width: calc(100% - 22px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

export default function UserInputForm({ nameValue, emailValue, onNameChange, onEmailChange }) {
  function handleNameChange(event) {
    onNameChange(event.target.value);
  }

  function handleEmailChange(event) {
    onEmailChange(event.target.value);
  }

  return (
    <StyledQuestionBG>
      <p>Name:</p>
      <TextContainer>
        <TextInput type="text" value={nameValue} onChange={handleNameChange} placeholder="Name" />
      </TextContainer>

      <p>E-Mail:</p>
      <TextContainer>
        <TextInput
          type="email"
          value={emailValue}
          onChange={handleEmailChange}
          placeholder="E-Mail"
        />
      </TextContainer>
    </StyledQuestionBG>
  );
}
