# storybook

> storybook 是一个用了组织构建UI库的一个开源工具

## 安装

在项目目录中执行

```bash
npx -p @storybook/cli sb init
```

- `-p` => `--package` => Package to be installed
- 然后运行 `@storybook/cli` 中的 `sb init`

## 配置

- 在项目中的`.storybook`中添加`preview.js`文件
- 添加回调函数`addDecorator`

```js
import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";

// 此处使用了styled-components进行样式管理
addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));
```

## 使用

> 针对组件进行的样式管理，可在组件目录下添加相应的 `*.stories.js` 文件进行设置

以 `Avatar` 头像组件为例

- 创建 `Avatar` 组件
- 在组件目录 `src\components\Avatar` 下添加文件 `avatar.stories.js` 文件
- `export default` 中为导航栏的标题，和组件对象
- `export const + 赋值函数` 函数名为次级标题，渲染的组件就是函数返回的内容

例：

```js
import React from "react";
import Avatar from ".";

export default {
  title: "Avatar",
  component: Avatar,
};

export const Default = () => {
  return <Avatar src={face1} />;
};

export const Sizes = () => {
  return (
    <div className='row-elements'>
      <Avatar src={face1} size="48px" />
      <Avatar src={face2} size="56px" />
      <Avatar src={face3} size="64px" />
      <Avatar src={face4} size="72px" />
    </div>
  );
};
```
