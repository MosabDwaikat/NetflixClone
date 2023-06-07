import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./providers/ThemeProvider";
import LanguageProvider from "./providers/LanguageProvider";
import Router from "./Router";
import { AuthProvider } from "./providers/AuthProvider";
import { ContentPreferencesProvider } from "./providers/ContentPreferencesProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <AuthProvider>
          <ContentPreferencesProvider>
            <Router />
          </ContentPreferencesProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
