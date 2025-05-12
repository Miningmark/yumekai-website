import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

// Import Icons
import IconUp from "/public/assets/icons/arrow_drop_up.svg";

const LinkButton = styled(Link)`
  position: fixed;
  left: 50px;
  top: 100px;
  z-index: 9999;
  width: 50px;
  height: 50px;
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

  text-decoration: none;
  color: ${({ theme }) => theme.primaryColor};

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
`;

export default function ReturnButton({link}){

    return (<>
        <LinkButton href={link}>
            <IconUp />
          </LinkButton>
          </>)
}