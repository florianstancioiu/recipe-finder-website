import { cn } from "tailwind-cn";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
  const baseClasses =
    "px-8 py-4 bg-neutral-900 text-neutral-0 rounded-xl cursor-pointer font-bold";
  const mergedClasses = cn(
    baseClasses,
    className !== undefined ? className : ""
  );

  return <button className={mergedClasses}>{children}</button>;
};

export default Button;
