import React from "react";

const Favorites = ({ favorites, onSelect, onRemove }) => {
  if (favorites.length === 0) return <p>No favorites yet</p>;

  return (
    <div className="favorites my-6">
      <h2 className="text-xl font-bold mb-4">⭐ Your Favorites</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {favorites.map((recipe) => (
          <div key={recipe.idMeal} className="bg-white shadow-md rounded-lg overflow-hidden p-2">
            <img
              className="w-full h-32 object-cover rounded cursor-pointer"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              onClick={() => onSelect(recipe)}
            />
            <p className="text-sm mt-2">{recipe.strMeal}</p>
            <button
              className="bg-red-500 text-white px-2 py-1 mt-2 rounded hover:bg-red-600 text-xs w-full"
              onClick={() => onRemove(recipe.idMeal)}
            >
              ❌ Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
