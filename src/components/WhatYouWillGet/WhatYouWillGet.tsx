import WholeFoodRecipesIcon from "../../images/icon-whole-food-recipes.svg?react";
import MinimumFussIcon from "../../images/icon-minimum-fuss.svg?react";
import SearchInSecondsIcon from "../../images/icon-search-in-seconds.svg?react";

const WhatYouWillGet = () => {
  return (
    <div className="px-4 mb-8">
      <div className="bg-neutral-0 rounded mb-16 p-1">
        <img
          src="/images/image-home-hero-small.webp"
          alt="Home Hero"
          className="rounded w-full"
        />
      </div>

      <div>
        <h2 className="font-nunito text-4xl font-bold mb-4">What you’ll get</h2>
        <div>
          <div className="mb-6">
            <div className="w-14 h-14 bg-neutral-0 grid place-items-center rounded border border-neutral-200 mb-5">
              <WholeFoodRecipesIcon />
            </div>
            <h3 className="font-nunito text-3xl font-bold mb-3">
              Whole-food recipes
            </h3>
            <p>Each dish uses everyday, unprocessed ingredients.</p>
          </div>
          <div className="mb-6">
            <div className="w-14 h-14 bg-neutral-0 grid place-items-center rounded border border-neutral-200 mb-5">
              <MinimumFussIcon />
            </div>
            <h3 className="font-nunito text-3xl font-bold mb-3">
              Minimum fuss
            </h3>
            <p>
              All recipes are designed to make eating healthy quick and easy.
            </p>
          </div>
          <div className="mb-6">
            <div className="w-14 h-14 bg-neutral-0 grid place-items-center rounded border border-neutral-200 mb-5">
              <SearchInSecondsIcon />
            </div>
            <h3 className="font-nunito text-3xl font-bold mb-3">
              Search in seconds
            </h3>
            <p>
              Filter by name or ingredient and jump straight to the recipe you
              need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouWillGet;
