import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./components/SearchBox"; 
import ShowResults from "./components/ShowResults";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // get all countries from API
  const updateCountries = () => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountries(response.data));
  };

  useEffect(() => updateCountries(), []);

  // Filter countries when user type into searchbox
  const hanldleChangeSearchBox = (e) => {
    setShowResults(e.target.value.length > 0 ? true : false);

    setFilteredCountries(
      countries.filter((country) => {
        return country.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase());
      })
    );
  };

  // Display country when user click show button
  const handleClickShowCountry = (e) => {
    setFilteredCountries(
      countries.filter((country) => country.name === e.target.value)
    );
  };

  // render
  return (
    <>
      <SearchBox handleChange={hanldleChangeSearchBox} />
      {showResults && (
        <ShowResults
          countries={filteredCountries}
          handleClick={handleClickShowCountry}
        />
      )}
    </>
  );
};

export default App;
