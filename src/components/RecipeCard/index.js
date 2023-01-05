import React from "react";

function RecipeCard({ id, title, image, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} width={200} height={200} />
      <p>{description}</p>
    </div>
  );
}

export default RecipeCard;
