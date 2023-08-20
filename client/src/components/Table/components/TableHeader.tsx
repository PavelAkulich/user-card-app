import { FC } from "react";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { TableHeaderType } from "../../../types/basicTypes";
import { useTheme } from "@mui/material";

interface BaseTableHeaderProps {
  headers: TableHeaderType[];
}

const BaseTableHeader: FC<BaseTableHeaderProps> = ({ headers }) => {
  const theme = useTheme();
  return (
    <TableHead sx={{ background: theme.palette.primary.main }}>
      <TableRow>
        {headers.map((header) => (
          <TableCell sx={{ color: "white" }} key={header.id}>{header.text}</TableCell>
        ))}
        <TableCell sx={{ color: "white" }}>Действия</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default BaseTableHeader;
