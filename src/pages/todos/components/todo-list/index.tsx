import { useGetTodos } from "../../../../hooks/request-hooks";
import { Todo } from "../../../../types";
import { TodoItem } from "../todo-item";

export function TodoList() {
  const { data, isLoading } = useGetTodos();

  const todos = data?.data;

  return (
    <div className="todo_list_wrapper">
      {!isLoading &&
        !!todos?.length &&
        todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}
