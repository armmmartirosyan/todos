import { notRequireAuth } from "../../hoc";
import "./index.css";

function SignIn() {
  return <p className="information_text">Not authorized</p>;
}

export default notRequireAuth(SignIn);
