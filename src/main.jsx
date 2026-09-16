import React from "react";
import { createRoot } from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import App from "./App";
import "primeicons/primeicons.css";
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/components.css";

createRoot(document.getElementById("root")).render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>,
);
