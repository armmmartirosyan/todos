import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserInfoProvider } from "../../providers/user-info-provider";
import { AuthApis } from "../../api/auth-apis";
import { api } from "../../api";

export function useRefreshToken() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const refreshInnterceptor = api.interceptors.response.use(
      (res) => res,
      async (error) => {
        const originalRequest = error.config;
        const { refreshToken: oldRefreshToken, user: oldUser } =
          UserInfoProvider.getUserInfo();

        if (error?.response?.status === 403 && oldRefreshToken) {
          try {
            const response = await AuthApis.refresh({
              refreshToken: oldRefreshToken,
              id: oldUser.id,
            });

            const { accessToken, refreshToken, user } = response.data;

            UserInfoProvider.setUserInfo({ accessToken, refreshToken, user });
            originalRequest.headers.Authentication = `Bearer ${accessToken}`;
            originalRequest._retry = true;

            return api(originalRequest);
          } catch (err) {
            return err;
          }
        } else {
          UserInfoProvider.removeUserInfo();
          navigate("/");
        }

        return Promise.reject(error);
      }
    );

    return () => {
      api.interceptors.response.eject(refreshInnterceptor);
    };
  }, []);
}
