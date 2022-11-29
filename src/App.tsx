import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import CountryList from "./components/CountryList";
import {
  selectTheme,
  selectRegion,
  selectCountriesData,
  searchValue,
} from "./Redux/selectors";
import {
  CHANGE_THEME,
  SELECT_REGION,
  SEARCH_VALUE,
  LOAD_COUNTRY,
} from "./Redux/action";
import { filterAndSortData } from "./functions/index";

function App() {
  let theme = useSelector(selectTheme);
  let region = useSelector(selectRegion);
  let search = useSelector(searchValue);

  let data = filterAndSortData(
    useSelector(selectCountriesData),
    region,
    search
  );
  
  let dispatch = useDispatch();

  useEffect(() => {    
    dispatch({ type: LOAD_COUNTRY });
  },[]);

  const changeTheme = () => {
    let newTheme = theme === "lightMode" ? "darkMode" : "lightMode";
    dispatch({ type: CHANGE_THEME, payload: newTheme });
  };

  const onSelect = (e: React.FormEvent) => {
    let val = (e.target as HTMLSelectElement).value;
    dispatch({ type: SELECT_REGION, payload: val });
  };

  const searching = (e: React.FormEvent) => {
    let val = (e.target as HTMLInputElement).value;
    dispatch({ type: SEARCH_VALUE, payload: val });
  };

  return (
    <div className={`App ${theme}`}>
      <div className="themeControl">
        <p className="theme" onClick={changeTheme}>
          {theme === "lightMode" ? "Light Mode" : "Dark Mode"}
        </p>
      </div>
      <div className="country__info">
        <div className="headerForm">
          <input
            type="search"
            name="search"
            id="search"
            onKeyUp={searching}
            defaultValue={search}
          />
          <select
            name="select"
            id="select"
            onInput={onSelect}
            defaultValue={region}
          >
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <CountryList countries={data} />
    </div>
  );
}

export default App;
