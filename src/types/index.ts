import { InternalAxiosRequestConfig } from "axios";

export type UserInfo = {
  accessToken: string;
  refreshToken: string;
  user: { id: string };
};

export interface AxiosRequestConfig extends InternalAxiosRequestConfig<any> {
  _retry?: boolean;
}
