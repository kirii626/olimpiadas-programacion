import React from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link
import './styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>PRODUCTOS</h4>
          <ul>
            <li><Link to="/productos/calzados">Calzados</Link></li>
            <li><Link to="/productos/zapatillas">Zapatillas</Link></li>
            <li><Link to="/productos/ropa">Ropa</Link></li>
            <li><Link to="/productos/accesorios">Accesorios</Link></li>
            <li><Link to="/productos/botines">Botines</Link></li>
            <li><Link to="/productos/conjuntos">Conjuntos</Link></li>
            <li><Link to="/productos/novedades">Novedades</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>DEPORTES</h4>
          <ul>
            <li><Link to="/deportes/seleccion-argentina">Selección Argentina</Link></li>
            <li><Link to="/deportes/boca-junior">Boca Junior</Link></li>
            <li><Link to="/deportes/river-plate">River Plate</Link></li>
            <li><Link to="/deportes/futbol">Fútbol</Link></li>
            <li><Link to="/deportes/basquet">Básquet</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>ASISTENCIA</h4>
          <ul>
            <li><Link to="/asistencia/pagos">Pagos</Link></li>
            <li><Link to="/asistencia/envios">Envíos</Link></li>
            <li><Link to="/asistencia/devoluciones">Devoluciones</Link></li>
            <li><Link to="/Admin">Administrador</Link></li> {/* Enlace a la página Admin */}
          </ul>
        </div>
        <div className="footer-column">
          <h4>INFORMACIÓN DE LA EMPRESA</h4>
          <ul>
            <li><Link to="/informacion/acerca-de-la-tienda">Acerca de la tienda</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>SÍGUENOS</h4>
          <ul className="social-media">
            <li><a href="https://www.instagram.com/ecae_24/"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="https://www.youtube.com/watch?v=1Jkx79hz9jU"><i className="fab fa-tiktok"></i> TikTok</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} GainsHub Argentina. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
