import React from "react";
import PropTypes from "prop-types";
import StyledIcon from "./style";
import SocialIcon from "./SocialIcon";

// icon svg为矢量图，宽高不能带单位
function Icon({
  icon: IconComponent,
  width = 24,
  height = 24,
  color,
  opacity,
  ...rest
}) {
  return (
    <StyledIcon color={color} opacity={opacity} {...rest}>
      {IconComponent && <IconComponent width={width} height={height} />}
    </StyledIcon>
  );
}

Icon.Social = SocialIcon;

// 属性规范
Icon.propTypes = {
  icon: PropTypes.elementType,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  opacity: PropTypes.number,
};

export default Icon;
