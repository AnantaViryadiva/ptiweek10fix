import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
document.body.style.background = "rgb(174, 194, 188)";

root.render(<App />);
