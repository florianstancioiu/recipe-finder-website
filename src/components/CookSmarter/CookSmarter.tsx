import Link from "../UI/Link/Link";
import ForkSvg from "../../images/pattern-fork.svg?react";
import KnifeSvg from "../../images/pattern-knife.svg?react";

const CookSmarter = () => {
  return (
    <div className="px-4 text-neutral-900 mb-10 text-center md:px-8 md:mb-0">
      <div className="bg-neutral-200 py-12 px-4 rounded-2xl md:py-20 relative overflow-hidden">
        <KnifeSvg className="hidden md:block md:absolute md:right-[-35px] md:top-[-35px] md:w-[170px] md:h-[170px] " />
        <ForkSvg className="hidden md:block md:absolute md:left-[-50px] md:bottom-[-25px] md:w-[170px] md:h-[170px]" />
        <div className="md:relative md:z-10">
          <h2 className="font-nunito text-4xl font-extrabold mb-4 md:text-5xl">
            Ready to cook smarter?
          </h2>
          <p className="mb-8">
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <Link to="/recipes" className="inline-block">
            Browse recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CookSmarter;
