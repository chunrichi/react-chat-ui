import styled, { css } from "styled-components";
import { circle } from "util/mixins";

// 跟SASS/Less中的Mixins类似
const circleMixinFunc = (color, size = "8px") => css`
  /* before/after设置content才能显示 */
  content: "";
  display: block;
  position: absolute;
  ${circle(color, size)}
`;

const StyledAvatar = styled.div`
  /* 相对定位 */
  position: relative;
`;

const StatusIcon = styled.div`
  /* 绝对定位 */
  position: absolute;
  left: 2px;
  top: 4px;

  /* 伪元素:styled支持嵌套CSS，类似less、sess，可直接定义子元素或为元素；&代表外侧（本身）可省略 */
  &::before {
    ${({ size }) => circleMixinFunc("white", size)}

    transform: scale(2);
  }

  &::after {
    ${({ theme, status, size }) => {
      if (status === "online") {
        return circleMixinFunc(theme.green, size);
      } else if (status === "offline") {
        return circleMixinFunc(theme.gray, size);
      }
    }}
  }
`;

// 圆形蒙版
const AvatarClip = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  overflow: hidden;
`;

// 头像
const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  /* 等比例缩放 */
  object-fit: cover;
  object-position: center;
`;

export default StyledAvatar;
export { StatusIcon, AvatarClip, AvatarImage };
