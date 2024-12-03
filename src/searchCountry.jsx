import React, { useContext, useState } from "react";
import searchSVG from "./assets/search.svg";
import darkSearchSVG from "./assets/dark-search.svg";
import { DarkModeContext } from "./darkModeContext";

const SearchCountry = ({ onSearchChange, onRegionChange }) => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  const handleSearchChange = (e) => {
    onSearchChange(e.target.value);
  };

  const handleRegionChange = (e) => {
    console.log(e.target.value);
    onRegionChange(e.target.value);
  };

  const selectedRegion = "";

  return (
    <div className="flex justify-between flex-wrap gap-4">
      <div className="flex flex-row p-5 shadow-md rounded-md bg-white dark:bg-neutral-dark-blue-elements gap-3 dark:text-white xs:w-full xxs:w-full sm:w-fit">
        <img
          src={isDarkMode ? darkSearchSVG : searchSVG}
          alt="Search Icon"
          className="h-6"
        />
        <input
          type="text"
          onChange={handleSearchChange}
          placeholder="Search for a country..."
          className="dark:placeholder-white outline-none dark:text-white dark:bg-neutral-dark-blue-elements"
        />
      </div>
      {/* <div className="justify-self-end p-5"> */}
      <select
        value={selectedRegion || ""}
        onChange={handleRegionChange}
        className="p-5 shadow-md rounded-md bg-white outline-none dark:text-white dark:bg-neutral-dark-blue-elements xs:w-full xxs:w-full sm:w-fit"
      >
        <option value="" disabled hidden>
          Filter by Region
        </option>
        <option value="Africa" className="p-8">
          Africa
        </option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchCountry;
