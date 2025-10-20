import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

const CartSummary = ({ itemCount, total, cart, onRemoveFromCart, onUpdateQuantity }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-500 text-white px-4 py-2 rounded flex items-center space-x-2"
      >
        <ShoppingCart className="w-5 h-5" />
        <span>Cart ({itemCount})</span>
        <span>${total.toFixed(2)}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded shadow-lg p-4 z-20">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center">Empty cart</p>
          ) : (
            <>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                    <button onClick={() => onRemoveFromCart(item.id)} className="text-red-500">
                      ×
                    </button>
                  </div>
                </div>
              ))}
              <div className="font-bold text-right mt-3">Total: ${total.toFixed(2)}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CartSummary;
