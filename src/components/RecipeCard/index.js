import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

function RecipeCard({
  id,
  title,
  image,
  author,
  description,
  ingredients,
  readyInMinutes,
  servings,
}) {
  return (
    <div className="container-RecipeCard">
      <div className="content-RecipeCard">
        <Link to={`/recipes/${id}`}>
          <img src={image} alt={title} />
          <h1>{title}</h1>
          <span>Receita criada por: {author}</span>
          <h3>{ingredients}</h3>
          <h6>Tempo de preparo {readyInMinutes}min</h6>
          <p>{description}</p>
          <p>Essa receita rende {servings} porções</p>
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
