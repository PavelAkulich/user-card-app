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
  openMethod: (id: string) => void;
  deleteMethod: (id: string) => void;
}

const BaseTable: FC<BaseTableProps> = ({
  data,
  headers,
  openMethod,
  deleteMethod,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <BaseTableHeader headers={headers} />
        <BaseTableBody
          rows={data}
          openMetod={openMethod}
          deleteMethod={deleteMethod}
          positions={headers.map(item => item.name)}
        />
      </Table>
    </TableContainer>
  );
};

export default BaseTable;
