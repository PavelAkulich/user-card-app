import { FC, useEffect, useState } from "react";
import UserCardView from "./components/UserCardView";
import UserCardEditable from "./components/UserCardEditable";
import { User } from "../../types/basicTypes";
import { api } from "../../api";

type UserCardProps = {
  id: string | undefined;
  refresh: () => void;
};

const UserCard: FC<UserCardProps> = ({ id, refresh }) => {
  const [user, setUser] = useState<Omit<User, "id">>({
    name: "",
    position: "",
    photo: "photo",
    age: "",
    email: "",
    info: "",
  });
  useEffect(() => {
    if (id)
      api()
        .user.getUser(id)
        .then((res) => {
          setUser(res);
        });
  }, [id]);
  return id ? <UserCardView user={{...user, id}} refresh={refresh}/> : <UserCardEditable refresh={refresh}/>;
};

export default UserCard;
