import React from "react";
import PropTypes from "prop-types";
import StyledRadio, { RadioButton, Circle, StyledRadioGroup } from "./style";
import LableContainer from "components/LableContainer";

function Radio({ name, children, ...rest }) {
  return (
    <StyledRadio {...rest}>
      {children}
      <RadioButton name={name} />
      <Circle />
    </StyledRadio>
  );
}

function RadioGroup({ label, children, ...rest }) {
  return (
    <LableContainer label={label}>
      <StyledRadioGroup {...rest}>{children}</StyledRadioGroup>
    </LableContainer>
  );
}

// 属性规范
Radio.propTypes = {
  name: PropTypes.string,
  children: PropTypes.any,
};

RadioGroup.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
};

Radio.Group = RadioGroup;

export default Radio;
