import React from "react";
import styled from "styled-components";
import { RequiredNote } from "@/components/styledInputComponents";

export default function RadioButton({
  title,
  options,
  selectedOption,
  inputChange,
  inputRef,
  require = false,
  isError,
}) {
  return (
    <StyledWrapper $iserror={isError && "1"}>
      <p>
        <strong>
          {title}
          {require && <RequiredNote>*</RequiredNote>}
        </strong>
      </p>
      <div className="container">
        {options.map((option, index) => (
          <label key={`${title}-${option}`}>
            <input
              name={`${title}-${option}`}
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={(e) => inputChange(e.target.value)}
              ref={inputRef}
            />
            {option}
          </label>
        ))}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  margin-bottom: 10px;
  border-radius: 4px;
  ${({ $iserror }) => $iserror && `border: solid 2px red;`}
  ${({ $iserror }) => $iserror && `padding: 10px;`}
  .container {
    --s: 1rem; /* control the size */
    --g: 10px; /* the gap */
    --c: var(--primary-color); /* the active color */

    display: grid;
    grid-auto-rows: 1fr;
    gap: var(--g);
    position: relative;
  }
  .container:before {
    content: "";
    position: absolute;
    height: calc(var(--s) / 2);
    left: calc(var(--s) / 4 + var(--_x, 0px));
    top: calc(var(--s) / 4);
    background: var(--c);
    border-radius: 50%;
    aspect-ratio: 1;
    transition: 0.4s, left cubic-bezier(0.1, -2000, 0.7, -2000) 0.4s;
  }
  .container label {
    display: inline-flex;
    line-height: var(--s);
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }
  .container input {
    height: var(--s);
    aspect-ratio: 1;
    border: calc(var(--s) / 8) solid var(--_c, #939393);
    border-radius: 50%;
    outline-offset: calc(var(--s) / 10);
    padding: calc(var(--s) / 8);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    font-size: inherit;
    margin: 0;
    transition: 0.3s;
  }
  .container input:checked {
    --_c: var(--c);
  }
  .container:not(:has(input:checked)):before {
    --_i: -1;
    opacity: 0;
  }
  .container:has(input:checked):before {
    opacity: 1;
    transform: translateY(calc(var(--_i) * (var(--s) + var(--g))));
  }
  .container:has(label:nth-child(1) input:checked):before {
    --_i: 0;
    --_x: 0.02px;
  }
  .container:has(label:nth-child(2) input:checked):before {
    --_i: 1;
    --_x: 0.04px;
  }
  .container:has(label:nth-child(3) input:checked):before {
    --_i: 2;
    --_x: 0.06px;
  }
  .container:has(label:nth-child(4) input:checked):before {
    --_i: 3;
    --_x: 0.08px;
  }
  .container:has(label:nth-child(5) input:checked):before {
    --_i: 4;
    --_x: 0.1px;
  }

  @media print {
    input[type="radio"] {
      -webkit-appearance: auto;
      -moz-appearance: auto;
      appearance: auto;
      background: none;
    }
  }
  @supports not selector(:has(*)) {
    .container:before {
      display: none;
    }
    .container input:checked {
      --_c: var(--c);
      background: var(--c) content-box;
    }
  }

  p {
    margin: 0 0 10px 0;
  }
`;
