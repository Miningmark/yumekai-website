import { useState } from "react";
import styled from "styled-components";

/*
Aufruf der Component

<TabCard
  tabs={[
    {
      title: 'Tab 1',
      content: (
        <>
          <h2>Tab 1 Inhalt</h2>
          <p>Lorem Impsum Dolor für Tab 1</p>
        </>
      ),
    },
    {
      title: 'Tab 2',
      content: (
        <>
          <h2>Tab 2 Inhalt</h2>
          <p>Lorem Impsum Dolor für Tab 2</p>
        </>
      ),
    },
    {
      title: 'Tab 3',
      content: (
        <>
          <h2>Tab 3 Inhalt</h2>
          <p>Lorem Impsum Dolor für Tab 3</p>
        </>
      ),
    },
  ]}
/>
*/

const TabContainer = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
`;

const TabHeader = styled.div`
  display: flex;
  gap: 2px;
  padding: 6px;
  background-color: ${({ theme }) => theme.backgroundColor3};
  overflow-x: auto;
`;

const TabButton = styled.button`
  flex: 1;
  min-width: max-content;
  min-height: 44px;
  padding: 10px 16px;
  background: ${({ $active, theme }) => ($active ? theme.primaryColor : "transparent")};
  color: ${({ $active, theme }) => ($active ? "#fff" : theme.primaryColor)};
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  font-family: var(--font-heading), Tahoma, sans-serif;
  font-weight: 600;
  font-size: 1.05rem;
  transition: var(--transition-fast);

  &:hover {
    background: ${({ $active, theme }) => ($active ? theme.primaryColor : theme.surfaceMuted)};
  }

  &:focus-visible {
    outline: 3px solid var(--secondary-color);
    outline-offset: -3px;
  }
`;

const TabContent = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundColor3};
`;

export default function TabCard({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabContainer>
      <TabHeader>
        {tabs.map((tab, index) => (
          <TabButton key={index} $active={activeTab === index} onClick={() => setActiveTab(index)}>
            {tab.title}
          </TabButton>
        ))}
      </TabHeader>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </TabContainer>
  );
}
