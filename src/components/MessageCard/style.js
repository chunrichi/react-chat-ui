import styled, { css } from "styled-components";
import Text from "components/Text";
import Paragraph from "components/Paragraph";
import Badge from "components/Badge";
import { card, activeBar } from "util/mixins";
import StyledAvatar from "components/Avatar/style";

// attrs 传递属性
const Name = styled(Text).attrs({ size: "large" })`
  grid-area: name;
`;

const Time = styled(Text).attrs({ size: "medium", type: "secondary" })`
  grid-area: time;
  justify-self: end;
`;

const Status = styled(Text).attrs({ type: "secondary" })`
  grid-area: status;
`;

const Message = styled.div`
  grid-area: message;
  display: grid;
  grid-template-columns: 1fr 30px;
  align-items: center;

  ${({ replied }) =>
    replied &&
    css`
      grid-template-columns: 24px 1fr 30px;
    `}
`;

const MessageText = styled(Paragraph).attrs({ ellipsis: true })``;

const UnreadBadge = styled(Badge)`
  justify-self: end;
`;

const StyledMessageCard = styled.div`
  ${card()};
  /* grid 布局（规则布局） 三行三列 */
  display: grid;
  grid-template-areas:
    "avatar name time"
    "avatar status status"
    "message message message";
  grid-template-columns: 64px 1fr 1fr;
  /* 行间距 */
  row-gap: 16px;
  background-color: ${({ theme }) => theme.background};
  /* 过度效果 */
  transition: 0.4s;
  &:hover {
    box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.1);
  }

  /* 头像 => 由于直接用的组件 所以在此处声明 */
  ${StyledAvatar} {
    grid-area: avatar;
  }

  /* 选中状态 */
  ${({ active }) =>
    active &&
    css`
  background-color: ${({ theme }) => theme.darkPurple};
  ${Name},${Status},${Time},${MessageText}{
      color: white;
  }
  ${Status},${Time}{
      opacity:0.4;
  }
  ${activeBar({ barWidth: "4px", shadowWidth: "14px" })}

  /* 隐藏芝士条超出的部分 */
  overflow: hidden;
  `}
`;

export default StyledMessageCard;
export { Name, Time, Status, Message, MessageText, UnreadBadge };
