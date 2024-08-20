import { UseMutationResult } from "react-query";
import { ButtonHTMLAttributes } from "react";
import { AxiosResponse } from "axios";
import { ButtonVariants, Todo, TodoStatusItem } from "./index";
import { TodoEditDto } from "./utils-types";

type Todoinfo = { id: number; status: string };

export interface PlusButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface InputProps extends ButtonHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export interface TextareaProps
  extends ButtonHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string;
}

export interface ButtonProps extends PlusButtonProps {
  variant?: ButtonVariants;
}

export type StatusButtonProps = {
  status: TodoStatusItem;
  todoInfo: Todoinfo;
};

export type TodoItemProps = { todo: Todo };

export type TodoStatusesProps = {
  todoInfo: Todoinfo;
};

export type TodoEditProps = { todoData: TodoEditDto };

export type TodoPanelProps = {
  onClose: VoidFunction;
  oldTodoInfo?: TodoEditDto;
  useAction: () => UseMutationResult<
    AxiosResponse<any, any>,
    unknown,
    any,
    unknown
  >;
};
