import React, { useContext, useState } from 'react';
import { CartContext } from "../CartContext.jsx";
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id, name, price, imageURL, description }) => {
  const { addItemToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-4 border rounded shadow hover:shadow-lg transition">
      <img
        src={imageURL || 'https://placehold.co/300x200'}
        alt={name}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={() => setShowModal(true)}
      />

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <img
            src={imageURL}
            alt="zoom"
            className="max-h-[80vh] max-w-[90vw] rounded shadow-lg"
          />
        </div>
      )}

      <h3 className="text-xl mt-2 font-bold">{name}</h3>
      <p className="text-gray-600">₹{price}</p>
      <p className="text-sm text-gray-500 mt-1">{description}</p> {/* ✅ show description */}

      <button
        className="bg-blue-600 text-white px-4 py-2 mt-2 rounded hover:bg-blue-700"
        onClick={() => addItemToCart({ id, name, price, imageURL, description })}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
