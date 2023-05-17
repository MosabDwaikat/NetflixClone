import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          textTransform: "none",
          lineHeight: 1,
          color: "white",
          ":hover": {
            backgroundColor: "rgb(193, 17, 25);",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input": {
            color: "white",
          },
          "& .MuiInput-root": {
            color: "white",
            height: "86px",
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          backgroundColor: "rgba(229,9,20)",
          color: "white",
          borderRadius: "4px",
          ":hover": {
            backgroundColor: "rgba(220,100,100,.5)",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white",
          fontSize: "16px",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {},
      },
    },
  },
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
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      letterSpacing: "normal",
      textSizeAdjust: "100%",
      "@media (min-width: 768px)": {
        // Medium-sized breakpoint (md)
        fontSize: "2.5rem",
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
      main: "rgb(229, 9, 20)",
    },
  },
});

export default theme;
