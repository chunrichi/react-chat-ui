import React from "react";
import PropTypes from "prop-types";
import StyledBadge, { Count } from "./style";

// variant 显示圆点还是数字圆点

function Badge({
  children,
  show = false,
  count = 0,
  showZero = false,
  ...rest
}) {
  return (
    <StyledBadge
      variant={children ? "dot" : "default"}
      show={show}
      count={count}
      showZero={showZero}
      {...rest}
    >
      {children || <Count>{count}</Count>}
    </StyledBadge>
  );
}

// 属性规范
Badge.propTypes = {
  show: PropTypes.bool,
  count: PropTypes.number,
  showZero: PropTypes.bool,
  children: PropTypes.any,
};

export default Badge;
