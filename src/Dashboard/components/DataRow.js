import React, { useState, useEffect } from "react";
import { ReactComponent as UpVote } from "../../Images/up-arrow.svg";

const DataRow = (d) => {
  const [singleData, setSingleData] = useState(d);
  useEffect(() => {
    setSingleData(d);
  }, [d]);

  const onUpVote = () => {
    //call api from here
    setSingleData({ ...singleData, points: singleData.points + 1 });
  };

  return {
    num_comments: singleData.num_comments,
    voteCount: singleData.points,
    upVote: (
      <UpVote
        style={{ width: 10, cursor: "pointer" }}
        onClick={() => onUpVote()}
      />
    ),
    news: <p>{singleData.title}</p>,
  };
};

export default DataRow;
