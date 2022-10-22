import React from "react";

const Countries = ({ countries, handleClick }) => {
  return (
    <>
      <ul>
        {countries.map((country) => {
          return (
            <li key={country.name}>
              {country.name}
              <button onClick={handleClick} value={country.name}>
                Show
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Countries;
