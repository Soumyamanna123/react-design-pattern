// src/components/ProductList/container/ProductListContainer.jsx
import React, { useState, useEffect } from "react";
import useProducts from "../hooks/useProducts";
import ProductListPresenter from "../presenter/ProductListPresenter";

const ProductListContainer = () => {
  const { products, loading, error, fetchProducts } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [sortBy, setSortBy] = useState("name");
  const [filterCategory, setFilterCategory] = useState("all");

  // Keep filtered products synced
  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // Sorting Logic
  const handleSort = (type) => {
    setSortBy(type);
    let sorted = [...filteredProducts];

    switch (type) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
    setFilteredProducts(sorted);
  };

  // Filter Logic
  const handleFilter = (category) => {
    setFilterCategory(category);
    const filtered =
      category === "all"
        ? products
        : products.filter((p) => p.category === category);
    setFilteredProducts(filtered);
    handleSort(sortBy);
  };

  // Cart Logic
  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productId) =>
    setCart(cart.filter((item) => item.id !== productId));

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) return handleRemoveFromCart(productId);
    setCart(
      cart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  // Pass data + handlers to presenter
  return (
    <ProductListPresenter
      products={filteredProducts}
      cart={cart}
      cartTotal={cartTotal}
      cartItemCount={cartItemCount}
      loading={loading}
      error={error}
      sortBy={sortBy}
      filterCategory={filterCategory}
      categories={categories}
      onSort={handleSort}
      onFilter={handleFilter}
      onAddToCart={handleAddToCart}
      onRemoveFromCart={handleRemoveFromCart}
      onUpdateQuantity={handleUpdateQuantity}
      onRetry={fetchProducts}
    />
  );
};

export default ProductListContainer;
