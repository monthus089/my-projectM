import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    props.onSearch(value);
  };

  return (
    <>
      <form className="flex ml-[500px]  w-[550px]">
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <BiSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="simple-search"
            className="block w-full pl-10 p-2.5 border-gray-100 bg-gray-100 border  text-gray-900 text-sm rounded-[18px] focus:outline-none  focus:ring-transparent"
            placeholder="Search"
            value={searchValue}
            onChange={handleInputChange}
            required
          />
        </div>
      </form>
    </>
  );
};

export default Search;
