import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./providers/ThemeProvider";
import LanguageProvider from "./providers/LanguageProvider";
import Router from "./Router";
import { AuthProvider } from "./providers/AuthProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
