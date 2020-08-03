import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ChatList } from "./style";
import MessageCard from "components/MessageCard";

import face1 from "assets/images/face-male-1.jpg";
import FilterList from "components/FilterList";
import { animated } from "react-spring";
import useStageredList from "hooks/useStageredList";

function MessageList({ children, ...rest }) {
  let number = 6;
  const trailAnimes = useStageredList(number);

  return (
    <StyledMessageList {...rest}>
      <FilterList
        options={["最新消息优先", "在线好友优先"]}
        actionLabel="创建会话"
      >
        <ChatList>
          {new Array(number).fill(0).map((_, index) => (
            <animated.div key={index} style={trailAnimes[index]}>
              <MessageCard
                key={index}
                active={index === 3}
                replied={index % 3 === 0}
                avatarSrc={face1}
                name="张三"
                avatarStatus="online"
                status="在线"
                time={`${index} 小时之前`}
                message="去爬山么？"
                unreadCount={index}
              />
            </animated.div>
          ))}
        </ChatList>
      </FilterList>
    </StyledMessageList>
  );
}

// 属性规范
MessageList.propTypes = {
  children: PropTypes.any,
};

export default MessageList;
