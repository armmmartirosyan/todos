import { ButtonHTMLAttributes } from "react";
import { ButtonVariants, TodoStatusItem } from "./index";

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
  todoInfo: { id: number; status: string };
};
