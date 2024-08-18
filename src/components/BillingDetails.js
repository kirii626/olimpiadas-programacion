import React, { useState } from 'react';
import './styles/Checkout.css';

const BillingDetails = ({ cartItems, placeOrder }) => {
  const [formDetails, setFormDetails] = useState({
    email: '',
    name: '',
    address: '',
    country: 'Argentina',
    postalCode: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Coloca el pedido utilizando la función `placeOrder`
    placeOrder(cartItems, formDetails);
  };

  const totalAmount = cartItems.reduce((total, item) => total + parseFloat(item.price.replace(/[^0-9.-]+/g,"")) * item.quantity, 0);

  return (
    <div className="billing-details">
      <h1>Detalles del Pago</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Dirección de correo</label>
          <input type="email" id="email" name="email" value={formDetails.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="name">Nombre y Apellido</label>
          <input type="text" id="name" name="name" value={formDetails.name} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Dirección de la Calle</label>
          <input type="text" id="address" name="address" value={formDetails.address} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="postalCode">Código Postal</label>
          <input type="text" id="postalCode" name="postalCode" value={formDetails.postalCode} onChange={handleInputChange} required />
        </div>
        <div className="form-group button-group">
          <button type="button" onClick={() => window.history.back()}>Volver al Carrito</button>
          <button type="submit">Realizar Pedido</button>
        </div>
      </form>
      <div className="order-summary">
        <h2>Tu Pedido</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.quantity} x ${parseFloat(item.price.replace(/[^0-9.-]+/g,"")).toLocaleString()}
            </li>
          ))}
        </ul>
        <h3>Total: ${totalAmount.toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default BillingDetails;
