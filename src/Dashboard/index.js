import React, { useEffect } from "react";
import PropTypes from "prop-types";
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
    <>
      <DataTable {...props} />
      <Chart data={hackerNewsData.hits} />
    </>
  );
};

Dashboard.propTypes = {
  hackerNewsData: PropTypes.object,
  getHackerNewsData: PropTypes.func,
};
const mapStateToProps = ({ dashboardReducer }) => {
  return { hackerNewsData: dashboardReducer.hackerNewsData || {} };
};

export default connect(mapStateToProps, { ...dashboardActions })(Dashboard);
