import React from "react";
import ChatBubble from ".";
import VoiceMessage from "components/VoiceMessage";
import Emoji from "components/Emoji";

export default {
  title: "UI 组件/ChatBubble",
  component: ChatBubble,
  decorators: [(storyFn) => <div style={{ padding: "24px" }}>{storyFn()}</div>],
};

export const Default = () => {
  return <ChatBubble time="昨天 下午15:36">默认</ChatBubble>;
};

/* eslint-disable jsx-a11y/accessible-emoji */
export const Mine = () => {
  return (
    <ChatBubble type="mine" time="昨天 下午15:36">
      默认<Emoji label="smile">😀</Emoji>
    </ChatBubble>
  );
};

export const VoiceMessageType = () => (
  <ChatBubble time="昨天 下午18：30">
    <VoiceMessage time="01:24" />
  </ChatBubble>
);

export const VoiceMessageTypeMine = () => (
  <ChatBubble type="mine" time="昨天 下午18：30">
    <VoiceMessage type="mine" time="01:24" />
  </ChatBubble>
);
