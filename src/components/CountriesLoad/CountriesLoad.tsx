import React, { useEffect, useState } from "react";
import Loader from "../../Shared/Loader";
import { iCountry } from "../../types";
import Country from "../Country/Country";

export default function CountriesLoad() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  if (countries.length === 0) {
    return <Loader/>;
  }
  return (
    <div className="countries">
      <h1>Countries Load : {countries.length}</h1>
      {countries.map((country: iCountry) => (
        <Country
          name={country.name}
          capital={country.capital}
          region={country.region}
          population={country.population}
          area={country.area}
          flags={country.flags}
        />
      ))}
    </div>
  );
}
