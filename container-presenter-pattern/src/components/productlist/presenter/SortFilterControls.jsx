import React from "react";
import { Filter, TrendingUp } from "lucide-react";

const SortFilterControls = ({ sortBy, filterCategory, categories, onSort, onFilter }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex flex-wrap gap-4 items-center">
    <div className="flex items-center space-x-2">
      <Filter className="w-5 h-5 text-gray-600" />
      <label>Filter:</label>
      <select
        value={filterCategory}
        onChange={(e) => onFilter(e.target.value)}
        className="border rounded px-2 py-1"
      >
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </div>

    <div className="flex items-center space-x-2">
      <TrendingUp className="w-5 h-5 text-gray-600" />
      <label>Sort:</label>
      <select
        value={sortBy}
        onChange={(e) => onSort(e.target.value)}
        className="border rounded px-2 py-1"
      >
        <option value="name">Name</option>
        <option value="price-low">Price: Low → High</option>
        <option value="price-high">Price: High → Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  </div>
);

export default SortFilterControls;
