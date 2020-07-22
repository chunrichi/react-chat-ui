import React from "react";
import Icon from ".";
import { ReactComponent as SmailIcon } from "assets/icons/smile.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "UI 组件/Icon",
  component: Icon,
};

export const Default = () => {
  return <Icon icon={SmailIcon}></Icon>;
};

export const CustomColor = () => {
  return <Icon icon={SmailIcon} color="#cccccc"></Icon>;
};

export const CustomSize = () => {
  return <Icon icon={SmailIcon} width={48} height={48}></Icon>;
};

export const FontAwesom = () => {
  return <FontAwesomeIcon icon={faCommentDots} />;
};

export const FontAwesomeColor = () => {
  return <FontAwesomeIcon icon={faCommentDots} style={{ color: "#cccccc" }} />;
};

export const FontAwesomeSizes = () => {
  return <div>
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "24px" }} />
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "36px" }} />
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "48px" }} />
    <FontAwesomeIcon icon={faCommentDots} style={{ fontSize: "60px" }} />
  </div>
};
