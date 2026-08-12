import styled from "styled-components";

export const InputLabel = styled.label`
  transition: transform 120ms ease-in;
  font-weight: bold;
  line-height: 1.1;
  position: absolute;
  left: 0;
  top: 03px; //0
  padding: 0 4px;
  margin: 12px 4px;
  white-space: nowrap;
  transform: translate(0, 0);
  transform-origin: 0 -10px;
  background-color: ${({ theme }) => theme.backgroundColor1};

  -webkit-padding: 0 4px;
  -webkit-margin: 12px 4px;
  -webkit-appearance: none; /* Safari spezifisch */
  appearance: none; /* Standard */

  /*
  @-moz-document url-prefix() {
    margin: 26px 4px;
  }
    */
`;

export const InputField = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  min-height: 46px;
  border: 2px solid ${({ theme, $iserror }) => ($iserror ? "var(--danger)" : theme.border)};
  padding: 12px 10px;
  background: transparent;
  border-radius: var(--radius-sm);
  position: relative;
  color: ${({ theme }) => theme.text};
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);

  &:focus + ${InputLabel}, &:not(:placeholder-shown) + ${InputLabel} {
    transform: translate(6px, -100%) scale(0.8);
    color: ${({ theme }) => theme.secondaryColor};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.secondaryColor};
    box-shadow: 0 0 0 3px rgba(255, 176, 30, 0.25);
  }
`;

export const InputArea = styled.textarea`
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: 2px solid ${({ theme, $iserror }) => ($iserror ? "var(--danger)" : theme.border)};
  padding: 12px 10px;
  background: transparent;
  border-radius: var(--radius-sm);
  position: relative;
  color: ${({ theme }) => theme.text};
  resize: vertical;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);

  &:focus + ${InputLabel}, &:not(:placeholder-shown) + ${InputLabel} {
    transform: translate(0.25rem, -100%) scale(0.8);
    color: ${({ theme }) => theme.secondaryColor};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.secondaryColor};
    box-shadow: 0 0 0 3px rgba(255, 176, 30, 0.25);
  }
`;

export const InputWrapper = styled.label`
  position: relative;
  width: 100%;
  ${({ $iserror }) => $iserror && `border: solid 2px red;`}
  border-radius: 4px;
  margin-top: 10px;

  p {
    margin: 0;
    padding: 10px 0 10px 0;
  }
`;

export const InputCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  ${({ $iserror }) => $iserror && `border: solid 2px red;`}
  border-radius: 4px;

  align-items: center;
`;

export const InputRadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;

  &:focus {
    border: solid 2px red;
  }
`;

export const RadioButton = styled.input`
  margin-right: 0.5rem;
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: var(--transition-fast);

  &:checked {
    background-color: ${({ theme }) => theme.primaryColor};
    border: 2px solid ${({ theme }) => theme.primaryColor};
  }

  &:checked::before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.primaryColor};
    border-radius: 50%;
    margin: 2px;
  }
`;

export const RadioLabel = styled.label`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
`;

export const StyledSelect = styled.select`
  width: 100%;
  min-height: 46px;
  padding: 12px 10px;
  border: 2px solid ${({ theme, $iserror }) => ($iserror ? "var(--danger)" : theme.border)};
  border-radius: var(--radius-sm);
  background-color: ${({ theme }) => theme.backgroundColor1};
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  cursor: pointer;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);

  -webkit-appearance: none; /* Safari spezifisch */
  appearance: none; /* Standard */

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.secondaryColor};
    box-shadow: 0 0 0 3px rgba(255, 176, 30, 0.25);
  }

  option {
    background-color: ${({ theme }) => theme.backgroundColor3};
    color: ${({ theme }) => theme.text};
  }
`;

export const DropdownLabel = styled.label`
  transform: translate(0.25rem, -100%) scale(0.8);
  color: ${({ theme }) => theme.secondaryColor};
  font-weight: bold;
  line-height: 1.1;
  position: absolute;
  left: 0;
  top: 02px;
  padding: 0 4px;
  margin: 14px 4px;
  white-space: nowrap;
  background: ${({ theme }) => theme.backgroundColor1};
  -webkit-transform: translate(0px, -24px) scale(0.8);
  -webkit-appearance: none; /* Safari spezifisch */
  appearance: none; /* Standard */
`;

export const RequiredNote = styled.span`
  color: red;
  font-weight: bold;
`;
