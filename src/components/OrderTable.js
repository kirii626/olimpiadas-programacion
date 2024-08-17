import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import './styles/Tables.css';

export const OrdersTable = ({ onViewOrderDetails }) => {
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const toggleDropdown = (index, event) => {
    event.stopPropagation();
    setDropdownVisible(dropdownVisible === index ? null : index);

    if (dropdownVisible !== index && event) {
      const rect = event.target.getBoundingClientRect();
      const dropdown = document.querySelector(`.dropdown-menu[data-index='${index}']`);
      if (dropdown) {
        dropdown.style.position = 'fixed';
        dropdown.style.top = `${rect.bottom}px`;
        dropdown.style.left = `${rect.left}px`;
      }
    }
  };

  const handleViewDetailsClick = (order) => {
    onViewOrderDetails(order);
  };

  const renderDropdown = (index, order) => (
    dropdownVisible === index && (
      <div className="dropdown-menu" data-index={index}>
        <button onClick={() => handleViewDetailsClick(order)}>Ver Detalles</button>
        <button>Eliminar</button>
      </div>
    )
  );

  const orders = [...Array(20).keys()].map((i) => ({
    id: `#ORD${i + 100}`,
    date: `2024-08-${i + 1}`,
    customer: `Cliente ${i + 1}`,
    dni: `DNI${i + 100}`,
    street: `Calle ${i + 1}`,
    email: `cliente${i + 1}@correo.com`,
    phone: `123-456-789${i}`,
    amount: `$${(i + 1) * 1000}`,
    status: i % 2 === 0 ? 'Pagado' : 'Pendiente'
  }));

  return (
    <div className="orders-table-container">
      <h2>Órdenes</h2>
      <p>Gestiona tus órdenes aquí.</p>
      
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID Orden</TableHeaderCell>
            <TableHeaderCell>Fecha</TableHeaderCell>
            <TableHeaderCell>Cliente</TableHeaderCell>
            <TableHeaderCell>Monto</TableHeaderCell>
            <TableHeaderCell>Estado</TableHeaderCell>
            <TableHeaderCell>Acción</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>
                <div className="actions" onClick={(event) => toggleDropdown(index, event)}>↔</div>
                {renderDropdown(index, order)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
