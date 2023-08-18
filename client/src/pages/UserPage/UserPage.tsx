import { FC, useMemo } from "react";
import BaseTable from "../../components/Table/BaseTable";
import { data, createData } from "./mockData";
import { convertDataToRows } from "../../utils/convertDataToRows";

const UserPage: FC = () => {
  const dataTabele = useMemo(() => {
    return convertDataToRows<ReturnType<typeof createData>>(data);
  }, [data]);
  const headers = useMemo(
    () => [
      {
        name: "fio",
        text: "fio",
        id: "1",
      },
      {
        name: "age",
        text: "age",
        id: "2",
      },
      {
        name: "photo",
        text: "photo",
        id: "3",
      },
      {
        name: "job",
        text: "job",
        id: "4",
      },
    ],
    []
  );
  return <BaseTable data={dataTabele} headers={headers} />;
};

export default UserPage;
