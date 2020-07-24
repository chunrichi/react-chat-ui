import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, { Title, Actions } from "./style";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import Icon from "components/Icon";

import { ReactComponent as Call } from "assets/icons/call.svg";
import { ReactComponent as Camera } from "assets/icons/camera.svg";
import { ReactComponent as Options } from "assets/icons/options.svg";

function TitleBar({
  avatarStatus = "online",
  avatarSrc,
  name,
  status,
  time,
  children,
  ...rest
}) {
  return (
    <StyledTitleBar {...rest}>
      <Avatar status={avatarStatus} src={avatarSrc} />
      <Title>
        <Paragraph size="large">{name}</Paragraph>
        <Paragraph type="secondary">
          <Text>{status}</Text>
          <Text> · 最后阅读时间：{time}</Text>
        </Paragraph>
      </Title>
      <Actions>
        <Icon opacity={0.3} icon={Call} />
        <Icon opacity={0.3} icon={Camera} />
        <Icon opacity={0.3} icon={Options} />
      </Actions>
    </StyledTitleBar>
  );
}

// 属性规范
TitleBar.propTypes = {
  avatarStatus: PropTypes.oneOf(["online", "offline"]),
  avatarSrc: PropTypes.string.isRequired,
  name: PropTypes.any,
  status: PropTypes.any,
  time: PropTypes.any,
  children: PropTypes.any,
};

export default TitleBar;
