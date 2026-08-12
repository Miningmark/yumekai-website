import styled from "styled-components";
import Link from "next/link";

export const StyledLinkAsButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: var(--radius-md);
  padding: 12px 26px;
  min-height: 46px;
  background: ${({ theme }) => theme.primaryColor};
  color: white;
  text-decoration: none;
  font-family: var(--font-heading), Tahoma, sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: var(--transition-base);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md), var(--shadow-glow);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
