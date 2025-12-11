import { Routes as ReactRoutes, Route } from "react-router";
import App from "./layouts/App";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";
import Recipe from "./pages/Recipe/Recipe";

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="recipes" element={<Recipes />} />
        <Route path="recipes/:id" element={<Recipe />} />
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
