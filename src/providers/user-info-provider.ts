import { USER_INFO_SESSION_KEY } from "../constants";
import { UserInfo } from "../types";

export class UserInfoProvider {
  static setUserInfo(info: UserInfo) {
    sessionStorage.setItem(USER_INFO_SESSION_KEY, JSON.stringify(info));
  }

  static getUserInfo(): any {
    return JSON.parse(sessionStorage.getItem(USER_INFO_SESSION_KEY) || "{}");
  }

  static removeUserInfo() {
    sessionStorage.removeItem(USER_INFO_SESSION_KEY);
  }
}
