import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Account.css';

const Account = ({ orders = [] }) => {  // Aseguramos que orders tenga un valor por defecto
    const [activeTab, setActiveTab] = useState('account');
    const [userInfo, setUserInfo] = useState({
        name: 'John Stuartu',
        lastName: 'Duelino',
        email: 'john@example.com',
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({ ...userInfo, [name]: value });
    };

    const handleSave = () => {
        alert('Información guardada correctamente.');
    };

    const handleModifyOrder = (orderId) => {
        navigate(`/edit-order/${orderId}`);
    };

    return (
        <div className="account-container">
            <div className="account-sidebar">
                <h3>Bienvenido</h3>
                <h2>{userInfo.name} {userInfo.lastName}</h2>
                <p>{userInfo.email}</p>
            </div>
            <div className="account-content">
                <div className="tabs">
                    <button 
                        className={activeTab === 'account' ? 'active' : ''} 
                        onClick={() => setActiveTab('account')}
                    >
                        Cuenta
                    </button>
                    <button 
                        className={activeTab === 'orders' ? 'active' : ''} 
                        onClick={() => setActiveTab('orders')}
                    >
                        Pedidos
                    </button>
                </div>
                {activeTab === 'account' && (
                    <div className="account-details">
                        <div>
                            <label>Nombre:</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={userInfo.name} 
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div>
                            <label>Apellido:</label>
                            <input 
                                type="text" 
                                name="lastName" 
                                value={userInfo.lastName} 
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div>
                            <label>Correo electrónico:</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={userInfo.email} 
                                readOnly 
                            />
                        </div>
                        <button onClick={handleSave}>Modificar</button>
                    </div>
                )}
                {activeTab === 'orders' && (
                    <div className="orders-details">
                        {orders.length === 0 ? (
                            <p>No tienes pedidos registrados.</p>
                        ) : (
                            orders.map(order => (
                                <div className="order" key={order.id}>
                                    <div className="order-info">
                                        <h4>Artículos</h4>
                                        <p>{order.date}</p>
                                        {order.items.map(item => (
                                            <p key={item.id}>{item.name} - {item.quantity} x ${item.price}</p>
                                        ))}
                                        <div className="order-status">
                                            <span className={order.status === 'Entregado' ? 'status-delivered' : 'status-pending'}>
                                                {order.status}
                                            </span>
                                            <button onClick={() => handleModifyOrder(order.id)}>Modificar</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Account;
