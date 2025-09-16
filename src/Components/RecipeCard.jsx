import React from "react";

const RecipeCard = ({ recipe, onSelect }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition transform" onClick={() => onSelect(recipe)}>
      <img className="w-full h-48 object-cover" src={recipe.strMealThumb} alt={recipe.strMeal} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
        <p className="text-sm text-gray-500">{recipe.strCategory}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
