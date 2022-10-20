import React, { useEffect, useState } from "react";
import axios from "axios";

const Country = ({ country }) => {
  console.log(country)
  return <>
  <h1>{country.name}</h1>
  </>;
};

const Countries = ({ countries }) => {
  if (countries.length === 0) return <p>No results for term.</p>;
  if (countries.length === 1) return <Country country={countries} />;
  if (countries.length > 10)
    return <p>Too many matches, specify another filter</p>;

  return (
    <>
      <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </>
  );
};

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [country, setCountry] = useState("");

  const hook = () => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountries(response.data);
    });
  };

  useEffect(hook, []);

  const handleChangeCountry = (e) => {
    const countryTerm = e.target.value.toLowerCase();
    setCountry(countryTerm);
    setFilteredCountries(() =>
      countries.filter(
        (country) => country.name.toLowerCase().search(countryTerm) >= 0
      )
    );
  };

  return (
    <>
      <input onChange={handleChangeCountry} value={country} />
      {country && <Countries countries={filteredCountries} />}
    </>
  );
};

export default App;
