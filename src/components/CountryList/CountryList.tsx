import "./CountryList.css";
import Country from "../Country/Country";
import { Link } from "react-router-dom";

type CountryList = {
  countries: any[];
};

function CountryList(props: CountryList) {
  const { countries } = props;
  return (
    <div className="countryList">
      {countries.map((country, index) => (
          <Country
            key={index}
            imageSrc={country.flags.png}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
      ))}
    </div>
  );
}

export default CountryList;
