import { useAuthenticate } from "../../hooks/request-hooks";
import { TodoList, AddTodo } from "./components";
import "./index.css";

export default function Todos() {
  useAuthenticate();

  return (
    <div className="wrapper">
      <h1 className="title">My To-Do</h1>
      <TodoList />
      <AddTodo />
    </div>
  );
}
