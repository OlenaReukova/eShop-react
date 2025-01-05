import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Story from "./Story";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Layout from "./Layout";
import Account from "./pages/Account";
import ProductPage from "./pages/ProductPage";
import Models from "./pages/Models";
import ModelsExplorerTwoCards from "./ModelsExplorerTwoCards";
import ModelsExplorerCards from "./ModelsExplorerCards";

const theme = createTheme({
  MuiContainer: {
    styleOverrides: {
      root: {
        maxWidth: "100%",
      },
    },
  },
  typography: {
    allVariants: {
      fontFamily: "DIN2014-Regular, Arial, sans-serif",
      textTransform: "none",
      fontSize: 16,
    },
    h1: {
      fontSize: "4rem",
      fontWeight: 1000,
      lineHeight: 1.2,
      "@media (max-width: 1200px)": {
        fontSize: "3rem",
      },
      "@media (max-width: 800px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.3,
      "@media (max-width: 1200px)": {
        fontSize: "2rem",
      },
      "@media (max-width: 800px)": {
        fontSize: "1.75rem",
      },
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
      lineHeight: 1.4,
      "@media (max-width: 1200px)": {
        fontSize: "1.75rem",
      },
      "@media (max-width: 800px)": {
        fontSize: "1.5rem",
      },
    },
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "#000000",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1.2rem",
          backgroundColor: "#000000",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#ff0000",
          },
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box sx={{ bgcolor: "#ffffff", height: "100vh", width: "100%" }}>
          <Router>
            <Layout>
              <Routes>
                <Route
                  path="/"
                  element={[<Home key="home" />, <Story key="story" />]}
                />
                <Route path="/login" element={[<Login key="login" />]} />
                <Route path="/account" element={[<Account key="account" />]} />
                <Route
                  path="/checkout"
                  element={[<Checkout key="checkout" />]}
                />
                <Route
                  path="/motorcycles"
                  element={[<ProductPage key="product page" />]}
                />
                <Route
                  path="/models"
                  element={[
                    <Models key="models" />,
                    <ModelsExplorerTwoCards key="ModelsExplorerTwo" />,
                    <ModelsExplorerCards key="ModelsExplorer" />,
                  ]}
                />
              </Routes>
            </Layout>
          </Router>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
