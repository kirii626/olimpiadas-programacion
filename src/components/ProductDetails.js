import React, { useState } from 'react';
import './styles/ProductDetails.css';
import EditProduct from './EditProduct';

const ProductDetails = ({ product }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    return (
        <div className="product-details">
            {isEditing ? (
                <EditProduct product={product} onClose={() => setIsEditing(false)} />
            ) : (
                <>
                    <div className="imageContainer">
                        <img src={product.image} alt={product.name} className="productImage" />
                    </div>
                    <h3>{product.name}</h3>
                    <p>ID: {product.id}</p>
                    <p>Categoría: {product.category}</p>
                    <p>{product.description}</p>
                    <p>Precio: {product.price}</p>
                    <button className="edit-button" onClick={handleEditClick}>Editar</button>
                </>
            )}
        </div>
    );
};

export default ProductDetails;
