import { useDelete } from "../../../../../hooks/request-hooks";
import { ReactComponent as TrashIcon } from "../../../../../assets/icons/trash.svg";

export function TodoTrash({ todoId }: { todoId: number }) {
  const { mutate: deleteTodo, isLoading: isLoadingDelete } = useDelete();

  return (
    <TrashIcon className="todo_trash" onClick={() => deleteTodo(todoId)} />
  );
}
