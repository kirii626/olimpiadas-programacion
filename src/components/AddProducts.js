import React from 'react';
import './styles/AddProducts.css';

const AddProducts = () => {
    return (
        <div className="container">
            <h2 className="header">Productos</h2>
            <p className="subHeader">Gestiona tu catálogo de productos.</p>
            <div className="formContainer">
                <div className="imageContainer">
                    <input type="file" className="imageInput" />
                </div>
                <div className="form">
                    <div className="inputGroup">
                        <label>ID del producto</label>
                        <input type="text" className="input" />
                    </div>
                    <div className="inputGroup">
                        <label>Nombre del producto</label>
                        <input type="text" className="input" />
                    </div>
                    <div className="inputGroup">
                        <label>Descripción</label>
                        <textarea className="textarea" />
                    </div>
                    <div className="inputGroup">
                        <label>Precio:</label>
                        <input type="text" className="input" />
                    </div>
                    <div className="inputGroup">
                        <label>Categoría:</label>
                        <select className="select">
                            <option value="">Selecciona una categoría</option>
                            {/* Opciones de categorías */}
                        </select>
                    </div>
                    <div className="inputGroup">
                        <label>Stock:</label>
                        <input type="text" className="input" />
                    </div>
                    <div className="inputGroup">
                        <label>Talle:</label>
                        <input type="text" className="input" />
                    </div>
                    <div className="inputGroup">
                        <label>Color:</label>
                        <input type="text" className="input" />
                    </div>
                    <button className="button">Añadir Producto</button>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;
