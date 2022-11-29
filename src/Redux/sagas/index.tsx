import {all, spawn} from 'redux-saga/effects';
import {loadAllData,countrySaga} from './countrySaga';

export default function* rootSaga() {
    const sagas = [loadAllData, countrySaga];
    yield all(sagas.map(s => spawn(s)));
}