import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaUser, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkClass = (path) =>
    currentPath === path
      ? "flex flex-col items-center text-blue-600"
      : "flex flex-col items-center text-gray-600 hover:text-blue-600";

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-2 shadow-md z-50">
      <div className="flex justify-around text-xs">
        <Link to="/" className={getLinkClass("/")}>
          <FaHome size={22} />
          <span className="mt-1">Home</span>
        </Link>
        <Link to="/cart" className={getLinkClass("/cart")}>
          <FaShoppingCart size={22} />
          <span className="mt-1">Cart</span>
        </Link>
        <Link to="/contact" className={getLinkClass("/contact")}>
          <FaEnvelope size={22} />
          <span className="mt-1">Contact</span>
        </Link>
        <Link to="/profile" className={getLinkClass("/profile")}>
          <FaUser size={22} />
          <span className="mt-1">Profile</span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;