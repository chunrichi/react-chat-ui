import styled, { css } from "styled-components";
import Paragraph from "components/Paragraph";
import Icon from "components/Icon";
import Text from "components/Text";

const Time = styled(Paragraph).attrs({ type: "secondary", size: "small" })`
  margin: 6px;
  margin-left: 24px;
  /* 字符间距 */
  word-spacing: 1rem;
`;

const BubbleTip = styled(Icon)`
  position: absolute;
  bottom: -15%;
  left: 0;

  z-index: 5;
`;

const Bubble = styled.div`
  padding: 15px 22px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  position: relative;
  z-index: 10;
`;

const MessageText = styled(Text)``;

const typeVariants = {
  mine: css`
    ${Bubble} {
      background-color: ${({ theme }) => theme.primaryColor};
    }

    ${BubbleTip} {
      /* 水平180 */
      transform: rotateY(180deg);
      /* 取消left */
      left: unset;
      right: 0;

      /* 颜色 */
      path {
        fill: ${({ theme }) => theme.primaryColor};
      }
    }

    ${Time} {
      text-align: right;
      margin-left: 0;
      margin-right: 24px;
    }

    ${MessageText} {
      color: white;
    }
  `,
};

const StyledChatBubble = styled.div`
  display: flex;
  /* 会话气泡+时间 上下布局 */
  flex-direction: column;

  ${({ type }) => type && typeVariants[type]}
`;

export default StyledChatBubble;
export { Time, BubbleTip, Bubble, MessageText };