import { useMutation, useQuery, useQueryClient } from "react-query";
import { TodoApis } from "../../api";

export const useGetTodos = () => {
  return useQuery(["todo-list"], TodoApis.getTodoList);
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(["create-todo"], TodoApis.createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo-list"] });
    },
  });
};

export const useEditTodo = () => {
  const queryClient = useQueryClient();

  return useMutation(["edit-todo"], TodoApis.editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo-list"] });
    },
  });
};

export const useSwitchTodoStatus = () => {
  const queryClient = useQueryClient();

  return useMutation(["switch-todo-status"], TodoApis.switchTodoStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo-list"] });
    },
  });
};

export const useDelete = () => {
  const queryClient = useQueryClient();

  return useMutation(["delete-todo"], TodoApis.deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo-list"] });
    },
  });
};
