import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar.jsx";
import RecipeList from "./components/RecipeList.jsx";
import RecipeDetail from "./components/RecipeDetail.jsx";
import Favorites from "./components/Favorites.jsx";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const fetchRecipes = async () => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    const data = await res.json();
    setRecipes(data.meals || []);
  };

  const addToFavorites = (recipe) => {
    if (!favorites.find((fav) => fav.idMeal === recipe.idMeal)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((fav) => fav.idMeal !== id));
  };

  return (
    <div className="App max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">🍲 Recipe Finder</h1>
      <SearchBar search={search} setSearch={setSearch} onSearch={fetchRecipes} />
      <Favorites favorites={favorites} onSelect={setSelectedRecipe} onRemove={removeFromFavorites} />

      {selectedRecipe ? (
        <RecipeDetail
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          onFavorite={addToFavorites}
        />
      ) : (
        <RecipeList recipes={recipes} onSelect={setSelectedRecipe} />
      )}
    </div>
  );
}

export default App;
