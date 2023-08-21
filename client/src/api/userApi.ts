import { AxiosInstance } from "axios";
import { User } from "../types/basicTypes";

export const userApi = (instance: AxiosInstance) => {
  return {
    async getUserList() {
      const { data } = await instance.get<User[]>("/user/list/");
      return data;
    },
    async getUser(id: string) {
      const { data } = await instance.get<User>(`/user/${id}/`);
      return data;
    },
    async updateUser(newUser: Omit<User, 'id'>, id: string) {
      const { data } = await instance.put<User>(`/user/${id}/`, newUser);
      return data;
    },
    async createUser(newUser: Omit<User, 'id'>) {
      const { data } = await instance.post<User>(`/user/`, newUser);
      return data;
    },
    async deleteUser(id: string) {
      const { data } = await instance.delete<User>(`/user/${id}`);
      return data;
    },
    async appendPhoto(id: string, formdata: FormData) {
      const { data } = await instance.post<User>(`/user/${id}/photo/`, formdata)
      return data
    }
  };
};
