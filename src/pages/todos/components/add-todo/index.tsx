import { useRef } from "react";
import { Panel, PlusButton } from "@/components";
import { useOpenClose } from "@/hooks/utility-hooks";
import { useCreateTodo } from "@/hooks/request-hooks";

export function AddTodo() {
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const { onClose, onOpenClose, open } = useOpenClose(buttonContainerRef);

  return (
    <div ref={buttonContainerRef}>
      <PlusButton onClick={onOpenClose} />
      {open && <Panel onClose={onClose} useAction={useCreateTodo} />}
    </div>
  );
}
