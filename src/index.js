import React, { StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Callback from "./Components/Callback";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Route for the specific endpoint */}
        <Route path="/auth" element={<Callback />} />
        {/* Default route for other endpoints */}
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);