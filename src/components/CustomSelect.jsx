import Select, { components } from "react-select";
import { clsx } from "clsx";
import { ReactComponent as DownArrowIcon } from "../assets/icons/downArrow.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import colors from "tailwindcss/colors";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DownArrowIcon className="stroke-black h-4 w-4" />
    </components.DropdownIndicator>
  );
};

const ClearIndicator = (props) => {
  return (
    <components.ClearIndicator {...props}>
      <CloseIcon className="stroke-black h-4 w-4" />
    </components.ClearIndicator>
  );
};

const MultiValueRemove = (props) => {
  return (
    <components.MultiValueRemove {...props}>
      <CloseIcon className="stroke-black h-4 w-4" />
    </components.MultiValueRemove>
  );
};

const controlStyles = {
  base: "border rounded-lg bg-white hover:cursor-pointer",
  focus: "border-primary-600 ring-1 ring-primary-500",
  nonFocus: "border-gray-300 hover:border-gray-400",
};
const placeholderStyles = "text-gray-500 pl-1 py-0.5";
const selectInputStyles = "pl-1 py-0.5";
const valueContainerStyles = "p-1 gap-1";
const singleValueStyles = "pl-1 py-0.5";
const multiValueStyles =
  "bg-gray-100 rounded items-center py-0.5 pl-2 pr-1 gap-1.5";
const multiValueLabelStyles = "leading-6 py-0.5";
const multiValueRemoveStyles =
  "border border-gray-200 bg-white hover:bg-gray-100 hover:text-red-800 text-gray-500 hover:border-red-300 rounded-md";
const indicatorsContainerStyles = "p-1 gap-1";
const clearIndicatorStyles =
  "text-gray-500 p-1 rounded-md hover:bg-gray-100 hover:text-red-800";
const indicatorSeparatorStyles = "bg-gray-300";
const dropdownIndicatorStyles =
  "p-1 hover:bg-gray-100 text-gray-500 rounded-md hover:text-black";
const menuStyles = "p-1 mt-2 border border-gray-200 bg-white rounded-lg";
const groupHeadingStyles = "ml-3 mt-2 mb-1 text-gray-500 text-sm";
const optionStyles = {
  base: "hover:cursor-pointer px-3 py-2 rounded",
  focus: "bg-gray-100 active:bg-gray-200",
  selected: "after:ml-2 after:text-green-500 text-gray-500",
};
const noOptionsMessageStyles =
  "text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm";

const CustomSelect = (props) => (
  <Select
    styles={{
      input: (base) => ({
        ...base,
        "input:focus": {
          boxShadow: "none",
        },
      }),
      multiValueLabel: (base) => ({
        ...base,
        whiteSpace: "normal",
        overflow: "visible",
      }),
      control: (base) => ({
        ...base,
        border: "1px solid gray",
        boxShadow: "none",
        transition: "none",
        "&:hover": {
          border: "1px solid black",
        },
      }),
      option: (provided, { isFocused, isHovered, isSelected }) => ({
        ...provided,
        backgroundColor: isSelected ? colors?.orange?.["400"] : "transparent",
        color: "black",
        "&:hover": {
          backgroundColor:
            isFocused || isHovered ? colors?.orange?.["200"] : "transparent",
        },
        "&:active": {
          backgroundColor:
            isFocused || isHovered ? colors?.orange?.["200"] : "transparent",
        },
      }),
    }}
    components={{ DropdownIndicator, ClearIndicator, MultiValueRemove }}
    classNames={{
      control: ({ isFocused }) =>
        clsx(
          isFocused ? controlStyles.focus : controlStyles.nonFocus,
          controlStyles.base
        ),
      placeholder: () => placeholderStyles,
      input: () => selectInputStyles,
      valueContainer: () => valueContainerStyles,
      singleValue: () => singleValueStyles,
      multiValue: () => multiValueStyles,
      multiValueLabel: () => multiValueLabelStyles,
      multiValueRemove: () => multiValueRemoveStyles,
      indicatorsContainer: () => indicatorsContainerStyles,
      clearIndicator: () => clearIndicatorStyles,
      indicatorSeparator: () => indicatorSeparatorStyles,
      dropdownIndicator: () => dropdownIndicatorStyles,
      menu: () => menuStyles,
      groupHeading: () => groupHeadingStyles,
      option: ({ isFocused, isSelected }) =>
        clsx(
          isFocused && optionStyles.focus,
          isSelected && optionStyles.selected,
          optionStyles.base
        ),
      noOptionsMessage: () => noOptionsMessageStyles,
    }}
    {...props}
  />
);

export default CustomSelect;
