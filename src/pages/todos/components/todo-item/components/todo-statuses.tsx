import { StatusButton } from "../../../../../components";
import { TODO_STATUSES } from "../../../../../constants";
import { TodoStatusItem } from "../../../../../types";

export function TodoStatuses({
  todoInfo,
}: {
  todoInfo: { id: number; status: string };
}) {
  return (
    <div className="todo_statuses">
      {TODO_STATUSES.map((status: TodoStatusItem) => (
        <StatusButton status={status} todoInfo={todoInfo} key={status.name} />
      ))}
    </div>
  );
}
