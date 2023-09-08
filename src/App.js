import './App.css';
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/login'
            element={[<Login key='login' />, <Checkout key='login' />]}
          />
          <Route
            path='/checkout'
            element={[<Header key='header' />, <Checkout key='checkout' />]}
          />

          <Route
            path='/'
            element={[<Header key='header' />, <Home key='home' />]}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
