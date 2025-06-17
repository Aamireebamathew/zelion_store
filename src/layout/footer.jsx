import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaUser, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 p-4 shadow-sm">
      <div className="flex justify-around text-sm text-gray-600">
        <Link to="/" className="flex flex-col items-center hover:text-blue-600">
          <FaHome size={20} />
          Home
        </Link>
        <Link to="/cart" className="flex flex-col items-center hover:text-blue-600">
          <FaShoppingCart size={20} />
          Cart
        </Link>
        <Link to="/contact" className="flex flex-col items-center hover:text-blue-600">
          <FaEnvelope size={20} />
          Contact
        </Link>
        <Link to="/profile" className="flex flex-col items-center hover:text-blue-600">
          <FaUser size={20} />
          Profile
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
