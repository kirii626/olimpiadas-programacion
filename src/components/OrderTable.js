import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import './styles/Tables.css';

export const OrdersTable = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [statusDropdownVisible, setStatusDropdownVisible] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setDropdownVisible(null);
      setStatusDropdownVisible(null);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDropdown = (index, event) => {
    event.stopPropagation();
    setDropdownVisible(dropdownVisible === index ? null : index);

    if (dropdownVisible !== index && event) {
      const rect = event.target.getBoundingClientRect();
      const dropdown = document.querySelector(`.dropdown-menu[data-index='${index}']`);
      if (dropdown) {
        dropdown.style.top = `${rect.bottom + window.scrollY}px`; // Ajusta la posición con el scroll
        dropdown.style.left = `${rect.left}px`;
      }
    }
  };

  const toggleStatusDropdown = (index, event) => {
    event.stopPropagation();
    setStatusDropdownVisible(statusDropdownVisible === index ? null : index);

    if (statusDropdownVisible !== index && event) {
      const rect = event.target.getBoundingClientRect();
      const statusDropdown = document.querySelector(`.status-dropdown[data-index='${index}']`);
      if (statusDropdown) {
        statusDropdown.style.top = `${rect.bottom + window.scrollY}px`; // Ajusta la posición con el scroll
        statusDropdown.style.left = `${rect.left}px`;
      }
    }
  };

  const renderStatusDropdown = (index) => (
    statusDropdownVisible === index && (
      <div className="status-dropdown" data-index={index}>
        <button>Activo</button>
        <button>Entregado</button>
        <button>Anular</button>
      </div>
    )
  );

  const renderDropdown = (index) => (
    dropdownVisible === index && (
      <div className="dropdown-menu" data-index={index}>
        <button>Ver orden</button>
        <button onClick={(event) => toggleStatusDropdown(index, event)}>Cambiar estado</button>
        {renderStatusDropdown(index)}
      </div>
    )
  );

  return (
    <div className="orders-table-container">
      <h2>Órdenes</h2>
      <p>Ventas recientes de tu tienda.</p>

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
          {[...Array(20).keys()].map((i) => (
            <TableRow key={i}>
              <TableCell>#003{i + 4}</TableCell>
              <TableCell>Usuario {i + 1}</TableCell>
              <TableCell><span className={`status ${i % 2 === 0 ? 'delivered' : 'pending'}`}>{i % 2 === 0 ? 'Entregado' : 'Pendiente'}</span></TableCell>
              <TableCell>27/04/2024</TableCell>
              <TableCell>$18.000</TableCell>
              <TableCell>
                <div className="actions" onClick={(event) => toggleDropdown(i, event)}>↔</div>
                {renderDropdown(i)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
