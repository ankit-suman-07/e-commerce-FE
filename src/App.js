import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductDetails from './pages/ProductDetails';
import { Toaster } from 'react-hot-toast';
import NavBar from './components/nav/nav-bar';
import Footer from './components/footer/footer';
import Cart from './pages/cart/Cart';
import LogIn from './pages/auth/login';
import SignUp from './pages/auth/signup';

const App = () => (
  <Router>
    <NavBar />
    <Toaster />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;