import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductDetails from './pages/ProductDetails';
import { Toaster } from 'react-hot-toast';
import NavBar from './components/nav/nav-bar';

const App = () => (
  <Router>
    <NavBar />
    <Toaster />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  </Router>
);

export default App;