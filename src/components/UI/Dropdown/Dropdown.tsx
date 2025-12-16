import { cn } from "tailwind-cn";

export type DropdownOption = {
  id: number;
  value: string;
};

export type DropdownProps = {
  children: React.ReactNode;
  options: DropdownOption[];
  className?: string;
};

const Dropdown = ({ children, options, className }: DropdownProps) => {
  const baseClasses = "mb-3";
  const mergedClasses = cn(
    baseClasses,
    className !== undefined ? className : ""
  );

  return (
    <div className={mergedClasses}>
      <div className="w-full text-center bg-neutral-0 rounded-xl border border-neutral-300 py-2.5 font-normal text-neutral-900 cursor-pointer select-none text-lg">
        {children}
      </div>
      <ul className="list-none hidden">
        {options.map((option) => (
          <li key={option.id}>{option.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
