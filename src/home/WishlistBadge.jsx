import React, { useContext } from "react";
import { WishlistContext } from "../WishlistContext.jsx";

const WishlistBadge = () => {
  const { wishlist } = useContext(WishlistContext);
  const totalCount = wishlist.length;

  return totalCount > 0 ? (
    <span className="absolute -top-1 -right-2 bg-pink-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full z-50">
      {totalCount}
    </span>
  ) : null;
};

export default WishlistBadge;
