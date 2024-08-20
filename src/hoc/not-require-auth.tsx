import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { UserInfoProvider } from "../providers/user-info-provider";
import { useAuthenticate } from "../hooks/request-hooks";

export const notRequireAuth = (WrappedComponent: FC) => {
  return (props: any) => {
    const { refreshToken } = UserInfoProvider.getUserInfo();

    useAuthenticate();

    if (refreshToken) {
      return <Navigate to="/todos" />;
    }

    return <WrappedComponent {...props} />;
  };
};
