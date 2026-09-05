import { useState } from "react";
import type { CountryType } from "../type";
import "./country.css";


export interface CountryProps {
  country: CountryType;
  handleVisitedCountry: (country: CountryType) => void,
  handleVisitedFlag: (flag: string) => void,
}

export default function Country({ country, handleVisitedCountry, handleVisitedFlag }: CountryProps) {
  const [visited, setVisited] = useState<boolean>(false);

  const handleVisited = () => {
    //   setVisited(true)
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    setVisited(!visited);
    handleVisitedCountry(country)
  };

// const countryStyle = {
//     backgroundColor: visited ? 'lightgreen' : 'white'
// }

  return (
    <div className={`country ${visited ? "country-visited" : ""}`}>
      <h3>{country.name.common}</h3>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>Population: {country.population.population}</p>
      <p>Capital: {country.capital.capital}</p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Mark as Visited"}
      </button>
      <button
      onClick={() => handleVisitedFlag(country.flags.flags.png)}
      >add flag as visited</button>
    </div>
  );
}
