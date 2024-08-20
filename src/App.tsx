import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/sign-in";
import Todos from "./pages/todos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
