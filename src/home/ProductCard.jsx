import React, { useContext, useState } from 'react';
import { CartContext } from "../CartContext.jsx";
import { WishlistContext } from "../WishlistContext.jsx";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import toast from 'react-hot-toast';
import { Tooltip } from 'react-tooltip';

const ProductCard = ({ id, name, price, imageURL, description }) => {
  const { addItemToCart } = useContext(CartContext);
  const { toggleWishlistItem, isInWishlist } = useContext(WishlistContext);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    addItemToCart({ id, name, price, imageURL, description });
    toast.success(`${name} added to cart`);
  };

  const handleToggleWishlist = () => {
    toggleWishlistItem({ id, name, price, imageURL, description });
    toast.success(
      isInWishlist(id)
        ? `${name} removed from wishlist`
        : `${name} added to wishlist`
    );
  };

  return (
    <div className="relative p-4 border rounded shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 bg-white dark:bg-gray-800 dark:border-gray-700">
      
      {/* Wishlist Icon with Tooltip */}
      <div
        className="absolute top-2 right-2 cursor-pointer z-10"
        data-tooltip-id={`tooltip-${id}`}
        data-tooltip-content={isInWishlist(id) ? "Remove from Wishlist" : "Add to Wishlist"}
        onClick={handleToggleWishlist}
      >
        {isInWishlist(id) ? (
          <FaHeart size={20} className="text-red-500" />
        ) : (
          <FaRegHeart size={20} className="text-gray-400 hover:text-red-500 transition-colors" />
        )}
        <Tooltip id={`tooltip-${id}`} />
      </div>

      {/* Product Image with Modal */}
      <img
        src={imageURL || "https://placehold.co/300x200"}
        alt={name}
        loading="lazy"
        className="w-full h-48 object-cover cursor-pointer rounded"
        onClick={() => setShowModal(true)}
      />

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <img
            src={imageURL}
            alt="Zoom"
            className="max-h-[80vh] max-w-[90vw] rounded shadow-lg transition-transform scale-100 hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Product Info */}
      <h3 className="text-xl mt-2 font-bold text-gray-800 dark:text-white">{name}</h3>
      <p className="text-gray-600 dark:text-gray-300">₹{price}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{description}</p>

      <button
        className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700 transition-colors"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
