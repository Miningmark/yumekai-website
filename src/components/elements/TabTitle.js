import { useId, useState } from "react";
import styled from "styled-components";

// Import Icons
import IconArrowDown from "/public/assets/icons/arrow_drop_down.svg";

/*
Aufruf der Component (unkontrolliert, eigener Zustand)

      <TabTitle
        title="Wann ist die YumeKai?"
        content="Der Termin der YumeKai 2025 ist noch nicht bekannt."
      />

Aufruf der Component (kontrolliert, z.B. damit immer nur ein Punkt einer Gruppe offen ist)

      <TabTitle
        title="Wann ist die YumeKai?"
        content="..."
        id="unique-id"
        isOpen={openId === "unique-id"}
        onToggle={(id) => setOpenId((current) => (current === id ? null : id))}
      />
*/

const Item = styled.div`
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: var(--radius-md);
  background-color: ${({ theme }) => theme.backgroundColor3};
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: box-shadow var(--transition-base), border-color var(--transition-base);

  & + & {
    margin-top: 12px;
  }

  ${({ $isopen, theme }) =>
    $isopen &&
    `
      border-color: ${theme.primaryColor}66;
      box-shadow: var(--shadow-md);
    `}
`;

const Header = styled.button`
  all: unset;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 18px 20px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.surfaceMuted};
  }

  &:focus-visible {
    outline: 3px solid var(--secondary-color);
    outline-offset: -3px;
    border-radius: var(--radius-sm);
  }
`;

const Title = styled.span`
  font-family: var(--font-heading), Tahoma, sans-serif;
  font-weight: 700;
  font-size: 1.15rem;
  line-height: 1.35;
  color: ${({ $isopen, theme }) => ($isopen ? theme.primaryColor : theme.text)};
  transition: color var(--transition-fast);

  @media (max-width: 500px) {
    font-size: 1.02rem;
  }
`;

const IconBadge = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ $isopen, theme }) => ($isopen ? theme.primaryColor : theme.surfaceMuted)};
  transition: background-color var(--transition-base);

  svg {
    width: 18px;
    height: 18px;
    fill: ${({ $isopen, theme }) => ($isopen ? "#fff" : theme.text)};
    transform: rotate(${({ $isopen }) => ($isopen ? "180deg" : "0deg")});
    transition: transform var(--transition-base), fill var(--transition-fast);
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: ${({ $isopen }) => ($isopen ? "1fr" : "0fr")};
  transition: grid-template-rows var(--transition-base);
`;

const ContentInner = styled.div`
  min-height: 0;
  overflow: hidden;
  padding: ${({ $isopen }) => ($isopen ? "0 20px 20px 20px" : "0 20px")};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  line-height: 1.6;

  p {
    margin: 0;
  }
  p + p,
  ul + p,
  p + ul {
    margin-top: 10px;
  }

  ul {
    margin: 0;
    padding-left: 22px;
  }
  li + li {
    margin-top: 6px;
  }
`;

export default function TabTitle({ title, content, id, isOpen: controlledOpen, onToggle }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const generatedId = useId();
  const itemId = id ?? generatedId;

  const isControlled = controlledOpen !== undefined && onToggle !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  const toggle = () => {
    if (isControlled) {
      onToggle(itemId);
    } else {
      setInternalOpen((open) => !open);
    }
  };

  return (
    <Item $isopen={isOpen}>
      <Header
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`${itemId}-content`}
        id={`${itemId}-header`}
      >
        <Title $isopen={isOpen}>{title}</Title>
        <IconBadge $isopen={isOpen}>
          <IconArrowDown />
        </IconBadge>
      </Header>
      <ContentWrapper
        $isopen={isOpen}
        role="region"
        aria-labelledby={`${itemId}-header`}
        id={`${itemId}-content`}
      >
        <ContentInner $isopen={isOpen}>{content}</ContentInner>
      </ContentWrapper>
    </Item>
  );
}
