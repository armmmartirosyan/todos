import { RefreshTokenApiBody } from "../types/api-types";
import { api } from "./axios-config";

export class AuthApis {
  static async authenticate() {
    return await api.post("api/v1/auth");
  }

  static async refresh(body: RefreshTokenApiBody) {
    return await api.post("api/v1/auth/refresh", body);
  }
}
