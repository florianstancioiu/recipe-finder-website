import Link from "../UI/Link/Link";

const HealthyMeals = () => {
  return (
    <div className="px-4 text-neutral-900 mb-10 md:px-8 xl:text-center xl:mb-20 xl:max-w-dsktp-md xl:mx-auto">
      <div className="relative z-10">
        <h1 className="font-nunito text-5xl font-bold mb-4 md:text-6xl xl:text-7xl">
          <span className="relative">
            <span className="absolute block w-full bg-orange-500 h-6 rounded-sm left-0 bottom-2.5 -z-1 opacity-[0.4] xl:h-9"></span>
            Healthy
          </span>
          <span> meals, zero fuss</span>
        </h1>
        <p className="mb-8 xl:max-w-[500px] xl:mx-auto xl:text-xl xl:mb-10">
          Discover eight quick, whole-food recipes that you can cook tonight—no
          processed junk, no guesswork.
        </p>
        <Link to="/recipes" className="inline-block">
          Start exploring
        </Link>
      </div>
    </div>
  );
};

export default HealthyMeals;
