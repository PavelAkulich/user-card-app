import { FC } from "react";
import { User } from "../../../types/basicTypes";
import { useFormik } from "formik";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { api } from "../../../api";

type UserCardEditableProps = {
  user?: User;
  refresh: () => void;
};

const avatarStyle = {
  width: 150,
  height: 150,
  transition: "all .5s",
  "&:hover": {
    transform: "scale(1.1)",
    cursor: "pointer",
  },
};

const infoStyle = {
  py: 1,
  borderBottom: 1,
  borderColor: "#e4e4e4",
  "&:last-child": {
    border: 0,
  },
  "&>.MuiGrid-item:first-of-type>.MuiTypography-root": {
    color: "#949494",
  },
};

const UserCardEditable: FC<UserCardEditableProps> = ({ user, refresh }) => {
  const formik = useFormik({
    initialValues: user
      ? user
      : {
          name: "",
          job: "",
          photo: "",
          position: "",
          age: "",
          email: "",
          info: "",
        },
    onSubmit: (values) => {
      if (user) {
        api()
          .user.updateUser(values, user.id)
          .then(() => refresh());
      } else
        api()
          .user.createUser(values)
          .then(() => refresh());
    },
  });
  return (
    <>
      <Grid container spacing={3} sx={{ minWidth: 700 }}>
        <Grid
          item
          container
          xs={4}
          sx={{
            minHeight: 150,
          }}
          gap={3}
        >
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="baseline"
          >
            <Avatar
              alt={formik.values.name}
              src={formik.values.photo}
              sx={avatarStyle}
            />
          </Grid>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            minHeight: 150,
          }}
        >
          <Grid container>
            <Grid item>
              <TextField
                fullWidth
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
                variant="standard"
                sx={{ "& input": { fontSize: "2.125rem" } }}
                placeholder="Имя"
              />
              <TextField
                fullWidth
                value={formik.values.position}
                onChange={formik.handleChange}
                name="position"
                variant="standard"
                placeholder="Должность"
              />
            </Grid>
          </Grid>
          <Divider textAlign="center">Доп. информация</Divider>
          <Grid container sx={infoStyle}>
            <Grid item xs={3}>
              <Typography>Возраст:</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                value={formik.values.age}
                onChange={formik.handleChange}
                name="age"
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid container sx={infoStyle}>
            <Grid item xs={3}>
              <Typography>Email:</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                variant="standard"
              />
            </Grid>
          </Grid>
          <Grid container sx={infoStyle}>
            <Grid item xs={3}>
              <Typography>Краткая информация:</Typography>
            </Grid>
            <Grid item xs={9}>
              <TextField
                fullWidth
                value={formik.values.info}
                onChange={formik.handleChange}
                name="info"
                variant="standard"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent="right">
        <Button onClick={() => formik.handleSubmit()}>Сохранить</Button>
      </Grid>
    </>
  );
};

export default UserCardEditable;
