import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import queryString from "query-string";
import * as dashboardActions from "./actions";
import DataTable from "./components/DataTable";
import Chart from "./components/Chart";
const Dashboard = (props) => {
  const { hackerNewsData = {}, getHackerNewsData } = props;
  const { search } = useLocation();

  useEffect(() => {
    const parsedQuery = queryString.parse(search) || {};
    getHackerNewsData(parsedQuery.pageNo || 1);
  }, [search]);

  return (
    <div>
      <DataTable {...props} />
      <Chart data={hackerNewsData.hits} />
    </div>
  );
};

const mapStateToProps = ({ dashboardReducer }) => {
  return { hackerNewsData: dashboardReducer.hackerNewsData || {} };
};

export default connect(mapStateToProps, { ...dashboardActions })(Dashboard);
