import { FC, useState, useRef, ChangeEvent } from "react";
import { User } from "../../../types/basicTypes";
import { useFormik } from "formik";
import {
  Avatar,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
  Tooltip
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
  const [photo, setPhoto] = useState<File>();
  const refImage = useRef<HTMLInputElement | null>(null);
  const handleUploadClick = () => {
    refImage.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    setPhoto(e.target.files[0]);
  };
  const formik = useFormik({
    initialValues: user
      ? user
      : {
          name: "",
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
          .then((resp) => {
            if (photo) {
              const formData = new FormData();
              formData.append("photo", photo);
              api()
                .user.appendPhoto(resp.id, formData)
                .then(() => refresh());
            } else refresh();
          });
      } else
        api()
          .user.createUser(values)
          .then((resp) => {
            if (photo) {
              const formData = new FormData();
              formData.append("photo", photo);
              api()
                .user.appendPhoto(resp.id, formData)
                .then(() => refresh());
            } else refresh();
          });
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
            <Tooltip title="Изменить">
              <Avatar
                alt={formik.values.name}
                src={photo ? URL.createObjectURL(photo) : formik.values.photo}
                sx={avatarStyle}
                onClick={handleUploadClick}
              />
            </Tooltip>
            <input
              type="file"
              accept="image/*"
              ref={refImage}
              onChange={handleFileChange}
              hidden
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
