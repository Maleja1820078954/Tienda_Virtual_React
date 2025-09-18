// src/features/shared/contexts/CartContext.jsx
import React, { createContext, useState } from 'react';

// Crea el contexto para el carrito
const CartContext = createContext();

// Crea el proveedor del contexto que contendrá el estado y las funciones
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Agrega un producto al carrito
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  // Puedes añadir funciones para eliminar, limpiar o actualizar la cantidad
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export { CartContext }; 
