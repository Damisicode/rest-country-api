import React from "react";

const CountryCard = (props) => {
  const country = props.countryData;
  // console.log(country);
  // country = {
  //   name: "Afghanistan",
  //   population: 40218234,
  //   flags: {
  //     svg: "https://flagcdn.com/af.svg",
  //     png: "https://flagcdn.com/w320/af.png",
  //   },
  //   region: "Asia",
  //   capital: "Kabul",
  //   topLevelDomain: [".af"],
  //   nativeName: "افغانستان",
  //   currencies: [
  //     {
  //       code: "AFN",
  //       name: "Afghan afghani",
  //       symbol: "؋",
  //     },
  //   ],
  //   subregion: "Southern Asia",
  //   languages: [
  //     {
  //       iso639_1: "ps",
  //       iso639_2: "pus",
  //       name: "Pashto",
  //       nativeName: "پښتو",
  //     },
  //     {
  //       iso639_1: "uz",
  //       iso639_2: "uzb",
  //       name: "Uzbek",
  //       nativeName: "Oʻzbek",
  //     },
  //     {
  //       iso639_1: "tk",
  //       iso639_2: "tuk",
  //       name: "Turkmen",
  //       nativeName: "Türkmen",
  //     },
  //   ],
  //   flag: "https://flagcdn.com/af.svg",
  //   borders: ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
  // };

  return (
    <div
      className="shadow-md h-70 rounded-sm w-64 dark:bg-neutral-dark-blue-elements"
      onClick={() => props.showCountryDetail(country)}
    >
      <img
        src={country.flag}
        alt={`${country.name} flag`}
        className="h-40 rounded-t-md object-cover w-full"
      />
      <div className="p-6">
        <h4 className="font-bold">{country.name}</h4>
        <div className="pt-3">
          <div>Population: {country.population}</div>
          <div>Region: {country.region}</div>
          <div>Capital: {country.capital}</div>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
