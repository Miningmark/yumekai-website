import React from "react";
import styled from "styled-components";

export default function CheckBox({
  title,
  content = title,
  isChecked,
  inputChange,
  inputRef,
  require = false,
  isError,
}) {
  return (
    <StyledWrapper $iserror={isError && "1"}>
      <label className="checkbox-btn">
        <input
          id={title}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => inputChange(e.target.checked)}
          ref={inputRef}
        />
        <span className="checkmark" />
      </label>
      <label htmlFor={title}>{content}</label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;

  /* Customize the label (the checkbox-btn) */
  .checkbox-btn {
    display: flex;
    align-items: center;
    position: relative;
    width: 25px;
    height: 29px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default checkbox */
  .checkbox-btn input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  label {
    cursor: pointer;
    font-size: 1.125rem;

    @media (max-width: 550px) {
      font-size: 1rem;
    }
  }
  /* Create a custom checkbox */
  .checkmark {
    height: 25px;
    width: 25px;
    border: 2.5px solid ${({ theme }) => theme.text};
    border-radius: 5px;
    transition: 0.2s linear;
    flex-shrink: 0; /* Verhindert, dass die Checkbox skaliert wird */
  }
  .checkbox-btn input:checked ~ .checkmark {
    background-color: transparent;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: "";
    position: absolute;
    visibility: hidden;
    opacity: 0;
    left: 50%;
    top: 40%;
    width: 10px;
    height: 14px;
    border: 2px solid var(--success);
    filter: drop-shadow(0px 0px 10px var(--success));
    border-width: 0 2.5px 2.5px 0;
    transition: 0.2s linear;
    transform: translate(-50%, -50%) rotate(-90deg) scale(0.2);
  }

  /* Show the checkmark when checked */
  .checkbox-btn input:checked ~ .checkmark:after {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg) scale(1);
    animation: pulse 1s ease-in;
  }

  .checkbox-btn input:checked ~ .checkmark {
    transform: rotate(45deg);
    border: none;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) rotate(0deg) scale(1.6);
    }
  }

  border-radius: 5px;
  ${({ $iserror }) => $iserror && `border: solid 2px red;`}
  ${({ $iserror }) => $iserror && `padding: 10px 0;`}

  p {
    margin: 0;
    padding: 0;
  }
`;
