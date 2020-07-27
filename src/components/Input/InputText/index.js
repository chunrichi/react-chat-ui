import React from "react";
import PropTypes from "prop-types";
import StyledInputText, { InputUnderline } from "./style";
import LableContainer from "components/LableContainer";

function InputText({
  label,
  placeholder = "请输入内容...", 
  ...rest
}) {
  const input = <InputUnderline type="text" placeholder={placeholder} />;
  return (
    <StyledInputText {...rest}>
      {label ? <LableContainer label={label}>{input}</LableContainer> : input}
    </StyledInputText>
  );
}

// 属性规范
InputText.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputText;
