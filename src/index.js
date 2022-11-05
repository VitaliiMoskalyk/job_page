import React, { Suspense } from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/job_page/">
    <React.StrictMode>
      <Suspense fallback={<h1>LOADDDDDDDDDEEERR</h1>}>
        <App />
      </Suspense>
    </React.StrictMode>
  </BrowserRouter>
);
