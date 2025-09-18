import React from 'react';
import { useCart } from '../../shared/hooks/useCart';
import { Link } from 'react-router-dom';

function CartSummary() {
  const { cartItems, clearCart } = useCart();
  
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-summary">
      <h3>Resumen de la Compra</h3>
      <div className="summary-details">
        <p>Total de Productos: <span>{cartItems.length}</span></p>
        <p>Total a Pagar: <span>${total.toFixed(2)}</span></p>
      </div>
      <div className="summary-actions">
        <button onClick={clearCart} className="clear-cart-button">
          Limpiar Carrito
        </button>
        <button className="checkout-button">
          Proceder al Pago
        </button>
        <Link to="/productos" className="cta-button">Ver productos</Link>
      </div>
    </div>
  );
}

export default CartSummary;