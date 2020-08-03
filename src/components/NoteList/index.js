import React from "react";
import PropTypes from "prop-types";
import StyledNoteList, { Notes } from "./style";
import FilterList from "components/FilterList";
import NoteCard from "components/NoteCard";
import { animated } from "react-spring";
import useStageredList from "hooks/useStageredList";

function NoteList({ children, ...rest }) {
  let number = 12;
  const trailAnimes = useStageredList(number);

  return (
    <StyledNoteList {...rest}>
      <FilterList
        options={["最新笔记优先", "有改动优先"]}
        actionLabel="添加笔记"
      >
        <Notes>
          {new Array(number).fill(0).map((_, i) => (
            <animated.div key={i} style={trailAnimes[i]}>
              <NoteCard key={i} />
            </animated.div>
          ))}
        </Notes>
      </FilterList>
    </StyledNoteList>
  );
}

// 属性规范
NoteList.propTypes = {
  children: PropTypes.any,
};

export default NoteList;
