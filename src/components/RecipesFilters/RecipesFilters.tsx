import Dropdown from "../UI/Dropdown/Dropdown";
import ChevronDownSvg from "../../images/icon-chevron-down.svg?react";

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
    <div className="px-4">
      <Dropdown options={prepOptions}>
        <span>Max Prep Time</span>
        <ChevronDownSvg className="inline-block ml-2" />
      </Dropdown>
      <Dropdown options={cookOptions}>
        <span>Max Cook Time</span>
        <ChevronDownSvg className="inline-block ml-2" />
      </Dropdown>
    </div>
  );
};

export default RecipesFilters;
