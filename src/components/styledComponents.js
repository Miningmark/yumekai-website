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
