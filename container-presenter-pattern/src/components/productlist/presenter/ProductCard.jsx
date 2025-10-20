import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  const { name, category, price, rating, stock } = product;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between text-xs mb-2">
        <span className="text-blue-600 bg-blue-100 px-2 py-1 rounded">{category}</span>
        {stock < 10 && (
          <span className="text-red-600 bg-red-100 px-2 py-1 rounded">Low Stock</span>
        )}
      </div>
      <h3 className="font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mb-2">⭐ {rating}</p>
      <div className="flex justify-between items-center">
        <span className="font-bold text-gray-800">${price}</span>
        <button
          onClick={() => onAddToCart(product)}
          disabled={stock === 0}
          className={`px-3 py-1 rounded text-white ${
            stock === 0 ? "bg-gray-300" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {stock === 0 ? "Out" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
