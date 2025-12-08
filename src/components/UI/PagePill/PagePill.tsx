import { cn } from "tailwind-cn";

export type PagePillProps = {
  children: React.ReactNode;
  className?: string;
};

const PagePill = ({ children, className }: PagePillProps) => {
  const baseClasses =
    "inline-block bg-orange-500 font-bold text-xl px-1.5 rounded-lg";
  const mergedClasses = cn(
    baseClasses,
    className !== undefined ? className : ""
  );

  return <p className={mergedClasses}>{children}</p>;
};

export default PagePill;
