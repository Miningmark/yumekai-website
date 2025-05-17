import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

// Import Icons
import IconReturn from "/public/assets/icons/chevron_left.svg";

const LinkButton = styled(Link)`
  position: sticky;
  left: 0px;
  top: 80px;
  z-index: 9999;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f6f6f9;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  z-index: 900;
  opacity: 0.8;
  margin-top: 10px;

  text-decoration: none;
  color: ${({ theme }) => theme.primaryColor};

  @media (max-width: 900px) {
    left: 5px;
    top: 80px;

    width: 35px;
    height: 35px;
  }

  svg {
    fill: black;
    width: 40px;
    height: 40px;
    padding: 0;
  }

  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
    opacity: 1;
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
      <LinkButton href={link}>
        <IconReturn />
        <span>{tooltip}</span>
      </LinkButton>
    </>
  );
}
