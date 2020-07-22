import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";

import 'story.css'

// 回调函数
addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

// 分区显示
addParameters({
  options: {
    showRoots: true,
  },
});
