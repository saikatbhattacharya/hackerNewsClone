import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as dashboardActions from "./actions";
import DataTable from "./components/DataTable";

const Dashboard = (props) => {
  const { hackerNewsData = {}, getHackerNewsData } = props;

  useEffect(() => {
    getHackerNewsData();
  }, []);

  return <DataTable data={hackerNewsData.hits} {...props} />;
};

const mapStateToProps = ({ dashboardReducer }) => {
  return { hackerNewsData: dashboardReducer.hackerNewsData || {} };
};

export default connect(mapStateToProps, { ...dashboardActions })(Dashboard);
