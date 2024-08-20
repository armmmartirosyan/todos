import { requireAuth } from "../../hoc";
import { TodoList, AddTodo } from "./components";
import "./index.css";

function Todos() {
  return (
    <div className="wrapper">
      <h1 className="title">My To-Do</h1>
      <TodoList />
      <AddTodo />
    </div>
  );
}

export default requireAuth(Todos);
