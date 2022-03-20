import React, { useState, useEffect } from "react";
import _isEmpty from "lodash/isEmpty";
import { Wrapper, IconWrapper } from "./SearchInput.style";
import Button from "../../atoms/Button";

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

const chevronBottomSvg = (
  <svg
    className="ml-2 w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
  </svg>
);
const SearchInput = (props) => {
  const { onChangeHandler, onClickHandler, icon = searchSvg, className, handleSubmit } = props;

  const [searchBy, setSearchBy] = useState("role");
  const [isShowModal, setIsShowModal] = useState("hidden");
  const [input, setInput] = useState("");

  const handleSearchBy = (type) => {
    setSearchBy(type);
    setIsShowModal("hidden");
    setInput("");
  };

  return (
    <Wrapper
      className={`${className} w-full md:w-1/2 flex flex-col pl-6 py-3 pr-3 bg-white rounded-lg shadow-xl border border-gray-100 shadow-slate-200`}
    >
      <div className="flex flex-row justify-between gap-x-3">
        {!_isEmpty(icon) && <IconWrapper>{icon}</IconWrapper>}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Search job by ${searchBy}`}
          className="bg-transparent border-transparent placeholder-gray-400  appearance-none border-none basis-3/4 py-0 pl-0 focus:outline-none focus:border-transparent focus:ring-0"
          onFocus={() => setIsShowModal("hidden")}
        />
        <button
          type="button"
          className="bg-transparent capitalize text-black basis-1/4 pr-2 py-4 text-left rounded-md flex items-center justify-end"
          onClick={() => setIsShowModal(isShowModal === "" ? "hidden" : "")}
        >
          {searchBy}
          {chevronBottomSvg}
        </button>

        <div
          className={`${isShowModal} absolute right-0 top-16 z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow border dark:bg-gray-700`}
        >
          <ul className="py-1" aria-labelledby="dropdownButton">
            <li>
              <span
                onClick={() => handleSearchBy("role")}
                role="button"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Role
              </span>
            </li>
            <li>
              <span
                onClick={() => handleSearchBy("city")}
                role="button"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                City
              </span>
            </li>
          </ul>
        </div>
      </div>

      <Button onClick={() => handleSubmit(input, searchBy)}>Search</Button>
    </Wrapper>
  );
};

export default SearchInput;
