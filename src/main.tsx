import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { BrowserRouter } from "react-router";
import Routes from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/recipe-finder-website/">
      <Routes />
    </BrowserRouter>
  </StrictMode>
);
