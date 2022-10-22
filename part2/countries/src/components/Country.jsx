import React from "react";
import Wheater from "./Wheater";

const Country = ({ country }) => {
  return (
    <>
      <h1>{country.name}</h1>
      <p>
        capital {country.capital} <br />
        population {country.population}
      </p>
      <h2>Spoken languages</h2>
      <ul>
        {country.languages.map((lang) => (
          <li key={lang.name}>{lang.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt={`Flag of ${country.name}`} width="20%" />
      <Wheater capital={country.capital} />
    </>
  );
};

export default Country;
