import React from "react";
import PropTypes from "prop-types";
import StyledBlockedList, {
  SettingsMenu,
  ClosableAvatar,
  BlockedAvatar,
  BlockedName,
  CloseIcon,
  FriendList,
} from "./style";
import Icon from "components/Icon";
import Text from "components/Text";

import "styled-components/macro";

import { ReactComponent as ArrowMenuLeft } from "assets/icons/arrowMenuLeft.svg";
import { ReactComponent as closeCircle } from "assets/icons/closeCircle.svg";
import face from "assets/images/face-male-1.jpg";
import { useHistory } from "react-router-dom";

function BlockedList({ children, ...rest }) {
  const history = useHistory();
  return (
    <StyledBlockedList {...rest}>
      <SettingsMenu>
        <Icon
          icon={ArrowMenuLeft}
          css={`
            cursor: pointer;
          `}
          onClick={() => history.goBack()}
        />
        <Text size="xxlarge">已屏蔽的好友</Text>
      </SettingsMenu>
      <FriendList>
        {new Array(8).fill(0).map((_, i) => {
          return <CloseAvatar avatarSrc={face} name="李浩" />;
        })}
      </FriendList>
    </StyledBlockedList>
  );
}

function CloseAvatar({ avatarSrc, name }) {
  return (
    <ClosableAvatar>
      <BlockedAvatar size="105px" src={avatarSrc} />
      <CloseIcon width={46} height={51} icon={closeCircle} />
      <BlockedName>{name}</BlockedName>
    </ClosableAvatar>
  );
}

// 属性规范
BlockedList.propTypes = {
  children: PropTypes.any,
};

export default BlockedList;
