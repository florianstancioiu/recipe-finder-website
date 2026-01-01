import { Link as RouterLink } from "react-router";
import { cn } from "tailwind-cn";

export type LinkProps = {
  children: React.ReactNode;
  className?: string;
  to: string;
};

const Link = ({ children, className, to }: LinkProps) => {
  const baseClasses =
    "px-8 py-4 bg-neutral-900 text-neutral-0 rounded-xl cursor-pointer font-bold hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-neutral-900";
  const mergedClasses = cn(
    baseClasses,
    className !== undefined ? className : ""
  );

  return (
    <RouterLink to={to} className={mergedClasses}>
      {children}
    </RouterLink>
  );
};

export default Link;
