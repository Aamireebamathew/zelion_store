// src/Wishlist.jsx
import React, { useContext } from "react";
import { WishlistContext } from "../WishlistContext.jsx";
import { CartContext } from "../CartContext.jsx";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, toggleWishlistItem } = useContext(WishlistContext);
  const { addItemToCart } = useContext(CartContext);

  const moveToCart = (item) => {
    addItemToCart(item);
    toggleWishlistItem(item);
  };

  return (
    <div className="p-4 dark:bg-black min-h-screen transition-colors duration-500">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">❤️ My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {wishlist.map((item) => (
            <div key={item.id} className="p-4 border rounded shadow hover:shadow-lg transition dark:border-gray-700 dark:bg-gray-800">
              <Link to={`/product/${item.id}`}>
                <img src={item.imageURL} alt={item.name} className="w-full h-40 object-cover rounded" />
                <h2 className="mt-2 font-bold text-lg text-gray-800 dark:text-white">{item.name}</h2>
              </Link>
              <p className="text-gray-700 dark:text-gray-300">₹{item.price}</p>

              <div className="mt-3 space-x-3">
                <button
                  onClick={() => moveToCart(item)}
                  className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                  Move to Cart 🛒
                </button>
                <button
                  onClick={() => toggleWishlistItem(item)}
                  className="px-3 py-1 text-red-500 hover:text-red-700 transition"
                >
                  Remove ❌
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
