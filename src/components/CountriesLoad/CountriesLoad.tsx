import React, { useEffect, useState } from "react";
import Loader from "../../Shared/Loader";
import Country from "../Country/Country";
import "./CountriesLoad.css";

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
    <div>
      <h1>Countries Load : {countries.length}</h1>
      <div className="countries">
        {countries.map((country,index:number) => (
          <Country key={index} 
            {...country as object}
          />
        ))}
      </div>
    </div>
  );
}
