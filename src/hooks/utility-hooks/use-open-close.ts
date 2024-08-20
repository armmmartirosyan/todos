import { useState, useCallback, RefObject } from "react";
import { UseOpenCloseReturn } from "@/types/hook-types";
import { useOutsideClick } from "./use-outside-click";

export function useOpenClose(ref: RefObject<any>): UseOpenCloseReturn {
  const [open, setOpen] = useState(false);

  const handleOpenClose = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  useOutsideClick({
    ref,
    callback: handleClose,
  });

  return {
    open,
    onClose: handleClose,
    onOpenClose: handleOpenClose,
  };
}
