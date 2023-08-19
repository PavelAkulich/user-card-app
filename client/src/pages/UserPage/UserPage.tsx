import { FC, useMemo, useState } from "react";
import BaseTable from "../../components/Table/BaseTable";
import { data } from "./mockData";
import { convertDataToRows } from "../../utils/convertDataToRows";
import { Container } from "@mui/material";
import BaseModal from "../../components/Modal/BaseModal";
import UserCard from "../../components/UserCard/UserCard";
import { User } from "../../types/basicTypes";

const UserPage: FC = () => {
  const [open, setOpen] = useState(false);
  const [currentID, setCurrentId] = useState<string | undefined>(undefined);
  const handleOpen = (id: string) => {
    setCurrentId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setCurrentId(undefined);
    setOpen(false)
  };

  const dataTabele = useMemo(() => {
    return convertDataToRows<User>(data);
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
  return (
    <Container>
      <BaseTable
        data={dataTabele}
        headers={headers}
        openMethod={handleOpen}
        deleteMethod={handleOpen}
      />
      <BaseModal open={open} handleClose={handleClose}>
        <UserCard id={currentID}/>
      </BaseModal>
    </Container>
  );
};

export default UserPage;
