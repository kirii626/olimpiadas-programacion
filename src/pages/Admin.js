import React, { useState } from 'react';
import '../components/styles/Admin.css';
import '../components/styles/Main.css';
import Sidebar from '../components/sidebar'; 
import { OrdersTable } from '../components/OrderTable';
import { ProductsTable } from '../components/ProductTable';
import AddProducts from '../components/AddProducts';
import ProductDetails from '../components/ProductDetails';
import EditProduct from '../components/EditProduct';
import { HistoricalTable } from '../components/HistoricalTable';
import OrderDetails from '../components/OrderDetails'; // Importar el nuevo componente

const Admin = () => {
  const [selectedSection, setSelectedSection] = useState('orders');
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [product, setProduct] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
    setShowAddProduct(false);
    setProduct(null);
    setEditingProduct(null);
    setSelectedOrder(null);
  };

  const handleAddProduct = () => {
    setShowAddProduct(true);
    setProduct({
      id: '001',
      name: 'Camiseta de entrenamiento',
      description: 'Camiseta de algodón y transpirable',
      price: '$30.000',
      category: 'Ropa deportiva',
      stock: 100,
      size: 'M',
      color: 'Negro',
      image: 'ruta/a/la/imagen.jpg' // Ruta de la imagen
    });
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleViewOrderDetails = (order) => {
    setSelectedOrder({
      ...order,
      products: [
        {
          id: 'P001',
          quantity: 2,
          unitPrice: '$15.000',
          color: 'Rojo',
          size: 'M'
        },
        {
          id: 'P002',
          quantity: 1,
          unitPrice: '$20.000',
          color: 'Azul',
          size: 'L'
        }
      ]
    });
  };

  const renderContent = () => {
    if (showAddProduct) {
      return (
        <>
          <AddProducts />
          {product && <ProductDetails product={product} />}
        </>
      );
    }
    if (editingProduct) {
      return <EditProduct product={editingProduct} onClose={() => setEditingProduct(null)} />;
    }
    if (selectedOrder) {
      return <OrderDetails order={selectedOrder} onClose={() => setSelectedOrder(null)} />;
    }
    switch (selectedSection) {
      case 'orders':
        return <OrdersTable onViewOrderDetails={handleViewOrderDetails} />;
      case 'products':
        return <ProductsTable onAddProduct={handleAddProduct} onEditProduct={handleEditProduct} />;
      case 'invoices':
        return <HistoricalTable onViewOrderDetails={handleViewOrderDetails} />;
      default:
        return <p>Selecciona una sección</p>;
    }
  };

  return (
    <div className="admin-container">
      <Sidebar onSectionSelect={handleSectionSelect} />
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
