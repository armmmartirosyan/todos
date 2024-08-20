import { Todo } from "@/types";
import { TodoEditDto, TodoInfoDto } from "@/types/utils-types";

export function todoInfoDto(todo: Todo): TodoInfoDto {
  return { id: todo.id, status: todo.status };
}

export function todoEditDto(todo: Todo): TodoEditDto {
  return { id: todo.id, title: todo.title, description: todo.description };
}
