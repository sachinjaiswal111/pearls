import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const increaseQuantity = (itemId) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  const decreaseQuantity = (itemId) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0) // auto-remove if quantity hits 0
    );
  };
  
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, totalItems, }}>
          {children}
        </CartContext.Provider>
      );
};
