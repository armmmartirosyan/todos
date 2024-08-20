import { useRef } from "react";
import { Panel } from "@/components";
import { useEditTodo } from "@/hooks/request-hooks";
import { useOpenClose } from "@/hooks/utility-hooks";
import { TodoEditProps } from "@/types/component-types";
import { ReactComponent as EditIcon } from "@/assets/icons/edit.svg";

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
