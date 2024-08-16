import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './components/Login'; // Asegúrate de importar el componente
import Admin from './pages/Admin';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import categories from './components/categories'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Register" element={<Register />} /> 
        <Route path="/Admin" element={<Admin />} /> 
        {/* Ruta para mostrar los productos filtrados por categoría */}
        <Route path="/productos/:categoryName" element={<ProductList categories={categories} />} />
      
        {/* Ruta para mostrar el detalle de un producto */}
        <Route path="/productos/:categoryName/:productId" element={<ProductDetail categories={categories} />} />
  
      </Routes>
    </Router>
  );
}

export default App;
