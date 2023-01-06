import React from "react";

import "./RecipeCard.css";

function RecipeCard({
  title,
  image,
  imageUrl,
  author,
  description,
  ingredients,
  instructions,
  readyInMinutes,
  servings,
  sourceUrl,
}) {
  return (
    <div className="container-RecipeCard">
      <div className="content-RecipeCard">
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <span>Receita criada por: {author}</span>
        <h3>{ingredients}</h3>
        <h6>Tempo de preparo {readyInMinutes}min</h6>
        <p>{description}</p>
        <p>Essa receita rende {servings} porções</p>
      </div>
    </div>
  );
}

export default RecipeCard;
