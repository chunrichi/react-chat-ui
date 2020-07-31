import React from "react";
import VideoCall from ".";

export default {
  title: "页面组件/VideoCall",
  component: VideoCall,
};

export const Default = () => {
  return (
    <div style={{ height: "100vh" }}>
      <VideoCall />
    </div>
  );
};
