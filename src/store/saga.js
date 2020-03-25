import {  delay, takeLatest, all, call, put, select } from 'redux-saga/effects';
import types from './types';
// For use real api call change process.env.NODE_ENV === 'development' into process.env.NODE_ENV !== 'development'


function* initSaga() {
    window.console.log('This saga should look for sessionId and make login if exists')
}

function* watchLogin() {
    yield takeLatest(types.DO_LOGIN, function*({ payload }) {
        const { username, password } = payload;
        window.console.log(username, password);
    });
}

export default function* rootSaga() {
    yield all([
        initSaga(),
        watchLogin(),
    ])
}