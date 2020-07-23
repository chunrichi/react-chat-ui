import React from "react";
import Paragraph from ".";

export default {
  title: "排版/Paragraph",
  component: Paragraph,
};

export const Default = () => (
  <>
    <Paragraph>段落1</Paragraph>
    <Paragraph>段落2</Paragraph>
  </>
);

export const Ellipsis = () => (
  <Paragraph ellipsis>
    很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的段落
  </Paragraph>
);
