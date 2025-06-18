import React from 'react';
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import CartBadge from "../home/CartBadge.jsx";
import WishlistBadge from "../home/WishlistBadge.jsx";

const Topbar = () => {
  return (
    <header className="bg-[#bbdd00] px-6 py-2 border-b border-neutral-400/20 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={`/`}>
          <img src="/logo-white.svg" alt="Logo" className="w-[150px]" />
        </Link>

        <div className="flex items-center space-x-6 text-lg font-semibold">
          <div className="relative">
            <Link to="/wishlist" className="flex items-center gap-1 hover:text-red-600">
              <FaHeart size={18} />
              Wishlist
            </Link>
            <WishlistBadge />
          </div>

          <div className="relative">
            <Link to="/cart" className="flex items-center gap-1 hover:text-blue-600">
              <FaShoppingCart size={18} />
              My Cart
            </Link>
            <CartBadge />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
