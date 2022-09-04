import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import colors from "./assets/styles/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: "#000",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
