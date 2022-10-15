import { countryData } from "../../types";
import "./Country.css";


export default function Country(props: object, index: number) {
  console.log(props);

  // destructure props
  const { name, flags } = props as countryData;

  return (
    <>
      <div className="country">
        <img style={{
          width: "250px", height: "190px",
          backgroundPosition: 'center', backgroundSize: 'cover',
          padding: "10px", borderRadius: "10px"
        }}
          src={flags.svg} alt="" />
        <h2>{name.common}</h2>
      </div>
    </>
  );
}
