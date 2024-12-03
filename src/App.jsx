import React, { useContext, useEffect, useState } from "react";
import data from "../data.json";
import CountryCard from "./countryCard";
import Heading from "./heading";
import SearchCountry from "./searchCountry";
import CountryDetail from "./countryDetail";
import "./App.css";
import Pagination from "./pagination";
import { DarkModeContext } from "./darkModeContext";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [selectRegion, setSelectRegion] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [curPageNumber, setCurPageNumber] = useState(1);
  const [pageBtn, setPageBtn] = useState("");
  const [showCountriesPage, setShowCountriesPage] = useState(true);
  const [showCountryDetailPage, setShowCountryDetailPage] = useState(false);
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  const onRegionChange = (region) => {
    setCurPageNumber(1);
    setSelectRegion(region);
  };

  const onSearchChange = (term) => {
    setCurPageNumber(1);
    setSearchTerm(term);
  };

  const showCountryDetail = (country) => {
    setCountry(country);
    setShowCountriesPage(false);
    setShowCountryDetailPage(true);
    console.log("Showing country detail: ", country);
  };

  const showCountriesPageHandler = () => {
    setShowCountriesPage(true);
    setShowCountryDetailPage(false);
  };

  const showBorderCountries = (country) => {
    setCountry(country);
  };

  const getPageData = (allData) => {
    console.log(
      "Inside the Get page data, the current page number is: ",
      curPageNumber
    );
    const start = (curPageNumber - 1) * 20;
    const end = curPageNumber * 20;

    if (curPageNumber > 1 && allData.length > end) {
      setPageBtn("both");
    } else if (allData.length > end) {
      setPageBtn("next");
    } else if (curPageNumber > 1 || allData.length < end) {
      setPageBtn("prev");
    }
    console.log(start, end);
    console.log(allData);

    console.log(allData.slice(start, end));

    return allData.slice(start, end);
  };

  const setNewPageNum = (btn) => {
    console.log("Here is the btn: ", btn);

    setCurPageNumber((curPageNumber) => {
      const newPageNum = btn === "prev" ? curPageNumber - 1 : curPageNumber + 1;
      console.log("New Page Number:", newPageNum);

      // Update pageBtn based on newPageNum and your data length logic
      if (newPageNum > 1 && data.length > newPageNum * 20) {
        setPageBtn("both");
      } else if (data.length > newPageNum * 20) {
        setPageBtn("next");
      } else {
        setPageBtn("prev");
      }

      return newPageNum;
    });
  };

  const searchCountry = (countryName, countryRegion) => {
    const searchedCountries = data.filter((cunt) =>
      cunt.name.toLowerCase().includes(countryName.toLowerCase())
    );
    console.log(searchedCountries);
    console.log(countryRegion);

    if (countryRegion !== "") {
      setCountries(
        getPageData(
          searchedCountries.filter(
            (cunt) => cunt.region.toLowerCase() === countryRegion.toLowerCase()
          )
        )
      );
      console.log("setting countries based on filter...");
    } else {
      console.log("Setting Countries based on no filter");
      setCountries(getPageData(searchedCountries));
    }
    console.log(countries);
  };

  useEffect(() => {
    searchCountry(searchTerm, selectRegion);
  }, [searchTerm, selectRegion, curPageNumber]);

  useEffect(() => {
    console.log("Current Page Number:", curPageNumber);
  }, [curPageNumber]);

  useEffect(() => {
    if (!localStorage.getItem("darkMode") === isDarkMode) toggleDarkMode();
  }, []);

  return (
    <div className="bg-white dark:bg-neutral-very-dark-blue-bg dark:text-white pb-10 font-sans overflow-hidden">
      <Heading />
      <div className={showCountriesPage ? "block" : "hidden"}>
        <div className="p-10">
          <SearchCountry
            onSearchChange={onSearchChange}
            onRegionChange={onRegionChange}
          />
        </div>
        <div className="grid gap-10 gap-x-7 sm:grid-cols-2 md:grid-cols-2 md-lg:grid-cols-3 lg:grid-cols-4 m-10 place-items-center">
          {countries.map((country, i) => (
            <CountryCard
              key={i + 1}
              countryData={country}
              showCountryDetail={showCountryDetail}
            />
          ))}
        </div>
        <Pagination btn={pageBtn} setNewPageNum={setNewPageNum} />
      </div>
      <div className={showCountryDetailPage ? "block" : "hidden"}>
        <CountryDetail
          country={country}
          countries={data}
          showCountriesPageHandler={showCountriesPageHandler}
          showBorderCountries={showBorderCountries}
        />
      </div>
    </div>
  );
};

export default App;
