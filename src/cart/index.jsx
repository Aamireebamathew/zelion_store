import React, { useContext } from "react";
import { CartContext } from "../CartContext.jsx"; // ✅ Correct path based on your folder

const MyCart = () => {
  const { items, addItemToCart, removeItemFromCart } = useContext(CartContext);

  const totalAmount = items.reduce(
    (total, item) => total + item.quantity * parseFloat(item.price || 0),
    0
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-6">🛒 My Cart</h1>

      {items.length > 0 ? (
        <div className="space-y-4">
          {items.map((product) => (
            <div
              key={product.id}
              className="flex items-center bg-white shadow-md p-4 rounded-lg space-x-4 my-4"
            >
              {/* Product Image */}
              <img
                src={product.imageURL || "https://via.placeholder.com/100"}
                alt={product.name}
                className="w-24 h-24 object-cover rounded"
              />

              {/* Product Info */}
              <div className="flex-1">
                <h2 className="font-semibold text-lg">{product.name}</h2>
                <p className="text-gray-600">Price: ₹{product.price}</p>
                <p className="text-gray-600">Quantity: {product.quantity}</p>
              </div>

              {/* Quantity Controls */}
              <div className="space-x-2">
                <button
                  onClick={() => addItemToCart(product)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  +1
                </button>
                <button
                  onClick={() => removeItemFromCart(product.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  -1
                </button>
              </div>
            </div>
          ))}

          {/* Total Amount */}
          <div className="text-right mt-6 text-xl font-bold text-gray-800">
            Total: ₹{totalAmount.toFixed(2)}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
};

export default MyCart;
