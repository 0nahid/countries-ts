import React from "react";
import { iCountry } from "../../types";

export default function Country(props: iCountry) {
  const {
    name: { common },
    capital,
    population,
  } = props;

  return (
    <>
      <div>
        <h2>Name : {common}</h2>
        <p>Capital : {capital}</p>
        <p>Population : {population}</p>
      </div>
    </>
  );
}
