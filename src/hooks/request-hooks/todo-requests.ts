import { useMutation, useQuery, useQueryClient } from "react-query";
import { TodoApis } from "../../api";
import { UserInfoProvider } from "../../providers";

export const useGetTodos = () => {
  const { accessToken } = UserInfoProvider.getUserInfo();

  return useQuery(["todo-list"], TodoApis.getTodoList, {
    enabled: !!accessToken,
  });
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
