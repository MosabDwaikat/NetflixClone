import "./App.css";
import Hero from "./components/Hero";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./providers/ThemeProvider";
import Header from "./components/Header";
import { Box } from "@mui/system";
import Landing from "./pages/Landing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
