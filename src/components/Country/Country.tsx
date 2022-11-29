import { Link } from "react-router-dom";
import "./Country.css";

export type CountryType = {
  imageSrc: string;
  name: string;
  population: string;
  region: string;
  capital: string;
  code: string
};

function Country(props: CountryType) {
  const { imageSrc, name, population, region, capital, code } = props;

  return (
    <Link className="country" to={`/${code}`}>
      <img src={imageSrc} alt="flag" className="country__flag" />
      <div className="country__info">
        <h2 className="country__name">{name}</h2>
        <p className="country__population">Population: {population}</p>
        <p className="country__region">Region: {region}</p>
        <p className="country__capital">Capital: {capital}</p>
      </div>
    </Link>
  );
}

export default Country;
