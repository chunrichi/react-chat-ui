import React from "react";
import PropTypes from "prop-types";
import StyledLableContainer from "./style";
import Text from "components/Text";

function LableContainer({ children, label, ...rest }) {
  return (
    <StyledLableContainer {...rest}>
      {label && <Text style={{ marginBottom: "8px" }}>{label}：</Text>}
      {children}
    </StyledLableContainer>
  );
}

// 属性规范
LableContainer.propTypes = {
  children: PropTypes.any,
};

export default LableContainer;
