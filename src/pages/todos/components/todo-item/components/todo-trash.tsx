import { useCallback } from "react";
import { useDelete } from "../../../../../hooks/request-hooks";
import { ReactComponent as TrashIcon } from "../../../../../assets/icons/trash.svg";

export function TodoTrash({ todoId }: { todoId: number }) {
  const { mutate: deleteTodo, isLoading } = useDelete();

  const handleDelete = useCallback(() => {
    if (isLoading) return;

    deleteTodo(todoId);
  }, [deleteTodo, isLoading, todoId]);

  return <TrashIcon className="todo_trash" onClick={handleDelete} />;
}
