import styled from "styled-components";

// Import Icons
import IconDark from "/public/assets/icons/dark_mode.svg";
import IconLight from "/public/assets/icons/light_mode.svg";

const ThemeToggleButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-pill);
  transition: background-color var(--transition-fast), transform var(--transition-fast);

  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme.text};
  }

  &:hover {
    background-color: ${({ theme }) => theme.surfaceMuted};
    transform: rotate(-12deg);
  }
`;

export default function DarkLightMode({ toggleTheme, theme }) {
  return (
    <ThemeToggleButton onClick={toggleTheme} aria-label="Dark / Light mode switch">
      {theme === "light" ? <IconDark /> : <IconLight />}
    </ThemeToggleButton>
  );
}
