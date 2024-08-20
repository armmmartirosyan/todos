import axios from "axios";
import { UserInfoProvider } from "../providers";
import { AuthApis } from "./auth-apis";

const { accessToken } = UserInfoProvider.getUserInfo();

const api = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const { refreshToken: oldRefreshToken, user: oldUser } =
      UserInfoProvider.getUserInfo();

    if (
      (error?.response?.status === 403 || error?.response?.status === 401) &&
      oldRefreshToken
    ) {
      try {
        const response = await AuthApis.refresh({
          refreshToken: oldRefreshToken,
          id: oldUser.id,
        });

        const { accessToken, refreshToken, user } = response.data;

        UserInfoProvider.setUserInfo({ accessToken, refreshToken, user });
      } catch (err) {
        return err;
      }
    } else {
      UserInfoProvider.removeUserInfo();
    }

    window.location.reload();
  }
);

export { api };
