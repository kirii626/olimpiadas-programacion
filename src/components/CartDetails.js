// CartDetails.js
import React from 'react';
import { Link } from 'react-router-dom';

const CartDetails = ({ cartItems, updateItemQuantity, removeItem }) => {
  // Función para formatear precios
  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`;
  };

  // Calcular el subtotal para cada producto
  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  // Calcular el total general
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  return (
    <div className="cart-details">
      <h1>Carrito</h1>
      <table>
        <thead>
          <tr>
            <th>Productos</th>
            <th>Precio</th>
            <th>Cantidades</th>
            <th>Subtotales</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.imageUrl} alt={item.name} style={{ width: '50px' }} />
                {item.name}
              </td>
              <td>{formatPrice(item.price)}</td>
              <td>
                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
              </td>
              <td>{formatPrice(calculateSubtotal(item))}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-actions">
        <Link to="/">Seguir Comprando</Link>
        <Link to="/billing">
          <button>Finalizar Compra</button>
        </Link>
        <h2>Total: {formatPrice(calculateTotal())}</h2>
      </div>
    </div>
  );
};

export default CartDetails;
