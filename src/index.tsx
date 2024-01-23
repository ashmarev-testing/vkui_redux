import ReactDOM from "react-dom/client";
import "./index.css";
import { AppConfig } from "./AppConfig";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<AppConfig />);
