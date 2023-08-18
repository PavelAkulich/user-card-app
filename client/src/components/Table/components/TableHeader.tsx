import { FC } from "react";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TableHeaderType } from "../../../types/basicTypes";


interface BaseTableHeaderProps {
    headers: TableHeaderType[]
}

const BaseTableHeader: FC<BaseTableHeaderProps> = ({headers}) => {
  return (
    <TableHead>
      <TableRow>
        {headers.map(header => <TableCell>{header.text}</TableCell>)}
        <TableCell>Действия</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default BaseTableHeader;
