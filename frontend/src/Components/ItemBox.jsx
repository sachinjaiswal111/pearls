import React from "react";

const ItemBox = (props) => {
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
        {/* Product Title */}
        <h1 className="text-2xl font-semibold text-gray-800">{props.name}</h1>

        {/* Product Description */}
        <h2 className="text-gray-600 text-sm mt-2">{props.description}</h2>

        {/* Price */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-green-600">{`₹${props.price}`}</span>
          
          {/* Add to Cart Button */}
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 focus:outline-none transition ease-in-out duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemBox;
