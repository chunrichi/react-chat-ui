import styled from "styled-components";
import ChatBubble from "components/ChatBubble";

const Conversations = styled.div`
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  /* 靠上对齐 */
  align-items: flex-start;
  width: 100%;
  /* 自动显示垂直向的滚动条 */
  overflow-y: auto;
  /* 浮动高度 */
  flex: 1;

  & > * {
    margin: 10px 0;
  }
`;

const MyChatBabble = styled(ChatBubble).attrs({ type: "mine" })`
  align-self: flex-end;
`;

const StyledConversation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  border: 1px solid ${({ theme }) => theme.gray4};

  & > *:last-child {
    align-self: end;
  }
`;

export default StyledConversation;
export { Conversations, MyChatBabble };
