import React from "react";
import PropTypes from "prop-types";
import StyledFileList, { Files } from "./style";
import FilterList from "components/FilterList";
import FileCard from "components/FileCard";

function FileList({ children, ...rest }) {
  const list = ["zip", "image", "pdf", "word", "excel", "ppt"];
  return (
    <StyledFileList {...rest}>
      <FilterList
        options={["按文件时间排序", "按文件名排序", "按文件大小排序"]}
      >
        <Files>
          {new Array(10).fill(0).map((_, i) => (
            <FileCard
              key={i}
              fileType={list[i % 6]}
              fileName={`文件${i}.${list[i % 6]}`}
              fileSize={`${i}m`}
              fileTime={`2020-0${i}-01`}
            />
          ))}
        </Files>
      </FilterList>
    </StyledFileList>
  );
}

// 属性规范
FileList.propTypes = {
  children: PropTypes.any,
};

export default FileList;
