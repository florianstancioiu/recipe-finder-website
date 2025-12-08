import Button from "../UI/Button/Button";

const CookSmarter = () => {
  return (
    <div className="px-4 text-neutral-900 mb-10 text-center">
      <div className="bg-neutral-200 py-12 px-4 rounded-2xl">
        <h2 className="font-nunito text-4xl font-bold mb-4">
          Ready to cook smarter?
        </h2>
        <p className="mb-8">
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>
        <Button>Browse recipes</Button>
      </div>
    </div>
  );
};

export default CookSmarter;
