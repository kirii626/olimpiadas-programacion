import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import './styles/OrderTable.css';

export const ProductsTable = () => (
  <div className="orders-table-container">
    <h2>Pedidos</h2>
    <p>Gestiona tu catálogo de productos.</p>
    <div className="search-bar">
            <input type="text" placeholder="Búsqueda..." />
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
        <TableRow>
          <TableCell>#0034</TableCell>
          <TableCell>Olivia Martin</TableCell>
          <TableCell><span className="status delivered">Entregado</span></TableCell>
          <TableCell>27/04/2024</TableCell>
          <TableCell>$18.000</TableCell>
          <TableCell><span className="actions">↔</span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>#0035</TableCell>
          <TableCell>Olivia Martin</TableCell>
          <TableCell><span className="status pending">Pendiente</span></TableCell>
          <TableCell>17/06/2024</TableCell>
          <TableCell>$100.000</TableCell>
          <TableCell><span className="actions">↔</span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>#0036</TableCell>
          <TableCell>Ava Johnson</TableCell>
          <TableCell><span className="status cancelled">Anulado</span></TableCell>
          <TableCell>27/02/2024</TableCell>
          <TableCell>$12.000</TableCell>
          <TableCell><span className="actions">↔</span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>#0037</TableCell>
          <TableCell>Carolina Men</TableCell>
          <TableCell><span className="status delivered">Entregado</span></TableCell>
          <TableCell>14/10/2024</TableCell>
          <TableCell>$27.000</TableCell>
          <TableCell><span className="actions">↔</span></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>#0038</TableCell>
          <TableCell>Ava Johnson</TableCell>
          <TableCell><span className="status pending">Pendiente</span></TableCell>
          <TableCell>11/04/2024</TableCell>
          <TableCell>$30.000</TableCell>
          <TableCell><span className="actions">↔</span></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);
