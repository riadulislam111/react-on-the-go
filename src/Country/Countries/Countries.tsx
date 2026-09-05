import { use, useState } from "react";
import type { CountryType } from "../../type";
import Country from "../country";
import "./Countries.css";

export interface CountriesProps {
  countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {
  const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);

  const [visitedFlags, setVisitedFlags] = useState<string[]>([]);

  const countries = use(countriesPromise);
  // console.log(countries);

  const handleVisitedCountry = (country: CountryType): void => {
    // const newVisitedCountries = [...visitedCountries, country];
    // setVisitedCountries(newVisitedCountries);
      
    //bad way to check object/array check:
    // if(visitedCountries.includes(country)){

    // }
    // else{
    //     const newVisitedCountries = [...visitedCountries, country];
    //     setVisitedCountries(newVisitedCountries)
    // }


    //good way to check
     const exists = visitedCountries.find(c => c.ccn3.ccn3 === country.ccn3.ccn3);
     if(exists) {
        const remainingcountries = visitedCountries.filter (c => c.ccn3.ccn3 !== country.ccn3.ccn3);
        setVisitedCountries(remainingcountries)
     }
     else{
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
     }
  };

  const handleVisitedFlag = (flag: string): void => {
    // console.log('falg visited', flag);
    if (visitedFlags.includes(flag)) {
      const remainigFlags = visitedFlags.filter(f => f !== flag);
      setVisitedFlags(remainigFlags)
    } else {
      const newVisitedFlags = [...visitedFlags, flag];
      setVisitedFlags(newVisitedFlags);
    }
  };

  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      <h4>Visited Countries: {visitedCountries.length}</h4>
      <h4>Visited Flags: {visitedFlags.length}</h4>
      <div>
        <ul>
            {
            visitedCountries.map(country => <li key={country.ccn3.ccn3}>{country.name.common}</li>)
        }
        </ul>
      </div>
        <div className="visited-flags">
            {
                visitedFlags.map(flag => <img src = {flag} alt="Visited Flag"></img>)
            }
        </div>


      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
}
