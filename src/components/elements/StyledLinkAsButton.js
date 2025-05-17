import styled from "styled-components";
import Link from "next/link";

export const StyledLinkAsButton = styled(Link)`
  border-radius: 5px;
  padding: 10px 20px;
  background: ${({ theme }) => theme.primaryColor};
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
  transform: scale(1);
  height: 22px;
  text-align: center;
  display: inline-block;

  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`;
