import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles/WishList.css';

const Wishlist = ({ wishlistItems = [], addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (typeof addToCart === 'function') {
      addToCart(product); // Asegúrate de que esta función esté disponible
      navigate('/cart');  // Redirigir al carrito después de agregar
    } else {
      console.error("addToCart is not a function");
    }
  };

  return (
    <div className="wishlist">
      <h1>Favoritos</h1>
      {wishlistItems.length > 0 ? (
        wishlistItems.map(item => (
          <div key={item.id} className="wishlist-item">
            <img src={item.imageUrl} alt={item.name} />
            <div className="wishlist-item-details">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <div className="wishlist-item-price">{item.price}</div>
              <div className="wishlist-item-buttons">
                <Link to={`/productos/${item.categoryName}/${item.id}`}>
                  <button className="wishlist-item-button">Ver más</button>
                </Link>
                <button
                  className="wishlist-item-button carrito-button"
                  onClick={() => handleAddToCart(item)}
                >
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No hay productos en tu lista de deseos.</p>
      )}
    </div>
  );
};

export default Wishlist;
