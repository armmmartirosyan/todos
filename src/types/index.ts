import { InternalAxiosRequestConfig } from "axios";
import { ReactNode, RefObject } from "react";

export type UserInfo = {
  accessToken: string;
  refreshToken: string;
  user: { id: string };
};

export interface AxiosRequestConfig extends InternalAxiosRequestConfig<any> {
  _retry?: boolean;
}

export type UseOutsideClickProps = {
  ref: RefObject<HTMLElement>;
  // eslint-disable-next-line no-unused-vars
  callback: (e: MouseEvent) => void;
  parent?: HTMLElement;
};

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
