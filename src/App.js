import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./providers/ThemeProvider";
import LanguageProvider from "./providers/LanguageProvider";
import Router from "./Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <Router />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
