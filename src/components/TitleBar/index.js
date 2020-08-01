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

import { DropdownItem } from "components/Dropdown/style";
import Dropdown from "components/Dropdown";
import Seprator from "components/Seprator";
function TitleBar({
  onAvatarClick,
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
      <Avatar onClick={onAvatarClick} status={avatarStatus} src={avatarSrc} />
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
        <Dropdown
          content={
            <>
              <DropdownItem>
                <Paragraph>个人资料</Paragraph>
              </DropdownItem>
              <DropdownItem>
                <Paragraph>关闭会话</Paragraph>
              </DropdownItem>
              <Seprator />
              <DropdownItem>
                <Paragraph type="danger">屏蔽此人</Paragraph>
              </DropdownItem>
            </>
          }
        >
          <Icon opacity={0.3} icon={Options} />
        </Dropdown>
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
