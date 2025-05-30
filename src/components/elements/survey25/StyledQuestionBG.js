import styled from "styled-components";

const StyledQuestionBG = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor4};
  border-radius: var(--border-radius-large);
  padding: 10px;
  width: 100%;
  margin: 10px 0;
`;

export default StyledQuestionBG;
