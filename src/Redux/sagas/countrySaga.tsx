import {put, call, take, takeEvery} from "redux-saga/effects";
import {LOAD_COUNTRY_DETAIL_SUCCESS, LOAD_ALL_DATA, LOAD_COUNTRY_DETAIL} from "../action";

export function* loadAllData(): any {
  const res = yield call(fetch, "https://restcountries.com/v3.1/all");
  const data = yield call([res, res.json]);
  yield put({ type: LOAD_ALL_DATA, payload: data });
}


export function* loadCountryDetail(action:any): any {
  const {payload} = action;
  const res = yield call(
    fetch,
    `https://restcountries.com/v3.1/alpha/${payload}?fields=name,capital,currencies,flags,borders,languages,region,subregion,population`
  );
  const data = yield call([res, res.json]);
  yield put({ type: LOAD_COUNTRY_DETAIL_SUCCESS, payload: data });
}

export function* countrySaga(): any{
  yield takeEvery(LOAD_COUNTRY_DETAIL, loadCountryDetail);
}