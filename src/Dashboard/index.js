import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as dashboardActions from "./actions";

const Dashboard = (props) => {
  const { hackerNewsData, getHackerNewsData } = props;
  useEffect(() => {
    getHackerNewsData();
  }, []);
  console.log(hackerNewsData);
  return <div>Hi there!!</div>;
};

const mapStateToProps = ({ dashboardReducer }) => {
  return { hackerNewsData: dashboardReducer.hackerNewsData || {} };
};

export default connect(mapStateToProps, { ...dashboardActions })(Dashboard);
