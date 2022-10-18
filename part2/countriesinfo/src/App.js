import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState("");

  const hook = () => {
    axios.get("https://restcountries.com/v2/all").then((response) => {
      setCountries(response.data);
    });
  };

  useEffect(hook, []);

  const handleChangeCountry = (e) => {
    setNewCountry(e.target.value);
  };

  const filteredCountries = () =>
    countries.filter((country) => {
      console.log(country.name);
      let _country = country.name.toLowerCase();
      let _filter = newCountry.toLowerCase();

      return _country.search(_filter) >= 0;
    });

  return (
    <>
      <h1>Countries Info</h1>
      <input onChange={handleChangeCountry} />
      {filteredCountries().map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </>
  );
}

export default App;
