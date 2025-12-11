import { useId } from "react";

import SearchSvg from "../../../images/icon-search.svg?react";

export type SearchInputProps = {
  placeholder: string;
};

const SearchInput = ({ placeholder }: SearchInputProps) => {
  const searchInputId = useId();

  return (
    <label
      htmlFor={searchInputId}
      className="relative w-full block text-center bg-neutral-0 rounded-xl border border-neutral-300 py-2.5 font-normal text-neutral-900 cursor-pointer"
    >
      <SearchSvg className="absolute left-3 top-3.5" />
      <input
        id={searchInputId}
        className="bg-neutral-0 pl-10 focus-visible:border-none focus-visible:outline-none w-full"
        type="text"
        placeholder={placeholder}
      />
    </label>
  );
};

export default SearchInput;
