import React from "react";
import PropTypes from "prop-types";
import StyledChatBubble, {
  Time,
  BubbleTip,
  Bubble,
  MessageText,
} from "./style";

import { ReactComponent as BubbleTipIcon } from "assets/icons/bubbleTip.svg";

function ChatBubble({ children, type, time, ...rest }) {
  return (
    <StyledChatBubble type={type} {...rest}>
      <Bubble>
        <BubbleTip icon={BubbleTipIcon} widht={40} hegiht={28} color="white" />
        <MessageText>{children}</MessageText>
      </Bubble>
      <Time>{time}</Time>
    </StyledChatBubble>
  );
}

// 属性规范
ChatBubble.propTypes = {
  type: PropTypes.oneOf(["mine"]),
  time: PropTypes.string,
  children: PropTypes.any,
};

export default ChatBubble;
