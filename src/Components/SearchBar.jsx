import React from "react";

const SearchBar = ({ search, setSearch, onSearch }) => {
  return (
    <div className="flex justify-center mb-6 gap-2">
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded-lg w-1/2 focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
      <button onClick={onSearch} className="bg-orange-500 text-white px-4 rounded-lg hover:bg-orange-600">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
