import { FC } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import BaseTableHeader from "./components/TableHeader";
import BaseTableBody from "./components/TableBody";
import { TableHeaderType, TableRowType } from "../../types/basicTypes";

interface BaseTableProps {
  data: TableRowType[];
  headers: TableHeaderType[];
}

const BaseTable: FC<BaseTableProps> = ({ data, headers }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <BaseTableHeader headers={headers} />
        <BaseTableBody rows={data} />
      </Table>
    </TableContainer>
  );
};

export default BaseTable;
