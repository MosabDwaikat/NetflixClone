import "./App.css";
import Hero from "./components/Hero";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./providers/ThemeProvider";
import Header from "./components/Header";
import { Box } from "@mui/system";
import Landing from "./pages/Landing";
import LanguageProvider from "./providers/LanguageProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <Landing />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
