import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as UpVote } from "../../Images/up-arrow.svg";

const NewsDiv = styled.div`
  margin: 0 5px;
  ${({ customStyle }) => customStyle}
`;

const DataRow = (singleData, upVote, hideData, page) => {
  return {
    num_comments: singleData.num_comments,
    voteCount: singleData.points,
    upVote: (
      <UpVote
        style={{ width: 10, cursor: "pointer" }}
        onClick={() => upVote(singleData, page)}
      />
    ),
    news: (
      <div style={{ display: "flex" }}>
        <NewsDiv>{singleData.title}</NewsDiv>
        <NewsDiv>({singleData.url})</NewsDiv>
        <NewsDiv>
          by <span style={{ fontWeight: 500 }}>{singleData.author}</span>
        </NewsDiv>
        <NewsDiv
          customStyle={"cursor: pointer;font-weight: 500;"}
          onClick={() => hideData(singleData, page)}
        >
          [hide]
        </NewsDiv>
      </div>
    ),
  };
};

DataRow.propTypes = {
  singleData: PropTypes.object,
  upVote: PropTypes.func,
  hideData: PropTypes.func,
  page: PropTypes.number,
};

export default DataRow;
