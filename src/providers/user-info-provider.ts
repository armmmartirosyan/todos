import { USER_INFO_SESSION_KEY } from "@/constants";
import { UserInfo } from "@/types";

export class UserInfoProvider {
  static setUserInfo(info: UserInfo) {
    localStorage.setItem(USER_INFO_SESSION_KEY, JSON.stringify(info));
  }

  static getUserInfo(): UserInfo {
    return JSON.parse(localStorage.getItem(USER_INFO_SESSION_KEY) || "{}");
  }

  static removeUserInfo() {
    localStorage.removeItem(USER_INFO_SESSION_KEY);
  }
}
