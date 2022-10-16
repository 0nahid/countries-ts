import { countryData } from "../../types";
import "./Country.css";

export default function Country(props: object, index: number) {
  console.log(props);

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
          <button
            style={{
              padding: "10px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
              outline: "none",
            }}
          >
            <a
              href={`https://en.wikipedia.org/wiki/${name.common}`}
              target="_blank"
              rel="noreferrer"
            >
              View Details
            </a>
          </button>
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
