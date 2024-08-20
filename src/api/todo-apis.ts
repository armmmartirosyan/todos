import {
  CreateTodoApiBody,
  EditTodoApiBody,
  SwitchTodoStatusApiBody,
} from "@/types/api-types";
import { api } from "./axios-config";

export class TodoApis {
  static async getTodoList() {
    return await api.get("api/v1/todo");
  }

  static async createTodo(body: CreateTodoApiBody) {
    return await api.post("api/v1/todo", body);
  }

  static async editTodo({ id, ...rest }: EditTodoApiBody) {
    return await api.put(`api/v1/todo/${id}`, { ...rest });
  }

  static async switchTodoStatus({ id, status }: SwitchTodoStatusApiBody) {
    return await api.put(`api/v1/todo/status/${id}`, { status });
  }

  static async deleteTodo(id: number) {
    return await api.delete(`api/v1/todo/${id}`);
  }
}
