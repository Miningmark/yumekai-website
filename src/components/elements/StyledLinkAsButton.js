import styled from "styled-components";
import Link from "next/link";

export const StyledLinkAsButton = styled(Link)`
  border-radius: 5px;
  padding: 10px 20px;
  background: ${({ theme }) => theme.primaryColor};
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;
