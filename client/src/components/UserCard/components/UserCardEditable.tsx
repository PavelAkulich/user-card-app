import { FC } from "react";
import { User } from "../../../types/basicTypes";
import { useFormik } from "formik";
import {
  Avatar,
  Button,
  Chip,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

type UserCardEditableProps = {
  user?: User;
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
  "&>.MuiGrid-item:first-child>.MuiTypography-root": {
    color: "#949494",
  },
};

const UserCardEditable: FC<UserCardEditableProps> = ({ user }) => {
  const formik = useFormik({
    initialValues: user
      ? user
      : {
          name: "",
          job: "",
          photo: "",
          age: "",
        },
    onSubmit: (values) => {
      console.log(values);
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
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="baseline"
            gap={3}
          >
            <Grid>
              <Typography variant="caption" display="block" gutterBottom>
                Дата создания
              </Typography>
              <Typography variant="overline" display="block" gutterBottom>
                19.08.2023
              </Typography>
            </Grid>
            <Grid>
              <Typography variant="caption" display="block" gutterBottom>
                Активность
              </Typography>
              <Chip label="Активен" />
            </Grid>
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
                sx={{'& input': { fontSize: '2.125rem'}}}
              />
              <TextField
                fullWidth
                value={formik.values.job}
                onChange={formik.handleChange}
                name="job"
                variant="standard"
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
              <Typography>pavelakulic@gmail.com</Typography>
            </Grid>
          </Grid>
          <Grid container sx={infoStyle}>
            <Grid item xs={3}>
              <Typography>Краткая биография:</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography>
                Test test Test test Test test Test test Test test Test test Test
                test Test test Test test Test test Test test Test test Test test
                Test test Test test Test test
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container justifyContent='right'><Button>Сохранить</Button></Grid>
    </>
  );
};

export default UserCardEditable;
