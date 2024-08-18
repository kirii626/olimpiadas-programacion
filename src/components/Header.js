import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import user from '../assets/images/User.jpg'; 
import heart from '../assets/images/heartr.png';
import shopping from '../assets/images/shopping.svg';
import './styles/Header.css';
import Modal from './Modal';
import Login from './Login';
import { SearchBar } from './SearchBar';

const Header = ({ cartItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para saber si está logueado
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleProductsDropdownToggle = () => {
    setIsProductsDropdownOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDropdownOpen(false); // Cierra el dropdown al hacer logout
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Marca al usuario como logueado
    setIsModalOpen(false); // Cierra el modal al iniciar sesión
  };

  return (
    <header className="header">
      <div className="logo">
        <h2>GainsHub</h2>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li onMouseEnter={handleProductsDropdownToggle} onMouseLeave={handleProductsDropdownToggle}>
            <Link to="/productos">Productos</Link>
            {isProductsDropdownOpen && (
              <div className="dropdown-products">
                <ul>
                  <li><Link to="/productos/calzados">Calzados</Link></li>
                  <li><Link to="/productos/pantalones">Pantalones</Link></li>
                  <li><Link to="/productos/camisetas">Camisetas</Link></li>
                  <li><Link to="/productos/accesorios">Accesorios</Link></li>
                </ul>
              </div>
            )}
          </li>
          
          <li className="search-bar"><SearchBar /></li> {/* Barra de búsqueda */}
        </ul>
      </nav>
      <div className="user-options">
        <img
          className="user-icon icon"
          src={user}
          alt="User Icon"
          onClick={handleDropdownToggle}
        />
        {isDropdownOpen && (
          <div className="dropdown-user">
            <ul>
              {isLoggedIn ? (
                <>
                  <li><Link to="/miperfil">Mi Perfil</Link></li>
                  <li><button onClick={handleLogout}>Cerrar Sesión</button></li>
                </>
              ) : (
                <>
                  <li><Link to="/Register">Registrarse</Link></li>
                  <li><button onClick={() => setIsModalOpen(true)}>Iniciar Sesión</button></li>
                </>
              )}
            </ul>
          </div>
        )}
        <Link to="/wishlist" className="wishlist-icon">
          <img
            className="heart-icon icon"
            src={heart}
            alt="Wishlist Icon"
          />
        </Link>
        <div className='carrito-icon'>
          <Link to="/cart">
            <img
              className="bag-icon icon"
              src={shopping}
              alt="Shopping Icon"
            />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </Link>
        </div>
      </div>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Login onLoginSuccess={handleLoginSuccess} />
        </Modal>
      )}
    </header>
  );
};

export default Header;
