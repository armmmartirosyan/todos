import { MouseEvent, useCallback } from "react";
import { Todo } from "../../../../types";
import { useDelete } from "../../../../hooks/request-hooks";
import { ReactComponent as EditIcon } from "../../../../assets/icons/edit.svg";
import { ReactComponent as TrashIcon } from "../../../../assets/icons/trash.svg";
import { useToggleOpenClose } from "./hooks";
import { TodoStatuses } from "./components";
import "./index.css";

export function TodoItem({ todo }: { todo: Todo }) {
  const { open, toggleOpenClose } = useToggleOpenClose();
  const { mutate: deleteTodo, isLoading: isLoadingDelete } = useDelete();

  const handleActions = useCallback((e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }, []);

  return (
    <article className="todo_item" onClick={toggleOpenClose}>
      <div className={`todo_status_indicator ${todo.status}`} />
      <div>
        <h2 className="todo_title">{todo.title}</h2>
        <p className="todo_desc">{todo.description}</p>
      </div>
      <div className="todo_actions" onClick={handleActions}>
        <EditIcon className="todo_edit" />
        <TrashIcon className="todo_trash" onClick={() => deleteTodo(todo.id)} />
      </div>

      {open && <TodoStatuses todoInfo={{ id: todo.id, status: todo.status }} />}
    </article>
  );
}
