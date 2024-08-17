// src/pages/Register.js
import React, { useState } from 'react';
import '../components/styles/Main.css';
import '../components/styles/Register.css';
import logoGoogle from '../assets/images/RedesSociales/el-logo-g-de-google.png'
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos del formulario
    // Por ejemplo, enviar los datos a una API para crear el usuario
  };

  return (
    <>

      <div className="register-container">
        <div className="register-form">
          <h2>Registrarse</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="confirm-password">Confirmar Contraseña:</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <button type="submit">Registrarse</button>
            </div>
          </form>
        </div>
        <div className="social-login">
          <h2><strong>Iniciar Sesión con Redes Sociales</strong></h2>
          <div className="social-buttons">
            <button className="social-btn" data-app="Google">
              <img src={logoGoogle} alt="Google" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
