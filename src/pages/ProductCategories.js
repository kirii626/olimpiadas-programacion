import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCategories = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <div className="product-categories">
      <h2 className="category-title">Categorías de Productos</h2>
      <div className="category-list">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => navigate(`/productos/${category.name.toLowerCase()}`)}
          >
            <h3>{category.name}</h3>
            {/* Aquí puedes agregar una imagen representativa de la categoría si lo deseas */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
