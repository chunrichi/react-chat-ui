import React from "react";
import TitleBar from ".";

import face1 from "assets/images/face-male-1.jpg";

export default {
  title: "UI 组件/TitleBar",
  component: TitleBar,
};

export const Default = () => {
  return (
    <TitleBar
      avatarSrc={face1}
      avatarStatus="online"
      name="张三"
      status="在线"
      time="三小时前"
    />
  );
};
