import { useState } from "react";
import { cn } from "tailwind-cn";

export type DropdownOption = {
  id: number;
  value: number;
  title: string;
  isActive: boolean;
};

export type DropdownProps = {
  children: React.ReactNode;
  options: DropdownOption[];
  className?: string;
  onOptionClick: (option: DropdownOption) => void;
  onClear: () => void;
};

const Dropdown = ({
  children,
  options,
  className,
  onOptionClick,
  onClear,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const baseClasses = "mb-3 relative";
  const mergedClasses = cn(
    baseClasses,
    className !== undefined ? className : ""
  );

  const onClickTitleHandler = () => {
    setIsOpen((val) => !val);
  };

  const optionsClasses = isOpen ? `absolute left-0 top-[58px]` : `hidden`;

  const onOptionClickHandler = (option: DropdownOption) => {
    setIsOpen(false);
    onOptionClick(option);
  };

  const onClearHandler = () => {
    setIsOpen(false);
    onClear();
  };

  return (
    <div className={mergedClasses}>
      <div
        onClick={onClickTitleHandler}
        tabIndex={0}
        className="w-full text-center bg-neutral-0 rounded-xl border border-neutral-300 py-2.5 font-normal text-neutral-900 cursor-pointer select-none text-lg hover:border-neutral-900"
      >
        {children}
      </div>
      <ul
        className={`list-none bg-neutral-0 w-56 p-2 rounded-lg border border-neutral-400 ${optionsClasses}`}
      >
        {options.map((option) => (
          <li
            onClick={() => onOptionClickHandler(option)}
            key={option.id}
            className="p-2 select-none cursor-pointer"
          >
            {!option.isActive && (
              <span className="inline-block mr-2 w-4 h-4 border rounded-full border-neutral-400"></span>
            )}
            {option.isActive && (
              <span className="mr-2 w-4 h-4 border rounded-full border-strong-950 inline-grid place-items-center">
                <span className="w-2 h-2 rounded-full bg-strong-950"></span>
              </span>
            )}
            <span className="text-strong-950">{option.title}</span>
          </li>
        ))}
        <li
          onClick={onClearHandler}
          className="p-2 pb-0 select-none cursor-pointer text-strong-950"
        >
          Clear
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
