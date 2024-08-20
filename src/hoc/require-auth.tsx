import { Navigate, useLocation } from "react-router-dom";
import { FC } from "react";
import { useRefreshToken } from "../hooks/utility-hooks/use-refresh-token";
import { UserInfoProvider } from "../providers";
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
