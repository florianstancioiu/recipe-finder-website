import { Link } from "react-router";

export type BreadcrumbsProps = {
  title: string;
};

const Breadcrumbs = ({ title }: BreadcrumbsProps) => {
  return (
    <div className="text-neutral-900 font-semibold px-4 mb-4">
      <Link to="/" className="opacity-60">
        Recipes
      </Link>
      <span className="opacity-60"> / </span>
      <span>{title}</span>
    </div>
  );
};

export default Breadcrumbs;
