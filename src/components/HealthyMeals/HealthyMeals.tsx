import Link from "../UI/Link/Link";

const HealthyMeals = () => {
  return (
    <div className="px-4 text-neutral-900 mb-10">
      <h1 className="font-nunito text-5xl font-bold mb-4">
        <span className="relative">
          <span className="absolute block w-full bg-orange-500 h-6 rounded-sm left-0 bottom-2.5 -z-1 opacity-[0.4]"></span>
          Healthy
        </span>
        <span> meals, zero fuss</span>
      </h1>
      <p className="mb-8">
        Discover eight quick, whole-food recipes that you can cook tonight—no
        processed junk, no guesswork.
      </p>
      <Link to="/recipes" className="inline-block">
        Start exploring
      </Link>
    </div>
  );
};

export default HealthyMeals;
