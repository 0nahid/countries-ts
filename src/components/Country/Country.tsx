import React from "react";
import { iCountry } from "../../types";

export default function Country(props: iCountry) {
  const {
    name: { common },
    capital,
  } = props;
  console.log(props);

  return (
    <>
      <div>
        <h1> {capital} </h1>
        <h2> {common} </h2>
      </div>
    </>
  );
}
