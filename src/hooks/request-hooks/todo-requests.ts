import { useQuery } from "react-query";
import { TodoApis } from "../../api/todo-apis";

export const useGetTodos = () => {
  return useQuery(["todo-list"], TodoApis.getTodoList);
};
