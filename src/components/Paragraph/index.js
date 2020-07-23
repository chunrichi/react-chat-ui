import React from "react";
import PropTypes from "prop-types";
import StyledParagraph from "./style";

// ellipsis 单行超长是否显示...
// 对styled-components的元素 as 可以更改类型
function Paragraph({ children, ellipsis, ...rest }) {
  return (
    <StyledParagraph as="p" ellipsis={ellipsis} {...rest}>
      {children}
    </StyledParagraph>
  );
}

// 属性规范
Paragraph.propTypes = {
  children: PropTypes.any,
  ellipsis: PropTypes.bool,
  type: PropTypes.oneOf(["primary", "secondary", "danger"]),
  size: PropTypes.oneOf([
    "normal",
    "medium",
    "large",
    "xlarge",
    "xxlarge",
    "small",
    "xsmall",
    "xxsamll",
  ]),
  bold: PropTypes.bool,
};

export default Paragraph;
