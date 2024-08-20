import { requireAuth } from "../../hoc";
import { TodoList, AddButton } from "./components";
import "./index.css";

function Todos() {
  return (
    <div className="wrapper">
      <h1 className="title">My To-Do</h1>
      <TodoList />
      <AddButton />
    </div>
  );
}

export default requireAuth(Todos);
