import ServingsSvg from "../../images/icon-servings.svg?react";
import PrepSvg from "../../images/icon-prep-time.svg?react";
import CookSvg from "../../images/icon-cook-time.svg?react";

import { type Recipe } from "../../pages/Recipes/Recipes";
import BulletPoints from "../UI/BulletPoints/BulletPoints";

export type RecipeItemProps = Recipe;

const MainRecipe = ({
  title,
  image,
  overview,
  servings,
  prepMinutes,
  cookMinutes,
  ingredients,
  instructions,
}: RecipeItemProps) => {
  const mapBulletOptions = (options: string[]) => {
    return options.map((option, index) => ({
      id: index + 1,
      description: option,
    }));
  };

  const mappedIngredientsOptions = mapBulletOptions(ingredients);
  const mappedInstructionsOptions = mapBulletOptions(instructions);

  return (
    <div className="mt-4 px-4 pb-12 mb-12 border-b border-neutral-300 md:px-8">
      <div className="mb-10">
        <img className="rounded-xl w-full" src={image.large} alt={title} />
      </div>
      <div className="mb-4">
        <h1 className="text-neutral-900 font-bold text-4xl mb-5 font-nunito md:text-5xl md:font-extrabold">
          {title}
        </h1>
        <p className="mb-5 text-xl">{overview}</p>
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
        <BulletPoints
          title="Ingredients"
          options={mappedIngredientsOptions}
          showTitle={false}
          className="px-0 border-b-0 pb-0 pt-5 md:px-0"
        />
        <BulletPoints
          title="Instructions"
          options={mappedInstructionsOptions}
          showTitle={false}
          className="px-0 border-b-0 pb-0 pt-5 md:px-0"
        />
      </div>
    </div>
  );
};

export default MainRecipe;
