import Button from "../UI/Button/Button";

const HealthyMeals = () => {
  return (
    <div className="px-4 text-neutral-900 mb-10">
      <h1 className="font-nunito text-5xl font-bold mb-4">
        Healthy meals, zero fuss
      </h1>
      <p className="mb-8">
        Discover eight quick, whole-food recipes that you can cook tonight—no
        processed junk, no guesswork.
      </p>
      <Button>Start exploring</Button>
    </div>
  );
};

export default HealthyMeals;
