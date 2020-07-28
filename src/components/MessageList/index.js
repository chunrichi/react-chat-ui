import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ChatList } from "./style";
import Filter from "components/Filter";
import Select from "components/Select";
import Option from "components/Option";
import Button from "components/Button";
import Icon from "components/Icon";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import MessageCard from "components/MessageCard";

import face1 from "assets/images/face-male-1.jpg";
import FilterList from "components/FilterList";

function MessageList({ children, ...rest }) {
  return (
    <StyledMessageList {...rest}>
      <FilterList
        options={["最新消息优先", "在线好友优先"]}
        actionLabel="创建会话"
      >
        <ChatList>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
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
