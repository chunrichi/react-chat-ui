import React from "react";
import PropTypes from "prop-types";
import StyledContactCard, { Name, Intro } from "./style";
import Avatar from "components/Avatar";

import face from "assets/images/face-male-1.jpg";

function ContactCard({ children, ...rest }) {
  return (
    <StyledContactCard {...rest}>
      <Avatar src={face} status="online" />
      <Name>张三</Name>
      <Intro>我说谁？</Intro>
    </StyledContactCard>
  );
}

// 属性规范
ContactCard.propTypes = {
  children: PropTypes.any,
};

export default ContactCard;
