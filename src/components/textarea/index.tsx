import { TextareaProps } from "@/types/component-types";
import "./index.css";

export function Textarea({ className = "", ...rest }: TextareaProps) {
  return <textarea className={`textarea ${className}`} {...rest}></textarea>;
}
