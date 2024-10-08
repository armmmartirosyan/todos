import { useGetTodos } from "@/hooks/request-hooks";
import { WholePageLoading } from "@/components";
import { TodoItem } from "../todo-item";
import { Todo } from "@/types";

export function TodoList() {
  const { data, isFetching } = useGetTodos();

  const todos = data?.data;

  return (
    <div className="todo_list_wrapper">
      {isFetching && <WholePageLoading />}

      {!!todos?.length &&
        todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
}
