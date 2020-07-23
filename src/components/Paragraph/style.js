import styled, { css } from "styled-components";
import StyledText from "components/Text/style";

// 直接使用Text的属性
const StyledParagraph = styled(StyledText)`
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    `}
`;

export default StyledParagraph;
