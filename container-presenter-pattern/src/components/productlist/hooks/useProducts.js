// src/components/ProductList/hooks/useProducts.js
import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((res) => setTimeout(res, 800)); // simulate delay
      const mockData = [
        { id: 1, name: "Laptop Pro", category: "electronics", price: 1299, rating: 4.5, stock: 15 },
        { id: 2, name: "Desk Chair", category: "furniture", price: 199, rating: 4.7, stock: 8 },
        { id: 3, name: "Webcam HD", category: "electronics", price: 79, rating: 4.0, stock: 25 },
        { id: 4, name: "Standing Desk", category: "furniture", price: 599, rating: 4.6, stock: 5 },
      ];
      setProducts(mockData);
    } catch {
      setError("Failed to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error, fetchProducts };
};

export default useProducts;
