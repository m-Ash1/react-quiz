import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/components/App.jsx";
import "./index.css";
import { QuizContextProvider } from "./contexts/QuizContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </React.StrictMode>
);
