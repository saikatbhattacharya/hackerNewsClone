import React from "react";
import styled from "styled-components";
import { columns, processData } from "./utils";
import Table from "./TableTemplate";

const TableWrapper = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
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

const DataTable = (props) => {
  const { data } = props;
  return (
    <TableWrapper>
      <Table columns={columns} data={processData(data)} />
    </TableWrapper>
  );
};

export default DataTable;
