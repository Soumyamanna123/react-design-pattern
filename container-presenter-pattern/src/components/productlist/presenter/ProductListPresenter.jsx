// src/components/ProductList/presenter/ProductListPresenter.jsx
import React from "react";
import { Package, AlertCircle } from "lucide-react";
import ProductCard from "./ProductCard";
import SortFilterControls from "./SortFilterControls";
import CartSummary from "./CartSummary";

const ProductListPresenter = ({
  products,
  cart,
  cartTotal,
  cartItemCount,
  loading,
  error,
  sortBy,
  filterCategory,
  categories,
  onSort,
  onFilter,
  onAddToCart,
  onRemoveFromCart,
  onUpdateQuantity,
  onRetry,
}) => {
  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Package className="w-10 h-10 text-blue-500 animate-pulse" />
        <p className="ml-2">Loading products...</p>
      </div>
    );

  if (error)
    return (
      <div className="text-center mt-10">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
        <p>{error}</p>
        <button
          onClick={onRetry}
          className="mt-3 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Retry
        </button>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
            <Package className="text-blue-500" /> ProductStore
          </h1>
          <CartSummary
            cart={cart}
            total={cartTotal}
            itemCount={cartItemCount}
            onRemoveFromCart={onRemoveFromCart}
            onUpdateQuantity={onUpdateQuantity}
          />
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <SortFilterControls
          sortBy={sortBy}
          filterCategory={filterCategory}
          categories={categories}
          onSort={onSort}
          onFilter={onFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>

        {products.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No products found</p>
        )}
      </main>
    </div>
  );
};

export default ProductListPresenter;
