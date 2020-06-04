import React from "react";
import DataRow from "./DataRow";

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
  return data.map((d) => DataRow(d));
};
