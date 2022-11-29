import "./CountryDetails.css";
import { useParams } from "react-router";
import { useSelector } from "react-redux/es/exports";
import { CHANGE_THEME, LOAD_COUNTRY_DETAIL } from "../../Redux/action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { selectTheme } from "../../Redux/selectors";

function CountryDetails() {
  let params = useParams();
  const dispatch = useDispatch();

  let theme = useSelector(selectTheme);

  const changeTheme = () => {
    let newTheme = theme === "lightMode" ? "darkMode" : "lightMode";
    dispatch({ type: CHANGE_THEME, payload: newTheme });
  };

  useEffect(() => {
    dispatch({ type: LOAD_COUNTRY_DETAIL, payload: params.countryName });
  }, []);

  const state = useSelector((state: any) => state.detail);

  return (
    <div className={`countryDetails ${theme}`}>
      <div className="countryDetails__control">
        <Link to='../'>Back</Link>
        <p className="theme" onClick={changeTheme}>
          {theme === "lightMode" ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
      {!state.loading && state.data && state.code === params.countryName ? (
        <div className="countryDetails__block">
          <img
            src={state?.data?.flags.png}
            alt="flag"
            className="countryDetails__img"
          />
          <div className="countryDetails__info">
            <h2>{state?.data?.name.common}</h2>
            <div className="countryDetails__data">
              <div className="data__block">
                <p>
                  <b>Name:</b> {state?.data?.name.official}
                </p>
                <p>
                  <b>Population:</b> {state?.data?.population}
                </p>
              </div>
              <div className="data__block">
                <p>
                  <b>Region:</b> {state?.data?.region}
                </p>
                <p>
                  <b>Subregion:</b> {state?.data?.subregion}
                </p>
              </div>
              <div className="data__block">
                <p>
                  <b>Capital:</b> {state?.data?.capital}
                </p>
                <p>
                  <b>Currency:</b> {Object.keys(state?.data?.currencies)[0]}{" "}
                </p>
              </div>
              <p>
                <b>Languages:</b>{" "}
                {Object.values(state?.data?.languages).join(", ")}{" "}
              </p>

              <div className="borders">
                <b>Border countries: </b>
                {state?.data?.borders.map((c: string, i: number) => (
                  <Link
                    key={i}
                    to={`/${c}`}
                    onClick={() =>
                      dispatch({ type: LOAD_COUNTRY_DETAIL, payload: c })
                    }
                  >
                    {c}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CountryDetails;
