import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/system";
import { AppBar } from "./components/AppBar";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <div className="App">
        <Button variant="outlined" color="secondary">
          Heelo
        </Button>
        <Typography color="primary">Hello</Typography>
        <Typography variant="h1">Hello</Typography>
      </div>
    </ThemeProvider>
  );
}

export default App;
