import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const RecipeDetail = ({ match }) => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${match.params.id}/information`
      );
      setRecipe(response.data);
    };
    getRecipe();
  }, [match.params.id]);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} />
      <h2>Ingredientes</h2>
      <ul>
        {recipe.extendedIngredients &&
          recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
      </ul>
      <h2>Instruções</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetail;


        
//TODO:

// <Route
//   path="/recipes/:id"
//   render={props => <RecipeDetail {...props} recipeId={props.match.params.id} />}
// />

// const getRecipe = async recipeId => {
//     const response = await fetch(
//       `https://api.spoonacular.com/recipes/${recipeId}/information`
//     );
//     const data = await response.json();
//     return data;
//   };
  