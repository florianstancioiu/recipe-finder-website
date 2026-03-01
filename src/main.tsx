import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { HashRouter } from "react-router";
import Routes from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <Routes />
    </HashRouter>
  </StrictMode>
);
