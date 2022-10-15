import React from "react";
import { countryData } from "../../types";
import "./Country.css";


export default function Country(props: object, index: number) {
  console.log(props);

  // destructure props
  const { name, flags } = props as countryData;

  return (
    <>
      <div className="country">
        <img style={{ width: "250px", 
         backgroundPosition: 'center', backgroundSize: 'cover' }} 
           src={flags.svg} alt="" />
        <h2>{name.common}</h2>
      </div>
    </>
  );
}
