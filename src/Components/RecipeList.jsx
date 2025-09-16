import React from "react";
import RecipeCard from "./RecipeCard.jsx";

const RecipeList = ({ recipes, onSelect }) => {
  if (recipes.length === 0) return <p>No recipes found</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default RecipeList;

