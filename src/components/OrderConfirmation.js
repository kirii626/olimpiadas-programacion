import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './styles/OrderConfirmation.css';

const OrderConfirmation = () => {
  const location = useLocation();
  const { cartItems, formDetails } = location.state || { cartItems: [], formDetails: {} };

  // Calcular el monto total
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="order-confirmation">
      <h1>¡Pedido completado!</h1>
      <p>Gracias por tu compra. Tu pedido está en camino.</p>
      <div className="order-summary">
        <h2>Resumen del pedido</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id} className="order-item">
              <img src={item.imageUrl} alt={item.name} className="order-item-image" />
              <div className="order-item-details">
                <p>{item.name} - {item.quantity} x {item.price}</p>
              </div>
            </li>
          ))}
        </ul>
        <h3>Total: ${totalAmount.toLocaleString()}</h3>
      </div>
      <Link to="/">
        <button>Volver a la página principal</button>
      </Link>
    </div>
  );
};

export default OrderConfirmation;
