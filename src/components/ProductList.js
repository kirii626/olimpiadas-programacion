import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles/ProductList.css';

const ProductList = ({ categories, addToWishList, wishList }) => {
  const { categoryName } = useParams();

  // Filtrar los productos según la categoría seleccionada
  const category = categories.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase());

  // Si no se encuentra la categoría, mostrar un mensaje de error
  if (!category) {
    return <p>Categoría no encontrada</p>;
  }

  // Función para filtrar productos por subcategoría
  const filterProducts = (subcategory) => {
    switch (subcategory) {
      case 'Novedades':
        return category.products.filter(product => product.novedad);
      case 'Colecciones':
        return category.products.filter(product => product.collection === 'Colecciones');
      case 'Lo mejor':
        return category.products.filter(product => product.lo_mejor);
      default:
        return [];
    }
  };

  // Subcategorías a mostrar
  const subcategories = ['Novedades', 'Colecciones', 'Lo mejor'];

  // Verificar si un producto está en la lista de deseos
  const isInWishList = (product) => {
    return wishList.some(item => item.id === product.id);
  };

  // Función para añadir un producto a la lista de deseos
  const handleWishlistClick = (product) => {
    // Asegurarse de que el nombre de la categoría se incluya en el objeto del producto
    const productWithCategory = { ...product, categoryName: categoryName.toLowerCase() };
    addToWishList(productWithCategory);
  };

  return (
    <div>
      <h1>Productos de {category.name}</h1>

      {subcategories.map(subcategory => {
        const filteredProducts = filterProducts(subcategory);
        return (
          <div key={subcategory} className="subcategory-section">
            <h2>{subcategory}</h2>
            {filteredProducts.length > 0 ? (
              <div className="horizontal-scroll-wrapper">
                <div className="product-grid">
                  {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                      <img src={product.imageUrl} alt={product.name} className="product-image" />
                      
                      {/* Botón del corazón para añadir a la lista de deseos */}
                      <div className="wishlist-icon-container">
                        <button
                          className={`wishlist-button ${isInWishList(product) ? 'in-wishlist' : ''}`}
                          onClick={() => handleWishlistClick(product)}
                        >
                          ♥
                        </button>
                      </div>

                      <div className="product-card-content">
  <h3 className="product-name">{product.name}</h3>
  <p className="product-description">{product.description}</p>
  <span className="product-category">Categoría: {category.name}</span>
  <div className="product-price">${product.price}</div> {/* Agrega el signo de dólar aquí */}
  <Link to={`/productos/${categoryName}/${product.id}`}>
    <button className="add-to-cart">Ver más</button>
  </Link>
</div>

                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p>No hay productos disponibles en {subcategory}.</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
