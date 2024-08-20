import { TodoStatusItem } from "@/types";
import { TODO_STATUSES } from "@/constants";
import { StatusButton } from "@/components";
import { TodoStatusesProps } from "@/types/component-types";

export function TodoStatuses({ todoInfo }: TodoStatusesProps) {
  return (
    <div className="todo_statuses">
      {TODO_STATUSES.map((status: TodoStatusItem) => (
        <StatusButton status={status} todoInfo={todoInfo} key={status.name} />
      ))}
    </div>
  );
}
