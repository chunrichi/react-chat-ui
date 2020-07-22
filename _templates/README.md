# hygen 模板

## 安装

全局安装 `hygen`

```shell
npm i -g hygen
```

## 项目初始化

项目目录下执行

```bash
hygen init self
```

## 添加新的模板

```bash
hygen generator new component
```

- 删除生成的 `hello.ejs.t`
- 新建 `index.ejs.t`
- 添加模板描述信息 `---` 之间的
  - `to: src/components/<%= name %>/index.js` : 把模板放在哪里
- 在后面添加模板的具体信息

例:

```t
---
to: src/components/<%= name %>/<%= h.changeCase.lcFirst(name) %>.stories.js
---
import React from "react";
import <%= name %> from ".";

export default {
  title: "<%= name %>",
  component: <%= name %>,
};

export const Default = () => {
  return <<%= name %>>默认<<%= name %>>;
};
```

## 使用模板

此处生成Icon

```bash
hygen component new Icon
# hygen component new --name Icon
```

## 详

> 详例可参考 [generator](generator)

### 变量

`<%= name %>` 中的 `name` 是 `--name` （可省略） 后面的名称

### 函数

#### 小写首字母

```js
h.changeCase.lcFirst(name)
```
