import Link from "../UI/Link/Link";

const RecipeNotFound = () => {
  return (
    <div className="px-4 pb-12 mb-12 border-b border-neutral-300 text-center">
      <h1 className="text-3xl font-bold mb-10 text-neutral-900">
        404 - Recipe not found
      </h1>
      <Link to="/" className="inline-block">
        Home Page
      </Link>
    </div>
  );
};

export default RecipeNotFound;
