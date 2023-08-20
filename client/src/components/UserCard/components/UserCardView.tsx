import { FC, useState } from "react";
import { User } from "../../../types/basicTypes";
import { Avatar, Button, Divider, Grid, Typography } from "@mui/material";
import UserCardEditable from "./UserCardEditable";

type USerCardViewProps = {
  user: User;
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

const UserCardView: FC<USerCardViewProps> = ({ user, refresh }) => {
  const [isEdit, setIsEdit] = useState(false);
  return isEdit ? (
    <UserCardEditable user={user} refresh={refresh}/>
  ) : (
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
            <Avatar alt={user.name} src={user.photo} sx={avatarStyle} />
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
            <Grid item xs={8}>
              <Typography variant="h4">{user.name}</Typography>
              <Typography variant="button">{user.position}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Button onClick={() => setIsEdit(true)}>Редактировать</Button>
            </Grid>
          </Grid>
          <Divider textAlign="center">Доп. информация</Divider>
          <Grid container sx={infoStyle}>
            <Grid item xs={3}>
              <Typography>Возраст:</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography>{user.age}</Typography>
            </Grid>
          </Grid>
          <Grid container sx={infoStyle}>
            <Grid item xs={3}>
              <Typography>Email:</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography>{user.email}</Typography>
            </Grid>
          </Grid>
          <Grid container sx={infoStyle}>
            <Grid item xs={3}>
              <Typography>Краткая информация:</Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography>{user.info}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UserCardView;
