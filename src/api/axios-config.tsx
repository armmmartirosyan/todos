import axios from "axios";
import { AxiosRequestConfig } from "../types";
import { UserInfoProvider } from "../providers/user-info-provider";

const { accessToken } = UserInfoProvider.getUserInfo();

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

export { api };
