import Dropdown from "../UI/Dropdown/Dropdown";
import ChevronDownSvg from "../../images/icon-chevron-down.svg?react";
import SearchInput from "../UI/SearchInput/SearchInput";

const prepOptions = [
  { id: 1, value: "0 minutes" },
  { id: 2, value: "5 minutes" },
  { id: 3, value: "10 minutes" },
];

const cookOptions = [
  { id: 1, value: "0 minutes" },
  { id: 2, value: "5 minutes" },
  { id: 3, value: "10 minutes" },
  { id: 4, value: "15 minutes" },
  { id: 5, value: "20 minutes" },
];

const RecipesFilters = () => {
  return (
    <div className="px-4 md:grid md:gap-x-3 md:grid-cols-4 md:px-8">
      <Dropdown options={prepOptions} className="md:mb-0">
        <span>Max Prep Time</span>
        <ChevronDownSvg className="inline-block ml-2" />
      </Dropdown>
      <Dropdown options={cookOptions} className="md:mb-0">
        <span>Max Cook Time</span>
        <ChevronDownSvg className="inline-block ml-2" />
      </Dropdown>
      <SearchInput
        placeholder="Search by name or ingredient…"
        className="md:col-span-2"
      />
    </div>
  );
};

export default RecipesFilters;
