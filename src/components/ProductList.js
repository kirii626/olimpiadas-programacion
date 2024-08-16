import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles/ProductList.css';

const ProductList = ({ categories }) => {
  const { categoryName } = useParams();

  // Filtrar los productos según la categoría seleccionada
  const category = categories.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());
  const products = category ? category.products : [];

  return (
    <div>
      <h1>Productos</h1>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link to={`/productos/${categoryName}/${product.id}`}>
              <button>Leer mas</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
