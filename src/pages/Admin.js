import React, { useState } from 'react';
import Sidebar from '../components/sidebar'; 
import '../components/styles/Admin.css';
import '../components/styles/Main.css';
import { OrdersTable } from '../components/OrderTable';
import { ProductsTable } from '../components/ProductTable';

const Admin = () => {
  const [selectedSection, setSelectedSection] = useState('orders');

  const renderContent = () => {
    switch (selectedSection) {
      case 'orders':
        return <OrdersTable />;
      case 'products':
        return <ProductsTable />;
      default:
        return <p>Selecciona una sección</p>;
    }
  };

  return (
    <div className="admin-container">
      <Sidebar onSectionSelect={setSelectedSection} />
      <div className="content-container">
        <div className="top-bar">
          <h2>Administrador</h2>
        </div>
        <div className="main-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Admin;
