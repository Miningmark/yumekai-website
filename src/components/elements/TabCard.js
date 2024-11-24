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
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
`;

const TabHeader = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundColor3};
`;

const TabButton = styled.button`
  flex: 1;
  padding: 10px;
  background: ${({ $active }) => ($active ? "#ddd" : "transparent")};
  color: ${({ theme }) => theme.primaryColor};
  border: none;
  border-bottom: 2px solid #ddd;
  cursor: pointer;
  font-size: 1.2rem;
  transition: 0.3s;

  &:hover {
    background: #ddd;
  }

  &:focus {
    outline: none;
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
