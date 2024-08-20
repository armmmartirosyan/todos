import { api } from "./axios-config";

export class TodoApis {
  static async getTodoList() {
    return await api.get("api/v1/todo");
  }
}
