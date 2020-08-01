import React from "react";
import PropTypes from "prop-types";
import StyledConversation, { Conversations, MyChatBabble } from "./style";
import ChatBubble from "components/ChatBubble";
import TitleBar from "components/TitleBar";
import VoiceMessage from "components/VoiceMessage";
import Emoji from "components/Emoji";

import face1 from "assets/images/face-male-1.jpg";
import Footer from "components/Footer";

/* eslint-disable jsx-a11y/accessible-emoji */
function Conversation({ onAvatarClick, children, ...rest }) {
  return (
    <StyledConversation {...rest}>
      <TitleBar
        avatarSrc={face1}
        avatarStatus="online"
        name="张三"
        status="在线"
        time="三小时前"
        onAvatarClick={onAvatarClick}
      />
      <Conversations>
        <MyChatBabble time="昨天 下午15:36">
          默认<Emoji label="smile">😀</Emoji>
        </MyChatBabble>
        <ChatBubble time="昨天 下午15:36">默认</ChatBubble>
        <ChatBubble time="昨天 下午18：30">
          <VoiceMessage time="01:24" />
        </ChatBubble>
        <MyChatBabble time="昨天 下午18：30">
          <VoiceMessage type="mine" time="01:24" />
        </MyChatBabble>
      </Conversations>
      <Footer />
    </StyledConversation>
  );
}

// 属性规范
Conversation.propTypes = {
  children: PropTypes.any,
};

export default Conversation;
