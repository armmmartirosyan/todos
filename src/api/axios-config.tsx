import axios from "axios";
import { UserInfoProvider } from "../providers";

const { accessToken } = UserInfoProvider.getUserInfo();

export const api = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});
