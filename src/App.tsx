import { ThemeProvider } from "@mui/system";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./theme";

//Component
import PrimaryLayout from "./components/layouts/primary/PrimaryLayout";

//Page
import HomePage from "./pages/home-page/HomePage";
import LoginPage from "./pages/login-page/LoginPage";
import NotFoundPage from "./pages/notfound-page/NotFoundPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <PrimaryLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PrimaryLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
