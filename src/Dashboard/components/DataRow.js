import React from "react";
import { ReactComponent as UpVote } from "../../Images/up-arrow.svg";

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
      <div>
        <p>{singleData.title}</p>
        <button onClick={() => hideData(singleData)}>hide</button>
      </div>
    ),
  };
};

export default DataRow;
