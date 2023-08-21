import { FC } from "react";
import { Avatar } from "@mui/material";

type CellTypeProps = {
  children: string;
  type?: string;
};

const CellType: FC<CellTypeProps> = ({ children, type }) => {
  if (type === "avatar") return <Avatar alt={children} src={children} />;
  return <>{children}</>;
};

export default CellType;
