import {  delay, takeLatest, all, call, put, select } from 'redux-saga/effects';
import types from './types';
import actions from "./actions";
// For use real api call change process.env.NODE_ENV === 'development' into process.env.NODE_ENV !== 'development'
const userApi = process.env.NODE_ENV === 'development' ? require('./api').default : require('./api').default; // Add mock data

// TODO add some isLoding attribute and display a Spinner.
function* initSaga() {
    yield window.console.log('This saga should look for sessionId and make login if exists')
    // IF user exist means the Cookie is stored and I can proceed with the Dashboard, setting user Auth
    const user = yield call(userApi.checkAuth);
    if (user) {
        yield put(actions.setUser({ user }));
    }
}

function* watchLogin() {
    yield takeLatest(types.DO_LOGIN, function*({ payload }) {
        const user = yield call(userApi.LoginUser, payload);
        console.log(user);
        if (user) {
            yield put(actions.setUser( { user }));
        }
    });
}

export default function* rootSaga() {
    yield all([
        initSaga(),
        watchLogin(),
    ])
}