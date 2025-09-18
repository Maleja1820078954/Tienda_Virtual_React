import React from 'react';
import { useCart } from '../../shared/hooks/useCart';

function CartItem({ item }) {
  const { removeFromCart } = useCart();
  
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} className="cart-item-image" />
      <div className="item-details">
        <h4>{item.title}</h4>
        <p className="item-price">${item.price}</p>
        <p className="item-quantity">Cantidad: {item.quantity}</p>
      </div>
      <button 
        className="remove-button" 
        onClick={() => removeFromCart(item.id)}
      >
        &#x2715;
      </button>
    </div>
  );
}

export default CartItem;