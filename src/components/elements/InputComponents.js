import { useState, forwardRef } from "react";
import {
  InputField,
  InputArea,
  InputLabel,
  InputWrapper,
  InputCheckboxWrapper,
  DropdownLabel,
  DropdownContainer,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
  InputRadioWrapper,
  RadioButton,
  RadioLabel,
} from "@/components/styledInputComponents";

export function InputOptionInput({ title, inputText, inputChange, type = "text", inputRef }) {
  return (
    <>
      <InputWrapper className="input">
        <InputField
          className="inputField"
          placeholder=" "
          name={title}
          id={title}
          type={type}
          value={inputText || ""}
          onChange={(e) => inputChange(type === "number" ? +e.target.value : e.target.value)}
          ref={inputRef}
        />
        <InputLabel className="inputLabel" htmlFor={title}>
          {title}
        </InputLabel>
      </InputWrapper>
    </>
  );
}

export function InputOptionTextArea({ title, inputText, inputChange, inputRef }) {
  return (
    <>
      <InputWrapper className="input">
        <InputArea
          className="inputField"
          placeholder=""
          type="text"
          name={title}
          id={title}
          value={inputText || ""}
          onChange={(e) => inputChange(e.target.value)}
          rows="3"
          ref={inputRef}
        />
        <InputLabel className="inputLabel" htmlFor={title}>
          {title}
        </InputLabel>
      </InputWrapper>
    </>
  );
}

export function InputOptionTextAreaWithOutInput({ title, inputText, handleOnClick, inputRef }) {
  return (
    <>
      <InputWrapper className="input">
        <div
          onClick={handleOnClick}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        />
        <InputArea
          className="inputField"
          placeholder=""
          type="text"
          name={title}
          id={title}
          value={inputText || ""}
          rows="3"
          disabled
          ref={inputRef}
        />
        <InputLabel className="inputLabel" htmlFor={title}>
          {title}
        </InputLabel>
      </InputWrapper>
    </>
  );
}

export function InputOptionCheckbox({ title, isChecked, inputChange, inputRef }) {
  return (
    <>
      <InputCheckboxWrapper>
        <input
          type="checkbox"
          id={title}
          checked={isChecked}
          onChange={(e) => inputChange(e.target.checked)}
          ref={inputRef}
        />
        <label htmlFor={title}>{title}</label>
      </InputCheckboxWrapper>
    </>
  );
}

export function InputOptionSelect({ title, options, inputText, inputChange, inputRef }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    inputChange(option);
    setIsOpen(false);
  };

  return (
    <>
      <InputWrapper>
        <DropdownButton onClick={handleDropdownClick} $dropdownopen={isOpen ? 1 : 0}>
          {inputText ? inputText : "-- Auswahl --"}
        </DropdownButton>
        {isOpen && (
          <DropdownMenu>
            {options.map((option, index) => (
              <DropdownItem key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </DropdownItem>
            ))}
          </DropdownMenu>
        )}
        <DropdownLabel>{title}</DropdownLabel>
      </InputWrapper>
    </>
  );
}

export function InputOptionRadio({ title, options, selectedOption, inputChange, inputRef }) {
  return (
    <>
      <InputWrapper>
        <p>{title}</p>
        <InputRadioWrapper ref={inputRef}>
          {options.map((option, index) => (
            <div key={index}>
              <RadioButton
                type="radio"
                id={`${title}-${option}`}
                name={title}
                value={option}
                checked={selectedOption === option}
                onChange={(e) => inputChange(e.target.value)}
                ref={inputRef}
              />
              <RadioLabel htmlFor={`${title}-${option}`}>{option}</RadioLabel>
            </div>
          ))}
        </InputRadioWrapper>
      </InputWrapper>
    </>
  );
}
