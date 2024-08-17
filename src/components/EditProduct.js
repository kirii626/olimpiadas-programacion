import React, { useState } from 'react';
import './styles/EditProduct.css';

const EditProduct = ({ product, onClose }) => {
    const [id, setId] = useState(product.id);
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [category, setCategory] = useState(product.category);
    const [stock, setStock] = useState(product.stock);
    const [size, setSize] = useState(product.size);
    const [color, setColor] = useState(product.color);

    const handleSave = () => {
        // Aquí puedes manejar la lógica para guardar los cambios
        onClose();
    };

    return (
        <div className="edit-product">
            <h3>Editar Producto</h3>
            <div className="inputGroup">
                <label>ID del producto</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div className="inputGroup">
                <label>Nombre del producto</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="inputGroup">
                <label>Descripción</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className="inputGroup">
                <label>Precio</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="inputGroup">
                <label>Categoría</label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className="inputGroup">
                <label>Stock</label>
                <input type="text" value={stock} onChange={(e) => setStock(e.target.value)} />
            </div>
            <div className="inputGroup">
                <label>Talle</label>
                <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
            </div>
            <div className="inputGroup">
                <label>Color</label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
            <button className="save-button" onClick={handleSave}>Guardar</button>
        </div>
    );
};

export default EditProduct;
