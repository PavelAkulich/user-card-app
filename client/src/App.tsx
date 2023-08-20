import "./App.css";
import UserPage from "./pages/UserPage/UserPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: '#5683c5',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UserPage />
    </ThemeProvider>
  );
}

export default App;
