import { StatusButton } from "../../../../../components";
import { TODO_STATUSES } from "../../../../../constants";
import { TodoStatusItem } from "../../../../../types";
import { TodoStatusesProps } from "../../../../../types/component-types";

export function TodoStatuses({ todoInfo }: TodoStatusesProps) {
  return (
    <div className="todo_statuses">
      {TODO_STATUSES.map((status: TodoStatusItem) => (
        <StatusButton status={status} todoInfo={todoInfo} key={status.name} />
      ))}
    </div>
  );
}
