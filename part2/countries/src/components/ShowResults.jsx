import React from "react";
import Countries from "./Countries";
import Country from "./Country";

const ShowResults = ({ countries, handleClick }) => {
    // More than 10 countries
    if (countries.length > 10)
      return <p>To many matches, specify another filter</p>;
  
    // No result
    if (countries.length === 0) return <p>No result, specify another filter</p>;
  
    // One country
    if (countries.length === 1) return <Country country={countries[0]} />;
    else return <Countries countries={countries} handleClick={handleClick} />;
  };

  export default ShowResults;