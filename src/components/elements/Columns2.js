import styled from "styled-components";

/*
Aufruf der Component
mobile:   1 -> flex-direction column
          2 -> flex-direction row
reverse   false -> nothing
          true  -> chnage mobile order

      <Columns2
        left={
          <>
            <h2>überschrift</h2>
            <p>
              Lorem Impsum Dolor
            </p>
          </>
        }
        right={
          <>
            <h2>überschrift</h2>
            <p>
              Lorem Impsum Dolor
            </p>
          </>
        }
      />
*/

const ColumnsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({$align})=>($align==1 ? "center":"flex-start")};
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: ${({ $mobile }) => ($mobile == 1 ? "column" : "row")};
  }
`;

const Column = styled.div`
  width: calc(50% - 10px);

  @media (max-width: 800px) {
    width: ${({ $mobile }) => ($mobile == 1 ? "100%" : "calc(50% - 5px)")};
    ${({ $mobile }) => $mobile == 1 && "margin-bottom: 10px;"}
    order: ${({ $reverse, $isRight }) =>
      $reverse && $isRight ? -1 : $reverse && !$isRight ? 1 : 0};
  }
`;

export default function Columns2({ left, right, mobile = 1, reverse = false, align=1 }) {
  return (
    <ColumnsWrapper $mobile={mobile} $align={align}>
      <Column $mobile={mobile} $reverse={reverse} $isRight={false}>
        {left}
      </Column>
      <Column $mobile={mobile} $reverse={reverse} $isRight={true}>
        {right}
      </Column>
    </ColumnsWrapper>
  );
}
