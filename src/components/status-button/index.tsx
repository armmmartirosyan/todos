import { useCallback, useMemo } from "react";
import { useSwitchTodoStatus } from "@/hooks/request-hooks";
import { StatusButtonProps } from "@/types/component-types";
import "./index.css";

export function StatusButton({ status, todoInfo }: StatusButtonProps) {
  const ifCurrentStatus = useMemo(() => {
    return status.nameInServer === todoInfo.status;
  }, [status.nameInServer, todoInfo.status]);

  const { mutate: switchStatus } = useSwitchTodoStatus();

  const handleClick = useCallback(() => {
    switchStatus({ id: todoInfo.id, status: status.nameInServer });
  }, [switchStatus, todoInfo, status]);

  return (
    <button
      onClick={handleClick}
      className={`status_button ${status.cssClass} ${
        ifCurrentStatus ? "active-status" : ""
      }`}
    >
      {status.name}
    </button>
  );
}
