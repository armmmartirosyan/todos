import { Navigate, useLocation } from "react-router-dom";
import React, { FC } from "react";
import { useRefreshToken } from "../hooks/utility-hooks/use-refresh-token";
import { UserInfoProvider } from "../providers/user-info-provider";
import { useAuthenticate } from "../hooks/request-hooks";

export const requireAuth = (WrappedComponent: FC) => {
  return (props: any) => {
    const { refreshToken } = UserInfoProvider.getUserInfo();
    const location = useLocation();

    useAuthenticate();
    useRefreshToken();

    if (!refreshToken) {
      return <Navigate to="/" state={{ path: location.pathname }} />;
    }

    return <WrappedComponent {...props} />;
  };
};
