import Link from "next/link";
import styled from "styled-components";

export const PageWrapper = styled.main`
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  background-color: ${({ theme }) => theme.primaryColor};
  color: #f5f5f5;
  transition: var(--transition-base);
  padding: 12px 26px;
  min-height: 46px;
  border-radius: var(--radius-md);
  font-family: var(--font-heading), Tahoma, sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  cursor: pointer;
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-md), var(--shadow-glow);
  }

  &:active {
    transform: translateY(-1px);
  }
`;

export const UnstyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.primaryColor};
  font-weight: 600;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: color var(--transition-fast), background-size var(--transition-base);

  &:hover {
    color: ${({ theme }) => theme.activeLinkColor};
    background-size: 100% 2px;
  }
`;

export const Spacer = styled.div`
  height: 2px;
  background-color: ${({ theme }) => theme.text};
  margin: 35px 0 25px 0;

  @media (max-width: 500px) {
    margin: 15px 0;
  }
`;

export const SpacerEmpty = styled.div`
  height: 2px;
  margin: 35px 0 25px 0;

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

  h3 {
    margin: 20px 0 0 0;
  }
`;

export const ErrorText = styled.p`
  color: var(--danger);
  font-weight: bold;
`;

export const SuccessText = styled.p`
  color: var(--success);
  font-weight: bold;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const DynamicContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({$justify}) => $justify && $justify};
  align-content: ${({$align})=> $align && $align};
  width: ${({ $widthpercent }) => `calc(${$widthpercent}% - 10px)`};
  ${({ $maxwidth }) => $maxwidth && `max-width: ${$maxwidth}px;`}

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const RegistrationInfobox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  background-color: var(--secondary-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 35px;

  p {
    color: var(--on-brand);
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
    margin: 0;
    padding: 0;
  }
`;
