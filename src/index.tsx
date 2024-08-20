import ReactDOM from "react-dom/client";
import { ReactQueryProvider } from "./providers";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./assets/styles/globals.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ReactQueryProvider>
    <App />
  </ReactQueryProvider>
);

reportWebVitals();
