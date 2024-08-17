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

export const ProductsTable = ({ onAddProduct }) => {
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

  const renderDropdown = (index) => (
    dropdownVisible === index && (
      <div className="dropdown-menu" data-index={index}>
        <button>Editar</button>
        <button>Eliminar</button>
      </div>
    )
  );

  return (
    <div className="orders-table-container">
      <h2>Productos</h2>
      <p>Gestiona tu catálogo de productos.</p>
      
      <div className="search-bar">
        <input type="text" placeholder="Búsqueda..." />
      </div>

      <div>
        <button className="add-product" onClick={onAddProduct}>Añadir producto</button>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Imagen</TableHeaderCell>
            <TableHeaderCell>Producto</TableHeaderCell>
            <TableHeaderCell>Categoria</TableHeaderCell>
            <TableHeaderCell>Stock</TableHeaderCell>
            <TableHeaderCell>Precio</TableHeaderCell>
            <TableHeaderCell>Acción</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {[...Array(20).keys()].map((i) => (
            <TableRow key={i}>
              <TableCell>#003{i + 4}</TableCell>
              <TableCell>Producto {i + 1}</TableCell>
              <TableCell>Categoria {i + 1}</TableCell>
              <TableCell>Stock {i + 1}</TableCell>
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
