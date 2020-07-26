import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledFooter, { IconContainer, StylePopoverContent } from "./style";
import Input from "components/Input";
import Icon from "components/Icon";
import Button from "components/Button";
import Emoji from "components/Emoji";
import Popover from "components/Popover";

import { ReactComponent as ClipIcon } from "assets/icons/clip.svg";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import { ReactComponent as MicrophoneIcon } from "assets/icons/microphone.svg";
import { ReactComponent as PlaneIcon } from "assets/icons/plane.svg";
import { ReactComponent as OptionIcon } from "assets/icons/options.svg";
import { useTheme } from "styled-components";

function Footer({ children, ...rest }) {
  const [emojiIconActive, setEmojiIconActive] = useState(false);
  const theme = useTheme();
  return (
    <StyledFooter {...rest}>
      <Input
        placeholder="输入"
        prefix={<Icon icon={ClipIcon} />}
        suffix={
          <IconContainer>
            <Popover
              content={<PopoverContent />}
              offset={{ x: "-25%" }}
              onVisible={() => setEmojiIconActive(true)}
              onHide={() => setEmojiIconActive(false)}
            >
              <Icon
                icon={SmileIcon}
                color={emojiIconActive ? undefined : theme.gray3}
              />
            </Popover>
            <Icon icon={MicrophoneIcon} />
            <Button size="52px">
              <Icon
                icon={PlaneIcon}
                color="white"
                style={{ transform: "translateX(-2px)" }}
              />
            </Button>
          </IconContainer>
        }
      />
    </StyledFooter>
  );
}

/* eslint-disable jsx-a11y/accessible-emoji */
function PopoverContent(props) {
  return (
    <StylePopoverContent>
      <Emoji label="smile">🙂</Emoji>
      <Emoji label="angry">😤</Emoji>
      <Emoji label="angry">😤</Emoji>
      <Emoji label="sad">😔</Emoji>
      <Emoji label="ok">👌</Emoji>
      <Icon icon={OptionIcon} style={{ marginLeft: "24px" }} />
    </StylePopoverContent>
  );
}

// 属性规范
Footer.propTypes = {
  children: PropTypes.any,
};

export default Footer;
