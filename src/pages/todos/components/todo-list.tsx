import { useGetTodos } from "../../../hooks/request-hooks";

export function TodoList() {
  const { data, isLoading } = useGetTodos();
  return <div className="todo_list_wrapper"></div>;
}
