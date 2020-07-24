import styled from "styled-components";
import StyledIcon from "components/Icon/style";

const Title = styled.div`
  /* 开启grid 高度沾满第二列 */
  display: grid;
`;

const Actions = styled.div`
  display: flex;
  /* 分散对齐 */
  justify-content: space-between;
  align-items: center;

  ${StyledIcon} {
    cursor: pointer;
  }
`;

const StyledTitleBar = styled.div`
  display: grid;
  grid-template-columns: 62px 1fr 112px;
  padding: 30px;
  max-height: 110px;
  border-bottom: 1px solid ${({ theme }) => theme.gray4};
`;

export default StyledTitleBar;
export { Title, Actions };
