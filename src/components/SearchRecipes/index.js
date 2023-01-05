import React, { useState } from "react";
import axios from "axios";
import RecipeCard from "../RecipeCard";

import './SearchRecipes.css'


function SearchRecipes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = () => {
    const apiKey = "9da39c2d195046249239c288c7f050d4";
    const searchUrl = `https://api.spoonacular.com/recipes/search?query=${searchTerm}&apiKey=${apiKey}`;

    axios
      .get(searchUrl)
      .then((response) => {
        setRecipes(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return(

      <div className="container">
    <input 
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}

    />
    <button onClick={searchRecipes}>Pesquisar</button>
    {recipes.map(recipe => (
        <RecipeCard 
        key={recipe.id}
        imageUrl={recipe.imageUrl}
        title={recipe.title}
        author={recipe.author}
        ingredients={recipe.ingredients}
        readyInMinutes={recipe.readyInMinutes}
        instructions={recipe.instructions}
        servings={recipe.servings}
        
        />
    ))}
  </div>
)
}

export default SearchRecipes;
