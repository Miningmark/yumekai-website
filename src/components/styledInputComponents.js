import styled from "styled-components";

export const InputLabel = styled.label`
  transition: transform 120ms ease-in;
  font-weight: bold;
  line-height: 1.1;
  position: absolute;
  left: 0;
  top: 0;
  padding: 0 4px;
  margin: 12px 4px;
  white-space: nowrap;
  transform: translate(0, 0);
  transform-origin: 0 0;
  background-color: ${({ theme }) => theme.backgroundColor1};
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
  border: 2px solid ${({ theme }) => theme.text};
  padding: 12px 8px;
  background: transparent;
  border-radius: 4px;
  position: relative;
  color: ${({ theme }) => theme.text};

  &:focus + ${InputLabel}, &:not(:placeholder-shown) + ${InputLabel} {
    transform: translate(6px, -100%) scale(0.8);
    color: ${({ theme }) => theme.secondaryColor};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.secondaryColor};
  }
`;

export const InputArea = styled.textarea`
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.text};
  padding: 12px 8px;
  background: transparent;
  border-radius: 4px;
  position: relative;
  color: ${({ theme }) => theme.text};

  &:focus + ${InputLabel}, &:not(:placeholder-shown) + ${InputLabel} {
    transform: translate(0.25rem, -100%) scale(0.8);
    color: ${({ theme }) => theme.secondaryColor};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.secondaryColor};
  }
`;

export const InputWrapper = styled.label`
  position: relative;
  width: 100%;
`;

export const InputCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

// Stil für das Label des Dropdown-Menüs
export const DropdownLabel = styled.label`
  transition: transform 120ms ease-in;
  font-weight: bold;
  line-height: 1.1;
  position: absolute;
  left: 0;
  top: 0;
  padding: 0 4px;
  margin: 14px 4px;
  white-space: nowrap;
  transform: translate(0, 0);
  transform-origin: 0 0;
  background: ${({ theme }) => theme.backgroundColor2};
`;
/*
// Stil für das Dropdown-Menü
export const DropdownField = styled.select`
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: 2px solid var(--dark);
  padding: 12px 8px;
  background: transparent;
  border-radius: 4px;
  position: relative;
  color: var(--dark);

  &:focus + ${DropdownLabel}, &:not([value=""]) + ${DropdownLabel} {
    transform: translate(0.25rem, -100%) scale(0.8);
    color: var(--secondary-color);
  }

  &:focus {
    outline: none;
    border-color: var(--secondary-color);
  }
`;
*/
export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.div`
  box-sizing: border-box;
  display: block;
  width: 100%;
  border: 2px solid
    ${({ $dropdownopen, theme }) => ($dropdownopen == 1 ? theme.secondaryColor : theme.text)};
  padding: 12px 8px;
  background: transparent;
  border-radius: 4px;
  position: relative;
  color: ${({ theme }) => theme.text};
  cursor: pointer;

  &:focus + ${DropdownLabel}, &:not([value=""]) + ${DropdownLabel} {
    transform: translate(0.25rem, -100%) scale(0.8);
    color: ${({ theme }) => theme.secondaryColor};
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.secondaryColor};
  }
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor2};
  border-radius: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
  z-index: 1000;
`;

export const DropdownItem = styled.li`
  padding: 12px 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor2};
  }
`;

export const InputRadioWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RadioButton = styled.input`
  margin-right: 0.5rem;
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: 0.3s;

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
