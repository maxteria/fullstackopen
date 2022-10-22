import React from "react";

const SearchBox = ({ handleChange, value }) => {
  return (
    <>
      <label>
        Find countries <input onChange={handleChange} value={value} />
      </label>
    </>
  );
};

export default SearchBox;
