import React from "react";
import Settings, { SettingsItem } from ".";

export default {
  title: "页面组件/Settings",
  component: Settings,
};

export const Default = () => {
  return <Settings />;
};

export const WithOutDescription = () =>(
  <SettingsItem label="这是没有描述的设置项" />
)

export const WithDescription = () =>(
  <SettingsItem label="这是没有描述的设置项" description="这是描述" />
)
export const WithMenu = () =>(
  <SettingsItem label="这是没有描述的设置项" type="menu" />
)