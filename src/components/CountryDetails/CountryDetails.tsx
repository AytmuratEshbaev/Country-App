import './CountryDetails.css';
import {useParams} from 'react-router';
import { useSelector } from 'react-redux/es/exports';
import {LOAD_COUNTRY_DETAIL} from '../../Redux/action';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';


 function CountryDetails() {
  let params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_COUNTRY_DETAIL, payload: params.countryName });
  },[])

  // let state = useSelector((state: any) =>  state.detail.data);
  // const data = state[0];

  // console.log(data);
  
  

  
  
  

  
  return <div className='countryDetails'>
    <div className='countryDetails__control'>
      <button>Back</button>
    </div>
    <div className='countryDetails__block'>
      <img src="#" alt="flag" className="countryDetails__img" />
      <div className="countryDetails__info">
        {/* <h2>{data.name.common}</h2> */}
        <div className="countryDetails__data">
          {/* <p>Name: {data.name.nativeName.common}</p>
          <p>Population: {data.population}</p>
          <p>Region: {data.region}</p>
          <p>Subregion: {data.subregion}</p>
          <p>Capital: {data.capital}</p>
          <p>Languages: {data.languages.ara} </p>
          <p>Currency:{data.currencies} </p> */}
          <div>
            <p>Border countries</p>

          </div>
        </div>
      </div>
    </div>
  </div>;
}


export default CountryDetails;