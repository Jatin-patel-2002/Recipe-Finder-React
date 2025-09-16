import React from "react";

const RecipeDetail = ({ recipe, onClose, onFavorite }) => {
  if (!recipe) return null;

  return (
    <div className="recipe-detail max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-red-600">
        Close
      </button>
      <h2 className="text-2xl font-bold mb-4">{recipe.strMeal}</h2>
      <img className="w-full h-64 object-cover rounded-lg mb-4" src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h4 className="font-semibold">Category: <span className="font-normal">{recipe.strCategory}</span></h4>
      <h4 className="font-semibold">Area: <span className="font-normal">{recipe.strArea}</span></h4>
      <p className="mt-4 text-gray-700">{recipe.strInstructions}</p>
      <button onClick={() => onFavorite(recipe)} className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
        ⭐ Save to Favorites
      </button>
    </div>
  );
};

export default RecipeDetail;
