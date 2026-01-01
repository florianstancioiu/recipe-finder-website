import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useLocation } from "react-router";

import { type Recipe as RecipeType } from "../Recipes/Recipes";

import MainRecipe from "../../components/MainRecipe/MainRecipe";
import Breadcrumbs from "../../components/UI/Breadcrumbs/Breadcrumbs";
import MoreRecipes from "../../components/MoreRecipes/MoreRecipes";
import RecipeNotFound from "../../components/RecipeNotFound/RecipeNotFound";

import { scrollToTop } from "../../utils/functions";

// TODO: Refactor page to use useContext and useReducer
const Recipe = () => {
  const location = useLocation();
  const [recipes, setRecipes] = useState<RecipeType[]>([]);
  const [recipe, setRecipe] = useState<RecipeType | null>(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchRecipesData = async () => {
      try {
        const response = await fetch("../data.json");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const jsonResult = await response.json();
        const currentRecipe = jsonResult.find(
          (recipe: RecipeType) => recipe.slug == slug
        );

        setRecipe(typeof currentRecipe === "undefined" ? null : currentRecipe);
        setRecipes(jsonResult);

        if (currentRecipe) {
          document.title = `${currentRecipe.title} - Recipe Finder`;
        } else {
          document.title = "404 - Recipe not found - Recipe Finder";
        }
      } catch (err) {
        const error = err as Error;

        console.error(error.message);

        document.title = "404 - Recipe not found - Recipe Finder";
      }
    };

    fetchRecipesData();
    scrollToTop();
  }, [location]);

  return (
    <>
      {recipe && (
        <>
          <Breadcrumbs title={recipe.title} />
          <MainRecipe {...recipe} />
          <MoreRecipes recipes={recipes} currentRecipeSlug={recipe.slug} />
        </>
      )}
      {!recipe && <RecipeNotFound />}
    </>
  );
};

export default Recipe;
