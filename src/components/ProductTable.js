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

export const ProductsTable = ({ onAddProduct, onEditProduct }) => {
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

  const handleEditClick = (product) => {
    onEditProduct(product);
  };

  const renderDropdown = (index, product) => (
    dropdownVisible === index && (
      <div className="dropdown-menu" data-index={index}>
        <button onClick={() => handleEditClick(product)}>Editar</button>
        <button>Eliminar</button>
      </div>
    )
  );

  const products = [...Array(20).keys()].map((i) => ({
    id: `#003${i + 4}`,
    name: `Producto ${i + 1}`,
    category: `Categoria ${i + 1}`,
    stock: `Stock ${i + 1}`,
    price: `$18.000`,
    image: 'ruta/a/la/imagen.jpg' // Ruta de la imagen
  }));

  return (
    <div className="orders-table-container">
      <h2>Productos</h2>
      <p>Gestiona tu catálogo de productos.</p>
      
      <div className="search-bar-container">
        <button className="add-product" onClick={onAddProduct}>Añadir producto</button>
      </div>

      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>ID</TableHeaderCell>
            <TableHeaderCell>Producto</TableHeaderCell>
            <TableHeaderCell>Categoria</TableHeaderCell>
            <TableHeaderCell>Stock</TableHeaderCell>
            <TableHeaderCell>Precio</TableHeaderCell>
            <TableHeaderCell>Acción</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {products.map((product, index) => (
            <TableRow key={index}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                <div className="actions" onClick={(event) => toggleDropdown(index, event)}>↔</div>
                {renderDropdown(index, product)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
