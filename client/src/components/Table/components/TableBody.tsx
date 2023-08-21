import { FC, useState } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Popover from "@mui/material/Popover";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { TableHeaderType, TableRowType } from "../../../types/basicTypes";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { sortDataForCells } from "../../../utils/sortDataForCells";
import CellType from "./CellType";

interface BaseTableBodyProps {
  rows: TableRowType[];
  openMetod: (id: string) => void;
  deleteMethod: (id: string) => void;
  headers: TableHeaderType[];
}

const BaseTableBody: FC<BaseTableBodyProps> = ({
  rows,
  openMetod,
  deleteMethod,
  headers,
}) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <TableBody sx={{ background: theme.palette.secondary.main }}>
      {rows.map((row) => (
        <TableRow
          key={row.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          {sortDataForCells(row.cells, headers.map(itm => itm.name)).map((cell, index) => (
            <TableCell key={cell.name}><CellType type={headers[index].type}>{cell.text}</CellType></TableCell>
          ))}
          <TableCell>
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Box sx={{ background: theme.palette.secondary.main }}>
                <List component="nav" aria-labelledby="nested-list-subheader">
                  <ListItemButton onClick={() => openMetod(row.id)}>
                    <ListItemIcon>
                      <VisibilityIcon />
                    </ListItemIcon>
                    <ListItemText primary="Просмотреть" />
                  </ListItemButton>
                  <ListItemButton onClick={() => deleteMethod(row.id)}>
                    <ListItemIcon>
                      <DeleteIcon />
                    </ListItemIcon>
                    <ListItemText primary="Удалить" />
                  </ListItemButton>
                </List>
              </Box>
            </Popover>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default BaseTableBody;
