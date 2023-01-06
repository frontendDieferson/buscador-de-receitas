import React, { useState } from "react";
import axios from "axios";
import RecipeCard from "../RecipeCard";
import logoBuscador from '../../assets/buscadorLogo.png'
import './SearchRecipes.css'


function SearchRecipes() {
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = () => {
    const apiKey = "9da39c2d195046249239c288c7f050d4";
    const searchUrl = `https://api.spoonacular.com/recipes/search?query=${searchTerm}&language=pt&apiKey=${apiKey}`;

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
        <header className="container-header">
         <img src={logoBuscador} alt='Buscador de Receitas Logo' />
          <h2>Pesquisar receitas</h2>
        </header>
    <input 
        type='text'
        placeholder="Pesquisa uma receita"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}

    />
    <button onClick={searchRecipes}>Pesquisar</button>
    {recipes.map(recipe => (
        <RecipeCard 
        key={recipe.id}
        image={recipe.image}
        title={recipe.title}
        author={recipe.author}
        ingredients={recipe.ingredients}
        readyInMinutes={recipe.readyInMinutes}
        description={recipe.instructions}
        servings={recipe.servings}
        
        />
    ))}
  </div>
)
}

export default SearchRecipes;
