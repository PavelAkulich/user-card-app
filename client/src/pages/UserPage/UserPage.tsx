import { FC, useMemo, useState, useEffect } from "react";
import BaseTable from "../../components/Table/BaseTable";
import { convertDataToRows } from "../../utils/convertDataToRows";
import { Container, Typography, Button, Grid } from "@mui/material";
import BaseModal from "../../components/Modal/BaseModal";
import UserCard from "../../components/UserCard/UserCard";
import { User } from "../../types/basicTypes";
import { api } from "../../api";

const UserPage: FC = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<User[]>([]);
  const [currentID, setCurrentId] = useState<string | undefined>(undefined);

  useEffect(() => {
    api()
      .user.getUserList()
      .then((res) => {
        setData(res);
      });
  }, []);
  const headers = useMemo(
    () => [
      {
        name: "id",
        text: "ID",
        id: "7",
      },
      {
        name: "photo",
        text: "Фото",
        type: "avatar",
        id: "7",
      },
      {
        name: "name",
        text: "Имя",
        id: "1",
      },
      {
        name: "position",
        text: "Должность",
        id: "4",
      },
      {
        name: "email",
        text: "Email",
        id: "5",
      },
      {
        name: "age",
        text: "Возраст",
        id: "2",
      },
      {
        name: "info",
        text: "Информация",
        id: "6",
      },
    ],
    []
  );
  const dataTable = useMemo(() => {
    return convertDataToRows<User>(data);
  }, [data]);

  const handleOpen = (id?: string) => {
    setCurrentId(id);
    setOpen(true);
  };
  const handleClose = () => {
    setCurrentId(undefined);
    setOpen(false);
  };
  const refresh = () => {
    handleClose();
    api()
      .user.getUserList()
      .then((res) => {
        setData(res);
      });
  };
  const deleteMethod = (id: string) => {
    api()
      .user.deleteUser(id)
      .then(() => refresh());
  };

  return (
    <Container>
      <Grid container justifyContent="space-between">
        <Grid item>
          <Typography variant="h5">Пользователи</Typography>
        </Grid>
        <Grid item>
          <Button onClick={() => handleOpen()}>Добавить</Button>
        </Grid>
      </Grid>
      <BaseTable
        data={dataTable}
        headers={headers}
        openMethod={handleOpen}
        deleteMethod={deleteMethod}
      />
      <BaseModal open={open} handleClose={handleClose}>
        <UserCard id={currentID} refresh={refresh} />
      </BaseModal>
    </Container>
  );
};

export default UserPage;
