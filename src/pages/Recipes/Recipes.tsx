import { useState, useEffect } from "react";
import ExploreRecipes from "../../components/ExploreRecipes/ExploreRecipes";
import RecipesFilters from "../../components/RecipesFilters/RecipesFilters";
import RecipeItem from "../../components/RecipeItem/RecipeItem";

import usePageTitle from "../../hooks/usePageTitle";

export type Recipe = {
  id: number;
  title: string;
  slug: string;
  image: {
    large: string;
    small: string;
  };
  overview: string;
  servings: number;
  prepMinutes: number;
  cookMinutes: number;
  ingredients: string[];
  instructions: string[];
};

const Recipes = () => {
  usePageTitle("Recipes");

  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        setRecipes(result);
      } catch (err) {
        const error = err as Error;

        console.error(error.message);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <>
      <ExploreRecipes />
      <RecipesFilters />

      <main className="px-4 mb-10 md:px-8 xl:max-w-dsktp-md xl:mx-auto xl:px-0 xl:grid xl:grid-cols-3 xl:gap-8 xl:pt-6">
        {recipes.map((recipe) => (
          <RecipeItem key={recipe.id} {...recipe} />
        ))}
      </main>
    </>
  );
};

export default Recipes;
