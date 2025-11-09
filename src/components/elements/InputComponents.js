import {
  InputField,
  InputArea,
  InputLabel,
  InputWrapper,
  InputCheckboxWrapper,
  DropdownLabel,
  InputRadioWrapper,
  RadioButton,
  RadioLabel,
  StyledSelect,
  RequiredNote,
} from "@/components/styledInputComponents";

export function InputOptionInput({
  title,
  inputText,
  inputChange,
  type = "text",
  inputRef,
  require = false,
  isError,
  min = 0,
  max = 99999,
  step = 1,
  onBlur = () => {},
}) {
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
          onBlur={onBlur}
          $iserror={isError && "1"}
          {...(type === "number" && { min, max, step })}
        />
        <InputLabel className="inputLabel" htmlFor={title}>
          {title}
          {require && <RequiredNote>*</RequiredNote>}
        </InputLabel>
      </InputWrapper>
    </>
  );
}

export function InputOptionTextArea({
  title,
  inputText,
  inputChange,
  inputRef,
  require = false,
  isError,
  onBlur = () => {},
}) {
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
          rows="5"
          ref={inputRef}
          $iserror={isError && "1"}
          onBlur={onBlur}
        />
        <InputLabel className="inputLabel" htmlFor={title}>
          {title} {require && <RequiredNote>*</RequiredNote>}
        </InputLabel>
      </InputWrapper>
    </>
  );
}

export function InputOptionCheckbox({
  title,
  content = title,
  isChecked,
  inputChange,
  inputRef,
  require = false,
  isError,
}) {
  return (
    <>
      <InputCheckboxWrapper $iserror={isError && "1"}>
        <input
          type="checkbox"
          id={title}
          checked={isChecked}
          onChange={(e) => inputChange(e.target.checked)}
          ref={inputRef}
        />
        <label htmlFor={title}>{content}</label>
      </InputCheckboxWrapper>
    </>
  );
}

export function InputOptionSelect({
  title,
  options,
  names,
  inputText,
  inputChange,
  inputRef,
  require = false,
  isError,
}) {
  const nameOptions = names || options;
  return (
    <>
      <InputWrapper>
        <StyledSelect
          value={inputText}
          onChange={(e) => inputChange(e.target.value)}
          ref={inputRef}
          $iserror={isError && "1"}
        >
          <option value="" disabled>
            Bitte wählen
          </option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {nameOptions[index]}
            </option>
          ))}
        </StyledSelect>
        <DropdownLabel>
          {title}
          {require && <RequiredNote>*</RequiredNote>}
        </DropdownLabel>
      </InputWrapper>
    </>
  );
}

export function InputOptionRadio({
  title,
  options,
  selectedOption,
  inputChange,
  inputRef,
  require = false,
  isError,
}) {
  return (
    <>
      <InputWrapper $iserror={isError && "1"}>
        <p>
          <strong>
            {title}
            {require && <RequiredNote>*</RequiredNote>}
          </strong>
        </p>
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
