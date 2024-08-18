import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/ProductCard.css'; // Asegúrate de que la ruta del CSS sea correcta

const ProductCard = ({ product, categoryName }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/productos/${categoryName}/${product.id}`, { state: { product } });
  };

  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price}</p>
        <button className="add-to-cart-button" onClick={handleClick}>
          Leer más
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
