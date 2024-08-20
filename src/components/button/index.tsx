import { ButtonProps } from "../../types/component-types";
import { ButtonVariants } from "../../types";
import "./index.css";

export function Button({
  variant = ButtonVariants.PRIMARY,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={`button ${className} ${variant}`} {...rest}>
      {children}
    </button>
  );
}
