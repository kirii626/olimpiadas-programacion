import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './components/Login';
import Admin from './pages/Admin';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import categories from './components/categories';
import Header from './components/Header';
import Footer from './components/Footer';

const AppContent = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === '/Admin';

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Register" element={<Register />} /> 
        <Route path="/Admin" element={<Admin />} /> 
        <Route path="/productos/:categoryName" element={<ProductList categories={categories} />} />
        <Route path="/productos/:categoryName/:productId" element={<ProductDetail categories={categories} />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
