import { createTheme } from "@mui/material/styles";

// Central MUI theme so any MUI component we pull in (checkboxes, selects,
// icon buttons, etc.) matches the green brand used across the flow.
export const theme = createTheme({
  palette: {
    primary: {
      main: "#0f7d43",
      dark: "#0c6537",
      light: "#149652",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#111827",
      secondary: "#6b7280",
    },
  },
  typography: {
    fontFamily: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"].join(","),
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#d1d5db",
          "&.Mui-checked": { color: "#0f7d43" },
        },
      },
    },
  },
});
