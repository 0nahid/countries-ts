import React from "react";
import { iCountry } from "../../types";
import "./Country.css";

export default function Country(props: iCountry) {
  const {
    name: { common },
    capital,
    population,
    area,
    flags: { svg },
  } = props;

  return (
    <>
      <div className="country">
        <div style={{ width: "20em", margin: "auto" }}>
          <img style={{ width: "100%" }} src={svg} alt={common} />
        </div>
        <div>
          <h2>Name : {common}</h2>
          <p>Capital : {capital}</p>
          <p>Population : {population}</p>
          <p>Area : {area}</p>
        </div>
      </div>
    </>
  );
}
