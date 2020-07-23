import styled from "styled-components";
import CaretDown from "assets/icons/caret_down.svg";

const StyledSelect = styled.select`
  /* 隐藏下拉按钮，改自定义 */
  /* sytled components 有相关的库直接使用appearance */
  appearance: none;
  background-image: url(${CaretDown});
  background-repeat: no-repeat;
  background-position: right center;
  background-color: transparent;
  border: none;
  padding-right: 14px;
  font-size: ${({ theme }) => theme.normal};
  color: ${({ theme }) => theme.grayDark};

  /* ie下 */
  ::-ms-expand {
    display: none;
  }
`;

export default StyledSelect;
