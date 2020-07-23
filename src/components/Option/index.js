import React from "react";
import PropTypes from "prop-types";
import StyledOption from "./style";

function Option({ children, ...rest }) {
  return (
    <StyledOption {...rest}>
      {children}
    </StyledOption>
  );
}

// 属性规范
Option.propTypes = {
  children: PropTypes.any,
};

export default Option;
