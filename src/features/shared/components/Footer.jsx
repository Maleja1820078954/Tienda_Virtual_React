import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer" id="contacto-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>NovaShop</h2>  
          <p>
            Tu tienda virtual de confianza, donde encuentras innovación, estilo y calidad en un solo lugar.
          </p>
        </div>

        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://wa.me/573001234567" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul className="quick-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>


        <div className="footer-section">
          <h4>Contáctanos</h4>
          <p>Email: contacto@novashop.com</p>
          <p>Tel: +57 300 123 4567</p>
          <p>Bello, Antioquia - Colombia</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} NovaShop. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
