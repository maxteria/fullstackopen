import React, { useState, useEffect } from "react";
import axios from "axios";

const Wheater = ({ capital }) => {
  const [wheater, setWheater] = useState({});

  const updateWheater = () => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`
      )
      .then((response) => {
        setWheater(response.data);
      });
  };

  useEffect(updateWheater, [capital]);

  return (
    <>
      <h2>Wheater in {capital}</h2>
      <p>
        <strong>temperature: {wheater?.current?.temperature} celcius</strong>
      </p>
      <img
        src={wheater?.current?.weather_icons}
        alt={wheater?.current?.weather_descriptions}
      />
      <p>
        <strong>wind:</strong>
        {wheater?.current?.wind_speed} mph direction{" "}
        {wheater?.current?.wind_dir}
      </p>
    </>
  );
};

export default Wheater;