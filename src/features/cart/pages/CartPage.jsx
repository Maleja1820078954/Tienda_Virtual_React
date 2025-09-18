// src/features/cart/pages/CartPage.jsx
import React from 'react';
import { useCart } from '../../shared/hooks/useCart';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import { Link } from 'react-router-dom';
import './CartPage.css'; 

function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className="cart-page-wrapper">
      <div className="cart-container">
        <h2>Tu Carrito de Compras</h2>
        {cartItems.length === 0 ? (
          <div className="empty-cart-message">
            <p>Tu carrito está vacío. ¡Empieza a llenarlo con tus productos favoritos!</p>
            <Link to="/productos" className="cta-button">Ver productos</Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-list">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <CartSummary />
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;