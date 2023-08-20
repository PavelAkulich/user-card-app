import axios from "axios";
import { userApi } from "./userApi";

export type ApiReturnType = {
  user: ReturnType<typeof userApi>;
};

export const api = (): ApiReturnType => {
  const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
  });
  return {
    user: userApi(instance),
  };
};
