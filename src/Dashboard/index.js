import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as dashboardActions from "./actions";
import DataTable from "./components/DataTable";

const Dashboard = (props) => {
  const { hackerNewsData = {}, getHackerNewsData } = props;
  useEffect(() => {
    getHackerNewsData();
  }, []);
  console.log(hackerNewsData);
  return <DataTable data={hackerNewsData.hits || []} />;
};

const mapStateToProps = ({ dashboardReducer }) => {
  return { hackerNewsData: dashboardReducer.hackerNewsData || {} };
};

export default connect(mapStateToProps, { ...dashboardActions })(Dashboard);
