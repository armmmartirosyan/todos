import { MouseEvent, useCallback } from "react";
import { TodoItemProps } from "../../../../types/component-types";
import { TodoEdit, TodoStatuses, TodoTrash } from "./components";
import { todoEditDto, todoInfoDto } from "../../../../utils";
import { useToggleOpenClose } from "./hooks";
import "./index.css";

export function TodoItem({ todo }: TodoItemProps) {
  const { open, toggleOpenClose } = useToggleOpenClose();

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
        <TodoEdit todoData={todoEditDto(todo)} />
        <TodoTrash todoId={todo.id} />
      </div>

      {open && <TodoStatuses todoInfo={todoInfoDto(todo)} />}
    </article>
  );
}
