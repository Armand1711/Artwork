// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import ArtworkList from './components/ArtworkList';
import CartPage from './components/CartPage'; // Import CartPage component
import SignUp from './components/SignUp'; // Import SignUp component
import Login from './components/Login'; // Import Login component
import './App.css';
import { CartProvider } from './contexts/CartContext'; // Import CartProvider

function App() {
  return (
    <Router>
      <CartProvider> {/* Wrap your entire application with CartProvider */}
        <div className="App">
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/artworks">Artworks</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link> 
              </li>
              <li>
                <Link to="/signup">Sign Up</Link> 
              </li>
              <li>
                <Link to="/login">Login</Link> 
              </li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/artworks" element={<ArtworkList />} />
            <Route path="/checkout" element={<CartPage />} /> {/* Use CartPage component */}
            <Route path="/signup" element={<SignUp />} /> {/* Use SignUp component */}
            <Route path="/login" element={<Login />} /> {/* Use Login component */}
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
