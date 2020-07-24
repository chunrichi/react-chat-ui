import React from "react";
import MessageCard from ".";

import face1 from "assets/images/face-male-1.jpg";

export default {
  title: "UI 组件/MessageCard",
  component: MessageCard,
};

export const Default = () => (
  <MessageCard
    avatarSrc={face1}
    avatarStatus="online"
    name="张三"
    statusText="在线"
    time="三小时之前"
    message="周末爬山么？"
    unreadCount={2}
  />
);

export const Active = () => (
  <MessageCard
    avatarSrc={face1}
    avatarStatus="online"
    name="张三"
    statusText="在线"
    time="三小时之前"
    message="周末爬山么？"
    unreadCount={2}
    active={true}
  />
);

export const Replied = () => (
  <MessageCard
    avatarSrc={face1}
    avatarStatus="online"
    name="张三"
    statusText="在线"
    time="三小时之前"
    message="周末爬山么？"
    unreadCount={2}
    active
    replied
  />
);

export const RepliedInactive = () => (
  <MessageCard
    avatarSrc={face1}
    avatarStatus="online"
    name="张三"
    statusText="在线"
    time="三小时之前"
    message="周末爬山么？"
    unreadCount={2}
    replied
  />
);
