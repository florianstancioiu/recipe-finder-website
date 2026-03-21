import { useState, useEffect } from "react";
import ExploreRecipes from "../../components/ExploreRecipes/ExploreRecipes";
import RecipesFilters, {
  type AllFilters,
} from "../../components/RecipesFilters/RecipesFilters";
import RecipeItem from "../../components/RecipeItem/RecipeItem";
import { fullUrl } from "../../utils/functions";

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

  const [_recipes, setRecipes] = useState<Recipe[]>([]);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
  const [filters, setFilters] = useState<AllFilters>({
    prepOptions: [
      { id: 1, value: 0, title: "0 minutes", isActive: false },
      { id: 2, value: 5, title: "5 minutes", isActive: false },
      { id: 3, value: 10, title: "10 minutes", isActive: false },
    ],
    cookOptions: [
      { id: 1, value: 0, title: "0 minutes", isActive: false },
      { id: 2, value: 5, title: "5 minutes", isActive: false },
      { id: 3, value: 10, title: "10 minutes", isActive: false },
      { id: 4, value: 15, title: "15 minutes", isActive: false },
      { id: 5, value: 20, title: "20 minutes", isActive: false },
    ],
    searchKeyword: "",
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const url = fullUrl("data.json");
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        setRecipes(result);
        setFilteredRecipes(result);
      } catch (err) {
        const error = err as Error;

        console.error(error.message);
      }
    };

    fetchRecipes();
  }, []);

  useEffect(() => {
    const updateFilteredRecipes = () => {};
  }, [JSON.stringify(filters)]);

  const handleFiltersChange = (filters: AllFilters) => {
    setFilters(filters);
  };

  return (
    <>
      <ExploreRecipes />
      <RecipesFilters filters={filters} onChange={handleFiltersChange} />

      <main className="px-4 mb-10 md:px-8 xl:max-w-dsktp-md xl:mx-auto xl:px-0 xl:grid xl:grid-cols-3 xl:gap-8 xl:pt-6">
        {filteredRecipes.map((recipe) => (
          <RecipeItem key={recipe.id} {...recipe} />
        ))}
      </main>
    </>
  );
};

export default Recipes;
