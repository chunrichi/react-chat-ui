import styled from "styled-components";

const StyledIcon = styled.div`
  /* 行内布局 */
  display: inline-flex;
  /* 居中 */
  align-items: center;
  justify-content: center;

  svg,
  svg * {
    ${({ color }) => (color ? `fill:${color}` : "")};
    ${({ opacity }) => (opacity ? `opacity:${opacity}` : "")};
  }
`;

export default StyledIcon;
