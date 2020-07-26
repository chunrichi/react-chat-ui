import React from "react";
import Popover from ".";
import Button from "components/Button";

export default {
  title: "UI 组件/Popover",
  component: Popover,
};

export const Default = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Popover content="Hello">
        <Button shape="rect">点击</Button>
      </Popover>
    </div>
  );
};

export const WidthOffset = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
      }}
    >
      <Popover content="Hello" offset={{ x: "-25%" }}>
        <Button shape="rect">点击</Button>
      </Popover>
    </div>
  );
};
