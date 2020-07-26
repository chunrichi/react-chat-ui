import styled from "styled-components";

// 内容
const Content = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 21px;
  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.12);
  padding: 12px 30px;
  position: absolute;

  /* 100%取StyledPopover的高度 12px按钮高度 */
  bottom: calc(100% + 12px);

  /* 偏移 */
  ${({ offset }) =>
    offset && `transform: translate(${offset.x || 0}, ${offset.y || 0});`}
  /* 隐藏 */
  ${({ visible }) => !visible && `display: none`}
`;

// 三角形
const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 6px 0 6px;
  border-color: ${({ theme }) => theme.background} transparent transparent
    transparent;
  left: calc(50% - 6px);
  bottom: calc(100% + 12px - 5px);

  /* 偏移 */
  ${({ offset }) => offset && `transform: translateY(${offset.y || 0});`}
  /* 隐藏 */
  ${({ visible }) => !visible && `display: none`}
`;

const Target = styled.div``;

const StyledPopover = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export default StyledPopover;
export { Content, Triangle, Target };
