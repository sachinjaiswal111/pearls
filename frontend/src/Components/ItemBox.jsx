import React from "react";
import { useCart } from "./Cart/CartContext";

const ItemBox = (props) => {
  const { addToCart, cartItems, increaseQuantity, decreaseQuantity } = useCart();

  const existingItem = cartItems.find(item => item.id === props.id);

  return (
    <div className="w-[20%] mx-auto bg-inherit rounded-3xl shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-60">
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-full object-cover rounded-t-3xl"
        />
      </div>

      {/* Product Info Section */}
      <div className="p-6">
        <h1 className="text-2xl font-semibold text-gray-800">{props.name}</h1>
        <h2 className="text-gray-600 text-sm mt-2">{props.description}</h2>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-green-600">{`₹${props.price}`}</span>

          {/* Add to Cart or Quantity Controller */}
          {existingItem ? (
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQuantity(props.id)}
                className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400"
              >
                −
              </button>
              <span className="font-medium">{existingItem.quantity}</span>
              <button
                onClick={() => increaseQuantity(props.id)}
                className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(props)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 focus:outline-none transition ease-in-out duration-300"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemBox;
