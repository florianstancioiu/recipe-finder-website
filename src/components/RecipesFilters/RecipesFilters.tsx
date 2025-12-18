import { useState } from "react";
import Dropdown from "../UI/Dropdown/Dropdown";
import ChevronDownSvg from "../../images/icon-chevron-down.svg?react";
import SearchInput from "../UI/SearchInput/SearchInput";
import { type DropdownOption } from "../UI/Dropdown/Dropdown";

const RecipesFilters = () => {
  const [prepOptions, setPrepOptions] = useState([
    { id: 1, value: "0 minutes", isActive: false },
    { id: 2, value: "5 minutes", isActive: false },
    { id: 3, value: "10 minutes", isActive: false },
  ]);

  const [cookOptions, setCookOptions] = useState([
    { id: 1, value: "0 minutes", isActive: false },
    { id: 2, value: "5 minutes", isActive: false },
    { id: 3, value: "10 minutes", isActive: false },
    { id: 4, value: "15 minutes", isActive: false },
    { id: 5, value: "20 minutes", isActive: false },
  ]);

  const onPrepClick = (option: DropdownOption) => {
    setPrepOptions(
      prepOptions
        .map((prepOption) => ({ ...prepOption, isActive: false }))
        .map((prepOption) => {
          if (prepOption.id === option.id) {
            return {
              ...prepOption,
              isActive: true,
            };
          }

          return prepOption;
        })
    );
  };
  const onPrepClear = () => {
    setPrepOptions(
      prepOptions.map((prepOption) => ({ ...prepOption, isActive: false }))
    );
  };

  const onCookClick = (option: DropdownOption) => {
    setCookOptions(
      cookOptions
        .map((cookOption) => ({ ...cookOption, isActive: false }))
        .map((cookOption) => {
          if (cookOption.id === option.id) {
            return {
              ...cookOption,
              isActive: true,
            };
          }

          return cookOption;
        })
    );
  };
  const onCookClear = () => {
    setCookOptions(
      cookOptions.map((cookOption) => ({ ...cookOption, isActive: false }))
    );
  };

  return (
    <div className="px-4 md:grid md:gap-x-3 md:grid-cols-2 md:px-8 xl:max-w-dsktp-md xl:mx-auto xl:gap-x-[500px] xl:px-0">
      <div className="md:grid-cols-2 md:grid md:gap-x-3">
        <Dropdown
          options={prepOptions}
          onOptionClick={onPrepClick}
          onClear={onPrepClear}
          className="md:mb-0"
        >
          <span>Max Prep Time</span>
          <ChevronDownSvg className="inline-block ml-2" />
        </Dropdown>
        <Dropdown
          options={cookOptions}
          onOptionClick={onCookClick}
          onClear={onCookClear}
          className="md:mb-0"
        >
          <span>Max Cook Time</span>
          <ChevronDownSvg className="inline-block ml-2" />
        </Dropdown>
      </div>
      <SearchInput placeholder="Search by name or ingredient…" />
    </div>
  );
};

export default RecipesFilters;
