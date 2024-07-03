import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    textColor: Palette["primary"];
  }

  interface PaletteOptions {
    textColor?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    textColor: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#2E6EFF",
    },
    textColor: {
      main: "#1E1E1ECC",
    },
  },
});

export default theme;
