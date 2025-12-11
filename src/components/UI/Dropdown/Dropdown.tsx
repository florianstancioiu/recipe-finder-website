export type DropdownOption = {
  id: number;
  value: string;
};

export type DropdownProps = {
  children: React.ReactNode;
  options: DropdownOption[];
};

const Dropdown = ({ children, options }: DropdownProps) => {
  return (
    <div className="mb-3">
      <div className="w-full text-center bg-neutral-0 rounded-xl border border-neutral-300 py-2.5 font-normal text-neutral-900 cursor-pointer">
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
