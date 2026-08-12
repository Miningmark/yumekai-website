import Link from "next/link";
import styled from "styled-components";

// Import Icons
import IconReturn from "/public/assets/icons/chevron_left.svg";

const LinkButton = styled(Link)`
  position: sticky;
  left: 0px;
  top: 80px;
  z-index: 900;
  width: 44px;
  height: 44px;
  border-radius: var(--radius-pill);
  background-color: ${({ theme }) => theme.backgroundColor2};
  border: 2px solid ${({ theme }) => theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: var(--transition-base);
  box-shadow: var(--shadow-sm);
  margin-top: 10px;

  text-decoration: none;
  color: ${({ theme }) => theme.primaryColor};

  @media (max-width: 900px) {
    left: 5px;
    top: 80px;
  }

  svg {
    fill: ${({ theme }) => theme.primaryColor};
    width: 24px;
    height: 24px;
    padding: 0;
  }

  &:hover {
    transform: translateY(-2px) scale(1.06);
    box-shadow: var(--shadow-md), var(--shadow-glow);
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }

  span {
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    white-space: nowrap;
    font-size: 12px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }
`;

export default function ReturnButton({ link, tooltip = "Zurück" }) {
  return (
    <>
      <LinkButton href={link} aria-label={tooltip} role="link">
        <IconReturn />
        <span>{tooltip}</span>
      </LinkButton>
    </>
  );
}
