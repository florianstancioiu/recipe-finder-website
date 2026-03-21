import { useEffect, useState } from "react";
import Dropdown from "../UI/Dropdown/Dropdown";
import ChevronDownSvg from "../../images/icon-chevron-down.svg?react";
import SearchInput from "../UI/SearchInput/SearchInput";
import { type DropdownOption } from "../UI/Dropdown/Dropdown";

export type AllFilters = {
  prepOptions: DropdownOption[];
  cookOptions: DropdownOption[];
  searchKeyword: string;
};

export type RecipesFilters = {
  filters: AllFilters;
  onChange: (filters: AllFilters) => void;
};

const RecipesFilters = ({ filters, onChange }: RecipesFilters) => {
  const [localFilters, setLocalFilters] = useState<AllFilters>(filters);

  useEffect(() => {
    onChange(localFilters);
  }, [JSON.stringify(localFilters)]);

  const onPrepClick = (option: DropdownOption) => {
    setLocalFilters({
      ...localFilters,
      prepOptions: localFilters.prepOptions
        .map((prepOption) => ({ ...prepOption, isActive: false }))
        .map((prepOption) => {
          if (prepOption.id === option.id) {
            return {
              ...prepOption,
              isActive: true,
            };
          }

          return prepOption;
        }),
    });
  };

  const onPrepClear = () => {
    setLocalFilters({
      ...localFilters,
      prepOptions: localFilters.prepOptions.map((prepOption) => ({
        ...prepOption,
        isActive: false,
      })),
    });
  };

  const onCookClick = (option: DropdownOption) => {
    setLocalFilters({
      ...localFilters,
      cookOptions: localFilters.cookOptions
        .map((cookOption) => ({ ...cookOption, isActive: false }))
        .map((cookOption) => {
          if (cookOption.id === option.id) {
            return {
              ...cookOption,
              isActive: true,
            };
          }

          return cookOption;
        }),
    });
  };

  const onCookClear = () => {
    setLocalFilters({
      ...localFilters,
      cookOptions: localFilters.cookOptions.map((cookOption) => ({
        ...cookOption,
        isActive: false,
      })),
    });
  };

  const onSearchChange = (searchKeyword: string) => {
    setLocalFilters({
      ...localFilters,
      searchKeyword,
    });
  };

  return (
    <div className="px-4 md:grid md:gap-x-3 md:grid-cols-2 md:px-8 xl:max-w-dsktp-md xl:mx-auto xl:gap-x-[500px] xl:px-0">
      <div className="md:grid-cols-2 md:grid md:gap-x-3">
        <Dropdown
          options={localFilters.prepOptions}
          onOptionClick={onPrepClick}
          onClear={onPrepClear}
          className="md:mb-0"
        >
          <span>Max Prep Time</span>
          <ChevronDownSvg className="inline-block ml-2" />
        </Dropdown>
        <Dropdown
          options={localFilters.cookOptions}
          onOptionClick={onCookClick}
          onClear={onCookClear}
          className="md:mb-0"
        >
          <span>Max Cook Time</span>
          <ChevronDownSvg className="inline-block ml-2" />
        </Dropdown>
      </div>
      <SearchInput
        onChange={onSearchChange}
        placeholder="Search by name or ingredient…"
      />
    </div>
  );
};

export default RecipesFilters;
