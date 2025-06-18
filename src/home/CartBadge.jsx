import React, { useContext } from "react";
import { CartContext } from "../CartContext.jsx";

const CartBadge = () => {
  const { items } = useContext(CartContext);
  const totalCount = items.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return totalCount > 0 ? (
    <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full z-50">
      {totalCount}
    </span>
  ) : null;
};

export default CartBadge;
