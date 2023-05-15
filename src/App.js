import "./App.css";
import Hero from "./components/Hero";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        Netflix clone
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
