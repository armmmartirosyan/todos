import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { UserInfoProvider } from "@/providers";
import { AuthApis } from "@/api";

export const useAuthenticate = () => {
  const { accessToken, refreshToken } = UserInfoProvider.getUserInfo();

  const handleSuccess = (result: AxiosResponse) => {
    const { accessToken, refreshToken, user } = result.data;

    UserInfoProvider.setUserInfo({ accessToken, refreshToken, user });
  };

  return useQuery(["auth"], AuthApis.authenticate, {
    onSuccess: handleSuccess,
    enabled: !accessToken && !refreshToken,
  });
};
