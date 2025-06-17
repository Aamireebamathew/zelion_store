// HomePage.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState("");

  const fetchProducts = () => {
    fetch('https://sheetdb.io/api/v1/altdjr3560qxq')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "name") return a.name.localeCompare(b.name);
    if (sortType === "price-low-high") return Number(a.price) - Number(b.price);
    if (sortType === "price-high-low") return Number(b.price) - Number(a.price);
    return 0;
  });

  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="font-semibold text-3xl p-2 text-center">Products</h1>

      <div className="text-center mb-4">
        <label className="mr-2 font-medium">Sort By:</label>
        <select
          className="border p-1 rounded"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center text-neutral-500">Loading products...</p>
      ) : (
        <div className="flex flex-wrap -mx-2">
          {sortedProducts.map((product, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
