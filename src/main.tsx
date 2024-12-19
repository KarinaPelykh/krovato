import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18next.ts";
import "./stylesheet/fonts.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>
);
