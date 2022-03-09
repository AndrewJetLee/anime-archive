import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "normalize.css"; // Note this
import { colors } from "./utility/themes";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={colors}>
        <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
