import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as dashboardActions from "./actions";
import DataTable from "./components/DataTable";
import Chart from "./components/Chart";
const Dashboard = (props) => {
  const { hackerNewsData = {}, getHackerNewsData } = props;

  useEffect(() => {
    getHackerNewsData();
  }, []);

  return (
    <div>
      <DataTable data={hackerNewsData.hits} {...props} />;
      <Chart data={hackerNewsData.hits} />
    </div>
  );
};

const mapStateToProps = ({ dashboardReducer }) => {
  return { hackerNewsData: dashboardReducer.hackerNewsData || {} };
};

export default connect(mapStateToProps, { ...dashboardActions })(Dashboard);
