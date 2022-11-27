import { put, call, fork, take, all, takeEvery, takeLeading } from "redux-saga/effects";
import {
  LOAD_COUNTRY_DETAIL_SUCCESS,
  LOAD_ALL_DATA,
  LOAD_COUNTRY_DETAIL,
  LOAD_COUNTRY,
} from "../action";

export function* loadAllData(): any {
  yield take(LOAD_COUNTRY);
  const res = yield call(fetch, "https://restcountries.com/v3.1/all");
  const data = yield call([res, res.json]);
  yield put({ type: LOAD_ALL_DATA, payload: data });
}

export function* loadCountryDetail(): any {
  const action = yield take(LOAD_COUNTRY_DETAIL);
  const { payload } = action;
  const res = yield call(fetch, `https://restcountries.com/v3.1/name/${payload}?fields=name,capital,currencies,flags,borders,languages,region,subregion,population`);
  const data = yield call([res, res.json]);
  yield put({ type: LOAD_COUNTRY_DETAIL_SUCCESS, payload: data });
}

export default function* countrySaga(): any {
  yield fork(loadAllData);
  yield fork(loadCountryDetail);
}
