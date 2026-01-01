import WholeFoodRecipesIcon from "../../images/icon-whole-food-recipes.svg?react";
import MinimumFussIcon from "../../images/icon-minimum-fuss.svg?react";
import SearchInSecondsIcon from "../../images/icon-search-in-seconds.svg?react";
import SquiggleSvg from "../../images/pattern-squiggle-1.svg?react";

const WhatYouWillGet = () => {
  return (
    <div className="w-full relative">
      <SquiggleSvg className="absolute w-full h-full left-0 top-[-45%] xl:top-[-35%]" />

      <div className="px-4 mb-8 md:px-8 md:pb-20 md:mb-20 border-b border-neutral-300 relative z-10 xl:max-w-dsktp-md xl:mx-auto">
        <div className="bg-neutral-0 rounded mb-16 p-1 md:mb-20 xl:rounded-xl">
          <img
            src="./images/image-home-hero-large.webp"
            alt="Home Hero"
            className="rounded w-full xl:rounded-xl"
          />
        </div>

        <div>
          <h2 className="font-nunito text-4xl font-extrabold mb-4 text-neutral-900 md:mb-12 xl:text-center xl:text-5xl">
            What you’ll get
          </h2>
          <div className="xl:flex xl:justify-between xl:items-center xl:gap-x-8">
            <div className="mb-6 xl:mb-0">
              <div className="w-14 h-14 bg-neutral-0 grid place-items-center rounded border border-neutral-200 mb-5">
                <WholeFoodRecipesIcon />
              </div>
              <h3 className="font-nunito text-3xl font-bold mb-3 text-neutral-900">
                Whole-food recipes
              </h3>
              <p className="xl:max-w-[376px]">
                Each dish uses everyday, unprocessed ingredients.
              </p>
            </div>
            <div className="mb-6 xl:mb-0">
              <div className="w-14 h-14 bg-neutral-0 grid place-items-center rounded border border-neutral-200 mb-5">
                <MinimumFussIcon />
              </div>
              <h3 className="font-nunito text-3xl font-bold mb-3 text-neutral-900">
                Minimum fuss
              </h3>
              <p className="xl:max-w-[376px]">
                All recipes are designed to make eating healthy quick and easy.
              </p>
            </div>
            <div className="mb-6 md:mb-0">
              <div className="w-14 h-14 bg-neutral-0 grid place-items-center rounded border border-neutral-200 mb-5">
                <SearchInSecondsIcon />
              </div>
              <h3 className="font-nunito text-3xl font-bold mb-3 text-neutral-900">
                Search in seconds
              </h3>
              <p className="xl:max-w-[376px]">
                Filter by name or ingredient and jump straight to the recipe you
                need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillGet;
