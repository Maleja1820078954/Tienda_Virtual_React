import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../shared/hooks/useCart';
import { useSearch } from '../../shared/hooks/useSearch';
import './Header.css';

function Header() {
  // 1. Obtiene los items del carrito usando el hook
  const { cartItems } = useCart();

  // 2. Calcula la cantidad total de productos
  // Recorre el array cartItems y suma la propiedad 'quantity' de cada item
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const { searchTerm, setSearchTerm } = useSearch();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <header className="header-container">
      <h1 className="logo">NovaShop</h1>

      {/* Barra de búsqueda */}
      <div className="nav-container">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="nav-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="nav-button">🔍</button>
      </div>

      {/* Menú de navegación */}
      <nav className="header">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          
          {/* 3. El ícono del carrito ahora es un Link y muestra la cantidad */}
          <li>
            <Link to="/cart"><span className="cart-icon">🛒 <span className="cart-counter">({totalItems})</span></span></Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;