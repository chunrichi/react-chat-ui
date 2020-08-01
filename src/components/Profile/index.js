/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import PropTypes from "prop-types";
import StyledProfile, {
  SocialLinks,
  ContactSection,
  AlbumSection,
  AlbumTitle,
  Album,
  Photo,
  CloseIcon,
} from "./style";
// 使用css属性
import "styled-components/macro";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Emoji from "components/Emoji";
import Icon from "components/Icon";
import Seprator from "components/Seprator";
import Text from "components/Text";
import Button from "components/Button";

import face from "assets/images/face-male-4.jpg";
import photo1 from "assets/images/photo1.jpg";
import photo2 from "assets/images/photo2.jpg";
import photo3 from "assets/images/photo3.jpg";

import {
  faWeixin,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import { ReactComponent as Cross } from "assets/icons/cross.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profile({
  onCloseClick,
  showEditBtn,
  showCloseIcon = true,
  onEdit,
  status,
  children,
  ...rest
}) {
  return (
    <StyledProfile {...rest}>
      {showCloseIcon && <CloseIcon icon={Cross} onClick={onCloseClick} />}
      <Avatar
        css={`
          margin: 26px 0;
          grid-area: 1 / 1 / 3 / 2;
          /* 开始行号 还是列号 结束行号 结束列号 */
        `}
        src={face}
        size="160px"
        status={status}
        statusIconSize="25px"
      />
      {showEditBtn && (
        <Button
          size="52px"
          onClick={onEdit}
          css={`
            grid-area: 1 / 1 / 3 / 2;
            /* 开始行号 还是列号 结束行号 结束列号 */
            align-self: end;
            margin-left: 100px;
            z-index: 10;
          `}
        >
          <FontAwesomeIcon
            css={`
              font-size: 24px;
            `}
            icon={faPen}
          />
        </Button>
      )}
      <Paragraph
        size="xlarge"
        css={`
          margin-bottom: 12px;
        `}
      >
        昵称
      </Paragraph>
      <Paragraph
        size="medium"
        type="secondary"
        css={`
          margin-bottom: 18px;
        `}
      >
        湖北省 荆州市
      </Paragraph>
      <Paragraph
        css={`
          margin-bottom: 26px;
        `}
      >
        十分冷淡存知己，一曲微茫度此生。—— 张充和
        <Emoji label="fire">🔥</Emoji>
      </Paragraph>
      <SocialLinks>
        <Icon.Social
          icon={faGithub}
          bgColor="black"
          href="https://github.com/chunrichi"
        />
        <Icon.Social icon={faWeixin} bgColor="green" />
        <Icon.Social icon={faLinkedin} bgColor="#2483C0" />
      </SocialLinks>
      <Seprator
        css={`
          margin: 30px 0;
        `}
      />
      <ContactSection>
        <Description label="联系电话">+86 138********</Description>
        <Description label="电子邮箱">5****@qq.com</Description>
        <Description label="个人首页">https://github.com/chunrichi</Description>
      </ContactSection>
      <Seprator
        css={`
          margin: 30px 0;
        `}
      />
      <AlbumSection>
        <AlbumTitle>
          <Text type="secondary">相册（{31}）</Text>
          <a>查看全部</a>
        </AlbumTitle>
        <Album>
          <Photo src={photo1}></Photo>
          <Photo src={photo2}></Photo>
          <Photo src={photo3}></Photo>
        </Album>
      </AlbumSection>
    </StyledProfile>
  );
}

const Description = ({ label, children }) => {
  return (
    <Paragraph>
      <Text type="secondary">{label}：</Text>
      <Text>{children}</Text>
    </Paragraph>
  );
};

// 属性规范
Profile.propTypes = {
  children: PropTypes.any,
};

export default Profile;
