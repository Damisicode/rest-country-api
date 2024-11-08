import React, { useContext } from "react";
import arrowBack from "./assets/left-arrow.svg";
import darkArrowBack from "./assets/dark-left-arrow.svg";
import { DarkModeContext } from "./darkModeContext";

const CountryDetail = (props) => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  if (!props.country) return;
  const country = props.country;
  console.log(country);

  const borderCountries = country.borders?.map((border) =>
    props.countries.find((cunt) => cunt.alpha3Code === border)
  );

  const handleNav = (borderCountry) => {
    console.log("Navigating to: ", borderCountry);
    props.showBorderCountries(borderCountry);
  };

  return (
    <div className="">
      <div className="my-10 p-4 mx-10">
        <button
          className="flex flex-row gap-2 py-2 px-5 shadow-md rounded-md items-center dark:bg-neutral-dark-blue-elements"
          onClick={props.showCountriesPageHandler}
        >
          <img
            className="h-5"
            src={isDarkMode ? darkArrowBack : arrowBack}
            alt="Arrow Back"
          />
          Back
        </button>
      </div>
      <div className="flex lg:flex-row md-lg:flex-row sm:flex-col xs:flex-col gap-16 px-10 items-center justify-center">
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="h-72 object-cover w-90"
        />
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-2xl pb-5">{country.name}</h3>
          <div className="flex gap-10 sm:gap-0 md:gap-10 flex-wrap">
            <ul>
              <li>
                <span className="font-bold">Native Name:</span>{" "}
                {country.nativeName}
              </li>
              <li>
                <span className="font-bold">Population:</span>{" "}
                {country.population}
              </li>
              <li>
                <span className="font-bold">Region:</span> {country.region}
              </li>
              <li>
                <span className="font-bold">Sub Region:</span>{" "}
                {country.subregion}
              </li>
              <li>
                <span className="font-bold">Capital:</span> {country.capital}
              </li>
            </ul>
            <ul>
              <li>
                <span className="font-bold">Top Level Domain:</span>{" "}
                {country.topLevelDomain}
              </li>
              <li>
                <span className="font-bold">Currencies:</span>{" "}
                {country.currencies.map((cur) => cur.name).join(", ")}
              </li>
              <li>
                <span className="font-bold">Languages:</span>{" "}
                {country.languages.map((lang) => lang.name).join(", ")}
              </li>
            </ul>
          </div>
          {country.borders && (
            <div className="flex flex-row gap-2 mt-6">
              <div className="font-bold">Border Countries:</div>
              <div className="flex flex-row flex-wrap gap-2">
                {borderCountries.map((borderCountry) => (
                  <button
                    className="bg-white b py-2 px-6 rounded-md shadow-md dark:bg-neutral-dark-blue-elements"
                    onClick={() => handleNav(borderCountry)}
                  >
                    {borderCountry.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
