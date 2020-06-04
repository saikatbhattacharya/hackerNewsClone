import React from "react";

export const columns = [
  {
    Header: "Comments",
    accessor: "num_comments",
  },
  {
    Header: "Vote count",
    accessor: "voteCount",
  },
  {
    Header: "Up vote",
    accessor: "upVote",
  },
  {
    Header: "News details",
    accessor: "news",
  },
];

export const processData = (data) => {
  return data.map((d) => ({
    num_comments: d.num_comments,
    voteCount: d.points,
    upVote: <button>p</button>,
    news: <p>{d.title}</p>,
  }));
};
