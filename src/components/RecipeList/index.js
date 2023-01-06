import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => (
  <ul>
    {recipes.map(recipe => (
      <li key={recipe.id}>
        <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
      </li>
    ))}
  </ul>
);

export default RecipeList;