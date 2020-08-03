import React from "react";
import PropTypes from "prop-types";
import StyledContactList, { Contacts } from "./style";
import FilterList from "components/FilterList";
import ContactCard from "components/ContactCard";
import useStageredList from "hooks/useStageredList";
import { animated } from "react-spring";

function ContactList({ children, ...rest }) {
  let number = 10;
  const trailAnimes = useStageredList(number);

  return (
    <StyledContactList {...rest}>
      <FilterList options={["新添加优先", "按姓名排序"]} actionLabel="添加好友">
        <Contacts>
          {new Array(number).fill(0).map((_, i) => (
            <animated.div key={i} style={trailAnimes[i]}>
              <ContactCard key={i} />
            </animated.div>
          ))}
        </Contacts>
      </FilterList>
    </StyledContactList>
  );
}

// 属性规范
ContactList.propTypes = {
  children: PropTypes.any,
};

export default ContactList;
