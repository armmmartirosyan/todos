import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { PlusButtonProps } from "../../types/component-types";
import "./index.css";

export function PlusButton(props: PlusButtonProps) {
  return (
    <button className="plus_button" {...props}>
      <PlusIcon />
    </button>
  );
}
