import { createBrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import RecipeDetail from "./components/RecipeDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/recipes/:id/*",
    element: (
      <Routes>
        <Route component={RecipeDetail} />
      </Routes>
    ),
  },
 
]);

export { router };




// {
//   path: '/recipes/:id/*',
//   element: (
//     <Routes>
//       <Route 
//         // eslint-disable-next-line no-undef
//         render={ props =>  <RecipeDetail { ...props } recipe={recipe}/>}
//       />
//     </Routes>
//   ) 
// }

// {
//   <Route
// path="/recipes/:id"
// render={props => <RecipeDetail {...props} recipeId={props.match.params.id} />}
// />
// },