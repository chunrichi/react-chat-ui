import React from "react";
import ChatBubble from ".";

export default {
  title: "UI 组件/ChatBubble",
  component: ChatBubble,
  decorators: [(storyFn) => <div style={{ padding: "24px" }}>{storyFn()}</div>],
};

export const Default = () => {
  return <ChatBubble time="昨天 下午15:36">默认</ChatBubble>;
};

export const Mine = () => {
  return (
    <ChatBubble type="mine" time="昨天 下午15:36">
      默认
    </ChatBubble>
  );
};
