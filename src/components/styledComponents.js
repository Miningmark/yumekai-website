import Link from "next/link";
import styled from "styled-components";

export const PageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColor1};
`;

export const PageContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 1200px;
  max-width: 90vw;
  padding: 0 10px 50px 10px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: ${({ theme }) => theme.primaryColor};
  color: #f5f5f5;
  transition: 0.3s;
  padding: 10px 20px;
  border-radius: var(--border-radius-large);
  font-size: large;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    transition: 0.3s;
  }
`;

export const UnstyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryColor};

  &:hover {
    color: ${({ theme }) => theme.activeLinkColor};
  }
`;

export const Spacer = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.text};
  margin: 25px 0;

  @media (max-width: 500px) {
    margin: 15px 0;
  }
`;

export const SpacerEmpty = styled.div`
  height: 2px;
  margin: 25px 0;

  @media (max-width: 500px) {
    margin: 15px 0;
  }
`;

export const BoldText = styled.span`
  font-weight: bold;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ErrorText = styled.p`
  color: var(--danger);
  font-weight: bold;
`;

export const SuccessText = styled.p`
  color: var(--success);
  font-weight: bold;
`;
