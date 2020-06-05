import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { columns, processData } from "./utils";
import Table from "./TableTemplate";
import DataRow from "./DataRow";

const TableWrapper = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;

    tr:nth-child(even) {
      background: #a2e5db;
    }
    tr:nth-child(odd) {
      background: #fff;
    }

    tr {
      :last-child {
        td {
          border-bottom: 1px solid #049985;
        }
      }
    }

    th {
      background: #049985;
      color: #fff;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const BottomNav = styled.div`
  display: flex;
  float: right;

  div {
    cursor: pointer;
    margin: 0 5px;
  }
`;

const DataTable = (props) => {
  const {
    upVote,
    hideData,
    hackerNewsData: { hits = [], page = 1, nbPages = 1 },
  } = props;

  return (
    <TableWrapper>
      <Table
        columns={columns}
        data={hits.map((d) => DataRow(d, upVote, hideData))}
      />
      <BottomNav>
        {page > 1 ? (
          <Link to={`/?pageNo=${page - 1}`}>Previous</Link>
        ) : (
          <div>Previous</div>
        )}{" "}
        |{" "}
        {page < nbPages ? (
          <Link to={`/?pageNo=${page + 1}`}>Next</Link>
        ) : (
          <div>Next</div>
        )}
      </BottomNav>
    </TableWrapper>
  );
};

export default DataTable;
