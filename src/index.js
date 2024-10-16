import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import "./index.css";

function AppWithUI() {
  return <App />;
}

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppWithUI />);
