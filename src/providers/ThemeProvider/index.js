import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      letterSpacing: "normal",
      textSizeAdjust: "100%",
      "@media (min-width: 768px)": {
        // Medium-sized breakpoint (md)
        fontSize: "3rem",
      },
      "@media (min-width: 1024px)": {
        // Large-sized breakpoint (lg)
        fontSize: "4rem",
      },
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 400,
      letterSpacing: "normal",
      lineHeight: "1.875rem",
      textAlign: "start",
    },
    body1: {
      fontSize: "1.125rem",
      fontWeight: 500,
      letterSpacing: "normal",
      textSizeAdjust: "100%",
    },
  },
  textfield: {
    variants: [
      {
        props: { variant: "dashed" },
        style: {
          textTransform: "none",
          border: `2px dashed `,
        },
      },
    ],
  },
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

export default theme;
