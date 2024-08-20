import { InternalAxiosRequestConfig } from "axios";
import { ReactNode } from "react";

export type UserInfo = {
  accessToken: string;
  refreshToken: string;
  user: { id: string };
};

export interface AxiosRequestConfig extends InternalAxiosRequestConfig<any> {
  _retry?: boolean;
}

export enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export type Todo = {
  id: number;
  description: string;
  status: string;
  title: string;
  userId: string;
};

export type TodoStatusItem = {
  name: string;
  cssClass: string;
  nameInServer: string;
};

export type OnlyChildrenProps = { children: ReactNode };
