import { InputProps } from "@/types/component-types";
import "./index.css";

export function Input({ className = "", ...rest }: InputProps) {
  return <input type="text" className={`input ${className}`} {...rest} />;
}
