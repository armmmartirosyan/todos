import { useCallback, useState } from "react";

export function useToggleOpenClose() {
  const [open, setOpen] = useState(false);

  const toggleOpenClose = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return {
    open,
    toggleOpenClose,
  };
}
