import ServingsSvg from "../../images/icon-servings.svg?react";
import PrepSvg from "../../images/icon-prep-time.svg?react";
import CookSvg from "../../images/icon-cook-time.svg?react";

import Link from "../UI/Link/Link";
import { type Recipe } from "../../pages/Recipes/Recipes";

export type RecipeItemProps = Omit<Recipe, "ingredients" | "instructions">;

const RecipeItem = ({
  title,
  slug,
  image,
  overview,
  servings,
  prepMinutes,
  cookMinutes,
}: RecipeItemProps) => {
  return (
    <div className="mt-6 rounded-xl bg-neutral-0 p-2 border border-neutral-300">
      <div className="mb-4">
        <img className="rounded-xl w-full" src={image.large} alt={title} />
      </div>
      <div className="px-2 mb-4">
        <h2 className="text-neutral-900 font-bold text-xl mb-2.5 font-nunito">
          {title}
        </h2>
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
};

export default RecipeItem;
