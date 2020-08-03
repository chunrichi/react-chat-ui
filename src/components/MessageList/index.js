import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ChatList } from "./style";
import MessageCard from "components/MessageCard";

import face1 from "assets/images/face-male-1.jpg";
import FilterList from "components/FilterList";
import { useTrail, animated } from "react-spring";

function MessageList({ children, ...rest }) {
  // 6 个项目 + 配置项
  // translate3d 可以开启gpu加速，比2d好=>动画结束值
  // from 动画初始值
  // delay 延迟200毫秒
  const trailAnimes = useTrail(6, {
    transform: "translate3d(0px ,0px, 0px)",
    from: { transform: "translate3d(-50px, 0px, 0px)" },
    config: {
      mass: 0.8,
      tension: 280,
      friction: 20,
    },
    delay: 200,
  });

  return (
    <StyledMessageList {...rest}>
      <FilterList
        options={["最新消息优先", "在线好友优先"]}
        actionLabel="创建会话"
      >
        <ChatList>
          {[1, 2, 3, 4, 5, 6].map((_, index) => (
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
