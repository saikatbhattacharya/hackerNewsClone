import React from "react";
import styled from "styled-components";
import { ReactComponent as UpVote } from "../../Images/up-arrow.svg";

const NewsDiv = styled.div`
  margin: 0 5px;
  ${({ customStyle }) => customStyle}
`;

const DataRow = (singleData, upVote, hideData) => {
  return {
    num_comments: singleData.num_comments,
    voteCount: singleData.points,
    upVote: (
      <UpVote
        style={{ width: 10, cursor: "pointer" }}
        onClick={() => upVote(singleData)}
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
          onClick={() => hideData(singleData)}
        >
          [hide]
        </NewsDiv>
      </div>
    ),
  };
};

export default DataRow;
