import { FC, useEffect, useState } from "react";
import UserCardView from "./components/UserCardView";
import UserCardEditable from "./components/UserCardEditable";
import { User } from "../../types/basicTypes";

type UserCardProps = {
  id: string | undefined;
};

const UserCard: FC<UserCardProps> = ({ id }) => {
  const [user, setUser] = useState<User>({
    name: 'Pavel Akulich',
    job: 'IT man',
    photo: 'photo',
    age: '25'
  });
  useEffect(() => {
    // get user method
    if (id) console.log(id);
  }, [id]);
  return id ? <UserCardView user={user} /> : <UserCardEditable />;
};

export default UserCard;
