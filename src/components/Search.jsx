import { NativeSelect, Slider, TextField } from "@mui/material";
import React, { useState } from "react";

function Search() {
  const [search, setSearch] = useState({
    title: "",
    category: "",
    priceRange: [0, 100],
  });
  console.log(search);

  const handleSearch = (e) =>
    setSearch({ ...search, [e.target.name]: e.target.value });

  function valuetext() {
    return `${search.priceRange}°C`;
  }
  return (
    <div className="search-container">
      <h4>search for a specific items :</h4>
      <form>
        <div>
          <label htmlFor=""> product name</label>
          <TextField
            id="standard-basic"
            label="Standard"
            name="title"
            variant="standard"
            onChange={handleSearch}
          />
        </div>
        <div>
          <label htmlFor=""> products categories :</label>
          <NativeSelect
            defaultValue={30}
            onChange={handleSearch}
            inputProps={{
              name: "category",
              id: "uncontrolled-native",
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
        </div>

        <div>
          <label htmlFor=""> products price: </label>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={search.priceRange}
            onChange={handleSearch}
            name="priceRange"
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
