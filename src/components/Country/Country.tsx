import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Country.css";
import { LOAD_COUNTRY_DETAIL } from "../../Redux/action";

export type CountryType = {
  imageSrc: string;
  name: string;
  population: string;
  region: string;
  capital: string;
};

function Country(props: CountryType) {
  const { imageSrc, name, population, region, capital } = props;

  const dispatch = useDispatch();
  const visit = () => {
    dispatch({ type: LOAD_COUNTRY_DETAIL, payload: name });
  };
  return (
    <Link className="country" to={`/${name}`} onClick={visit}>
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
