import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import './styles/OrderTable.css';

export const OrdersTable = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);

  const toggleDropdown = (index) => {
    setDropdownVisible(dropdownVisible === index ? null : index);
  };

  const renderDropdown = (index) => {
    return (
      dropdownVisible === index && (
        <div className="dropdown-menu">
          <button >Ver orden</button>
          <button >Cambiar estado</button>
        </div>
      )
    );
  };

  return (
    <div className="orders-table-container">
      <h2>Órdenes</h2>
      <p>Pedidos recientes de tu tienda.</p>

      <div className="search-bar">
        <input type="text" placeholder="Búsqueda..." />
      </div>
      
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Orden</TableHeaderCell>
            <TableHeaderCell>Usuario</TableHeaderCell>
            <TableHeaderCell>Estatus</TableHeaderCell>
            <TableHeaderCell>Fecha</TableHeaderCell>
            <TableHeaderCell>Monto</TableHeaderCell>
            <TableHeaderCell>Acción</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {[...Array(5).keys()].map((i) => (
            <TableRow key={i}>
              <TableCell>#003{i + 4}</TableCell>
              <TableCell>Usuario {i + 1}</TableCell>
              <TableCell><span className={`status ${i % 2 === 0 ? 'delivered' : 'pending'}`}>{i % 2 === 0 ? 'Entregado' : 'Pendiente'}</span></TableCell>
              <TableCell>27/04/2024</TableCell>
              <TableCell>$18.000</TableCell>
              <TableCell>
                <div className="actions" onClick={() => toggleDropdown(i)}>↔</div>
                {renderDropdown(i)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
