import React from "react";
import PropTypes from "prop-types";
import StyledSelect from "./style";
import LableContainer from "components/LableContainer";

function Select({ label, type, children, ...rest }) {
  const selectWithoutLabel = (
    <StyledSelect type={type} {...rest}>
      {children}
    </StyledSelect>
  );
  return label ? (
    <LableContainer label={label}>selectWithoutLabel</LableContainer>
  ) : (
    selectWithoutLabel
  );
}

// 属性规范
Select.propTypes = {
  type: PropTypes.oneOf(["form"]),
  children: PropTypes.any,
};

export default Select;
