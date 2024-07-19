import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Story from './Story';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Layout from './Layout';
import Account from './Account';
import ProductPage from './ProductPage';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'DIN2014-Regular, Arial, sans-serif',
      textTransform: 'none',
      fontSize: 16,
    },
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
      lineHeight: 1.4,
    },
  },
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#000000',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          backgroundColor: '#000000',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#ff0000',
          },
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Container maxWidth='xl'>
          <Box sx={{ bgcolor: '#ffffff', height: '100vh' }}>
            <Router>
              <Layout>
                <Routes>
                  <Route path='/login' element={[<Login key='login' />]} />
                  <Route
                    path='/account'
                    element={[<Account key='account' />]}
                  />
                  <Route
                    path='/checkout'
                    element={[
                      <Header key='header' />,
                      <Checkout key='checkout' />,
                    ]}
                  />

                  <Route
                    path='/'
                    element={[
                      <Header key='header' />,
                      <Home key='home' />,
                      <Story key='story' />,
                    ]}
                  />
                  <Route
                    path='/motorcycles'
                    element={[<ProductPage key='product page' />]}
                  />
                </Routes>
              </Layout>
            </Router>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
