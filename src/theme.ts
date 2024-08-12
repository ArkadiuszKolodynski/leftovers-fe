import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#43a047",
      light: "#66bb6a",
      dark: "#2e7d32",
    },
    warning: {
      main: "#ef6c00",
      dark: "#ef6c00",
      light: "#ff9800",
    },
    background: {
      default: "#f3f6f9",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});
