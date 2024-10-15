import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root") ?? document.createElement("root")).render(
    <StrictMode>
        <HashRouter>
            <div>Hello World!!!</div>
        </HashRouter>
    </StrictMode>
);
