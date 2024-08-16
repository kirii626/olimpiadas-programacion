import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/ProductDetail.css'; 
import categories from './categories'; // Asegúrate de que la ruta sea correcta

const ProductDetail = () => {
  const { categoryName, productId } = useParams();

  // Encontrar la categoría y el producto seleccionado
  const category = categories.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());
  const product = category ? category.products.find(prod => prod.id === parseInt(productId)) : null;

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false); // Añadir estado para el corazón

  if (!product) {
    return <p>Producto no disponible</p>;
  }

  const colors = product.colors || [];
  const sizes = product.sizes || [];

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite); // Alternar entre favorito y no favorito
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <button 
          className={`favorite-button ${isFavorite ? 'active' : ''}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? '❤️' : '♡'}
        </button>
        <p>{product.description}</p>
        <div className="product-options">
          <h3>Color</h3>
          <div className="color-options">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`color-button ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundColor: color }}
                onClick={() => setSelectedColor(color)}
              >
                {color === selectedColor ? '✓' : ''}
              </button>
            ))}
          </div>
          <h3>Talles</h3>
          <div className="size-options">
            {sizes.map((size, index) => (
              <button
                key={index}
                className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <p className="product-price">{product.price}</p>
        <button className="add-to-cart-button">Añadir al carrito</button>
      </div>
    </div>
  );
};

export default ProductDetail;
