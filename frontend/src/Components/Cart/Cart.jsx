import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="justify-between p-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex justify-center flex-wrap gap-6">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="w-76 h-97 bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-35 object-cover rounded-xl mb-4"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                <p className="mt-2 text-gray-700">Qty: {item.quantity}</p>
                <p className="text-green-600 font-bold">₹{item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
