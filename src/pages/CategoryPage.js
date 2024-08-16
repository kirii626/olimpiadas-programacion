import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import '../components/styles/CategoryPage.css'; // Asegúrate de que la ruta del CSS sea correcta

const CategoryPage = ({ categories }) => {
  const { categoryName } = useParams();

  const category = categories.find(
    cat => cat.name.toLowerCase() === categoryName.toLowerCase()
  );

  if (!category) {
    return <p>Categoría no encontrada.</p>;
  }

  return (
    <div className="category-page">
      <div className="category-header">
        <h2>{category.name}</h2>
        <p>Explora nuestra selección de {category.name.toLowerCase()}.</p>
      </div>
      <div className="category-products">
        {category.products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
