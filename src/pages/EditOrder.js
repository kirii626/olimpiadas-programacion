// src/pages/EditOrder.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import categories from '../components/categories';

const EditOrder = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Simulamos encontrar el producto
  const product = categories.flatMap(category => category.products).find(prod => prod.id === parseInt(productId));

  const [selectedColor, setSelectedColor] = useState(product ? product.colors[0] : '');
  const [selectedSize, setSelectedSize] = useState(product ? product.sizes[0] : '');

  const handleSave = () => {
    // Aquí implementarías la lógica para guardar los cambios
    alert('Producto actualizado.');
    navigate('/miperfil');  // Vuelve a la página de perfil tras guardar
  };

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div>
      <h1>Modificar Pedido</h1>
      <div>
        <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '200px' }} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>

        <div>
          <label>Color:</label>
          {product.colors.map(color => (
            <button 
              key={color} 
              style={{ backgroundColor: color }} 
              onClick={() => setSelectedColor(color)}
              className={selectedColor === color ? 'selected' : ''}
            >
              {color}
            </button>
          ))}
        </div>

        <div>
          <label>Talla:</label>
          {product.sizes.map(size => (
            <button 
              key={size} 
              onClick={() => setSelectedSize(size)}
              className={selectedSize === size ? 'selected' : ''}
            >
              {size}
            </button>
          ))}
        </div>

        <button onClick={handleSave}>Guardar Cambios</button>
      </div>
    </div>
  );
};

export default EditOrder;
