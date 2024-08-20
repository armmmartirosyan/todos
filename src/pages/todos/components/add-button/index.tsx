import { useCallback, useRef, useState } from "react";
import { useOutsideClick } from "../../../../hooks/utility-hooks";
import { PlusButton } from "../../../../components";
import { TodoPanel } from "../todo-panel";

export function AddButton() {
  const [open, setOpen] = useState(false);
  const buttonContainerRef = useRef<HTMLDivElement>(null);

  const handleOpenClose = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useOutsideClick({
    ref: buttonContainerRef,
    callback: handleClose,
  });

  return (
    <div ref={buttonContainerRef}>
      <PlusButton onClick={handleOpenClose} />
      {open && <TodoPanel />}
    </div>
  );
}
