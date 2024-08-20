import { useRef } from "react";
import { ReactComponent as EditIcon } from "../../../../../assets/icons/edit.svg";
import { useOpenClose } from "../../../../../hooks/utility-hooks/use-open-close";
import { TodoEditProps } from "../../../../../types/component-types";
import { useEditTodo } from "../../../../../hooks/request-hooks";
import { Panel } from "../../../../../components";

export function TodoEdit({ todoData }: TodoEditProps) {
  const iconRef = useRef<SVGSVGElement>(null);
  const { onClose, onOpenClose, open } = useOpenClose(iconRef);

  return (
    <>
      <EditIcon className="todo_edit" onClick={onOpenClose} ref={iconRef} />
      {open && (
        <Panel
          onClose={onClose}
          useAction={useEditTodo}
          oldTodoInfo={todoData}
        />
      )}
    </>
  );
}
