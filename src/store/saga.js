import {  delay, takeLatest, all, call, put, select } from 'redux-saga/effects';
// For use real api call change process.env.NODE_ENV === 'development' into process.env.NODE_ENV !== 'development'


function* initSaga() {
    window.console.log('This saga should look for sessionId and make login if exists')
}

export default function* rootSaga() {
    yield all([
        initSaga(),
    ])
}