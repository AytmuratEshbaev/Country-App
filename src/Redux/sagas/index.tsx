import {all, spawn} from 'redux-saga/effects';
import countrySaga from './countrySaga';

export default function* rootSaga() {
    const sagas = [countrySaga];

    yield all(sagas.map(s => spawn(s)));
}