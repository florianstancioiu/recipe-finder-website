import ServingsSvg from "../../images/icon-servings.svg?react";
import PrepSvg from "../../images/icon-prep-time.svg?react";
import CookSvg from "../../images/icon-cook-time.svg?react";

import Link from "../UI/Link/Link";

import { type Recipe } from "../../pages/Recipes/Recipes";

export type MoreRecipesProps = {
  currentRecipeSlug: string;
  recipes: Recipe[];
};

const MoreRecipes = ({ recipes, currentRecipeSlug }: MoreRecipesProps) => {
  let threeRandomRecipes = recipes
    .filter((recipe) => recipe.slug !== currentRecipeSlug)
    .sort(() => 0.5 - Math.random());

  threeRandomRecipes = threeRandomRecipes.slice(0, 3);

  return (
    <div className="px-4 pb-12 mb-12 border-b border-neutral-300">
      <h2 className="text-3xl font-bold mb-10 text-neutral-900">
        More recipes
      </h2>
      <div>
        {threeRandomRecipes.map(
          ({
            id,
            image,
            title,
            overview,
            servings,
            prepMinutes,
            cookMinutes,
            slug,
          }: Recipe) => {
            return (
              <div
                key={id}
                className="mt-8 rounded-xl bg-neutral-0 p-2 border border-neutral-300"
              >
                <div className="mb-4">
                  <img
                    className="rounded-xl w-full"
                    src={image.large}
                    alt={title}
                  />
                </div>
                <div className="px-2 mb-4">
                  <h3 className="text-neutral-900 font-bold text-xl mb-2.5 font-nunito">
                    {title}
                  </h3>
                  <p className="mb-4">{overview}</p>
                  <div className="text-neutral-900">
                    <p className="inline-block mr-4">
                      <ServingsSvg className="inline-block mr-1.5" />
                      <span>Servings: {servings}</span>
                    </p>
                    <p className="inline-block mr-4">
                      <PrepSvg className="inline-block mr-1.5" />
                      <span>Prep: {prepMinutes}</span>
                    </p>
                    <p className="inline-block">
                      <CookSvg className="inline-block mr-1.5" />
                      <span>Cook: {cookMinutes}</span>
                    </p>
                  </div>
                </div>
                <Link
                  to={`/recipes/${slug}`}
                  className="w-full rounded-4xl block text-center"
                >
                  View Recipe
                </Link>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default MoreRecipes;
