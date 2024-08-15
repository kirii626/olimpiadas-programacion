// src/components/Register.js
import React from 'react';
import './styles/Login.css'; 

const Register = () => {
  return (
    <div className="register-form">
      <h2>Iniciar Sesion</h2>
      <form>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div>
          <button type="submit">Registrarse</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
