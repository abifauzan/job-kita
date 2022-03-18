import React from "react";
import _isEmpty from "lodash/isEmpty";
import { Wrapper, IconWrapper } from "./SearchInput.style";

const searchSvg = (
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width="30px"
    height="30px"
  >
    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
  </svg>
);
const SearchInput = (props) => {
  const {
    onChangeHandler,
    onClickHandler,
    icon = searchSvg,
    buttonLabel = "Search",
    placeholderInput = "Search for job title",
    className,
  } = props;

  return (
    <Wrapper
      className={`${className} w-full md:w-1/2 flex flex-row justify-between pl-6 py-3 pr-3 bg-white rounded-lg shadow-xl border border-gray-100 shadow-slate-200 gap-x-3`}
    >
      {!_isEmpty(icon) && <IconWrapper>{icon}</IconWrapper>}
      <input
        type="text"
        placeholder={placeholderInput}
        className="bg-transparent border-transparent placeholder-gray-400  appearance-none border-none basis-3/4 py-0 pl-0 pr-2 focus:outline-none focus:border-transparent focus:ring-0"
      />
      <button type="button" className="bg-teal-500 text-white basis-1/4 px-5 py-4 rounded-md">
        {buttonLabel}
      </button>
    </Wrapper>
  );
};

export default SearchInput;
