import React from "react";
import PropTypes from "prop-types";
import StyledNoteCard, {
  NoteImage,
  NoteTitle,
  NoteExcerpt,
  NotePublishTime,
} from "./style";

import note from "assets/images/note-1.jpg";

function NoteCard({ children, ...rest }) {
  return (
    <StyledNoteCard {...rest}>
      <NoteImage src={note} />
      <NoteTitle>笔记标题</NoteTitle>
      <NoteExcerpt>笔记摘要</NoteExcerpt>
      <NotePublishTime>2020-07-30</NotePublishTime>
    </StyledNoteCard>
  );
}

// 属性规范
NoteCard.propTypes = {
  children: PropTypes.any,
};

export default NoteCard;
