import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import "./index.css";

export function PlusButton(props: any) {
  return (
    <button className="plus_button" {...props}>
      <PlusIcon />
    </button>
  );
}
