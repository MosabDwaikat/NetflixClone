import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./providers/ThemeProvider";
import LanguageProvider from "./providers/LanguageProvider";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <Home />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
