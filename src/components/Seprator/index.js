import React from "react";
import PropTypes from "prop-types";
import StyledSeprator from "./style";

function Seprator({ children, ...rest }) {
  return (
    <StyledSeprator {...rest}>
      {children}
    </StyledSeprator>
  );
}

// 属性规范
Seprator.propTypes = {
  children: PropTypes.any,
};

export default Seprator;
