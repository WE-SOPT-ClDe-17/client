import { ThemeProvider } from "styled-components";
import theme from "./Components/Common/theme";
import GlobalStyles from "./Components/Common/GlobalStyles";
import Router from "./Components/Common/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
