import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './components/Login';
import Admin from './pages/Admin';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import WishList from './components/Wishlist';
import CartDetails from './components/CartDetails';
import BillingDetails from './components/BillingDetails';
import OrderConfirmation from './components/OrderConfirmation';
import categories from './components/categories';
import Header from './components/Header';
import Footer from './components/Footer';
import Account from './components/Account'; 
import EditOrder from './pages/EditOrder';

const AppContent = ({ 
  addToWishList, 
  wishList, 
  cartItems, 
  addToCart, 
  updateItemQuantity, 
  removeItem, 
  isAuthenticated, 
  setIsAuthenticated 
}) => {
  const location = useLocation();
  const navigate = useNavigate(); // useNavigate dentro de AppContent
  const hideHeaderFooter = location.pathname === '/Admin';

  const placeOrder = (cartItems, formDetails) => {
    console.log('Pedido realizado:', cartItems, formDetails);
    navigate('/order-confirmation', { state: { cartItems, formDetails } });
  };

  return (
    <>
      {!hideHeaderFooter && (
        <Header 
          wishList={wishList} 
          cartItems={cartItems} 
          isAuthenticated={isAuthenticated} 
          setIsAuthenticated={setIsAuthenticated} 
        />
      )}
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/Login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/productos/:categoryName" element={<ProductList categories={categories} addToWishList={addToWishList} wishList={wishList} addToCart={addToCart} />} />
        <Route path="/productos/:categoryName/:productId" element={<ProductDetail categories={categories} addToCart={addToCart} />} />
        <Route path="/wishlist" element={<WishList wishlistItems={wishList} addToCart={addToCart} />} />
        <Route path="/cart" element={<CartDetails cartItems={cartItems} updateItemQuantity={updateItemQuantity} removeItem={removeItem} />} />
        <Route path="/billing" element={<BillingDetails cartItems={cartItems} placeOrder={placeOrder} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/edit-order/:productId" element={<EditOrder />} />
        <Route path="/miperfil" element={<Account />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

const App = () => {
  const [wishList, setWishList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addToWishList = (product) => {
    setWishList(prevList => {
      if (!prevList.find(item => item.id === product.id)) {
        return [...prevList, product];
      }
      return prevList.filter(item => item.id !== product.id);
    });
  };

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateItemQuantity = (productId, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <Router>
      <AppContent
        addToWishList={addToWishList}
        wishList={wishList}
        cartItems={cartItems}
        addToCart={addToCart}
        updateItemQuantity={updateItemQuantity}
        removeItem={removeItem}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </Router>
  );
};

export default App;
