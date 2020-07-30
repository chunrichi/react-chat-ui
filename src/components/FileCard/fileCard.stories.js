import React from "react";
import FileCard from ".";

export default {
  title: "UI 组件/FileCard",
  component: FileCard,
};

export const Default = () => {
  return (
    <FileCard
      fileType="pdf"
      fileIcon="pdf"
      fileName="结课作业.pdf"
      fileSize="25m"
      fileTime="2020-07-30"
    />
  );
};
