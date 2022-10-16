import { countryData } from "../../types";
import "./Country.css";

export default function Country(props: object, index: number) {

  const { name, flags ,capital , region , population, area } = props as countryData;

  return (
    <>
      <div className="country">
        <div>
          <img
            style={{
              width: "250px",
              height: "190px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              padding: "10px",
              borderRadius: "10px",
            }}
            src={flags.svg}
            alt=""
          />
        </div>
        <div>
          <h2>Name : {name.common}</h2>
          <p>Capital : {capital}</p>
          <p>Region : {region}</p>
          <p>Population : {population}</p>
          <p>Area : {area}</p>
        </div>
      </div>
    </>
  );
}
