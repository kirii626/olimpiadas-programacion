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

export const HistoricalTable = ({ onViewOrderDetails }) => {
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

  const invoices = [...Array(20).keys()].map((i) => ({
    id: `#INV${i + 100}`,
    date: `2024-08-${i + 1}`,
    customer: `Cliente ${i + 1}`,
    dni: `DNI${i + 100}`,
    street: `Calle ${i + 1}`,
    email: `cliente${i + 1}@correo.com`,
    phone: `123-456-789${i}`,
    amount: `$${(i + 1) * 1000}`,
    status: 'Pagado' // Solo facturas pagadas
  }));

  return (
    <div className="orders-table-container"> {/* Usar la misma clase que OrdersTable */}
      <h2>Histórico</h2>
      <p>Aquí puedes ver todas las facturas históricas.</p>
      
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID Factura</TableHeaderCell>
            <TableHeaderCell>Fecha</TableHeaderCell>
            <TableHeaderCell>Cliente</TableHeaderCell>
            <TableHeaderCell>Monto</TableHeaderCell>
            <TableHeaderCell>Estado</TableHeaderCell>
            <TableHeaderCell>Acción</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={index}>
              <TableCell>{invoice.id}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>{invoice.customer}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell>{invoice.status}</TableCell>
              <TableCell>
                <div className="actions" onClick={(event) => toggleDropdown(index, event)}>↔</div>
                {renderDropdown(index, invoice)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
